import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getRecentFilings,
  getFilingsWithCompanies,
} from "@/lib/supabase/queries";
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
  title: "Insider Selling — Recent SEC Form 4 Sales",
  description:
    "Track recent insider selling activity across 7,600+ US small-cap stocks. See which company executives and directors are selling shares, with AI-powered significance scores.",
  openGraph: {
    title: "Insider Selling — Recent SEC Form 4 Sales | Brefyr",
    description:
      "Track recent insider selling activity across 7,600+ US small-cap stocks with AI-powered significance analysis.",
  },
};

function significanceBadge(score: number) {
  if (score >= 8)
    return <Badge variant="destructive">Critical ({score}/10)</Badge>;
  if (score >= 5)
    return <Badge variant="default">Notable ({score}/10)</Badge>;
  return <Badge variant="secondary">Routine ({score}/10)</Badge>;
}

export default async function InsiderSellingPage() {
  const supabase = createStaticClient();

  const filings = await getRecentFilings(supabase, {
    filingType: "Form 4",
    limit: 100,
  });

  const filingsWithCompanies = await getFilingsWithCompanies(supabase, filings);

  const sellFilings = filingsWithCompanies.filter((f) => {
    const insider = f.insider_data as Record<string, unknown> | null;
    if (!insider) return false;
    const txType = (insider.transaction_type as string) ?? "";
    return (
      txType.toLowerCase().includes("sale") ||
      txType.toLowerCase().includes("sell") ||
      txType === "S"
    );
  });

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Insider Selling</h1>
        <p className="text-muted-foreground">
          Recent insider selling activity from SEC Form 4 filings across
          small-cap stocks. Updated every hour.
        </p>
      </div>

      {sellFilings.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-muted-foreground">
              No insider selling activity found recently. This page updates
              automatically as new Form 4 filings are processed.
            </p>
            <Button
              variant="outline"
              render={<Link href="/insider-buying" />}
            >
              View Insider Buying
            </Button>
          </CardContent>
        </Card>
      ) : (
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
            {sellFilings.map((filing) => {
              const company = filing.company;
              const insider = filing.insider_data as Record<
                string,
                unknown
              > | null;

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
                  <TableCell className="hidden sm:table-cell">
                    {(insider?.name as string) ?? "—"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">
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

      <div className="flex items-center gap-4">
        <Button variant="outline" render={<Link href="/insider-buying" />}>
          Insider Buying
        </Button>
        <Button variant="outline" render={<Link href="/recent-filings" />}>
          All Recent Filings
        </Button>
      </div>
    </main>
    </>
  );
}
