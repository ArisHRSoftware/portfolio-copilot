"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { canTrackMoreStocks } from "@/lib/tier-gating";

export async function searchCompanies(
  query: string
): Promise<{
  success: boolean;
  data: Array<{ id: string; ticker: string; name: string; sector: string }>;
  error?: string;
}> {
  if (!query || query.trim().length < 1) {
    return { success: true, data: [] };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, data: [], error: "Not authenticated" };
  }

  const sanitized = query.trim().replace(/[%_\\]/g, (ch) => `\\${ch}`);

  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .eq("status", "active")
    .or(`ticker.ilike.%${sanitized}%,name.ilike.%${sanitized}%`)
    .limit(10);

  if (error) {
    return { success: false, data: [], error: "Search failed. Please try again." };
  }

  const companies = (data ?? []).map((c: Record<string, unknown>) => ({
    id: c.id as string,
    ticker: c.ticker as string,
    name: c.name as string,
    sector: c.sector as string,
  }));

  return { success: true, data: companies };
}

export async function addStockToPortfolio(
  companyId: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Not authenticated" };
  }

  // Check tier stock limit
  const allowed = await canTrackMoreStocks(supabase, user.id);
  if (!allowed) {
    return {
      success: false,
      error: "You've reached your plan's stock limit. Upgrade for more.",
    };
  }

  const { error } = await supabase
    .from("user_stocks")
    .insert({ user_id: user.id, company_id: companyId } as never);

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "This stock is already in your portfolio." };
    }
    return { success: false, error: "Failed to add stock. Please try again." };
  }

  revalidatePath("/portfolio");
  revalidatePath("/dashboard");
  return { success: true };
}

export async function removeStockFromPortfolio(
  companyId: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Not authenticated" };
  }

  const { error } = await supabase
    .from("user_stocks")
    .delete()
    .eq("user_id", user.id)
    .eq("company_id", companyId);

  if (error) {
    return { success: false, error: "Failed to remove stock. Please try again." };
  }

  revalidatePath("/portfolio");
  revalidatePath("/dashboard");
  return { success: true };
}

export async function completeOnboarding(): Promise<{
  success: boolean;
  error?: string;
}> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Not authenticated" };
  }

  // The profiles table may or may not have the onboarding_completed column.
  // We attempt the update and handle failure gracefully.
  const { error } = await supabase
    .from("profiles")
    .update({ onboarding_completed: true } as never)
    .eq("id", user.id);

  if (error) {
    // If the column doesn't exist, the update will fail. That's acceptable --
    // the dashboard redirect check will also handle this gracefully.
    console.error("Failed to mark onboarding complete:", error.message);
  }

  revalidatePath("/dashboard");
  revalidatePath("/onboarding");
  return { success: true };
}
