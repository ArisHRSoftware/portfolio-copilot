import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getRecentFilings,
  getFilingsWithCompanies,
} from "@/lib/supabase/queries";
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
  title: "Recent SEC Filings — All Filing Types",
  description:
    "Browse the latest SEC filings across 2,000+ US small-cap stocks. Filter by filing type (10-K, 10-Q, 8-K, Form 4, and more) with AI-powered summaries and significance scores.",
  openGraph: {
    title: "Recent SEC Filings | Brefyr",
    description:
      "Browse the latest SEC filings across 2,000+ US small-cap stocks with AI analysis.",
  },
};

function significanceBadge(score: number) {
  if (score >= 8)
    return <Badge variant="destructive">Critical ({score}/10)</Badge>;
  if (score >= 5)
    return <Badge variant="default">Notable ({score}/10)</Badge>;
  return <Badge variant="secondary">Routine ({score}/10)</Badge>;
}

const FILING_TYPES = [
  "All",
  "10-K",
  "10-Q",
  "8-K",
  "4",
  "S-1",
  "DEF 14A",
  "SC 13D",
  "SC 13G",
] as const;

export default async function RecentFilingsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type: filterType } = await searchParams;
  const supabase = createStaticClient();

  const filings = await getRecentFilings(supabase, {
    limit: 100,
    filingType: filterType && filterType !== "All" ? filterType : undefined,
  });

  const filingsWithCompanies = await getFilingsWithCompanies(supabase, filings);

  return (
    <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Recent Filings</h1>
        <p className="text-muted-foreground">
          The latest SEC filings across small-cap stocks, processed with AI
          analysis. Updated every hour.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {FILING_TYPES.map((ft) => {
          const isActive =
            ft === "All" ? !filterType || filterType === "All" : filterType === ft;
          return (
            <Button
              key={ft}
              variant={isActive ? "default" : "outline"}
              size="sm"
              render={
                <Link
                  href={
                    ft === "All"
                      ? "/recent-filings"
                      : `/recent-filings?type=${encodeURIComponent(ft)}`
                  }
                />
              }
            >
              {ft}
            </Button>
          );
        })}
      </div>

      {filingsWithCompanies.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No filings found
            {filterType && filterType !== "All"
              ? ` for type "${filterType}"`
              : ""}
            . New filings are processed as they appear on SEC EDGAR.
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
            {filingsWithCompanies.map((filing) => {
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
                    <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                      {company?.name}
                    </p>
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
    </main>
  );
}
