// Shared test fixtures for unit and integration tests

export const sampleCompanies = [
  {
    id: "comp-001",
    ticker: "ACME",
    name: "Acme Corp",
    sector: "Technology",
    market_cap: 500_000_000,
    cik: "0001234567",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "comp-002",
    ticker: "WIDG",
    name: "Widget Industries",
    sector: "Industrials",
    market_cap: 150_000_000,
    cik: "0009876543",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "comp-003",
    ticker: "NANO",
    name: "NanoTech Solutions",
    sector: "Healthcare",
    market_cap: 80_000_000,
    cik: "0005555555",
    created_at: "2024-02-01T00:00:00Z",
  },
] as const;

export const sampleFilings = [
  {
    id: "fil-001",
    company_id: "comp-001",
    filing_type: "10-K",
    filed_date: "2024-06-15",
    slug: "acme-corp-10k-2024-06-15",
    significance_score: 8,
    one_line_summary: "Strong quarterly revenue growth driven by cloud services",
    raw_url: "https://www.sec.gov/Archives/edgar/data/1234567/000123456724000001/filing.htm",
    insider_data: null,
    ai_analysis: { sections: [], key_findings: [] },
    created_at: "2024-06-15T12:00:00Z",
  },
  {
    id: "fil-002",
    company_id: "comp-002",
    filing_type: "4",
    filed_date: "2024-06-16",
    slug: "widget-industries-form4-2024-06-16",
    significance_score: 6,
    one_line_summary: "CEO purchased 50,000 shares at $12.50",
    raw_url: "https://www.sec.gov/Archives/edgar/data/9876543/000987654324000001/filing.htm",
    insider_data: {
      action: "purchase",
      reporter_name: "John Smith",
      shares: 50000,
      price_per_share: 12.5,
    },
    ai_analysis: null,
    created_at: "2024-06-16T12:00:00Z",
  },
] as const;

export const sampleContentQueueItems = [
  {
    id: "cq-001",
    type: "newsletter" as const,
    title: "This Week in Small-Cap Filings — Jun 10-17",
    body: {
      html: "<h2>Top Filings</h2><p>ACME filed 10-K...</p>",
      date_range: "Jun 10 – Jun 17, 2024",
      filings_count: 12,
      top_tickers: ["ACME", "WIDG"],
    },
    status: "pending_review" as const,
    created_at: "2024-06-17T05:00:00Z",
  },
  {
    id: "cq-002",
    type: "blog" as const,
    title: "Small-Cap Filing Insights — Week of June 10",
    body: {
      html: "<h1>Title</h1><p>Content...</p>",
      meta_description: "Weekly analysis of filings",
      slug_suggestion: "small-cap-insights-2024-06-10",
    },
    status: "approved" as const,
    created_at: "2024-06-17T06:00:00Z",
  },
  {
    id: "cq-003",
    type: "social" as const,
    title: "ACME 10-K filing shows strong growth",
    body: {
      text: "ACME Corp files 10-K showing strong cloud revenue growth",
      filing_slug: "acme-corp-10k-2024-06-15",
    },
    status: "approved" as const,
    created_at: "2024-06-17T07:00:00Z",
  },
];

export const sampleSubscriptions = {
  free: {
    user_id: "user-free",
    plan: "free",
    status: "active",
    current_period_end: null,
    created_at: "2024-01-01T00:00:00Z",
  },
  starter: {
    user_id: "user-starter",
    plan: "starter",
    status: "active",
    current_period_end: new Date(Date.now() + 30 * 86400000).toISOString(),
    created_at: "2024-01-01T00:00:00Z",
  },
  plus: {
    user_id: "user-plus",
    plan: "plus",
    status: "active",
    current_period_end: new Date(Date.now() + 30 * 86400000).toISOString(),
    created_at: "2024-01-01T00:00:00Z",
  },
  pro: {
    user_id: "user-pro",
    plan: "pro",
    status: "active",
    current_period_end: new Date(Date.now() + 30 * 86400000).toISOString(),
    created_at: "2024-01-01T00:00:00Z",
  },
  expired: {
    user_id: "user-expired",
    plan: "pro",
    status: "active",
    current_period_end: new Date(Date.now() - 86400000).toISOString(),
    created_at: "2024-01-01T00:00:00Z",
  },
  cancelled: {
    user_id: "user-cancelled",
    plan: "plus",
    status: "cancelled",
    current_period_end: new Date(Date.now() + 15 * 86400000).toISOString(),
    created_at: "2024-01-01T00:00:00Z",
  },
};
