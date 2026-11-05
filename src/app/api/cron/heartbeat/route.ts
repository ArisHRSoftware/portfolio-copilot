import crypto from "crypto";

/**
 * Vercel Cron heartbeat endpoint.
 *
 * This is the single Vercel Cron job for the application. All other
 * scheduled work is handled by Upstash QStash, which provides more
 * flexible scheduling and built-in retries.
 *
 * This endpoint exists to:
 * 1. Confirm the application is deployed and responding
 * 2. Serve as a health check for monitoring
 * 3. Use the single free Vercel Cron slot
 */
export async function GET(request: Request): Promise<Response> {
  // Verify Vercel Cron authorization header
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return Response.json({ error: "CRON_SECRET not configured" }, { status: 500 });
  }

  const expected = `Bearer ${cronSecret}`;
  if (
    !authHeader ||
    authHeader.length !== expected.length ||
    !crypto.timingSafeEqual(
      Buffer.from(authHeader),
      Buffer.from(expected)
    )
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "portfolio-copilot",
  });
}
