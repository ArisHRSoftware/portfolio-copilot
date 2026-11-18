import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insiderTradingArticlesHi } from "@/data/learn/hi/insider-trading";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterCTA } from "@/components/newsletter-cta";
import DOMPurify from "isomorphic-dompurify";

export const revalidate = 86400;
export function generateStaticParams() { return insiderTradingArticlesHi.map((a) => ({ slug: a.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insiderTradingArticlesHi.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title, description: article.metaDescription,
    alternates: { canonical: `/hi/learn/insider-trading/${slug}`, languages: { en: `/learn/insider-trading/${slug}`, hi: `/hi/learn/insider-trading/${slug}`, "x-default": `/learn/insider-trading/${slug}` } },
    openGraph: { locale: "hi_IN" },
  };
}

export default async function HindiInsiderTradingArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insiderTradingArticlesHi.find((a) => a.slug === slug);
  if (!article) notFound();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
      <BreadcrumbSchema items={[{ name: "Home", url: siteUrl }, { name: "सीखें", url: `${siteUrl}/hi/learn` }, { name: "Insider Trading", url: `${siteUrl}/hi/learn/insider-trading` }, { name: article.title, url: `${siteUrl}/hi/learn/insider-trading/${slug}` }]} />
      <FAQSchema questions={article.faq} locale="hi" />
      <ArticleSchema title={article.title} description={article.metaDescription} slug={`learn/insider-trading/${slug}`} publishedAt={article.lastUpdated} locale="hi" />
      <div className="space-y-2">
        <div className="flex items-center gap-2"><Badge variant="outline">{article.difficulty}</Badge><Badge variant="secondary">{article.readingTime} min</Badge></div>
        <h1 className="text-2xl font-bold tracking-tight">{article.title}</h1>
      </div>
      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }} />
      {article.faq.length > 0 && (<div className="space-y-4"><h2 className="text-xl font-bold">सवाल-जवाब</h2>{article.faq.map((q) => (<div key={q.question} className="space-y-1"><h3 className="font-medium text-sm">{q.question}</h3><p className="text-sm text-muted-foreground">{q.answer}</p></div>))}</div>)}
      <div className="flex gap-3"><Button variant="outline" render={<Link href="/hi/learn/insider-trading" />}>← Insider Trading Articles</Button><Button variant="outline" render={<Link href={`/learn/insider-trading/${slug}`} />}>English Version</Button></div>
      <NewsletterCTA source="learn-insider-hi" />
    </main>
  );
}
