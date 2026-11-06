import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/data/glossary/index";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbSchema } from "@/components/json-ld";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Financial Glossary — SEC Filing & Investing Terms",
  description:
    "A comprehensive glossary of SEC filing terms, investing terminology, and financial definitions. Learn the language of SEC filings and small-cap investing.",
  openGraph: {
    title: "Financial Glossary — SEC Filing & Investing Terms | Brefyr",
    description:
      "A comprehensive glossary of SEC filing terms, investing terminology, and financial definitions.",
  },
};

function groupByFirstLetter(
  terms: typeof glossaryTerms
): Map<string, typeof glossaryTerms> {
  const grouped = new Map<string, typeof glossaryTerms>();
  for (const term of terms) {
    const letter = term.term.charAt(0).toUpperCase();
    const existing = grouped.get(letter);
    if (existing) {
      existing.push(term);
    } else {
      grouped.set(letter, [term]);
    }
  }
  return new Map(
    [...grouped.entries()].sort(([a], [b]) => a.localeCompare(b))
  );
}

export default function GlossaryIndexPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const grouped = groupByFirstLetter(glossaryTerms);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Glossary", url: `${siteUrl}/glossary` },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Financial Glossary
          </h1>
          <p className="text-muted-foreground">
            SEC filing terms, investing terminology, and financial definitions
            explained in plain English.
          </p>
        </div>

        {glossaryTerms.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center space-y-3">
              <p className="text-muted-foreground">
                Glossary terms are being added. Check back soon for definitions
                of SEC filing and investing terms.
              </p>
              <Button
                variant="outline"
                render={<Link href="/learn" />}
              >
                Browse Learning Hub
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Letter quick-jump nav */}
            <nav className="flex flex-wrap gap-2">
              {[...grouped.keys()].map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
                >
                  {letter}
                </a>
              ))}
            </nav>

            {/* Terms grouped by letter */}
            <div className="space-y-10">
              {[...grouped.entries()].map(([letter, terms]) => (
                <section key={letter} id={`letter-${letter}`}>
                  <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">
                    {letter}
                  </h2>
                  <div className="grid gap-3">
                    {terms.map((term) => (
                      <div key={term.slug} className="space-y-1">
                        <Link
                          href={`/glossary/${term.slug}`}
                          className="text-base font-medium hover:underline"
                        >
                          {term.term}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {term.shortDefinition}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" render={<Link href="/learn" />}>
            Learning Hub
          </Button>
          <Button
            variant="outline"
            render={<Link href="/learn/sec-filings" />}
          >
            SEC Filing Education
          </Button>
        </div>
      </main>
    </>
  );
}
