import Razorpay from "razorpay";
import crypto from "crypto";
import { TIERS, type TierName } from "@/lib/constants/tiers";
import type { Currency } from "@/lib/currency";

let _razorpay: Razorpay | null = null;

function getRazorpay(): Razorpay {
  if (!_razorpay) {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_id || !key_secret) {
      throw new Error("RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set");
    }
    _razorpay = new Razorpay({ key_id, key_secret });
  }
  return _razorpay;
}

/**
 * Returns the amount in the smallest currency unit (paise for INR, cents for USD).
 * Razorpay expects amounts multiplied by 100.
 */
function getAmountInSmallestUnit(planId: TierName, currency: Currency): number {
  const tier = TIERS[planId];
  if (!tier) throw new Error(`Unknown plan: ${planId}`);

  const price = currency === "INR" ? tier.priceINR : tier.priceUSD;
  if (price === 0) throw new Error("Cannot create an order for the free plan");

  return price * 100;
}

/**
 * Creates a one-time Razorpay order for the given plan and currency.
 * Returns the order_id to be used on the client-side checkout.
 */
export async function createOrder(
  planId: TierName,
  currency: Currency,
  userId: string
): Promise<{ orderId: string; amount: number; currency: Currency }> {
  const amount = getAmountInSmallestUnit(planId, currency);

  const order = await getRazorpay().orders.create({
    amount,
    currency,
    notes: {
      user_id: userId,
      plan_id: planId,
    },
  });

  return {
    orderId: order.id,
    amount,
    currency,
  };
}

/**
 * Creates a Razorpay subscription for recurring payments.
 * Requires a pre-created Razorpay plan_id on Razorpay's dashboard.
 * Returns the subscription_id.
 */
export async function createSubscription(
  razorpayPlanId: string,
  userId: string
): Promise<string> {
  const subscription = await getRazorpay().subscriptions.create({
    plan_id: razorpayPlanId,
    total_count: 12,
    quantity: 1,
    notes: {
      user_id: userId,
    },
  });

  return subscription.id;
}

/**
 * Verifies the Razorpay payment signature using HMAC SHA256.
 * This MUST be called server-side after the client completes checkout
 * to ensure the payment was not tampered with.
 */
export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) throw new Error("RAZORPAY_KEY_SECRET is not configured");

  const body = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature, "hex"),
      Buffer.from(signature, "hex")
    );
  } catch {
    return false;
  }
}

/**
 * Verifies a Razorpay webhook signature.
 * The raw request body and the X-Razorpay-Signature header are required.
 */
export function verifyWebhookSignature(
  body: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) throw new Error("RAZORPAY_WEBHOOK_SECRET is not configured");

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature, "hex"),
      Buffer.from(signature, "hex")
    );
  } catch {
    return false;
  }
}

export { getRazorpay };
