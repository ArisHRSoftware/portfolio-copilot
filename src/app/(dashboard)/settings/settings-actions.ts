"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient, createServiceClient } from "@/lib/supabase/server";

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const fullName = formData.get("full_name") as string | null;

  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName?.trim() || null } as never)
    .eq("id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/settings");
  return { success: true };
}

export async function sendPasswordReset() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    redirect("/auth/login");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function deleteAccount() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Use service client for admin operations (deleting user data across tables)
  const serviceClient = await createServiceClient();

  // Delete user-related data in order (respecting foreign keys)
  await serviceClient.from("alerts").delete().eq("user_id", user.id);
  await serviceClient.from("alert_rules").delete().eq("user_id", user.id);
  await serviceClient.from("user_stocks").delete().eq("user_id", user.id);
  await serviceClient.from("subscriptions").delete().eq("user_id", user.id);
  await serviceClient.from("api_keys").delete().eq("user_id", user.id);
  await serviceClient.from("profiles").delete().eq("id", user.id);

  // Delete the auth user via admin API
  await serviceClient.auth.admin.deleteUser(user.id);

  // Sign out the current session
  await supabase.auth.signOut();

  redirect("/");
}
