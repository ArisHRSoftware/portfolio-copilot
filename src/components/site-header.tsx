import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { href: "/trending", label: "Stocks" },
  { href: "/recent-filings", label: "Filings" },
  { href: "/insider-buying", label: "Insider Trades" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
];

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
              Bf
            </div>
            Brefyr
          </Link>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
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
            Log in
          </Button>
          <Button
            size="sm"
            render={<Link href="/auth/signup" />}
            className="hidden sm:inline-flex"
          >
            Sign up free
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="sm:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="text-lg font-semibold">Brefyr</SheetTitle>
              <nav className="flex flex-col gap-3 mt-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-3 mt-2 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    render={<Link href="/auth/login" />}
                    className="w-full"
                  >
                    Log in
                  </Button>
                  <Button
                    size="sm"
                    render={<Link href="/auth/signup" />}
                    className="w-full"
                  >
                    Sign up free
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
