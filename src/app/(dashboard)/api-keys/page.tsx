import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { canUseAPI } from "@/lib/tier-gating";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";
import { ApiKeysPanel } from "./api-keys-panel";
import type { Database } from "@/lib/types/database";

type ApiKey = Database["public"]["Tables"]["api_keys"]["Row"];

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "API Keys",
};

export default async function ApiKeysPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const hasAccess = await canUseAPI(supabase, user.id);

  if (!hasAccess) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <Lock className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
            <CardTitle>Filing Intelligence API</CardTitle>
            <CardDescription>
              API access is available on the Pro plan. Upgrade to get
              programmatic access to filing data, summaries, and insider trade
              information.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button render={<Link href="/billing" />}>Upgrade to Pro</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { data } = await supabase
    .from("api_keys")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const apiKeys = (data ?? []) as ApiKey[];

  return <ApiKeysPanel apiKeys={apiKeys} />;
}
