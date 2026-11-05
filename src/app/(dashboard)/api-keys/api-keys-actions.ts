"use server";

import crypto from "crypto";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

/**
 * Generates a new API key. Returns the raw key once — it is never stored.
 * Only the SHA-256 hash is persisted in the database.
 */
export async function createApiKey(
  formData: FormData
): Promise<{ rawKey: string } | { error: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  const name = (formData.get("name") as string)?.trim();
  if (!name) return { error: "Key name is required" };

  // Limit to 5 active keys per user
  const { count } = await supabase
    .from("api_keys")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  if ((count ?? 0) >= 5) {
    return { error: "Maximum 5 API keys allowed. Delete an existing key first." };
  }

  // Generate a secure random key with prefix
  const rawKey = `pc_${crypto.randomBytes(32).toString("hex")}`;
  const keyHash = crypto.createHash("sha256").update(rawKey).digest("hex");

  const { error } = await supabase.from("api_keys").insert({
    user_id: user.id,
    key_hash: keyHash,
    name,
    tier: "pro",
  } as never);

  if (error) return { error: "Failed to create API key" };

  revalidatePath("/api-keys");
  return { rawKey };
}

/**
 * Deletes an API key. Only the owner can delete their own keys.
 */
export async function deleteApiKey(
  keyId: string
): Promise<{ success: boolean } | { error: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase
    .from("api_keys")
    .delete()
    .eq("id", keyId)
    .eq("user_id", user.id);

  if (error) return { error: "Failed to delete API key" };

  revalidatePath("/api-keys");
  return { success: true };
}
