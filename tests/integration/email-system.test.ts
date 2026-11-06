import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ---------------------------------------------------------------------------
// Mock: Resend SDK — uses a class so `new Resend(key)` works
// ---------------------------------------------------------------------------

const mockEmailsSend = vi.fn().mockResolvedValue({ id: "test-email-id" });

class MockResend {
  emails = { send: mockEmailsSend };
  constructor(_key: string) {
    // key intentionally unused in mock
  }
}

vi.mock("resend", () => ({
  Resend: MockResend,
}));

// ---------------------------------------------------------------------------
// Mock: Supabase server client
// ---------------------------------------------------------------------------

const mockFrom = vi.fn();
const mockSupabase = {
  from: mockFrom,
  auth: {
    admin: {
      listUsers: vi.fn(),
    },
  },
};

vi.mock("@/lib/supabase/server", () => ({
  createWebhookClient: () => mockSupabase,
}));

// ---------------------------------------------------------------------------
// Mock: Anthropic SDK (for newsletter generation)
// The route uses `const { default: Anthropic } = await import(...)`
// then `new Anthropic({ apiKey })`, so the default export must be a class.
// ---------------------------------------------------------------------------

const mockAnthropicCreate = vi.fn();

class MockAnthropic {
  messages = { create: mockAnthropicCreate };
  constructor(_opts: Record<string, unknown>) {
    // opts intentionally unused in mock
  }
}

vi.mock("@anthropic-ai/sdk", () => ({
  default: MockAnthropic,
}));

// ---------------------------------------------------------------------------
// Mock: QStash verification — all cron routes now use verifyQStash (fail-closed)
// ---------------------------------------------------------------------------

vi.mock("@/lib/qstash", () => ({
  verifyQStash: vi.fn().mockResolvedValue(null), // null = verification passed
}));

// Also mock @upstash/qstash for routes that dynamically import it
vi.mock("@upstash/qstash", () => ({
  Receiver: class {
    verify = vi.fn().mockResolvedValue(true);
    constructor() {}
  },
}));

// ---------------------------------------------------------------------------
// Chainable query builder helper (mirrors tests/helpers/mock-supabase.ts)
// ---------------------------------------------------------------------------

interface MockResponse {
  data: unknown;
  error: unknown;
  count?: number;
}

function chainable(response: MockResponse) {
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
  ];

  for (const method of methods) {
    chain[method] = vi.fn(() => chain);
  }

  // Make the chain thenable so `await supabase.from(...)...` resolves
  chain.then = (resolve: (v: MockResponse) => void) =>
    Promise.resolve(response).then(resolve);

  return chain;
}

// ---------------------------------------------------------------------------
// Env helpers
// ---------------------------------------------------------------------------

const ORIGINAL_ENV = { ...process.env };

