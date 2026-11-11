import { NextResponse } from "next/server";
import { createWebhookClient } from "@/lib/supabase/server";
import { validateEmail } from "@/lib/validation";

export async function POST(request: Request) {
  try {
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
      source: source ?? "website",
    } as never);

    return NextResponse.json({ status: "subscribed" });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
