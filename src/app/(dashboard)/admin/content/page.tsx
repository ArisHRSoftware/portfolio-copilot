import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getContentQueue } from "@/lib/supabase/queries";
import { ContentApprovalPanel } from "./content-panel";

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

  const items = await getContentQueue(supabase);

  return (
    <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Content Approval</h1>
        <p className="text-sm text-muted-foreground">
          Review, approve, and publish AI-generated content before it goes live.
        </p>
      </div>
      <ContentApprovalPanel items={items} />
    </main>
  );
}
