import { NextRequest, NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";
import { validateEmail } from "@/lib/validation";
import crypto from "crypto";

function getUnsubSecret(): string | null {
  return process.env.ADMIN_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}

export function generateUnsubToken(email: string): string {
  const secret = getUnsubSecret();
  if (!secret) throw new Error("No secret configured for unsubscribe tokens");
  return crypto.createHmac("sha256", secret).update(email.toLowerCase()).digest("hex").slice(0, 32);
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const token = request.nextUrl.searchParams.get("token");

  if (!email) {
    return NextResponse.json(
      { error: "Email parameter required" },
      { status: 400 }
    );
  }

  // Guard: reject if no secret configured (prevents empty-key HMAC)
  const secret = getUnsubSecret();
  if (!secret) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const emailResult = validateEmail(email);
  if (!emailResult.valid) {
    return NextResponse.json(
      { error: "Invalid email" },
      { status: 400 }
    );
  }

  // Verify HMAC token with timing-safe comparison
  const expectedToken = generateUnsubToken(emailResult.value);
  if (
    !token ||
    Buffer.byteLength(token) !== Buffer.byteLength(expectedToken) ||
    !crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expectedToken))
  ) {
    return NextResponse.json(
      { error: "Invalid or missing unsubscribe token" },
      { status: 403 }
    );
  }

  const supabase = createWebhookClient();

  await supabase
    .from("newsletter_subscribers")
    .update({ unsubscribed_at: new Date().toISOString() } as never)
    .eq("email", emailResult.value);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  return NextResponse.redirect(
    `${siteUrl}/unsubscribed?email=${encodeURIComponent(emailResult.value)}`
  );
}
