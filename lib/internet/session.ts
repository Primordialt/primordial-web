import { eq } from "drizzle-orm";
import { getSessionCookie } from "better-auth/cookies";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  isPortalRole,
  portalHomeForRole,
  type PortalRole,
} from "@/lib/internet/access";
import { getAuth } from "@/lib/internet/auth";
import { getDb } from "@/lib/internet/db";
import { session } from "@/lib/internet/schema";

export type PortalPrincipal = {
  id: string;
  name: string;
  email: string;
  role: PortalRole;
};

async function revokeSessions(userId: string): Promise<void> {
  const auth = getAuth();

  try {
    await auth.api.signOut({ headers: await headers() });
  } catch {
    // The database delete below still makes the presented cookie unusable.
  }

  await getDb().delete(session).where(eq(session.userId, userId));
}

export async function getPortalContext(): Promise<PortalPrincipal | null> {
  const headerList = await headers();

  if (!getSessionCookie(new Headers(headerList))) {
    return null;
  }

  const auth = getAuth();
  const result = await auth.api.getSession({ headers: headerList });

  if (!result?.user) return null;

  const role = result.user.role;
  const status = result.user.status;

  if (!isPortalRole(role) || status !== "active") {
    await revokeSessions(result.user.id);
    return null;
  }

  return {
    id: result.user.id,
    name: result.user.name,
    email: result.user.email,
    role,
  };
}

export async function requireCustomer(): Promise<PortalPrincipal> {
  const principal = await getPortalContext();

  if (!principal) redirect("/internet/login");
  if (principal.role !== "customer") redirect(portalHomeForRole(principal.role));

  return principal;
}

export async function requireStaff(): Promise<PortalPrincipal> {
  const principal = await getPortalContext();

  if (!principal) redirect("/internet/login");
  if (principal.role === "customer") redirect("/internet/unauthorized");

  return principal;
}
