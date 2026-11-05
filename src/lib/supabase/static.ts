import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";

/**
 * Supabase client for build-time / static generation contexts.
 * Does NOT use cookies — safe for generateStaticParams and generateMetadata
 * called at build time.
 */
export function createStaticClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Return a dummy client at build time when env vars aren't set
    // Pages will render with empty data and be populated via ISR
    return createSupabaseClient<Database>(
      "https://placeholder.supabase.co",
      "placeholder-key"
    );
  }

  return createSupabaseClient<Database>(url, key);
}
