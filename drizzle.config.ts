/**
 * Drizzle Kit Configuration
 *
 * Configuration for Drizzle migrations and schema management.
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 * @see https://orm.drizzle.team/kit-docs/config-reference
 */

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Schema location
  schema: "./lib/db/schema.ts",

  // Migrations output directory
  out: "./drizzle",

  // Database dialect
  dialect: "postgresql",

  // Database connection
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

  // Verbose logging during development
  verbose: true,

  // Strict mode for safer migrations
  strict: true,
});
