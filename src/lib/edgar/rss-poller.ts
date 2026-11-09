import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";

// See pipeline.ts for rationale on AnySupabase
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = SupabaseClient<any>;

const EDGAR_USER_AGENT =
  "Brefyr admin@brefyr.com";

const EDGAR_SEARCH_BASE =
  "https://efts.sec.gov/LATEST/search-index";

const FILING_TYPES = [
  "10-K",
  "10-Q",
  "8-K",
  "4",
  "DEF 14A",
  "13F-HR",
  "SC 13D",
  "SC 13G",
];

/**
 * A single filing entry parsed from the EDGAR full-text search feed.
 */
export interface EdgarFiling {
  accession_number: string;
  filing_type: string;
  company_cik: string;
  company_name: string;
  company_ticker: string | null;
  company_sic: string | null;
  filed_date: string;
  filing_url: string;
}

/**
 * Get the most recent business day (Mon-Fri).
 * On weekends, returns Friday. On weekdays, returns today.
 */
function getLastBusinessDay(): string {
  const now = new Date();
  const day = now.getUTCDay(); // 0=Sun, 6=Sat
  if (day === 0) now.setUTCDate(now.getUTCDate() - 2); // Sun → Fri
  else if (day === 6) now.setUTCDate(now.getUTCDate() - 1); // Sat → Fri
  return now.toISOString().slice(0, 10);
}

/**
 * Build the EDGAR full-text search URL for the most recent business day's
 * filings across all target form types.
 */
function buildSearchUrl(): string {
  const businessDay = getLastBusinessDay();
  const today = new Date().toISOString().slice(0, 10);
  const forms = FILING_TYPES.map((t) => t.replace(/ /g, "+")).join(",");
  const params = new URLSearchParams({
    q: '""',
    forms,
    dateRange: "custom",
    startdt: businessDay,
    enddt: today,
  });
  return `${EDGAR_SEARCH_BASE}?${params.toString()}`;
}

/**
 * Normalize an accession number to the dashed format (e.g. 0001234567-24-012345).
 */
function normalizeAccession(raw: string): string {
  const digits = raw.replace(/[^0-9]/g, "");
  if (digits.length === 18) {
    return `${digits.slice(0, 10)}-${digits.slice(10, 12)}-${digits.slice(12)}`;
  }
  return raw.replace(/_/g, "-");
}

/**
 * Build the primary document URL from an accession number.
 */
function buildFilingUrl(accession: string): string {
  const clean = accession.replace(/-/g, "");
  return `https://www.sec.gov/Archives/edgar/data/${clean.slice(0, 10)}/${clean}/${accession}-index.htm`;
}

/**
 * Extract ticker symbol from EDGAR display_names field.
 * Format: "COMPANY NAME  (TICKER)  (CIK 0001234567)"
 */
function extractTicker(displayNames: string[]): string | null {
  if (!displayNames || displayNames.length === 0) return null;
  const matches = displayNames[0].match(/\(([^)]+)\)/g);
  if (!matches) return null;
  for (const match of matches) {
    const inner = match.slice(1, -1).trim();
    if (!inner.startsWith("CIK")) return inner;
  }
  return null;
}

/**
 * Extract clean company name from EDGAR display_names field.
 */
function extractCompanyName(displayNames: string[], fallback: string): string {
  if (!displayNames || displayNames.length === 0) return fallback;
  return displayNames[0].split("(")[0].trim() || fallback;
}

/**
 * Parse the EDGAR EFTS JSON response into structured filing entries.
 *
 * The EFTS search-index endpoint returns JSON with a `hits.hits` array.
 * Each hit's `_id` is `accession:document_name` (e.g., "0001234-26-000001:doc.htm").
 * The clean accession number is in `_source.adsh`. One filing can produce
 * multiple hits (main document + exhibits), so we deduplicate by accession.
 */
