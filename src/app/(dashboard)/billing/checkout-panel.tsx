"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Subscription } from "@/lib/supabase/queries";
import type { TierName } from "@/lib/constants/tiers";
import { formatPrice, type Currency } from "@/lib/currency";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Loader2, Zap, Crown, Rocket } from "lucide-react";

type TierConfig = {
  name: string;
  stocks: number;
  alertRules: number;
  digest: string;
  screener: boolean;
  api: boolean;
  export: boolean;
  webhook: boolean;
  priceINR: number;
  priceUSD: number;
};

type Tiers = Record<string, TierConfig>;

type TierInfo = {
  tier: TierName;
} & TierConfig;

interface CheckoutPanelProps {
  user: { id: string; email: string };
  subscription: Subscription | null;
  currency: Currency;
  tierInfo: TierInfo;
  tiers: Tiers;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: { email: string };
  theme: { color: string };
  modal?: { ondismiss?: () => void };
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (response: unknown) => void) => void;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

const PLAN_ORDER: TierName[] = ["free", "starter", "plus", "pro"];

const PLAN_ICONS: Record<TierName, React.ReactNode> = {
  free: null,
  starter: <Zap className="size-4" />,
  plus: <Rocket className="size-4" />,
  pro: <Crown className="size-4" />,
};

const PLAN_FEATURES: Record<TierName, string[]> = {
  free: ["Track 3 stocks", "Weekly digest"],
  starter: [
    "Track 15 stocks",
    "3 alert rules",
    "Daily digest",
  ],
  plus: [
    "Track 50 stocks",
    "10 alert rules",
    "Daily digest",
    "Screener access",
    "Webhook alerts",
  ],
  pro: [
    "Unlimited stocks",
    "Unlimited alert rules",
    "Daily digest",
    "Screener access",
    "API access",
    "Data export",
    "Webhook alerts",
  ],
};

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function CheckoutPanel({
  user,
  subscription,
  currency,
  tierInfo,
  tiers,
}: CheckoutPanelProps) {
  const router = useRouter();
  const [loadingPlan, setLoadingPlan] = useState<TierName | null>(null);
  const [error, setError] = useState<string | null>(null);

  const currentPlan = tierInfo.tier;

  const handleUpgrade = useCallback(
    async (planId: TierName) => {
      setError(null);
      setLoadingPlan(planId);

      try {
        // Load Razorpay script
        const loaded = await loadRazorpayScript();
        if (!loaded) {
          setError("Failed to load payment gateway. Please try again.");
          setLoadingPlan(null);
          return;
        }

        // Create order on the server
        const orderRes = await fetch("/api/razorpay/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ planId, currency }),
        });

        if (!orderRes.ok) {
          const data = await orderRes.json();
          setError(data.error || "Failed to create order");
          setLoadingPlan(null);
          return;
        }

        const { orderId, amount, keyId } = await orderRes.json();

        // Open Razorpay checkout
        const options: RazorpayOptions = {
          key: keyId,
          amount,
          currency,
          name: "Portfolio Copilot",
          description: `${tiers[planId].name} Plan - Monthly`,
          order_id: orderId,
          handler: async (response: RazorpayResponse) => {
            // Verify payment on the server
            try {
              const verifyRes = await fetch("/api/razorpay/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  planId,
                }),
              });

              if (verifyRes.ok) {
                router.refresh();
              } else {
                const data = await verifyRes.json();
                setError(
                  data.error || "Payment verification failed. Contact support."
                );
              }
            } catch {
              setError(
                "Payment verification failed. If you were charged, contact support."
              );
            }
            setLoadingPlan(null);
          },
          prefill: { email: user.email },
          theme: { color: "#18181b" },
          modal: {
            ondismiss: () => {
              setLoadingPlan(null);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", () => {
          setError("Payment failed. Please try again.");
          setLoadingPlan(null);
        });
        rzp.open();
      } catch {
        setError("Something went wrong. Please try again.");
        setLoadingPlan(null);
      }
    },
    [currency, router, tiers, user.email]
  );

  const getPrice = (planId: string) => {
    const tier = tiers[planId];
    if (!tier) return "";
    const amount = currency === "INR" ? tier.priceINR : tier.priceUSD;
    if (amount === 0) return "Free";
    return formatPrice(amount, currency);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Current plan summary */}
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            You are on the{" "}
            <span className="font-semibold text-foreground">
              {tierInfo.name}
            </span>{" "}
            plan.
            {subscription?.current_period_end && (
              <>
                {" "}
                Your billing period ends on{" "}
                <span className="font-medium">
                  {new Date(
                    subscription.current_period_end
                  ).toLocaleDateString()}
                </span>
                .
              </>
            )}
          </CardDescription>
        </CardHeader>
        {subscription && subscription.status !== "active" && (
          <CardContent>
            <Badge
              variant={
                subscription.status === "past_due" ? "destructive" : "secondary"
              }
            >
              {subscription.status === "past_due"
                ? "Past Due"
                : subscription.status === "canceled"
                  ? "Canceled"
                  : subscription.status === "trialing"
                    ? "Trial"
                    : subscription.status}
            </Badge>
          </CardContent>
        )}
      </Card>

      {/* Error message */}
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Plan cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PLAN_ORDER.map((planId) => {
          const tier = tiers[planId];
          if (!tier) return null;

          const isCurrent = planId === currentPlan;
          const isDowngrade =
            PLAN_ORDER.indexOf(planId) <= PLAN_ORDER.indexOf(currentPlan);
          const isLoading = loadingPlan === planId;
          const features = PLAN_FEATURES[planId];

          return (
            <Card
              key={planId}
              className={
                isCurrent
                  ? "ring-2 ring-primary"
                  : ""
              }
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  {PLAN_ICONS[planId]}
                  <CardTitle>{tier.name}</CardTitle>
                  {isCurrent && <Badge variant="secondary">Current</Badge>}
                </div>
                <CardDescription>
                  <span className="text-2xl font-bold text-foreground">
                    {getPrice(planId)}
                  </span>
                  {tier.priceINR > 0 && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="size-3.5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                {planId === "free" ? (
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled
                  >
                    {isCurrent ? "Current Plan" : "Free"}
                  </Button>
                ) : isCurrent ? (
                  <Button variant="outline" className="w-full" disabled>
                    Current Plan
                  </Button>
                ) : isDowngrade ? (
                  <Button variant="outline" className="w-full" disabled>
                    Downgrade
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    disabled={isLoading || loadingPlan !== null}
                    onClick={() => handleUpgrade(planId)}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Upgrade to ${tier.name}`
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
