import type { Metadata } from "next";
import Link from "next/link";
import type { LearnArticle } from "@/data/types";
import { insiderTradingArticles } from "@/data/learn/insider-trading";
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
  title: "Insider Trading Patterns — Form 4 Analysis & Signals",
  description:
    "Learn how to interpret insider buying and selling signals from SEC Form 4 filings. Covers purchase evaluation, selling analysis, cluster buying patterns, and systematic insider trading screens.",
  alternates: {
    canonical: "/learn/insider-trading",
    languages: { en: "/learn/insider-trading", hi: "/hi/learn/insider-trading", "x-default": "/learn/insider-trading" },
  },
  openGraph: {
    title: "Insider Trading Patterns — Form 4 Analysis & Signals | Brefyr",
    description:
      "Learn how to interpret insider buying and selling signals from SEC Form 4 filings.",
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

export default function InsiderTradingIndexPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const grouped = groupByDifficulty(insiderTradingArticles);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Learn", url: `${siteUrl}/learn` },
            { name: "Insider Trading Patterns", url: `${siteUrl}/learn/insider-trading` },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Insider Trading Patterns
          </h1>
          <p className="text-muted-foreground">
            How to interpret insider buying and selling signals from SEC Form
            4 filings. From understanding the form itself to identifying the
            most predictive patterns.
          </p>
        </div>

        {insiderTradingArticles.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center space-y-3">
              <p className="text-muted-foreground">
                Insider trading education articles are being written. Check back
                soon for guides on interpreting Form 4 filings.
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
                              href={`/learn/insider-trading/${article.slug}`}
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
