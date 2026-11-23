import type { GlossaryTerm } from "../types";

export const termRSquared: GlossaryTerm = {
  slug: "r-squared",
  term: "R-Squared",
  title: "R-Squared — How Much of a Stock's Movement Is Explained by the Market",
  shortDefinition:
    "R-squared measures the percentage of an investment's return variability that is explained by movements in a benchmark index, indicating how closely the investment tracks the market.",
  metaDescription:
    "What is R-squared? Learn how to interpret it for stocks and funds, the relationship between R-squared and beta, and when low R-squared is actually good.",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["r-squared", "correlation", "risk-metrics", "benchmark", "portfolio-management"],
  relatedSlugs: ["beta", "correlation", "alpha", "tracking-error"],
  relatedTerms: ["beta", "correlation", "alpha", "tracking-error"],
  faq: [
    {
      question: "What does R-squared of 0.85 mean?",
      answer:
        "An R-squared of 0.85 (or 85%) means that 85% of the investment's return variability is explained by movements in the benchmark. The remaining 15% comes from factors specific to the investment — company-specific news, sector rotation, manager decisions, or other non-market factors. For an actively managed fund, this means 85% of its performance is driven by market exposure and only 15% by the manager's active decisions.",
    },
    {
      question: "What is a good R-squared for a fund?",
      answer:
        "It depends on the fund's strategy. Index funds should have R-squared above 0.95 — they're designed to track the benchmark. Actively managed large-cap funds typically show R-squared of 0.80-0.95, meaning most of their returns come from market exposure with modest active contribution. Hedge funds and alternative strategies may have R-squared below 0.50, indicating they derive most of their returns from non-market sources — which is what investors are paying them for.",
    },
    {
      question: "Why does R-squared matter when interpreting beta?",
      answer:
        "Beta measures sensitivity to the market, but R-squared tells you how reliable that measurement is. A stock with beta 1.3 and R-squared 0.90 genuinely moves with the market in a predictable way. A stock with beta 1.3 and R-squared 0.15 has a beta estimate that is statistically unreliable — market movements explain very little of the stock's behavior, so the beta coefficient is misleading. Always check R-squared before relying on beta for cost of equity calculations or portfolio risk analysis.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>R-squared tells you how much of an investment's behavior is driven by the market versus everything else. It's the statistical measure of fit from the regression that also produces beta. If R-squared is high, the investment essentially is the market with a leverage factor (beta). If R-squared is low, the investment marches to its own beat — its returns are driven by company-specific, sector-specific, or strategy-specific factors rather than broad market direction.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>R-Squared = (Correlation between investment returns and benchmark returns)^2</strong></p>

<p>R-squared ranges from 0 to 1 (or 0% to 100%). It equals the square of the correlation coefficient between the investment's returns and the benchmark's returns. A correlation of 0.9 produces an R-squared of 0.81. A correlation of -0.7 produces an R-squared of 0.49 — R-squared doesn't distinguish between positive and negative correlation; it measures explanatory power regardless of direction.</p>

<p>In a beta regression context, R-squared indicates what fraction of the investment's return variance is explained by the independent variable (market returns). The remaining (1 - R-squared) is explained by other factors: company earnings surprises, sector-specific trends, management decisions, or random noise.</p>

<h2 id="closet-indexing">R-Squared and Closet Indexing</h2>

<p>R-squared reveals one of the investment industry's most common and costly practices: closet indexing. When an actively managed fund charges active management fees (1.0-1.5% annually) but its R-squared with the benchmark exceeds 0.95, the fund is essentially an expensive index fund. Its returns are almost entirely explained by market exposure, meaning the manager's "active" decisions explain virtually none of the performance.</p>

<p>Investors paying active fees should demand active management — an R-squared low enough to indicate genuine deviation from the benchmark. The benchmark R-squared threshold varies by strategy: a large-cap core fund might reasonably show 0.85-0.90, but anything above 0.95 is suspiciously index-like. Sector funds and alternative strategies should show much lower R-squared values, reflecting their specialized focus.</p>

<h2 id="beta-reliability">R-Squared as a Beta Quality Check</h2>

<p>Beta is only meaningful when R-squared is sufficiently high. A stock's beta is the slope of the regression line between its returns and market returns. If R-squared is low, the data points are scattered widely around that line — the slope estimate is unreliable and potentially misleading.</p>

<p>For cost of equity calculations using CAPM (Re = Rf + Beta x ERP), using a beta derived from a low-R-squared regression can produce wildly inaccurate results. If a biotech stock's R-squared with the S&P 500 is only 0.10, its calculated beta might be 0.3 — but this doesn't mean the stock is low-risk. It means market movements explain very little of the stock's behavior, and the beta estimate is statistically weak. For such stocks, using industry-average beta or adjusting toward 1.0 (the market average) often produces more realistic cost of equity estimates.</p>

<h2 id="portfolio-construction">Portfolio Construction Use</h2>

<p>R-squared is valuable for understanding diversification benefits. Adding an investment with low R-squared relative to existing holdings reduces portfolio risk more than adding one with high R-squared, because low R-squared implies the new investment's returns are driven by different factors. A portfolio of investments that are all highly R-squared with the same benchmark provides little diversification — they all move together.</p>

<p>Multi-asset portfolio managers use R-squared to ensure they have genuine exposure to different return drivers, not just multiple vehicles for the same market risk. If every fund in a portfolio has R-squared above 0.85 with the S&P 500, the portfolio is essentially a leveraged bet on U.S. large-cap stocks regardless of how many different funds are owned.</p>

<p>On Brefyr, company financial data from SEC filings and market data help investors understand the fundamental drivers behind stock performance across thousands of companies alongside insider trading and filing analysis.</p>
`,
};
