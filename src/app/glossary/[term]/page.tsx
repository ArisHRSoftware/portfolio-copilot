import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/types";
import { glossaryTerms } from "@/data/glossary/index";
import { SiteHeader } from "@/components/site-header";
import { ArticleLayout } from "@/components/content/article-layout";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { NewsletterCTA } from "@/components/newsletter-cta";

export const revalidate = 86400;

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

function findTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const entry = findTerm(term);

  if (!entry) {
    return {
      title: "Term Not Found",
      description: "This glossary term could not be found.",
    };
  }

  const rawTitle = `${entry.term} — Definition & Meaning`;
  const title = rawTitle.length > 40 ? entry.term : rawTitle;
  const desc = entry.metaDescription.length > 150
    ? entry.metaDescription.slice(0, 147) + "..."
    : entry.metaDescription;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/glossary/${entry.slug}`,
      languages: {
        'en': `/glossary/${entry.slug}`,
        'hi': `/hi/glossary/${entry.slug}`,
        'x-default': `/glossary/${entry.slug}`,
      },
    },
    openGraph: {
      title: `${entry.term} — Financial Glossary | Brefyr`,
      description: desc,
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = findTerm(term);

  if (!entry) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const relatedEntries = entry.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter((t): t is GlossaryTerm => t !== undefined);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Glossary", href: "/glossary" },
    { label: entry.term, href: `/glossary/${entry.slug}` },
  ];

  const relatedLinks = relatedEntries.map((t) => ({
    label: t.term,
    href: `/glossary/${t.slug}`,
  }));

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Glossary", url: `${siteUrl}/glossary` },
            {
              name: entry.term,
              url: `${siteUrl}/glossary/${entry.slug}`,
            },
          ]}
        />
        <FAQSchema questions={entry.faq} />
        <ArticleSchema
          title={entry.title}
          description={entry.metaDescription}
          slug={`glossary/${entry.slug}`}
          publishedAt={entry.lastUpdated}
          modifiedAt={entry.lastUpdated}
        />

        <ArticleLayout
          title={entry.term}
          body={entry.body}
          lastUpdated={entry.lastUpdated}
          breadcrumbs={breadcrumbs}
          relatedLinks={relatedLinks}
          faq={entry.faq}
        />

        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" render={<Link href="/glossary" />}>
            All Glossary Terms
          </Button>
          <Button
            variant="outline"
            render={<Link href="/learn/sec-filings" />}
          >
            Learn SEC Filings
          </Button>
        </div>

        <NewsletterCTA source="glossary" />
      </main>
    </>
  );
}
