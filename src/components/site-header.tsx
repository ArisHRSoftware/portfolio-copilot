import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 items-center justify-between px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">
              PC
            </div>
            Portfolio Copilot
          </Link>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/trending"
              className="hover:text-foreground transition-colors"
            >
              Stocks
            </Link>
            <Link
              href="/recent-filings"
              className="hover:text-foreground transition-colors"
            >
              Filings
            </Link>
            <Link
              href="/insider-buying"
              className="hover:text-foreground transition-colors"
            >
              Insider Trades
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/auth/login" />}
          >
            Log in
          </Button>
          <Button size="sm" render={<Link href="/auth/signup" />}>
            Sign up free
          </Button>
        </div>
      </div>
    </header>
  );
}
