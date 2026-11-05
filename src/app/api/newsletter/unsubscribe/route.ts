import { NextRequest, NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Email parameter required" },
      { status: 400 }
    );
  }

  const supabase = createWebhookClient();

  await supabase
    .from("newsletter_subscribers")
    .update({ unsubscribed_at: new Date().toISOString() } as never)
    .eq("email", email.toLowerCase());

  // Redirect to a simple confirmation page
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfoliocopilot.com";

  return NextResponse.redirect(
    `${siteUrl}/unsubscribed?email=${encodeURIComponent(email)}`
  );
}
