import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// In-memory redirect cache with TTL
const redirectCache = new Map<
  string,
  { target: string | null; expires: number }
>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Paths to skip redirect checks
const SKIP_PREFIXES = ["/api/", "/auth/", "/_next/", "/dashboard/", "/admin/"];

async function lookupRedirect(pathname: string): Promise<string | null> {
  // Check cache first
  const cached = redirectCache.get(pathname);
  if (cached && cached.expires > Date.now()) {
    return cached.target;
  }

  // Query Supabase for redirect
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return null;

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(url, key);

    const { data } = await supabase
      .from("redirects")
      .select("new_path")
      .eq("old_path", pathname)
      .limit(1)
      .single();

    const target = data?.new_path ?? null;

    // Cache result (including null to avoid re-querying)
    redirectCache.set(pathname, {
      target,
      expires: Date.now() + CACHE_TTL_MS,
    });

    return target;
  } catch {
    // If DB query fails, skip redirect silently
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only check redirects for content pages
  const shouldCheck = !SKIP_PREFIXES.some((p) => pathname.startsWith(p));

  if (shouldCheck) {
    const redirectTarget = await lookupRedirect(pathname);
    if (redirectTarget) {
      const url = request.nextUrl.clone();
      url.pathname = redirectTarget;
      return NextResponse.redirect(url, 301);
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
