import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbSchema } from "@/components/json-ld";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Learn — SEC Filing Education & Investing Guides",
  description:
    "Free educational resources for understanding SEC filings, investing terminology, and small-cap stock analysis. Beginner-friendly guides and a comprehensive financial glossary.",
  openGraph: {
    title: "Learn — SEC Filing Education & Investing Guides | Brefyr",
    description:
      "Free educational resources for understanding SEC filings, investing terminology, and small-cap stock analysis.",
  },
};

const SECTIONS: {
  title: string;
  description: string;
  href: string;
  available: boolean;
}[] = [
  {
    title: "SEC Filing Education",
    description:
      "Learn how to read and analyze SEC filings. Covers 10-K, 10-Q, 8-K, proxy statements, insider trading forms, and more.",
    href: "/learn/sec-filings",
    available: true,
  },
  {
    title: "Financial Glossary",
    description:
      "Plain-English definitions of SEC filing terms, investing terminology, and financial concepts you encounter in filings.",
    href: "/glossary",
    available: true,
  },
  {
    title: "Sector Analysis",
    description:
      "How to evaluate companies in different sectors using SEC filings. Industry-specific metrics and red flags to watch.",
    href: "/learn/sectors",
    available: false,
  },
  {
    title: "Insider Trading Patterns",
    description:
      "Understanding insider buying and selling signals. How to interpret Form 4 filings and identify meaningful insider activity.",
    href: "/learn/insider-trading",
    available: false,
  },
];

export default function LearnHubPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full space-y-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: siteUrl },
            { name: "Learn", url: `${siteUrl}/learn` },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Learning Hub</h1>
          <p className="text-muted-foreground">
            Free educational resources to help you understand SEC filings,
            investing terminology, and small-cap stock analysis.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((section) => (
            <Card key={section.href} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 flex-wrap">
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  {!section.available && (
                    <Badge variant="secondary">Coming Soon</Badge>
                  )}
                </div>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                {section.available ? (
                  <Button
                    variant="outline"
                    render={<Link href={section.href} />}
                  >
                    Start Learning
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    This section is in development.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" render={<Link href="/trending" />}>
            Trending Stocks
          </Button>
          <Button
            variant="outline"
            render={<Link href="/recent-filings" />}
          >
            Recent Filings
          </Button>
        </div>
      </main>
    </>
  );
}
