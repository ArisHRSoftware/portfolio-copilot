import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import { getFilingBySlug } from "@/lib/supabase/queries";
import { FAQSchema, BreadcrumbSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShareButtons } from "@/components/share-buttons";

export const dynamicParams = true;
export const revalidate = false;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createStaticClient();
  const filing = await getFilingBySlug(supabase, slug);

  if (!filing) {
    return {
      title: "Filing Not Found",
      description: "This SEC filing could not be found.",
    };
  }

  const company = filing.company;
  const companyName = company?.name ?? "Unknown Company";
  const ticker = company?.ticker ?? "";
  const filedDate = new Date(filing.filed_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const title = `${ticker} ${filing.filing_type} — ${filedDate}`;
  const description =
    filing.one_line_summary ??
    `AI analysis of ${companyName} (${ticker}) ${filing.filing_type} filing from ${filedDate}. Significance score: ${filing.significance_score}/10.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Brefyr`,
      description,
    },
  };
}

function significanceBadge(score: number) {
  if (score >= 8)
    return <Badge variant="destructive">Critical ({score}/10)</Badge>;
  if (score >= 5)
    return <Badge variant="default">Notable ({score}/10)</Badge>;
  return <Badge variant="secondary">Routine ({score}/10)</Badge>;
}

export default async function FilingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = createStaticClient();
  const filing = await getFilingBySlug(supabase, slug);

  if (!filing) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1 className="text-3xl font-bold">Filing Not Found</h1>
        <p className="text-muted-foreground">
          This filing has not been processed yet or does not exist.
        </p>
        <Button render={<Link href="/recent-filings" />}>
          Browse Recent Filings
        </Button>
      </main>
    );
  }

  const company = filing.company;
  const ticker = company?.ticker ?? "";
  const companyName = company?.name ?? "Unknown Company";
  const filedDate = new Date(filing.filed_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const summaryJson = filing.ai_summary_json as Record<string, unknown> | null;
  const keyFacts = (summaryJson?.key_facts as string[]) ?? [];
  const riskFlags = (summaryJson?.risk_flags as string[]) ?? [];
  const faq =
    (summaryJson?.faq as Array<{ question: string; answer: string }>) ?? [];

  const insider = filing.insider_data as Record<string, unknown> | null;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
      {faq.length > 0 && <FAQSchema questions={faq} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          {
            name: ticker,
            url: `${siteUrl}/stocks/${ticker.toLowerCase()}`,
          },
          {
            name: `${filing.filing_type} — ${filedDate}`,
            url: `${siteUrl}/filings/${filing.slug}`,
          },
        ]}
      />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/stocks/${ticker.toLowerCase()}`} className="hover:text-foreground transition-colors">
          {ticker}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground">{filing.filing_type}</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold tracking-tight">
            {companyName} — {filing.filing_type}
          </h1>
          {significanceBadge(filing.significance_score)}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <span>Filed {filedDate}</span>
          {filing.accepted_date && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>
                Accepted{" "}
                {new Date(filing.accepted_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </>
          )}
          <span aria-hidden="true">&middot;</span>
          <span className="font-mono text-xs">{filing.accession_number}</span>
        </div>
      </div>

      {/* Share Buttons */}
      <ShareButtons
        url={`${siteUrl}/filings/${filing.slug}`}
        ticker={ticker}
        filingType={filing.filing_type}
        oneLiner={filing.one_line_summary}
      />

      <Separator />

      {/* AI Prose Summary */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AI Summary</h2>
        {filing.ai_summary_prose ? (
          <Card>
            <CardContent className="py-4 prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap leading-relaxed">
                {filing.ai_summary_prose}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              AI summary is being generated. This typically takes a few minutes
              after the filing is published by the SEC.
            </CardContent>
          </Card>
        )}
      </section>

      {/* Key Facts */}
      {keyFacts.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Key Facts</h2>
          <Card>
            <CardContent className="py-4">
              <ul className="space-y-2">
                {keyFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {fact}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Insider Trades */}
      {insider && Object.keys(insider).length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Insider Trades</h2>
          <Card>
            <CardContent className="py-4">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {Object.entries(insider).map(([key, value]) => (
                  <div key={key} className="contents">
                    <dt className="font-medium capitalize">
                      {key.replace(/_/g, " ")}
                    </dt>
                    <dd className="text-muted-foreground">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Risk Flags */}
      {riskFlags.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Risk Flags</h2>
          <div className="flex flex-wrap gap-2">
            {riskFlags.map((flag, i) => (
              <Badge key={i} variant="destructive">
                {flag}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <Card key={i} size="sm">
                <CardHeader>
                  <CardTitle>{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Original Filing Link */}
      <Separator />

      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="outline" render={<Link href={filing.raw_url} target="_blank" rel="noopener noreferrer" />}>
          View Original SEC Filing
        </Button>
        <Button
          variant="outline"
          render={<Link href={`/stocks/${ticker.toLowerCase()}`} />}
        >
          All {ticker} Filings
        </Button>
        <Button variant="outline" render={<Link href="/recent-filings" />}>
          Recent Filings
        </Button>
      </div>
    </main>
  );
}
