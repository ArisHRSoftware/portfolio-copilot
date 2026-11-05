import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserStocksWithCompanies } from "@/lib/supabase/queries";
import { getTierInfo } from "@/lib/tier-gating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrendingUp } from "lucide-react";
import { AddStockForm } from "./add-stock-form";
import { StockCard } from "./stock-card";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function PortfolioPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const [stocks, tierInfo] = await Promise.all([
    getUserStocksWithCompanies(supabase, user.id),
    getTierInfo(supabase, user.id),
  ]);

  const stockLimit = tierInfo.stocks;
  const isUnlimited = stockLimit === -1;
  const canAdd = isUnlimited || stocks.length < stockLimit;

  return (
    <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">Your Portfolio</h1>
          <p className="text-sm text-muted-foreground">
            Track SEC filings and get alerts for the stocks you care about.
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {isUnlimited
            ? `${stocks.length} stocks`
            : `${stocks.length}/${stockLimit} stocks`}
        </Badge>
      </div>

      <Separator />

      {/* Add Stock */}
      <section className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">
          Add a stock
        </h2>
        <AddStockForm userId={user.id} canAdd={canAdd} />
      </section>

      <Separator />

      {/* Stock Grid */}
      {stocks.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-muted-foreground">
            Tracked stocks
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stocks.map((stock) => (
              <StockCard key={stock.id} stock={stock} />
            ))}
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="rounded-full bg-muted p-4">
            <TrendingUp className="size-8 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">No stocks tracked yet</h2>
            <p className="text-sm text-muted-foreground max-w-sm">
              Search for a company above to start tracking its SEC filings and
              get alerts when new filings are published.
            </p>
          </div>
          <Button variant="outline" render={<Link href="/trending" />}>
            Browse Trending Stocks
          </Button>
        </section>
      )}
    </main>
  );
}
