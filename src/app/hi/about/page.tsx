import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const metadata: Metadata = {
  title: "Brefyr के बारे में — SEC Filing Analysis भारतीय निवेशकों के लिए",
  description:
    "Brefyr 7,600+ US small-cap stocks की SEC filings analyze करता है जिन्हें Wall Street ignore करता है। AI-powered summaries, insider trade alerts, और significance scores।",
  alternates: {
    canonical: "/hi/about",
    languages: { en: "/about", hi: "/hi/about", "x-default": "/about" },
  },
  openGraph: { locale: "hi_IN" },
};

export default function HindiAboutPage() {
  return (
    <main className="flex-1 px-4 py-12 max-w-4xl mx-auto w-full space-y-10">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "हमारे बारे में", url: `${siteUrl}/hi/about` },
        ]}
      />

      <div className="space-y-4 text-center">
        <Badge variant="outline">भारतीय निवेशकों के लिए</Badge>
        <h1 className="text-4xl font-bold tracking-tight">
          हर SEC Filing, पढ़ी और Score की गई — ताकि आपको न करनी पड़े
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Brefyr 7,600+ US-listed stocks की SEC filings को AI से analyze करता है।
          Instant summaries, insider trading alerts, और 1-10 significance scores —
          वो सब जो institutional investors को मिलता है, अब आपको भी।
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">7,600+ Stocks</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Small-cap से large-cap तक — हर US-listed company जो SEC filings करती है।
            वो stocks भी जिन पर zero analyst coverage है।
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            हर 10-K, 10-Q, 8-K, Form 4 filing minutes में AI-analyzed। Plain-language
            summary + significance score (1-10)। पूरी filing पढ़ने की ज़रूरत नहीं।
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Insider Alerts</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            CEO ने $2 million stock खरीदा? तुरंत alert। Form 4 filings real-time
            monitor होती हैं और significant insider trades flagged होती हैं।
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">भारत से US Stocks में Invest क्यों?</h2>
        <div className="prose prose-sm text-muted-foreground">
          <p>
            RBI LRS scheme से भारतीय निवेशक हर साल $250,000 तक US markets में invest
            कर सकते हैं। Vested, INDMoney, Groww International जैसे platforms ने
            process आसान बना दिया है। लेकिन एक critical gap बचा है — <strong>research</strong>।
          </p>
          <p>
            Indian brokerage apps basic stock data दिखाते हैं, लेकिन SEC filings नहीं।
            Risk factors, insider trades, management discussion, auditor opinions — ये
            सब EDGAR पर free में available हैं, लेकिन 200-page filings पढ़ना realistic नहीं।
          </p>
          <p>
            Brefyr यही gap भरता है। AI हर filing पढ़ता है, key facts extract करता है,
            और significance score assign करता है। आपको बस important alerts पर ध्यान
            देना है।
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">इतना सस्ता कैसे?</h2>
        <p className="text-muted-foreground">
          Rs 499/year (Starter) से शुरू — coffee से भी सस्ता। कैसे? कोई human analysts नहीं।
          AI pipeline automatically हर filing process करती है। Infrastructure cost minimal है,
          और वो savings आप तक पहुंचती हैं।
        </p>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          आज ही शुरू करें — 30 दिन Free
        </h2>
        <p className="text-muted-foreground">
          Free plan में 5 stocks track करें। No credit card required।
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" render={<Link href="/auth/signup" />}>
            मुफ्त शुरू करें (English में)
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/hi/pricing" />}>
            मूल्य देखें
          </Button>
        </div>
      </div>
    </main>
  );
}
