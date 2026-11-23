import type { GlossaryTerm } from "../../types";

export const termNT10QHi: GlossaryTerm = {
  slug: "nt-10q",
  term: "NT 10-Q (एनटी 10-क्यू)",
  title: "NT 10-Q — Quarterly Filing Late होने की Notification",
  shortDefinition:
    "NT 10-Q (Form 12b-25) SEC filing है जब company quarterly 10-Q report time पर submit नहीं कर सकती — 5 calendar days extension request करती है।",
  metaDescription:
    "NT 10-Q filing क्या है? Companies quarterly deadlines क्यों miss, investors क्या watch करें, NT 10-K से कैसे different।",
  wordCount: 410,
  category: "SEC Filings",
  tags: ["sec-filing", "late-filing", "quarterly-report", "edgar", "compliance"],
  relatedSlugs: ["10-q-filing", "nt-10k", "10-k-filing", "material-weakness", "sec-edgar"],
  relatedTerms: ["10-q-filing", "nt-10k", "10-k-filing", "material-weakness", "sec-edgar"],
  faq: [
    { question: "NT 10-Q कितना extra time?", answer: "5 calendar days extension — NT 10-K 15 days से shorter। Quarterly reports unaudited financials (limited review) — SEC expects less additional time। Extended 5-day window miss = delinquent।" },
    { question: "NT 10-Q ज़्यादा serious है या NT 10-K?", answer: "Context differ। 10-K audited — late usually auditor issues। 10-Q unaudited limited review — even unaudited quarterly financials produce नहीं कर सकती = financial close process broken — potentially more fundamental problem। Shorter extension (5 vs 15 days) = tighter margin।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>NT 10-Q same function serve करती है NT 10-K जैसी लेकिन quarterly reports के लिए। Form 12b-25 SEC file — company 10-Q deadline meet नहीं करेगी, brief extension request। Late quarterly report less significant लग सकती है annual से, लेकिन same underlying issues — accounting complications, internal control problems, management disruption — और same investor attention deserve करती है।</p>

<p>Indian context: SEBI quarterly results filing deadlines strict — penalties apply। US system NT mechanism provide करती है formal notification — same accountability principle।</p>

<h2>Process</h2>
<p>NT 10-Q original deadline के one business day बाद तक file। Same Form 12b-25, 10-Q box check। Narrative explanation delay reason, significant changes expected prior year compared। Key difference: 5 calendar days extension (NT 10-K 15 days)। Quarterly unaudited — less additional time expected।</p>

<h2>Common Reasons</h2>
<p><strong>Prior period restatement:</strong> Error discover → restate → current quarter filing push deadline past।</p>
<p><strong>Internal control issues:</strong> Material weakness → additional procedures before Sarbanes-Oxley certify।</p>
<p><strong>Complex transactions:</strong> Major acquisition/divestiture/restructuring — consolidation, charges calculation, discontinued operations accounting।</p>
<p><strong>Personnel disruptions:</strong> CFO/controller departure — replacement learning company systems।</p>
<p><strong>Accounting standard changes:</strong> New standards adoption (ASC 606, ASC 842) — first quarter especially prone delays।</p>

<h2>Consequences</h2>
<p><strong>S-3 eligibility loss:</strong> Exchange Act filings current नहीं = shelf registration lost।</p>
<p><strong>Exchange notices:</strong> NASDAQ/NYSE deficiency notices, persistent delinquency = suspension/delisting।</p>
<p><strong>Credit defaults:</strong> Loan agreements quarterly financial delivery deadlines — miss = technical default।</p>
<p><strong>Investor confidence:</strong> Small-cap especially — sharp selloff, uncertainty without current financials, analyst estimates difficult maintain।</p>

<h2>Read कैसे करें</h2>
<p>Same framework NT 10-K: stated reason (administrative vs accounting), changes expected box, filing history (first-time vs consecutive), recent 8-K cross-reference। Company size matter — small-cap lean teams susceptible vs large-cap resources have almost any circumstances।</p>

<h2>NT 10-Q vs NT 10-K</h2>
<p>Same Form 12b-25, similar consequences। Extension 5 days vs 15 days। Unaudited quarterly vs audited annual। NT 10-Q followed by NT 10-K same fiscal year = particularly strong warning — persistent financial reporting infrastructure problem।</p>

<p>Brefyr पर late quarterly filing notifications compliance events alongside flag — potential issues alert investors को before financial statements appear।</p>
`,
};
