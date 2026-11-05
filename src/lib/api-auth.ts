import crypto from "crypto";
import { createWebhookClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/types/database";

type ApiKey = Database["public"]["Tables"]["api_keys"]["Row"];

export type ApiAuthResult =
  | { ok: true; apiKey: ApiKey; userId: string; dailyLimit: number }
  | { ok: false; rateLimited: true; dailyLimit: number }
  | { ok: false; rateLimited: false };

/**
 * Validates an API key from the Authorization header.
 *
 * API keys are stored as SHA-256 hashes. The raw key is never persisted.
 * Rate limiting: calls_today is incremented per-request.
 */
export async function validateApiKey(
  request: Request
): Promise<ApiAuthResult> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return { ok: false, rateLimited: false };

  const rawKey = authHeader.slice(7).trim();
  if (!rawKey) return { ok: false, rateLimited: false };

  const keyHash = crypto.createHash("sha256").update(rawKey).digest("hex");

  const supabase = createWebhookClient();

  const { data } = await supabase
    .from("api_keys")
    .select("*")
    .eq("key_hash", keyHash)
    .single();

  if (!data) return { ok: false, rateLimited: false };

  const apiKey = data as ApiKey;

  // Enforce daily rate limit (default 1000 calls/day)
  const dailyLimit = parseInt(process.env.API_DAILY_RATE_LIMIT ?? "1000", 10);
  if (apiKey.calls_today >= dailyLimit) {
    return { ok: false, rateLimited: true, dailyLimit };
  }

  // Update last_used_at and calls_today
  await supabase
    .from("api_keys")
    .update({
      last_used_at: new Date().toISOString(),
      calls_today: apiKey.calls_today + 1,
    } as never)
    .eq("id", apiKey.id);

  return { ok: true, apiKey, userId: apiKey.user_id, dailyLimit };
}

/**
 * Checks if the API key's user has API access (pro tier).
 */
export async function checkApiAccess(userId: string): Promise<boolean> {
  const supabase = createWebhookClient();

  const { data } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  if (!data) return false;

  const plan = (data as Database["public"]["Tables"]["subscriptions"]["Row"])
    .plan;
  return plan === "pro";
}

/**
 * Standard JSON error response for API routes.
 */
export function apiError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

/**
 * Creates a rate limit error response with standard headers.
 */
export function rateLimitError(dailyLimit: number) {
  const resetTime = getNextMidnightUtc();
  return Response.json(
    { error: "Rate limit exceeded. Try again after midnight UTC." },
    {
      status: 429,
      headers: {
        "X-RateLimit-Limit": String(dailyLimit),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": String(Math.floor(resetTime / 1000)),
      },
    }
  );
}

/**
 * Adds rate limit headers to a response.
 */
export function withRateLimitHeaders(
  response: Response,
  auth: Extract<ApiAuthResult, { ok: true }>
): Response {
  const remaining = Math.max(0, auth.dailyLimit - auth.apiKey.calls_today - 1);
  const resetTime = getNextMidnightUtc();
  response.headers.set("X-RateLimit-Limit", String(auth.dailyLimit));
  response.headers.set("X-RateLimit-Remaining", String(remaining));
  response.headers.set("X-RateLimit-Reset", String(Math.floor(resetTime / 1000)));
  return response;
}

function getNextMidnightUtc(): number {
  const now = new Date();
  const tomorrow = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + 1
  ));
  return tomorrow.getTime();
}
