import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "crypto";
import type { Database } from "@/lib/types/database";
import { sicToSector } from "@/lib/constants/sectors";

export const maxDuration = 60;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

/**
 * Admin endpoint: backfill sector names for all companies using SIC codes.
 *
 * The pipeline originally used a different sicToSector mapping that produced
 * sector names that didn't match the sector page definitions. This endpoint
 * re-maps all companies using the canonical sicToSector from constants/sectors.ts.
 *
 * Also fetches SIC codes from EDGAR for companies that don't have one stored.
 *
 * No AI needed — purely SIC code → sector name mapping.
 *
 * Auth: requires ADMIN_SECRET header.
 *
 * Usage: POST /api/admin/backfill-sectors
 */
export async function POST(request: Request): Promise<Response> {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret") ?? "";
  if (!adminSecret || !providedSecret
    || Buffer.byteLength(providedSecret) !== Buffer.byteLength(adminSecret)
    || !timingSafeEqual(Buffer.from(providedSecret), Buffer.from(adminSecret))) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const db = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  // Fetch all companies
  const { data: companies, error } = await db
    .from("companies")
    .select("id, ticker, name, sector, cik_number")
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) {
    return Response.json({ error: "Failed to fetch companies" }, { status: 500 });
  }

  type CompanyRow = { id: string; ticker: string; name: string; sector: string; cik_number: string | null };
  const allCompanies = (companies ?? []) as CompanyRow[];

  // Find companies with empty, missing, or non-canonical sectors
  const CANONICAL_SECTORS = new Set([
    "Technology", "Healthcare", "Financial Services", "Consumer Cyclical",
    "Consumer Defensive", "Industrials", "Energy", "Basic Materials",
    "Real Estate", "Utilities", "Communication Services",
  ]);

  const needsUpdate = allCompanies.filter(
    (c) => !c.sector || !CANONICAL_SECTORS.has(c.sector)
  );

  if (needsUpdate.length === 0) {
    return Response.json({
      success: true,
      message: "All companies already have canonical sectors",
      total: allCompanies.length,
      updated: 0,
    });
  }

  // For companies with CIK numbers, fetch their SIC codes from EDGAR
  const EDGAR_UA = "Brefyr admin@brefyr.com";
  let updated = 0;
  let skipped = 0;
  const errors: string[] = [];

  // Batch: look up SIC codes from EDGAR for companies that need sector updates
  for (const company of needsUpdate) {
    try {
      const cik = company.cik_number?.replace(/^0+/, "");
      if (!cik) {
        skipped++;
        continue;
      }

      // Fetch company info from EDGAR to get SIC code
      const res = await fetch(
        `https://data.sec.gov/submissions/CIK${cik.padStart(10, "0")}.json`,
        { headers: { "User-Agent": EDGAR_UA, Accept: "application/json" } }
      );

      if (!res.ok) {
        skipped++;
        continue;
      }

      const data = await res.json() as { sic?: string; sicDescription?: string };
      const sic = data.sic;

      if (!sic) {
        skipped++;
        continue;
      }

      const newSector = sicToSector(sic);

      // Update company sector
      await db.from("companies").update({ sector: newSector }).eq("id", company.id);
      updated++;

      // Rate limit: 100ms between EDGAR requests
      await new Promise((r) => setTimeout(r, 100));
    } catch (err) {
      errors.push(`${company.ticker}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return Response.json({
    success: true,
    total_companies: allCompanies.length,
    needed_update: needsUpdate.length,
    updated,
    skipped,
    errors: errors.slice(0, 20),
    timestamp: new Date().toISOString(),
  });
}
