import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createOrder } from "@/lib/razorpay";
import { TIERS, type TierName } from "@/lib/constants/tiers";
import type { Currency } from "@/lib/currency";

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
    const { planId, currency } = body as {
      planId: string;
      currency: string;
    };

    // Validate planId
    if (!planId || !(planId in TIERS)) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    const tierName = planId as TierName;

    if (tierName === "free") {
      return NextResponse.json(
        { error: "Cannot create an order for the free plan" },
        { status: 400 }
      );
    }

    // Validate currency
    if (currency !== "INR" && currency !== "USD") {
      return NextResponse.json(
        { error: "Invalid currency" },
        { status: 400 }
      );
    }

    const validCurrency = currency as Currency;

    const { orderId, amount } = await createOrder(
      tierName,
      validCurrency,
      user.id
    );

    return NextResponse.json({
      orderId,
      amount,
      currency: validCurrency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("Razorpay create-order error:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
