import type { GlossaryTerm } from "../types";

export const termImpliedVolatility: GlossaryTerm = {
  slug: "implied-volatility",
  term: "Implied Volatility",
  title: "Implied Volatility — What the Options Market Expects About Future Price Swings",
  shortDefinition:
    "Implied volatility (IV) is the market's forecast of a stock's expected price movement, derived from options prices. Higher IV means the market expects larger price swings; lower IV means smaller expected moves.",
  metaDescription:
    "What is implied volatility? Learn how IV is calculated from options prices, IV rank and percentile, IV crush around earnings, and how to use implied volatility in trading decisions.",
  wordCount: 600,
  category: "Trading",
  tags: ["implied-volatility", "options", "volatility", "vix", "earnings", "options-pricing"],
  relatedSlugs: ["options", "options-chain", "call-option", "put-option", "iron-condor"],
  relatedTerms: ["options", "options-chain", "call-option", "put-option", "iron-condor"],
  faq: [
    {
      question: "What is the difference between implied volatility and historical volatility?",
      answer:
        "Historical volatility (HV) measures how much a stock's price has actually moved in the past, calculated from historical price data. Implied volatility (IV) measures how much the market expects the stock to move in the future, derived from current options prices. HV is backward-looking; IV is forward-looking. When IV is significantly higher than HV, options are considered expensive — the market is pricing in more future movement than the stock has historically exhibited. When IV is below HV, options are considered cheap. Comparing the two helps traders decide whether options premiums are fairly priced.",
    },
    {
      question: "What is IV crush and when does it happen?",
      answer:
        "IV crush is a sharp drop in implied volatility that occurs after a known event (typically earnings) has passed. Before earnings, IV rises because the market expects a large price move from the announcement. Options premiums inflate accordingly. After earnings are released and the uncertainty is resolved, IV drops rapidly — often by 30-60% overnight. This means an option can lose value even if the stock moves in the expected direction, because the IV component of the premium evaporated. IV crush is the primary risk for options buyers who hold through earnings and the primary opportunity for options sellers.",
    },
    {
      question: "What is the VIX and how does it relate to implied volatility?",
      answer:
        "The VIX (CBOE Volatility Index) is calculated from the implied volatility of S&P 500 index options. It represents the market's expectation for 30-day volatility in the S&P 500, expressed as an annualized percentage. A VIX of 20 means the market expects the S&P 500 to move about 1.15% per day (20% / sqrt(252)). The VIX is often called the 'fear gauge' because it spikes during market selloffs when demand for protective puts surges. During calm markets, the VIX typically ranges from 12-18; during crises, it can exceed 40 (it hit 82 in March 2020).",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Implied volatility is the options market's collective estimate of how much a stock will move. It is not calculated from the stock's past price history — that is historical volatility. Instead, IV is extracted from current options prices using an options pricing model (typically Black-Scholes). If options on a stock are expensive, IV is high — the market is pricing in large expected moves. If options are cheap, IV is low — the market expects calm.</p>

<p>IV is expressed as an annualized percentage. An IV of 30% means the market expects the stock to move within a range of plus or minus 30% over the next year (one standard deviation). To translate to a shorter timeframe: divide by the square root of the number of periods. For one month, divide by sqrt(12) to get approximately 8.7%. For one day, divide by sqrt(252) to get approximately 1.9%.</p>

<h2 id="how-iv-affects-options">How IV Affects Options Prices</h2>

<p>Implied volatility is the single most important variable in options pricing after the stock price itself. When IV rises, both <a href="/glossary/call-option">call</a> and <a href="/glossary/put-option">put</a> prices increase. When IV falls, both call and put prices decrease. This is because higher expected volatility increases the probability of the option finishing in the money, making it more valuable.</p>

<p>The sensitivity of an option's price to changes in IV is called <strong>vega</strong>. At-the-money options have the highest vega — they are most affected by IV changes. Deep in-the-money and deep out-of-the-money options have lower vega. Longer-dated options also have higher vega than shorter-dated ones because there is more time for volatility to affect the outcome.</p>

<h2 id="iv-around-earnings">IV Around Earnings Announcements</h2>

<p>The most predictable IV pattern occurs around quarterly earnings announcements. In the weeks before earnings, IV rises as the market anticipates a large price move from the results. Options premiums inflate, sometimes dramatically. The day after earnings are released, IV drops sharply — this is <strong>IV crush</strong>.</p>

<p>IV crush creates counterintuitive outcomes. A trader who buys calls expecting a stock to beat earnings might be right about the direction — the stock rises 3% — but still lose money because the IV component of the premium collapsed by more than the intrinsic value gained. This is why experienced traders often sell options before earnings (to harvest inflated IV) rather than buy them.</p>

<p>The expected move for an earnings event can be estimated from the at-the-money straddle price. If the ATM call and put together cost $8 on a $100 stock, the market expects approximately an $8 (8%) move in either direction. If the actual move is less than $8, straddle sellers profit. If greater, straddle buyers profit.</p>

<h2 id="iv-rank-percentile">IV Rank and IV Percentile</h2>

<p>Raw IV numbers are not comparable across stocks — a biotech stock might normally trade at 60% IV while a utility trades at 15%. To contextualize, traders use two relative measures:</p>

<ul>
<li><strong>IV Rank:</strong> Where the current IV falls within the stock's 52-week IV range. If the 52-week low is 20% and the high is 60%, a current IV of 30% gives an IV Rank of 25% ((30-20)/(60-20)). This tells you IV is in the lower quarter of its annual range.</li>
<li><strong>IV Percentile:</strong> The percentage of days in the past year that IV was below the current level. An IV Percentile of 85% means IV has been lower than the current level 85% of the time over the past year — IV is elevated relative to its own history.</li>
</ul>

<p>High IV Rank/Percentile environments favor options sellers (premiums are rich). Low IV Rank/Percentile environments favor options buyers (premiums are cheap).</p>

<h2 id="volatility-smile-skew">Volatility Smile and Skew</h2>

<p>IV is not uniform across all <a href="/glossary/strike-price">strike prices</a>. When you look at the <a href="/glossary/options-chain">options chain</a>, OTM puts typically have higher IV than ATM options, and OTM calls may have lower IV. This pattern is called the <strong>volatility skew</strong>. It reflects the market's greater fear of downside crashes than upside surges — investors pay more for downside protection.</p>

<p>The shape of the skew itself carries information. A steepening skew (OTM puts getting relatively more expensive) signals growing hedging demand and institutional concern about downside risk. Combined with SEC filing data on Brefyr — insider selling, institutional put positions in 13F filings, or negative 8-K disclosures — an expanding volatility skew provides a market-structure confirmation of bearish fundamental signals.</p>
`,
};
