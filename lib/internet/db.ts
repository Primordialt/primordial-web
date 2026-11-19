import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";

import { readEnv } from "@/lib/env";
import { portalSchema } from "@/lib/internet/schema";

export type PortalDatabase = NeonHttpDatabase<typeof portalSchema>;

let database: PortalDatabase | undefined;

export function getDb(): PortalDatabase {
  if (database) return database;

  const url = readEnv("MI_DATABASE_URL", "DATABASE_URL");

  if (!url) {
    throw new Error(
      "MI_DATABASE_URL is not set. Add the Neon pooled connection string before using the Internet portal.",
    );
  }

  database = drizzle({ client: neon(url), schema: portalSchema });
  return database;
}
