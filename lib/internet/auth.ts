import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { eq } from "drizzle-orm";

import { readEnv } from "@/lib/env";
import { getDb } from "@/lib/internet/db";
import {
  account,
  rateLimit,
  session,
  user,
  verification,
} from "@/lib/internet/schema";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "@/lib/internet/validation";

const SESSION_SECONDS = 60 * 60 * 12;

function requireAuthSecret(): string {
  const secret = readEnv("MI_AUTH_SECRET", "AUTH_SECRET");

  if (!secret || secret.length < 32) {
    throw new Error(
      "MI_AUTH_SECRET must be a random string of at least 32 characters.",
    );
  }

  return secret;
}

function authBaseUrl(): string {
  const raw =
    readEnv("MI_AUTH_URL", "BETTER_AUTH_URL", "MI_SITE_URL", "NEXT_PUBLIC_SITE_URL") ??
    "http://localhost:3000";

  try {
    return new URL(raw).origin;
  } catch {
    return raw;
  }
}

function createAuth() {
  return betterAuth({
    appName: "Primordial Technologies Limited Internet Services",
    baseURL: authBaseUrl(),
    secret: requireAuthSecret(),
    trustedOrigins: [authBaseUrl(), "http://localhost:3000"],
    database: drizzleAdapter(getDb(), {
      provider: "pg",
      camelCase: true,
      schema: {
        user,
        session,
        account,
        verification,
        rateLimit,
      },
    }),
    emailAndPassword: {
      enabled: true,
      disableSignUp: true,
      minPasswordLength: MIN_PASSWORD_LENGTH,
      maxPasswordLength: MAX_PASSWORD_LENGTH,
    },
    session: {
      expiresIn: SESSION_SECONDS,
      updateAge: 60 * 60,
    },
    user: {
      additionalFields: {
        role: {
          type: "string",
          required: true,
          defaultValue: "customer",
          input: false,
        },
        status: {
          type: "string",
          required: true,
          defaultValue: "active",
          input: false,
        },
        lastLoginAt: {
          type: "date",
          required: false,
          input: false,
        },
      },
    },
    rateLimit: {
      enabled: true,
      storage: "database",
      window: 60,
      max: 30,
      customRules: {
        "/sign-in/email": { window: 15 * 60, max: 8 },
        "/sign-up/email": { window: 60 * 60, max: 3 },
      },
    },
    advanced: {
      useSecureCookies: process.env.NODE_ENV === "production",
      defaultCookieAttributes: {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      },
    },
    databaseHooks: {
      user: {
        update: {
          before: async (data) => {
            const next = { ...data } as Record<string, unknown>;
            delete next.role;
            delete next.status;
            delete next.lastLoginAt;
            delete next.email;
            return { data: next };
          },
        },
      },
      session: {
        create: {
          before: async (sessionData) => {
            const userId = sessionData.userId;

            if (typeof userId !== "string" || userId.length === 0) {
              return false;
            }

            const [record] = await getDb()
              .select({ status: user.status })
              .from(user)
              .where(eq(user.id, userId))
              .limit(1);

            if (!record || record.status !== "active") {
              return false;
            }

            await getDb()
              .update(user)
              .set({ lastLoginAt: new Date(), updatedAt: new Date() })
              .where(eq(user.id, userId));

            return { data: sessionData };
          },
        },
      },
    },
    plugins: [nextCookies()],
  });
}

type AuthInstance = ReturnType<typeof createAuth>;

let authInstance: AuthInstance | undefined;

export function getAuth(): AuthInstance {
  if (!authInstance) {
    authInstance = createAuth();
  }

  return authInstance;
}
