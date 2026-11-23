import type { GlossaryTerm } from "../types";

export const termCorrelation: GlossaryTerm = {
  slug: "correlation",
  term: "Correlation",
  title: "Correlation — How Investments Move Together (or Don't)",
  shortDefinition:
    "Correlation measures the degree to which two investments' returns move together, ranging from +1 (perfect lockstep) to -1 (perfect opposition), and is the foundation of portfolio diversification.",
  metaDescription:
    "What is correlation in investing? Learn how it drives diversification, why correlations change during crises, and how to build truly diversified portfolios.",
  wordCount: 440,
  category: "Risk Metrics",
  tags: ["correlation", "diversification", "risk-metrics", "portfolio-management", "statistics"],
  relatedSlugs: ["r-squared", "standard-deviation", "beta", "volatility"],
  relatedTerms: ["r-squared", "standard-deviation", "beta", "volatility"],
  faq: [
    {
      question: "What do different correlation values mean?",
      answer:
        "+1.0: perfect positive correlation — the two assets always move in the same direction by proportional amounts. 0.0: no correlation — the assets move independently. -1.0: perfect negative correlation — they always move in opposite directions. In practice, most stock pairs have correlations between +0.3 and +0.8. Stocks and bonds have historically shown correlations near zero or slightly negative, which is why they combine well in portfolios. Truly negative correlations among assets are rare and extremely valuable for diversification.",
    },
    {
      question: "Why do correlations increase during market crises?",
      answer:
        "During crises, the common factor of fear and forced selling overwhelms asset-specific factors. Investors sell whatever is liquid, regardless of fundamentals. Margin calls force sales across portfolios. Risk models trigger simultaneous de-risking. The result: assets that normally have low correlations start moving together, reducing the diversification benefit precisely when it's needed most. This phenomenon, called 'correlation convergence' or 'contagion,' is a central risk in portfolio management and why stress-testing with elevated correlations is essential.",
    },
    {
      question: "How is correlation calculated?",
      answer:
        "Correlation (Rho) equals the covariance of two assets' returns divided by the product of their standard deviations: Rho = Cov(A,B) / (Sigma_A x Sigma_B). The covariance measures whether the assets tend to move together (positive), apart (negative), or independently (near zero). Dividing by the standard deviations normalizes the measure to the -1 to +1 scale. Correlation is typically calculated from historical return data over 1-5 year periods using monthly or weekly returns.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Correlation is the mathematical engine of diversification — the only free lunch in finance. By combining assets whose returns don't move in perfect lockstep, investors can reduce portfolio risk without proportionally reducing expected return. The lower the correlation between holdings, the greater the diversification benefit. Understanding correlation is essential for anyone constructing a portfolio of multiple investments.</p>

<h2 id="scale">The Correlation Scale</h2>

<p>Correlation is measured on a scale from -1 to +1. The number has no units — it's a pure measure of the linear relationship between two return series.</p>

<p><strong>+1.0 (perfect positive correlation)</strong>: The two assets always move together in the same direction and proportion. No diversification benefit exists. Owning both is equivalent to owning more of one. In practice, identical index funds tracking the same benchmark approach +1.0.</p>

<p><strong>0.0 (zero correlation)</strong>: The assets move independently. Knowing one asset's return tells you nothing about the other's. Combining them provides meaningful diversification because when one zigs, the other is equally likely to zig or zag.</p>

<p><strong>-1.0 (perfect negative correlation)</strong>: The assets always move in opposite directions. This is the theoretical ideal for hedging — combining them in the right proportions would eliminate all volatility. Perfect negative correlation essentially doesn't exist among real financial assets, but even moderately negative correlations (like stocks and certain types of bonds) provide powerful portfolio protection.</p>

<h2 id="diversification">Correlation and Diversification Math</h2>

<p>The portfolio standard deviation formula shows precisely how correlation drives diversification. For a two-asset portfolio: Sigma_p = Square Root of [w1^2 x Sigma_1^2 + w2^2 x Sigma_2^2 + 2 x w1 x w2 x Sigma_1 x Sigma_2 x Rho].</p>

<p>When Rho (correlation) equals +1.0, portfolio standard deviation is the weighted average of individual standard deviations — no diversification benefit. When Rho is less than +1.0, portfolio risk falls below the weighted average. When Rho is -1.0, it's theoretically possible to construct a zero-risk portfolio. Each step down in correlation reduces portfolio risk more than the last, creating an increasingly convex diversification benefit.</p>

<p>This math explains why a portfolio of 30 stocks with an average pairwise correlation of 0.3 has dramatically lower risk than a single stock, even though each individual stock is volatile. The uncorrelated components of each stock's return partially cancel out, leaving only the common systematic risk.</p>

<h2 id="regime-dependence">Correlation Instability</h2>

<p>The most dangerous assumption in portfolio management is that future correlations will resemble past correlations. Correlations are not fixed constants — they shift with market regimes, economic conditions, and policy changes.</p>

<p>The most critical instability: correlations tend to increase during market stress. Assets that showed low correlations during normal markets may become highly correlated during crashes, as panic selling, margin calls, and liquidity withdrawal affect all risky assets simultaneously. A portfolio diversified for normal times may provide far less protection during the crisis when protection matters most.</p>

<p>The stock-bond correlation has shifted dramatically over decades. From 2000-2020, stocks and bonds were negatively correlated — bonds rose when stocks fell, providing excellent hedging. In the late 1990s and again in 2022, the correlation turned positive as rising interest rates hurt both stocks and bonds simultaneously. The assumption that bonds always hedge stock risk proved painfully wrong for 60/40 portfolios in 2022.</p>

<h2 id="practical-use">Practical Portfolio Use</h2>

<p>When building a diversified portfolio, the correlation matrix — a table showing pairwise correlations among all holdings — reveals the true structure of portfolio risk. If most pairwise correlations are high (above 0.7), the portfolio is less diversified than the number of holdings suggests. True diversification requires genuinely different return drivers, not just different ticker symbols.</p>

<p>On Brefyr, financial data from SEC filings helps investors understand the fundamental characteristics that drive return correlations across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
