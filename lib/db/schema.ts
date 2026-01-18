/**
 * Database Schema
 *
 * Drizzle ORM schema definitions for application tables.
 *
 * NOTE: Better-Auth tables (user, session, account, verification) are
 * managed by the Better-Auth CLI. Run `bun run auth:migrate` to create them.
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 * @see https://orm.drizzle.team/docs/sql-schema-declaration
 */

import {
  pgTable,
  text,
  timestamp,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";

// =============================================================================
// Application Tables
// =============================================================================
// Add your custom application tables below.
// Better-Auth tables (user, session, account, verification) are managed
// separately by the Better-Auth CLI.

// Example: Posts table (uncomment and modify as needed)
// export const posts = pgTable("posts", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   title: text("title").notNull(),
//   content: text("content"),
//   authorId: text("author_id").notNull(), // References Better-Auth user.id
//   published: boolean("published").notNull().default(false),
//   createdAt: timestamp("created_at").notNull().defaultNow(),
//   updatedAt: timestamp("updated_at").notNull().defaultNow(),
// });

// Example: Products table
// export const products = pgTable("products", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   name: text("name").notNull(),
//   description: text("description"),
//   price: integer("price").notNull(), // in cents
//   createdAt: timestamp("created_at").notNull().defaultNow(),
// });
