import type { Metadata } from "next";
import Link from "next/link";
import type { LearnArticle } from "@/data/types";
import { sectorArticles } from "@/data/learn/sectors";
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
  title: "Sector Analysis — How to Evaluate Companies by Industry",
  description:
    "Industry-specific guides to analyzing SEC filings. Learn the metrics, red flags, and accounting nuances for technology, healthcare, financial, and energy sector stocks.",
  alternates: {
    canonical: "/learn/sectors",
    languages: { en: "/learn/sectors", hi: "/hi/learn/sectors", "x-default": "/learn/sectors" },
  },
  openGraph: {
    title: "Sector Analysis — Industry SEC Filing Guides | Brefyr",
    description:
      "Industry-specific guides to analyzing SEC filings for technology, healthcare, financial, and energy sector stocks.",
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

export default function SectorsIndexPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const grouped = groupByDifficulty(sectorArticles);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Learn", url: `${siteUrl}/learn` },
            { name: "Sector Analysis", url: `${siteUrl}/learn/sectors` },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Sector Analysis
          </h1>
          <p className="text-muted-foreground">
            Industry-specific guides to evaluating companies through SEC
            filings. Each sector has unique metrics, accounting nuances, and
            red flags.
          </p>
        </div>

        {sectorArticles.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center space-y-3">
              <p className="text-muted-foreground">
                Sector analysis articles are being written. Check back soon
                for industry-specific guides.
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
                              href={`/learn/sectors/${article.slug}`}
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
