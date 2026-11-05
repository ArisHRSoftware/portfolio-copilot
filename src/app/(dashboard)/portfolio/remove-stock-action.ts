"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function removeStock(
  stockId: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Not authenticated" };
  }

  // Verify the user owns this stock entry
  const { data: stock } = await supabase
    .from("user_stocks")
    .select("*")
    .eq("id", stockId)
    .single();

  if (!stock) {
    return { success: false, error: "Stock not found" };
  }

  if ((stock as { user_id: string }).user_id !== user.id) {
    return { success: false, error: "Unauthorized" };
  }

  const { error } = await supabase
    .from("user_stocks")
    .delete()
    .eq("id", stockId);

  if (error) {
    return { success: false, error: "Failed to remove stock. Please try again." };
  }

  revalidatePath("/portfolio");
  return { success: true };
}
