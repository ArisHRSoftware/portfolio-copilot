import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { EdgarFiling } from "@/lib/edgar/rss-poller";
import type { FilingAnalysis } from "@/lib/edgar/ai-analysis";
import { createMockSupabase } from "../helpers/mock-supabase";

// ---------------------------------------------------------------------------
// Shared fixtures
// ---------------------------------------------------------------------------

const SAMPLE_COMPANY = {
  id: "comp-001",
  ticker: "ACME",
  name: "Acme Corp",
  sector: "Technology",
  market_cap: 500_000_000,
  exchange: "NASDAQ",
  cik_number: "0001234567",
  last_filing_date: "2026-10-01",
  status: "active" as const,
  previous_tickers: null,
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-10-01T00:00:00Z",
};

const SAMPLE_ANALYSIS: FilingAnalysis = {
  key_facts: [
    "Revenue grew 18% year-over-year to $1.2B",
    "Net income increased to $150M from $120M",
    "Expanded into European markets",
  ],
  insider_trades: [],
  risk_flags: ["Increased competition in core segment"],
  earnings_impact: {
    revenue_change: "+18% YoY to $1.2B",
    eps_change: "$2.50 vs $2.00 prior year",
    guidance: "FY27 revenue guidance of $1.4B-$1.5B",
    notable_items: ["One-time restructuring charge of $10M"],
  },
  significance_score: 7,
  one_line_summary:
    "Acme Corp reports strong FY26 with 18% revenue growth and European expansion.",
  detailed_summary:
    "Acme Corp filed its annual 10-K report showing strong revenue growth of 18% year-over-year, reaching $1.2 billion. The company's European expansion contributed significantly to the top-line growth.\n\nNet income rose to $150 million, though the company noted a one-time restructuring charge of $10 million related to cost optimization efforts. Management provided optimistic guidance for FY27.",
  faq: [
    {
      question: "How did Acme Corp perform this year?",
      answer:
        "Revenue grew 18% to $1.2B and net income rose to $150M, beating prior year results.",
    },
    {
      question: "What is the outlook for next year?",
      answer:
        "Management guided FY27 revenue of $1.4B-$1.5B, suggesting continued growth.",
    },
    {
      question: "Are there any risks to watch?",
      answer:
        "The company flagged increased competition in its core segment as a key risk factor.",
    },
  ],
};

function buildEdgarSearchResponse(
  filings: Array<{
    accession: string;
    formType: string;
    entityName: string;
    fileDate: string;
    entityId?: string;
  }>
): Record<string, unknown> {
  return {
    hits: {
      total: { value: filings.length },
      hits: filings.map((f) => ({
        _id: f.accession,
        _source: {
          form_type: f.formType,
          entity_name: f.entityName,
          file_date: f.fileDate,
          entity_id: f.entityId ?? undefined,
        },
      })),
    },
  };
}

const SAMPLE_FILING_HTML = `
<html>
<head>
  <title>ACME CORP 10-K</title>
  <style>body { font-family: Arial; }</style>
</head>
<body>
  <h1>UNITED STATES SECURITIES AND EXCHANGE COMMISSION</h1>
  <h2>FORM 10-K</h2>
  <p>For the fiscal year ended September 30, 2026</p>
  <p>Commission File Number: 001-12345</p>
  <p><b>ACME CORPORATION</b></p>
  <p>Delaware &nbsp; 12-3456789</p>
  <div class="xbrl-data">
    <ix:nonFraction name="us-gaap:Revenue" unitRef="USD">1200000000</ix:nonFraction>
  </div>
  <p>Revenue for the fiscal year was $1,200,000,000, an increase of 18% compared to $1,017,000,000 in the prior year.</p>
  <p>Net income was $150,000,000 compared to $120,000,000 in the prior year.</p>
  <h3>Risk Factors</h3>
  <p>The company faces increased competition in its core Technology segment. New entrants may erode margins.</p>
  <script>console.log("tracking");</script>
</body>
</html>
`;

// ---------------------------------------------------------------------------
// Mutable mock state — vi.mock factories read from these at call time.
// Tests set these before importing the modules under test.
// ---------------------------------------------------------------------------

let geminiGenerateMock: ReturnType<typeof vi.fn>;
let onFilingProcessedMock: ReturnType<typeof vi.fn>;
let supabaseCreateClientMock: ReturnType<typeof vi.fn>;
let qstashReceiverVerifyMock: ReturnType<typeof vi.fn>;

