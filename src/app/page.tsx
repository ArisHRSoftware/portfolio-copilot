import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import { getTopCompanies, getRecentFilings } from "@/lib/supabase/queries";
import { WebSiteSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import {
  FileText,
  TrendingUp,
  Bell,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Brefyr — AI SEC Filing Analysis for Small-Cap Investors",
  description:
    "AI-powered SEC filing analysis for 7,600+ US-listed stocks. Get instant insider trading alerts, significance scores, and plain-English summaries. Free to start.",
  openGraph: {
    title: "Brefyr — AI SEC Filing Analysis for Small-Cap Investors",
    description:
      "Stop missing critical SEC filings. AI analyzes every 10-K, 8-K, and insider trade for stocks the big platforms ignore.",
  },
};

export default async function HomePage() {
  const supabase = createStaticClient();
  const [companies, recentFilings] = await Promise.all([
    getTopCompanies(supabase, 8),
    getRecentFilings(supabase, { limit: 6, minSignificance: 6 }),
  ]);

  return (
    <>
      <WebSiteSchema />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* ===================== HERO — Full viewport ===================== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <div className="relative z-10 px-6 py-20 text-center max-w-5xl mx-auto space-y-8">
            <Badge
              variant="outline"
              className="text-sm border-primary/30 text-primary"
            >
              7,600+ US-listed companies covered
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
              AI reads every SEC filing{" "}
              <span className="text-primary">so you don&apos;t have to</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plain-English summaries, significance scores, and insider trade
              alerts — within minutes of an SEC publication. For the stocks
              that Wall Street ignores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                render={<Link href="/auth/signup" />}
                className="text-base px-8 py-6"
              >
                Start Free — Track 3 Stocks
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/trending" />}
                className="text-base px-8 py-6"
              >
                Browse Stocks
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required. Upgrade anytime.
            </p>
          </div>
        </section>

        {/* ===================== STATS BAR — Full width accent ===================== */}
        <section className="border-y border-border bg-card">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            <div className="px-6 py-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">
                7,600+
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Companies tracked
              </p>
            </div>
            <div className="px-6 py-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">
                8
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Filing types analyzed
              </p>
            </div>
            <div className="px-6 py-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">
                &lt;5 min
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Processing time
              </p>
            </div>
            <div className="px-6 py-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">
                1-10
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                AI significance score
              </p>
            </div>
          </div>
        </section>

        {/* ===================== HOW IT WORKS — 3 big steps ===================== */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                How Brefyr Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three steps from SEC filing to actionable insight
              </p>
            </div>

            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold">Track Your Stocks</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Add the stocks you care about — from mega-caps like AAPL to
                  micro-caps with zero analyst coverage. Free plan covers 3
                  stocks, paid plans go up to unlimited.
                </p>
                <Button
                  variant="outline"
                  render={<Link href="/auth/signup" />}
                >
                  Start tracking
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-8 space-y-4">
                {companies.slice(0, 4).map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-primary text-lg">
                        {c.ticker}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {c.name}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {c.sector}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border bg-card/50 p-8 space-y-4">
                {recentFilings.slice(0, 3).map((f) => (
                  <div key={f.id} className="p-4 rounded-lg bg-muted/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{f.filing_type}</Badge>
                      <Badge
                        variant={
                          f.significance_score >= 8
                            ? "destructive"
                            : "default"
                        }
                      >
                        {f.significance_score}/10
                      </Badge>
                    </div>
                    <p className="text-sm line-clamp-2">
                      {f.one_line_summary ?? "Analysis in progress..."}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(f.filed_date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold">AI Analyzes Every Filing</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our pipeline monitors SEC EDGAR continuously. Every new
                  filing — 10-K, 10-Q, 8-K, Form 4, DEF 14A — gets an AI
                  summary, significance score, and risk assessment within
                  minutes.
                </p>
                <Button
                  variant="outline"
                  render={<Link href="/recent-filings" />}
                >
                  See recent filings
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold">Get Alerted Instantly</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Set custom alert rules — by filing type, significance
                  threshold, insider activity, or keywords. Get email alerts
                  for the filings that matter to your portfolio.
                </p>
                <Button
                  variant="outline"
                  render={<Link href="/insider-buying" />}
                >
                  View insider trades
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-8 space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Insider Buy Alert</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CEO purchased 50,000 shares worth $11.2M in open market
                    buy. Significance: 7/10
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">10-K Annual Report</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Record Q4 revenue, up 8% YoY. AI-powered earnings impact
                    assessment included. Significance: 9/10
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-destructive" />
                    <span className="font-semibold">Risk Flag Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Going-concern warning in 10-Q filing. Material weakness in
                    internal controls. Significance: 10/10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FEATURES — Full width grid ===================== */}
        <section className="py-24 px-6 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Built for Serious Investors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to stay ahead of SEC filings
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">
                    Never Miss a Material Event
                  </CardTitle>
                  <CardDescription className="text-base">
                    10-K, 10-Q, 8-K, DEF 14A, Form 4 — AI reads the full text
                    and gives you a plain-English summary with key facts
                    highlighted.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">
                    Significance Scores (1-10)
                  </CardTitle>
                  <CardDescription className="text-base">
                    Skip the routine noise. Focus on the filings that actually
                    move the needle. Every filing scored by AI for impact.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Bell className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">
                    Insider Trade Intelligence
                  </CardTitle>
                  <CardDescription className="text-base">
                    Know instantly when insiders buy or sell. Form 4 filings
                    parsed automatically with transaction details and dollar
                    amounts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">
                    The Stocks Wall Street Ignores
                  </CardTitle>
                  <CardDescription className="text-base">
                    7,600+ companies on NYSE and Nasdaq — including the
                    small-caps and micro-caps that Bloomberg barely covers.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">
                    Minutes, Not Hours
                  </CardTitle>
                  <CardDescription className="text-base">
                    Our pipeline processes new SEC filings within minutes of
                    publication. Get your alert before the market reacts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">
                    Build Your Own Edge (API)
                  </CardTitle>
                  <CardDescription className="text-base">
                    Pro plan includes full API access to filing summaries,
                    significance scores, and insider trade data for your own
                    tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* ===================== PRICING CTA — Gradient accent ===================== */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Start Free, Upgrade When Ready
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                3 stocks free forever
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Cancel anytime
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                render={<Link href="/auth/signup" />}
                className="text-base px-8 py-6"
              >
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/pricing" />}
                className="text-base px-8 py-6"
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </section>

        {/* ===================== NEWSLETTER — Bordered section ===================== */}
        <section className="py-16 px-6 border-t border-border">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Weekly Small-Cap Briefing
            </h2>
            <p className="text-muted-foreground text-lg">
              The most significant filings and insider trades, summarized by AI
              and reviewed by our team. Free, weekly, no spam.
            </p>
            <div className="flex justify-center">
              <NewsletterForm source="homepage" />
            </div>
          </div>
        </section>

        {/* ===================== FOOTER — Full width ===================== */}
        <footer className="px-6 py-10 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Brefyr</span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                ["/blog", "Blog"],
                ["/archive", "Newsletter"],
                ["/about", "About"],
                ["/api-docs", "API"],
                ["/privacy", "Privacy"],
                ["/terms", "Terms"],
                ["/disclaimer", "Disclaimer"],
                ["/feed.xml", "RSS"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-center sm:text-right max-w-sm">
              Data from{" "}
              <a
                href="https://www.sec.gov/edgar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                SEC EDGAR
              </a>
              . Not investment advice.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
