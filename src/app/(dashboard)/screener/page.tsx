import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { canAccessScreener, getTierInfo } from "@/lib/tier-gating";
import { getTopCompanies } from "@/lib/supabase/queries";
import { SECTORS } from "@/lib/constants/sectors";
import { ScreenerPanel } from "./screener-panel";
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

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Stock Screener",
};

export default async function ScreenerPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const hasAccess = await canAccessScreener(supabase, user.id);

  if (!hasAccess) {
    const tierInfo = await getTierInfo(supabase, user.id);
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <Lock className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
            <CardTitle>Stock Screener</CardTitle>
            <CardDescription>
              The stock screener is available on Plus and Pro plans. You are
              currently on the {tierInfo.tier} plan.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button render={<Link href="/billing" />}>
              Upgrade to Plus
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const companies = await getTopCompanies(supabase, 2500);

  return (
    <ScreenerPanel
      companies={companies}
      sectors={SECTORS}
    />
  );
}
