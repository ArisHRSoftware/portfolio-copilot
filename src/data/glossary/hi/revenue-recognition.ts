import type { GlossaryTerm } from "../../types";

export const termRevenueRecognitionHi: GlossaryTerm = {
  slug: "revenue-recognition",
  term: "Revenue Recognition (रेवेन्यू रिकग्निशन)",
  title: "Revenue Recognition — Companies Revenue कब और कैसे Book करती हैं",
  shortDefinition:
    "Revenue recognition accounting rule है जो determine करता है कि company revenue कब report कर सकती है। ASC 606 standard 5-step model prescribe करता है।",
  metaDescription:
    "Revenue recognition क्या है? ASC 606 standard समझें — companies revenue कब book करती हैं, aggressive vs conservative recognition, और 10-K में red flags कैसे spot करें।",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["revenue-recognition", "asc-606", "gaap", "accounting"],
  relatedSlugs: ["10-k-filing", "ebitda", "free-cash-flow", "material-weakness"],
  relatedTerms: ["10-k-filing", "ebitda", "free-cash-flow", "material-weakness"],
  faq: [
    {
      question: "Aggressive revenue recognition कैसे spot करें?",
      answer: "10-K में check करें: (1) Revenue faster बढ़ रहा है accounts receivable से? Red flag — revenue booked लेकिन cash collect नहीं। (2) Revenue recognition policy बदली? Note 1/2 में changes। (3) Channel stuffing — quarter-end में suddenly revenue spike।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Revenue recognition accounting का सबसे critical और complex area है। Simple question: <strong>company revenue कब book करे?</strong> Product ship होने पर? Customer pay करने पर? Contract sign होने पर? Answer हमेशा obvious नहीं, और companies इस ambiguity का फ़ायदा उठा सकती हैं।</p>

<h2>ASC 606 — 5-Step Model</h2>

<p>US GAAP standard ASC 606 (Revenue from Contracts with Customers) 5 steps prescribe करता है:</p>

<ol>
<li><strong>Contract identify करें</strong> — customer के साथ enforceable agreement</li>
<li><strong>Performance obligations identify करें</strong> — contract में कौन-कौन से deliverables promised</li>
<li><strong>Transaction price determine करें</strong> — कितना payment expected</li>
<li><strong>Price allocate करें</strong> — multiple deliverables में price divide</li>
<li><strong>Revenue recognize करें</strong> — जब obligation satisfied हो (product delivered, service performed)</li>
</ol>

<h2>Investors के लिए क्यों Matters</h2>

<p><strong>Revenue manipulation</strong> accounting fraud का सबसे common form है। Companies revenue "pull forward" कर सकती हैं (future quarter का revenue current quarter में book) या "channel stuff" (quarter-end में distributors को extra inventory push करना)।</p>

<p><strong>Red flags 10-K में:</strong></p>
<ul>
<li>Accounts receivable revenue से faster बढ़ रहा — revenue booked लेकिन cash nहीं आया</li>
<li>Revenue recognition policy change — Note 1 या 2 carefully पढ़ें</li>
<li>Deferred revenue बढ़ रहा — positive signal (money received in advance)</li>
<li>Quarter-end revenue spikes — potential channel stuffing</li>
</ul>

<h2>SaaS Companies: Unique Considerations</h2>

<p>Software/SaaS companies (Salesforce, Adobe, Microsoft 365) subscription revenue recognize करती हैं <strong>over time</strong>, not upfront। $1,200 annual subscription = $100/month revenue। Deferred revenue (advance payment) balance sheet पर liability है — high deferred revenue actually positive signal है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Ind-AS 115 (IFRS 15 based) similar 5-step model follow करता है। Indian IT companies (Infosys, TCS) ने same transition किया। US stocks analyze करते समय 10-K Note 1 (significant accounting policies) ज़रूर पढ़ें — revenue recognition policy details वहाँ मिलते हैं। Brefyr AI 10-K analysis unusual revenue patterns flag करती है।</p>
`,
};
