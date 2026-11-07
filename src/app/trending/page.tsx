import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import { getTrendingStocks, getRecentFilings, getFilingsWithCompanies } from "@/lib/supabase/queries";
import { SiteHeader } from "@/components/site-header";
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

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Trending Stocks — Most Viewed Small-Cap Stocks",
  description:
    "See which small-cap stocks investors are watching this week. Ranked by page views with SEC filing analysis and significance scores.",
  openGraph: {
    title: "Trending Stocks — Most Viewed This Week | Brefyr",
    description:
      "Discover which small-cap stocks investors are watching, ranked by 7-day page views.",
  },
};

export default async function TrendingPage() {
  const supabase = createStaticClient();

  const pageViews = await getTrendingStocks(supabase, 7, 50);

  // Aggregate views per ticker
  const tickerViews = new Map<string, number>();
  for (const pv of pageViews) {
    const segments = pv.page_path.split("/");
    const ticker = segments[2]?.toUpperCase();
    if (ticker) {
      tickerViews.set(ticker, (tickerViews.get(ticker) ?? 0) + pv.count);
    }
  }

  const sortedTickers = [...tickerViews.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25);

  const hasViewData = sortedTickers.length > 0;

  // Fallback: show most active companies by recent filings when no page views
  type ActiveEntry = { ticker: string; filingCount: number };
  let activeCompanies: ActiveEntry[] = [];
  if (!hasViewData) {
    const recentFilings = await getRecentFilings(supabase, { limit: 200 });
    const filingsWithCo = await getFilingsWithCompanies(supabase, recentFilings);
    const tickerCounts = new Map<string, number>();
    for (const f of filingsWithCo) {
      const t = f.company?.ticker;
      if (t) tickerCounts.set(t, (tickerCounts.get(t) ?? 0) + 1);
    }
    activeCompanies = [...tickerCounts.entries()]
      .map(([ticker, filingCount]) => ({ ticker, filingCount }))
      .sort((a, b) => b.filingCount - a.filingCount)
      .slice(0, 25);
  }

  // Fetch company details for whichever list we're showing
  const tickerList = hasViewData
    ? sortedTickers.map(([t]) => t)
    : activeCompanies.map((a) => a.ticker);

  let companies: Array<{
    ticker: string;
    name: string;
    sector: string;
    market_cap: number | null;
    last_filing_date: string | null;
  }> = [];

  if (tickerList.length > 0) {
    const { data } = await supabase
      .from("companies")
      .select("ticker, name, sector, market_cap, last_filing_date")
      .in("ticker", tickerList);
    companies = (data ?? []) as typeof companies;
  }

  const companyMap = new Map(companies.map((c) => [c.ticker, c]));

  const hasData = hasViewData || activeCompanies.length > 0;
  const heading = hasViewData ? "Trending Stocks" : "Most Active Stocks";
  const subtitle = hasViewData
    ? "The most viewed stocks over the past 7 days. Updated hourly."
    : "Companies with the most recent SEC filings. Updated as new filings are processed.";
  const metricLabel = hasViewData ? "7d Views" : "Filings";

  // Build unified row data
  const rows = hasViewData
    ? sortedTickers.map(([ticker, views]) => ({ ticker, metric: views }))
    : activeCompanies.map((a) => ({ ticker: a.ticker, metric: a.filingCount }));

  function formatMarketCap(cap: number | null): string {
    if (!cap) return "—";
    if (cap >= 1_000_000_000) return `$${(cap / 1_000_000_000).toFixed(1)}B`;
    if (cap >= 1_000_000) return `$${(cap / 1_000_000).toFixed(1)}M`;
    return `$${cap.toLocaleString()}`;
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      {!hasData ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-muted-foreground">
              No data available yet. This page updates automatically as SEC
              filings are processed.
            </p>
            <Button
              variant="outline"
              render={<Link href="/recent-filings" />}
            >
              Browse Recent Filings
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="hidden sm:table-cell">Sector</TableHead>
              <TableHead className="hidden md:table-cell">Market Cap</TableHead>
              <TableHead className="text-right">{metricLabel}</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => {
              const company = companyMap.get(row.ticker);
              return (
                <TableRow key={row.ticker}>
                  <TableCell className="font-medium text-muted-foreground">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/stocks/${row.ticker.toLowerCase()}`}
                      className="font-medium hover:underline"
                    >
                      {row.ticker}
                    </Link>
                    {company && (
                      <p className="text-xs text-muted-foreground truncate max-w-[160px]">
                        {company.name}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {company?.sector ? (
                      <Badge variant="secondary">{company.sector}</Badge>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatMarketCap(company?.market_cap ?? null)}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {row.metric.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={
                        <Link href={`/stocks/${row.ticker.toLowerCase()}`} />
                      }
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

      <div className="flex items-center gap-4">
        <Button variant="outline" render={<Link href="/insider-buying" />}>
          Insider Buying
        </Button>
        <Button variant="outline" render={<Link href="/recent-filings" />}>
          Recent Filings
        </Button>
      </div>
    </main>
    </>
  );
}
