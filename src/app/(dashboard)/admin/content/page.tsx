import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getContentQueue,
  getPublishedBlogPosts,
} from "@/lib/supabase/queries";
import { ContentApprovalPanel } from "./content-panel";
import { BlogManagementPanel } from "./blog-panel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Content Approval",
};

export default async function ContentApprovalPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (!process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/dashboard");
  }

  const [items, blogPosts] = await Promise.all([
    getContentQueue(supabase),
    getPublishedBlogPosts(supabase),
  ]);

  return (
    <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Content Management</h1>
        <p className="text-sm text-muted-foreground">
          Review automated content, manage published blog posts, and preview before publishing.
        </p>
      </div>

      {/* Content Queue */}
      {items.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Content Queue</h2>
          <ContentApprovalPanel items={items} />
        </section>
      )}

      {/* Published Blog Posts */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Published Blog Posts ({blogPosts.length})</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            View blog →
          </Link>
        </div>
        <BlogManagementPanel posts={blogPosts} />
      </section>
    </main>
  );
}
