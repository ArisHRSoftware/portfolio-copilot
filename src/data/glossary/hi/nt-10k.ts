import type { GlossaryTerm } from "../../types";

export const termNT10KHi: GlossaryTerm = {
  slug: "nt-10k",
  term: "NT 10-K (एनटी 10-के)",
  title: "NT 10-K — Annual Filing Late होने की Notification और Investors के लिए क्या मतलब",
  shortDefinition:
    "NT 10-K (Form 12b-25) SEC के साथ file होती है जब company अपनी annual 10-K report original deadline तक submit नहीं कर सकती — 15 calendar days extension request करती है।",
  metaDescription:
    "NT 10-K filing क्या है? Companies late-filing notification क्यों file करती हैं, investors को क्या signal, और आगे क्या होता है।",
  wordCount: 420,
  category: "SEC Filings",
  tags: ["sec-filing", "late-filing", "annual-report", "edgar", "compliance"],
  relatedSlugs: ["10-k-filing", "nt-10q", "going-concern", "material-weakness", "sec-edgar"],
  relatedTerms: ["10-k-filing", "nt-10q", "going-concern", "material-weakness", "sec-edgar"],
  faq: [
    { question: "NT 10-K कितना extra time देती है?", answer: "15 calendar days extension original deadline से। Large accelerated filer December 31 fiscal year: original ~March 1, extended ~March 16। Extended deadline पर भी file न हो = delinquent — second extension available नहीं। SEC delinquency letter, exchange delisting proceedings possible।" },
    { question: "क्या NT 10-K हमेशा red flag है?", answer: "Usually हाँ — severity vary। Administrative: large acquisition near year-end, PPA extra time। Serious: auditor issues requiring restatement, material weakness, management-audit committee disagreement। NT 10-K explanation carefully read और recent 8-K filings cross-reference।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>NT 10-K public company dashboard पर warning light है। Form 12b-25 SEC के साथ file — company annual reporting deadline meet नहीं कर सकती, more time चाहिए। Filing brief — typically 1-2 pages — implications significant। Audited financial statements time पर produce नहीं कर सकती = accounting problems, internal control weaknesses, auditor disagreements, या दूसरे issues।</p>

<p>Indian context: India में SEBI regulations listed companies को quarterly/annual filings timely submit करने require करती हैं — late filing penalties लगती हैं। US system similar — NT filing formal notification mechanism।</p>

<h2>NT 10-K Process</h2>
<p>Company 10-K deadline miss determine करे तो NT 10-K original due date के one business day बाद तक file। Rule 12b-25 Exchange Act — formally notify SEC/market, 15-day extension request। Company explain करे delay reason: ongoing audit, pending accounting, anticipated changes, previously reported figures changes। Extension automatic — SEC review/approve नहीं करती। Extended deadline miss = delinquent, no further NT remedy।</p>

<h2>Common Reasons</h2>
<p><strong>Audit complications:</strong> सबसे common — external auditor audit complete नहीं कर पाया। Complex issues, newly acquired subsidiary, accounting disagreements।</p>
<p><strong>Restatements:</strong> Prior-year financials restate — additional audit work, revised statements, new Sarbanes-Oxley certifications।</p>
<p><strong>Material weaknesses:</strong> Internal controls weakness identified — remediation और impact assessment time लेता है।</p>
<p><strong>Management changes:</strong> CFO/controller departure near deadline — replacement review/certify time।</p>
<p><strong>M&A:</strong> Year-end near large acquisitions — PPA, fair value, separate audits push timeline।</p>
<p><strong>Going concern:</strong> Substantial doubt about continuing — creditor negotiations, restructuring। Most serious category।</p>

<h2>NT 10-K कैसे Read करें</h2>
<p><strong>Reason:</strong> Administrative (acquisition accounting) less concerning vs accounting (restatements, weakness, auditor disagreement)। Vague "additional time" = yellow flag।</p>
<p><strong>Changes expected?</strong> Revenue, net income, EPS prior year changes anticipated — late filing bad news masking?</p>
<p><strong>Pattern?</strong> First-time vs third consecutive — chronic late filers increased scrutiny, potential delisting।</p>

<h2>Consequences</h2>
<p><strong>S-3 eligibility loss:</strong> Short-form registration lost — future capital raises slower, expensive। <strong>Exchange action:</strong> NYSE/NASDAQ deficiency notice, potential delisting। <strong>SEC enforcement:</strong> Registration revoke, trading suspend possible। <strong>Loan covenant violations:</strong> Audited financials delivery deadline miss = default trigger, debt acceleration possible।</p>

<h2>Investors क्या करें</h2>
<p>Investigate — not necessarily sell immediately। NT narrative read। Recent 8-K check — auditor changes, management departures, restatements। Most recent 10-Q review accounting issues hints। No satisfactory explanation + late filing history = reduce position prudent।</p>

<p>Brefyr पर late-filing notifications material events flag — AI-generated context stated reason और potential significance explain।</p>
`,
};
