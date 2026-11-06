import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import { getTrendingStocks } from "@/lib/supabase/queries";
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
    "See which small-cap stocks investors are watching this week. Ranked by page views with AI-powered SEC filing analysis and significance scores.",
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

  // Sort by total views descending
  const sortedTickers = [...tickerViews.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25);

  // Fetch company details for the trending tickers
  const tickerList = sortedTickers.map(([t]) => t);
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

  function formatMarketCap(cap: number | null): string {
    if (!cap) return "—";
    if (cap >= 1_000_000_000) return `$${(cap / 1_000_000_000).toFixed(1)}B`;
    if (cap >= 1_000_000) return `$${(cap / 1_000_000).toFixed(1)}M`;
    return `$${cap.toLocaleString()}`;
  }

  return (
    <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Trending Stocks</h1>
        <p className="text-muted-foreground">
          The most viewed small-cap stocks over the past 7 days. Updated hourly.
        </p>
      </div>

      {sortedTickers.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-muted-foreground">
              No trending data available yet. As users explore stock pages,
              trending data will appear here automatically.
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
              <TableHead className="text-right">7d Views</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTickers.map(([ticker, views], index) => {
              const company = companyMap.get(ticker);
              return (
                <TableRow key={ticker}>
                  <TableCell className="font-medium text-muted-foreground">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/stocks/${ticker.toLowerCase()}`}
                      className="font-medium hover:underline"
                    >
                      {ticker}
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
                    {views.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={
                        <Link href={`/stocks/${ticker.toLowerCase()}`} />
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
  );
}
