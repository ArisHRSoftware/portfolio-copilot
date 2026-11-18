import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_LINKS_HI = [
  { href: "/hi/glossary", label: "शब्दावली" },
  { href: "/hi/learn", label: "सीखें" },
  { href: "/hi/pricing", label: "मूल्य" },
  { href: "/trending", label: "Stocks", suffix: "(English)" },
  { href: "/recent-filings", label: "Filings", suffix: "(English)" },
];

export function SiteHeaderHi() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <Link
            href="/hi/glossary"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">
              Bf
            </div>
            Brefyr
          </Link>

          {/* Language toggle */}
          <div className="flex items-center gap-1 text-xs border rounded-full px-2 py-0.5">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              EN
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="font-medium text-foreground">HI</span>
          </div>

          <nav className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
            {NAV_LINKS_HI.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
                {link.suffix && (
                  <span className="ml-1 text-xs text-muted-foreground/60">
                    {link.suffix}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/auth/login" />}
          >
            लॉग इन
          </Button>
          <Button
            size="sm"
            render={<Link href="/auth/signup" />}
            className="hidden sm:inline-flex"
          >
            मुफ्त शुरू करें
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              aria-label="नेविगेशन मेनू खोलें"
              className="sm:hidden inline-flex shrink-0 items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Menu className="size-5" />
              <span className="sr-only">मेनू</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="text-lg font-semibold">Brefyr</SheetTitle>
              <nav className="flex flex-col gap-3 mt-6">
                {NAV_LINKS_HI.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                    {link.suffix && (
                      <span className="ml-1 text-xs text-muted-foreground/60">
                        {link.suffix}
                      </span>
                    )}
                  </Link>
                ))}
                <div className="border-t border-border pt-3 mt-2 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    render={<Link href="/auth/login" />}
                    className="w-full"
                  >
                    लॉग इन
                  </Button>
                  <Button
                    size="sm"
                    render={<Link href="/auth/signup" />}
                    className="w-full"
                  >
                    मुफ्त शुरू करें
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
