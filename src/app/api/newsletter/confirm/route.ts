import { NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token || token.length !== 64) {
    return NextResponse.redirect(`${SITE_URL}?confirmed=invalid`);
  }

  const supabase = createWebhookClient();

  // Find subscriber by token
  const { data: subscriber } = await supabase
    .from("newsletter_subscribers")
    .select("id, email, confirmed, confirm_token")
    .eq("confirm_token", token)
    .single();

  if (!subscriber) {
    return NextResponse.redirect(`${SITE_URL}?confirmed=invalid`);
  }

  const sub = subscriber as { id: string; confirmed: boolean };

  if (sub.confirmed) {
    // Already confirmed — just redirect
    return NextResponse.redirect(`${SITE_URL}?confirmed=already`);
  }

  // Confirm the subscription and clear the token (single-use)
  await supabase
    .from("newsletter_subscribers")
    .update({
      confirmed: true,
      confirm_token: null,
    } as never)
    .eq("id", sub.id);

  // Schedule welcome sequence via QStash
  const qstashToken = process.env.QSTASH_TOKEN;
  if (qstashToken) {
    const welcomeUrl = `${SITE_URL}/api/cron/welcome-sequence`;
    try {
      const { Client } = await import("@upstash/qstash");
      const qstash = new Client({ token: qstashToken });

      // Stage 1: immediate (Day 0)
      await qstash.publishJSON({
        url: `${welcomeUrl}?subscriber_id=${sub.id}&stage=1`,
        body: {},
      });
      // Stage 2: Day 3 (259200 seconds)
      await qstash.publishJSON({
        url: `${welcomeUrl}?subscriber_id=${sub.id}&stage=2`,
        delay: 259200,
        body: {},
      });
      // Stage 3: Day 7 (604800 seconds)
      await qstash.publishJSON({
        url: `${welcomeUrl}?subscriber_id=${sub.id}&stage=3`,
        delay: 604800,
        body: {},
      });
    } catch (err) {
      // Don't block confirmation if welcome scheduling fails
      console.error("Welcome sequence scheduling failed:", err instanceof Error ? err.message : err);
    }
  }

  return NextResponse.redirect(`${SITE_URL}?confirmed=success`);
}
