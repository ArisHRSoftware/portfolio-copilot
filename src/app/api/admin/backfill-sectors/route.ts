import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "crypto";
import type { Database } from "@/lib/types/database";
import { sicToSector } from "@/lib/constants/sectors";

export const maxDuration = 300;

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

  // Fetch only companies with empty or null sectors (paginated)
  type CompanyRow = { id: string; ticker: string; name: string; sector: string; cik_number: string | null };
  const needsUpdate: CompanyRow[] = [];
  let offset = 0;
  while (true) {
    const { data, error: fetchErr } = await db
      .from("companies")
      .select("id, ticker, name, sector, cik_number")
      .or("sector.is.null,sector.eq.")
      .eq("status", "active")
      .range(offset, offset + 999);
    if (fetchErr) {
      return Response.json({ error: "Failed to fetch companies" }, { status: 500 });
    }
    const rows = (data ?? []) as CompanyRow[];
    needsUpdate.push(...rows);
    if (rows.length < 1000) break;
    offset += 1000;
  }

  if (needsUpdate.length === 0) {
    return Response.json({
      success: true,
      message: "All companies already have sectors",
      total: 0,
      updated: 0,
    });
  }

  // Build ticker→CIK lookup from EDGAR's canonical list
  const EDGAR_UA = "Brefyr admin@brefyr.com";
  let tickerToCik = new Map<string, string>();
  try {
    const listRes = await fetch("https://www.sec.gov/files/company_tickers.json", {
      headers: { "User-Agent": EDGAR_UA },
    });
    if (listRes.ok) {
      const listData = await listRes.json() as Record<string, { cik_str: number; ticker: string }>;
      for (const entry of Object.values(listData)) {
        tickerToCik.set(entry.ticker.toUpperCase(), String(entry.cik_str));
      }
    }
  } catch {
    // Non-critical — we'll fall back to CIK extraction
  }

  let updated = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const company of needsUpdate) {
    try {
      // Try multiple CIK sources: stored cik_number, CIK-based ticker, EDGAR ticker lookup
      let cik = company.cik_number?.replace(/^0+/, "") || "";
      if (!cik && company.ticker.startsWith("CIK")) {
        cik = company.ticker.replace("CIK", "").replace(/^0+/, "");
      }
      if (!cik) {
        cik = tickerToCik.get(company.ticker.toUpperCase()) || "";
      }
      if (!cik) {
        skipped++;
        continue;
      }

      // Also backfill the cik_number if it was missing
      if (!company.cik_number) {
        await db.from("companies").update({ cik_number: cik.padStart(10, "0") }).eq("id", company.id);
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
    total_companies: needsUpdate.length,
    needed_update: needsUpdate.length,
    updated,
    skipped,
    errors: errors.slice(0, 20),
    timestamp: new Date().toISOString(),
  });
}
