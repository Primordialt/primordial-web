export const portalRoles = ["admin", "staff", "customer"] as const;
export const accountStatuses = ["active", "disabled"] as const;
export const provisionableRoles = ["staff", "customer"] as const;

export type PortalRole = (typeof portalRoles)[number];
export type AccountStatus = (typeof accountStatuses)[number];
export type ProvisionableRole = (typeof provisionableRoles)[number];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isPortalRole(value: unknown): value is PortalRole {
  return typeof value === "string" && portalRoles.includes(value as PortalRole);
}

export function isAccountStatus(value: unknown): value is AccountStatus {
  return (
    typeof value === "string" && accountStatuses.includes(value as AccountStatus)
  );
}

export function normalizeEmail(value: string): string | null {
  const email = value.trim().toLowerCase();

  if (email.length < 3 || email.length > 254 || !emailPattern.test(email)) {
    return null;
  }

  return email;
}

export function portalHomeForRole(role: PortalRole): "/internet/admin" | "/internet/dashboard" {
  return role === "customer" ? "/internet/dashboard" : "/internet/admin";
}

export function authorizeProvision(
  actorRole: PortalRole,
  requestedRole: string,
): { ok: true; role: ProvisionableRole } | { ok: false; error: string } {
  if (actorRole === "customer") {
    return { ok: false, error: "You do not have permission to create accounts." };
  }

  if (requestedRole === "admin") {
    return {
      ok: false,
      error: "Administrator accounts cannot be created from the portal.",
    };
  }

  if (requestedRole !== "staff" && requestedRole !== "customer") {
    return { ok: false, error: "Choose a valid account role." };
  }

  if (actorRole === "staff" && requestedRole !== "customer") {
    return { ok: false, error: "You can only create customer accounts." };
  }

  return { ok: true, role: requestedRole };
}

export function authorizeStatusChange(input: {
  actorId: string;
  actorRole: PortalRole;
  targetId: string;
  targetRole: PortalRole;
  nextStatus: string;
}): { ok: true; status: AccountStatus } | { ok: false; error: string } {
  if (!isAccountStatus(input.nextStatus)) {
    return { ok: false, error: "Choose a valid account status." };
  }

  if (input.actorId === input.targetId) {
    return { ok: false, error: "You cannot change your own account status." };
  }

  if (input.actorRole === "customer") {
    return { ok: false, error: "You do not have permission to change accounts." };
  }

  if (input.targetRole === "admin") {
    return { ok: false, error: "Administrator accounts cannot be changed here." };
  }

  if (input.actorRole === "staff" && input.targetRole !== "customer") {
    return { ok: false, error: "You can only update customer accounts." };
  }

  return { ok: true, status: input.nextStatus };
}

export function visibleAccountRoles(
  actorRole: PortalRole,
): Array<"staff" | "customer"> | null {
  if (actorRole === "admin") return ["staff", "customer"];
  if (actorRole === "staff") return ["customer"];
  return null;
}

export function canManageServiceFile(actorRole: PortalRole): boolean {
  return actorRole === "admin" || actorRole === "staff";
}

/** Rewrite public sign-in failures so they do not reveal which check failed. */
export function signInFailureMessage(
  status: number,
): { status: number; message: string } | null {
  if (status < 400 || status === 429) return null;

  if (status === 400) {
    return {
      status: 400,
      message: "Enter a valid email address and password.",
    };
  }

  return {
    status: 401,
    message: "Invalid email or password.",
  };
}
