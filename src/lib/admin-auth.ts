import { createHash, timingSafeEqual } from "crypto";

/**
 * Verify admin secret from x-admin-secret header using hash-before-compare
 * pattern to prevent timing-based length leaks.
 */
export function verifyAdminHeader(request: Request): boolean {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret") ?? "";
  if (!adminSecret || !providedSecret) return false;
  const inputHash = createHash("sha256").update(providedSecret).digest();
  const secretHash = createHash("sha256").update(adminSecret).digest();
  return timingSafeEqual(inputHash, secretHash);
}

/**
 * Verify admin secret from Authorization: Bearer header using hash-before-compare.
 */
export function verifyAdminBearer(request: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const inputHash = createHash("sha256").update(authHeader).digest();
  const expectedHash = createHash("sha256").update(`Bearer ${secret}`).digest();
  return timingSafeEqual(inputHash, expectedHash);
}
