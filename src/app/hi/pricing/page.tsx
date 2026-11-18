import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { TIERS } from "@/lib/constants/tiers";
import { CheckCircle2 } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

const TIERS_HI = [
  {
    key: "free" as const,
    name: "Free",
    nameHi: "फ्री",
    inr: "₹0",
    features: ["5 stocks track करें", "Weekly digest", "Basic filing alerts"],
  },
  {
    key: "starter" as const,
    name: "Starter",
    nameHi: "स्टार्टर",
    inr: "₹499/साल",
    features: ["15 stocks track करें", "3 alert rules", "Daily digest", "Email alerts"],
  },
  {
    key: "plus" as const,
    name: "Plus",
    nameHi: "प्लस",
    inr: "₹1,499/साल",
    popular: true,
    features: ["50 stocks track करें", "10 alert rules", "Daily digest", "Screener access", "Priority alerts"],
  },
  {
    key: "pro" as const,
    name: "Pro",
    nameHi: "प्रो",
    inr: "₹2,499/साल",
    features: ["Unlimited stocks", "Unlimited alerts", "API access", "CSV export", "Webhook integration"],
  },
];

const FAQS_HI = [
  {
    question: "भारत से payment कैसे करें?",
    answer: "Razorpay के through UPI, net banking, debit/credit card — सब accept होता है। International cards भी चलते हैं। Amount INR में charge होता है।",
  },
  {
    question: "30-day free trial कैसे काम करता है?",
    answer: "हर नया account 30 दिन Plus features free में पाता है — credit card ज़रूरी नहीं। 50 stocks track करें, daily digests पाएं, screener use करें। 30 दिन बाद subscribe करें या free plan पर 5 stocks track करें।",
  },
  {
    question: "Plan कभी भी change कर सकते हैं?",
    answer: "हाँ। Upgrade तुरंत apply होता है। Downgrade billing cycle end पर। कोई lock-in नहीं।",
  },
  {
    question: "इतना सस्ता कैसे?",
    answer: "कोई human analysts नहीं — AI pipeline automatically हर filing process करती है। Infrastructure costs minimal हैं, और वो savings directly आप तक पहुंचती हैं। Same quality analysis, fraction of the cost।",
  },
];

export const metadata: Metadata = {
  title: "मूल्य — हर निवेशक के लिए Plan",
  description:
    "Brefyr plans ₹499/साल से शुरू। SEC filing analysis, insider trade alerts, AI summaries। 30 दिन free trial, credit card ज़रूरी नहीं।",
  alternates: {
    canonical: "/hi/pricing",
    languages: { en: "/pricing", hi: "/hi/pricing", "x-default": "/pricing" },
  },
  openGraph: { locale: "hi_IN" },
};

export default function HindiPricingPage() {
  return (
    <main className="flex-1 px-4 py-12 max-w-5xl mx-auto w-full space-y-10">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "मूल्य", url: `${siteUrl}/hi/pricing` },
        ]}
      />
      <FAQSchema questions={FAQS_HI} locale="hi" />

      <div className="text-center space-y-3">
        <Badge variant="outline">30 दिन Free Trial</Badge>
        <h1 className="text-3xl font-bold tracking-tight">
          हर निवेशक के लिए सही Plan
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          SEC filing intelligence ₹499/साल से — coffee से भी सस्ता। Credit card ज़रूरी नहीं।
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS_HI.map((tier) => (
          <Card key={tier.key} className={tier.popular ? "border-primary shadow-md" : ""}>
            <CardHeader>
              {tier.popular && <Badge className="w-fit mb-2">सबसे लोकप्रिय</Badge>}
              <CardTitle>{tier.nameHi}</CardTitle>
              <CardDescription className="text-2xl font-bold text-foreground">
                {tier.inr}
              </CardDescription>
              <CardDescription className="text-xs">
                ${TIERS[tier.key].priceUSD}/year USD
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
                render={<Link href="/auth/signup" />}
              >
                {tier.key === "free" ? "Free शुरू करें" : "Trial शुरू करें"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Sign up English में होगा। Product dashboard English में है।
      </p>

      <Separator />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">अक्सर पूछे जाने वाले सवाल</h2>
        {FAQS_HI.map((faq) => (
          <div key={faq.question} className="space-y-1">
            <h3 className="font-medium">{faq.question}</h3>
            <p className="text-sm text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
          English pricing page →
        </Link>
      </div>
    </main>
  );
}
