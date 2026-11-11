import { NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/razorpay";
import { createWebhookClient } from "@/lib/supabase/server";
import { TIERS } from "@/lib/constants/tiers";

/**
 * Razorpay webhook handler.
 * Uses a cookie-free Supabase service client since webhooks
 * arrive from Razorpay's servers with no user session.
 */
export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );
    }

    const isValid = verifyWebhookSignature(body, signature);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);
    const eventType: string = event.event;

    const supabase = createWebhookClient();

    switch (eventType) {
      case "payment.captured": {
        const payment = event.payload.payment.entity;
        const userId = payment.notes?.user_id;
        const planId = payment.notes?.plan_id;

        if (userId && planId && planId in TIERS && planId !== "free") {
          const now = new Date();
          const periodEnd = new Date(now);
          periodEnd.setMonth(periodEnd.getMonth() + 1);

          // Ensure subscription row exists
          const { data: existing } = await supabase
            .from("subscriptions")
            .select("id")
            .eq("user_id", userId)
            .single();

          if (existing) {
            await supabase
              .from("subscriptions")
              .update({
                plan: planId,
                razorpay_subscription_id: payment.id,
                status: "active",
                current_period_start: now.toISOString(),
                current_period_end: periodEnd.toISOString(),
              } as never)
              .eq("user_id", userId);
          } else {
            await supabase.from("subscriptions").insert({
              user_id: userId,
              plan: planId,
            } as never);

            await supabase
              .from("subscriptions")
              .update({
                razorpay_subscription_id: payment.id,
                status: "active",
                current_period_start: now.toISOString(),
                current_period_end: periodEnd.toISOString(),
              } as never)
              .eq("user_id", userId);
          }
        }
        break;
      }

      case "subscription.charged": {
        const subscription = event.payload.subscription.entity;
        const razorpaySubId: string = subscription.id;

        const now = new Date();
        const periodEnd = new Date(now);
        periodEnd.setMonth(periodEnd.getMonth() + 1);

        await supabase
          .from("subscriptions")
          .update({
            status: "active",
            current_period_start: now.toISOString(),
            current_period_end: periodEnd.toISOString(),
          } as never)
          .eq("razorpay_subscription_id", razorpaySubId);
        break;
      }

      case "subscription.cancelled": {
        const subscription = event.payload.subscription.entity;
        const razorpaySubId: string = subscription.id;

        await supabase
          .from("subscriptions")
          .update({
            status: "canceled",
          } as never)
          .eq("razorpay_subscription_id", razorpaySubId);
        break;
      }

      case "payment.failed": {
        const payment = event.payload.payment.entity;
        const userId = payment.notes?.user_id;

        if (userId) {
          await supabase
            .from("subscriptions")
            .update({
              status: "past_due",
            } as never)
            .eq("user_id", userId);
        }
        break;
      }

      default:
        // Unhandled event type -- acknowledge receipt
        break;
    }

    // Always return 200 quickly so Razorpay does not retry
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("Razorpay webhook error:", err instanceof Error ? err.message : "Unknown error");
    // Return 200 even on processing errors to prevent Razorpay retries
    // for malformed events. Signature failures above already return 400.
    return NextResponse.json({ received: true }, { status: 200 });
  }
}
