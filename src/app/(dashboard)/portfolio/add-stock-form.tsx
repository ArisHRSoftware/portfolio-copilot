"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Company } from "@/lib/supabase/queries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function AddStockForm({
  userId,
  canAdd,
}: {
  userId: string;
  canAdd: boolean;
}) {
  const router = useRouter();
  const supabase = createClient();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Company[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchCompanies = useCallback(
    async (q: string) => {
      if (q.length < 1) {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      setIsSearching(true);
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("status", "active")
        .or(`ticker.ilike.%${q.replace(/[%_\\]/g, (ch: string) => `\\${ch}`)}%,name.ilike.%${q.replace(/[%_\\]/g, (ch: string) => `\\${ch}`)}%`)
        .limit(8);

      setResults((data ?? []) as Company[]);
      setShowDropdown(true);
      setIsSearching(false);
    },
    [supabase]
  );

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (query.length < 1) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    debounceRef.current = setTimeout(() => {
      searchCompanies(query);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, searchCompanies]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSelect(company: Company) {
    setError(null);
    setIsAdding(true);
    setShowDropdown(false);
    setQuery("");

    const { error: insertError } = await supabase
      .from("user_stocks")
      .insert({ user_id: userId, company_id: company.id } as never);

    if (insertError) {
      if (insertError.code === "23505") {
        setError(`${company.ticker} is already in your portfolio.`);
      } else {
        setError(`Failed to add ${company.ticker}. Please try again.`);
      }
      setIsAdding(false);
      return;
    }

    setIsAdding(false);
    router.refresh();
  }

  if (!canAdd) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3 text-sm">
        <span className="text-muted-foreground">
          You&apos;ve reached your plan&apos;s stock tracking limit.
        </span>
        <Button size="sm" render={<Link href="/pricing" />}>
          Upgrade
        </Button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative max-w-md">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by ticker or company name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setShowDropdown(true);
          }}
          className="pl-8"
          disabled={isAdding}
        />
      </div>

      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}

      {showDropdown && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-popover shadow-md">
          <ul className="max-h-64 overflow-y-auto p-1">
            {results.map((company) => (
              <li key={company.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(company)}
                  disabled={isAdding}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted disabled:opacity-50"
                >
                  <span className="font-mono font-medium">
                    {company.ticker}
                  </span>
                  <span className="truncate text-muted-foreground">
                    {company.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showDropdown && query.length >= 1 && results.length === 0 && !isSearching && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-popover p-3 shadow-md">
          <p className="text-sm text-muted-foreground">
            No companies found for &quot;{query}&quot;
          </p>
        </div>
      )}
    </div>
  );
}
