import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { LearnArticle } from "@/data/types";
import { secFilingArticles } from "@/data/learn/sec-filings";
import { SiteHeader } from "@/components/site-header";
import { ArticleLayout } from "@/components/content/article-layout";
import { BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

export const revalidate = 86400;

export function generateStaticParams() {
  return secFilingArticles.map((a) => ({ slug: a.slug }));
}

function findArticle(slug: string): LearnArticle | undefined {
  return secFilingArticles.find((a) => a.slug === slug);
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

  return {
    title: `${article.title} — SEC Filing Education`,
    description: article.metaDescription,
    openGraph: {
      title: `${article.title} — Learn SEC Filings | Brefyr`,
      description: article.metaDescription,
    },
  };
}

export default async function SecFilingArticlePage({
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
    .map((s) => secFilingArticles.find((a) => a.slug === s))
    .filter((a): a is LearnArticle => a !== undefined);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Learn", href: "/learn" },
    { label: "SEC Filings", href: "/learn/sec-filings" },
    { label: article.title, href: `/learn/sec-filings/${article.slug}` },
  ];

  const relatedLinks = relatedArticles.map((a) => ({
    label: a.title,
    href: `/learn/sec-filings/${a.slug}`,
  }));

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Learn", url: `${siteUrl}/learn` },
            { name: "SEC Filings", url: `${siteUrl}/learn/sec-filings` },
            {
              name: article.title,
              url: `${siteUrl}/learn/sec-filings/${article.slug}`,
            },
          ]}
        />
        <FAQSchema questions={article.faq} />

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
            render={<Link href="/learn/sec-filings" />}
          >
            All SEC Filing Articles
          </Button>
          <Button variant="outline" render={<Link href="/glossary" />}>
            Financial Glossary
          </Button>
        </div>
      </main>
    </>
  );
}
