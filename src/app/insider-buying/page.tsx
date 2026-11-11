import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getRecentFilings,
  getFilingsWithCompanies,
} from "@/lib/supabase/queries";
import { displayTicker, isRealTicker } from "@/lib/utils";
import { Pagination } from "@/components/pagination";
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
  title: "Insider Buying — Recent SEC Form 4 Purchases",
  description:
    "Track recent insider buying activity across 7,600+ US small-cap stocks. See which company executives and directors are purchasing shares, with significance scores.",
  openGraph: {
    title: "Insider Buying — Recent SEC Form 4 Purchases | Brefyr",
    description:
      "Track recent insider buying activity across 7,600+ US small-cap stocks with significance analysis.",
  },
};

function significanceBadge(score: number) {
  if (score >= 8)
    return <Badge variant="destructive">Critical ({score}/10)</Badge>;
  if (score >= 5)
    return <Badge variant="default">Notable ({score}/10)</Badge>;
  return <Badge variant="secondary">Routine ({score}/10)</Badge>;
}

const PER_PAGE = 30;

export default async function InsiderBuyingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  const supabase = createStaticClient();

  const filings = await getRecentFilings(supabase, {
    filingType: "4",
    limit: 500,
  });

  const filingsWithCompanies = await getFilingsWithCompanies(supabase, filings);

  const buyFilings = filingsWithCompanies.filter((f) => {
    // insider_data can be an array of trades or a single object
    const raw = f.insider_data;
    if (!raw) return false;
    const trades = Array.isArray(raw) ? raw : [raw];
    return trades.some((trade) => {
      const txType = ((trade as Record<string, unknown>).transaction_type as string) ?? "";
      return (
        txType.toLowerCase().includes("purchase") ||
        txType.toLowerCase().includes("buy") ||
        txType === "P" ||
        txType === "buy"
      );
    });
  });

  const totalPages = Math.ceil(buyFilings.length / PER_PAGE);
  const pageFilings = buyFilings.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Insider Buying</h1>
        <p className="text-muted-foreground">
          Recent insider purchase activity from SEC Form 4 filings across
          small-cap stocks. Updated every hour.
        </p>
      </div>

      {buyFilings.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-muted-foreground">
              No insider buying activity found recently. This page updates
              automatically as new Form 4 filings are processed.
            </p>
            <Button
              variant="outline"
              render={<Link href="/insider-selling" />}
            >
              View Insider Selling
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
        <p className="text-sm text-muted-foreground">
          Showing {pageFilings.length} of {buyFilings.length} insider buys
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="hidden sm:table-cell">Insider</TableHead>
              <TableHead className="hidden md:table-cell">Summary</TableHead>
              <TableHead>Significance</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageFilings.map((filing) => {
              const company = filing.company;
              const rawInsider = filing.insider_data;
              const insider = Array.isArray(rawInsider) ? (rawInsider[0] as Record<string, unknown> | undefined) ?? null : rawInsider as Record<string, unknown> | null;

              return (
                <TableRow key={filing.id}>
                  <TableCell className="whitespace-nowrap">
                    {new Date(filing.filed_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Link
                      href={`/stocks/${(company?.ticker ?? "").toLowerCase()}`}
                      className="font-medium hover:underline"
                    >
                      {displayTicker(company?.ticker ?? "N/A", company?.name)}
                    </Link>
                    {isRealTicker(company?.ticker ?? "") && (
                      <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                        {company?.name}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell max-w-[160px] truncate">
                    {(insider?.person as string) ?? (insider?.name as string) ?? "—"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs">
                    <p className="line-clamp-2 text-sm">{filing.one_line_summary ?? "Processing..."}</p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {significanceBadge(filing.significance_score)}
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">
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
        <Pagination currentPage={page} totalPages={totalPages} basePath="/insider-buying" />
        </>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" render={<Link href="/insider-selling" />}>
          Insider Selling
        </Button>
        <Button variant="outline" render={<Link href="/recent-filings" />}>
          All Recent Filings
        </Button>
      </div>
    </main>
    </>
  );
}
