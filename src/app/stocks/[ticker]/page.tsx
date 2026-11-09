import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getCompanyByTicker,
  getTopCompanies,
  getRecentFilings,
  type Filing,
  type Company,
} from "@/lib/supabase/queries";
import {
  BreadcrumbSchema,
  CorporationSchema,
  FAQSchema,
} from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { FreshnessBadge } from "@/components/freshness-badge";
import { LastUpdatedFooter } from "@/components/last-updated-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { sectorNameToSlug } from "@/lib/constants/sectors";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const supabase = createStaticClient();
  const companies = await getTopCompanies(supabase, 100);
  return companies.map((c) => ({ ticker: c.ticker.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const upperTicker = ticker.toUpperCase().split(",")[0].trim();

  const supabase = createStaticClient();
  const company = await getCompanyByTicker(supabase, upperTicker);
  const filings = company
    ? await getRecentFilings(supabase, { companyId: company.id, limit: 1 })
    : [];

  const companyName = company?.name ?? upperTicker;
  const sector = company?.sector ?? "";
  const exchange = company?.exchange ?? "";
  const filingCount = filings.length > 0 ? "analyzed" : "tracked";

  const description = `${companyName} (${upperTicker}) SEC filing analysis${sector ? ` — ${sector} company` : ""}${exchange ? ` on ${exchange}` : ""}. ${filingCount} filings with plain-English summaries, insider trade tracking, and significance scoring.`;

  return {
    title: `${companyName} (${upperTicker}) — SEC Filings & Analysis`,
    description,
    openGraph: {
      title: `${companyName} (${upperTicker}) — SEC Filings & Analysis | Brefyr`,
      description,
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function significanceBadge(score: number) {
  if (score >= 8)
    return <Badge variant="destructive">Critical ({score}/10)</Badge>;
  if (score >= 5)
    return <Badge variant="default">Notable ({score}/10)</Badge>;
  return <Badge variant="secondary">Routine ({score}/10)</Badge>;
}

function formatMarketCap(cap: number | null): string {
  if (!cap) return "N/A";
  if (cap >= 1_000_000_000_000)
    return `$${(cap / 1_000_000_000_000).toFixed(1)}T`;
  if (cap >= 1_000_000_000) return `$${(cap / 1_000_000_000).toFixed(1)}B`;
  if (cap >= 1_000_000) return `$${(cap / 1_000_000).toFixed(1)}M`;
  return `$${cap.toLocaleString()}`;
}

function buildFAQs(
  company: Company,
  filings: Filing[],
  insiderFilings: Filing[]
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  // Q1: What does the company do?
  const desc =
    company.description ??
    (company.sic_description
      ? `${company.name} is a ${company.sic_description.toLowerCase()} company${company.state_of_incorporation ? ` incorporated in ${company.state_of_incorporation}` : ""}, trading on the ${company.exchange}.`
      : `${company.name} (${company.ticker}) is a publicly traded company on the ${company.exchange} in the ${company.sector} sector.`);
  faqs.push({ question: `What does ${company.name} do?`, answer: desc });

  // Q2: Recent filings
  if (filings.length > 0) {
    const types = [...new Set(filings.map((f) => f.filing_type))].join(", ");
    faqs.push({
      question: `What SEC filings has ${company.ticker} made recently?`,
      answer: `Brefyr has analyzed ${filings.length} SEC filing${filings.length !== 1 ? "s" : ""} for ${company.ticker}, including ${types}. The most recent filing was a ${filings[0].filing_type} filed on ${new Date(filings[0].filed_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.`,
    });
  } else {
    faqs.push({
      question: `What SEC filings has ${company.ticker} made recently?`,
      answer: `No SEC filings have been processed for ${company.ticker} yet. Filings will be analyzed automatically when the EDGAR pipeline next runs.`,
    });
  }

  // Q3: Insider activity
  if (insiderFilings.length > 0) {
    faqs.push({
      question: `Is there insider buying or selling at ${company.ticker}?`,
      answer: `${insiderFilings.length} insider transaction${insiderFilings.length !== 1 ? "s have" : " has"} been detected in recent ${company.ticker} filings. Review the insider activity section above for details on each transaction.`,
    });
  } else {
    faqs.push({
      question: `Is there insider buying or selling at ${company.ticker}?`,
      answer: `No recent insider transactions have been detected in ${company.ticker} SEC filings.`,
    });
  }

  // Q4: Location
  if (company.state_of_incorporation) {
    faqs.push({
      question: `Where is ${company.name} incorporated?`,
      answer: `${company.name} is incorporated in ${company.state_of_incorporation} and is classified as a ${company.filer_category ?? "reporting"} filer with the SEC.`,
    });
  }

  // Q5: Fiscal year
  if (company.fiscal_year_end) {
    faqs.push({
      question: `When does ${company.ticker}'s fiscal year end?`,
      answer: `${company.name}'s fiscal year ends in ${company.fiscal_year_end}. Annual 10-K reports are typically filed within 60-90 days after the fiscal year end.`,
    });
  }

  return faqs;
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function StockPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const upperTicker = ticker.toUpperCase();

  // Accept standard tickers (AAPL), CIK-based (CIK1234567), and
  // multi-ticker (JETBF, JETMF → take first before comma)
  const cleanTicker = upperTicker.split(",")[0].trim();
  if (!/^[A-Z0-9]{1,15}$/.test(cleanTicker)) {
    notFound();
  }

  const supabase = createStaticClient();
  const company = await getCompanyByTicker(supabase, cleanTicker);

  if (!company) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1 className="text-3xl font-bold">Stock Not Found</h1>
        <p className="text-muted-foreground">
          We don&apos;t have data for ticker &quot;{upperTicker}&quot; yet.
        </p>
        <Button render={<Link href="/trending" />}>
          Browse Trending Stocks
        </Button>
      </main>
    );
  }

  const filings = await getRecentFilings(supabase, {
    companyId: company.id,
    limit: 50,
  });

  const mostRecentFilingDate =
    filings[0]?.filed_date ?? company.last_filing_date ?? null;

  const insiderFilings = filings.filter(
    (f: Filing) =>
      f.insider_data &&
      Object.keys(f.insider_data as Record<string, unknown>).length > 0
  );

  // Peer companies from same sector
  const { data: peerData } = await supabase
    .from("companies")
    .select("ticker, name, sector, last_filing_date")
    .eq("sector", company.sector)
    .neq("ticker", company.ticker)
    .eq("status", "active")
    .order("market_cap", { ascending: false, nullsFirst: false })
    .limit(5);

  const peers = (peerData ?? []) as Array<{
    ticker: string;
    name: string;
    sector: string;
    last_filing_date: string | null;
  }>;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
  const stockUrl = `${siteUrl}/stocks/${company.ticker.toLowerCase()}`;
  const edgarUrl = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${company.cik_number}&type=&dateb=&owner=include&count=40`;
  const rssUrl = `${siteUrl}/feed/${company.ticker.toLowerCase()}`;
  const sectorSlug = sectorNameToSlug(company.sector);

  const faqs = buildFAQs(company, filings, insiderFilings);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: company.sector, url: `${siteUrl}/sectors/${sectorSlug}` },
          { name: `${company.ticker}`, url: stockUrl },
        ]}
      />
      <CorporationSchema
        name={company.name}
        ticker={company.ticker}
        exchange={company.exchange}
        url={stockUrl}
        state={company.state_of_incorporation}
        description={company.description}
      />
      <FAQSchema questions={faqs} />

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold tracking-tight">
            {company.name}
          </h1>
          <Badge variant="outline" className="text-base font-mono">
            {company.ticker}
          </Badge>
          {company.market_cap && company.market_cap > 0 && (
            <Badge variant="secondary">
              {formatMarketCap(company.market_cap)}
            </Badge>
          )}
          <FreshnessBadge lastFilingDate={mostRecentFilingDate} />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link
            href={`/sectors/${sectorSlug}`}
            className="hover:underline"
          >
            {company.sector}
          </Link>
          <span aria-hidden="true">&middot;</span>
          <span>{company.exchange}</span>
          {company.sic_description && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{company.sic_description}</span>
            </>
          )}
          {company.last_filing_date && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>
                Last filing:{" "}
                {new Date(company.last_filing_date).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric" }
                )}
              </span>
            </>
          )}
        </div>
        {/* External links */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
          <a
            href={edgarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View on SEC EDGAR &rarr;
          </a>
          <span aria-hidden="true">&middot;</span>
          <a href={rssUrl} className="hover:underline">
            RSS Feed
          </a>
        </div>
      </div>

      {/* Company Overview (prose for SEO/AEO) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Company Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          {company.description ??
            (company.sic_description
              ? `${company.name} is a ${company.sic_description.toLowerCase()} company${company.state_of_incorporation ? ` incorporated in ${company.state_of_incorporation}` : ""}, trading on the ${company.exchange}.`
              : `${company.name} (${company.ticker}) is a publicly traded company on the ${company.exchange} in the ${company.sector} sector.`)}
        </p>
        {filings.length > 0 && (
          <p className="text-muted-foreground leading-relaxed">
            Brefyr has analyzed{" "}
            <strong>{filings.length} SEC filing{filings.length !== 1 ? "s" : ""}</strong>{" "}
            for {company.ticker}, with the most recent being a{" "}
            {filings[0].filing_type} filed on{" "}
            {new Date(filings[0].filed_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            . Each filing is scored for significance on a 1-10 scale to help
            investors quickly identify the most important disclosures.
          </p>
        )}
        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {company.exchange && (
            <div className="text-center p-3 rounded-md bg-muted/50">
              <p className="text-xs text-muted-foreground">Exchange</p>
              <p className="font-medium">{company.exchange}</p>
            </div>
          )}
          {company.sector && (
            <div className="text-center p-3 rounded-md bg-muted/50">
              <p className="text-xs text-muted-foreground">Sector</p>
              <p className="font-medium">{company.sector}</p>
            </div>
          )}
          {company.filer_category && (
            <div className="text-center p-3 rounded-md bg-muted/50">
              <p className="text-xs text-muted-foreground">Filer Category</p>
              <p className="font-medium text-sm">{company.filer_category}</p>
            </div>
          )}
          {company.fiscal_year_end && (
            <div className="text-center p-3 rounded-md bg-muted/50">
              <p className="text-xs text-muted-foreground">Fiscal Year End</p>
              <p className="font-medium">{company.fiscal_year_end}</p>
            </div>
          )}
        </div>
      </section>

      {/* Track CTA */}
      <Card>
        <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
          <div>
            <p className="font-medium">
              Get alerts when new filings are published for {company.ticker}
            </p>
            <p className="text-sm text-muted-foreground">
              Summaries delivered to your inbox within minutes of SEC
              publication.
            </p>
          </div>
          <Button render={<Link href="/pricing" />} size="lg">
            Sign up free
          </Button>
        </CardContent>
      </Card>

      <Separator />

      {/* Filing Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">SEC Filing History</h2>
        {filings.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No filings processed for {company.ticker} yet. This
              company&apos;s filings will be analyzed when the pipeline next
              runs.
            </CardContent>
          </Card>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Summary
                </TableHead>
                <TableHead>Significance</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filings.map((filing) => (
                <TableRow key={filing.id}>
                  <TableCell>
                    {new Date(filing.filed_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "2-digit",
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{filing.filing_type}</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell max-w-xs truncate">
                    {filing.one_line_summary ?? "Processing..."}
                  </TableCell>
                  <TableCell>
                    {significanceBadge(filing.significance_score)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={<Link href={`/filings/${filing.slug}`} />}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </section>

      {/* Insider Trades */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Insider Activity</h2>
        {insiderFilings.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No insider trading activity detected in recent filings for{" "}
              {company.ticker}.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {insiderFilings.slice(0, 6).map((filing) => {
              const insider = filing.insider_data as Record<string, unknown>;
              return (
                <Card key={filing.id} size="sm">
                  <CardHeader>
                    <CardTitle>
                      {(insider.person as string) ??
                        (insider.name as string) ??
                        filing.filing_type}
                    </CardTitle>
                    <CardDescription>
                      {new Date(filing.filed_date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}{" "}
                      &middot; {filing.filing_type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {filing.one_line_summary ??
                        "Details available in full filing."}
                    </p>
                    <div className="mt-2">
                      {significanceBadge(filing.significance_score)}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-1">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Peer Companies */}
      {peers.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Other {company.sector} Companies
          </h2>
          <div className="flex flex-wrap gap-2">
            {peers.map((peer) => (
              <Button
                key={peer.ticker}
                variant="outline"
                size="sm"
                render={
                  <Link href={`/stocks/${peer.ticker.toLowerCase()}`} />
                }
              >
                {peer.ticker} — {peer.name}
              </Button>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <Button variant="outline" render={<Link href="/trending" />}>
          Trending Stocks
        </Button>
        <Button variant="outline" render={<Link href="/recent-filings" />}>
          Recent Filings
        </Button>
        <Button
          variant="outline"
          render={<Link href={`/sectors/${sectorSlug}`} />}
        >
          {company.sector} Sector
        </Button>
      </div>

      <LastUpdatedFooter date={mostRecentFilingDate} />

      {/* Financial Disclaimer */}
      <Separator />
      <p className="text-xs text-muted-foreground leading-relaxed">
        Data sourced from{" "}
        <a
          href="https://www.sec.gov/edgar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          SEC EDGAR
        </a>{" "}
        public filings. For informational purposes only &mdash; not investment
        advice. AI-generated summaries may contain errors. See our{" "}
        <Link href="/disclaimer" className="underline">
          full disclaimer
        </Link>
        .
      </p>
    </main>
    </>
  );
}
