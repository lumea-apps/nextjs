/**
 * Better-Auth Client
 *
 * Client-side authentication hooks and utilities.
 * Use this in React components for authentication state.
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 * @see https://better-auth.com/docs/client
 */

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Base URL is automatically detected from window.location
  // For explicit configuration:
  // baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

// Export hooks for use in components
export const {
  signIn,
  signUp,
  signOut,
  useSession,
  // Social sign-in (uncomment if using social providers)
  // signIn: { social },
} = authClient;
