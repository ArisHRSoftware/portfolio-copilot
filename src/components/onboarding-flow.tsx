"use client";

import { useState, useEffect, useRef, useCallback, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  X,
  Bell,
  FileText,
  Mail,
  TrendingUp,
  Loader2,
} from "lucide-react";
import {
  searchCompanies,
  addStockToPortfolio,
  removeStockFromPortfolio,
  completeOnboarding,
} from "@/app/(dashboard)/onboarding/onboarding-actions";

type SelectedStock = {
  id: string;
  ticker: string;
  name: string;
  sector: string;
};

type SearchResult = {
  id: string;
  ticker: string;
  name: string;
  sector: string;
};

const POPULAR_STOCKS: Array<{ ticker: string; name: string }> = [
  { ticker: "IONQ", name: "IonQ Inc." },
  { ticker: "SMCI", name: "Super Micro Computer" },
  { ticker: "AEHR", name: "Aehr Test Systems" },
  { ticker: "CLOV", name: "Clover Health" },
  { ticker: "OPEN", name: "Opendoor Technologies" },
  { ticker: "SOFI", name: "SoFi Technologies" },
  { ticker: "JOBY", name: "Joby Aviation" },
  { ticker: "RKLB", name: "Rocket Lab USA" },
  { ticker: "DNA", name: "Ginkgo Bioworks" },
  { ticker: "STEM", name: "Stem Inc." },
];

