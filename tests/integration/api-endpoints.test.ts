import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ---------------------------------------------------------------------------
// Mock Supabase client
// ---------------------------------------------------------------------------

/**
 * Build a chainable mock Supabase client. Each `.from(table)` call returns a
 * builder that records the table name and ultimately resolves to a per-table
 * response.  Tables not in `tableResponses` resolve `{ data: null, error: null }`.
 */
function buildMockSupabase(
  tableResponses: Record<
    string,
    { data: unknown; error: unknown; count?: number }
  > = {}
) {
  function createChain(response: {
    data: unknown;
    error: unknown;
    count?: number;
  }) {
    const chain: Record<string, unknown> = {};
    const methods = [
      "select",
      "insert",
      "update",
      "delete",
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "in",
      "is",
      "order",
      "limit",
      "range",
      "single",
      "maybeSingle",
      "filter",
      "match",
      "not",
      "or",
      "contains",
      "overlaps",
      "textSearch",
      "head",
    ];
    for (const m of methods) {
      chain[m] = vi.fn(() => chain);
    }
    // Make the chain thenable so `await supabase.from(...)...` resolves.
    chain.then = (resolve: (v: unknown) => void) =>
      Promise.resolve(response).then(resolve);
    return chain;
  }

  return {
    from: vi.fn((table: string) => {
      const response = tableResponses[table] ?? { data: null, error: null };
      return createChain(response);
    }),
  };
}

let mockSupabase: ReturnType<typeof buildMockSupabase>;

// ---------------------------------------------------------------------------
// Module mocks — declared before any route imports
// ---------------------------------------------------------------------------

vi.mock("@/lib/supabase/server", () => ({
  createWebhookClient: () => mockSupabase,
}));

// Mock next/cache (revalidatePath used by revalidate-hubs)
const mockRevalidatePath = vi.fn();
vi.mock("next/cache", () => ({
  revalidatePath: (...args: unknown[]) => mockRevalidatePath(...args),
  revalidateTag: vi.fn(),
}));

// Mock @upstash/qstash — the routes dynamically import it.
// We expose a controllable `verify` so tests can make it throw.
const mockVerify = vi.fn();
vi.mock("@upstash/qstash", () => ({
  Receiver: class {
    verify = mockVerify;
    constructor() {
      /* noop */
    }
  },
}));

// Mock api-auth for the v1 routes
vi.mock("@/lib/api-auth", () => ({
  validateApiKey: vi.fn(),
  checkApiAccess: vi.fn(),
  apiError: (message: string, status: number) =>
    Response.json({ error: message }, { status }),
  rateLimitError: (dailyLimit: number) =>
    Response.json(
      { error: "Rate limit exceeded. Try again after midnight UTC." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(dailyLimit),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": "0",
        },
      }
    ),
  withRateLimitHeaders: (response: Response) => response,
}));

