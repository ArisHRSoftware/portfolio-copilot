import crypto from "crypto";
import { NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";
import { validateEmail } from "@/lib/validation";
import { headers } from "next/headers";
import { Redis } from "@upstash/redis";

const VALID_SOURCES = ["website", "content", "footer", "popup", "landing", "learn", "stock", "filing", "glossary", "glossary-index", "homepage", "recent-filings", "insider-buying", "trending"] as const;

// ── Redis rate limiter (survives cold starts, works across instances) ──

let redis: Redis | null = null;
function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

async function checkRateLimit(ip: string): Promise<boolean> {
  const r = getRedis();
  if (!r) return true; // Allow if Redis is unavailable (graceful fallback)

  const key = `nl_rl:${ip}`;
  try {
    const count = await r.incr(key);
    if (count === 1) {
      // First request — set expiry to 1 hour
      await r.expire(key, 3600);
    }
    return count <= 5;
  } catch {
    return true; // Allow on Redis error
  }
}

// ── Confirm token generation ──

function generateConfirmToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const hdrs = await headers();
    const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!(await checkRateLimit(ip))) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const { email: rawEmail, source } = (await request.json()) as {
      email: string;
      source?: string;
    };

    const emailResult = validateEmail(rawEmail);
    if (!emailResult.valid) {
      return NextResponse.json(
        { error: "Valid email address required" },
        { status: 400 }
      );
    }
    const email = emailResult.value;

    // Validate source field
    const cleanSource =
      source && VALID_SOURCES.includes(source as (typeof VALID_SOURCES)[number])
        ? source
        : "website";

    const supabase = createWebhookClient();

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, unsubscribed_at, confirmed")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      const sub = existing as { unsubscribed_at: string | null; confirmed: boolean };
      if (sub.unsubscribed_at) {
        // Re-subscribe — clear unsubscribe flag
        await supabase
          .from("newsletter_subscribers")
          .update({ unsubscribed_at: null } as never)
          .eq("email", email.toLowerCase());

        // If not previously confirmed, treat as new subscriber needing confirmation
        if (!sub.confirmed) {
          return NextResponse.json({ status: "confirmation_pending" });
        }
        return NextResponse.json({ status: "resubscribed" });
      }
      if (!sub.confirmed) {
        // Resend confirmation email
        return NextResponse.json({ status: "confirmation_pending" });
      }
      return NextResponse.json({ status: "already_subscribed" });
    }

    // New subscriber — insert with confirm token (double opt-in)
    const confirmToken = generateConfirmToken();
    await supabase.from("newsletter_subscribers").insert({
      email: email.toLowerCase(),
      source: cleanSource,
      confirmed: false,
      confirm_token: confirmToken,
    } as never);

    // Send confirmation email
    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
      const confirmUrl = `${siteUrl}/api/newsletter/confirm?token=${confirmToken}`;
      const { sendNewsletterConfirmation } = await import("@/lib/resend");
      await sendNewsletterConfirmation(email, confirmUrl);
    } catch (emailErr) {
      console.error("Failed to send confirmation email:", emailErr instanceof Error ? emailErr.message : emailErr);
    }

    return NextResponse.json({ status: "confirmation_sent" });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
