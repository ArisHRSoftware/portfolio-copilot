const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

/**
 * Safely serializes JSON-LD, escaping `<` to prevent XSS injection.
 */
function safeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

/** Organization schema — use in root layout or home page */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brefyr",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      "AI-powered SEC filing analysis for 2,000+ uncovered US small-cap stocks.",
    sameAs: ["https://x.com/brefyr"],
  };
  return <JsonLdScript data={data} />;
}

/** WebSite schema with SearchAction — use on home page */
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Brefyr",
    url: siteUrl,
    description:
      "AI-powered SEC filing analysis for 2,000+ uncovered US small-cap stocks. Get instant insider trading alerts, significance scores, and plain-English summaries.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/stocks/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLdScript data={data} />;
}

/** Article schema — use on blog post pages */
export function ArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  authorName,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string | null;
  modifiedAt?: string | null;
  authorName?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Brefyr",
      url: siteUrl,
    },
  };
  if (publishedAt) {
    data.datePublished = publishedAt;
  }
  if (modifiedAt) {
    data.dateModified = modifiedAt;
  }
  if (authorName) {
    data.author = { "@type": "Person", name: authorName };
  }
  return <JsonLdScript data={data} />;
}

/** FAQPage schema — use on filing pages that contain FAQ data */
export function FAQSchema({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  if (questions.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
  return <JsonLdScript data={data} />;
}

/** Corporation schema — use on stock pages */
export function CorporationSchema({
  name,
  ticker,
  exchange,
  url,
  state,
  description,
}: {
  name: string;
  ticker: string;
  exchange: string;
  url: string;
  state?: string | null;
  description?: string | null;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name,
    tickerSymbol: ticker,
    exchange,
    url,
  };
  if (description) data.description = description;
  if (state) {
    data.address = {
      "@type": "PostalAddress",
      addressRegion: state,
      addressCountry: "US",
    };
  }
  return <JsonLdScript data={data} />;
}

/** BreadcrumbList schema — use on stock, filing, and blog pages */
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLdScript data={data} />;
}
