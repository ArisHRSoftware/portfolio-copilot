import type { GlossaryTerm } from "../../types";

export const termMarketCapitalizationHi: GlossaryTerm = {
  slug: "market-capitalization",
  term: "Market Capitalization (मार्केट कैपिटलाइज़ेशन)",
  title: "Market Capitalization — Company का Size कैसे Measure करें",
  shortDefinition:
    "Market capitalization (market cap) company का total market value है — share price × total outstanding shares। यह company के size को measure करने का standard metric है।",
  metaDescription:
    "Market capitalization क्या है? Large-cap, mid-cap, small-cap categories समझें। US stocks में market cap कैसे check करें और भारतीय निवेशकों के लिए क्यों important है।",
  wordCount: 550,
  category: "Financial Metrics",
  tags: ["valuation", "market-cap", "small-cap", "large-cap"],
  relatedSlugs: ["pe-ratio", "enterprise-value", "small-cap", "book-value"],
  relatedTerms: ["pe-ratio", "enterprise-value", "small-cap", "book-value"],
  faq: [
    {
      question: "Market cap कैसे calculate करते हैं?",
      answer:
        "Market Cap = Current Share Price × Total Outstanding Shares। अगर company का stock $50 है और 1 billion shares outstanding हैं, तो market cap = $50 billion। यह number हर दिन change होता है क्योंकि stock price change होती है।",
    },
    {
      question: "Large-cap, mid-cap, small-cap में क्या difference है?",
      answer:
        "US market में: Large-cap = $10 billion+, Mid-cap = $2-10 billion, Small-cap = $300M-2 billion, Micro-cap = $50-300M। India में thresholds बहुत अलग हैं — SEBI definition से top 100 = large-cap, 101-250 = mid-cap, 251+ = small-cap। US $2 billion small-cap India में large-cap होगा।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Market capitalization (commonly "market cap") company के total market value को measure करता है। Calculation simple है:</p>

<p><strong>Market Cap = Current Share Price × Total Outstanding Shares</strong></p>

<p>Apple की share price $230 है और ~15.5 billion shares outstanding हैं, तो market cap ≈ <strong>$3.5 trillion</strong> — दुनिया की सबसे valuable company।</p>

<h2>Market Cap Categories (US Market)</h2>

<table>
<tr><th>Category</th><th>Market Cap Range</th><th>Examples</th></tr>
<tr><td><strong>Mega-cap</strong></td><td>$200 billion+</td><td>Apple, Microsoft, NVIDIA, Amazon</td></tr>
<tr><td><strong>Large-cap</strong></td><td>$10-200 billion</td><td>Adobe, Uber, Goldman Sachs</td></tr>
<tr><td><strong>Mid-cap</strong></td><td>$2-10 billion</td><td>Crocs, Five Below, Dutch Bros</td></tr>
<tr><td><strong>Small-cap</strong></td><td>$300M-2 billion</td><td>Thousands of under-covered companies</td></tr>
<tr><td><strong>Micro-cap</strong></td><td>$50-300 million</td><td>Often zero analyst coverage</td></tr>
</table>

<h2>Market Cap vs Enterprise Value</h2>

<p>Market cap company का equity value है — shareholders का portion। Enterprise Value (EV) पूरी company का value है including debt:</p>

<p><strong>EV = Market Cap + Total Debt - Cash</strong></p>

<p>Company acquisitions में EV ज़्यादा relevant है क्योंकि acquirer को debt भी take over करनी होती है। लेकिन day-to-day stock analysis में market cap ज़्यादा commonly use होता है।</p>

<h2>Small-Cap Advantage</h2>

<p>Brefyr specifically small-cap stocks ($300M-2 billion market cap) पर focus करता है। क्यों?</p>

<ul>
<li><strong>Under-coverage:</strong> Large-cap stocks (Apple, Tesla) पर 40+ analysts हैं। Small-caps पर often <strong>zero</strong> analyst coverage — information advantage exists।</li>
<li><strong>Growth potential:</strong> $500 million market cap company $5 billion बन सकती है (10x return)। $3 trillion Apple के लिए 10x होना mathematically near-impossible।</li>
<li><strong>SEC filing edge:</strong> Small-cap 10-K दिनों तक unread रहती है। AI-analyzed filings से early insight मिलती है।</li>
</ul>

<h2>भारतीय निवेशकों के लिए Market Cap</h2>

<p><strong>India vs US thresholds:</strong> India में SEBI definition से top 100 companies = large-cap (Nifty 100)। US में $10 billion+ = large-cap। एक $2 billion US company "small-cap" है, लेकिन India में Rs 16,000 crore company definitely large-cap territory है। Categories directly compare न करें।</p>

<p><strong>RBI LRS context:</strong> RBI LRS scheme $250,000 annual limit है। इतने amount से US mid-cap या small-cap stocks में meaningful position बन सकती है — same amount large-cap में negligible होगा। Small-cap focus Indian retail investors के investment size के लिए more appropriate है।</p>

<p><strong>Currency effect:</strong> Market cap dollar-denominated है। INR depreciation (long-term trend) means dollar investments automatically INR terms में appreciate होती हैं — यह additional return है market cap growth के ऊपर।</p>

<p>Brefyr पर हर stock page पर market cap दिखता है, और EDGAR XBRL Frames API से public float data automatically update होती है।</p>
`,
};
