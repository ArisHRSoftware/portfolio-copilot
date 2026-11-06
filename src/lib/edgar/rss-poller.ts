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
  filed_date: string;
  filing_url: string;
}

/**
 * Build the EDGAR full-text search URL for today's filings across all
 * target form types.
 */
function buildSearchUrl(): string {
  const today = new Date().toISOString().slice(0, 10);
  const forms = FILING_TYPES.map((t) => t.replace(/ /g, "+")).join(",");
  const params = new URLSearchParams({
    q: '""',
    forms,
    dateRange: "custom",
    startdt: today,
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
 * Parse the EDGAR EFTS JSON response into structured filing entries.
 *
 * The EFTS search-index endpoint returns JSON with a `hits.hits` array.
 * Each hit contains `_source` with: file_date, form_type, entity_name,
 * file_num, biz_locations, period_of_report, file_description, etc.
 * The `_id` field is the accession number.
 */
function parseSearchResults(data: Record<string, unknown>): EdgarFiling[] {
  const filings: EdgarFiling[] = [];

  const hits =
    (data as { hits?: { hits?: Array<Record<string, unknown>> } }).hits
      ?.hits ?? [];

  for (const hit of hits) {
    const source = hit._source as Record<string, unknown> | undefined;
    if (!source) continue;

    const rawAccession = (hit._id as string) ?? "";
    const accession = normalizeAccession(rawAccession);
    const filingType = (source.form_type as string) ?? "";
    const filedDate = (source.file_date as string) ?? "";
    const companyName = (source.entity_name as string) ?? "";

    // entity_id or file_num can carry the CIK; the _id path also encodes it
    const cikFromId = rawAccession.replace(/-/g, "").slice(0, 10).replace(/^0+/, "");
    const companyCik =
      (source.entity_id as string) ??
      cikFromId;

    // Only include target filing types
    const normalizedType = filingType.toUpperCase().trim();
    const isTarget = FILING_TYPES.some(
      (t) =>
        normalizedType === t ||
        normalizedType.startsWith(t + "/") ||
        normalizedType.startsWith(t + " ")
    );
    if (!isTarget) continue;

    filings.push({
      accession_number: accession,
      filing_type: filingType,
      company_cik: companyCik,
      company_name: companyName,
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
  const url = buildSearchUrl();
  const data = await fetchSearchPage(url);
  const allFilings = parseSearchResults(data);

  if (allFilings.length === 0) {
    return [];
  }

  // Check which accession numbers already exist
  const db = supabase as AnySupabase;
  const accessionNumbers = allFilings.map((f) => f.accession_number);
  const { data: existing } = await db
    .from("filings")
    .select("accession_number")
    .in("accession_number", accessionNumbers);

  const existingSet = new Set(
    ((existing as Array<{ accession_number: string }>) ?? []).map(
      (row) => row.accession_number
    )
  );

  return allFilings.filter((f) => !existingSet.has(f.accession_number));
}
