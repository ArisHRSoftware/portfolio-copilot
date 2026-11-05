import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getPublishedBlogPosts,
  type BlogPost,
} from "@/lib/supabase/queries";
import { ArticleSchema, BreadcrumbSchema } from "@/components/json-ld";
import DOMPurify from "isomorphic-dompurify";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const revalidate = 3600;

export async function generateStaticParams() {
  const supabase = createStaticClient();
  const posts = await getPublishedBlogPosts(supabase);

  return posts.map((p) => ({ slug: p.slug }));
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = createStaticClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .not("published_at", "is", null)
    .single();
  return post as BlogPost | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description:
      post.meta_description ??
      `${post.title} — insights on small-cap investing and SEC filing analysis.`,
    openGraph: {
      title: `${post.title} | Portfolio Copilot Blog`,
      description:
        post.meta_description ??
        `${post.title} — insights on small-cap investing and SEC filing analysis.`,
      type: "article",
      publishedTime: post.published_at ?? undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p className="text-muted-foreground">
          This blog post doesn&apos;t exist or hasn&apos;t been published yet.
        </p>
        <Button render={<Link href="/blog" />}>Back to Blog</Button>
      </main>
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfoliocopilot.com";

  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-6">
      <ArticleSchema
        title={post.title}
        description={
          post.meta_description ??
          `${post.title} — insights on small-cap investing and SEC filing analysis.`
        }
        slug={post.slug}
        publishedAt={post.published_at}
        modifiedAt={post.published_at}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "Blog", url: `${siteUrl}/blog` },
          { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
        ]}
      />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-foreground transition-colors">
          Blog
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground truncate max-w-[300px]">
          {post.title}
        </span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {post.published_at && (
            <time dateTime={post.published_at}>
              {new Date(post.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          {post.auto_generated && (
            <Badge variant="secondary">AI Generated</Badge>
          )}
        </div>
      </div>

      <Separator />

      {/* Body */}
      <article
        className="prose prose-sm max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.body, {
            ALLOWED_TAGS: [
              "h1", "h2", "h3", "h4", "h5", "h6",
              "p", "a", "ul", "ol", "li", "strong", "em",
              "blockquote", "code", "pre", "br", "hr",
              "table", "thead", "tbody", "tr", "th", "td",
              "span", "div", "img",
            ],
            ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "class"],
          }),
        }}
      />

      <Separator />

      {/* Footer */}
      <div className="flex items-center gap-4">
        <Button variant="outline" render={<Link href="/blog" />}>
          All Posts
        </Button>
        <Button variant="outline" render={<Link href="/archive" />}>
          Newsletter Archive
        </Button>
      </div>
    </main>
  );
}
