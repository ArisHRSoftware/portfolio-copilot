import type { GlossaryTerm } from "../types";

export const termSharpeRatio: GlossaryTerm = {
  slug: "sharpe-ratio",
  term: "Sharpe Ratio",
  title: "Sharpe Ratio — How Much Return Per Unit of Risk",
  shortDefinition:
    "The Sharpe ratio measures risk-adjusted return by dividing the excess return over the risk-free rate by the standard deviation of returns, showing how much return an investment earns per unit of total volatility.",
  metaDescription:
    "What is the Sharpe ratio? Learn how to calculate and interpret it, what a good Sharpe ratio is, and why it's the most widely used risk-adjusted metric.",
  wordCount: 450,
  category: "Risk Metrics",
  tags: ["sharpe-ratio", "risk-adjusted-return", "risk-metrics", "portfolio-management", "volatility"],
  relatedSlugs: ["sortino-ratio", "standard-deviation", "alpha", "information-ratio"],
  relatedTerms: ["sortino-ratio", "standard-deviation", "alpha", "information-ratio"],
  faq: [
    {
      question: "What is a good Sharpe ratio?",
      answer:
        "A Sharpe ratio above 1.0 is considered good — the investment earns more than one unit of return per unit of risk. Above 2.0 is excellent and rare for sustained periods. Above 3.0 is exceptional and usually not sustainable long-term. The S&P 500's long-term Sharpe ratio is approximately 0.4-0.5. Most hedge funds target Sharpe ratios of 1.0-2.0. Any strategy claiming a persistent Sharpe ratio above 3.0 should be viewed with extreme skepticism — it may be taking hidden risks not captured by standard deviation.",
    },
    {
      question: "How is the Sharpe ratio calculated?",
      answer:
        "Sharpe Ratio = (Portfolio Return - Risk-Free Rate) / Standard Deviation of Portfolio Returns. If a portfolio returns 12%, the risk-free rate is 4%, and the portfolio's standard deviation is 15%, the Sharpe ratio is (12% - 4%) / 15% = 0.53. The numerator captures excess return above the risk-free alternative; the denominator captures total risk. The result tells you: for every unit of volatility, how much excess return did you earn?",
    },
    {
      question: "What is the difference between Sharpe ratio and Sortino ratio?",
      answer:
        "The Sharpe ratio uses total standard deviation (both upside and downside volatility) as the risk measure. The Sortino ratio uses only downside deviation — volatility from returns below a minimum threshold. The Sortino ratio is more relevant for most investors because upside volatility (unexpected gains) is desirable, not risky. A strategy with high upside variance but low downside variance gets penalized by the Sharpe ratio but correctly rewarded by the Sortino ratio.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The Sharpe ratio, developed by Nobel laureate William Sharpe in 1966, is the most widely used measure of risk-adjusted performance in finance. Its insight is profound in its simplicity: raw returns mean nothing without context. A 20% return sounds impressive until you learn it came with 40% volatility — the risk-adjusted performance is mediocre. A 10% return with 8% volatility is far superior because the return per unit of risk is much higher. The Sharpe ratio formalizes this intuition into a single number that enables direct comparison across any investment.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Sharpe Ratio = (Rp - Rf) / Sigma_p</strong></p>

<p>Where Rp is the portfolio return, Rf is the risk-free rate, and Sigma_p is the standard deviation of portfolio returns. The numerator (excess return) measures how much the investment outperformed the risk-free alternative. The denominator (volatility) measures the price paid in risk. A higher ratio means more reward per unit of risk.</p>

<p>Annualization is important for consistent comparison. If using monthly returns, multiply the monthly Sharpe by the square root of 12 to annualize. Daily Sharpe is multiplied by the square root of 252 (trading days). Mixing non-annualized Sharpe ratios from different time frequencies produces misleading comparisons.</p>

<h2 id="interpretation">Practical Interpretation</h2>

<p>A Sharpe ratio of 0.5 is roughly the long-term performance of broad market indices. This means the equity market delivers about half a unit of excess return for every unit of risk. Active managers who consistently exceed 0.5 are adding value over passive investing. Those below 0.5 would have served their clients better by owning index funds.</p>

<p>For portfolio allocation decisions, the Sharpe ratio enables apples-to-apples comparison between dissimilar investments. A bond fund returning 6% with 4% volatility (Sharpe 0.5 at 4% risk-free) can be directly compared to a stock fund returning 15% with 20% volatility (Sharpe 0.55). The stock fund has a slightly better risk-reward profile despite having triple the absolute volatility.</p>

<p>At the portfolio level, the optimal allocation maximizes the Sharpe ratio of the overall portfolio — this is the tangent portfolio from modern portfolio theory. Adding an asset with a low or even negative expected return can improve the portfolio's Sharpe ratio if that asset has low or negative correlation with existing holdings, reducing total portfolio volatility.</p>

<h2 id="limitations">Limitations</h2>

<p>The Sharpe ratio treats upside and downside volatility equally. Standard deviation penalizes an investment for large positive returns just as much as for large negative returns. For investors, losing 20% is psychologically and financially much worse than gaining 20% — the pain of losses exceeds the pleasure of equivalent gains. The Sortino ratio addresses this by using only downside deviation as the risk measure.</p>

<p>Non-normal return distributions cause problems. Many investments — particularly hedge funds, options strategies, and illiquid assets — exhibit skewed or fat-tailed return distributions. Standard deviation poorly captures the risk of these strategies. A fund selling insurance against rare events (like deep out-of-the-money puts) will show a high Sharpe ratio during normal times and catastrophic losses during extreme events that the Sharpe ratio never warned about.</p>

<p>The Sharpe ratio is also time-period dependent. A fund might have an excellent Sharpe ratio over three years because its strategy worked during those specific market conditions. Over ten years or across different market regimes, the same strategy might produce mediocre risk-adjusted returns. Using longer measurement periods and comparing across full market cycles improves reliability.</p>

<p>Leverage distorts the Sharpe ratio. A fund that levers a 0.5 Sharpe strategy at 3x will deliver higher absolute returns with higher absolute risk, but the Sharpe ratio remains approximately 0.5. The ratio doesn't distinguish between a naturally high-returning strategy and a leveraged mediocre one.</p>

<p>On Brefyr, company and market data from SEC filings provides context for assessing risk-return profiles across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
