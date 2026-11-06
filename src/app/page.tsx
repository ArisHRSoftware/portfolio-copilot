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
import { Separator } from "@/components/ui/separator";
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
} from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    "Brefyr — AI SEC Filing Analysis for Small-Cap Investors",
  description:
    "AI-powered SEC filing analysis for 2,000+ uncovered US small-cap stocks. Get instant insider trading alerts, significance scores, and plain-English summaries. Free to start.",
  openGraph: {
    title: "Brefyr — AI SEC Filing Analysis for Small-Cap Investors",
    description:
      "Stop missing critical SEC filings. AI analyzes every 10-K, 8-K, and insider trade for small-cap stocks the big platforms ignore.",
  },
};

export default async function HomePage() {
  const supabase = createStaticClient();
  const [companies, recentFilings] = await Promise.all([
    getTopCompanies(supabase, 6),
    getRecentFilings(supabase, { limit: 5, minSignificance: 6 }),
  ]);

  return (
    <>
      <WebSiteSchema />
      <SiteHeader />
      <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="px-4 py-16 sm:py-24 text-center max-w-4xl mx-auto space-y-6">
        <Badge variant="secondary" className="text-sm">
          Covering 2,000+ small-cap stocks
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          AI reads every SEC filing{" "}
          <span className="text-primary">so you don&apos;t have to</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plain-English summaries, significance scores, and insider trade
          alerts for the small-cap stocks that Wall Street ignores. Know
          what matters within minutes of an SEC publication.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button size="lg" render={<Link href="/auth/signup" />}>
            Start Free — Track 3 Stocks
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/trending" />}>
            Browse Trending Stocks
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          No credit card required. Upgrade anytime.
        </p>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Value Props */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Every Filing, Summarized</CardTitle>
              <CardDescription>
                10-K, 10-Q, 8-K, DEF 14A, Form 4 — AI reads the full text
                and gives you a plain-English summary with key facts
                highlighted.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Significance Scores</CardTitle>
              <CardDescription>
                Every filing gets a 1-10 score. Skip the routine noise.
                Focus on the filings that actually move the needle for your
                portfolio.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Bell className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Insider Trade Alerts</CardTitle>
              <CardDescription>
                Know instantly when insiders buy or sell. Form 4 filings
                parsed automatically with transaction details and dollar
                amounts.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>2,000+ Small Caps</CardTitle>
              <CardDescription>
                The stocks that Bloomberg, Reuters, and Yahoo Finance
                barely cover. We focus exclusively on the companies others
                overlook.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Minutes, Not Hours</CardTitle>
              <CardDescription>
                Our pipeline processes new SEC filings within minutes of
                publication. Get your alert before the market reacts.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Filing Intelligence API</CardTitle>
              <CardDescription>
                Build on our data. Pro plan includes full API access to
                filing summaries, significance scores, and insider trade
                data.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="px-4 py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">2,000+</p>
            <p className="text-sm text-muted-foreground mt-1">
              Small-cap stocks covered
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">8</p>
            <p className="text-sm text-muted-foreground mt-1">
              SEC filing types analyzed
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">&lt;5 min</p>
            <p className="text-sm text-muted-foreground mt-1">
              Average processing time per filing
            </p>
          </div>
        </div>
      </section>

      {/* Recent High-Significance Filings */}
      {recentFilings.length > 0 && (
        <section className="px-4 py-16 max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Recent Notable Filings
            </h2>
            <p className="text-muted-foreground">
              High-significance filings detected by our AI pipeline
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentFilings.slice(0, 6).map((filing) => (
              <Card key={filing.id} size="sm">
                <CardContent className="pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{filing.filing_type}</Badge>
                    <Badge
                      variant={
                        filing.significance_score >= 8
                          ? "destructive"
                          : "default"
                      }
                    >
                      {filing.significance_score}/10
                    </Badge>
                  </div>
                  <p className="text-sm line-clamp-2">
                    {filing.one_line_summary ?? "Filing analysis in progress..."}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(filing.filed_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full"
                    render={<Link href={`/filings/${filing.slug}`} />}
                  >
                    Read Analysis
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              render={<Link href="/recent-filings" />}
            >
              View All Recent Filings
            </Button>
          </div>
        </section>
      )}

      {/* Active Stocks */}
      {companies.length > 0 && (
        <section className="px-4 py-16 bg-muted/50 space-y-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Actively Tracked Stocks
              </h2>
              <p className="text-muted-foreground">
                Browse any stock to see its full filing history and AI analysis
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((c) => (
                <Link
                  key={c.id}
                  href={`/stocks/${c.ticker}`}
                  className="group"
                >
                  <Card className="transition-colors group-hover:border-primary/50">
                    <CardContent className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-primary">
                          {c.ticker}
                        </span>
                        <span className="text-sm text-muted-foreground truncate max-w-[160px]">
                          {c.name}
                        </span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {c.sector}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" render={<Link href="/trending" />}>
                Browse All Stocks
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="px-4 py-16 max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-center">
          How It Works
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="text-center space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              1
            </div>
            <h3 className="font-semibold">Track Your Stocks</h3>
            <p className="text-sm text-muted-foreground">
              Add the small-cap stocks you care about. Free plan covers 3
              stocks, paid plans up to unlimited.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              2
            </div>
            <h3 className="font-semibold">AI Analyzes Filings</h3>
            <p className="text-sm text-muted-foreground">
              Our pipeline monitors SEC EDGAR continuously. Every new filing
              gets an AI summary within minutes.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              3
            </div>
            <h3 className="font-semibold">Get Alerted</h3>
            <p className="text-sm text-muted-foreground">
              Receive email alerts for significant filings and insider trades.
              Never miss a material event again.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-4 py-16 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Start Free, Upgrade When Ready
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              3 stocks free forever
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Cancel anytime
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" render={<Link href="/auth/signup" />}>
              Create Free Account
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/pricing" />}
            >
              Compare Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-12 max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-xl font-bold tracking-tight">
          Weekly Small-Cap Briefing
        </h2>
        <p className="text-sm text-muted-foreground">
          The most significant filings and insider trades, summarized by AI and
          reviewed by our team. Free, weekly, no spam.
        </p>
        <div className="flex justify-center">
          <NewsletterForm source="homepage" />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">
              Brefyr
            </span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/archive"
              className="hover:text-foreground transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-foreground transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/feed.xml"
              className="hover:text-foreground transition-colors"
            >
              RSS
            </Link>
          </nav>
        </div>
      </footer>
    </main>
    </>
  );
}