function setEnv(overrides: Record<string, string | undefined>) {
  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

function restoreEnv() {
  for (const key of Object.keys(process.env)) {
    if (!(key in ORIGINAL_ENV)) {
      delete process.env[key];
    }
  }
  Object.assign(process.env, ORIGINAL_ENV);
}

// ---------------------------------------------------------------------------
// 1. Resend client lazy initialisation
// ---------------------------------------------------------------------------

describe("getResend() lazy initialisation", () => {
  afterEach(() => {
    restoreEnv();
  });

  it("throws when RESEND_API_KEY is not set", async () => {
    delete process.env.RESEND_API_KEY;
    vi.resetModules();

    const { getResend } = await import("@/lib/resend");
    expect(() => getResend()).toThrow("RESEND_API_KEY must be set");
  });

  it("returns a Resend instance when RESEND_API_KEY is set", async () => {
    setEnv({ RESEND_API_KEY: "re_test_123456" });
    vi.resetModules();

    const { getResend } = await import("@/lib/resend");
    const client = getResend();

    expect(client).toBeDefined();
    expect(client.emails).toBeDefined();
    expect(client.emails.send).toBeDefined();
  });

  it("returns the same singleton on subsequent calls", async () => {
    setEnv({ RESEND_API_KEY: "re_test_singleton" });
    vi.resetModules();

    const { getResend } = await import("@/lib/resend");
    const first = getResend();
    const second = getResend();
    expect(first).toBe(second);
  });
});

// ---------------------------------------------------------------------------
// 2. Email sender functions
// ---------------------------------------------------------------------------

describe("Email sender functions", () => {
  beforeEach(async () => {
    mockEmailsSend.mockClear();
    mockEmailsSend.mockResolvedValue({ id: "test-email-id" });
    setEnv({
      RESEND_API_KEY: "re_test_senders",
      RESEND_FROM_EMAIL: "test@example.com",
      NEXT_PUBLIC_SITE_URL: "https://test.example.com",
    });
    vi.resetModules();
  });

  afterEach(() => {
    restoreEnv();
  });

  // -- sendFilingAlert -------------------------------------------------------

  describe("sendFilingAlert", () => {
    it("calls resend.emails.send with correct from/to/subject/html", async () => {
      const { sendFilingAlert } = await import("@/lib/resend");

      const filing = {
        ticker: "ACME",
        companyName: "Acme Corp",
        filingType: "10-K",
        filedDate: "2025-03-15",
        oneLiner: "Annual report shows strong growth",
        slug: "acme-10k-2025",
        significanceScore: 8,
      };

      await sendFilingAlert("user@test.com", filing);

      expect(mockEmailsSend).toHaveBeenCalledTimes(1);
      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.from).toBe("test@example.com");
      expect(call.to).toBe("user@test.com");
      expect(call.subject).toBe("ACME: New 10-K Filing (Score 8/10)");
      expect(call.html).toContain("Acme Corp");
      expect(call.html).toContain("10-K");
      expect(call.html).toContain("acme-10k-2025");
      expect(call.html).toContain("Annual report shows strong growth");
      expect(call.html).toContain("High Impact"); // score 8 >= 7
    });

    it("uses default from address when RESEND_FROM_EMAIL not set", async () => {
      delete process.env.RESEND_FROM_EMAIL;
      vi.resetModules();
      const { sendFilingAlert } = await import("@/lib/resend");

      await sendFilingAlert("user@test.com", {
        ticker: "XYZ",
        companyName: "XYZ Inc",
        filingType: "8-K",
        filedDate: "2025-01-01",
        oneLiner: null,
        slug: "xyz-8k",
        significanceScore: 3,
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.from).toBe("noreply@brefyr.com");
    });

    it("propagates Resend API errors", async () => {
      const { sendFilingAlert } = await import("@/lib/resend");

      mockEmailsSend.mockRejectedValueOnce(
        new Error("Resend rate limit exceeded")
      );

      await expect(
        sendFilingAlert("user@test.com", {
          ticker: "FAIL",
          companyName: "Fail Co",
          filingType: "10-Q",
          filedDate: "2025-06-01",
          oneLiner: "Test",
          slug: "fail-10q",
          significanceScore: 5,
        })
      ).rejects.toThrow("Resend rate limit exceeded");
    });

    it("renders High Impact badge for score >= 7", async () => {
      const { sendFilingAlert } = await import("@/lib/resend");

      await sendFilingAlert("user@test.com", {
        ticker: "HIGH",
        companyName: "High Corp",
        filingType: "10-K",
        filedDate: "2025-02-01",
        oneLiner: "Big quarter",
        slug: "high-10k",
        significanceScore: 9,
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.html).toContain("High Impact");
    });

    it("renders Medium badge for score 4-6", async () => {
      const { sendFilingAlert } = await import("@/lib/resend");

      await sendFilingAlert("user@test.com", {
        ticker: "MED",
        companyName: "Medium Corp",
        filingType: "10-Q",
        filedDate: "2025-02-01",
        oneLiner: "Quarterly report",
        slug: "med-10q",
        significanceScore: 5,
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.html).toContain("Medium");
      expect(call.html).not.toContain("High Impact");
    });

    it("renders Low badge for score < 4", async () => {
      const { sendFilingAlert } = await import("@/lib/resend");

      await sendFilingAlert("user@test.com", {
        ticker: "LOW",
        companyName: "Low Corp",
        filingType: "SC 13G",
        filedDate: "2025-02-01",
        oneLiner: "Ownership report",
        slug: "low-sc13g",
        significanceScore: 2,
      });

      const call = mockEmailsSend.mock.calls[0][0];
      // The filing card should use badge-low, not badge-high or badge-med on the badge element
      expect(call.html).toContain("badge-low");
      expect(call.html).toContain(">Low<");
      expect(call.html).not.toContain(">High Impact<");
      expect(call.html).not.toContain(">Medium<");
    });
  });

  // -- sendWeeklyDigest ------------------------------------------------------

  describe("sendWeeklyDigest", () => {
    it("calls resend.emails.send with correct digest content", async () => {
      const { sendWeeklyDigest } = await import("@/lib/resend");

      await sendWeeklyDigest("digest@test.com", {
        filings: [
          {
            ticker: "AAPL",
            companyName: "Apple Inc",
            filingType: "10-K",
            filedDate: "2025-03-10",
            oneLiner: "Strong iPhone revenue",
            slug: "aapl-10k",
            significanceScore: 9,
          },
          {
            ticker: "MSFT",
            companyName: "Microsoft Corp",
            filingType: "8-K",
            filedDate: "2025-03-12",
            oneLiner: "Cloud growth continues",
            slug: "msft-8k",
            significanceScore: 7,
          },
        ],
        periodLabel: "This Week",
        startDate: "2025-03-07",
        endDate: "2025-03-14",
      });

      expect(mockEmailsSend).toHaveBeenCalledTimes(1);
      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.to).toBe("digest@test.com");
      expect(call.subject).toBe(
        "Your Weekly Filing Digest: 2 filings this week"
      );
      expect(call.html).toContain("AAPL");
      expect(call.html).toContain("MSFT");
      expect(call.html).toContain("2025-03-07");
      expect(call.html).toContain("2025-03-14");
      expect(call.html).toContain("Open Dashboard");
    });

    it("uses singular subject for 1 filing", async () => {
      const { sendWeeklyDigest } = await import("@/lib/resend");

      await sendWeeklyDigest("single@test.com", {
        filings: [
          {
            ticker: "SOLO",
            companyName: "Solo Corp",
            filingType: "10-Q",
            filedDate: "2025-03-10",
            oneLiner: "One filing",
            slug: "solo-10q",
            significanceScore: 4,
          },
        ],
        periodLabel: "This Week",
        startDate: "2025-03-07",
        endDate: "2025-03-14",
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.subject).toBe(
        "Your Weekly Filing Digest: 1 filing this week"
      );
    });

    it("includes upgrade prompt for free-tier users", async () => {
      const { sendWeeklyDigest } = await import("@/lib/resend");

      await sendWeeklyDigest("free@test.com", {
        filings: [
          {
            ticker: "UPG",
            companyName: "Upgrade Corp",
            filingType: "10-K",
            filedDate: "2025-03-10",
            oneLiner: "Test",
            slug: "upg-10k",
            significanceScore: 5,
          },
        ],
        periodLabel: "This Week",
        startDate: "2025-03-07",
        endDate: "2025-03-14",
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.html).toContain("Upgrade to a paid plan");
    });

    it("handles Resend API errors", async () => {
      const { sendWeeklyDigest } = await import("@/lib/resend");

      mockEmailsSend.mockRejectedValueOnce(new Error("Invalid API key"));

      await expect(
        sendWeeklyDigest("fail@test.com", {
          filings: [],
          periodLabel: "This Week",
          startDate: "2025-03-07",
          endDate: "2025-03-14",
        })
      ).rejects.toThrow("Invalid API key");
    });
  });

  // -- sendDailyDigest -------------------------------------------------------

  describe("sendDailyDigest", () => {
    it("calls resend.emails.send with daily digest content", async () => {
      const { sendDailyDigest } = await import("@/lib/resend");

      await sendDailyDigest("daily@test.com", {
        filings: [
          {
            ticker: "TSLA",
            companyName: "Tesla Inc",
            filingType: "8-K",
            filedDate: "2025-04-01",
            oneLiner: "Material event disclosure",
            slug: "tsla-8k-apr",
            significanceScore: 8,
          },
        ],
        periodLabel: "Today",
        startDate: "2025-04-01",
        endDate: "2025-04-01",
      });

      expect(mockEmailsSend).toHaveBeenCalledTimes(1);
      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.to).toBe("daily@test.com");
      expect(call.subject).toBe("Daily Filing Digest: 1 filing today");
      expect(call.html).toContain("TSLA");
      expect(call.html).toContain("Tesla Inc");
      expect(call.html).toContain("Material event disclosure");
      expect(call.html).toContain("2025-04-01");
    });

    it("uses plural subject for multiple filings", async () => {
      const { sendDailyDigest } = await import("@/lib/resend");

      await sendDailyDigest("multi@test.com", {
        filings: [
          {
            ticker: "A",
            companyName: "A Corp",
            filingType: "10-K",
            filedDate: "2025-04-01",
            oneLiner: null,
            slug: "a-10k",
            significanceScore: 6,
          },
          {
            ticker: "B",
            companyName: "B Corp",
            filingType: "10-Q",
            filedDate: "2025-04-01",
            oneLiner: null,
            slug: "b-10q",
            significanceScore: 3,
          },
          {
            ticker: "C",
            companyName: "C Corp",
            filingType: "8-K",
            filedDate: "2025-04-01",
            oneLiner: null,
            slug: "c-8k",
            significanceScore: 1,
          },
        ],
        periodLabel: "Today",
        startDate: "2025-04-01",
        endDate: "2025-04-01",
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.subject).toBe("Daily Filing Digest: 3 filings today");
    });

    it("does not include upgrade prompt (paid-tier feature)", async () => {
      const { sendDailyDigest } = await import("@/lib/resend");

      await sendDailyDigest("paid@test.com", {
        filings: [
          {
            ticker: "PRO",
            companyName: "Pro Corp",
            filingType: "10-K",
            filedDate: "2025-04-01",
            oneLiner: "Test",
            slug: "pro-10k",
            significanceScore: 5,
          },
        ],
        periodLabel: "Today",
        startDate: "2025-04-01",
        endDate: "2025-04-01",
      });

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.html).not.toContain("Upgrade to a paid plan");
    });
  });

  // -- sendWelcomeEmail ------------------------------------------------------

  describe("sendWelcomeEmail", () => {
    it("calls resend.emails.send with welcome content and user name", async () => {
      const { sendWelcomeEmail } = await import("@/lib/resend");

      await sendWelcomeEmail("newuser@test.com", "Alice");

      expect(mockEmailsSend).toHaveBeenCalledTimes(1);
      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.from).toBe("test@example.com");
      expect(call.to).toBe("newuser@test.com");
      expect(call.subject).toBe("Welcome to Brefyr");
      expect(call.html).toContain("Hi Alice");
      expect(call.html).toContain("Go to Dashboard");
      expect(call.html).toContain("https://test.example.com/dashboard");
      expect(call.html).toContain("Add stocks to your watchlist");
    });

    it("falls back to 'there' when name is empty", async () => {
      const { sendWelcomeEmail } = await import("@/lib/resend");

      await sendWelcomeEmail("noname@test.com", "");

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.html).toContain("Hi there");
    });

    it("includes pricing link in the welcome email", async () => {
      const { sendWelcomeEmail } = await import("@/lib/resend");

      await sendWelcomeEmail("user@test.com", "Bob");

      const call = mockEmailsSend.mock.calls[0][0];
      expect(call.html).toContain("https://test.example.com/pricing");
    });

    it("handles Resend API errors", async () => {
      const { sendWelcomeEmail } = await import("@/lib/resend");

      mockEmailsSend.mockRejectedValueOnce(new Error("Forbidden"));

      await expect(
        sendWelcomeEmail("err@test.com", "Error User")
      ).rejects.toThrow("Forbidden");
    });
  });
});

// ---------------------------------------------------------------------------
// 3. Newsletter generation cron
// ---------------------------------------------------------------------------

describe("POST /api/cron/generate-newsletter", () => {
  beforeEach(() => {
    mockFrom.mockReset();
    mockAnthropicCreate.mockReset();
    mockAnthropicCreate.mockResolvedValue({
      content: [{ type: "text", text: "<h2>Newsletter</h2><p>Content</p>" }],
    });
    setEnv({
      RESEND_API_KEY: "re_test_cron",
      ANTHROPIC_API_KEY: "sk-ant-test-key",
      ANTHROPIC_MODEL: "claude-sonnet-4-20250514",
    });
  });

  afterEach(() => {
    restoreEnv();
  });

  it("generates newsletter content and inserts into content_queue", async () => {
    vi.resetModules();

    const filings = [
      {
        id: "f1",
        company_id: "c1",
        filing_type: "10-K",
        filed_date: "2025-03-10",
        significance_score: 9,
        one_line_summary: "Record revenue quarter",
        slug: "acme-10k",
        insider_data: null,
      },
      {
        id: "f2",
        company_id: "c2",
        filing_type: "8-K",
        filed_date: "2025-03-12",
        significance_score: 7,
        one_line_summary: "CEO departure announced",
        slug: "beta-8k",
        insider_data: null,
      },
    ];

    const companies = [
      { id: "c1", ticker: "ACME", name: "Acme Corp" },
      { id: "c2", ticker: "BETA", name: "Beta Inc" },
    ];

    const filingsChain = chainable({ data: filings, error: null });
    const companiesChain = chainable({ data: companies, error: null });
    const insertChain = chainable({ data: null, error: null });

    mockFrom.mockImplementation((table: string) => {
      if (table === "filings") return filingsChain;
      if (table === "companies") return companiesChain;
      if (table === "content_queue") return insertChain;
      if (table === "pipeline_runs") return insertChain;
      return chainable({ data: null, error: null });
    });

    mockAnthropicCreate.mockResolvedValueOnce({
      content: [
        {
          type: "text",
          text: "<h2>Top Filings</h2><p>ACME record revenue quarter</p>",
        },
      ],
    });

    const { POST } = await import(
      "@/app/api/cron/generate-newsletter/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/generate-newsletter",
      { method: "POST" }
    );

    const response = await POST(request);
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.filings_covered).toBe(2);
    expect(json.subject).toContain("This Week in Small-Cap Filings");

    // Verify content_queue insert was called
    const contentQueueCalls = mockFrom.mock.calls.filter(
      (c: string[]) => c[0] === "content_queue"
    );
    expect(contentQueueCalls.length).toBeGreaterThanOrEqual(1);

    // Verify pipeline_runs insert was called
    const pipelineRunCalls = mockFrom.mock.calls.filter(
      (c: string[]) => c[0] === "pipeline_runs"
    );
    expect(pipelineRunCalls.length).toBeGreaterThanOrEqual(1);

    // Verify Anthropic was called with filing data in the prompt
    expect(mockAnthropicCreate).toHaveBeenCalledTimes(1);
    const anthropicCall = mockAnthropicCreate.mock.calls[0][0];
    expect(anthropicCall.messages[0].content).toContain("ACME");
    expect(anthropicCall.messages[0].content).toContain("BETA");
  });

  it("skips newsletter when no filings exist", async () => {
    vi.resetModules();

    const insertChain = chainable({ data: null, error: null });

    mockFrom.mockImplementation((table: string) => {
      if (table === "filings") return chainable({ data: [], error: null });
      if (table === "pipeline_runs") return insertChain;
      return chainable({ data: null, error: null });
    });

    const { POST } = await import(
      "@/app/api/cron/generate-newsletter/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/generate-newsletter",
      { method: "POST" }
    );

    const response = await POST(request);
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.message).toContain("No filings");
    expect(mockAnthropicCreate).not.toHaveBeenCalled();
  });

  it("returns 500 when ANTHROPIC_API_KEY is missing", async () => {
    delete process.env.ANTHROPIC_API_KEY;
    vi.resetModules();

    const { POST } = await import(
      "@/app/api/cron/generate-newsletter/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/generate-newsletter",
      { method: "POST" }
    );

    const response = await POST(request);
    expect(response.status).toBe(500);

    const json = await response.json();
    expect(json.error).toContain("ANTHROPIC_API_KEY");
  });

  it("handles Anthropic API failure gracefully", async () => {
    vi.resetModules();

    const filings = [
      {
        id: "f1",
        company_id: "c1",
        filing_type: "10-K",
        filed_date: "2025-03-10",
        significance_score: 8,
        one_line_summary: "Test filing",
        slug: "test-10k",
        insider_data: null,
      },
    ];

    const companies = [{ id: "c1", ticker: "TEST", name: "Test Corp" }];
    const insertChain = chainable({ data: null, error: null });

    mockFrom.mockImplementation((table: string) => {
      if (table === "filings")
        return chainable({ data: filings, error: null });
      if (table === "companies")
        return chainable({ data: companies, error: null });
      if (table === "pipeline_runs") return insertChain;
      return chainable({ data: null, error: null });
    });

    mockAnthropicCreate.mockRejectedValueOnce(
      new Error("Anthropic API unavailable")
    );

    const { POST } = await import(
      "@/app/api/cron/generate-newsletter/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/generate-newsletter",
      { method: "POST" }
    );

    const response = await POST(request);
    expect(response.status).toBe(500);

    const json = await response.json();
    expect(json.success).toBe(false);
    expect(json.error).toContain("Anthropic API unavailable");

    // Verify pipeline_runs was logged with failed status
    const pipelineRunCalls = mockFrom.mock.calls.filter(
      (c: string[]) => c[0] === "pipeline_runs"
    );
    expect(pipelineRunCalls.length).toBeGreaterThanOrEqual(1);
  });
});

