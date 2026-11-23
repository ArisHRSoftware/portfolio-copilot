import type { GlossaryTerm } from "../types";

export const termStandardDeviation: GlossaryTerm = {
  slug: "standard-deviation",
  term: "Standard Deviation",
  title: "Standard Deviation — The Most Common Measure of Investment Volatility",
  shortDefinition:
    "Standard deviation measures the dispersion of investment returns around their average, quantifying how much returns fluctuate from period to period — higher standard deviation means greater volatility and uncertainty.",
  metaDescription:
    "What is standard deviation in investing? Learn how it measures volatility, what a high or low reading means, and how to use it for portfolio risk assessment.",
  wordCount: 440,
  category: "Risk Metrics",
  tags: ["standard-deviation", "volatility", "risk-metrics", "statistics", "portfolio-management"],
  relatedSlugs: ["volatility", "sharpe-ratio", "beta", "drawdown"],
  relatedTerms: ["volatility", "sharpe-ratio", "beta", "drawdown"],
  faq: [
    {
      question: "What does standard deviation tell investors?",
      answer:
        "Standard deviation tells you how much an investment's returns vary from the average. If a stock has an average annual return of 10% with a standard deviation of 20%, roughly two-thirds of the time annual returns will fall between -10% and +30% (one standard deviation from the mean). About 95% of the time, returns will fall between -30% and +50% (two standard deviations). Higher standard deviation means wider swings — more uncertainty about what return you'll actually receive in any given year.",
    },
    {
      question: "What is a typical standard deviation for stocks vs bonds?",
      answer:
        "U.S. large-cap stocks (S&P 500) have a historical annualized standard deviation of approximately 15-18%. Small-cap stocks are higher at 20-25%. International stocks range from 17-22%. Investment-grade bonds have much lower standard deviation at 4-6%. Treasury bonds are even lower at 3-5%. These numbers explain the risk-return tradeoff: higher-return asset classes come with proportionally higher volatility.",
    },
    {
      question: "Is standard deviation a complete measure of risk?",
      answer:
        "No. Standard deviation has three significant limitations: it treats upside and downside volatility equally (the Sortino ratio addresses this), it assumes returns are normally distributed (which misses fat tails and skew), and it doesn't capture maximum drawdown or how long losses persist. Standard deviation tells you about the typical range of returns but can underestimate the probability and severity of extreme events. Using standard deviation alongside drawdown, skewness, and kurtosis provides a more complete risk picture.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Standard deviation is the bedrock risk measurement in finance. When an analyst, fund manager, or financial advisor says "risk," they usually mean volatility as measured by standard deviation. It captures the most fundamental uncertainty about investment returns: how widely outcomes vary around the expected result. An investment with a 10% expected return and 5% standard deviation delivers fairly predictable results. The same expected return with 30% standard deviation delivers wildly unpredictable results. The expected destination is the same; the turbulence of the journey is vastly different.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Standard Deviation = Square Root of [ Sum of (Each Return - Average Return)^2 / (N - 1) ]</strong></p>

<p>The calculation squares the difference between each observed return and the mean return, averages those squared differences, then takes the square root to return to the same unit as the original returns (percentage points). Using (N-1) in the denominator rather than N applies Bessel's correction for sample data.</p>

<p>For annualization: monthly standard deviation is multiplied by the square root of 12 to convert to annual standard deviation. Daily standard deviation is multiplied by the square root of 252 (trading days per year). This square-root-of-time rule assumes returns are independent across periods, which is approximately true for liquid public markets.</p>

<h2 id="normal-distribution">The Normal Distribution Assumption</h2>

<p>Standard deviation's interpretive power comes from the normal distribution. If returns are normally distributed, 68.2% of observations fall within one standard deviation of the mean, 95.4% within two, and 99.7% within three. This provides a probabilistic framework for thinking about future returns: if a stock has a 12% average return and 20% standard deviation, there's roughly a 2.5% chance of returns below -28% (two standard deviations below the mean) in any given year.</p>

<p>However, real-world returns are not perfectly normal. They exhibit fat tails (extreme events occur more frequently than the normal distribution predicts) and negative skew (large losses are more common than large gains of the same magnitude). The 2008 financial crisis produced returns that were 4-5 standard deviations below the mean for many assets — events that the normal distribution predicts should happen once in 10,000-100,000 years. Standard deviation understates the probability of extreme events.</p>

<h2 id="portfolio-context">Portfolio Context</h2>

<p>Standard deviation's greatest utility is in portfolio construction. The standard deviation of a portfolio is not simply the weighted average of individual asset standard deviations — it also depends on the correlations between assets. When assets are less than perfectly correlated (which is almost always the case), combining them reduces portfolio standard deviation below the weighted average. This is the mathematical foundation of diversification.</p>

<p>The portfolio standard deviation formula: Sigma_p = Square Root of [ w1^2 x Sigma_1^2 + w2^2 x Sigma_2^2 + 2 x w1 x w2 x Sigma_1 x Sigma_2 x Rho_12 ], where w represents weights, Sigma represents standard deviations, and Rho is the correlation coefficient. When Rho is less than 1.0, the portfolio risk is reduced. When Rho is negative, risk reduction is even greater.</p>

<p>This is why asset allocation — not individual security selection — drives the majority of portfolio risk. A portfolio of 100% stocks has a certain standard deviation. Adding bonds reduces standard deviation significantly because bond returns have low or negative correlation with stock returns during many market regimes. The 60/40 stock-bond portfolio became an industry standard precisely because it offers meaningful risk reduction with modest return sacrifice.</p>

<h2 id="practical-applications">Practical Applications</h2>

<p>Standard deviation is used extensively in position sizing. A common approach is to target a specific portfolio volatility level (say, 10% annualized) and size positions inversely to their individual volatility. A stock with 30% standard deviation gets a smaller position than one with 15% standard deviation, so each contributes roughly equally to portfolio risk.</p>

<p>On Brefyr, company financial data from SEC filings provides the fundamental inputs for assessing business risk across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
