/**
 * Better-Auth Configuration
 *
 * Authentication setup using Better-Auth with Drizzle adapter.
 * Supports email/password and social OAuth providers.
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 * @see https://better-auth.com/docs/installation
 */

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";

export const auth = betterAuth({
  // Database adapter using Drizzle
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),

  // Email and password authentication
  emailAndPassword: {
    enabled: true,
    // Customize password requirements as needed
    // minPasswordLength: 8,
    // requireEmailVerification: true,
  },

  // Social OAuth providers (configure in environment variables)
  // Uncomment and configure providers as needed:
  // socialProviders: {
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   },
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID!,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  //   },
  // },

  // Session configuration
  session: {
    // Session expires in 7 days
    expiresIn: 60 * 60 * 24 * 7,
    // Refresh session when 1 day remaining
    updateAge: 60 * 60 * 24,
    // Use secure cookies in production
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },

  // Advanced options
  // trustedOrigins: ["https://yourdomain.com"],
  // rateLimit: {
  //   window: 60,
  //   max: 100,
  // },
});

// Export auth types for use in API routes
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
