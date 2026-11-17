import crypto from "crypto";
import { createWebhookClient } from "@/lib/supabase/server";

function verifyAdmin(request: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const expected = `Bearer ${secret}`;
  if (authHeader.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(authHeader), Buffer.from(expected));
}

export async function POST(request: Request): Promise<Response> {
  if (!verifyAdmin(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createWebhookClient();
  const results: string[] = [];

  // SQL for adding columns — must be run in Supabase SQL editor first
  const migrationSQL = [
    "ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS confirmed BOOLEAN DEFAULT false;",
    "ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS confirm_token TEXT;",
    "ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS welcome_stage INT DEFAULT 0;",
    "ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS last_opened_at TIMESTAMPTZ;",
    "ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS last_clicked_at TIMESTAMPTZ;",
    "ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS open_count INT DEFAULT 0;",
  ];

  // Backfill: mark all existing subscribers as confirmed (they opted in before double opt-in)
  // This will only work AFTER the migration SQL is run in Supabase SQL editor
  try {
    const { count } = await supabase
      .from("newsletter_subscribers")
      .update({ confirmed: true } as never)
      .eq("confirmed", false);
    results.push(`backfill: ${count ?? "unknown"} existing subscribers marked as confirmed`);
  } catch {
    results.push("backfill: skipped — run the migration SQL first, then call this endpoint again");
  }

  return Response.json({
    success: true,
    results,
    note: "Run the migration SQL in Supabase SQL editor first, then call this endpoint to backfill",
    sql: migrationSQL.join("\n"),
  });
}
