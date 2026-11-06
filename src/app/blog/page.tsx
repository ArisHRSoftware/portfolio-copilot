import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import { getPublishedBlogPosts } from "@/lib/supabase/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { NewsletterForm } from "@/components/newsletter-form";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Small-Cap Investing Insights",
  description:
    "Expert analysis and insights on small-cap investing, SEC filings, insider trading patterns, and market trends. Expert analysis and founder-reviewed.",
  openGraph: {
    title: "Blog — Small-Cap Investing Insights | Brefyr",
    description:
      "Expert analysis on small-cap investing, SEC filings, and insider trading patterns.",
  },
};

export default async function BlogIndexPage() {
  const supabase = createStaticClient();

  const posts = await getPublishedBlogPosts(supabase);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Insights on small-cap investing, SEC filing analysis, and market
          trends.
        </p>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-muted-foreground">
              No blog posts published yet. Check back soon for insights on
              small-cap investing and SEC filing analysis.
            </p>
            <Button
              variant="outline"
              render={<Link href="/recent-filings" />}
            >
              Browse Recent Filings
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-center gap-2 flex-wrap">
                  <CardTitle className="text-lg">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  {post.auto_generated && (
                    <Badge variant="secondary">AI Generated</Badge>
                  )}
                </div>
                <CardDescription>
                  {post.published_at &&
                    new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </CardDescription>
              </CardHeader>
              {post.meta_description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.meta_description}
                  </p>
                  <div className="mt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={<Link href={`/blog/${post.slug}`} />}
                    >
                      Read more
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      <Separator />

      {/* Newsletter CTA */}
      <Card>
        <CardContent className="py-6 space-y-3">
          <h2 className="text-lg font-semibold">
            Get small-cap insights in your inbox
          </h2>
          <p className="text-sm text-muted-foreground">
            Weekly highlights of the most significant filings, insider trades,
            and market-moving events across 7,600+ small-cap stocks.
          </p>
          <NewsletterForm source="blog" />
        </CardContent>
      </Card>
    </main>
    </>
  );
}
