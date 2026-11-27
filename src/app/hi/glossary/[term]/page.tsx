import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/types";
import { glossaryTermsHi } from "@/data/glossary/hi/index";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { ArticleLayout } from "@/components/content/article-layout";
import { Button } from "@/components/ui/button";
import { NewsletterCTA } from "@/components/newsletter-cta";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermsHi.map((t) => ({ term: t.slug }));
}

function findTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTermsHi.find((t) => t.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const entry = findTerm(term);

  if (!entry) {
    return { title: "शब्द नहीं मिला", description: "यह शब्दावली शब्द नहीं मिल सका।" };
  }

  const title = entry.term;
  const desc = entry.metaDescription.length > 150
    ? entry.metaDescription.slice(0, 147) + "..."
    : entry.metaDescription;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/hi/glossary/${entry.slug}`,
      languages: {
        en: `/glossary/${entry.slug}`,
        hi: `/hi/glossary/${entry.slug}`,
        "x-default": `/glossary/${entry.slug}`,
      },
    },
    openGraph: {
      title: `${entry.term} — वित्तीय शब्दावली | Brefyr`,
      description: desc,
      locale: "hi_IN",
    },
  };
}

export default async function HindiGlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = findTerm(term);

  if (!entry) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  const relatedEntries = entry.relatedTerms
    .map((slug) => glossaryTermsHi.find((t) => t.slug === slug))
    .filter((t): t is GlossaryTerm => t !== undefined);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "शब्दावली", href: "/hi/glossary" },
    { label: entry.term, href: `/hi/glossary/${entry.slug}` },
  ];

  const relatedLinks = relatedEntries.map((t) => ({
    label: t.term,
    href: `/hi/glossary/${t.slug}`,
  }));

  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "शब्दावली", url: `${siteUrl}/hi/glossary` },
          { name: entry.term, url: `${siteUrl}/hi/glossary/${entry.slug}` },
        ]}
      />
      <FAQSchema questions={entry.faq} locale="hi" />
      <ArticleSchema
        title={entry.title}
        description={entry.metaDescription}
        slug={`glossary/${entry.slug}`}
        publishedAt={entry.lastUpdated}
        modifiedAt={entry.lastUpdated}
        locale="hi"
      />

      <ArticleLayout
        title={entry.term}
        body={entry.body}
        lastUpdated={entry.lastUpdated}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faq={entry.faq}
      />

      {/* Trust bridge: warm handoff to English product */}
      <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p>
          Brefyr का product dashboard English में है — sign up करने के बाद आप
          अपने stocks track कर सकते हैं और SEC filings की AI analysis देख सकते हैं।
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4">
        <Button variant="outline" render={<Link href="/hi/glossary" />}>
          सभी शब्दावली शब्द
        </Button>
        <Button variant="outline" render={<Link href={`/glossary/${entry.slug}`} />}>
          English Version
        </Button>
      </div>

      <NewsletterCTA source="glossary-hi" />
    </main>
  );
}
