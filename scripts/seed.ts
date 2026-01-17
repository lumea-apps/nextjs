/**
 * Database Seed Script
 *
 * Idempotent seed script for development and testing.
 * Safe to run multiple times - uses upsert/conflict handling.
 *
 * Usage:
 *   bun run db:seed
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 */

import { db, pool } from "../lib/db";
import { users } from "../lib/db/schema";
import { sql } from "drizzle-orm";

async function seed() {
  console.log("Seeding database...");

  try {
    // ==========================================================================
    // Example: Seed a test user (remove or modify as needed)
    // ==========================================================================
    // This demonstrates idempotent seeding using ON CONFLICT DO NOTHING.
    // The user is only created if it doesn't already exist.

    // await db
    //   .insert(users)
    //   .values({
    //     name: "Test User",
    //     email: "test@example.com",
    //     emailVerified: true,
    //   })
    //   .onConflictDoNothing({ target: users.email });

    // console.log("- Test user seeded");

    // ==========================================================================
    // Add your seed data below
    // ==========================================================================
    // Example patterns:
    //
    // Single record with conflict handling:
    // await db
    //   .insert(myTable)
    //   .values({ ... })
    //   .onConflictDoNothing();
    //
    // Multiple records:
    // await db
    //   .insert(myTable)
    //   .values([{ ... }, { ... }])
    //   .onConflictDoNothing();
    //
    // Upsert (update if exists):
    // await db
    //   .insert(myTable)
    //   .values({ ... })
    //   .onConflictDoUpdate({
    //     target: myTable.uniqueColumn,
    //     set: { updatedAt: new Date() },
    //   });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    // Close database connection
    await pool.end();
  }
}

// Run seed
seed();
