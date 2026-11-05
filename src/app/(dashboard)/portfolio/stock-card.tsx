"use client";

import { useTransition } from "react";
import Link from "next/link";
import type { UserStock, Company } from "@/lib/supabase/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Building2, ExternalLink } from "lucide-react";
import { removeStock } from "./remove-stock-action";

function formatMarketCap(cap: number | null): string {
  if (!cap) return "N/A";
  if (cap >= 1_000_000_000) return `$${(cap / 1_000_000_000).toFixed(1)}B`;
  if (cap >= 1_000_000) return `$${(cap / 1_000_000).toFixed(1)}M`;
  return `$${cap.toLocaleString()}`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "No filings yet";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function StockCard({
  stock,
}: {
  stock: UserStock & { company: Company | null };
}) {
  const [isPending, startTransition] = useTransition();
  const company = stock.company;

  function handleRemove() {
    startTransition(async () => {
      await removeStock(stock.id);
    });
  }

  if (!company) {
    return (
      <Card size="sm" className={isPending ? "opacity-50" : ""}>
        <CardHeader>
          <CardTitle className="text-muted-foreground">
            Unknown Company
          </CardTitle>
          <CardAction>
            <Button
              size="icon-xs"
              variant="ghost"
              onClick={handleRemove}
              disabled={isPending}
              aria-label="Remove stock"
            >
              <X />
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    );
  }

  const ticker = company.ticker.toLowerCase();

  return (
    <Card size="sm" className={isPending ? "opacity-50" : ""}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold">{company.ticker}</span>
          <Badge variant="outline" className="text-xs font-normal">
            {company.sector}
          </Badge>
        </CardTitle>
        <CardAction>
          <Button
            size="icon-xs"
            variant="ghost"
            onClick={handleRemove}
            disabled={isPending}
            aria-label={`Remove ${company.ticker}`}
          >
            <X />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="truncate text-sm text-muted-foreground">{company.name}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Building2 className="size-3" />
            {formatMarketCap(company.market_cap)}
          </span>
          <span>Last filing: {formatDate(company.last_filing_date)}</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          render={<Link href={`/stocks/${ticker}`} />}
        >
          View Details
          <ExternalLink data-icon="inline-end" className="size-3" />
        </Button>
      </CardContent>
    </Card>
  );
}
