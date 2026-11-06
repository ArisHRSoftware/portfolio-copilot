import type { Metadata } from "next";
import Link from "next/link";
import type { LearnArticle } from "@/data/types";
import { secFilingArticles } from "@/data/learn/sec-filings";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbSchema } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Learn SEC Filings — Education & Guides",
  description:
    "Learn how to read and analyze SEC filings. Beginner-friendly guides covering 10-K, 10-Q, 8-K, proxy statements, and insider trading forms.",
  openGraph: {
    title: "Learn SEC Filings — Education & Guides | Brefyr",
    description:
      "Beginner-friendly guides covering 10-K, 10-Q, 8-K, proxy statements, and insider trading forms.",
  },
};

const DIFFICULTY_ORDER: LearnArticle["difficulty"][] = [
  "beginner",
  "intermediate",
  "advanced",
];

const DIFFICULTY_LABELS: Record<LearnArticle["difficulty"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

function groupByDifficulty(
  articles: LearnArticle[]
): Map<LearnArticle["difficulty"], LearnArticle[]> {
  const grouped = new Map<LearnArticle["difficulty"], LearnArticle[]>();
  for (const article of articles) {
    const existing = grouped.get(article.difficulty);
    if (existing) {
      existing.push(article);
    } else {
      grouped.set(article.difficulty, [article]);
    }
  }
  return grouped;
}

export default function SecFilingsIndexPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const grouped = groupByDifficulty(secFilingArticles);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Learn", url: `${siteUrl}/learn` },
            { name: "SEC Filings", url: `${siteUrl}/learn/sec-filings` },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Learn SEC Filings
          </h1>
          <p className="text-muted-foreground">
            Understand how to read and analyze SEC filings, from basic form
            types to advanced analysis techniques.
          </p>
        </div>

        {secFilingArticles.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center space-y-3">
              <p className="text-muted-foreground">
                SEC filing education articles are being written. Check back soon
                for guides on reading and analyzing filings.
              </p>
              <Button
                variant="outline"
                render={<Link href="/glossary" />}
              >
                Browse Financial Glossary
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-10">
            {DIFFICULTY_ORDER.map((difficulty) => {
              const articles = grouped.get(difficulty);
              if (!articles || articles.length === 0) return null;

              return (
                <section key={difficulty} className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    {DIFFICULTY_LABELS[difficulty]}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {articles.map((article) => (
                      <Card key={article.slug}>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            <Link
                              href={`/learn/sec-filings/${article.slug}`}
                              className="hover:underline"
                            >
                              {article.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 flex-wrap">
                            <Badge
                              variant={
                                difficulty === "beginner"
                                  ? "secondary"
                                  : difficulty === "intermediate"
                                    ? "default"
                                    : "destructive"
                              }
                            >
                              {DIFFICULTY_LABELS[difficulty]}
                            </Badge>
                            <span>{article.readingTime} min read</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.metaDescription}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" render={<Link href="/learn" />}>
            Learning Hub
          </Button>
          <Button variant="outline" render={<Link href="/glossary" />}>
            Financial Glossary
          </Button>
        </div>
      </main>
    </>
  );
}
