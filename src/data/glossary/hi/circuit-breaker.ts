import type { GlossaryTerm } from "../../types";

export const termCircuitBreakerHi: GlossaryTerm = {
  slug: "circuit-breaker",
  term: "Circuit Breaker (सर्किट ब्रेकर / Trading Halt)",
  title: "Circuit Breaker — Market Panics को Automatically Pause करने वाले Trading Halts",
  shortDefinition:
    "Circuit breakers automatic mechanisms हैं जो exchange या specific stock में trading temporarily halt करते हैं जब prices predefined thresholds से beyond move करें, panic-driven market crashes prevent करने के लिए designed।",
  metaDescription:
    "Stock markets में circuit breakers क्या हैं? Market-wide halts (Levels 1-3), individual stock LULD halts, 1987 crash के बाद creation, और volatility में effectiveness।",
  wordCount: 480,
  category: "Market Structure",
  tags: ["circuit-breaker", "trading-halt", "market-structure", "volatility", "regulation", "luld"],
  relatedSlugs: ["short-squeeze", "gamma-squeeze", "bid-ask-spread", "after-hours-trading"],
  relatedTerms: ["short-squeeze", "gamma-squeeze", "bid-ask-spread", "after-hours-trading"],
  faq: [
    {
      question: "Current market-wide circuit breaker levels क्या हैं?",
      answer:
        "Market-wide circuit breakers S&P 500 prior day close से decline पर based: Level 1: 7% decline → 15-minute halt (3:25 PM ET से पहले)। Level 2: 13% decline → 15-minute halt (same time restriction)। Level 3: 20% decline → बाकी दिन trading halt। March 9, 2020 (COVID-19) पर Level 1 trigger। India में NSE/BSE पर भी similar system — Sensex/Nifty 10%, 15%, 20% decline पर circuit breakers।",
    },
    {
      question: "LULD halt क्या है और circuit breaker से कैसे different?",
      answer:
        "LULD (Limit Up-Limit Down) individual stocks के लिए है, entire market नहीं। Reference price (preceding 5 min average) around specified price bands set। S&P 500 stocks: 5% bands; others: 10-20%। Price band hit → 15-second 'limit state'। 15 seconds में bands में return नहीं → 5-minute halt। India में individual stock circuit breakers 5%, 10%, 20% daily limits पर operate करते हैं — concept similar, thresholds different।",
    },
    {
      question: "Circuit breaker halt में trade कर सकते हैं?",
      answer:
        "नहीं। Halt के दौरान affected security (या entire market, market-wide halts में) पर US exchange पर कोई trade execute नहीं। Existing limit orders book में रहते हैं fill नहीं हो सकते। Market orders halt के दौरान queue होते हैं reopening पर execution के लिए। Reopening auction process daily opening जैसा — accumulated buy/sell interest single clearing price पर match।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Circuit breakers safety mechanisms हैं जो trading pause करते हैं जब prices बहुत fast move करें। October 1987 "Black Monday" crash के बाद introduce हुए, जब Dow Jones Industrial Average single day में 22.6% fall — कोई pause या intervention नहीं। Idea straightforward: जब fear और momentum prices fundamental justification से far beyond drive करें, temporary halt participants को information assess, margin calls meet, और orderly trading restore करने का time देता है।</p>

<h2>Market-Wide Circuit Breakers</h2>

<p>SEC Rule 80B तीन levels establish करता है S&P 500 prior day close से decline based:</p>

<table>
<thead><tr><th>Level</th><th>Trigger</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>7% decline</td><td>15-minute halt (3:25 PM ET से पहले)</td></tr>
<tr><td>Level 2</td><td>13% decline</td><td>15-minute halt (same time restriction)</td></tr>
<tr><td>Level 3</td><td>20% decline</td><td>बाकी दिन trading halt</td></tr>
</tbody>
</table>

<p>3:25 PM के बाद Level 1/2 halt trigger नहीं — market natural level पर close। Level 3 any time halt। हर level एक बार/day trigger। Most notable recent activation: March 9, 2020 — COVID-19 fears से S&P 500 minutes में 7%+ drop। Same week March 12 और 16 पर भी trigger।</p>

<h2>Limit Up-Limit Down (LULD) Individual Stocks के लिए</h2>

<p>Market-wide circuit breakers systemic crashes address करते हैं; <strong>LULD</strong> mechanism individual stock volatility handle करता है। May 2010 "Flash Crash" के बाद implement (जब कुछ stocks briefly $0.01 या $100,000 पर trade) — dynamic price bands each stock reference price around set।</p>

<ul>
<li><strong>S&P 500 / Russell 1000 stocks:</strong> Regular hours 5% bands, opening/closing 15 min 10%।</li>
<li><strong>Other NMS stocks $3+:</strong> 10% bands (opening/closing 20%)।</li>
<li><strong>$3 से नीचे stocks:</strong> Lesser of $0.75 या 75%।</li>
</ul>

<p>Stock price upper/lower band reach → "limit state" — band outside कोई trade नहीं। 15 seconds में bands return नहीं → 5-minute trading halt।</p>

<h2>Regulatory Halts</h2>

<p>Automatic circuit breakers से beyond, exchanges pending news के लिए regulatory halts impose कर सकते हैं। Company material information release करने वाली हो (earnings, merger, FDA decision) → exchange advance में trading halt ताकि सभी participants simultaneously information receive करें। Unusual market activity (dramatic move without apparent news) पर भी exchange halt लगा सकता है — information leakage या manipulation investigate।</p>

<h2>भारतीय निवेशकों के लिए — NSE/BSE Circuit Breakers</h2>

<p>India में NSE/BSE पर भी robust circuit breaker system है। Market-wide circuit breakers Sensex/Nifty movement based: 10% decline → 45 min halt (1:00 PM से पहले), 15% → 1 hr 45 min, 20% → trading halt for day। Individual stock circuit breakers daily price limits (5%, 10%, 20%) set करते हैं — US LULD concept जैसा लेकिन fixed daily limits। Indian investors US market circuit breakers समझें — earnings season और volatility events में relevant, Brefyr पर filings track करने पर halt-filing correlation context add करता है।</p>
`,
};
