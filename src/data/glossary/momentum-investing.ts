import type { GlossaryTerm } from "../types";

export const termMomentumInvesting: GlossaryTerm = {
  slug: "momentum-investing",
  term: "Momentum Investing",
  title: "Momentum Investing — Riding the Trend of Stocks That Are Already Going Up",
  shortDefinition: "Momentum investing is an investment strategy that buys stocks showing strong recent price performance and sells stocks showing weak performance, based on the empirical finding that stocks that have performed well tend to continue performing well over intermediate time horizons.",
  metaDescription: "What is momentum investing? How the strategy works, the academic evidence behind it, common momentum metrics, risks including crashes, and how it complements fundamental analysis.",
  wordCount: 850, category: "Investment Strategy", tags: ["momentum-investing", "trend-following", "relative-strength", "investment-strategy", "factor-investing"],
  relatedSlugs: ["factor-investing", "value-investing", "growth-investing", "etf"], relatedTerms: ["factor-investing", "value-investing", "growth-investing", "etf"],
  faq: [{ question: "Why does momentum work?", answer: "Several behavioral and structural explanations have been proposed: (1) Underreaction — investors are slow to process new information, so good news takes time to be fully reflected in prices. (2) Herding — investors follow trends, creating self-reinforcing price movements. (3) Disposition effect — investors sell winners too early and hold losers too long, creating predictable price patterns. (4) Institutional flows — fund inflows go to recent winners and outflows come from recent losers, amplifying momentum. The momentum premium has been documented across countries, asset classes, and time periods, making it one of the most robust empirical findings in finance." },
  { question: "What are the risks of momentum investing?", answer: "The biggest risk is momentum crashes — sudden, violent reversals where recent winners collapse and recent losers surge. These crashes tend to occur during market regime changes (the 2009 recovery, the 2020 COVID reversal) when the previous trend abruptly reverses. Momentum portfolios can lose 20-40% in a single month during these episodes. Additionally, momentum strategies require frequent trading, generating high transaction costs and short-term capital gains taxes. The strategy also involves buying stocks that are often expensive by fundamental measures, creating vulnerability if the market shifts to favoring value." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Momentum investing is based on one of the most well-documented anomalies in financial economics: stocks that have performed well over the past 6-12 months tend to continue performing well over the next 6-12 months, and stocks that have performed poorly tend to continue performing poorly. This persistence of returns — first rigorously documented by Jegadeesh and Titman in their landmark 1993 study — contradicts the efficient market hypothesis and has been confirmed across dozens of countries, multiple asset classes, and over a century of data. Momentum is now considered one of the primary "factors" driving stock returns, alongside value, size, and quality.</p>

<h2 id="how-momentum-works">How Momentum Strategies Work</h2>

<p><strong>Ranking.</strong> Stocks are ranked by their total return over a lookback period — typically the past 12 months, excluding the most recent month (which exhibits short-term reversal). The top 10-20% by performance are classified as "winners"; the bottom 10-20% are classified as "losers."</p>

<p><strong>Portfolio construction.</strong> The strategy buys winners and (in a long-short implementation) sells losers. The portfolio is rebalanced monthly or quarterly to capture the ongoing momentum signal. Long-only momentum strategies simply overweight winners and underweight or exclude losers.</p>

<p><strong>Holding period.</strong> Typical holding periods are 3-12 months. Momentum tends to be strongest over 6-12 month horizons. Beyond 12-18 months, the momentum effect reverses — previous winners start to underperform (long-term reversal or "mean reversion").</p>

<h2 id="momentum-metrics">Common Momentum Metrics</h2>

<p><strong>12-1 month return.</strong> Total return over the past 12 months, excluding the most recent month. This is the standard academic momentum measure.</p>

<p><strong>Relative strength index (RSI).</strong> A technical indicator measuring the magnitude of recent price changes to evaluate overbought or oversold conditions. While more of a trading tool than a pure momentum measure, RSI is widely used in momentum strategies.</p>

<p><strong>Moving average crossovers.</strong> When a short-term moving average (50-day) crosses above a long-term moving average (200-day), it generates a momentum buy signal (the "golden cross"). The reverse crossing generates a sell signal (the "death cross").</p>

<p><strong>Earnings momentum.</strong> A fundamental twist on price momentum — stocks with positive earnings surprises (actual earnings beating estimates) tend to continue beating estimates, and their stock prices exhibit momentum. This combines behavioral momentum with fundamental information and may be less prone to crashes than pure price momentum.</p>

<h2 id="combining-with-fundamentals">Momentum and Fundamentals</h2>

<p>Momentum works well in combination with other factors. Research shows that combining momentum with value (buying cheap stocks with positive momentum) produces better risk-adjusted returns than either factor alone. The two factors are negatively correlated — momentum tends to perform well when value underperforms, and vice versa — providing diversification benefits. Similarly, combining momentum with quality (buying high-quality companies with positive price trends) reduces the risk of holding deteriorating businesses that happen to be on a temporary upswing.</p>

<h2 id="implementation">Practical Implementation</h2>

<p>Individual investors can implement momentum strategies through factor-based ETFs (many ETFs track momentum indices), screening tools that rank stocks by recent performance, and sector rotation strategies that overweight the strongest-performing sectors. The key practical challenges are transaction costs (frequent rebalancing generates trading costs), tax efficiency (short holding periods generate short-term capital gains), and discipline (momentum requires buying stocks at high prices, which feels uncomfortable).</p>

<p>Brefyr provides the financial data and filing intelligence that investors can combine with momentum analysis — using SEC filings to validate whether a stock's price momentum is supported by fundamental improvement or is merely speculative enthusiasm.</p>
`,
};
