import type { GlossaryTerm } from "../types";

export const termPriceToSales: GlossaryTerm = {
  slug: "price-to-sales",
  term: "Price-to-Sales Ratio",
  title: "Price-to-Sales Ratio (P/S) — Valuing Companies When Earnings Don't Exist Yet",
  shortDefinition:
    "The price-to-sales ratio divides a company's market capitalization by its annual revenue, providing a valuation metric that works even when a company has no earnings.",
  metaDescription:
    "What is the price-to-sales ratio? Learn when to use P/S over P/E, how to interpret it for growth companies, and what a reasonable P/S looks like.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["price-to-sales", "valuation", "revenue", "financial-metrics", "growth-stocks"],
  relatedSlugs: ["pe-ratio", "price-to-book", "peg-ratio", "gross-margin"],
  relatedTerms: ["pe-ratio", "price-to-book", "peg-ratio", "gross-margin"],
  faq: [
    {
      question: "When should I use P/S instead of P/E?",
      answer:
        "Use P/S for companies with negative earnings where P/E is meaningless — pre-profit growth companies, early-stage biotech, and turnaround situations. P/S is also useful for comparing companies in the same industry with very different margin profiles, as it focuses purely on how the market values each dollar of revenue. However, P/S ignores profitability entirely, so a company with a low P/S but terrible margins may actually be overvalued relative to its earnings potential.",
    },
    {
      question: "What is a good price-to-sales ratio?",
      answer:
        "For mature companies, a P/S below 2.0 is generally considered reasonable, while above 10.0 is expensive by any standard. For high-growth SaaS companies with 80%+ gross margins and 30%+ revenue growth, P/S ratios of 10-20 have been common during bull markets. The key insight: P/S must be evaluated in the context of gross margins. A company with a P/S of 5 and 80% gross margins has a price-to-gross-profit ratio of 6.25. The same P/S with 30% gross margins implies a price-to-gross-profit of 16.7 — far more expensive on a profit basis.",
    },
    {
      question: "What are the limitations of the price-to-sales ratio?",
      answer:
        "P/S completely ignores profitability. A company burning cash to generate revenue and a highly profitable company can have identical P/S ratios despite radically different business quality. P/S also ignores capital structure — a company with massive debt looks just as valued as a debt-free company if their revenue and market caps match. For capital-structure-aware analysis, use EV/Revenue instead of P/S.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The price-to-sales ratio fills a critical gap in the investor's toolkit: how do you value a company that doesn't have earnings? Many high-growth technology companies, biotech firms, and turnaround situations generate substantial revenue but report net losses. The P/E ratio breaks down — you can't divide by negative earnings. P/S steps in by measuring how much investors are willing to pay for each dollar of revenue, regardless of whether that revenue currently produces a profit.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>P/S Ratio = Market Capitalization / Annual Revenue</strong></p>

<p>Or equivalently: <strong>P/S = Stock Price / Revenue Per Share</strong></p>

<p>Market capitalization is the current stock price multiplied by total shares outstanding. Annual revenue typically uses trailing twelve-month (TTM) revenue from the income statement. Some analysts use forward revenue estimates for a forward P/S ratio, analogous to forward P/E.</p>

<p>A P/S of 5.0 means investors pay $5 for every dollar of annual revenue the company generates. If the company has $1 billion in revenue and a $5 billion market cap, the market values each revenue dollar at five times its face value.</p>

<h2 id="revenue-quality">Revenue Quality Matters</h2>

<p>Not all revenue is created equal, and P/S treats every revenue dollar identically — which is its fundamental limitation. A dollar of recurring subscription revenue from a SaaS company is far more valuable than a dollar of one-time hardware sales. Subscription revenue is predictable, sticky, and typically carries high gross margins. Hardware revenue is cyclical, non-recurring, and usually carries thin margins.</p>

<p>This is why investors pay dramatically different P/S multiples for different business models. A cloud software company growing 40% annually with 80% gross margins might trade at P/S 15, while a hardware company growing 5% with 25% gross margins trades at P/S 0.5. Both valuations can be rational because the underlying revenue has completely different economic characteristics.</p>

<p>When using P/S, always consider: what percentage of revenue is recurring versus one-time? What is the gross margin? What is the revenue growth rate? What is the net revenue retention rate (how much existing customers expand their spending)? These qualitative factors determine whether a given P/S ratio is cheap, fair, or expensive.</p>

<h2 id="ev-revenue">P/S vs EV/Revenue</h2>

<p>EV/Revenue (enterprise value divided by revenue) is the more sophisticated version of P/S that adjusts for capital structure. Enterprise value equals market capitalization plus total debt minus cash. This adjustment matters significantly when comparing companies with very different balance sheets.</p>

<p>Consider two companies, each with $500 million in revenue and a $3 billion market cap (P/S of 6.0). Company A has $1 billion in cash and no debt. Company B has no cash and $1 billion in debt. Company A's EV is $2 billion (EV/Revenue = 4.0). Company B's EV is $4 billion (EV/Revenue = 8.0). Company B is twice as expensive on an enterprise value basis even though P/S is identical. The P/S ratio completely misses this difference.</p>

<p>For any serious valuation analysis, prefer EV/Revenue over P/S. Reserve P/S for quick screening and approximate comparisons where capital structure differences are small.</p>

<h2 id="historical-context">Historical Context and Extremes</h2>

<p>During the dot-com bubble of 1999-2000, some internet companies traded at P/S ratios exceeding 100x on negligible revenue. These valuations implied that the companies would need to grow revenue by orders of magnitude and achieve high margins just to justify the current stock price. Most failed to do so, and the stocks collapsed 80-99%.</p>

<p>The 2020-2021 era saw a similar pattern in SaaS and cloud stocks, with P/S ratios reaching 40-60x for high-growth companies. The subsequent correction in 2022 compressed these multiples dramatically, with many falling to 5-10x, as rising interest rates reduced the present value of distant future profits.</p>

<p>These cycles demonstrate that P/S is highly sensitive to market sentiment and interest rate environments. In low-rate environments, investors stretch further for growth and accept higher P/S multiples. In high-rate environments, the discount rate increases, compressing multiples across the board.</p>

<p>On Brefyr, revenue data from SEC filings is available across thousands of public companies, letting you calculate and compare P/S ratios alongside filing history, insider trading signals, and AI-driven analysis.</p>
`,
};