// Top-level vi.mock calls (hoisted, run once, factories evaluated lazily)
vi.mock("@google/generative-ai", () => ({
  GoogleGenerativeAI: class MockGoogleGenAI {
    constructor() {}
    getGenerativeModel() {
      return {
        generateContent: (...args: unknown[]) => geminiGenerateMock(...args),
      };
    }
  },
  SchemaType: {
    OBJECT: "object",
    ARRAY: "array",
    STRING: "string",
    NUMBER: "number",
  },
}));

vi.mock("@/lib/seo/revalidate-cascade", () => ({
  onFilingProcessed: (...args: unknown[]) => onFilingProcessedMock(...args),
}));

vi.mock("@supabase/supabase-js", () => ({
  createClient: (...args: unknown[]) => supabaseCreateClientMock(...args),
}));

// NOTE: @/lib/edgar/pipeline is NOT mocked globally — the orchestrator tests
// need the real implementation.  Cron route tests mock it per-test via
// vi.doMock (not hoisted) after vi.resetModules().

// @upstash/qstash is NOT mocked globally — only cron route tests mock it
// via vi.doMock after vi.resetModules().

// ---------------------------------------------------------------------------
// Default mock initialization
// ---------------------------------------------------------------------------

beforeEach(() => {
  geminiGenerateMock = vi.fn().mockResolvedValue({
    response: {
      text: () => JSON.stringify(SAMPLE_ANALYSIS),
      usageMetadata: { promptTokenCount: 25000, candidatesTokenCount: 1200 },
    },
  });

  onFilingProcessedMock = vi.fn().mockResolvedValue(undefined);
  supabaseCreateClientMock = vi.fn(() => ({}));
  qstashReceiverVerifyMock = vi.fn().mockResolvedValue(undefined);

  process.env.GOOGLE_API_KEY = "test-google-key";
  process.env.NEXT_PUBLIC_SUPABASE_URL = "http://localhost:54321";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-key";
  process.env.QSTASH_CURRENT_SIGNING_KEY = "test-current-key";
  process.env.QSTASH_NEXT_SIGNING_KEY = "test-next-key";
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

// ---------------------------------------------------------------------------
// 1. RSS / EFTS Search Parser Tests
// ---------------------------------------------------------------------------

describe("EDGAR RSS/EFTS search parser", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({}),
        text: async () => "",
      })
    );
  });

  it("parses EFTS search results into EdgarFiling structs", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-012345",
        formType: "10-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
        entityId: "1234567",
      },
      {
        accession: "0009876543-26-054321",
        formType: "8-K",
        entityName: "Beta Inc",
        fileDate: "2026-11-03",
        entityId: "9876543",
      },
    ]);

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => searchData,
    });

    const mockSupabase = createMockSupabase({
      filings: { data: [], error: null },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    const filings = await pollEdgarRss(mockSupabase as never);

    expect(filings).toHaveLength(2);
    expect(filings[0]).toMatchObject({
      accession_number: "0001234567-26-012345",
      filing_type: "10-K",
      company_name: "Acme Corp",
      company_cik: "1234567",
      filed_date: "2026-11-03",
    });
    expect(filings[1]).toMatchObject({
      accession_number: "0009876543-26-054321",
      filing_type: "8-K",
      company_name: "Beta Inc",
    });
  });

  it("filters out non-target filing types", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-000001",
        formType: "10-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
      },
      {
        accession: "0001234567-26-000002",
        formType: "S-1",
        entityName: "Startup Inc",
        fileDate: "2026-11-03",
      },
      {
        accession: "0001234567-26-000003",
        formType: "NPORT-P",
        entityName: "Fund LLC",
        fileDate: "2026-11-03",
      },
    ]);

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => searchData,
    });

    const mockSupabase = createMockSupabase({
      filings: { data: [], error: null },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    const filings = await pollEdgarRss(mockSupabase as never);

    expect(filings).toHaveLength(1);
    expect(filings[0].filing_type).toBe("10-K");
  });

  it("deduplicates against filings already in the database", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-000001",
        formType: "10-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
      },
      {
        accession: "0001234567-26-000002",
        formType: "8-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
      },
    ]);

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => searchData,
    });

    const mockSupabase = createMockSupabase({
      filings: {
        data: [{ accession_number: "0001234567-26-000001" }],
        error: null,
      },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    const filings = await pollEdgarRss(mockSupabase as never);

    expect(filings).toHaveLength(1);
    expect(filings[0].accession_number).toBe("0001234567-26-000002");
  });

  it("returns empty array when EDGAR returns no hits", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ hits: { total: { value: 0 }, hits: [] } }),
    });

    const mockSupabase = createMockSupabase({
      filings: { data: [], error: null },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    const filings = await pollEdgarRss(mockSupabase as never);

    expect(filings).toHaveLength(0);
  });

  it("throws when EDGAR API returns non-OK status", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
      status: 403,
      statusText: "Forbidden",
    });

    const mockSupabase = createMockSupabase({
      filings: { data: [], error: null },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    await expect(pollEdgarRss(mockSupabase as never)).rejects.toThrow(
      "EDGAR search failed: 403 Forbidden"
    );
  });

  it("normalizes accession numbers with underscore format", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567_26_012345",
        formType: "10-Q",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
      },
    ]);

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => searchData,
    });

    const mockSupabase = createMockSupabase({
      filings: { data: [], error: null },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    const filings = await pollEdgarRss(mockSupabase as never);

    expect(filings).toHaveLength(1);
    expect(filings[0].accession_number).toBe("0001234567-26-012345");
  });

  it("generates correct EDGAR archive URLs from accession numbers", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-012345",
        formType: "4",
        entityName: "Insider",
        fileDate: "2026-11-03",
      },
    ]);

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => searchData,
    });

    const mockSupabase = createMockSupabase({
      filings: { data: [], error: null },
    });

    const { pollEdgarRss } = await import("@/lib/edgar/rss-poller");
    const filings = await pollEdgarRss(mockSupabase as never);

    expect(filings[0].filing_url).toContain("sec.gov/Archives/edgar/data/");
    expect(filings[0].filing_url).toContain("0001234567-26-012345-index.htm");
  });
});

