import type { GlossaryTerm } from "../../types";

export const termQualifiedOpinionHi: GlossaryTerm = {
  slug: "qualified-opinion",
  term: "Qualified Audit Opinion (क्वालिफाइड ऑडिट ओपिनियन)",
  title: "Qualified Audit Opinion — जब Auditor कहता है 'Fair, Except For...'",
  shortDefinition:
    "Qualified audit opinion auditor report है कि financial statements fairly presented हैं in all material respects except specific identified issue — GAAP departure या audit scope limitation — material लेकिन pervasive enough नहीं adverse opinion warrant करने।",
  metaDescription:
    "Qualified opinion क्या है? 'Except for' language trigger क्या, clean और adverse opinions से कैसे different, SEC filings read करने वाले investors को क्या signal।",
  wordCount: 410,
  category: "Accounting & Audit",
  tags: ["qualified-opinion", "audit", "except-for", "scope-limitation", "gaap-departure"],
  relatedSlugs: ["audit-opinion", "adverse-opinion", "going-concern", "material-weakness", "gaap"],
  relatedTerms: ["audit-opinion", "adverse-opinion", "going-concern", "material-weakness", "gaap"],
  faq: [
    { question: "Qualified opinion कितनी serious?", answer: "Significant warning। Material issue — large enough affect investment decisions — लेकिन not so pervasive entire statements undermine। Large public companies uncommon (issues resolved audit process) — receiving one genuine disagreement company-auditor। Qualification paragraph carefully read — specific issue, financial impact, broader problems indicate।" },
    { question: "Qualified और adverse opinion difference?", answer: "Severity + pervasiveness। Qualified: material issue identified, rest fair — problem isolated। Adverse: misstatements material AND pervasive — statements as whole unreliable। Qualified: 'this specific wrong, rest okay।' Adverse: 'problems so widespread, statements unreliable।'" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Qualified audit opinion — "except for" opinion — auditor formal statement: financial statements fairly presented except specific identified issue। Qualification exactly identify: GAAP departure (accounting treatment auditor disagrees) या scope limitation (sufficient evidence obtain नहीं कर सका)। Issue material (investment decisions influence) लेकिन not pervasive (statements as whole reliability undermine नहीं)।</p>

<p>Indian context: India statutory audit opinions same framework follow — qualified, adverse, disclaimer। ICAI standards और US PCAOB standards parallel। Indian investors audit opinions importance familiar।</p>

<h2>GAAP Departure Qualification</h2>
<p>Company non-GAAP accounting method use और change refuse — auditor qualified issue। Qualification paragraph departure describe, financial statements effect quantify। Examples: non-GAAP method significant transaction, subsidiary properly consolidate fail, material misclassification, revenue recognition inconsistent ASC 606।</p>
<p>Company और auditor disagree, company position maintain। Auditor investors को both — reported numbers और auditor assessment what numbers should be — provide, investors own judgment।</p>

<h2>Scope Limitation Qualification</h2>
<p>Sufficient evidence obtain नहीं कर सका specific matter। Records destroyed/unavailable, company denied access, engagement accepted after inventory count, legal restrictions foreign subsidiaries examine prevent। Specific area qualify, rest confidence express।</p>

<h2>Qualified Opinions Rare क्यों</h2>
<p>Audit process iterative — potential issues raise with management/audit committee months before opinion। ज़्यादातर cases company corrects, adjusts, या additional evidence provide। Qualified opinion = resolution process failed — impasse material matter। Large companies rarity makes all more significant occurrence — Big 4 firm S&P 500 qualified = major event, stock price, SEC scrutiny, analyst downgrades।</p>

<h2>Investors कैसे Respond करें</h2>
<p>Qualification paragraph detail read। Financial impact quantify (auditor typically disclose effect assets/liabilities/income/equity)। Isolated या broader problems? Audit committee discussion proxy statement। Aggressive accounting? Scope limitation company control within = much more serious red flag vs external circumstances।</p>

<h2>SEC Filings</h2>
<p><strong>10-K:</strong> Qualified opinion auditor's report — basis for qualification separate paragraph। <strong>8-K:</strong> Change from prior clean opinion = material event possible। <strong>DEF 14A:</strong> Audit committee report discuss auditor relationship, may address qualification।</p>

<p>Brefyr audit opinions process all 10-K filings — opinion other than unqualified (clean) critical risk indicator flag — independent auditor issues identified alert।</p>
`,
};
