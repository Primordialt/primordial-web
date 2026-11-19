"use server";

import { eq } from "drizzle-orm";

import {
  authorizeProvision,
  authorizeStatusChange,
  isAccountStatus,
  isPortalRole,
} from "@/lib/internet/access";
import { getDb } from "@/lib/internet/db";
import {
  createPortalAccount,
  PortalAccountError,
  setAccountStatus,
} from "@/lib/internet/provision";
import { user } from "@/lib/internet/schema";
import { requireStaff } from "@/lib/internet/session";
import { provisionInputSchema, statusInputSchema } from "@/lib/internet/validation";

export type PortalActionState = {
  error?: string;
  success?: string;
};

export async function provisionAccount(
  _previous: PortalActionState,
  formData: FormData,
): Promise<PortalActionState> {
  const actor = await requireStaff();
  const parsed = provisionInputSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role") ?? "customer",
  });

  if (!parsed.success) {
    return {
      error: "Enter a full name, a valid email address, and a password of at least 12 characters.",
    };
  }

  const decision = authorizeProvision(actor.role, parsed.data.role);

  if (!decision.ok) return { error: decision.error };

  try {
    await createPortalAccount({
      name: parsed.data.name,
      email: parsed.data.email,
      password: parsed.data.password,
      role: decision.role,
    });
  } catch (error) {
    if (error instanceof PortalAccountError) return { error: error.message };
    console.error("[internet] Account provisioning failed.");
    return { error: "The account could not be created." };
  }

  return {
    success: "Account created. Share the password with the account holder through a trusted channel.",
  };
}

export async function updateAccountStatus(
  _previous: PortalActionState,
  formData: FormData,
): Promise<PortalActionState> {
  const actor = await requireStaff();
  const parsed = statusInputSchema.safeParse({
    userId: formData.get("userId"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return { error: "That account update could not be applied." };
  }

  const [target] = await getDb()
    .select({
      id: user.id,
      role: user.role,
      status: user.status,
    })
    .from(user)
    .where(eq(user.id, parsed.data.userId))
    .limit(1);

  if (!target || !isPortalRole(target.role) || !isAccountStatus(target.status)) {
    return { error: "That account could not be found." };
  }

  const decision = authorizeStatusChange({
    actorId: actor.id,
    actorRole: actor.role,
    targetId: target.id,
    targetRole: target.role,
    nextStatus: parsed.data.status,
  });

  if (!decision.ok) return { error: decision.error };

  if (target.status === decision.status) {
    return { success: "The account status is already set." };
  }

  await setAccountStatus(target.id, decision.status);

  return {
    success:
      decision.status === "disabled"
        ? "Account disabled. Existing sessions for that account are no longer valid."
        : "Account enabled.",
  };
}
