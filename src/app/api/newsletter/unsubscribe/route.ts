import { NextRequest, NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";
import { validateEmail } from "@/lib/validation";
import crypto from "crypto";

function generateUnsubToken(email: string): string {
  const secret = process.env.ADMIN_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return crypto.createHmac("sha256", secret).update(email.toLowerCase()).digest("hex").slice(0, 32);
}

export { generateUnsubToken };

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const token = request.nextUrl.searchParams.get("token");

  if (!email) {
    return NextResponse.json(
      { error: "Email parameter required" },
      { status: 400 }
    );
  }

  const emailResult = validateEmail(email);
  if (!emailResult.valid) {
    return NextResponse.json(
      { error: "Invalid email" },
      { status: 400 }
    );
  }

  // Verify HMAC token to prevent unauthorized mass-unsubscribe
  const expectedToken = generateUnsubToken(emailResult.value);
  if (!token || token !== expectedToken) {
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
