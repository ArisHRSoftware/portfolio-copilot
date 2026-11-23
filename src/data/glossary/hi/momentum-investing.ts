import type { GlossaryTerm } from "../../types";

export const termMomentumInvestingHi: GlossaryTerm = {
  slug: "momentum-investing",
  term: "Momentum Investing (मोमेंटम इन्वेस्टिंग)",
  title: "Momentum Investing — Already Up जा रहे Stocks के Trend को Ride करना",
  shortDefinition:
    "Momentum investing strategy है जो strong recent price performance वाले stocks buy और weak performance वाले sell करती है — empirical finding पर based कि well-performing stocks intermediate horizons पर continue perform करती हैं।",
  metaDescription:
    "Momentum investing क्या है? Strategy कैसे काम करती है, academic evidence, common metrics, crash risks, और fundamental analysis कैसे complement करती है।",
  wordCount: 410,
  category: "Investment Strategy",
  tags: ["momentum-investing", "trend-following", "relative-strength", "investment-strategy", "factor-investing"],
  relatedSlugs: ["factor-investing", "value-investing", "growth-investing", "etf"],
  relatedTerms: ["factor-investing", "value-investing", "growth-investing", "etf"],
  faq: [
    { question: "Momentum काम क्यों करती है?", answer: "Behavioral/structural explanations: (1) Underreaction — investors slow to process new info। (2) Herding — trend-following। (3) Disposition effect — winners जल्दी sell, losers hold। (4) Institutional flows — recent winners को inflows, losers से outflows। Countries, asset classes, time periods across documented — most robust empirical findings।" },
    { question: "Momentum investing के risks?", answer: "Momentum crashes — sudden violent reversals, recent winners collapse, losers surge। Market regime changes (2009 recovery, 2020 COVID reversal)। 20-40% single month loss possible। High transaction costs, short-term capital gains taxes। Expensive stocks buy fundamentally।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Momentum investing financial economics की सबसे well-documented anomalies में से एक पर based: past 6-12 months well-perform करने वाले stocks next 6-12 months continue well-perform, poorly perform continue poorly। Jegadeesh और Titman landmark 1993 study — efficient market hypothesis contradict — dozens countries, multiple asset classes, century+ data confirm। Momentum primary "factor" alongside value, size, quality।</p>

<p>Indian context: Indian market में भी momentum strategies popular — NSE Momentum 50 index, momentum-based PMS। Same principles US stocks पर apply — Indian investors cross-border momentum signals SEC filings fundamentals से validate कर सकते हैं।</p>

<h2>Strategy कैसे काम करती है</h2>
<p><strong>Ranking:</strong> Stocks past 12 months total return rank (most recent month exclude — short-term reversal)। Top 10-20% = "winners"; bottom 10-20% = "losers"।</p>

<p><strong>Portfolio construction:</strong> Winners buy, losers sell (long-short)। Monthly/quarterly rebalance। Long-only: winners overweight, losers underweight/exclude।</p>

<p><strong>Holding period:</strong> 3-12 months। 6-12 month horizons strongest। Beyond 12-18 months momentum reverses — mean reversion।</p>

<h2>Common Metrics</h2>
<p><strong>12-1 month return:</strong> Standard academic measure। <strong>RSI:</strong> Recent price changes magnitude — overbought/oversold evaluate। <strong>Moving average crossovers:</strong> 50-day cross above 200-day = buy (golden cross), reverse = sell (death cross)। <strong>Earnings momentum:</strong> Positive earnings surprises → continue beating → stock price momentum। Fundamental + behavioral combine — less crash-prone than pure price momentum।</p>

<h2>Momentum और Fundamentals Combine</h2>
<p>Momentum + value (cheap stocks positive momentum) = better risk-adjusted returns either alone। Negatively correlated — momentum performs when value underperforms, vice versa — diversification। Momentum + quality (high-quality positive trends) reduces deteriorating business risk।</p>

<h2>Practical Implementation</h2>
<p>Factor-based ETFs (momentum indices track), screening tools recent performance rank, sector rotation strongest sectors overweight। Challenges: transaction costs (frequent rebalancing), tax efficiency (short holding = short-term gains), discipline (high prices buy — uncomfortable)।</p>

<p>Brefyr financial data और filing intelligence — momentum analysis combine करें SEC filings fundamentals validate — price momentum supported by fundamental improvement या merely speculative enthusiasm।</p>
`,
};
