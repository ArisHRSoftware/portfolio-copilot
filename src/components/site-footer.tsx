import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Investment disclaimer — required for financial data sites */}
        <div className="mb-6 rounded-lg bg-muted/50 px-4 py-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Important:</strong> Brefyr is not a financial advisor.
            All content is for informational purposes only and does not
            constitute investment advice. AI-generated summaries may contain
            errors. Always verify data on{" "}
            <a
              href="https://www.sec.gov/edgar"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              SEC EDGAR
            </a>{" "}
            and consult a qualified financial advisor before making investment
            decisions.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand + copyright */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-foreground">Brefyr</span>
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Brefyr. All rights reserved.
            </span>
          </div>

          {/* Legal links */}
          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
            aria-label="Footer navigation"
          >
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">
              Disclaimer
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <a
              href="mailto:support@brefyr.com"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Data source attribution */}
        <div className="mt-4 text-xs text-muted-foreground/70">
          SEC filing data sourced from the U.S. Securities and Exchange
          Commission&apos;s EDGAR system. Brefyr is not affiliated with or
          endorsed by the SEC.
        </div>
      </div>
    </footer>
  );
}
