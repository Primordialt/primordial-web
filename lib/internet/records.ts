import { and, desc, eq, inArray } from "drizzle-orm";

import { canManageServiceFile, type PortalRole } from "@/lib/internet/access";
import { getDb } from "@/lib/internet/db";
import { installation, serviceProfile, serviceRecord, user } from "@/lib/internet/schema";
import type { InstallationStatus } from "@/lib/internet/validation";

export class ServiceRecordError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ServiceRecordError";
  }
}

export type ServiceVisit = {
  id: string;
  performedOn: string;
  summary: string;
  details: string | null;
};

export type ServiceInstallation = {
  id: string;
  siteName: string;
  address: string;
  kitSerial: string | null;
  installedOn: string | null;
  status: InstallationStatus;
  notes: string | null;
  visits: ServiceVisit[];
};

export type ServiceFile = {
  customer: {
    id: string;
    name: string;
    email: string;
    status: string;
  };
  profile: {
    phone: string | null;
    serviceAddress: string | null;
    starlinkAccountRef: string | null;
    notes: string | null;
  } | null;
  installations: ServiceInstallation[];
};

function assertStaffManager(actorRole: PortalRole) {
  if (!canManageServiceFile(actorRole)) {
    throw new ServiceRecordError("You do not have permission to change service records.");
  }
}

async function requireCustomerUser(customerUserId: string) {
  const [customer] = await getDb()
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    })
    .from(user)
    .where(eq(user.id, customerUserId))
    .limit(1);

  if (!customer || customer.role !== "customer") {
    throw new ServiceRecordError("That customer account could not be found.");
  }

  return customer;
}

async function requireOwnedInstallation(customerUserId: string, installationId: string) {
  const [row] = await getDb()
    .select({ id: installation.id })
    .from(installation)
    .where(
      and(eq(installation.id, installationId), eq(installation.customerUserId, customerUserId)),
    )
    .limit(1);

  if (!row) {
    throw new ServiceRecordError("That installation could not be found for this customer.");
  }

  return row;
}

export async function getServiceFile(customerUserId: string): Promise<ServiceFile | null> {
  const [customer] = await getDb()
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    })
    .from(user)
    .where(eq(user.id, customerUserId))
    .limit(1);

  if (!customer || customer.role !== "customer") return null;

  const [profile] = await getDb()
    .select({
      phone: serviceProfile.phone,
      serviceAddress: serviceProfile.serviceAddress,
      starlinkAccountRef: serviceProfile.starlinkAccountRef,
      notes: serviceProfile.notes,
    })
    .from(serviceProfile)
    .where(eq(serviceProfile.userId, customer.id))
    .limit(1);

  const sites = await getDb()
    .select({
      id: installation.id,
      siteName: installation.siteName,
      address: installation.address,
      kitSerial: installation.kitSerial,
      installedOn: installation.installedOn,
      status: installation.status,
      notes: installation.notes,
    })
    .from(installation)
    .where(eq(installation.customerUserId, customer.id))
    .orderBy(desc(installation.createdAt))
    .limit(50);

  const siteIds = sites.map((site) => site.id);
  const visitRows =
    siteIds.length === 0
      ? []
      : await getDb()
          .select({
            id: serviceRecord.id,
            installationId: serviceRecord.installationId,
            performedOn: serviceRecord.performedOn,
            summary: serviceRecord.summary,
            details: serviceRecord.details,
          })
          .from(serviceRecord)
          .where(inArray(serviceRecord.installationId, siteIds))
          .orderBy(desc(serviceRecord.performedOn));

  const installations: ServiceInstallation[] = sites.flatMap((site) => {
    if (
      site.status !== "planned" &&
      site.status !== "installed" &&
      site.status !== "inactive"
    ) {
      return [];
    }

    return [
      {
        ...site,
        status: site.status,
        visits: visitRows
          .filter((visit) => visit.installationId === site.id)
          .slice(0, 50)
          .map((visit) => ({
            id: visit.id,
            performedOn: visit.performedOn,
            summary: visit.summary,
            details: visit.details,
          })),
      },
    ];
  });

  return {
    customer: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      status: customer.status,
    },
    profile: profile ?? null,
    installations,
  };
}

