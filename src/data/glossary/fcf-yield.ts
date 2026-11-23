import type { GlossaryTerm } from "../types";

export const termFCFYield: GlossaryTerm = {
  slug: "fcf-yield",
  term: "Free Cash Flow Yield",
  title: "Free Cash Flow Yield — What Real Cash Return Does This Stock Offer?",
  shortDefinition:
    "Free cash flow yield divides a company's free cash flow per share by its stock price, showing the cash return investors receive relative to the price they pay — a reality check on earnings-based valuations.",
  metaDescription:
    "What is free cash flow yield? Learn how to calculate FCF yield, why it matters more than earnings yield, and how to use it for stock selection.",
  wordCount: 460,
  category: "Financial Metrics",
  tags: ["fcf-yield", "free-cash-flow", "valuation", "financial-metrics", "cash-flow"],
  relatedSlugs: ["pe-ratio", "dcf", "dividend-payout-ratio", "eps"],
  relatedTerms: ["pe-ratio", "dcf", "dividend-payout-ratio", "eps"],
  faq: [
    {
      question: "What is a good free cash flow yield?",
      answer:
        "An FCF yield above 5% is generally attractive for mature companies — it means the business generates 5 cents of free cash for every dollar of market value. Yields above 8-10% often indicate deep value opportunities or companies the market perceives as having deteriorating fundamentals. High-growth companies typically have low or negative FCF yields because they invest heavily in expansion. Compare FCF yield to the 10-year Treasury yield and to peers in the same industry for the most meaningful context.",
    },
    {
      question: "Why is free cash flow more reliable than earnings?",
      answer:
        "Earnings are an accounting construct subject to management judgment — depreciation methods, revenue recognition timing, and expense classification all affect reported earnings. Free cash flow is harder to manipulate because it's based on actual cash movements. Cash either came in or it didn't. A company can report growing earnings while free cash flow declines by capitalizing expenses, stretching payables, or using aggressive accounting. When earnings and FCF diverge, FCF usually tells the truer story.",
    },
    {
      question: "How does FCF yield relate to dividends and buybacks?",
      answer:
        "Free cash flow is the pool of cash available for returning capital to shareholders through dividends and buybacks. FCF yield represents the maximum dividend yield the company could theoretically pay if it distributed all free cash flow. In practice, companies retain some FCF for growth investments and debt reduction. A company with 7% FCF yield paying a 2% dividend yield is retaining 5% of market value in cash annually — this cash can fund buybacks, acquisitions, or balance sheet strengthening.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Free cash flow yield is the cash-based alternative to the more common earnings yield (the inverse of P/E). While earnings can be manipulated through accounting choices, free cash flow measures the actual cash a business generates after maintaining and growing its asset base. FCF yield tells investors: for every dollar I invest in this stock, how many cents of real, spendable cash does the business produce each year? It's one of the most honest valuation metrics available.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>FCF Yield = Free Cash Flow Per Share / Stock Price x 100</strong></p>

<p>Or equivalently: <strong>FCF Yield = Free Cash Flow / Market Capitalization x 100</strong></p>

<p><strong>Free Cash Flow = Operating Cash Flow - Capital Expenditures</strong></p>

<p>Operating cash flow and capital expenditures both appear on the cash flow statement in the 10-K and 10-Q. Operating cash flow starts with net income and adjusts for non-cash items (depreciation, stock-based compensation) and changes in working capital. Capital expenditures (capex) represent spending on property, plant, equipment, and other long-lived assets needed to maintain and grow the business.</p>

<p>An FCF yield of 6% means the company generates $0.06 of free cash flow for every $1 of market value. If you bought the entire company at its current market price, you'd receive a 6% cash return annually before growth.</p>

<h2 id="fcf-vs-earnings">FCF vs Earnings — The Reliability Gap</h2>

<p>Free cash flow and net income often diverge, sometimes dramatically. The gap reveals the quality of a company's reported earnings. When net income consistently exceeds free cash flow, the company may be capitalizing expenses that should flow through the income statement, using aggressive revenue recognition, or facing rising working capital demands that consume cash. These are earnings quality red flags.</p>

<p>When free cash flow exceeds net income, the reverse is true — non-cash charges like depreciation and amortization exceed actual capital expenditure needs, or working capital is releasing cash. This situation, common among mature businesses with fully depreciated assets, indicates conservative earnings that understated the company's true cash generation.</p>

<p>The most informative analysis tracks the cumulative gap between net income and free cash flow over five or more years. If total net income significantly exceeds total FCF over this period, earnings quality is suspect. If FCF consistently matches or exceeds net income, the company's reported profitability is well-supported by actual cash generation.</p>

<h2 id="valuation-screening">FCF Yield as a Valuation Screen</h2>

<p>FCF yield is particularly powerful for identifying value opportunities among mature, cash-generative businesses. A simple screen for companies with FCF yields above 7%, stable or growing free cash flow, and reasonable debt levels surfaces businesses trading at deep discounts to their cash generation capacity.</p>

<p>The logic is straightforward: if a company generates 7% of its market value in free cash every year, and that cash flow is stable, the company can pay attractive dividends, buy back shares, reduce debt, and fund growth — all from internally generated cash. Even without revenue growth, the high FCF yield provides shareholders with meaningful returns through capital allocation.</p>

<p>Compare FCF yield to the risk-free rate (10-year Treasury yield) to assess the equity risk premium. If Treasury yields are 4% and a stable company's FCF yield is 8%, investors earn a 4-percentage-point premium for bearing equity risk. If that premium compresses (stock price rises, reducing FCF yield) or if Treasury yields rise, the relative attractiveness changes.</p>

<h2 id="growth-company-nuance">Growth Companies and Negative FCF</h2>

<p>High-growth companies typically have low or negative FCF yields because they invest aggressively in expansion — high capex for new facilities, heavy spending on customer acquisition, and working capital consumption from rapid revenue growth. Amazon had negative free cash flow for years while building its logistics network. Investors accepted negative FCF yield because they expected the investments to generate massive future cash flows.</p>

<p>For these companies, FCF yield is a poor standalone valuation tool. Instead, use a discounted cash flow model that projects future FCF once the company reaches maturity, or use revenue-based metrics like P/S and EV/Revenue that value the top line rather than current cash generation.</p>

<p>FCF yield becomes relevant for growth companies as they transition to maturity. When a former high-growth company begins generating substantial free cash flow, FCF yield helps assess whether the market has properly re-priced the stock for its new cash-generative profile.</p>

<p>On Brefyr, cash flow statement data from SEC filings lets you calculate FCF yield and track cash generation across thousands of public companies alongside insider trading and AI-driven filing analysis.</p>
`,
};
