import type { GlossaryTerm } from "../../types";

export const termEnterpriseValueHi: GlossaryTerm = {
  slug: "enterprise-value",
  term: "Enterprise Value (एंटरप्राइज़ वैल्यू)",
  title: "Enterprise Value — Company की True Value कैसे Calculate करें",
  shortDefinition:
    "Enterprise Value (EV) company की total value है — market cap + total debt - cash। यह बताता है कि पूरी company acquire करने में कितना cost आएगा।",
  metaDescription:
    "Enterprise Value क्या है? Market cap से better valuation metric समझें — EV calculation, EV/EBITDA multiple, और भारतीय निवेशक इसे US stocks analyze करने में कैसे use करें।",
  wordCount: 500,
  category: "Financial Metrics",
  tags: ["valuation", "enterprise-value", "ev-ebitda", "acquisition"],
  relatedSlugs: ["market-capitalization", "ebitda", "pe-ratio", "free-cash-flow"],
  relatedTerms: ["market-capitalization", "ebitda", "pe-ratio", "free-cash-flow"],
  faq: [
    {
      question: "Enterprise Value market cap से better क्यों है?",
      answer:
        "Market cap सिर्फ equity value है। Enterprise Value debt भी include करता है। दो companies same market cap पर हो सकती हैं, लेकिन एक debt-free है और दूसरी पर $5 billion debt — EV बताएगा कि दूसरी actually ज़्यादा expensive है। M&A में acquirer debt भी take over करता है, इसलिए EV ज़्यादा realistic valuation है।",
    },
    {
      question: "EV/EBITDA multiple कैसे use करें?",
      answer:
        "EV/EBITDA = Enterprise Value ÷ EBITDA। Lower multiple = relatively cheaper। Same sector companies compare करें: Tech (15-25x), Financials (8-12x), Energy (5-8x)। अगर company sector average से significantly below trade कर रही है, या तो undervalued है या कोई problem है — 10-K पढ़कर verify करें।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Enterprise Value (EV) company की theoretical takeover price है — अगर आप आज पूरी company खरीदना चाहें तो कितना pay करना होगा।</p>

<p><strong>Formula:</strong> EV = Market Capitalization + Total Debt + Preferred Stock + Minority Interest - Cash & Cash Equivalents</p>

<p>Simple version: <strong>EV = Market Cap + Debt - Cash</strong></p>

<h2>EV क्यों Market Cap से Better है</h2>

<p>Example: Company A और Company B दोनों की market cap $10 billion है।</p>
<ul>
<li>Company A: Zero debt, $3 billion cash → EV = $7 billion</li>
<li>Company B: $5 billion debt, $1 billion cash → EV = $14 billion</li>
</ul>

<p>Market cap same है, लेकिन Company B actually <strong>दोगुनी expensive</strong> है — acquirer को $5 billion debt भी assume करनी होगी, और बदले में सिर्फ $1 billion cash मिलेगा।</p>

<h2>EV/EBITDA — The Gold Standard</h2>

<p>EV/EBITDA multiple corporate finance में सबसे widely used valuation metric है:</p>

<p><strong>EV/EBITDA = Enterprise Value ÷ EBITDA</strong></p>

<p>Industry benchmarks:</p>
<ul>
<li><strong>Software/SaaS:</strong> 15-30x (high growth, recurring revenue)</li>
<li><strong>Technology:</strong> 15-25x</li>
<li><strong>Healthcare:</strong> 12-18x</li>
<li><strong>Financial Services:</strong> 8-12x</li>
<li><strong>Energy:</strong> 5-8x (cyclical, capital-intensive)</li>
<li><strong>Retail:</strong> 8-14x</li>
</ul>

<p>Same sector companies compare करें। Tesla (25x EV/EBITDA) vs Ford (5x) — Tesla ज़्यादा expensive है, लेकिन growth rate भी ज़्यादा है।</p>

<h2>Negative Enterprise Value</h2>

<p>कभी-कभी EV negative हो जाती है — जब company की cash + investments उसकी market cap + debt से ज़्यादा होती है। यह extremely rare है और usually signal करता है कि market company को bankrupt मानता है (cash burn high है) या company विलय/acquisition target है।</p>

<h2>भारतीय निवेशकों के लिए EV</h2>

<p>Indian market analysis में भी EV/EBITDA commonly use होता है। US stocks analyze करते समय:</p>

<ul>
<li><strong>10-K se data:</strong> Total debt और cash balance sheet पर मिलता है (Item 8: Financial Statements)। Market cap Google Finance या Brefyr stock page पर।</li>
<li><strong>Currency neutral:</strong> EV/EBITDA एक ratio है — currency doesn't matter। India की company 15x EV/EBITDA और US की company 15x EV/EBITDA directly comparable हैं।</li>
<li><strong>Sector comparison:</strong> Indian IT companies (Infosys, TCS) 20-25x EV/EBITDA। Comparable US companies (Accenture, Cognizant) 15-20x। Indian premium partially justified by higher growth।</li>
</ul>

<p>Brefyr पर 10-K financial data से EV calculate करना easy है — balance sheet se debt और cash, market cap stock page se।</p>
`,
};
