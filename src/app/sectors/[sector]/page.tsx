import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getCompaniesBySector,
  getRecentFilings,
  getFilingsWithCompanies,
  type Company,
} from "@/lib/supabase/queries";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbSchema } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
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

export const revalidate = 3600;

import {
  SECTOR_DEFINITIONS,
  sectorSlugToName,
} from "@/lib/constants/sectors";

export async function generateStaticParams() {
  return SECTOR_DEFINITIONS.map((s) => ({
    sector: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: sectorSlug } = await params;
  const sectorName = sectorSlugToName(sectorSlug);

  return {
    title: `${sectorName} Stocks — SEC Filings & Filing Analysis`,
    description: `Browse ${sectorName} sector small-cap stocks with SEC filing analysis. View recent filings, insider trades, and significance scores for ${sectorName} companies.`,
    openGraph: {
      title: `${sectorName} Stocks | Brefyr`,
      description: `${sectorName} sector small-cap stocks with SEC filing analysis.`,
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

function formatMarketCap(cap: number | null): string {
  if (!cap) return "—";
  if (cap >= 1_000_000_000) return `$${(cap / 1_000_000_000).toFixed(1)}B`;
  if (cap >= 1_000_000) return `$${(cap / 1_000_000).toFixed(1)}M`;
  return `$${cap.toLocaleString()}`;
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector: sectorSlug } = await params;

  if (!SECTOR_DEFINITIONS.some((s) => s.slug === sectorSlug)) {
    notFound();
  }

  const sectorName = sectorSlugToName(sectorSlug);

  const supabase = createStaticClient();

  const companies = await getCompaniesBySector(supabase, sectorName);

  // Sort by market_cap descending, nulls last
  const sortedCompanies = [...companies].sort((a, b) => {
    if (!a.market_cap && !b.market_cap) return 0;
    if (!a.market_cap) return 1;
    if (!b.market_cap) return -1;
    return b.market_cap - a.market_cap;
  }).slice(0, 50);

  const companyIds = sortedCompanies.map((c) => c.id);

  // Get recent filings for these companies
  // We fetch recent filings and then filter to just these companies
  const allRecentFilings = companyIds.length > 0
    ? await getRecentFilings(supabase, { limit: 200 })
    : [];

  const sectorFilings = allRecentFilings
    .filter((f) => companyIds.includes(f.company_id))
    .slice(0, 20);

  const recentFilingsWithCompanies = await getFilingsWithCompanies(supabase, sectorFilings);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  return (
    <>
      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "Sectors", url: `${siteUrl}/sectors` },
          { name: sectorName, url: `${siteUrl}/sectors/${sectorSlug}` },
        ]}
      />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{sectorName}</h1>
          <Badge variant="secondary">
            {sortedCompanies.length} companies
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Small-cap stocks in the {sectorName} sector with SEC filing
          analysis.
        </p>
      </div>

      {/* Sector Navigation */}
      <div className="flex flex-wrap gap-2">
        {SECTOR_DEFINITIONS.map((s) => {
          const isActive = s.slug === sectorSlug;
          return (
            <Button
              key={s.slug}
              variant={isActive ? "default" : "outline"}
              size="sm"
              render={<Link href={`/sectors/${s.slug}`} />}
            >
              {s.name}
            </Button>
          );
        })}
      </div>

      {/* Companies Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Companies</h2>
        {sortedCompanies.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No companies found in the {sectorName} sector yet.
            </CardContent>
          </Card>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticker</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Exchange</TableHead>
                <TableHead className="hidden md:table-cell">Market Cap</TableHead>
                <TableHead className="hidden md:table-cell">Last Filing</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCompanies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell>
                    <Link
                      href={`/stocks/${company.ticker.toLowerCase()}`}
                      className="font-mono font-medium hover:underline"
                    >
                      {company.ticker}
                    </Link>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {company.name}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant="outline">{company.exchange}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatMarketCap(company.market_cap)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {company.last_filing_date
                      ? new Date(company.last_filing_date).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "2-digit" }
                        )
                      : "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={
                        <Link
                          href={`/stocks/${company.ticker.toLowerCase()}`}
                        />
                      }
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

      <Separator />

      {/* Recent Filings for Sector */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Filings</h2>
        {recentFilingsWithCompanies.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No recent filings found for {sectorName} sector companies.
            </CardContent>
          </Card>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="hidden sm:table-cell">Summary</TableHead>
                <TableHead>Significance</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentFilingsWithCompanies.map((filing) => {
                const company = filing.company;
                return (
                  <TableRow key={filing.id}>
                    <TableCell>
                      {new Date(filing.filed_date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/stocks/${(company?.ticker ?? "").toLowerCase()}`}
                        className="font-medium hover:underline"
                      >
                        {company?.ticker ?? "N/A"}
                      </Link>
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
                );
              })}
            </TableBody>
          </Table>
        )}
      </section>
    </main>
    </>
  );
}
