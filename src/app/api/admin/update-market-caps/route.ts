import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "crypto";
import type { Database } from "@/lib/types/database";
export const maxDuration = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

const EDGAR_USER_AGENT = "Brefyr admin@brefyr.com";

const FRAMES_BASE = "https://data.sec.gov/api/xbrl/frames/dei/EntityPublicFloat/USD";

/**
 * Quarters to try in order, most recent first.
 * The XBRL Frames API uses CY{year}Q{quarter}I for instantaneous values.
 */
const QUARTER_CANDIDATES = [
  "CY2025Q2I",
  "CY2025Q3I",
  "CY2025Q4I",
  "CY2026Q1I",
  "CY2026Q2I",
  "CY2026Q3I",
];

interface FrameEntry {
  cik: number;
  val: number;
  accn: string;
  entityName: string;
  loc: string;
  end: string;
  filed: string;
}

interface FramesResponse {
  taxonomy: string;
  tag: string;
  ccp: string;
  uom: string;
  label: string;
  description: string;
  pts: number;
  data: FrameEntry[];
}

/**
 * Admin endpoint: bulk-update market cap (public float) from SEC EDGAR XBRL Frames API.
 *
 * Fetches EntityPublicFloat for ~4,700 companies in a single request,
 * then batch-updates the companies table by matching CIK numbers.
 *
 * Auth: requires x-admin-secret header.
 * Usage: POST /api/admin/update-market-caps  { "batch_size": 50 }
 */
export async function POST(request: Request): Promise<Response> {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret") ?? "";
  if (
    !adminSecret ||
    !providedSecret ||
    Buffer.byteLength(providedSecret) !== Buffer.byteLength(adminSecret) ||
    !timingSafeEqual(Buffer.from(providedSecret), Buffer.from(adminSecret))
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  let body: { batch_size?: number } = {};
  try {
    body = await request.json();
  } catch {
    // defaults
  }

  const batchSize = Math.min(body.batch_size ?? 50, 200);

  // Step 1: Fetch ALL quarters and merge — later filings overwrite older ones per CIK
  const cikToValue = new Map<number, { val: number; filed: string }>();
  const quartersUsed: string[] = [];

  for (const quarter of QUARTER_CANDIDATES) {
    const url = `${FRAMES_BASE}/${quarter}.json`;
    const res = await fetch(url, {
      headers: { "User-Agent": EDGAR_USER_AGENT },
    });
    if (!res.ok) continue;

    const parsed = (await res.json()) as FramesResponse;
    if (!parsed.data || parsed.data.length === 0) continue;

    quartersUsed.push(`${quarter}(${parsed.data.length})`);
    for (const entry of parsed.data) {
      const existing = cikToValue.get(entry.cik);
      if (!existing || entry.filed > existing.filed) {
        cikToValue.set(entry.cik, { val: entry.val, filed: entry.filed });
      }
    }
  }

  if (cikToValue.size === 0) {
    return Response.json(
      { error: "No EDGAR public float frames data found", tried: QUARTER_CANDIDATES },
      { status: 502 }
    );
  }

  // Step 2: Load all existing CIK numbers from the DB so we only update rows that exist
  const existingCiks = new Set<string>();
  let offset = 0;
  while (true) {
    const { data } = await supabase
      .from("companies")
      .select("cik_number")
      .range(offset, offset + 999);
    const rows = data ?? [];
    for (const r of rows) {
      if (r.cik_number) existingCiks.add(r.cik_number);
    }
    if (rows.length < 1000) break;
    offset += 1000;
  }

  // Step 3: Build update list — only entries whose CIK exists in our DB
  const updates: { cik: string; val: number }[] = [];
  for (const [cik, { val }] of cikToValue) {
    const paddedCik = String(cik).padStart(10, "0");
    if (existingCiks.has(paddedCik)) {
      updates.push({ cik: paddedCik, val });
    }
  }

  // Step 4: Batch update market_cap values
  let updated = 0;
  let failed = 0;
  const errors: string[] = [];

  for (let i = 0; i < updates.length; i += batchSize) {
    const batch = updates.slice(i, i + batchSize);

    const results = await Promise.allSettled(
      batch.map(({ cik, val }) =>
        supabase
          .from("companies")
          .update({ market_cap: val })
          .eq("cik_number", cik)
      )
    );

    for (let j = 0; j < results.length; j++) {
      const result = results[j];
      if (result.status === "rejected") {
        failed++;
        if (errors.length < 10) {
          errors.push(`${batch[j].cik}: ${String(result.reason)}`);
        }
      } else if (result.value.error) {
        failed++;
        if (errors.length < 10) {
          errors.push(`${batch[j].cik}: ${result.value.error.message}`);
        }
      } else {
        updated++;
      }
    }
  }

  return Response.json({
    quarters: quartersUsed,
    unique_companies: cikToValue.size,
    matched: updates.length,
    updated,
    failed,
    errors: errors.length > 0 ? errors : undefined,
  });
}
