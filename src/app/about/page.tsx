import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About — AI SEC Filing Analysis for Small-Cap Investors",
  description:
    "Brefyr uses AI to analyze SEC filings for 7,600+ US small-cap stocks that Wall Street ignores. Get instant summaries, insider trade alerts, and significance scores.",
  openGraph: {
    title: "About Brefyr",
    description:
      "AI-powered SEC filing analysis for 7,600+ uncovered US small-cap stocks.",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-12">
      {/* Hero */}
      <div className="space-y-4 text-center">
        <Badge variant="secondary">About</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The SEC filings that Wall Street ignores, analyzed by AI.
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Brefyr monitors SEC EDGAR for 7,600+ US small-cap stocks
          that institutional research doesn&apos;t cover. Every filing is
          processed by AI within minutes of publication, so you never miss a
          critical disclosure.
        </p>
      </div>

      <Separator />

      {/* What We Do */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What Brefyr Does</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>AI Filing Summaries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every SEC filing (10-K, 10-Q, 8-K, Form 4, and more) gets a
                plain-English summary within minutes. No more reading 200-page
                documents to find the three sentences that matter.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Significance Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Each filing receives a 1-10 significance score. A routine
                quarterly filing scores low. A surprise insider purchase or a
                going-concern warning scores high. Focus on what matters.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Insider Trade Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Form 4 filings are parsed automatically to surface insider
                buying and selling activity. See who is trading, how much, and
                whether the pattern is unusual for that company.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Instant Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Set up custom alert rules to get notified about high-significance
                filings, insider trades above a threshold, or specific filing
                types for stocks in your portfolio.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Why Small-Caps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why Small-Caps?</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Large-cap stocks like Apple and Microsoft have dozens of analysts
            covering every filing within hours. Small-cap stocks with market caps
            under $2 billion often have zero analyst coverage.
          </p>
          <p>
            That means critical disclosures — a CEO quietly buying shares, a
            surprise earnings beat, or a going-concern warning — can sit
            unnoticed for days or weeks. By the time the information is widely
            known, the price has already moved.
          </p>
          <p>
            Brefyr closes that information gap. The same AI analysis
            that large institutions use internally, now available for the
            small-cap stocks they ignore.
          </p>
        </div>
      </section>

      <Separator />

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <ol className="space-y-4">
          {[
            {
              step: "1",
              title: "SEC EDGAR Monitoring",
              description:
                "Our pipeline monitors SEC EDGAR continuously for new filings across 7,600+ small-cap tickers.",
            },
            {
              step: "2",
              title: "AI Analysis",
              description:
                "Each filing is processed by AI to generate a plain-English summary, extract key facts, identify risk flags, and assign a significance score.",
            },
            {
              step: "3",
              title: "Instant Delivery",
              description:
                "Summaries appear on your dashboard within minutes. High-significance filings trigger email or webhook alerts based on your rules.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {item.step}
              </span>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-bold">
          Start tracking your small-cap portfolio today
        </h2>
        <p className="text-muted-foreground">
          Free plan includes 3 stocks. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" render={<Link href="/pricing" />}>
            View Pricing
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={<Link href="/trending" />}
          >
            Browse Trending Stocks
          </Button>
        </div>
      </div>
    </main>
    </>
  );
}
