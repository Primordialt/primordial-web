import { relations, sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  check,
  date,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const timestamps = {
  createdAt: timestamp("createdAt", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
};

/**
 * Portal identity. The password hash lives on `account.password` for the
 * credential provider, never on this table and never in plaintext.
 */
export const user = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("emailVerified").default(false).notNull(),
    image: text("image"),
    role: text("role").default("customer").notNull(),
    status: text("status").default("active").notNull(),
    lastLoginAt: timestamp("lastLoginAt", { withTimezone: true, mode: "date" }),
    ...timestamps,
  },
  (table) => [
    check(
      "user_email_normalized",
      sql`${table.email} = lower(${table.email})`,
    ),
    check(
      "user_role_check",
      sql`${table.role} in ('admin', 'staff', 'customer')`,
    ),
    check("user_status_check", sql`${table.status} in ('active', 'disabled')`),
  ],
);

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expiresAt", { withTimezone: true, mode: "date" }).notNull(),
    token: text("token").notNull().unique(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    ...timestamps,
  },
  (table) => [
    index("session_user_id_idx").on(table.userId),
  ],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    idToken: text("idToken"),
    accessTokenExpiresAt: timestamp("accessTokenExpiresAt", {
      withTimezone: true,
      mode: "date",
    }),
    refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt", {
      withTimezone: true,
      mode: "date",
    }),
    scope: text("scope"),
    password: text("password"),
    ...timestamps,
  },
  (table) => [
    uniqueIndex("account_provider_account_unique").on(
      table.providerId,
      table.accountId,
    ),
    index("account_user_id_idx").on(table.userId),
  ],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt", { withTimezone: true, mode: "date" }).notNull(),
    ...timestamps,
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const rateLimit = pgTable(
  "rateLimit",
  {
    id: text("id").primaryKey(),
    key: text("key").notNull().unique(),
    count: integer("count").notNull(),
    lastRequest: bigint("lastRequest", { mode: "number" }).notNull(),
  },
);

/**
 * Staff-maintained service file for a customer login.
 * Starlink account references are typed by staff. This app does not call Starlink.
 */
export const serviceProfile = pgTable("serviceProfile", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => user.id, { onDelete: "cascade" }),
  phone: text("phone"),
  serviceAddress: text("serviceAddress"),
  starlinkAccountRef: text("starlinkAccountRef"),
  notes: text("notes"),
  ...timestamps,
});

export const installation = pgTable(
  "installation",
  {
    id: text("id").primaryKey(),
    customerUserId: text("customerUserId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    siteName: text("siteName").notNull(),
    address: text("address").notNull(),
    kitSerial: text("kitSerial"),
    installedOn: date("installedOn", { mode: "string" }),
    status: text("status").default("planned").notNull(),
    notes: text("notes"),
    ...timestamps,
  },
  (table) => [
    index("installation_customer_user_id_idx").on(table.customerUserId),
    check(
      "installation_status_check",
      sql`${table.status} in ('planned', 'installed', 'inactive')`,
    ),
  ],
);

export const serviceRecord = pgTable(
  "serviceRecord",
  {
    id: text("id").primaryKey(),
    installationId: text("installationId")
      .notNull()
      .references(() => installation.id, { onDelete: "cascade" }),
    performedOn: date("performedOn", { mode: "string" }).notNull(),
    summary: text("summary").notNull(),
    details: text("details"),
    recordedByUserId: text("recordedByUserId").references(() => user.id, {
      onDelete: "set null",
    }),
    ...timestamps,
  },
  (table) => [index("service_record_installation_id_idx").on(table.installationId)],
);

export const userRelations = relations(user, ({ many, one }) => ({
  sessions: many(session),
  accounts: many(account),
  serviceProfile: one(serviceProfile, {
    fields: [user.id],
    references: [serviceProfile.userId],
  }),
  installations: many(installation),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const serviceProfileRelations = relations(serviceProfile, ({ one }) => ({
  user: one(user, {
    fields: [serviceProfile.userId],
    references: [user.id],
  }),
}));

export const installationRelations = relations(installation, ({ one, many }) => ({
  customer: one(user, {
    fields: [installation.customerUserId],
    references: [user.id],
  }),
  records: many(serviceRecord),
}));

export const serviceRecordRelations = relations(serviceRecord, ({ one }) => ({
  installation: one(installation, {
    fields: [serviceRecord.installationId],
    references: [installation.id],
  }),
  recordedBy: one(user, {
    fields: [serviceRecord.recordedByUserId],
    references: [user.id],
  }),
}));

export const authSchema = {
  user,
  session,
  account,
  verification,
  rateLimit,
  userRelations,
  sessionRelations,
  accountRelations,
};

export const portalSchema = {
  ...authSchema,
  serviceProfile,
  installation,
  serviceRecord,
  serviceProfileRelations,
  installationRelations,
  serviceRecordRelations,
};
