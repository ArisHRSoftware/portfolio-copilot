import type { GlossaryTerm } from "../types";

export const termGrowthInvesting: GlossaryTerm = {
  slug: "growth-investing",
  term: "Growth Investing",
  title: "Growth Investing — Buying Companies With Above-Average Revenue and Earnings Expansion",
  shortDefinition: "Growth investing is an investment strategy focused on companies expected to grow revenue and earnings significantly faster than the market average, typically accepting higher valuations in exchange for the potential of outsized future returns.",
  metaDescription: "What is growth investing? How to identify growth stocks, key metrics like revenue growth rate and PEG ratio, risks of overpaying, and how SEC filings reveal growth trends.",
  wordCount: 850, category: "Investment Strategy", tags: ["growth-investing", "revenue-growth", "high-growth", "investment-strategy", "momentum"],
  relatedSlugs: ["value-investing", "momentum-investing", "pe-ratio", "enterprise-value", "market-capitalization"], relatedTerms: ["value-investing", "momentum-investing", "pe-ratio", "enterprise-value", "market-capitalization"],
  faq: [{ question: "What makes a stock a growth stock?", answer: "Growth stocks are typically companies growing revenue 15-30%+ annually, expanding into large addressable markets, reinvesting most or all earnings into growth (little or no dividends), showing improving unit economics or margins, and trading at premium valuations (high PE, high price-to-sales) that reflect expected future earnings. Classic growth sectors include technology, biotechnology, e-commerce, and emerging industries. The key characteristic is that investors are paying a premium today for the expectation that the company's earnings will grow into — and beyond — the current valuation." },
  { question: "What is the biggest risk in growth investing?", answer: "The biggest risk is overpaying — buying a great company at a price that already reflects (or exceeds) all future growth. If a stock is priced for 30% annual growth and the company delivers 'only' 20% growth, the stock can decline sharply as the market adjusts its expectations downward. Growth stocks are highly sensitive to changes in expectations, interest rates (which increase the discount rate on future earnings), and any sign of deceleration. The 2022 growth stock sell-off demonstrated this risk, with many high-growth stocks declining 50-80% from their peaks despite continued strong business performance." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Growth investing is the practice of identifying and investing in companies that are growing revenue, earnings, or cash flow significantly faster than the broader market. Growth investors are willing to pay premium valuations — high price-to-earnings ratios, high price-to-sales ratios — because they believe the company's rapid growth will ultimately justify or exceed the current price. The strategy requires forecasting future business performance and assessing whether the current stock price adequately reflects (or underestimates) that growth trajectory.</p>

<h2 id="identifying-growth">Identifying Growth Stocks</h2>

<p><strong>Revenue growth rate.</strong> The most fundamental growth metric. Companies growing revenue 20%+ annually are typically considered high-growth. The 10-K and 10-Q provide historical revenue data, and the MD&A section discusses growth drivers, market expansion, and management's outlook.</p>

<p><strong>Earnings growth rate.</strong> Revenue growth must eventually translate to earnings growth. Companies in early growth stages may sacrifice profitability for market share (investing heavily in sales, marketing, and R&D), but investors expect the growth to eventually generate increasing profits. The PEG ratio (PE divided by earnings growth rate) helps normalize valuations for growth — a PEG below 1.0 suggests the stock may be undervalued relative to its growth rate.</p>

<p><strong>Total addressable market (TAM).</strong> Growth companies need room to grow. The TAM — the total market opportunity available to the company's products — determines the ceiling on growth. A company with $1 billion in revenue in a $100 billion market has significant runway; the same revenue in a $5 billion market is approaching saturation.</p>

<p><strong>Net revenue retention (NRR).</strong> For subscription-based businesses, NRR measures whether existing customers are spending more over time (NRR above 100% means revenue from existing customers is growing without new customer acquisition). NRR above 120% is considered excellent and signals strong product-market fit.</p>

<p><strong>Operating leverage.</strong> As growth companies scale, fixed costs are spread over more revenue, and gross margins should expand. Companies demonstrating operating leverage — growing revenue faster than operating expenses — are showing that their business model scales efficiently.</p>

<h2 id="valuation">Valuing Growth Stocks</h2>

<p>Traditional valuation metrics (PE, P/B) are often inapplicable to growth stocks because many are unprofitable or have minimal current earnings. Growth investors use alternative metrics including price-to-sales (P/S) ratio, enterprise value to revenue (EV/Revenue), rule of 40 (revenue growth rate + profit margin should exceed 40% for SaaS companies), and discounted cash flow models with optimistic growth assumptions. The challenge is distinguishing between a stock that is expensive because it deserves to be (genuine high-quality growth) and one that is expensive because the market is irrationally exuberant.</p>

<h2 id="sec-filings-role">SEC Filings in Growth Analysis</h2>

<p>Growth investors rely heavily on SEC filings to validate growth narratives. The 10-K MD&A provides management's discussion of growth drivers, competitive landscape, and strategic investments. Revenue recognition policies (Note 1 in the financial statements) reveal whether revenue is genuine or pulled forward. The cash flow statement shows whether the company is generating or burning cash. Customer concentration data reveals whether growth depends on a few large customers or a broad base. R&D spending trends indicate whether the company is investing in future growth or milking current products.</p>

<h2 id="growth-traps">Growth Traps</h2>

<p>Not all growth is created equal. Revenue growth funded by unsustainable spending (buying growth through massive marketing spend with poor unit economics), growth through acquisitions that dilute shareholders, and growth that never translates to profitability are all traps. Investors should distinguish between organic growth (generated by the existing business) and inorganic growth (acquired through M&A), and assess whether the growth is profitable (improving margins) or profitless (expanding revenue while burning cash).</p>

<p>Brefyr provides the revenue, earnings, and cash flow data from SEC filings that growth investors need to assess growth trajectories, validate management narratives, and distinguish between genuine high-quality growth and unsustainable hype across 7,600+ public companies.</p>
`,
};
