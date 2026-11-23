import type { GlossaryTerm } from "../types";

export const termBeta: GlossaryTerm = {
  slug: "beta",
  term: "Beta",
  title: "Beta — Measuring a Stock's Sensitivity to Market Movements",
  shortDefinition:
    "Beta measures how much a stock's price moves relative to the overall market, quantifying the systematic risk that investors cannot diversify away.",
  metaDescription:
    "What is beta in investing? Learn how to interpret beta values, why beta matters for CAPM and portfolio construction, and when beta misleads.",
  wordCount: 450,
  category: "Risk Metrics",
  tags: ["beta", "systematic-risk", "risk-metrics", "capm", "portfolio-management"],
  relatedSlugs: ["alpha", "standard-deviation", "r-squared", "cost-of-equity"],
  relatedTerms: ["alpha", "standard-deviation", "r-squared", "cost-of-equity"],
  faq: [
    {
      question: "What does a beta of 1.5 mean?",
      answer:
        "A beta of 1.5 means the stock is historically 50% more volatile than the market. If the market rises 10%, this stock tends to rise 15%. If the market falls 10%, this stock tends to fall 15%. Higher beta means higher sensitivity to market movements in both directions. Investors in high-beta stocks earn larger gains in bull markets but suffer larger losses in bear markets. Beta of 1.0 means the stock moves with the market; below 1.0 means less volatile than the market.",
    },
    {
      question: "Is a low beta always safer?",
      answer:
        "Not necessarily. Beta only measures systematic (market-related) risk. A stock can have a low beta but high company-specific risk — a biotech company awaiting an FDA decision might have a beta of 0.5 (low market correlation) but enormous binary risk from the regulatory outcome. Beta also doesn't capture tail risks, liquidity risk, or regime changes. Low beta stocks are less volatile in normal markets but can still suffer catastrophic losses from company-specific events that beta doesn't measure.",
    },
    {
      question: "How is beta calculated?",
      answer:
        "Beta is calculated by running a linear regression of the stock's returns against the market's returns (typically the S&P 500) over a historical period (usually 2-5 years of monthly or weekly returns). The slope of the regression line is beta. A steeper slope means higher sensitivity to market moves. The calculation is: Beta = Covariance(stock returns, market returns) / Variance(market returns). Different data providers may report different betas due to differences in time period, return frequency, and market benchmark used.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Beta is the foundation of modern portfolio theory's approach to risk measurement. It isolates the portion of a stock's volatility that comes from overall market movements — the systematic risk that affects all stocks to varying degrees. A recession hurts most companies; rising interest rates affect nearly every sector. Beta quantifies how sensitive each individual stock is to these market-wide forces. This matters because systematic risk is the only risk that investors are compensated for in the capital asset pricing model — company-specific risk can be diversified away.</p>

<h2 id="interpreting-beta">Interpreting Beta Values</h2>

<p><strong>Beta = 1.0</strong>: The stock moves in perfect sync with the market. If the S&P 500 rises 8%, this stock tends to rise approximately 8%. Most large-cap diversified companies cluster near 1.0.</p>

<p><strong>Beta > 1.0 (high beta)</strong>: The stock amplifies market movements. Technology stocks, growth companies, small-caps, and cyclical industries (energy, mining, construction) typically have betas of 1.2-2.0. These stocks offer greater upside potential in bull markets but carry greater drawdown risk in bear markets.</p>

<p><strong>Beta < 1.0 (low beta)</strong>: The stock dampens market movements. Utilities, consumer staples, healthcare, and REITs typically have betas of 0.3-0.8. These defensive sectors provide relative stability during downturns but lag during strong rallies. Investors seeking capital preservation or income tend to favor low-beta stocks.</p>

<p><strong>Beta = 0</strong>: The stock has no correlation to market movements — it moves independently. Cash and certain alternative investments approximate zero beta. Some highly idiosyncratic businesses (a gold miner in a country with political instability) may show near-zero beta because company-specific factors dominate market factors.</p>

<p><strong>Negative beta</strong>: The stock moves inversely to the market. This is rare among individual stocks. Gold and certain inverse ETFs sometimes show negative betas, rising when the market falls. A negative-beta asset is valuable for hedging because it provides gains precisely when the rest of the portfolio is losing money.</p>

<h2 id="capm-role">Beta's Role in CAPM and Cost of Equity</h2>

<p>Beta is a critical input in the capital asset pricing model, which calculates the cost of equity: Re = Rf + Beta x ERP. A stock with a beta of 1.5 and an equity risk premium of 6% has a risk premium of 9% above the risk-free rate. A stock with beta 0.7 has only a 4.2% premium. This directly affects WACC and, through it, the DCF valuation. All else equal, a higher-beta company has a higher cost of equity, a higher WACC, and a lower intrinsic value because its cash flows are discounted more aggressively.</p>

<p>This relationship embodies the fundamental risk-return tradeoff: investors demand higher expected returns for bearing more systematic risk. High-beta stocks should deliver higher long-term returns to compensate for their greater volatility. Whether they actually do in practice is debated — some research suggests that low-beta stocks have delivered surprisingly competitive risk-adjusted returns, an anomaly known as the "low-beta anomaly."</p>

<h2 id="limitations">Limitations of Beta</h2>

<p>Beta is backward-looking — it's calculated from historical data and may not reflect future risk. A company that just took on massive debt, lost a major customer, or entered a new industry will have a forward-looking risk profile very different from its historical beta. The past is not always prologue.</p>

<p>Beta assumes returns are normally distributed and that the relationship between stock and market returns is linear. In reality, stocks can exhibit asymmetric behavior — falling more in crashes than beta would predict, or rising less in rallies. During extreme market events (financial crises, pandemics), correlations tend to increase, and beta estimates derived from normal periods underestimate crash-time sensitivity.</p>

<p>The choice of benchmark matters. Using the S&P 500 for a small-cap stock or the domestic index for a multinational may misrepresent systematic risk. The time period and return frequency (daily, weekly, monthly) also affect the calculated beta. Two data providers can report materially different betas for the same stock.</p>

<p>On Brefyr, company financial data from SEC filings combined with market data enables risk assessment across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
