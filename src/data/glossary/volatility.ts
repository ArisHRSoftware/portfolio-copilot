import type { GlossaryTerm } from "../types";

export const termVolatility: GlossaryTerm = {
  slug: "volatility",
  term: "Volatility",
  title: "Volatility — The Speed and Magnitude of Price Changes",
  shortDefinition:
    "Volatility measures the rate and magnitude of price fluctuations in a security or market, commonly expressed as annualized standard deviation of returns. Higher volatility means prices swing more widely and unpredictably.",
  metaDescription:
    "What is volatility? Learn about historical vs implied volatility, the VIX, why volatility clusters, and how investors can use volatility in their strategy.",
  wordCount: 450,
  category: "Risk Metrics",
  tags: ["volatility", "risk-metrics", "vix", "options", "market-risk"],
  relatedSlugs: ["standard-deviation", "beta", "drawdown", "sharpe-ratio"],
  relatedTerms: ["standard-deviation", "beta", "drawdown", "sharpe-ratio"],
  faq: [
    {
      question: "What is the difference between historical and implied volatility?",
      answer:
        "Historical volatility measures past price fluctuations — it's calculated from actual return data over a specific lookback period (20 days, 90 days, 1 year). Implied volatility is forward-looking — it's derived from options prices and represents the market's expectation of future volatility. When options are expensive (high demand for protection), implied volatility is high. When options are cheap, implied volatility is low. Implied volatility often exceeds historical volatility because options buyers pay a risk premium for protection.",
    },
    {
      question: "What is the VIX?",
      answer:
        "The VIX (CBOE Volatility Index) measures the implied volatility of S&P 500 options over the next 30 days. It's commonly called the 'fear index' because it spikes when investors are anxious and buy protective options. VIX readings below 15 indicate calm markets. Between 15-25 is normal. Above 25 suggests elevated anxiety. Readings above 40 occur during crises (the VIX hit 82 during the 2020 COVID crash). The VIX is not tradeable directly but can be accessed through VIX futures and ETPs.",
    },
    {
      question: "Is high volatility always bad?",
      answer:
        "Not necessarily. Volatility is opportunity for traders and active investors — wider price swings create more chances to buy low and sell high. For long-term investors with strong stomachs, high-volatility assets can deliver higher returns over time, compensating for the uncomfortable ride. The key is whether the investor can tolerate the volatility without selling during drawdowns. High volatility is dangerous only when it forces capitulation or when it's combined with permanent capital loss risk.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Volatility is both the enemy and the opportunity of investing. It represents uncertainty — the degree to which future prices are unpredictable. For long-term investors, volatility creates temporary mispricings that allow disciplined buyers to acquire assets at discounts. For short-term investors and those with limited risk tolerance, volatility creates emotional stress that leads to poor decisions. Understanding volatility — what causes it, how to measure it, and how to manage it — is fundamental to successful investing.</p>

<h2 id="measurement">Measuring Volatility</h2>

<p><strong>Historical volatility</strong> is calculated from past price data as the annualized standard deviation of returns. A stock with 25% historical volatility has returned a range that spans 25 percentage points above and below its average return roughly two-thirds of the time. This is a backward-looking measure that describes how volatile the asset has been, not necessarily how volatile it will be.</p>

<p><strong>Implied volatility</strong> is extracted from options prices using pricing models like Black-Scholes. It represents the market's consensus expectation of future volatility over the life of the option. Implied volatility is forward-looking and incorporates all available information — earnings announcements, economic data releases, geopolitical events — that market participants expect to affect prices. When implied volatility exceeds historical volatility, the market expects more turbulence ahead than what occurred recently.</p>

<p>The <strong>VIX index</strong> aggregates implied volatility across S&P 500 options to produce a single number representing expected market volatility over the next 30 days. It's expressed in annualized percentage points — a VIX of 20 implies the market expects approximately 20% annualized volatility, or roughly 1.3% daily swings, over the coming month.</p>

<h2 id="clustering">Volatility Clustering</h2>

<p>One of the most important empirical facts about volatility is that it clusters. High-volatility days tend to follow high-volatility days, and low-volatility days tend to follow low-volatility days. After a large price move (up or down), the next several days are likely to see larger-than-normal moves as well. After an extended calm period, calm tends to persist.</p>

<p>This clustering effect means that volatility is somewhat predictable in the short term — today's volatility is a reasonable forecast for tomorrow's volatility. GARCH models (generalized autoregressive conditional heteroskedasticity) exploit this persistence to forecast volatility more accurately than simple historical standard deviation. This matters for options pricing, risk management, and position sizing.</p>

<h2 id="mean-reversion">Volatility Mean Reversion</h2>

<p>While volatility clusters in the short term, it mean-reverts over longer periods. Extreme spikes in volatility — during crises, pandemics, or financial shocks — eventually subside as conditions normalize, uncertainty resolves, and panic fades. The VIX has spiked above 40 multiple times in history but has always returned to its long-term average of approximately 18-20.</p>

<p>This mean-reverting property creates trading opportunities. When volatility is extremely high (VIX above 30-40), selling options or buying risky assets has historically produced above-average returns because the market overprices risk during panic. When volatility is extremely low (VIX below 12-13), buying protection is cheap, and the market may be underestimating risks.</p>

<h2 id="volatility-risk-premium">The Volatility Risk Premium</h2>

<p>Implied volatility consistently exceeds realized volatility on average — options are systematically overpriced relative to the actual volatility that materializes. This gap, called the volatility risk premium, exists because investors are willing to overpay for portfolio insurance. The premium averages 2-4 percentage points but can be much larger during stressful periods.</p>

<p>The volatility risk premium is one of the most well-documented and persistent risk premiums in finance. Strategies that systematically sell options (harvesting the premium) have historically delivered positive returns, though with the significant caveat that losses during volatility spikes can be severe and sudden — the premium exists precisely because of this tail risk.</p>

<p>On Brefyr, company financial data from SEC filings helps investors assess the fundamental characteristics that drive stock volatility across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
