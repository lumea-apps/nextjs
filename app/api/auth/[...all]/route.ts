/**
 * Better-Auth API Route
 *
 * Handles all authentication endpoints via Better-Auth.
 * Endpoints include: /api/auth/sign-in, /api/auth/sign-up, etc.
 *
 * @see SHO-176 - Full Stack Database Infrastructure
 * @see https://better-auth.com/docs/integrations/next
 */

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
