"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Company } from "@/lib/supabase/queries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, ArrowUpDown, X } from "lucide-react";

interface ScreenerPanelProps {
  companies: Company[];
  sectors: readonly string[];
}

type SortField = "ticker" | "name" | "sector" | "market_cap" | "last_filing_date";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 50;

function formatMarketCap(cap: number | null): string {
  if (!cap) return "—";
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(1)}B`;
  if (cap >= 1e6) return `$${(cap / 1e6).toFixed(0)}M`;
  return `$${cap.toLocaleString()}`;
}

export function ScreenerPanel({ companies, sectors }: ScreenerPanelProps) {
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("market_cap");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    let result = companies;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.ticker.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q)
      );
    }

    if (sectorFilter !== "all") {
      result = result.filter((c) => c.sector === sectorFilter);
    }

    result = [...result].sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      switch (sortField) {
        case "ticker":
          return a.ticker.localeCompare(b.ticker) * dir;
        case "name":
          return a.name.localeCompare(b.name) * dir;
        case "sector":
          return a.sector.localeCompare(b.sector) * dir;
        case "market_cap":
          return ((a.market_cap ?? 0) - (b.market_cap ?? 0)) * dir;
        case "last_filing_date":
          return (
            (new Date(a.last_filing_date ?? "1970").getTime() -
              new Date(b.last_filing_date ?? "1970").getTime()) *
            dir
          );
        default:
          return 0;
      }
    });

    return result;
  }, [companies, search, sectorFilter, sortField, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageData = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
    setPage(0);
  }

  function clearFilters() {
    setSearch("");
    setSectorFilter("all");
    setPage(0);
  }

  const hasFilters = search || sectorFilter !== "all";

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Stock Screener</h1>
        <p className="text-muted-foreground">
          Filter and sort across {companies.length.toLocaleString()} small-cap
          stocks.
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="flex flex-col sm:flex-row gap-3 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by ticker or company name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="pl-9"
            />
          </div>
          <Select
            value={sectorFilter}
            onValueChange={(v) => {
              setSectorFilter(v ?? "all");
              setPage(0);
            }}
          >
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Sectors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sectors</SelectItem>
              {sectors.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      <div className="text-sm text-muted-foreground">
        {filtered.length.toLocaleString()} stocks found
      </div>

      <Card>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <button
                    className="flex items-center gap-1 hover:text-foreground"
                    onClick={() => toggleSort("ticker")}
                  >
                    Ticker
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead>
                  <button
                    className="flex items-center gap-1 hover:text-foreground"
                    onClick={() => toggleSort("name")}
                  >
                    Company
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  <button
                    className="flex items-center gap-1 hover:text-foreground"
                    onClick={() => toggleSort("sector")}
                  >
                    Sector
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button
                    className="flex items-center gap-1 hover:text-foreground ml-auto"
                    onClick={() => toggleSort("market_cap")}
                  >
                    Market Cap
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead className="text-right hidden md:table-cell">
                  <button
                    className="flex items-center gap-1 hover:text-foreground ml-auto"
                    onClick={() => toggleSort("last_filing_date")}
                  >
                    Last Filing
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    No stocks match your filters.
                  </TableCell>
                </TableRow>
              ) : (
                pageData.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      <Link
                        href={`/stocks/${c.ticker.toLowerCase()}`}
                        className="font-mono font-bold text-primary hover:underline"
                      >
                        {c.ticker}
                      </Link>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {c.name}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant="secondary" className="text-xs">
                        {c.sector}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {formatMarketCap(c.market_cap)}
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground hidden md:table-cell">
                      {c.last_filing_date
                        ? new Date(c.last_filing_date).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" }
                          )
                        : "—"}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Page {page + 1} of {totalPages}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