// ---------------------------------------------------------------------------
// 2. Filing Parser Tests (HTML stripping, truncation)
// ---------------------------------------------------------------------------

describe("EDGAR filing parser", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  it("strips HTML tags and returns clean text", async () => {
    const directUrl = "https://www.sec.gov/Archives/edgar/data/filing.htm";

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      text: async () => SAMPLE_FILING_HTML,
    });

    const { downloadAndParseFiling } = await import(
      "@/lib/edgar/filing-parser"
    );
    const text = await downloadAndParseFiling(directUrl);

    expect(text).not.toContain("<h1>");
    expect(text).not.toContain("<p>");
    expect(text).not.toContain("<b>");
    expect(text).not.toContain("</body>");
    expect(text).not.toContain("<ix:nonFraction");

    expect(text).toContain("FORM 10-K");
    expect(text).toContain("ACME CORPORATION");
    expect(text).toContain("Revenue for the fiscal year was $1,200,000,000");
    expect(text).toContain("Risk Factors");
  });

  it("removes style and script blocks entirely", async () => {
    const directUrl = "https://www.sec.gov/Archives/edgar/data/filing.htm";

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      text: async () => SAMPLE_FILING_HTML,
    });

    const { downloadAndParseFiling } = await import(
      "@/lib/edgar/filing-parser"
    );
    const text = await downloadAndParseFiling(directUrl);

    expect(text).not.toContain("font-family");
    expect(text).not.toContain("Arial");
    expect(text).not.toContain("console.log");
    expect(text).not.toContain("tracking");
  });

  it("decodes HTML entities", async () => {
    const htmlWithEntities = `<p>A &amp; B &lt; C &gt; D &quot;E&quot; &#39;F&#39;</p><p>Non&nbsp;breaking</p>`;
    const directUrl = "https://www.sec.gov/Archives/edgar/data/filing.htm";

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      text: async () => htmlWithEntities,
    });

    const { downloadAndParseFiling } = await import(
      "@/lib/edgar/filing-parser"
    );
    const text = await downloadAndParseFiling(directUrl);

    expect(text).toContain("A & B");
    expect(text).toContain("< C");
    expect(text).toContain("> D");
    expect(text).toContain('"E"');
    expect(text).toContain("'F'");
  });

  it("truncates text exceeding MAX_FILING_CHARS and appends marker", async () => {
    const longContent = "<p>" + "A".repeat(120_000) + "</p>";
    const directUrl = "https://www.sec.gov/Archives/edgar/data/filing.htm";

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      text: async () => longContent,
    });

    const { downloadAndParseFiling } = await import(
      "@/lib/edgar/filing-parser"
    );
    const text = await downloadAndParseFiling(directUrl);

    expect(text.length).toBeLessThanOrEqual(100_000 + 50);
    expect(text).toContain("[Filing text truncated]");
  });

  it("throws on EDGAR download failure", async () => {
    const directUrl = "https://www.sec.gov/Archives/edgar/data/filing.htm";

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    const { downloadAndParseFiling } = await import(
      "@/lib/edgar/filing-parser"
    );

    await expect(downloadAndParseFiling(directUrl)).rejects.toThrow(
      "Failed to download filing"
    );
  });

  it("resolves primary document from EDGAR index page", async () => {
    const indexUrl =
      "https://www.sec.gov/Archives/edgar/data/0001234567/000123456726012345/0001234567-26-012345-index.htm";

    const fetchMock = globalThis.fetch as ReturnType<typeof vi.fn>;

    // First call: JSON index resolution
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        directory: {
          item: [
            {
              name: "0001234567-26-012345-index.htm",
              type: "text/html",
              size: "5000",
            },
            { name: "acme-20261003.htm", type: "text/html", size: "250000" },
            { name: "R1.htm", type: "text/html", size: "1000" },
            { name: "filing.txt", type: "text/plain", size: "300000" },
          ],
        },
      }),
    });

    // Second call: actual document download
    fetchMock.mockResolvedValueOnce({
      ok: true,
      text: async () => "<p>Filing content here.</p>",
    });

    const { downloadAndParseFiling } = await import(
      "@/lib/edgar/filing-parser"
    );
    const text = await downloadAndParseFiling(indexUrl);

    expect(text).toContain("Filing content here");

    const secondCallUrl = fetchMock.mock.calls[1][0] as string;
    expect(secondCallUrl).toContain("acme-20261003.htm");
    expect(secondCallUrl).not.toContain("R1.htm");
    expect(secondCallUrl).not.toContain("index");
  });
});

