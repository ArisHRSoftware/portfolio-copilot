import crypto from "crypto";
import { revalidatePaths } from "@/lib/seo/revalidate-cascade";

/**
 * Manual ISR revalidation endpoint (TODO-106).
 *
 * Accepts a POST request with a secret and an array of paths to revalidate.
 * Used for manual cache busting when content changes outside the normal
 * pipeline flow (e.g., direct database edits, CMS updates).
 *
 * Request body:
 * {
 *   "secret": "your-revalidation-secret",
 *   "paths": ["/stocks/aapl", "/blog", "/"]
 * }
 */
export async function POST(request: Request): Promise<Response> {
  const revalidateSecret = process.env.REVALIDATE_SECRET;

  if (!revalidateSecret) {
    return Response.json(
      { error: "REVALIDATE_SECRET not configured" },
      { status: 500 }
    );
  }

  let body: { secret?: string; paths?: string[] };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Validate the secret using timing-safe comparison
  if (
    !body.secret ||
    typeof body.secret !== "string" ||
    body.secret.length !== revalidateSecret.length ||
    !crypto.timingSafeEqual(
      Buffer.from(body.secret),
      Buffer.from(revalidateSecret)
    )
  ) {
    return Response.json(
      { error: "Invalid revalidation secret" },
      { status: 401 }
    );
  }

  // Validate paths
  if (!Array.isArray(body.paths) || body.paths.length === 0) {
    return Response.json(
      { error: "paths must be a non-empty array of strings" },
      { status: 400 }
    );
  }

  // Validate each path starts with /
  const invalidPaths = body.paths.filter(
    (p) => typeof p !== "string" || !p.startsWith("/")
  );
  if (invalidPaths.length > 0) {
    return Response.json(
      {
        error: "All paths must be strings starting with /",
        invalid: invalidPaths,
      },
      { status: 400 }
    );
  }

  // Cap at 50 paths per request to prevent abuse
  if (body.paths.length > 50) {
    return Response.json(
      { error: "Maximum 50 paths per request" },
      { status: 400 }
    );
  }

  try {
    await revalidatePaths(body.paths);

    return Response.json({
      revalidated: true,
      paths: body.paths,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Revalidation failed";
    console.error("Revalidation error:", message);

    return Response.json(
      { error: message },
      { status: 500 }
    );
  }
}
