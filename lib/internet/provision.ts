import { desc, eq, inArray } from "drizzle-orm";
import { hashPassword } from "better-auth/crypto";

import {
  isAccountStatus,
  isPortalRole,
  type AccountStatus,
  type PortalRole,
} from "@/lib/internet/access";
import { getDb } from "@/lib/internet/db";
import { account, session, user } from "@/lib/internet/schema";

export class PortalAccountError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PortalAccountError";
  }
}

function errorText(error: unknown): string {
  if (error instanceof Error) {
    const cause = "cause" in error ? errorText(error.cause) : "";
    return `${error.message} ${cause}`;
  }

  return String(error);
}

function isUniqueViolation(error: unknown): boolean {
  const text = errorText(error).toLowerCase();
  return text.includes("23505") || text.includes("duplicate") || text.includes("unique");
}

export async function createPortalAccount(input: {
  name: string;
  email: string;
  password: string;
  role: PortalRole;
}): Promise<{ id: string; email: string; role: PortalRole }> {
  const db = getDb();
  const id = crypto.randomUUID();
  const now = new Date();
  const passwordHash = await hashPassword(input.password);

  try {
    await db.insert(user).values({
      id,
      name: input.name,
      email: input.email,
      emailVerified: true,
      role: input.role,
      status: "active",
      createdAt: now,
      updatedAt: now,
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      throw new PortalAccountError("An account with this email already exists.");
    }

    throw error;
  }

  try {
    await db.insert(account).values({
      id: crypto.randomUUID(),
      accountId: id,
      providerId: "credential",
      userId: id,
      password: passwordHash,
      createdAt: now,
      updatedAt: now,
    });
  } catch (error) {
    await db.delete(user).where(eq(user.id, id));
    throw error;
  }

  return { id, email: input.email, role: input.role };
}

export async function setAccountStatus(
  userId: string,
  status: AccountStatus,
): Promise<void> {
  const db = getDb();

  await db
    .update(user)
    .set({ status, updatedAt: new Date() })
    .where(eq(user.id, userId));

  if (status === "disabled") {
    await db.delete(session).where(eq(session.userId, userId));
  }
}

export async function listManagedAccounts(roles: Array<"staff" | "customer">) {
  if (roles.length === 0) return [];

  const rows = await getDb()
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
    })
    .from(user)
    .where(inArray(user.role, roles))
    .orderBy(desc(user.createdAt))
    .limit(100);

  return rows.filter(
    (row): row is typeof row & { role: "staff" | "customer"; status: "active" | "disabled" } =>
      isPortalRole(row.role) &&
      isAccountStatus(row.status) &&
      roles.includes(row.role as "staff" | "customer"),
  );
}
