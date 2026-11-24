import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTopicsHi } from "@/data/glossary/hi/index";
import { BreadcrumbSchema } from "@/components/json-ld";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { NewsletterCTA } from "@/components/newsletter-cta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "वित्तीय शब्दावली — SEC Filing Terms Hindi में",
  description:
    "SEC filings और US stock market की शब्दावली Hindi में। 10-K, Form 4, P/E ratio, EBITDA, insider trading — सब कुछ भारतीय निवेशकों के लिए समझाया गया।",
  alternates: {
    canonical: "/hi/glossary",
    languages: {
      en: "/glossary",
      hi: "/hi/glossary",
      "x-default": "/glossary",
    },
  },
  openGraph: {
    title: "वित्तीय शब्दावली | Brefyr",
    description: "SEC filing terms Hindi mein — bhartiya niveshkon ke liye.",
    locale: "hi_IN",
  },
};

export default function HindiGlossaryPage() {
  return (
    <>
    <SiteHeader />
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "शब्दावली", url: `${siteUrl}/hi/glossary` },
        ]}
      />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          वित्तीय शब्दावली
        </h1>
        <p className="text-muted-foreground text-lg">
          SEC filings और US stock market के important terms — Hindi में, भारतीय निवेशकों के लिए।
        </p>
      </div>

      <div className="flex gap-2">
        <Link
          href="/glossary"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          English Version →
        </Link>
      </div>

      {Object.entries(glossaryTopicsHi).map(([topicName, terms]) => (
        <Card key={topicName}>
          <CardHeader>
            <CardTitle className="text-xl">{topicName}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {terms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/hi/glossary/${term.slug}`}
                  className="group flex flex-col gap-1 rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {term.term}
                  </span>
                  <span className="text-xs text-muted-foreground line-clamp-2">
                    {term.shortDefinition}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p>
          <strong>भारतीय निवेशकों के लिए:</strong> अगर आप Vested, INDMoney, या Groww से
          US stocks में invest करते हैं, तो ये terms समझना ज़रूरी है। हर term में
          India-specific context और examples दिए गए हैं।
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          render={<Link href="/auth/signup" />}
        >
          Start Free — Track 5 Stocks
        </Button>
        <Button variant="outline" render={<Link href="/glossary" />}>
          English Version
        </Button>
      </div>

      <NewsletterCTA source="glossary-index-hi" />
    </main>
    </>
  );
}