// Mock razorpay lib for webhook tests
vi.mock("@/lib/razorpay", () => ({
  verifyWebhookSignature: vi.fn(),
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function createMockRequest(
  options: { body?: string; headers?: Record<string, string> } = {}
): Request {
  return new Request("http://localhost:3000/api/test", {
    method: "POST",
    body: options.body ?? "",
    headers: {
      "upstash-signature": "valid-sig",
      ...options.headers,
    },
  });
}

/** Parse a Response's JSON body. */
async function json(res: Response): Promise<Record<string, unknown>> {
  return res.json() as Promise<Record<string, unknown>>;
}

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

beforeEach(() => {
  // Default: QStash keys present and verification passes (fail-closed design)
  process.env.QSTASH_CURRENT_SIGNING_KEY = "test-current-key";
  process.env.QSTASH_NEXT_SIGNING_KEY = "test-next-key";

  // Fresh mock Supabase for each test
  mockSupabase = buildMockSupabase();

  mockRevalidatePath.mockReset();
  mockVerify.mockReset();
  // Default: verification passes
  mockVerify.mockResolvedValue(true);
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ==========================================================================
// CRON: reset-api-usage
// ==========================================================================

describe("POST /api/cron/reset-api-usage", () => {
  async function importHandler() {
    // Dynamic import so the mock modules are in place
    const mod = await import(
      "@/app/api/cron/reset-api-usage/route"
    );
    return mod.POST;
  }

  it("returns 500 when QStash keys are absent (fail-closed)", async () => {
    delete process.env.QSTASH_CURRENT_SIGNING_KEY;
    delete process.env.QSTASH_NEXT_SIGNING_KEY;

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(500);
    expect(body.error).toBe("QStash signing keys not configured");
  });

  it("returns 401 when signature header is missing", async () => {
    const POST = await importHandler();
    const res = await POST(
      createMockRequest({ headers: { "upstash-signature": "" } })
    );
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Missing signature");
  });

  it("returns 401 when QStash signature verification fails", async () => {
    mockVerify.mockRejectedValueOnce(new Error("bad sig"));

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid signature");
  });

  it("passes through QStash verification when signature is valid", async () => {
    mockSupabase = buildMockSupabase({
      api_keys: { data: null, error: null },
    });

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
    expect(mockVerify).toHaveBeenCalled();
  });

  it("reports supabase error in response body without crashing", async () => {
    mockSupabase = buildMockSupabase({
      api_keys: { data: null, error: { message: "db error" } },
    });

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(false);
    expect(body.error).toBe("db error");
  });

  it("returns 500 when an unexpected error is thrown", async () => {
    // Override the mock so .from() throws
    mockSupabase = {
      from: vi.fn(() => {
        throw new Error("connection refused");
      }),
    };

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(500);
    expect(body.success).toBe(false);
    expect(body.error).toBe("connection refused");
  });
});

// ==========================================================================
// CRON: archive-cleanup
// ==========================================================================

describe("POST /api/cron/archive-cleanup", () => {
  async function importHandler() {
    const mod = await import(
      "@/app/api/cron/archive-cleanup/route"
    );
    return mod.POST;
  }

  it("succeeds and calls three operations (rejected, drafts, pipeline_runs)", async () => {
    mockSupabase = buildMockSupabase({
      content_queue: { data: null, error: null },
      pipeline_runs: { data: null, error: null },
    });

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.errors).toEqual([]);
    expect(body.timestamp).toBeDefined();

    // The route calls .from("content_queue") twice (rejected + drafts)
    // and .from("pipeline_runs") once — total 3 calls.
    const fromCalls = mockSupabase.from.mock.calls.map(
      (c: unknown[]) => c[0]
    );
    expect(fromCalls).toContain("content_queue");
    expect(fromCalls).toContain("pipeline_runs");
    // content_queue should be called exactly twice
    expect(fromCalls.filter((t: string) => t === "content_queue")).toHaveLength(
      2
    );
    expect(
      fromCalls.filter((t: string) => t === "pipeline_runs")
    ).toHaveLength(1);
  });

  it("returns 401 when no signature is provided", async () => {
    const POST = await importHandler();
    const res = await POST(
      createMockRequest({ headers: { "upstash-signature": "" } })
    );
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Missing signature");
  });

  it("returns 401 when QStash signature verification fails", async () => {
    mockVerify.mockRejectedValueOnce(new Error("bad sig"));

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid signature");
  });

  it("collects partial errors from individual operations", async () => {
    // content_queue operations succeed but pipeline_runs fails.
    // Because the mock resolves the same response for all calls to a given
    // table, we simulate by making content_queue return an error —
    // both content_queue calls will share it, giving 2 errors.
    mockSupabase = buildMockSupabase({
      content_queue: {
        data: null,
        error: { message: "content queue error" },
      },
      pipeline_runs: { data: null, error: null },
    });

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(false);
    expect(body.errors).toContain("content queue error");
  });

  it("returns 500 when an unexpected error is thrown", async () => {
    mockSupabase = {
      from: vi.fn(() => {
        throw new Error("total failure");
      }),
    };

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(500);
    expect(body.success).toBe(false);
    expect(body.error).toBe("total failure");
  });
});

// ==========================================================================
// CRON: revalidate-hubs
// ==========================================================================

describe("POST /api/cron/revalidate-hubs", () => {
  async function importHandler() {
    const mod = await import(
      "@/app/api/cron/revalidate-hubs/route"
    );
    return mod.POST;
  }

  const HUB_PAGES = [
    "/",
    "/trending",
    "/recent-filings",
    "/insider-buying",
    "/insider-selling",
    "/earnings-this-week",
    "/blog",
    "/archive",
  ];

  it("revalidates all hub pages with valid QStash auth", async () => {
    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.timestamp).toBeDefined();

    // Verify all hub pages were revalidated
    const revalidated = body.revalidated as Array<{
      path: string;
      status: string;
    }>;
    expect(revalidated).toHaveLength(HUB_PAGES.length);

    for (const page of HUB_PAGES) {
      const entry = revalidated.find((r) => r.path === page);
      expect(entry).toBeDefined();
      expect(entry!.status).toBe("revalidated");
    }

    // revalidatePath should have been called once per hub page
    expect(mockRevalidatePath).toHaveBeenCalledTimes(HUB_PAGES.length);
    for (const page of HUB_PAGES) {
      expect(mockRevalidatePath).toHaveBeenCalledWith(page);
    }
  });

  it("returns 401 when no signature is provided", async () => {
    const POST = await importHandler();
    const res = await POST(
      createMockRequest({ headers: { "upstash-signature": "" } })
    );
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Missing signature");
  });

  it("returns 401 when QStash signature verification fails", async () => {
    mockVerify.mockRejectedValueOnce(new Error("bad sig"));

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid signature");
  });

  it("succeeds with valid QStash signature", async () => {
    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
    expect(mockVerify).toHaveBeenCalled();
  });

  it("reports per-path errors when revalidatePath throws", async () => {
    // Make revalidatePath throw for a specific path
    mockRevalidatePath.mockImplementation((path: string) => {
      if (path === "/trending") {
        throw new Error("cache purge failed");
      }
    });

    const POST = await importHandler();
    const res = await POST(createMockRequest());
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.success).toBe(true);

    const revalidated = body.revalidated as Array<{
      path: string;
      status: string;
    }>;

    const trending = revalidated.find((r) => r.path === "/trending");
    expect(trending).toBeDefined();
    expect(trending!.status).toContain("error");
    expect(trending!.status).toContain("cache purge failed");

    // Other pages should still be revalidated successfully
    const home = revalidated.find((r) => r.path === "/");
    expect(home).toBeDefined();
    expect(home!.status).toBe("revalidated");
  });
});

// ==========================================================================
// Public API v1 — basic response structure validation
// ==========================================================================

describe("GET /api/v1/filings", () => {
  async function importHandler() {
    const mod = await import("@/app/api/v1/filings/route");
    return mod.GET;
  }

  it("returns 401 when API key is invalid", async () => {
    const { validateApiKey } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({ ok: false, rateLimited: false });

    const GET = await importHandler();
    const request = new Request("http://localhost:3000/api/v1/filings", {
      method: "GET",
    });
    // NextRequest needs a nextUrl, use the native Request with a full URL
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(request);
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid or missing API key");
  });

  it("returns 403 when user lacks Pro plan", async () => {
    const { validateApiKey, checkApiAccess } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({
      ok: true,
      apiKey: { calls_today: 0 } as never,
      userId: "user-123",
      dailyLimit: 1000,
    });
    vi.mocked(checkApiAccess).mockResolvedValueOnce(false);

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/filings"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(403);
    expect(body.error).toBe("API access requires Pro plan");
  });

  it("returns 429 when rate limited", async () => {
    const { validateApiKey } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({
      ok: false,
      rateLimited: true,
      dailyLimit: 1000,
    });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/filings"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(429);
    expect(body.error).toMatch(/rate limit/i);
    expect(res.headers.get("X-RateLimit-Limit")).toBe("1000");
    expect(res.headers.get("X-RateLimit-Remaining")).toBe("0");
    expect(res.headers.get("X-RateLimit-Reset")).toBeDefined();
  });

  it("returns filing data with correct response shape", async () => {
    const { validateApiKey, checkApiAccess } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({
      ok: true,
      apiKey: { calls_today: 0 } as never,
      userId: "user-123",
      dailyLimit: 1000,
    });
    vi.mocked(checkApiAccess).mockResolvedValueOnce(true);

    mockSupabase = buildMockSupabase({
      filings: {
        data: [
          {
            id: "f1",
            company_id: "c1",
            filing_type: "10-K",
            filed_date: "2025-01-15",
            significance_score: 8,
            one_line_summary: "Annual report",
            ai_summary_prose: "Full summary",
            has_earnings_data: true,
            insider_data: null,
            raw_url: "https://sec.gov/filing/1",
          },
        ],
        error: null,
      },
      companies: {
        data: [
          {
            id: "c1",
            ticker: "AAPL",
            name: "Apple Inc",
            sector: "Technology",
            market_cap: 3000000000000,
            exchange: "NASDAQ",
            last_filing_date: "2025-01-15",
          },
        ],
        error: null,
      },
    });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/filings?limit=10"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.data).toBeDefined();
    expect(body.meta).toBeDefined();

    const meta = body.meta as Record<string, unknown>;
    expect(meta.limit).toBeDefined();
    expect(meta.offset).toBeDefined();
    expect(meta.days).toBeDefined();

    const data = body.data as Array<Record<string, unknown>>;
    expect(data).toHaveLength(1);
    expect(data[0].ticker).toBe("AAPL");
    expect(data[0].company_name).toBe("Apple Inc");
    expect(data[0].filing_type).toBe("10-K");
    expect(data[0].significance_score).toBe(8);
  });
});

describe("GET /api/v1/companies", () => {
  async function importHandler() {
    const mod = await import("@/app/api/v1/companies/route");
    return mod.GET;
  }

  it("returns 401 when API key is invalid", async () => {
    const { validateApiKey } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({ ok: false, rateLimited: false });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/companies"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid or missing API key");
  });

  it("returns company data with correct response shape", async () => {
    const { validateApiKey, checkApiAccess } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({
      ok: true,
      apiKey: { calls_today: 0 } as never,
      userId: "user-123",
      dailyLimit: 1000,
    });
    vi.mocked(checkApiAccess).mockResolvedValueOnce(true);

    mockSupabase = buildMockSupabase({
      companies: {
        data: [
          {
            id: "c1",
            ticker: "GOOG",
            name: "Alphabet Inc",
            sector: "Technology",
            market_cap: 2000000000000,
            exchange: "NASDAQ",
            last_filing_date: "2025-01-10",
            status: "active",
          },
        ],
        error: null,
      },
    });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/companies"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.data).toBeDefined();
    expect(body.meta).toBeDefined();

    const data = body.data as Array<Record<string, unknown>>;
    expect(data).toHaveLength(1);
    expect(data[0].ticker).toBe("GOOG");
    expect(data[0].name).toBe("Alphabet Inc");
    expect(data[0].sector).toBe("Technology");

    const meta = body.meta as Record<string, unknown>;
    expect(meta.count).toBe(1);
    expect(meta.offset).toBeDefined();
    expect(meta.limit).toBeDefined();
  });
});

describe("GET /api/v1/insider-trades", () => {
  async function importHandler() {
    const mod = await import(
      "@/app/api/v1/insider-trades/route"
    );
    return mod.GET;
  }

  it("returns 401 when API key is invalid", async () => {
    const { validateApiKey } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({ ok: false, rateLimited: false });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/insider-trades"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid or missing API key");
  });

  it("returns insider trade data with correct response shape", async () => {
    const { validateApiKey, checkApiAccess } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({
      ok: true,
      apiKey: { calls_today: 0 } as never,
      userId: "user-123",
      dailyLimit: 1000,
    });
    vi.mocked(checkApiAccess).mockResolvedValueOnce(true);

    mockSupabase = buildMockSupabase({
      filings: {
        data: [
          {
            id: "f2",
            company_id: "c1",
            filing_type: "4",
            filed_date: "2025-01-12",
            significance_score: 7,
            one_line_summary: "Insider purchase",
            insider_data: { type: "buy", shares: 10000 },
            raw_url: "https://sec.gov/filing/2",
          },
        ],
        error: null,
      },
      companies: {
        data: [
          {
            id: "c1",
            ticker: "TSLA",
            name: "Tesla Inc",
            sector: "Automotive",
            market_cap: 800000000000,
            exchange: "NASDAQ",
            last_filing_date: "2025-01-12",
          },
        ],
        error: null,
      },
    });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/insider-trades"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.data).toBeDefined();
    expect(body.meta).toBeDefined();

    const data = body.data as Array<Record<string, unknown>>;
    expect(data).toHaveLength(1);
    expect(data[0].ticker).toBe("TSLA");
    expect(data[0].insider_data).toBeDefined();

    const meta = body.meta as Record<string, unknown>;
    expect(meta.days).toBeDefined();
  });
});

