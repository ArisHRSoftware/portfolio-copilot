"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");
  if (!process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Forbidden");
  }

  return supabase;
}

export async function unpublishBlogPost(postId: string) {
  const supabase = await requireAdmin();

  const { error } = await supabase
    .from("blog_posts")
    .update({ published_at: null } as never)
    .eq("id", postId);

  if (error) throw new Error(`Unpublish failed: ${error.message}`);

  revalidatePath("/admin/content");
  revalidatePath("/blog");
}

export async function deleteBlogPost(postId: string) {
  const supabase = await requireAdmin();

  // Get slug for revalidation before deleting
  const { data: post } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("id", postId)
    .single();

  const { error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", postId);

  if (error) throw new Error(`Delete failed: ${error.message}`);

  revalidatePath("/admin/content");
  revalidatePath("/blog");
  if (post) revalidatePath(`/blog/${(post as { slug: string }).slug}`);
}
