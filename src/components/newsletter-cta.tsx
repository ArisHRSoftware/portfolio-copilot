import { NewsletterForm } from "@/components/newsletter-form";
import { Mail } from "lucide-react";

interface NewsletterCTAProps {
  source: string;
}

export function NewsletterCTA({ source }: NewsletterCTAProps) {
  return (
    <section className="rounded-xl border border-border bg-card/50 p-6 sm:p-8 space-y-4">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">The Filing Brief — Daily</h3>
      </div>
      <p className="text-sm text-muted-foreground">
        The most significant SEC filings and insider trades, summarized every
        trading day. Free, no spam.
      </p>
      <NewsletterForm source={source} />
    </section>
  );
}