const STEP_COUNT = 4;

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: STEP_COUNT }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current
              ? "w-6 bg-primary"
              : i < current
                ? "w-1.5 bg-primary/40"
                : "w-1.5 bg-muted-foreground/20"
          }`}
        />
      ))}
    </div>
  );
}

// ---- Step 1: Welcome ----

function StepWelcome({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <>
      <CardHeader className="items-center text-center">
        <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="size-6 text-primary" />
        </div>
        <CardTitle className="text-xl">Welcome to Brefyr!</CardTitle>
        <CardDescription className="max-w-sm">
          Let&apos;s set up your portfolio in under a minute
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 text-center">
        <div className="grid gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText className="size-4 shrink-0 text-primary" />
            <span>AI-powered SEC filing alerts for 2,000+ small-cap stocks</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="size-4 shrink-0 text-primary" />
            <span>Get notified when important filings are detected</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="size-4 shrink-0 text-primary" />
            <span>Significance scores and plain-English summaries</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" onClick={onNext}>
          Get Started
          <ArrowRight className="size-4" />
        </Button>
        <button
          type="button"
          onClick={onSkip}
          className="text-xs text-muted-foreground underline-offset-4 hover:underline"
        >
          Skip for now
        </button>
      </CardFooter>
    </>
  );
}

// ---- Step 2: Stock Picker ----

function StepStockPicker({
  selected,
  onAdd,
  onRemove,
  onNext,
  onBack,
}: {
  selected: SelectedStock[];
  onAdd: (stock: SearchResult) => void;
  onRemove: (companyId: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [popularLoading, setPopularLoading] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doSearch = useCallback(async (q: string) => {
    if (q.length < 1) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    setIsSearching(true);
    const res = await searchCompanies(q);
    if (res.success) {
      setResults(res.data);
      setShowDropdown(true);
    }
    setIsSearching(false);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.length < 1) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    debounceRef.current = setTimeout(() => doSearch(query), 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, doSearch]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSelected = (id: string) => selected.some((s) => s.id === id);
  const atLimit = selected.length >= 3;

  async function handlePopularClick(ticker: string) {
    if (atLimit) return;
    setPopularLoading(ticker);
    const res = await searchCompanies(ticker);
    if (res.success && res.data.length > 0) {
      const match = res.data.find(
        (c) => c.ticker.toUpperCase() === ticker.toUpperCase()
      );
      if (match && !isSelected(match.id)) {
        onAdd(match);
      }
    }
    setPopularLoading(null);
  }

  return (
    <>
      <CardHeader className="items-center text-center">
        <CardTitle className="text-xl">Add your first stocks</CardTitle>
        <CardDescription>
          Track up to 3 stocks on the free plan. Search or pick from popular small-caps below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search */}
        <div ref={containerRef} className="relative">
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
              disabled={atLimit}
            />
          </div>

          {showDropdown && results.length > 0 && (
            <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-popover shadow-md">
              <ul className="max-h-48 overflow-y-auto p-1">
                {results.map((company) => {
                  const alreadySelected = isSelected(company.id);
                  return (
                    <li key={company.id}>
                      <button
                        type="button"
                        onClick={() => {
                          if (!alreadySelected && !atLimit) {
                            onAdd(company);
                            setQuery("");
                            setShowDropdown(false);
                          }
                        }}
                        disabled={alreadySelected || atLimit}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted disabled:opacity-50"
                      >
                        <span className="font-mono font-medium">{company.ticker}</span>
                        <span className="truncate text-muted-foreground">{company.name}</span>
                        {alreadySelected && (
                          <CheckCircle2 className="ml-auto size-4 text-primary" />
                        )}
                      </button>
                    </li>
                  );
                })}
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

        {/* Popular suggestions */}
        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Popular small-caps
          </p>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_STOCKS.map((stock) => (
              <button
                key={stock.ticker}
                type="button"
                onClick={() => handlePopularClick(stock.ticker)}
                disabled={atLimit || popularLoading === stock.ticker}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium transition-colors hover:bg-muted disabled:opacity-50"
              >
                {popularLoading === stock.ticker ? (
                  <Loader2 className="size-3 animate-spin" />
                ) : (
                  <span className="font-mono">{stock.ticker}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected stocks */}
        {selected.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Your picks ({selected.length}/3)
            </p>
            <div className="flex flex-wrap gap-1.5">
              {selected.map((stock) => (
                <Badge key={stock.id} variant="secondary" className="gap-1 pr-1">
                  <span className="font-mono">{stock.ticker}</span>
                  <button
                    type="button"
                    onClick={() => onRemove(stock.id)}
                    className="ml-0.5 rounded-full p-0.5 hover:bg-muted-foreground/20"
                  >
                    <X className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" onClick={onBack} className="w-full">
          <ArrowLeft className="size-4" />
          Back
        </Button>
        <Button
          className="w-full"
          onClick={onNext}
          disabled={selected.length < 1}
        >
          Continue
          <ArrowRight className="size-4" />
        </Button>
      </CardFooter>
    </>
  );
}

// ---- Step 3: Preview ----

function StepPreview({
  selectedStocks,
  onNext,
  onBack,
}: {
  selectedStocks: SelectedStock[];
  onNext: () => void;
  onBack: () => void;
}) {
  const previewStock = selectedStocks[0];

  return (
    <>
      <CardHeader className="items-center text-center">
        <CardTitle className="text-xl">Here&apos;s what you&apos;ll get</CardTitle>
        <CardDescription>
          A preview of the alerts and insights for your tracked stocks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Sample filing alert */}
        <div className="rounded-lg border border-border bg-muted/30 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10">
              <FileText className="size-3.5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium font-mono">
                  {previewStock?.ticker ?? "ACME"}
                </span>
                <Badge variant="outline" className="text-[10px]">
                  10-K
                </Badge>
                <Badge variant="destructive" className="text-[10px]">
                  High
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {previewStock?.name ?? "Example Corp"} &middot; Annual Report
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            &quot;Revenue increased 34% year-over-year driven by new product
            launches. Gross margins expanded to 42% from 38%. Company raised
            full-year guidance citing strong demand pipeline.&quot;
          </p>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <TrendingUp className="size-3 text-green-600" />
              Significance: 8/10
            </span>
            <span>Filed 2 hours ago</span>
          </div>
        </div>

        {/* Sample email digest */}
        <div className="rounded-lg border border-border bg-muted/30 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10">
              <Mail className="size-3.5 text-primary" />
            </div>
            <div>
              <span className="text-sm font-medium">Daily Email Digest</span>
              <p className="text-xs text-muted-foreground">
                Delivered to your inbox every morning
              </p>
            </div>
          </div>
          <div className="rounded-md border border-border bg-background p-2.5 text-xs text-muted-foreground">
            <p className="mb-1 font-medium text-foreground">
              Your Brefyr Daily Brief
            </p>
            <p>
              {selectedStocks.length} stock{selectedStocks.length !== 1 ? "s" : ""} tracked
              &middot; 2 new filings &middot; 1 high-significance alert
            </p>
            <div className="mt-1.5 border-t border-border pt-1.5">
              {selectedStocks.slice(0, 2).map((s) => (
                <p key={s.id}>
                  <span className="font-mono font-medium">{s.ticker}</span>
                  {" "}&mdash; No new filings
                </p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" onClick={onBack} className="w-full">
          <ArrowLeft className="size-4" />
          Back
        </Button>
        <Button className="w-full" onClick={onNext}>
          See your dashboard
          <ArrowRight className="size-4" />
        </Button>
      </CardFooter>
    </>
  );
}

// ---- Step 4: Done ----

function StepDone({ onFinish }: { onFinish: () => void }) {
  const [isPending, startTransition] = useTransition();

  function handleFinish() {
    startTransition(async () => {
      await completeOnboarding();
      onFinish();
    });
  }

  return (
    <>
      <CardHeader className="items-center text-center">
        <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle2 className="size-6 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle className="text-xl">You&apos;re all set!</CardTitle>
        <CardDescription className="max-w-sm">
          We&apos;ll email you when important filings are detected for your
          tracked stocks. You can always add more from your portfolio page.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 text-center">
        <div className="grid gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Bell className="size-4 shrink-0 text-primary" />
            <span>Alerts for high-significance filings</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="size-4 shrink-0 text-primary" />
            <span>Weekly email digest with your portfolio summary</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="size-4 shrink-0 text-primary" />
            <span>Plain-English AI summaries for every filing</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleFinish} disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Setting up...
            </>
          ) : (
            <>
              Go to Dashboard
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </>
  );
}

// ---- Main OnboardingFlow ----

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedStocks, setSelectedStocks] = useState<SelectedStock[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [stockError, setStockError] = useState<string | null>(null);

  function handleSkip() {
    router.push("/dashboard");
  }

  async function handleAddStock(stock: SearchResult) {
    if (selectedStocks.some((s) => s.id === stock.id)) return;
    if (selectedStocks.length >= 3) return;

    setIsAdding(true);
    setStockError(null);

    const result = await addStockToPortfolio(stock.id);
    if (result.success) {
      setSelectedStocks((prev) => [...prev, stock]);
    } else {
      setStockError(result.error ?? "Failed to add stock");
    }
    setIsAdding(false);
  }

  async function handleRemoveStock(companyId: string) {
    setStockError(null);
    const result = await removeStockFromPortfolio(companyId);
    if (result.success) {
      setSelectedStocks((prev) => prev.filter((s) => s.id !== companyId));
    }
  }

  function handleFinish() {
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="mb-4">
          <StepIndicator current={step} />
        </div>
        <Card>
          {step === 0 && (
            <StepWelcome onNext={() => setStep(1)} onSkip={handleSkip} />
          )}
          {step === 1 && (
            <>
              <StepStockPicker
                selected={selectedStocks}
                onAdd={handleAddStock}
                onRemove={handleRemoveStock}
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
              />
              {stockError && (
                <div className="px-4 pb-3">
                  <p className="text-xs text-destructive">{stockError}</p>
                </div>
              )}
              {isAdding && (
                <div className="px-4 pb-3">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Loader2 className="size-3 animate-spin" />
                    Adding stock...
                  </p>
                </div>
              )}
            </>
          )}
          {step === 2 && (
            <StepPreview
              selectedStocks={selectedStocks}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && <StepDone onFinish={handleFinish} />}
        </Card>
      </div>
    </div>
  );
}
