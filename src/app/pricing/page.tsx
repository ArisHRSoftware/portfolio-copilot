import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { TIERS } from "@/lib/constants/tiers";

export const metadata: Metadata = {
  title: "Pricing — Plans for Every Investor",
  description:
    "Choose the right Brefyr plan. From free SEC filing alerts for 3 stocks to unlimited analysis, insider trade alerts, and API access for professionals.",
  openGraph: {
    title: "Pricing — Plans for Every Investor | Brefyr",
    description:
      "SEC filing analysis plans starting free. Upgrade for more stocks, daily alerts, screener access, and API.",
  },
};

const TIER_ORDER = ["free", "starter", "plus", "pro"] as const;

const TIER_HIGHLIGHTS: Record<string, string> = {
  free: "Get started with SEC filing analysis",
  starter: "Track more stocks with daily email digests",
  plus: "Advanced screening, webhooks, and up to 50 stocks",
  pro: "Unlimited everything, API access, and data exports",
};

const TIER_CTAS: Record<string, string> = {
  free: "Get Started Free",
  starter: "Start 7-Day Trial",
  plus: "Start 7-Day Trial",
  pro: "Start 7-Day Trial",
};

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-primary shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="h-4 w-4 text-muted-foreground/40 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function FeatureRow({
  label,
  included,
}: {
  label: string;
  included: boolean;
}) {
  return (
    <li className="flex items-center gap-2 text-sm">
      {included ? <CheckIcon /> : <CrossIcon />}
      <span className={included ? "" : "text-muted-foreground"}>{label}</span>
    </li>
  );
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Start free. Upgrade when you need more stocks, smarter alerts, or API
          access. All plans include SEC filing analysis.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TIER_ORDER.map((tierKey) => {
          const tier = TIERS[tierKey];
          const isPopular = tierKey === "plus";

          return (
            <Card
              key={tierKey}
              className={isPopular ? "ring-2 ring-primary" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  {isPopular && <Badge variant="default">Popular</Badge>}
                </div>
                <CardDescription>{TIER_HIGHLIGHTS[tierKey]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">
                      ${tier.priceUSD}
                    </span>
                    {tier.priceUSD > 0 && (
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    )}
                  </div>
                  {tier.priceINR > 0 && (
                    <p className="text-xs text-muted-foreground">
                      or &#x20B9;{tier.priceINR}/month
                    </p>
                  )}
                  {tier.priceUSD === 0 && (
                    <p className="text-xs text-muted-foreground">
                      Free forever
                    </p>
                  )}
                </div>

                <Separator />

                {/* Features */}
                <ul className="space-y-2.5">
                  <FeatureRow
                    label={
                      tier.stocks === -1
                        ? "Unlimited stocks"
                        : `${tier.stocks} tracked stocks`
                    }
                    included={true}
                  />
                  <FeatureRow
                    label={
                      tier.alertRules === -1
                        ? "Unlimited alert rules"
                        : tier.alertRules === 0
                          ? "No custom alerts"
                          : `${tier.alertRules} alert rules`
                    }
                    included={tier.alertRules !== 0}
                  />
                  <FeatureRow
                    label={`${tier.digest.charAt(0).toUpperCase() + tier.digest.slice(1)} email digest`}
                    included={true}
                  />
                  <FeatureRow
                    label="Filing screener"
                    included={tier.screener}
                  />
                  <FeatureRow
                    label="Webhook notifications"
                    included={tier.webhook}
                  />
                  <FeatureRow label="API access" included={tier.api} />
                  <FeatureRow label="Data export (CSV)" included={tier.export} />
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={isPopular ? "default" : "outline"}
                  size="lg"
                  render={
                    <Link
                      href={
                        tierKey === "free"
                          ? "/auth/signup"
                          : `/auth/signup?plan=${tierKey}`
                      }
                    />
                  }
                >
                  {TIER_CTAS[tierKey]}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Can I switch plans anytime?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Yes. Upgrade or downgrade at any time. When upgrading, you get
                immediate access to new features. When downgrading, your current
                plan continues until the end of the billing cycle.
              </p>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>What payment methods do you accept?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We accept all major credit and debit cards globally. Indian users
                can also pay via UPI, net banking, and wallets through
                Razorpay.
              </p>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Is there a free trial?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All paid plans come with a 7-day free trial. No credit card
                required to start. You can also use the Free plan indefinitely
                for up to 3 stocks.
              </p>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>What SEC filings do you cover?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We analyze 10-K, 10-Q, 8-K, Form 4 (insider trades), S-1, DEF
                14A, SC 13D/G, and more across 7,600+ US small-cap stocks.
                Every filing gets an automated summary and significance
                score.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
    </>
  );
}