// ---------------------------------------------------------------------------
// 4. Approval reminder emails
// ---------------------------------------------------------------------------

describe("POST /api/cron/approval-reminders", () => {
  beforeEach(() => {
    mockFrom.mockReset();
    mockEmailsSend.mockClear();
    mockEmailsSend.mockResolvedValue({ id: "test-email-id" });
    setEnv({
      RESEND_API_KEY: "re_test_reminders",
      ADMIN_EMAIL: "admin@test.com",
      RESEND_FROM_EMAIL: "notify@test.com",
      NEXT_PUBLIC_SITE_URL: "https://test.example.com",
    });
  });

  afterEach(() => {
    restoreEnv();
  });

  it("sends reminder email for pending content items", async () => {
    vi.resetModules();

    const pendingItems = [
      {
        id: "cq1",
        type: "newsletter",
        title: "Weekly Digest #42",
        status: "pending_review",
        created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "cq2",
        type: "blog_post",
        title: "Market Analysis",
        status: "pending_review",
        created_at: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
      },
    ];

    mockFrom.mockImplementation((table: string) => {
      if (table === "content_queue")
        return chainable({ data: pendingItems, error: null });
      return chainable({ data: null, error: null });
    });

    const { POST } = await import(
      "@/app/api/cron/approval-reminders/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/approval-reminders",
      { method: "POST" }
    );

    const response = await POST(request);
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.reminded).toBe(2);

    // Verify email was sent through Resend
    expect(mockEmailsSend).toHaveBeenCalledTimes(1);
    const call = mockEmailsSend.mock.calls[0][0];
    expect(call.from).toBe("notify@test.com");
    expect(call.to).toBe("admin@test.com");
    expect(call.subject).toContain("2 content items awaiting approval");
    expect(call.html).toContain("Weekly Digest #42");
    expect(call.html).toContain("Market Analysis");
    expect(call.html).toContain("https://test.example.com/admin/content");
  });

  it("uses singular subject for 1 pending item", async () => {
    vi.resetModules();

    const pendingItems = [
      {
        id: "cq1",
        type: "newsletter",
        title: "Solo Item",
        status: "pending_review",
        created_at: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
      },
    ];

    mockFrom.mockImplementation(() =>
      chainable({ data: pendingItems, error: null })
    );

    const { POST } = await import(
      "@/app/api/cron/approval-reminders/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/approval-reminders",
      { method: "POST" }
    );

    const response = await POST(request);
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.reminded).toBe(1);

    const call = mockEmailsSend.mock.calls[0][0];
    expect(call.subject).toContain("1 content item awaiting approval");
  });

  it("returns success with no emails when nothing is pending", async () => {
    vi.resetModules();

    mockFrom.mockImplementation(() =>
      chainable({ data: [], error: null })
    );

    const { POST } = await import(
      "@/app/api/cron/approval-reminders/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/approval-reminders",
      { method: "POST" }
    );

    const response = await POST(request);
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.message).toContain("No pending items");
    expect(mockEmailsSend).not.toHaveBeenCalled();
  });

  it("returns null-safe response when pending query returns null", async () => {
    vi.resetModules();

    mockFrom.mockImplementation(() =>
      chainable({ data: null, error: null })
    );

    const { POST } = await import(
      "@/app/api/cron/approval-reminders/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/approval-reminders",
      { method: "POST" }
    );

    const response = await POST(request);
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.message).toContain("No pending items");
    expect(mockEmailsSend).not.toHaveBeenCalled();
  });

  it("returns 500 when ADMIN_EMAIL is not configured", async () => {
    delete process.env.ADMIN_EMAIL;
    vi.resetModules();

    const { POST } = await import(
      "@/app/api/cron/approval-reminders/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/approval-reminders",
      { method: "POST" }
    );

    const response = await POST(request);
    expect(response.status).toBe(500);

    const json = await response.json();
    expect(json.error).toContain("ADMIN_EMAIL");
    expect(mockEmailsSend).not.toHaveBeenCalled();
  });

  it("handles Resend API failure in reminder emails", async () => {
    vi.resetModules();

    const pendingItems = [
      {
        id: "cq1",
        type: "newsletter",
        title: "Failing Item",
        status: "pending_review",
        created_at: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      },
    ];

    mockFrom.mockImplementation(() =>
      chainable({ data: pendingItems, error: null })
    );

    mockEmailsSend.mockRejectedValueOnce(
      new Error("Resend service unavailable")
    );

    const { POST } = await import(
      "@/app/api/cron/approval-reminders/route"
    );

    const request = new Request(
      "http://localhost:3000/api/cron/approval-reminders",
      { method: "POST" }
    );

    const response = await POST(request);
    expect(response.status).toBe(500);

    const json = await response.json();
    expect(json.success).toBe(false);
    expect(json.error).toContain("Resend service unavailable");
  });
});

