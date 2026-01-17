/**
 * Database Client
 *
 * PostgreSQL connection using Drizzle ORM.
 * Uses pg driver for both local (sandbox) and production (Neon) environments.
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Create PostgreSQL connection pool
// DATABASE_URL is provided by:
// - Local: supervisord environment (postgresql://lumea@localhost:5432/lumea)
// - Production: Neon connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export typed Drizzle instance
export const db = drizzle(pool, { schema });

// Export schema for use in other files
export { schema };

// Export pool for manual connection management if needed
export { pool };
