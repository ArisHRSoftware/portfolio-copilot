import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getUserSubscription } from "@/lib/supabase/queries";
import { getTierInfo } from "@/lib/tier-gating";
import { detectCurrency } from "@/lib/geo-detect";
import { TIERS } from "@/lib/constants/tiers";
import { CheckoutPanel } from "./checkout-panel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Billing",
};

export default async function BillingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const [subscription, tierInfo, currency] = await Promise.all([
    getUserSubscription(supabase, user.id),
    getTierInfo(supabase, user.id),
    detectCurrency(),
  ]);

  return (
    <CheckoutPanel
      user={{ id: user.id, email: user.email ?? "" }}
      subscription={subscription}
      currency={currency}
      tierInfo={tierInfo}
      tiers={TIERS}
    />
  );
}
