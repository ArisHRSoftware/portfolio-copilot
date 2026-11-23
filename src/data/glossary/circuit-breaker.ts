import type { GlossaryTerm } from "../types";

export const termCircuitBreaker: GlossaryTerm = {
  slug: "circuit-breaker",
  term: "Circuit Breaker (Trading Halt)",
  title: "Circuit Breaker — Automatic Trading Halts That Pause Market Panics",
  shortDefinition:
    "Circuit breakers are automatic mechanisms that temporarily halt trading on an exchange or in a specific stock when prices move beyond predefined thresholds, designed to prevent panic-driven market crashes.",
  metaDescription:
    "What are circuit breakers in stock markets? Learn about market-wide halts (Levels 1-3), individual stock LULD halts, how they were created after the 1987 crash, and their effectiveness during volatility.",
  wordCount: 580,
  category: "Market Structure",
  tags: ["circuit-breaker", "trading-halt", "market-structure", "volatility", "regulation", "luld"],
  relatedSlugs: ["short-squeeze", "gamma-squeeze", "bid-ask-spread", "after-hours-trading"],
  relatedTerms: ["short-squeeze", "gamma-squeeze", "bid-ask-spread", "after-hours-trading"],
  faq: [
    {
      question: "What are the current market-wide circuit breaker levels?",
      answer:
        "Market-wide circuit breakers are based on the S&P 500's decline from the prior day's close. Level 1: 7% decline triggers a 15-minute halt (only during regular hours before 3:25 PM ET; after 3:25, no halt). Level 2: 13% decline triggers a 15-minute halt (same time restriction). Level 3: 20% decline halts trading for the remainder of the day — no exceptions. These levels are recalculated daily based on the prior close. All three levels were triggered in a single session only once — March 9, 2020, during the COVID-19 selloff — when the S&P 500 dropped over 7% at the open.",
    },
    {
      question: "What is a LULD halt and how is it different from a circuit breaker?",
      answer:
        "LULD (Limit Up-Limit Down) is a mechanism for individual stocks, not the entire market. It prevents trades from occurring outside specified price bands around a reference price (typically the average price over the preceding 5 minutes). For S&P 500 stocks, the bands are 5% above and below; for other stocks, bands are wider (10-20%). When a stock's price hits the band, trading enters a 15-second 'limit state.' If the price does not return within the bands within 15 seconds, trading is halted for 5 minutes. LULD halts are common during volatile sessions and around earnings announcements.",
    },
    {
      question: "Can I still trade during a circuit breaker halt?",
      answer:
        "No. During a halt, no trades execute on any US exchange for the affected security (or the entire market, for market-wide halts). Existing limit orders remain in the book but cannot fill. Market orders placed during the halt queue for execution at the reopening. The reopening uses an auction process similar to the daily opening auction, where accumulated buy and sell interest is matched at a single clearing price. This auction mechanism is designed to discover a fair price incorporating all information that emerged during the halt.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Circuit breakers are safety mechanisms that pause trading when prices move too fast. They were introduced after the October 1987 "Black Monday" crash, when the Dow Jones Industrial Average fell 22.6% in a single day with no pause or intervention. The idea is straightforward: when fear and momentum are driving prices far beyond what fundamentals justify, a temporary halt gives participants time to assess information, meet margin calls, and restore orderly trading.</p>

<h2 id="market-wide">Market-Wide Circuit Breakers</h2>

<p>The SEC's Rule 80B establishes three levels of market-wide circuit breakers based on the S&P 500 index decline from the prior day's close:</p>

<table>
<thead><tr><th>Level</th><th>Trigger</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>7% decline</td><td>15-minute halt (only before 3:25 PM ET)</td></tr>
<tr><td>Level 2</td><td>13% decline</td><td>15-minute halt (only before 3:25 PM ET)</td></tr>
<tr><td>Level 3</td><td>20% decline</td><td>Trading halted for remainder of the day</td></tr>
</tbody>
</table>

<p>After 3:25 PM, Level 1 and Level 2 halts do not trigger, allowing the market to close at its natural level. Level 3 halts the market at any time. Each level can only be triggered once per day — after the Level 1 halt and resumption, a further decline to 13% triggers Level 2, but Level 1 cannot trigger again.</p>

<p>The most notable recent activation was March 9, 2020, when the S&P 500 dropped 7% within minutes of the open amid COVID-19 pandemic fears. The Level 1 breaker halted trading for 15 minutes. It triggered again on March 12 and March 16 of the same week. Level 2 and Level 3 have never been triggered in the current framework.</p>

<h2 id="luld">Limit Up-Limit Down (LULD) for Individual Stocks</h2>

<p>While market-wide circuit breakers address systemic crashes, the <strong>Limit Up-Limit Down (LULD)</strong> mechanism handles individual stock volatility. Implemented after the May 2010 "Flash Crash" (when some stocks briefly traded at $0.01 or $100,000), LULD establishes dynamic price bands around each stock's reference price.</p>

<p>The reference price is typically the average trading price over the preceding 5 minutes. The bands vary by security type and time of day:</p>

<ul>
<li><strong>S&P 500 and Russell 1000 stocks:</strong> 5% bands during regular hours, 10% in the opening and closing 15 minutes.</li>
<li><strong>Other NMS stocks above $3:</strong> 10% bands (20% in the opening/closing).</li>
<li><strong>Stocks below $3:</strong> The lesser of $0.75 or 75%.</li>
</ul>

<p>When a stock's price reaches the upper or lower band, trading enters a "limit state" — no trades can execute outside the band. If the price does not return within the bands within 15 seconds, a 5-minute trading halt is declared. This prevents the kind of flash crash events where algorithmic errors could send a stock to absurd prices.</p>

<h2 id="news-halts">Regulatory Halts</h2>

<p>Beyond automatic circuit breakers, exchanges can impose regulatory halts for pending news. When a company is about to release material information (earnings, merger announcement, FDA decision), the exchange may halt trading in advance so all participants receive the information simultaneously. These halts are coded T1 (news pending) or T2 (news dissemination). The company typically coordinates with the exchange to request the halt.</p>

<p>Regulatory halts also occur for unusual market activity — if a stock moves dramatically with no apparent news, the exchange may halt to investigate potential information leakage or manipulation. These halts are coded T12 (additional information requested by the exchange).</p>

<h2 id="effectiveness">Effectiveness and Criticism</h2>

<p>Circuit breakers are controversial. Proponents argue they prevent catastrophic, panic-driven price dislocations and give participants time to process information. Critics argue they create "magnet effects" — as the index approaches a circuit breaker level, traders rush to sell before the halt, accelerating the decline. Research on the March 2020 events shows mixed results: the halts provided temporary relief, but the market continued declining after each resumption.</p>

<p>For investors using Brefyr to track filings, circuit breaker halts often coincide with significant SEC filings — an <a href="/glossary/8k-filing">8-K</a> disclosing material events, an earnings release, or a regulatory action. Understanding that a halt preceded a filing adds context: the company may have coordinated the halt to ensure fair dissemination of information before trading resumed.</p>
`,
};
