import type { GlossaryTerm } from "../../types";

export const termGaapHi: GlossaryTerm = {
  slug: "gaap",
  term: "GAAP (जीएएपी)",
  title: "GAAP — US Public Companies की Financial Statements के पीछे का Accounting Rulebook",
  shortDefinition:
    "Generally Accepted Accounting Principles (GAAP) FASB द्वारा established standardized accounting rules, standards, और procedures का set है जो सभी US public companies को financial statements prepare करते समय follow करना होता है।",
  metaDescription:
    "GAAP क्या है? US accounting standards कैसे काम करते हैं, कौन set करता है, key principles, GAAP vs IFRS difference, और भारतीय निवेशकों के लिए क्यों important है।",
  wordCount: 430,
  category: "Accounting & Audit",
  tags: ["gaap", "accounting-standards", "fasb", "financial-statements", "reporting"],
  relatedSlugs: ["ifrs", "non-gaap-measures", "regulation-sx", "audit-opinion", "restatement"],
  relatedTerms: ["ifrs", "non-gaap-measures", "regulation-sx", "audit-opinion", "restatement"],
  faq: [
    {
      question: "GAAP standards कौन set करता है?",
      answer:
        "Financial Accounting Standards Board (FASB) — independent, private-sector organization। FASB Accounting Standards Updates (ASUs) issue करती है जो Accounting Standards Codification (ASC) में codify होती हैं — US GAAP का single authoritative source। SEC statutory authority रखती है लेकिन historically standard-setting FASB को delegate करती है।",
    },
    {
      question: "GAAP exist करती है तो companies non-GAAP measures क्यों report करती हैं?",
      answer:
        "कई companies मानती हैं कि GAAP measures अकेले operating performance पूरी तरह convey नहीं करतीं। Stock-based compensation, acquired intangibles amortization, restructuring charges जो management non-recurring मानती है — इन्हें exclude करके 'adjusted' figures present करती हैं। SEC permit करती है लेकिन clearly label, GAAP से reconcile, और GAAP से ज़्यादा prominent नहीं present करना ज़रूरी है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Generally Accepted Accounting Principles — universally GAAP कहलाती हैं — common accounting rules और standards का set है जो US public companies को financial statements prepare करते समय follow करना होता है। GAAP ensure करती है कि financial statements consistent, comparable basis पर बनें — investors different companies की performance compare कर सकें confidence से कि same measurement rules apply होती हैं। बिना GAAP, हर company अपने accounting methods use करती और cross-company comparison impossible होता।</p>

<p>Indian context: India में Ind AS (Indian Accounting Standards) IFRS-converged हैं। US GAAP से कुछ differences हैं — Indian investors को US stocks analyze करते समय GAAP principles समझना helpful है।</p>

<h2>Core GAAP Principles</h2>

<p><strong>Accrual basis:</strong> Revenue earn होने पर recognize होती है (cash receive होने पर नहीं), expenses incur होने पर recognize होती हैं (pay होने पर नहीं)। Matching principle revenue को उसे generate करने वाली costs से pair करता है same period में।</p>

<p><strong>Going concern:</strong> Financial statements assume करती हैं company indefinitely operate करती रहेगी — assets liquidation value पर नहीं बल्कि cost/fair value पर value होती हैं।</p>

<p><strong>Consistency:</strong> Same accounting methods period-to-period apply होने चाहिए। Change हो तो disclose, justify, और prior periods restate करना पड़ सकता है।</p>

<p><strong>Materiality:</strong> Reasonable investor के decisions influence करने वाली information ही disclose ज़रूरी। Trivial details aggregate या omit हो सकती हैं।</p>

<p><strong>Conservatism:</strong> Uncertainty में GAAP lower asset values और higher liabilities favor करती है — losses probable हों तो recognize, gains realized होने पर ही।</p>

<h2>Key GAAP Standards</h2>

<p><strong>ASC 606 — Revenue Recognition:</strong> Five-step framework सभी industries के लिए। Revenue recognition सबसे common area है financial statement manipulation और restatement का।</p>

<p><strong>ASC 842 — Leases:</strong> ज़्यादातर leases balance sheet पर recognize — right-of-use assets और lease liabilities। पहले operating leases off-balance-sheet थीं।</p>

<p><strong>ASC 350 — Goodwill:</strong> Acquisitions से goodwill और intangible assets की accounting, annual impairment testing सहित। Billions dollar impairment charges signal करती हैं कि acquisition expected value deliver नहीं कर पाई।</p>

<p><strong>ASC 718 — Stock Compensation:</strong> Stock options और RSUs की fair value expense करना vesting period में। Tech companies के reported expenses significantly increase हुए।</p>

<h2>GAAP vs IFRS</h2>

<p>IFRS ज़्यादातर countries US के बाहर use करती हैं। Key differences: GAAP LIFO allow करती है, IFRS नहीं। IFRS development costs capitalize करती है, GAAP expense। IFRS impairment reversals allow (goodwill छोड़कर), GAAP prohibit। SEC foreign private issuers से IFRS financial statements बिना GAAP reconciliation accept करती है।</p>

<h2>SEC Filings में GAAP</h2>

<p>10-K और 10-Q financial statements GAAP accordance में prepare होनी चाहिए। Auditor's report confirm करती है GAAP compliance। Non-GAAP measures present करें तो GAAP reconciliation ज़रूरी।</p>

<p>Brefyr 7,600+ companies की GAAP financial statements process करती है 10-K और 10-Q filings से — consistent cross-company comparison enable करती है।</p>
`,
};
