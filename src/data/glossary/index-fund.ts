import type { GlossaryTerm } from "../types";

export const termIndexFund: GlossaryTerm = {
  slug: "index-fund",
  term: "Index Fund",
  title: "Index Fund — The Low-Cost Way to Own the Entire Stock Market",
  shortDefinition: "An index fund is a type of mutual fund or ETF designed to track the performance of a specific market index — such as the S&P 500 or the total stock market — by holding all (or a representative sample) of the securities in that index, providing broad diversification at minimal cost.",
  metaDescription: "What is an index fund? How index funds work, why they outperform most active managers, the role of Jack Bogle and Vanguard, costs, and how to choose between index funds.",
  wordCount: 850, category: "Investment Strategy", tags: ["index-fund", "passive-investing", "sp500", "diversification", "low-cost"],
  relatedSlugs: ["etf", "mutual-fund", "portfolio-diversification", "asset-allocation", "market-capitalization"], relatedTerms: ["etf", "mutual-fund", "portfolio-diversification", "asset-allocation", "market-capitalization"],
  faq: [{ question: "Why do index funds outperform most active fund managers?", answer: "Three factors explain this: (1) Costs — index funds charge 0.03-0.20% in annual fees; active funds charge 0.50-1.50%. Over decades, this fee difference compounds enormously. (2) Market efficiency — in liquid markets, it is extremely difficult to consistently identify mispriced securities. Most active managers cannot generate enough excess return to overcome their higher fees. (3) Mathematics — before fees, the average dollar invested actively must earn the market return (because all investors collectively ARE the market). After fees, the average active dollar underperforms the market by the amount of fees. This is arithmetic, not opinion. SPIVA data consistently shows that 80-90% of active funds underperform their benchmark over 15-year periods." },
  { question: "What is the difference between an index fund and an ETF?", answer: "An index fund can be structured as either a mutual fund or an ETF — 'index fund' describes the investment strategy (tracking an index) while 'mutual fund' and 'ETF' describe the legal structure. Index mutual funds are bought and sold once daily at the closing net asset value. Index ETFs trade on exchanges throughout the day like individual stocks. Both can track the same index with similar costs. ETFs offer intraday trading and tax efficiency; mutual funds offer simplicity and automatic investment plans. For long-term investors, the differences are minimal." }],
  lastUpdated: "2026-11-18",
  body: `
<p>An index fund is an investment vehicle that aims to replicate the performance of a specific market index by holding the same securities in the same proportions as the index. The concept, introduced by John Bogle with the first retail index fund (Vanguard 500 Index Fund) in 1976, was initially mocked by Wall Street as "un-American" and "a sure path to mediocrity." Four decades later, index funds hold over $10 trillion in assets and have consistently outperformed the majority of actively managed funds, transforming the investment industry and saving investors billions of dollars in fees annually.</p>

<h2 id="how-they-work">How Index Funds Work</h2>

<p><strong>Full replication.</strong> The fund holds every security in the index in the same weight as the index. An S&P 500 index fund holds all 500 stocks (approximately 503 securities, as some companies have multiple share classes) weighted by market capitalization. This approach provides perfect tracking but requires holding every security.</p>

<p><strong>Sampling.</strong> For indexes with thousands of securities (total stock market, international indexes), the fund may hold a representative sample that closely approximates the index's characteristics without holding every security. This reduces transaction costs for less-liquid securities while maintaining close index tracking.</p>

<p><strong>Rebalancing.</strong> When the index changes composition (additions, deletions, weight changes), the fund trades to match. Index changes are announced in advance, and fund managers execute the necessary trades around the effective date.</p>

<h2 id="common-indexes">Common Index Benchmarks</h2>

<p><strong>S&P 500:</strong> The 500 largest U.S. companies by market capitalization. The most widely tracked equity index in the world. Represents approximately 80% of U.S. stock market value.</p>

<p><strong>Total Stock Market (CRSP U.S. Total Market Index):</strong> All investable U.S. stocks — approximately 3,500-4,000 securities — including small-cap and micro-cap stocks not in the S&P 500. Provides broader diversification.</p>

<p><strong>MSCI EAFE:</strong> Developed international markets excluding the U.S. and Canada — Europe, Australasia, and the Far East.</p>

<p><strong>MSCI Emerging Markets:</strong> Stocks from developing countries including China, India, Brazil, Taiwan, and South Korea.</p>

<p><strong>Bloomberg U.S. Aggregate Bond Index:</strong> The broadest U.S. bond index, covering government, corporate, and mortgage-backed securities.</p>

<h2 id="cost-advantage">The Cost Advantage</h2>

<p>The defining advantage of index funds is their low cost. Because the strategy is mechanical (track the index) rather than research-intensive (analyze individual stocks), operating expenses are minimal. The largest S&P 500 index funds charge 0.03% annually — $3 per $10,000 invested. The average actively managed U.S. stock fund charges approximately 0.65%. Over 30 years, this difference on a $100,000 investment compounding at 8% annually amounts to approximately $80,000 in savings — money that stays invested and compounds for the investor rather than paying fund manager salaries.</p>

<h2 id="limitations">Limitations</h2>

<p>Index funds provide market returns minus minimal fees — by definition, they cannot outperform the market. During market downturns, index funds decline with the market (there is no active manager making defensive moves). Index funds also create concentration risk in cap-weighted indexes — the largest companies dominate the index. Additionally, index inclusion/exclusion effects can create short-term inefficiencies as funds buy stocks added to indexes and sell stocks removed, regardless of valuation.</p>

<h2 id="sec-context">Index Funds and SEC Filings</h2>

<p>While index fund investors are not picking individual stocks, understanding SEC filings remains valuable. The composition of major indexes is determined by financial characteristics reported in SEC filings — market capitalization, sector classification, profitability requirements (the S&P 500 requires positive recent-quarter earnings for new additions). Understanding what drives index composition and rebalancing helps investors anticipate the structural flows that affect stock prices.</p>

<p>Brefyr provides the fundamental financial data from SEC filings that underpins both index construction and the growing universe of factor-based index strategies that go beyond simple market-cap weighting.</p>
`,
};