// ---------------------------------------------------------------------------
// 3. AI Analysis Prompt Structure Tests
// ---------------------------------------------------------------------------

describe("EDGAR AI analysis", () => {
  it("sends the filing text with correct system prompt structure", async () => {
    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    await analyzeFilingWithClaude("Sample text", "10-K", "Acme Corp", "ACME");

    expect(geminiGenerateMock).toHaveBeenCalledOnce();
    const callArg = geminiGenerateMock.mock.calls[0][0] as string;

    // System instruction is set on the model, not in the prompt.
    // The prompt contains filing metadata and text.
    expect(callArg).toContain("10-K");
    expect(callArg).toContain("Acme Corp");
    expect(callArg).toContain("ACME");
    expect(callArg).toContain("Sample text");
  });

  it("includes filing metadata in the user message", async () => {
    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    await analyzeFilingWithClaude(
      "Filing content here",
      "8-K",
      "Beta Inc",
      "BETA"
    );

    expect(geminiGenerateMock).toHaveBeenCalledOnce();
    const callArg = geminiGenerateMock.mock.calls[0][0] as string;

    expect(callArg).toContain("8-K");
    expect(callArg).toContain("Beta Inc");
    expect(callArg).toContain("Filing content here");
  });

  it("uses structured JSON output", async () => {
    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    await analyzeFilingWithClaude("Sample text", "10-K", "Acme Corp", "ACME");

    expect(geminiGenerateMock).toHaveBeenCalledOnce();
  });

  it("returns structured AnalysisResult with token usage", async () => {
    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    const result = await analyzeFilingWithClaude(
      "Sample text",
      "10-K",
      "Acme Corp",
      "ACME"
    );

    expect(result.analysis.key_facts).toHaveLength(3);
    expect(result.analysis.significance_score).toBe(7);
    expect(result.analysis.one_line_summary).toBeTruthy();
    expect(result.analysis.detailed_summary).toBeTruthy();
    expect(result.analysis.faq.length).toBeGreaterThanOrEqual(3);
    expect(result.usage.input_tokens).toBe(25000);
    expect(result.usage.output_tokens).toBe(1200);
  });

  it("clamps significance_score to 1-10 range (upper)", async () => {
    geminiGenerateMock.mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify({ ...SAMPLE_ANALYSIS, significance_score: 15 }),
        usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 50 },
      },
    });

    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    const result = await analyzeFilingWithClaude(
      "Sample text",
      "10-K",
      "Acme Corp",
      "ACME"
    );

    expect(result.analysis.significance_score).toBe(10);
  });

  it("clamps significance_score minimum to 1", async () => {
    geminiGenerateMock.mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify({ ...SAMPLE_ANALYSIS, significance_score: -3 }),
        usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 50 },
      },
    });

    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    const result = await analyzeFilingWithClaude(
      "Sample text",
      "10-K",
      "Acme Corp",
      "ACME"
    );

    expect(result.analysis.significance_score).toBe(1);
  });

  it("throws when GOOGLE_API_KEY is missing", async () => {
    delete process.env.GOOGLE_API_KEY;

    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );

    await expect(
      analyzeFilingWithClaude("Sample text", "10-K", "Acme Corp", "ACME")
    ).rejects.toThrow("GOOGLE_API_KEY");
  });

  it("throws when Gemini returns invalid JSON", async () => {
    geminiGenerateMock.mockResolvedValueOnce({
      response: {
        text: () => "I cannot analyze this filing.",
        usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 50 },
      },
    });

    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );

    await expect(
      analyzeFilingWithClaude("Sample text", "10-K", "Acme Corp", "ACME")
    ).rejects.toThrow();
  });

  it("respects GEMINI_FILING_MODEL env override", async () => {
    process.env.GEMINI_FILING_MODEL = "gemini-2.0-flash";

    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    await analyzeFilingWithClaude("Sample text", "10-K", "Acme Corp", "ACME");

    expect(geminiGenerateMock).toHaveBeenCalledOnce();
  });

  it("truncates excessively long filing text before sending", async () => {
    const longText = "A".repeat(200_001);

    const { analyzeFilingWithClaude } = await import(
      "@/lib/edgar/ai-analysis"
    );
    await analyzeFilingWithClaude(longText, "10-K", "Acme Corp", "ACME");

    expect(geminiGenerateMock).toHaveBeenCalledOnce();
    const callArg = geminiGenerateMock.mock.calls[0][0] as string;

    // Prompt includes metadata text beyond just the filing, so total exceeds
    // ABSOLUTE_MAX_CHARS slightly — but the filing portion is truncated.
    expect(callArg).toContain("[Filing text truncated for analysis]");
  });
});