function parseSearchResults(data: Record<string, unknown>): EdgarFiling[] {
  const filings: EdgarFiling[] = [];
  const seenAccessions = new Set<string>();

  const hits =
    (data as { hits?: { hits?: Array<Record<string, unknown>> } }).hits
      ?.hits ?? [];

  for (const hit of hits) {
    const source = hit._source as Record<string, unknown> | undefined;
    if (!source) continue;

    // Prefer adsh (clean accession) over _id (which includes :document suffix)
    const rawAdsh = (source.adsh as string) ?? "";
    const rawId = (hit._id as string) ?? "";
    const rawAccession = rawAdsh || rawId.split(":")[0];
    const accession = normalizeAccession(rawAccession);

    // Deduplicate: one filing can have many document hits (exhibits, etc.)
    if (seenAccessions.has(accession)) continue;

    // Use root form type, not exhibit-level file_type
    const filingType = ((source.root_forms as string[]) ?? [])[0]
      ?? (source.form_type as string)
      ?? (source.form as string)
      ?? "";
    const filedDate = (source.file_date as string) ?? "";

    // Use display_names and ciks arrays (preferred over legacy fields)
    const displayNames = (source.display_names as string[]) ?? [];
    const ciks = (source.ciks as string[]) ?? [];
    const companyCik = ciks[0]?.replace(/^0+/, "") ??
      rawAccession.replace(/-/g, "").slice(0, 10).replace(/^0+/, "");
    const companyName = extractCompanyName(displayNames, (source.entity_name as string) ?? "");
    const companyTicker = extractTicker(displayNames);
    const companySic = ((source.sics as string[]) ?? [])[0] ?? null;

    // Only include target filing types
    const normalizedType = filingType.toUpperCase().trim();
    const isTarget = FILING_TYPES.some(
      (t) =>
        normalizedType === t ||
        normalizedType.startsWith(t + "/") ||
        normalizedType.startsWith(t + " ")
    );
    if (!isTarget) continue;

    seenAccessions.add(accession);
    filings.push({
      accession_number: accession,
      filing_type: filingType,
      company_cik: companyCik,
      company_name: companyName,
      company_ticker: companyTicker,
      company_sic: companySic,
      filed_date: filedDate,
      filing_url: buildFilingUrl(accession),
    });
  }

  return filings;
}

/**
 * Fetch a single page of EDGAR search results, respecting the 10 req/sec
 * rate limit via the required User-Agent header.
 */
async function fetchSearchPage(
  url: string
): Promise<Record<string, unknown>> {
  const maxRetries = 3;
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, {
      headers: {
        "User-Agent": EDGAR_USER_AGENT,
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return (await response.json()) as Record<string, unknown>;
    }

    lastError = new Error(
      `EDGAR search failed: ${response.status} ${response.statusText}`
    );

    // Retry on 5xx (EDGAR server errors), not on 4xx (our problem)
    if (response.status < 500 || attempt === maxRetries) {
      throw lastError;
    }

    // Wait 2s, 4s, 8s between retries
    await new Promise((r) => setTimeout(r, Math.pow(2, attempt + 1) * 1000));
  }

  throw lastError;
}

/**
 * Fetch ALL of today's filings from EDGAR with pagination.
 * Returns deduplicated filings (by accession_number within the response).
 * Does NOT check the database — caller handles DB dedup.
 */
export async function fetchAllTodaysFilings(): Promise<EdgarFiling[]> {
  const PAGE_SIZE = 100;
  const MAX_PAGES = 50; // Safety cap: 5,000 filings max
  const allFilings: EdgarFiling[] = [];
  const seenAccessions = new Set<string>();

  for (let page = 0; page < MAX_PAGES; page++) {
    const baseUrl = buildSearchUrl();
    const url = `${baseUrl}&from=${page * PAGE_SIZE}&size=${PAGE_SIZE}`;
    const data = await fetchSearchPage(url);

    const total = (data as { hits?: { total?: { value?: number } } })
      .hits?.total?.value ?? 0;
    const pageFilings = parseSearchResults(data);

    for (const filing of pageFilings) {
      if (!seenAccessions.has(filing.accession_number)) {
        seenAccessions.add(filing.accession_number);
        allFilings.push(filing);
      }
    }

    // Stop if we've fetched all available filings
    if ((page + 1) * PAGE_SIZE >= total || pageFilings.length === 0) {
      break;
    }

    // Small delay between pages to respect EDGAR rate limits
    await new Promise((r) => setTimeout(r, 120));
  }

  return allFilings;
}

/**
 * Poll the SEC EDGAR full-text search for today's filings across all
 * target form types (10-K, 10-Q, 8-K, DEF 14A, 13F-HR, SC 13D/G, Form 4).
 *
 * Deduplicates against filings already in the database by accession_number.
 *
 * @returns Array of new filings not yet stored in the database.
 */
export async function pollEdgarRss(
  supabase: SupabaseClient<Database>
): Promise<EdgarFiling[]> {
  const allFilings = await fetchAllTodaysFilings();

  if (allFilings.length === 0) {
    return [];
  }

  // Check which accession numbers already exist in batches of 200
  // (Supabase .in() has a limit)
  const db = supabase as AnySupabase;
  const existingSet = new Set<string>();
  const accessionNumbers = allFilings.map((f) => f.accession_number);

  for (let i = 0; i < accessionNumbers.length; i += 200) {
    const batch = accessionNumbers.slice(i, i + 200);
    const { data: existing } = await db
      .from("filings")
      .select("accession_number")
      .in("accession_number", batch);

    for (const row of (existing as Array<{ accession_number: string }>) ?? []) {
      existingSet.add(row.accession_number);
    }
  }

  return allFilings.filter((f) => !existingSet.has(f.accession_number));
}