// ---------------------------------------------------------------------------
// 5. HTML email structure validation
// ---------------------------------------------------------------------------

describe("Email HTML structure", () => {
  beforeEach(async () => {
    mockEmailsSend.mockClear();
    mockEmailsSend.mockResolvedValue({ id: "test-email-id" });
    setEnv({
      RESEND_API_KEY: "re_test_html",
      RESEND_FROM_EMAIL: "test@example.com",
      NEXT_PUBLIC_SITE_URL: "https://test.example.com",
    });
    vi.resetModules();
  });

  afterEach(() => {
    restoreEnv();
  });

  it("all emails include proper HTML document structure", async () => {
    const { sendWelcomeEmail } = await import("@/lib/resend");

    await sendWelcomeEmail("structure@test.com", "Test");

    const call = mockEmailsSend.mock.calls[0][0];
    expect(call.html).toContain("<!DOCTYPE html>");
    expect(call.html).toContain('<html lang="en">');
    expect(call.html).toContain("<head>");
    expect(call.html).toContain("</head>");
    expect(call.html).toContain("</html>");
  });

  it("all emails include manage preferences footer link", async () => {
    const { sendFilingAlert } = await import("@/lib/resend");

    await sendFilingAlert("footer@test.com", {
      ticker: "FOOT",
      companyName: "Footer Corp",
      filingType: "10-Q",
      filedDate: "2025-01-15",
      oneLiner: "Testing footer",
      slug: "foot-10q",
      significanceScore: 5,
    });

    const call = mockEmailsSend.mock.calls[0][0];
    expect(call.html).toContain(
      "https://test.example.com/dashboard/settings"
    );
    expect(call.html).toContain("Manage email preferences");
  });

  it("filing card renders fallback when oneLiner is null", async () => {
    const { sendDailyDigest } = await import("@/lib/resend");

    await sendDailyDigest("null@test.com", {
      filings: [
        {
          ticker: "NULL",
          companyName: "Null Corp",
          filingType: "SC 13D",
          filedDate: "2025-05-01",
          oneLiner: null,
          slug: "null-sc13d",
          significanceScore: 2,
        },
      ],
      periodLabel: "Today",
      startDate: "2025-05-01",
      endDate: "2025-05-01",
    });

    const call = mockEmailsSend.mock.calls[0][0];
    // When oneLiner is null, falls back to `${filingType} filing`
    expect(call.html).toContain("SC 13D filing");
  });

  it("email header includes Brefyr branding", async () => {
    const { sendDailyDigest } = await import("@/lib/resend");

    await sendDailyDigest("brand@test.com", {
      filings: [
        {
          ticker: "BRD",
          companyName: "Brand Corp",
          filingType: "10-K",
          filedDate: "2025-05-01",
          oneLiner: "Test",
          slug: "brd-10k",
          significanceScore: 5,
        },
      ],
      periodLabel: "Today",
      startDate: "2025-05-01",
      endDate: "2025-05-01",
    });

    const call = mockEmailsSend.mock.calls[0][0];
    expect(call.html).toContain("Brefyr");
  });
});