export async function saveServiceProfile(
  actorRole: PortalRole,
  input: {
    customerUserId: string;
    phone: string | null;
    serviceAddress: string | null;
    starlinkAccountRef: string | null;
    notes: string | null;
  },
) {
  assertStaffManager(actorRole);
  await requireCustomerUser(input.customerUserId);
  const now = new Date();

  await getDb()
    .insert(serviceProfile)
    .values({
      id: crypto.randomUUID(),
      userId: input.customerUserId,
      phone: input.phone,
      serviceAddress: input.serviceAddress,
      starlinkAccountRef: input.starlinkAccountRef,
      notes: input.notes,
      createdAt: now,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: serviceProfile.userId,
      set: {
        phone: input.phone,
        serviceAddress: input.serviceAddress,
        starlinkAccountRef: input.starlinkAccountRef,
        notes: input.notes,
        updatedAt: now,
      },
    });
}

export async function saveInstallation(
  actorRole: PortalRole,
  input: {
    customerUserId: string;
    installationId?: string;
    siteName: string;
    address: string;
    kitSerial: string | null;
    installedOn: string | null;
    status: InstallationStatus;
    notes: string | null;
  },
) {
  assertStaffManager(actorRole);
  await requireCustomerUser(input.customerUserId);
  const now = new Date();

  if (input.installationId) {
    await requireOwnedInstallation(input.customerUserId, input.installationId);
    await getDb()
      .update(installation)
      .set({
        siteName: input.siteName,
        address: input.address,
        kitSerial: input.kitSerial,
        installedOn: input.installedOn,
        status: input.status,
        notes: input.notes,
        updatedAt: now,
      })
      .where(eq(installation.id, input.installationId));
    return;
  }

  await getDb().insert(installation).values({
    id: crypto.randomUUID(),
    customerUserId: input.customerUserId,
    siteName: input.siteName,
    address: input.address,
    kitSerial: input.kitSerial,
    installedOn: input.installedOn,
    status: input.status,
    notes: input.notes,
    createdAt: now,
    updatedAt: now,
  });
}

export async function removeInstallation(
  actorRole: PortalRole,
  customerUserId: string,
  installationId: string,
) {
  assertStaffManager(actorRole);
  await requireCustomerUser(customerUserId);
  await requireOwnedInstallation(customerUserId, installationId);
  await getDb().delete(installation).where(eq(installation.id, installationId));
}

export async function addServiceVisit(
  actorRole: PortalRole,
  actorId: string,
  input: {
    customerUserId: string;
    installationId: string;
    performedOn: string;
    summary: string;
    details: string | null;
  },
) {
  assertStaffManager(actorRole);
  await requireCustomerUser(input.customerUserId);
  await requireOwnedInstallation(input.customerUserId, input.installationId);
  const now = new Date();

  await getDb().insert(serviceRecord).values({
    id: crypto.randomUUID(),
    installationId: input.installationId,
    performedOn: input.performedOn,
    summary: input.summary,
    details: input.details,
    recordedByUserId: actorId,
    createdAt: now,
    updatedAt: now,
  });
}

export async function removeServiceVisit(
  actorRole: PortalRole,
  customerUserId: string,
  recordId: string,
) {
  assertStaffManager(actorRole);
  await requireCustomerUser(customerUserId);

  const [row] = await getDb()
    .select({ id: serviceRecord.id, installationId: serviceRecord.installationId })
    .from(serviceRecord)
    .where(eq(serviceRecord.id, recordId))
    .limit(1);

  if (!row) {
    throw new ServiceRecordError("That service visit could not be found.");
  }

  await requireOwnedInstallation(customerUserId, row.installationId);
  await getDb().delete(serviceRecord).where(eq(serviceRecord.id, recordId));
}
