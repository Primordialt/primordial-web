"use server";

import { revalidatePath } from "next/cache";

import { ServiceRecordError, addServiceVisit, removeInstallation, removeServiceVisit, saveInstallation, saveServiceProfile } from "@/lib/internet/records";
import { requireStaff } from "@/lib/internet/session";
import {
  installationInputSchema,
  recordIdInputSchema,
  serviceProfileInputSchema,
  serviceVisitInputSchema,
} from "@/lib/internet/validation";

export type ServiceActionState = {
  error?: string;
  success?: string;
};

function refresh(customerUserId: string) {
  revalidatePath("/internet/admin");
  revalidatePath(`/internet/admin/customers/${customerUserId}`);
  revalidatePath("/internet/dashboard");
}

export async function saveProfile(
  _previous: ServiceActionState,
  formData: FormData,
): Promise<ServiceActionState> {
  const actor = await requireStaff();
  const parsed = serviceProfileInputSchema.safeParse({
    customerUserId: formData.get("customerUserId"),
    phone: formData.get("phone") ?? "",
    serviceAddress: formData.get("serviceAddress") ?? "",
    starlinkAccountRef: formData.get("starlinkAccountRef") ?? "",
    notes: formData.get("notes") ?? "",
  });

  if (!parsed.success) {
    return { error: "Check the phone, address, and notes, then try again." };
  }

  try {
    await saveServiceProfile(actor.role, parsed.data);
  } catch (error) {
    if (error instanceof ServiceRecordError) return { error: error.message };
    console.error("[internet] Service profile save failed.");
    return { error: "The service profile could not be saved." };
  }

  refresh(parsed.data.customerUserId);
  return { success: "Service profile saved." };
}

export async function saveSite(
  _previous: ServiceActionState,
  formData: FormData,
): Promise<ServiceActionState> {
  const actor = await requireStaff();
  const parsed = installationInputSchema.safeParse({
    customerUserId: formData.get("customerUserId"),
    installationId: formData.get("installationId") ?? "",
    siteName: formData.get("siteName"),
    address: formData.get("address"),
    kitSerial: formData.get("kitSerial") ?? "",
    installedOn: formData.get("installedOn") ?? "",
    status: formData.get("status"),
    notes: formData.get("notes") ?? "",
  });

  if (!parsed.success) {
    return { error: "Enter a site name, address, and a valid status." };
  }

  try {
    await saveInstallation(actor.role, parsed.data);
  } catch (error) {
    if (error instanceof ServiceRecordError) return { error: error.message };
    console.error("[internet] Installation save failed.");
    return { error: "The installation could not be saved." };
  }

  refresh(parsed.data.customerUserId);
  return { success: parsed.data.installationId ? "Installation updated." : "Installation added." };
}

export async function deleteSite(
  _previous: ServiceActionState,
  formData: FormData,
): Promise<ServiceActionState> {
  const actor = await requireStaff();
  const parsed = recordIdInputSchema.safeParse({
    customerUserId: formData.get("customerUserId"),
    recordId: formData.get("installationId"),
  });

  if (!parsed.success) return { error: "That installation could not be removed." };

  try {
    await removeInstallation(actor.role, parsed.data.customerUserId, parsed.data.recordId);
  } catch (error) {
    if (error instanceof ServiceRecordError) return { error: error.message };
    console.error("[internet] Installation delete failed.");
    return { error: "The installation could not be removed." };
  }

  refresh(parsed.data.customerUserId);
  return { success: "Installation removed." };
}

export async function addVisit(
  _previous: ServiceActionState,
  formData: FormData,
): Promise<ServiceActionState> {
  const actor = await requireStaff();
  const parsed = serviceVisitInputSchema.safeParse({
    customerUserId: formData.get("customerUserId"),
    installationId: formData.get("installationId"),
    performedOn: formData.get("performedOn"),
    summary: formData.get("summary"),
    details: formData.get("details") ?? "",
  });

  if (!parsed.success) {
    return { error: "Enter the visit date and a short summary." };
  }

  try {
    await addServiceVisit(actor.role, actor.id, parsed.data);
  } catch (error) {
    if (error instanceof ServiceRecordError) return { error: error.message };
    console.error("[internet] Service visit save failed.");
    return { error: "The service visit could not be saved." };
  }

  refresh(parsed.data.customerUserId);
  return { success: "Service visit recorded." };
}

export async function deleteVisit(
  _previous: ServiceActionState,
  formData: FormData,
): Promise<ServiceActionState> {
  const actor = await requireStaff();
  const parsed = recordIdInputSchema.safeParse({
    customerUserId: formData.get("customerUserId"),
    recordId: formData.get("recordId"),
  });

  if (!parsed.success) return { error: "That service visit could not be removed." };

  try {
    await removeServiceVisit(actor.role, parsed.data.customerUserId, parsed.data.recordId);
  } catch (error) {
    if (error instanceof ServiceRecordError) return { error: error.message };
    console.error("[internet] Service visit delete failed.");
    return { error: "The service visit could not be removed." };
  }

  refresh(parsed.data.customerUserId);
  return { success: "Service visit removed." };
}
