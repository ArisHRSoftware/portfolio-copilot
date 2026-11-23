import type { GlossaryTerm } from "../types";

export const termFactorInvesting: GlossaryTerm = {
  slug: "factor-investing",
  term: "Factor Investing",
  title: "Factor Investing — Targeting the Specific Characteristics That Drive Stock Returns",
  shortDefinition: "Factor investing is a strategy that targets specific, measurable characteristics of stocks — such as value, momentum, quality, size, and low volatility — that have been shown through academic research to explain differences in long-term returns across securities.",
  metaDescription: "What is factor investing? The main return factors, how factor ETFs work, multi-factor strategies, smart beta, and how factor analysis uses financial data from SEC filings.",
  wordCount: 850, category: "Investment Strategy", tags: ["factor-investing", "smart-beta", "value-factor", "momentum-factor", "quality-factor"],
  relatedSlugs: ["value-investing", "momentum-investing", "etf", "index-fund", "portfolio-diversification"], relatedTerms: ["value-investing", "momentum-investing", "etf", "index-fund", "portfolio-diversification"],
  faq: [{ question: "What are the main investment factors?", answer: "The five most established factors are: (1) Value — cheap stocks outperform expensive stocks over time. (2) Size — small-cap stocks outperform large-cap stocks over time (the 'small-cap premium'). (3) Momentum — stocks with strong recent returns continue to outperform. (4) Quality — profitable, stable companies with low leverage outperform. (5) Low volatility — less volatile stocks deliver better risk-adjusted returns than more volatile stocks. Additionally, dividend yield, investment (low investment firms outperform), and profitability are well-documented factors. Each factor has periods of strong and weak performance, which is why multi-factor approaches are popular." },
  { question: "What is the difference between factor investing and smart beta?", answer: "Smart beta is essentially factor investing packaged in an index fund or ETF format. Traditional index funds weight stocks by market capitalization. Smart beta funds weight stocks by a factor — value, momentum, quality, equal weight, or a combination. The terms are often used interchangeably, though 'factor investing' is the broader academic concept and 'smart beta' is the marketing term used by the ETF industry. Both aim to capture factor premiums in a systematic, rules-based, low-cost manner." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Factor investing is a systematic approach to portfolio construction that targets specific, measurable characteristics — or "factors" — of securities that have been shown through academic research to explain differences in long-term returns. Rather than trying to pick individual winning stocks, factor investors tilt their portfolios toward groups of stocks that share characteristics associated with higher returns: low valuations (value), strong recent performance (momentum), high profitability (quality), small size (size), or low price volatility (low volatility). Factor investing bridges the gap between passive index investing (which accepts market returns) and traditional active management (which relies on stock-picking skill).</p>

<h2 id="major-factors">The Major Factors</h2>

<p><strong>Value.</strong> Stocks with low prices relative to fundamentals (earnings, book value, cash flow) have historically outperformed expensive stocks. The value premium, documented by Fama and French, has averaged approximately 3-5% annually over long periods, though it was negative during the 2010s growth stock dominance.</p>

<p><strong>Size.</strong> Small-capitalization stocks have historically outperformed large-cap stocks — the "small-cap premium." This premium is attributed to the higher risk and lower liquidity of small companies. It has been less consistent in recent decades, particularly after adjusting for the micro-cap effect.</p>

<p><strong>Momentum.</strong> Stocks with strong returns over the past 6-12 months continue to outperform over the next 6-12 months. The momentum premium is one of the strongest and most consistent factors across markets and time periods.</p>

<p><strong>Quality.</strong> Companies with high profitability, stable earnings, low leverage, and strong balance sheets outperform. The quality factor captures the premium investors earn for holding financially healthy companies. It is negatively correlated with value (quality companies tend to be more expensive), providing diversification when combined.</p>

<p><strong>Low volatility.</strong> Stocks with lower price volatility have delivered better risk-adjusted returns than high-volatility stocks — contradicting the classical finance assumption that higher risk always leads to higher returns. The low-volatility anomaly is attributed to behavioral biases (investors overpay for lottery-like, volatile stocks) and institutional constraints (leveraged investing is restricted, so investors seeking high returns buy volatile stocks instead of leveraging stable ones).</p>

<h2 id="implementation">How Factor Investing Is Implemented</h2>

<p><strong>Single-factor ETFs.</strong> ETFs tracking specific factor indices — a value ETF holds the cheapest stocks by PE or P/B, a momentum ETF holds the best-performing stocks over the past year. These products allow investors to gain targeted factor exposure at low cost.</p>

<p><strong>Multi-factor strategies.</strong> Combine multiple factors in a single portfolio, capturing diversification benefits because factors have low correlations with each other. When value underperforms, momentum may outperform, and vice versa. Multi-factor ETFs and funds have gained significant assets as the preferred factor implementation approach.</p>

<p><strong>Factor tilts.</strong> Instead of a pure factor portfolio, some investors tilt a broad market portfolio toward desired factors — overweighting stocks with favorable factor characteristics while maintaining broad diversification. This approach reduces tracking error relative to the market benchmark.</p>

<h2 id="factor-timing">Factor Timing and Cycles</h2>

<p>Every factor experiences cycles of outperformance and underperformance. Value underperformed growth for over a decade (2010-2020) before rebounding. Momentum suffered severe crashes in 2009 and 2020. Small-cap has been inconsistent in recent decades. These cycles test investor discipline — the factors work over long periods but require patience through extended drawdowns. Research on factor timing (predicting which factors will outperform in the near term) has produced mixed results, and most practitioners recommend maintaining consistent factor exposure rather than attempting to time factor rotations.</p>

<h2 id="data-dependency">The Role of Financial Data</h2>

<p>Factor investing depends entirely on accurate, standardized financial data — the same data that comes from SEC filings. Value factors require earnings, book value, and cash flow data from 10-K and 10-Q filings. Quality factors require profitability metrics, leverage ratios, and earnings stability measures. Even momentum, primarily a price-based factor, benefits from fundamental confirmation using earnings data. The standardized disclosure mandated by SEC regulations makes systematic factor analysis possible across thousands of companies.</p>

<p>Brefyr extracts the financial metrics from SEC filings that underpin factor analysis — PE ratios, book values, profitability measures, and leverage ratios — enabling factor-aware investors to evaluate their portfolio's exposure to the characteristics that academic research has linked to long-term outperformance.</p>
`,
};