describe("GET /api/v1/export", () => {
  async function importHandler() {
    const mod = await import("@/app/api/v1/export/route");
    return mod.GET;
  }

  it("returns 401 when API key is invalid", async () => {
    const { validateApiKey } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({ ok: false, rateLimited: false });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/export"
    );
    const res = await GET(nextReq);
    const body = await json(res);

    expect(res.status).toBe(401);
    expect(body.error).toBe("Invalid or missing API key");
  });

  it("returns CSV with correct content type", async () => {
    const { validateApiKey, checkApiAccess } = await import("@/lib/api-auth");
    vi.mocked(validateApiKey).mockResolvedValueOnce({
      ok: true,
      apiKey: { calls_today: 0 } as never,
      userId: "user-123",
      dailyLimit: 1000,
    });
    vi.mocked(checkApiAccess).mockResolvedValueOnce(true);

    mockSupabase = buildMockSupabase({
      filings: {
        data: [
          {
            id: "f1",
            company_id: "c1",
            filing_type: "10-K",
            filed_date: "2025-01-15",
            significance_score: 8,
            one_line_summary: "Annual report",
            has_earnings_data: true,
            raw_url: "https://sec.gov/filing/1",
          },
        ],
        error: null,
      },
      companies: {
        data: [
          {
            id: "c1",
            ticker: "AAPL",
            name: "Apple Inc",
          },
        ],
        error: null,
      },
    });

    const GET = await importHandler();
    const { NextRequest } = await import("next/server");
    const nextReq = new NextRequest(
      "http://localhost:3000/api/v1/export"
    );
    const res = await GET(nextReq);

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("text/csv");
    expect(res.headers.get("content-disposition")).toContain(
      "attachment; filename="
    );
    expect(res.headers.get("content-disposition")).toContain(
      "filings-export-"
    );

    const csv = await res.text();
    // First line should be CSV headers
    expect(csv).toContain(
      "ticker,company_name,filing_type,filed_date,significance_score,one_line_summary,has_earnings_data,raw_url"
    );
    // Data row should contain the filing
    expect(csv).toContain("AAPL");
    expect(csv).toContain("10-K");
  });
});

