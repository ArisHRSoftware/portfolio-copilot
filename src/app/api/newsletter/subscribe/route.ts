import { NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";
import { validateEmail } from "@/lib/validation";
import { headers } from "next/headers";

const VALID_SOURCES = ["website", "content", "footer", "popup", "landing", "learn"] as const;

// Simple in-memory rate limiter (per-instance, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max 5 subscribes per IP per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const hdrs = await headers();
    const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
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
      .select("*")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      const sub = existing as { unsubscribed_at: string | null };
      if (sub.unsubscribed_at) {
        // Re-subscribe
        await supabase
          .from("newsletter_subscribers")
          .update({ unsubscribed_at: null } as never)
          .eq("email", email.toLowerCase());

        return NextResponse.json({ status: "resubscribed" });
      }
      return NextResponse.json({ status: "already_subscribed" });
    }

    // New subscriber
    await supabase.from("newsletter_subscribers").insert({
      email: email.toLowerCase(),
      source: cleanSource,
    } as never);

    return NextResponse.json({ status: "subscribed" });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
