import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/newsletter-form";
import DOMPurify from "isomorphic-dompurify";

interface ArticleLayoutProps {
  title: string;
  body: string;
  lastUpdated: string;
  breadcrumbs: { label: string; href: string }[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  readingTime?: number;
  relatedLinks?: { label: string; href: string }[];
  ctaTicker?: string; // If article is about a specific company
  faq?: { question: string; answer: string }[];
  children?: React.ReactNode;
}

const ALLOWED_TAGS = [
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "a", "ul", "ol", "li", "strong", "em",
  "blockquote", "code", "pre", "br", "hr",
  "table", "thead", "tbody", "tr", "th", "td",
  "span", "div", "img", "figure", "figcaption",
  "details", "summary", "dl", "dt", "dd",
];

const ALLOWED_ATTR = ["href", "target", "rel", "src", "alt", "class", "id"];

export function ArticleLayout({
  title,
  body,
  lastUpdated,
  breadcrumbs,
  difficulty,
  readingTime,
  relatedLinks,
  ctaTicker,
  faq,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < breadcrumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="hover:text-foreground transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-foreground truncate max-w-[300px]">
                {crumb.label}
              </span>
            )}
          </span>
        ))}
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          {title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
          {difficulty && (
            <Badge
              variant={
                difficulty === "beginner"
                  ? "secondary"
                  : difficulty === "intermediate"
                    ? "default"
                    : "destructive"
              }
            >
              {difficulty}
            </Badge>
          )}
          {readingTime && <span>{readingTime} min read</span>}
          <span>
            Updated{" "}
            {new Date(lastUpdated).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      <Separator />

      {/* Article Body */}
      <article
        className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-p:mb-6 prose-p:leading-relaxed prose-headings:mt-10 prose-headings:mb-4 prose-li:mb-2 prose-ul:my-6 prose-ol:my-6 prose-blockquote:my-6 prose-table:my-6 prose-hr:my-8"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(body, {
            ALLOWED_TAGS,
            ALLOWED_ATTR,
          }),
        }}
      />

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <>
          <Separator />
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {faq.map((item) => (
                <div key={item.question} className="space-y-3">
                  <dt className="font-semibold text-lg">{item.question}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </>
      )}

      {/* Company CTA */}
      {ctaTicker && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 space-y-3">
          <p className="font-semibold">
            Track {ctaTicker} on Brefyr
          </p>
          <p className="text-sm text-muted-foreground">
            Get real-time SEC filing alerts, AI summaries, and insider trade
            notifications.
          </p>
          <Button
            size="sm"
            render={
              <Link href={`/stocks/${ctaTicker.toLowerCase()}`} />
            }
          >
            View {ctaTicker} Filing History
          </Button>
        </div>
      )}

      {/* Related Articles */}
      {relatedLinks && relatedLinks.length > 0 && (
        <>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Related Articles</h2>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="outline"
                  size="sm"
                  render={<Link href={link.href} />}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </section>
        </>
      )}

      {children}

      {/* Newsletter CTA */}
      <Separator />
      <section className="space-y-3 text-center py-4">
        <h2 className="text-lg font-semibold">
          Get SEC filing insights in your inbox
        </h2>
        <p className="text-sm text-muted-foreground">
          Weekly highlights of the most significant filings across 7,600+
          stocks.
        </p>
        <div className="flex justify-center">
          <NewsletterForm source="content" />
        </div>
      </section>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground border-t border-border pt-4">
        Data sourced from{" "}
        <a
          href="https://www.sec.gov/edgar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          SEC EDGAR
        </a>{" "}
        public filings. For informational purposes only — not investment advice.
        See our{" "}
        <Link href="/disclaimer" className="underline">
          full disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
