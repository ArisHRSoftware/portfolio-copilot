import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { companyGuidesHi } from "@/data/companies/hi/index";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterCTA } from "@/components/newsletter-cta";
import DOMPurify from "isomorphic-dompurify";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return companyGuidesHi.map((g) => ({ ticker: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const guide = companyGuidesHi.find((g) => g.slug === ticker.toLowerCase());

  if (!guide) {
    return { title: "Company Guide नहीं मिला" };
  }

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `/hi/stocks/${guide.slug}`,
      // NO hreflang — this is educational content, NOT a translation of /stocks/[ticker]
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      locale: "hi_IN",
    },
  };
}

export default async function HindiCompanyGuidePage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const guide = companyGuidesHi.find((g) => g.slug === ticker.toLowerCase());

  if (!guide) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "Company Guides", url: `${siteUrl}/hi/stocks` },
          { name: guide.ticker, url: `${siteUrl}/hi/stocks/${guide.slug}` },
        ]}
      />
      <FAQSchema questions={guide.faq} locale="hi" />
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        slug={`hi/stocks/${guide.slug}`}
        publishedAt={guide.lastUpdated}
        locale="hi"
      />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono">
            {guide.ticker}
          </Badge>
          <Badge variant="secondary">Hindi Guide</Badge>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{guide.title}</h1>
      </div>

      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(guide.body) }}
      />

      {/* Editorial link to English stock page — NOT hreflang */}
      <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4 space-y-2">
        <p className="font-medium">
          {guide.ticker} की Live SEC Filings देखें
        </p>
        <p className="text-sm text-muted-foreground">
          Real-time filing data, insider trades, AI analysis — English में
        </p>
        <Button render={<Link href={`/stocks/${guide.slug}`} />}>
          {guide.ticker} SEC Filings देखें (English)
        </Button>
      </div>

      {/* FAQ */}
      {guide.faq.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">अक्सर पूछे जाने वाले सवाल</h2>
          {guide.faq.map((q) => (
            <div key={q.question} className="space-y-1">
              <h3 className="font-medium text-sm">{q.question}</h3>
              <p className="text-sm text-muted-foreground">{q.answer}</p>
            </div>
          ))}
        </div>
      )}

      {/* Trust bridge */}
      <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p>
          Brefyr का product dashboard English में है — sign up करने के बाद आप
          {guide.ticker} और अपने बाकी stocks track कर सकते हैं।
        </p>
      </div>

      <NewsletterCTA source={`company-guide-hi-${guide.slug}`} />
    </main>
  );
}
