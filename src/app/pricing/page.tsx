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
import { BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { TIERS } from "@/lib/constants/tiers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

// Per-month cost when billed yearly
const MONTHLY_COST: Record<string, string> = {
  starter: "0.75",
  plus: "1.58",
  pro: "2.42",
};

const PRICING_FAQS = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes. Upgrade or downgrade at any time. When upgrading, you get immediate access to new features. When downgrading, your current plan continues until the end of the billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards globally. Indian users can also pay via UPI, net banking, and wallets through Razorpay. More payment options coming soon.",
  },
  {
    question: "How does the 30-day free trial work?",
    answer: "Every new account gets 30 days of Plus features completely free — no credit card required. Track up to 50 stocks, get daily digests, and use the screener. After 30 days, you can choose to subscribe or stay on the free plan with 5 stocks.",
  },
  {
    question: "What SEC filings do you cover?",
    answer: "We analyze 10-K, 10-Q, 8-K, Form 4 (insider trades), S-1, DEF 14A, SC 13D/G, and more across 7,600+ US-listed stocks. Every filing gets an automated summary and significance score within minutes.",
  },
];

export const metadata: Metadata = {
  title: "Pricing — Plans for Every Investor",
  description:
    "Choose the right Brefyr plan. From free SEC filing alerts for 5 stocks to unlimited analysis, insider trade alerts, and API access for professionals.",
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
      <BreadcrumbSchema items={[
        { name: "Home", url: siteUrl },
        { name: "Pricing", url: `${siteUrl}/pricing` },
      ]} />
      <FAQSchema questions={PRICING_FAQS} />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="default" className="text-sm px-4 py-1">
          Launch Special — 30 Days Free on All Plans
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Start free. Every new account gets{" "}
          <span className="font-semibold text-primary">30 days of Plus features free</span>
          {" "}— no credit card required. Upgrade when you need more.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TIER_ORDER.map((tierKey) => {
          const tier = TIERS[tierKey];
          const isPopular = tierKey === "plus";
          const monthlyCost = MONTHLY_COST[tierKey];

          return (
            <Card
              key={tierKey}
              className={`relative ${isPopular ? "ring-2 ring-primary" : ""}`}
            >
              {/* Monthly cost badge for paid tiers */}
              {monthlyCost && (
                <div className="absolute -top-3 right-4">
                  <Badge variant="default" className="text-xs font-bold px-2">
                    ${monthlyCost}/mo
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  {isPopular && <Badge variant="default">Most Popular</Badge>}
                </div>
                <CardDescription>{TIER_HIGHLIGHTS[tierKey]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price with discount appearance */}
                <div className="space-y-1">
                  {tier.priceUSD > 0 ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">
                          ${tier.priceUSD}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /year
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Less than ${monthlyCost}/month — billed yearly
                      </p>
                      <p className="text-xs text-muted-foreground">
                        or &#x20B9;{tier.priceINR}/year
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$0</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Free forever
                      </p>
                    </>
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
                    label="Real-time push alerts"
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
                  {tierKey === "free" ? "Get Started Free" : "Start 30-Day Free Trial"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Why so affordable */}
      <div className="text-center space-y-2 py-4 max-w-lg mx-auto">
        <p className="text-sm font-medium">Why is Brefyr so affordable?</p>
        <p className="text-sm text-muted-foreground">
          No human analysts, no overhead. Our AI pipeline reads SEC filings
          automatically — the same analysis that costs $29-79/month elsewhere,
          delivered at a fraction of the price. 7,600+ companies tracked, filings
          analyzed within minutes, no credit card required.
        </p>
      </div>

      {/* FAQ */}
      <section className="space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {PRICING_FAQS.map((faq) => (
            <Card size="sm" key={faq.question}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