// ==========================================================================
// Webhook: Razorpay
// ==========================================================================

describe("POST /api/webhooks/razorpay", () => {
  async function importHandler() {
    const mod = await import(
      "@/app/api/webhooks/razorpay/route"
    );
    return mod.POST;
  }

  it("returns 400 when signature header is missing", async () => {
    const POST = await importHandler();
    const res = await POST(
      createMockRequest({ body: JSON.stringify({ event: "test" }) })
    );
    const body = await json(res);

    expect(res.status).toBe(400);
    expect(body.error).toBe("Missing signature");
  });

  it("returns 400 when signature is invalid", async () => {
    const { verifyWebhookSignature } = await import("@/lib/razorpay");
    vi.mocked(verifyWebhookSignature).mockReturnValueOnce(false);

    const POST = await importHandler();
    const res = await POST(
      createMockRequest({
        body: JSON.stringify({ event: "test" }),
        headers: { "x-razorpay-signature": "bad-sig" },
      })
    );
    const body = await json(res);

    expect(res.status).toBe(400);
    expect(body.error).toBe("Invalid signature");
  });

  it("returns 200 for payment.captured with valid signature", async () => {
    const { verifyWebhookSignature } = await import("@/lib/razorpay");
    vi.mocked(verifyWebhookSignature).mockReturnValueOnce(true);

    mockSupabase = buildMockSupabase({
      subscriptions: { data: { id: "sub-1" }, error: null },
    });

    const webhookBody = JSON.stringify({
      event: "payment.captured",
      payload: {
        payment: {
          entity: {
            id: "pay_123",
            notes: { user_id: "user-1", plan_id: "pro" },
          },
        },
      },
    });

    const POST = await importHandler();
    const res = await POST(
      createMockRequest({
        body: webhookBody,
        headers: { "x-razorpay-signature": "valid-sig" },
      })
    );
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.received).toBe(true);
    // Should have queried subscriptions
    expect(mockSupabase.from).toHaveBeenCalledWith("subscriptions");
  });

  it("returns 200 for unhandled event types (acknowledges receipt)", async () => {
    const { verifyWebhookSignature } = await import("@/lib/razorpay");
    vi.mocked(verifyWebhookSignature).mockReturnValueOnce(true);

    const webhookBody = JSON.stringify({
      event: "some.unknown.event",
      payload: {},
    });

    const POST = await importHandler();
    const res = await POST(
      createMockRequest({
        body: webhookBody,
        headers: { "x-razorpay-signature": "valid-sig" },
      })
    );
    const body = await json(res);

    expect(res.status).toBe(200);
    expect(body.received).toBe(true);
  });

  it("returns 200 even when processing throws (prevents Razorpay retries)", async () => {
    const { verifyWebhookSignature } = await import("@/lib/razorpay");
    vi.mocked(verifyWebhookSignature).mockReturnValueOnce(true);

    // Provide malformed JSON after signature check passes — the JSON.parse
    // inside the handler will throw because body is not valid JSON.
    // Actually, the handler parses body as JSON after verifying. If we pass
    // invalid JSON, it throws inside the try/catch and returns 200.
    const POST = await importHandler();
    const res = await POST(
      createMockRequest({
        body: "not valid json",
        headers: { "x-razorpay-signature": "valid-sig" },
      })
    );
    const body = await json(res);

    // The route catches all errors and returns 200 to prevent retries
    expect(res.status).toBe(200);
    expect(body.received).toBe(true);
  });
});

