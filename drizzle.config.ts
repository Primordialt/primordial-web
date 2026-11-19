import { defineConfig } from "drizzle-kit";

import { loadLocalEnv } from "./scripts/load-env";

loadLocalEnv();

export default defineConfig({
  schema: "./lib/internet/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.MI_DATABASE_URL ||
      process.env.DATABASE_URL ||
      "postgresql://placeholder:placeholder@127.0.0.1:5432/placeholder",
  },
});
