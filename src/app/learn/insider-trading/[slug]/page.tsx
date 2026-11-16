import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { LearnArticle } from "@/data/types";
import { insiderTradingArticles } from "@/data/learn/insider-trading";
import { SiteHeader } from "@/components/site-header";
import { ArticleLayout } from "@/components/content/article-layout";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

export const revalidate = 86400;

export function generateStaticParams() {
  return insiderTradingArticles.map((a) => ({ slug: a.slug }));
}

function findArticle(slug: string): LearnArticle | undefined {
  return insiderTradingArticles.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "This article could not be found.",
    };
  }

  const rawTitle = `${article.title} — Insider Guide`;
  const title = rawTitle.length > 40 ? article.title : rawTitle;
  const desc = article.metaDescription.length > 150
    ? article.metaDescription.slice(0, 147) + "..."
    : article.metaDescription;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/learn/insider-trading/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} — Insider Trading Patterns | Brefyr`,
      description: desc,
      type: "article",
    },
  };
}

export default async function InsiderTradingArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const relatedArticles = article.relatedSlugs
    .map((s) => insiderTradingArticles.find((a) => a.slug === s))
    .filter((a): a is LearnArticle => a !== undefined);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Learn", href: "/learn" },
    { label: "Insider Trading Patterns", href: "/learn/insider-trading" },
    { label: article.title, href: `/learn/insider-trading/${article.slug}` },
  ];

  const relatedLinks = relatedArticles.map((a) => ({
    label: a.title,
    href: `/learn/insider-trading/${a.slug}`,
  }));

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Learn", url: `${siteUrl}/learn` },
            { name: "Insider Trading Patterns", url: `${siteUrl}/learn/insider-trading` },
            {
              name: article.title,
              url: `${siteUrl}/learn/insider-trading/${article.slug}`,
            },
          ]}
        />
        <FAQSchema questions={article.faq} />
        <ArticleSchema
          title={article.title}
          description={article.metaDescription}
          slug={`learn/insider-trading/${article.slug}`}
          publishedAt={article.lastUpdated}
          modifiedAt={article.lastUpdated}
        />

        <ArticleLayout
          title={article.title}
          body={article.body}
          lastUpdated={article.lastUpdated}
          breadcrumbs={breadcrumbs}
          difficulty={article.difficulty}
          readingTime={article.readingTime}
          relatedLinks={relatedLinks}
          faq={article.faq}
        />

        <div className="flex items-center gap-3 pt-4">
          <Button
            variant="outline"
            render={<Link href="/learn/insider-trading" />}
          >
            All Insider Trading Articles
          </Button>
          <Button variant="outline" render={<Link href="/glossary" />}>
            Financial Glossary
          </Button>
        </div>
      </main>
    </>
  );
}
