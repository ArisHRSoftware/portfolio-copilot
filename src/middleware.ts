import { updateSession } from "@/lib/supabase/middleware";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - api/cron (cron jobs use QStash auth, not cookies)
     * - api/webhooks (webhooks use signature auth, not cookies)
     * - api/v1 (API uses key auth, not cookies)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap|robots.txt|api/cron|api/webhooks|api/v1|feed|llms.txt|opengraph-image|icon|apple-icon|manifest).*)",
  ],
};