// ---------------------------------------------------------------------------
// 4. Pipeline Orchestrator Tests
//
// These tests use custom Supabase mock objects (not createMockSupabase)
// because the pipeline calls multiple tables with chained methods.
// ---------------------------------------------------------------------------

/**
 * Build a Supabase-like mock where `from(table)` returns a chainable builder.
 * Each table can have custom behavior via the handlers map.
 */
function buildPipelineSupabaseMock(
  handlers: Record<string, () => Record<string, unknown>>
) {
  return {
    from: (table: string) => {
      const handler = handlers[table];
      if (handler) return handler();
      // Default: chainable that resolves to empty success
      return {
        insert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
        select: () => ({ in: () => Promise.resolve({ data: [], error: null }) }),
        update: () => ({ eq: () => Promise.resolve({ data: null, error: null }) }),
      };
    },
  };
}

describe("EDGAR pipeline orchestrator", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  it("returns zero filings_processed when no new filings exist", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ hits: { total: { value: 0 }, hits: [] } }),
    });

    const mockSupabase = createMockSupabase({
      pipeline_runs: { data: { id: "run-001" }, error: null },
      filings: { data: [], error: null },
    });

    const { processNewFilings } = await import("@/lib/edgar/pipeline");
    const result = await processNewFilings(mockSupabase as never);

    expect(result.filings_processed).toBe(0);
    expect(result.errors_count).toBe(0);
    expect(result.status).toBe("completed");
    expect(result.pipeline_run_id).toBe("run-001");
  });

  it("creates a pipeline_run record before processing", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ hits: { total: { value: 0 }, hits: [] } }),
    });

    const fromCalls: string[] = [];

    const mockSupabase = buildPipelineSupabaseMock({
      pipeline_runs: () => ({
        insert: () => ({
          select: () => ({
            single: () =>
              Promise.resolve({ data: { id: "run-002" }, error: null }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      filings: () => ({
        select: () => ({
          in: () => Promise.resolve({ data: [], error: null }),
        }),
      }),
    });

    // Wrap from to track calls
    const originalFrom = mockSupabase.from.bind(mockSupabase);
    mockSupabase.from = (table: string) => {
      fromCalls.push(table);
      return originalFrom(table);
    };

    const { processNewFilings } = await import("@/lib/edgar/pipeline");
    await processNewFilings(mockSupabase as never);

    expect(fromCalls).toContain("pipeline_runs");
    // pipeline_runs should be the first table accessed
    expect(fromCalls[0]).toBe("pipeline_runs");
  });

  it("records pipeline errors when filing processing fails", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-000001",
        formType: "10-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
      },
    ]);

    const fetchMock = globalThis.fetch as ReturnType<typeof vi.fn>;
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => searchData,
      })
      // Index resolution and filing download both fail
      .mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      });

    const pipelineErrors: unknown[] = [];

    const mockSupabase = buildPipelineSupabaseMock({
      pipeline_runs: () => ({
        insert: () => ({
          select: () => ({
            single: () =>
              Promise.resolve({ data: { id: "run-003" }, error: null }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      filings: () => ({
        select: () => ({
          in: () => Promise.resolve({ data: [], error: null }),
        }),
      }),
      companies: () => ({
        select: () => ({
          or: () => ({
            limit: () => ({
              single: () =>
                Promise.resolve({ data: SAMPLE_COMPANY, error: null }),
            }),
          }),
        }),
      }),
      pipeline_errors: () => ({
        insert: (data: unknown) => {
          pipelineErrors.push(data);
          return Promise.resolve({ data: null, error: null });
        },
      }),
    });

    const { processNewFilings } = await import("@/lib/edgar/pipeline");
    const result = await processNewFilings(mockSupabase as never);

    expect(result.errors_count).toBeGreaterThanOrEqual(1);
    expect(pipelineErrors.length).toBeGreaterThanOrEqual(1);
  });

  it("auto-creates companies from EDGAR metadata for unknown CIKs", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0009999999-26-000001",
        formType: "10-K",
        entityName: "Unknown Corp",
        fileDate: "2026-11-03",
        entityId: "9999999",
      },
    ]);

    const fetchMock = globalThis.fetch as ReturnType<typeof vi.fn>;
    // 1. EDGAR search
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => searchData,
    });
    // 2. Filing index JSON (download step)
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        directory: {
          item: [{ name: "doc.htm", type: "file", size: "1000" }],
        },
      }),
    });
    // 3. Filing document HTML
    fetchMock.mockResolvedValueOnce({
      ok: true,
      text: async () =>
        "<html><body>" + "Test filing content. ".repeat(50) + "</body></html>",
    });

    let companyCreated = false;
    const mockCompany = {
      id: "auto-company-001",
      ticker: "CIK9999999",
      name: "Unknown Corp",
      cik_number: "0009999999",
      sector: "",
      exchange: "",
      market_cap: 0,
      status: "active",
    };

    const mockSupabase = buildPipelineSupabaseMock({
      pipeline_runs: () => ({
        insert: () => ({
          select: () => ({
            single: () =>
              Promise.resolve({ data: { id: "run-005" }, error: null }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      filings: () => ({
        select: () => ({
          in: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => ({
          select: () => ({
            single: () =>
              Promise.resolve({
                data: {
                  id: "filing-auto-001",
                  slug: "cik9999999-10-k-2026-11-03-000001",
                  company_id: "auto-company-001",
                },
                error: null,
              }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      companies: () => ({
        select: () => ({
          or: () => ({
            limit: () => ({
              single: () =>
                Promise.resolve({
                  data: companyCreated ? mockCompany : null,
                  error: null,
                }),
            }),
          }),
        }),
        insert: () => {
          companyCreated = true;
          return {
            select: () => ({
              single: () =>
                Promise.resolve({ data: mockCompany, error: null }),
            }),
          };
        },
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
    });

    const { processNewFilings } = await import("@/lib/edgar/pipeline");
    const result = await processNewFilings(mockSupabase as never);

    expect(companyCreated).toBe(true);
    expect(result.filings_processed).toBe(1);
    expect(result.status).toBe("completed");
  });

  it("processes a full filing through the pipeline end-to-end", async () => {
    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-012345",
        formType: "10-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
        entityId: "1234567",
      },
    ]);

    const fetchMock = globalThis.fetch as ReturnType<typeof vi.fn>;
    fetchMock
      // 1. EDGAR search API
      .mockResolvedValueOnce({
        ok: true,
        json: async () => searchData,
      })
      // 2. JSON index resolution (filing URL ends in -index.htm)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          directory: {
            item: [
              { name: "acme-20261103.htm", type: "text/html", size: "50000" },
            ],
          },
        }),
      })
      // 3. Actual document download
      .mockResolvedValueOnce({
        ok: true,
        text: async () => "<p>" + "Financial data ".repeat(50) + "</p>",
      });

    let insertedSlug: string | undefined;
    let contentQueueInserted: Record<string, unknown> | undefined;

    const mockSupabase = buildPipelineSupabaseMock({
      pipeline_runs: () => ({
        insert: () => ({
          select: () => ({
            single: () =>
              Promise.resolve({ data: { id: "run-e2e" }, error: null }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      filings: () => ({
        select: () => ({
          in: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: (data: Record<string, unknown>) => {
          insertedSlug = data.slug as string;
          return {
            select: () => ({
              single: () =>
                Promise.resolve({
                  data: {
                    id: "filing-e2e",
                    slug: data.slug,
                    filing_type: data.filing_type,
                    significance_score: data.significance_score ?? 7,
                  },
                  error: null,
                }),
            }),
          };
        },
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      companies: () => ({
        select: () => ({
          or: () => ({
            limit: () => ({
              single: () =>
                Promise.resolve({ data: SAMPLE_COMPANY, error: null }),
            }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      content_queue: () => ({
        insert: (data: Record<string, unknown>) => {
          contentQueueInserted = data;
          return Promise.resolve({ data: null, error: null });
        },
      }),
    });

    const { processNewFilings } = await import("@/lib/edgar/pipeline");
    const result = await processNewFilings(mockSupabase as never);

    expect(result.filings_processed).toBe(1);
    expect(result.errors_count).toBe(0);
    expect(result.status).toBe("completed");

    // Verify slug was generated correctly
    expect(insertedSlug).toBe("acme-10-k-2026-11-03-012345");

    // Verify ISR revalidation was triggered
    expect(onFilingProcessedMock).toHaveBeenCalledOnce();

    // Significance is 7, which is < 8, so no content queue entry
    expect(contentQueueInserted).toBeUndefined();
  });

  it("creates a draft social post for significance >= 8", async () => {
    // Override the analysis mock to return significance 9
    geminiGenerateMock.mockResolvedValue({
      response: {
        text: () => JSON.stringify({ ...SAMPLE_ANALYSIS, significance_score: 9 }),
        usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 50 },
      },
    });

    const searchData = buildEdgarSearchResponse([
      {
        accession: "0001234567-26-099999",
        formType: "8-K",
        entityName: "Acme Corp",
        fileDate: "2026-11-03",
        entityId: "1234567",
      },
    ]);

    const fetchMock = globalThis.fetch as ReturnType<typeof vi.fn>;
    fetchMock
      // 1. EDGAR search API
      .mockResolvedValueOnce({
        ok: true,
        json: async () => searchData,
      })
      // 2. JSON index resolution (filing URL ends in -index.htm)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          directory: {
            item: [
              { name: "acme-8k-20261103.htm", type: "text/html", size: "10000" },
            ],
          },
        }),
      })
      // 3. Actual document download
      .mockResolvedValueOnce({
        ok: true,
        text: async () => "<p>" + "Breaking news content ".repeat(20) + "</p>",
      });

    let contentQueueInserted: Record<string, unknown> | undefined;

    const mockSupabase = buildPipelineSupabaseMock({
      pipeline_runs: () => ({
        insert: () => ({
          select: () => ({
            single: () =>
              Promise.resolve({ data: { id: "run-cq" }, error: null }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      filings: () => ({
        select: () => ({
          in: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: (data: Record<string, unknown>) => ({
          select: () => ({
            single: () =>
              Promise.resolve({
                data: {
                  id: "filing-cq",
                  slug: data.slug,
                  filing_type: data.filing_type,
                  significance_score: 9,
                },
                error: null,
              }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      companies: () => ({
        select: () => ({
          or: () => ({
            limit: () => ({
              single: () =>
                Promise.resolve({ data: SAMPLE_COMPANY, error: null }),
            }),
          }),
        }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      content_queue: () => ({
        insert: (data: Record<string, unknown>) => {
          contentQueueInserted = data;
          return Promise.resolve({ data: null, error: null });
        },
      }),
    });

    const { processNewFilings } = await import("@/lib/edgar/pipeline");
    const result = await processNewFilings(mockSupabase as never);

    expect(result.filings_processed).toBe(1);
    expect(contentQueueInserted).toBeDefined();
    expect(contentQueueInserted!.type).toBe("social");
    expect(contentQueueInserted!.status).toBe("draft");
    expect((contentQueueInserted!.title as string)).toContain("ACME");
  });
});

// ---------------------------------------------------------------------------
// 5. Cron Route Handler Tests
// ---------------------------------------------------------------------------

describe("EDGAR cron route handler", () => {
  /**
   * Helper: reset modules and set up the cron route with a mocked pipeline.
   * Returns the POST handler and the mock for processNewFilings.
   */
  async function importCronRoute(
    pipelineBehavior: "success" | "error" | "default" = "default"
  ) {
    vi.resetModules();

    const pipelineMock = vi.fn();

    if (pipelineBehavior === "success") {
      pipelineMock.mockResolvedValue({
        pipeline_run_id: "run-cron-001",
        filings_processed: 5,
        errors_count: 1,
        status: "completed",
      });
    } else if (pipelineBehavior === "error") {
      pipelineMock.mockRejectedValue(
        new Error("Database connection failed")
      );
    } else {
      pipelineMock.mockResolvedValue({
        pipeline_run_id: "run-default",
        filings_processed: 0,
        errors_count: 0,
        status: "completed",
      });
    }

    // Use vi.doMock (not hoisted) so each test gets fresh module instances
    vi.doMock("@supabase/supabase-js", () => ({
      createClient: vi.fn(() => ({})),
    }));
    vi.doMock("@/lib/edgar/pipeline", () => ({
      processNewFilings: pipelineMock,
    }));
    vi.doMock("@upstash/qstash", () => ({
      Receiver: class {
        verify = qstashReceiverVerifyMock;
        constructor() {}
      },
    }));

    const { POST } = await import("@/app/api/cron/edgar-poll/route");
    return { POST, pipelineMock };
  }

  it("returns 500 when Supabase config is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;

    const { POST } = await importCronRoute();

    const request = new Request("http://localhost:3000/api/cron/edgar-poll", {
      method: "POST",
      body: "{}",
      headers: { "upstash-signature": "valid-sig" },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toContain("Supabase configuration missing");
  });

  it("returns 500 when GOOGLE_API_KEY is missing", async () => {
    delete process.env.GOOGLE_API_KEY;

    const { POST } = await importCronRoute();

    const request = new Request("http://localhost:3000/api/cron/edgar-poll", {
      method: "POST",
      body: "{}",
      headers: { "upstash-signature": "valid-sig" },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toContain("GOOGLE_API_KEY");
  });

  it("returns pipeline results on success", async () => {
    const { POST } = await importCronRoute("success");

    const request = new Request("http://localhost:3000/api/cron/edgar-poll", {
      method: "POST",
      body: "{}",
      headers: { "upstash-signature": "valid-sig" },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.pipeline_run_id).toBe("run-cron-001");
    expect(body.filings_processed).toBe(5);
    expect(body.errors_count).toBe(1);
    expect(body.status).toBe("completed");
    expect(body.timestamp).toBeDefined();
  });

  it("returns 500 with error message when pipeline throws", async () => {
    const { POST } = await importCronRoute("error");

    const request = new Request("http://localhost:3000/api/cron/edgar-poll", {
      method: "POST",
      body: "{}",
      headers: { "upstash-signature": "valid-sig" },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.success).toBe(false);
    expect(body.error).toBe("Database connection failed");
    expect(body.timestamp).toBeDefined();
  });

  it("rejects requests without QStash signature", async () => {
    const { POST } = await importCronRoute();

    const request = new Request(
      "http://localhost:3000/api/cron/edgar-poll",
      {
        method: "POST",
        body: "{}",
      }
    );

    const response = await POST(request);
    expect(response.status).toBe(401);

    const body = await response.json();
    expect(body.error).toContain("Missing signature");
  });

  it("rejects requests with invalid QStash signature", async () => {
    qstashReceiverVerifyMock.mockRejectedValue(
      new Error("Invalid signature")
    );

    const { POST } = await importCronRoute();

    const request = new Request(
      "http://localhost:3000/api/cron/edgar-poll",
      {
        method: "POST",
        body: "{}",
        headers: {
          "upstash-signature": "bad-signature",
        },
      }
    );

    const response = await POST(request);
    expect(response.status).toBe(401);

    const body = await response.json();
    expect(body.error).toContain("Invalid signature");
  });
});
