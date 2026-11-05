import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { verifyPaymentSignature } from "@/lib/razorpay";
import { TIERS, type TierName } from "@/lib/constants/tiers";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
    } = body as {
      razorpay_order_id: string;
      razorpay_payment_id: string;
      razorpay_signature: string;
      planId: string;
    };

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !planId
    ) {
      return NextResponse.json(
        { error: "Missing required payment fields" },
        { status: 400 }
      );
    }

    if (!(planId in TIERS) || planId === "free") {
      return NextResponse.json(
        { error: "Invalid plan" },
        { status: 400 }
      );
    }

    const isValid = verifyPaymentSignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // Payment verified -- update the subscription in Supabase
    const now = new Date();
    const periodEnd = new Date(now);
    periodEnd.setMonth(periodEnd.getMonth() + 1);

    // Check if subscription row exists
    const { data: existing } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (existing) {
      await supabase
        .from("subscriptions")
        .update({
          plan: planId as TierName,
          razorpay_subscription_id: razorpay_payment_id,
          status: "active",
          current_period_start: now.toISOString(),
          current_period_end: periodEnd.toISOString(),
        } as never)
        .eq("user_id", user.id);
    } else {
      await supabase.from("subscriptions").insert({
        user_id: user.id,
        plan: planId as TierName,
      } as never);

      // Now update with fields not available at insert time
      await supabase
        .from("subscriptions")
        .update({
          razorpay_subscription_id: razorpay_payment_id,
          status: "active",
          current_period_start: now.toISOString(),
          current_period_end: periodEnd.toISOString(),
        } as never)
        .eq("user_id", user.id);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Razorpay verify error:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
