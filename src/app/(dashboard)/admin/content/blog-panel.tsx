"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/supabase/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Eye, Trash2, ExternalLink } from "lucide-react";
import { unpublishBlogPost, deleteBlogPost } from "./blog-actions";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const [isPending, startTransition] = useTransition();
  const [showPreview, setShowPreview] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleUnpublish() {
    startTransition(async () => {
      await unpublishBlogPost(post.id);
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await deleteBlogPost(post.id);
      setConfirmDelete(false);
    });
  }

  return (
    <Card className={isPending ? "opacity-60 pointer-events-none" : ""}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="truncate">{post.title}</CardTitle>
          <div className="flex items-center gap-1.5 shrink-0">
            {post.auto_generated && (
              <Badge variant="outline">AI</Badge>
            )}
            <Badge variant="secondary">Published</Badge>
          </div>
        </div>
        <CardDescription>
          Published {formatDate(post.published_at)} &middot; /{post.slug}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.meta_description ?? post.body.replace(/<[^>]*>/g, "").slice(0, 200)}
        </p>
      </CardContent>

      <CardFooter>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Preview in dialog */}
          <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogTrigger
              render={
                <Button size="sm" variant="outline">
                  <Eye className="size-3.5" data-icon="inline-start" />
                  Preview
                </Button>
              }
            />
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogTitle>{post.title}</DialogTitle>
              <DialogDescription>
                Published {formatDate(post.published_at)}
              </DialogDescription>
              <article
                className="prose prose-sm max-w-none mt-4"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              <div className="flex justify-end gap-2 mt-4">
                <DialogClose
                  render={<Button variant="outline" size="sm">Close</Button>}
                />
                <Button
                  size="sm"
                  render={
                    <Link href={`/blog/${post.slug}`} target="_blank" />
                  }
                >
                  <ExternalLink className="size-3.5" data-icon="inline-start" />
                  Open Live
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* View live */}
          <Button
            size="sm"
            variant="outline"
            render={
              <Link href={`/blog/${post.slug}`} target="_blank" />
            }
          >
            <ExternalLink className="size-3.5" data-icon="inline-start" />
            Live
          </Button>

          {/* Unpublish */}
          <Button size="sm" variant="ghost" onClick={handleUnpublish}>
            Unpublish
          </Button>

          {/* Delete with confirmation */}
          {confirmDelete ? (
            <div className="flex items-center gap-1">
              <Button size="sm" variant="destructive" onClick={handleDelete}>
                Confirm Delete
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setConfirmDelete(false)}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              className="text-destructive"
              onClick={() => setConfirmDelete(true)}
            >
              <Trash2 className="size-3.5" data-icon="inline-start" />
              Delete
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function BlogManagementPanel({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          No published blog posts yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
