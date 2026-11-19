import { z } from "zod";

export const MIN_PASSWORD_LENGTH = 12;
export const MAX_PASSWORD_LENGTH = 128;

export const provisionInputSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().toLowerCase().email().max(254),
  password: z.string().min(MIN_PASSWORD_LENGTH).max(MAX_PASSWORD_LENGTH),
  role: z.enum(["admin", "staff", "customer"]),
});

export const statusInputSchema = z.object({
  userId: z.string().trim().min(1).max(128),
  status: z.enum(["active", "disabled"]),
});

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((value) => (value.length === 0 ? null : value));

const calendarDate = z
  .string()
  .trim()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date.");

const optionalCalendarDate = z
  .string()
  .trim()
  .transform((value) => (value.length === 0 ? null : value))
  .refine(
    (value) => value === null || /^\d{4}-\d{2}-\d{2}$/.test(value),
    "Enter a valid date.",
  );

export const installationStatuses = ["planned", "installed", "inactive"] as const;
export type InstallationStatus = (typeof installationStatuses)[number];

export const serviceProfileInputSchema = z.object({
  customerUserId: z.string().trim().min(1).max(128),
  phone: optionalText(30),
  serviceAddress: optionalText(300),
  starlinkAccountRef: optionalText(120),
  notes: optionalText(2000),
});

export const installationInputSchema = z.object({
  customerUserId: z.string().trim().min(1).max(128),
  installationId: z
    .string()
    .trim()
    .max(128)
    .optional()
    .transform((value) => (value ? value : undefined)),
  siteName: z.string().trim().min(2).max(120),
  address: z.string().trim().min(2).max(300),
  kitSerial: optionalText(120),
  installedOn: optionalCalendarDate,
  status: z.enum(installationStatuses),
  notes: optionalText(2000),
});

export const serviceVisitInputSchema = z.object({
  customerUserId: z.string().trim().min(1).max(128),
  installationId: z.string().trim().min(1).max(128),
  performedOn: calendarDate,
  summary: z.string().trim().min(2).max(200),
  details: optionalText(2000),
});

export const recordIdInputSchema = z.object({
  customerUserId: z.string().trim().min(1).max(128),
  recordId: z.string().trim().min(1).max(128),
});
