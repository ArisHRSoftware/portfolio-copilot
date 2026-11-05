"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type Notification = {
  id: string;
  user_id: string;
  type: string;
  title: string;
  body: string | null;
  link: string | null;
  read_at: string | null;
  created_at: string;
};

export async function getNotifications(
  userId: string
): Promise<{ data: Notification[]; error: string | null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.id !== userId) {
    redirect("/auth/login");
  }

  const { data, error } = await supabase
    .from("notifications" as never)
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    return { data: [], error: error.message };
  }

  return { data: (data ?? []) as unknown as Notification[], error: null };
}

export async function markNotificationRead(
  notificationId: string
): Promise<{ error: string | null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { error } = await supabase
    .from("notifications" as never)
    .update({ read_at: new Date().toISOString() } as never)
    .eq("id", notificationId)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/(dashboard)", "layout");
  return { error: null };
}

export async function markAllNotificationsRead(
  userId: string
): Promise<{ error: string | null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.id !== userId) {
    redirect("/auth/login");
  }

  const { error } = await supabase
    .from("notifications" as never)
    .update({ read_at: new Date().toISOString() } as never)
    .eq("user_id", userId)
    .is("read_at", null);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/(dashboard)", "layout");
  return { error: null };
}

export async function getUnreadCount(
  userId: string
): Promise<{ count: number; error: string | null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.id !== userId) {
    redirect("/auth/login");
  }

  const { count, error } = await supabase
    .from("notifications" as never)
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .is("read_at", null);

  if (error) {
    return { count: 0, error: error.message };
  }

  return { count: count ?? 0, error: null };
}