// ==========================================================================
// Auth callback — open redirect prevention
// ==========================================================================

describe("GET /auth/callback — open redirect prevention", () => {
  const mockExchangeCode = vi.fn();

  beforeEach(() => {
    vi.resetModules();
    mockExchangeCode.mockReset();

    // Mock createClient to return a Supabase client with auth
    vi.doMock("@/lib/supabase/server", () => ({
      createClient: vi.fn().mockResolvedValue({
        auth: {
          exchangeCodeForSession: mockExchangeCode,
        },
      }),
      createWebhookClient: () => mockSupabase,
    }));
  });

  async function importHandler() {
    const mod = await import("@/app/auth/callback/route");
    return mod.GET;
  }

  it("redirects to /dashboard by default when no next param", async () => {
    mockExchangeCode.mockResolvedValueOnce({ error: null });
    const GET = await importHandler();
    const res = await GET(
      new Request("http://localhost:3000/auth/callback?code=valid-code")
    );

    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/dashboard");
    // Verify no open redirect — URL should end with /dashboard (on the same origin)
    expect(new URL(location).pathname).toBe("/dashboard");
  });

  it("allows valid relative path in next param", async () => {
    mockExchangeCode.mockResolvedValueOnce({ error: null });
    const GET = await importHandler();
    const res = await GET(
      new Request(
        "http://localhost:3000/auth/callback?code=valid-code&next=/portfolio"
      )
    );

    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/portfolio");
  });

  it("blocks protocol-relative redirect (//evil.com)", async () => {
    mockExchangeCode.mockResolvedValueOnce({ error: null });
    const GET = await importHandler();
    const res = await GET(
      new Request(
        "http://localhost:3000/auth/callback?code=valid-code&next=//evil.com"
      )
    );

    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/dashboard");
    expect(location).not.toContain("evil.com");
  });

  it("blocks absolute URL redirect (https://evil.com)", async () => {
    mockExchangeCode.mockResolvedValueOnce({ error: null });
    const GET = await importHandler();
    const res = await GET(
      new Request(
        "http://localhost:3000/auth/callback?code=valid-code&next=https://evil.com"
      )
    );

    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/dashboard");
    expect(location).not.toContain("evil.com");
  });

  it("blocks javascript: protocol redirect", async () => {
    mockExchangeCode.mockResolvedValueOnce({ error: null });
    const GET = await importHandler();
    const res = await GET(
      new Request(
        "http://localhost:3000/auth/callback?code=valid-code&next=javascript:alert(1)"
      )
    );

    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/dashboard");
    expect(location).not.toContain("javascript");
  });

  it("redirects to login error page when code exchange fails", async () => {
    mockExchangeCode.mockResolvedValueOnce({ error: new Error("invalid") });
    const GET = await importHandler();
    const res = await GET(
      new Request(
        "http://localhost:3000/auth/callback?code=bad-code&next=/portfolio"
      )
    );

    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/auth/login");
    expect(location).toContain("error=auth_callback_failed");
  });

  it("redirects to login error page when no code is provided", async () => {
    const GET = await importHandler();
    const res = await GET(
      new Request("http://localhost:3000/auth/callback")
    );

    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/auth/login");
    expect(location).toContain("error=auth_callback_failed");
  });
});
