import type { GlossaryTerm } from "../types";

export const termValueInvesting: GlossaryTerm = {
  slug: "value-investing",
  term: "Value Investing",
  title: "Value Investing — Buying Stocks for Less Than They're Worth",
  shortDefinition: "Value investing is an investment strategy that involves identifying and purchasing stocks trading below their intrinsic value — determined through fundamental analysis of financial statements, assets, and earnings power — with the expectation that the market will eventually recognize and correct the undervaluation.",
  metaDescription: "What is value investing? How the strategy pioneered by Graham and Buffett works, key metrics for finding undervalued stocks, risks, and how SEC filings support value analysis.",
  wordCount: 900, category: "Investment Strategy", tags: ["value-investing", "intrinsic-value", "fundamental-analysis", "margin-of-safety", "investment-strategy"],
  relatedSlugs: ["growth-investing", "pe-ratio", "book-value", "free-cash-flow", "enterprise-value"], relatedTerms: ["growth-investing", "pe-ratio", "book-value", "free-cash-flow", "enterprise-value"],
  faq: [{ question: "What is the difference between value investing and growth investing?", answer: "Value investors seek stocks trading below intrinsic value — typically mature companies with low PE ratios, high dividend yields, and stable cash flows that the market has overlooked or underappreciated. Growth investors seek companies with above-average revenue and earnings growth potential — typically younger companies in expanding industries, often with high PE ratios that reflect expected future growth. The distinction has blurred over time: Warren Buffett has said 'growth and value are joined at the hip' — a company growing its intrinsic value at a rapid rate can be a value investment if purchased at a reasonable price." },
  { question: "What is a margin of safety?", answer: "The margin of safety is the discount between a stock's market price and its estimated intrinsic value. If you calculate a stock's intrinsic value at $100 and it trades at $70, your margin of safety is 30%. Benjamin Graham introduced this concept as the central principle of intelligent investing — the larger the margin of safety, the more room for error in your analysis and the lower the risk of permanent capital loss. Graham recommended never buying without at least a 30-50% margin of safety." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Value investing is the discipline of buying securities for less than they are worth. Pioneered by Benjamin Graham and David Dodd at Columbia Business School in the 1930s and popularized by Warren Buffett over the past six decades, value investing is built on a simple premise: the stock market is not always efficient, and patient investors who do thorough fundamental analysis can find stocks trading below their intrinsic value — the true economic worth of the business as determined by its assets, earnings, cash flows, and growth potential.</p>

<h2 id="core-principles">Core Principles</h2>

<p><strong>Intrinsic value.</strong> Every business has an intrinsic value that can be estimated through analysis of its financial statements, competitive position, and future earning power. The intrinsic value may differ significantly from the current market price. Value investing is the practice of estimating this intrinsic value and buying only when the market price is substantially below it.</p>

<p><strong>Margin of safety.</strong> The difference between the market price and the estimated intrinsic value. A large margin of safety protects against analytical errors, unforeseen negative developments, and market volatility. Graham recommended buying only when the market price is 30-50% below estimated intrinsic value.</p>

<p><strong>Mr. Market.</strong> Graham's famous analogy describes the market as a manic-depressive business partner who offers to buy or sell shares every day at different prices. Sometimes Mr. Market is irrationally optimistic (prices too high); sometimes irrationally pessimistic (prices too low). The value investor's job is to take advantage of Mr. Market's mood swings rather than be influenced by them.</p>

<p><strong>Long-term orientation.</strong> Value investing requires patience. The market may take months or years to recognize a stock's intrinsic value. Value investors buy with a multi-year horizon and are willing to endure periods of underperformance while waiting for the investment thesis to play out.</p>

<h2 id="identifying-value">Identifying Value Stocks</h2>

<p><strong>Low price-to-earnings (PE) ratio.</strong> Stocks trading at PE ratios significantly below the market average or their own historical average may be undervalued — but a low PE alone is not sufficient. The company may deserve a low PE if its earnings are declining.</p>

<p><strong>Low price-to-book (P/B) ratio.</strong> Stocks trading below book value (P/B below 1.0) are trading for less than the accounting value of their net assets. Graham considered stocks below book value as potential value opportunities, particularly when the company was profitable.</p>

<p><strong>High free cash flow yield.</strong> Free cash flow divided by market capitalization. A high FCF yield indicates the company generates significant cash relative to its price — the investor is getting more cash-generating power per dollar invested.</p>

<p><strong>Discount to intrinsic value.</strong> More sophisticated value investors estimate intrinsic value through discounted cash flow (DCF) analysis — projecting future free cash flows and discounting them to present value. If the DCF-derived value significantly exceeds the market price, the stock may be undervalued.</p>

<h2 id="sec-filings-role">The Role of SEC Filings in Value Investing</h2>

<p>Value investing is fundamentally dependent on SEC filings. The 10-K provides the financial data needed to calculate valuation metrics, assess balance sheet quality, evaluate management's capital allocation, and understand the company's competitive position. The proxy statement reveals management incentives and governance quality. Form 4 filings show whether insiders are buying (a potential confirmation of undervaluation) or selling. The 10-Q provides quarterly updates to refine the analysis. Without the standardized, audited disclosure mandated by securities law, value investing as practiced today would be impossible.</p>

<h2 id="track-record">Historical Performance</h2>

<p>Academic research consistently shows that value stocks (low PE, low P/B) have outperformed growth stocks over long periods — the "value premium." The seminal Fama-French research identified value as one of the primary factors explaining stock returns. However, value investing experienced a prolonged period of underperformance from 2007-2020, during which growth stocks (particularly large-cap technology) dramatically outperformed. This led to debates about whether the value premium had permanently disappeared. Value stocks rebounded strongly in 2021-2022 as rising interest rates and inflation shifted market preferences.</p>

<h2 id="risks">Risks and Pitfalls</h2>

<p>The primary risk in value investing is the "value trap" — buying a stock that appears cheap but is cheap for good reason (declining business, structural disruption, poor management). A stock with a low PE may have a low PE because earnings are about to fall. Disciplined value investors mitigate this risk through thorough analysis of the business quality, competitive dynamics, and balance sheet strength — not just the statistical cheapness of the valuation metrics.</p>

<p>Brefyr provides the financial data, filing intelligence, and analytical tools that value investors need to evaluate companies on a fundamental basis — extracting the numbers from SEC filings that form the foundation of intrinsic value analysis across 7,600+ companies.</p>
`,
};
