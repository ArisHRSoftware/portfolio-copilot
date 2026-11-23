import type { GlossaryTerm } from "../../types";

export const termIfrsHi: GlossaryTerm = {
  slug: "ifrs",
  term: "IFRS (आईएफआरएस)",
  title: "IFRS — 140+ Countries में Use होने वाले Global Accounting Standards",
  shortDefinition:
    "International Financial Reporting Standards (IFRS) IASB द्वारा issue किए गए accounting standards हैं जो 140+ countries में primary financial reporting framework के रूप में use होते हैं — financial statements के लिए एक common global language।",
  metaDescription:
    "IFRS क्या है? International accounting standards US GAAP से कैसे compare करते हैं, key differences, और IFRS-reporting companies SEC के साथ कैसे file करती हैं।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["ifrs", "accounting-standards", "iasb", "international-reporting", "gaap-comparison"],
  relatedSlugs: ["gaap", "non-gaap-measures", "regulation-sx", "audit-opinion"],
  relatedTerms: ["gaap", "non-gaap-measures", "regulation-sx", "audit-opinion"],
  faq: [
    {
      question: "Foreign companies SEC filing में IFRS use कर सकती हैं?",
      answer:
        "हाँ। Foreign private issuers (FPIs) IASB issued IFRS के under prepared financial statements SEC के साथ file कर सकती हैं, बिना GAAP reconciliation। 2007 से SEC ने adopt किया। लेकिन US domestic companies को अभी भी US GAAP use करना ज़रूरी — IFRS adopt नहीं हुई domestic filers के लिए।",
    },
    {
      question: "IFRS और GAAP में सबसे बड़े differences जो investors affect करें?",
      answer:
        "Inventory: GAAP LIFO allow, IFRS नहीं। Development costs: IFRS capitalize, GAAP expense — tech companies ज़्यादा profitable दिख सकती हैं IFRS में। Impairment: IFRS reversals allow (goodwill छोड़कर), GAAP prohibit। Principles vs rules: IFRS ज़्यादा judgment allow, GAAP ज़्यादा specific guidance।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>International Financial Reporting Standards (IFRS) United States के बाहर ज़्यादातर countries में public companies use करती हैं। International Accounting Standards Board (IASB), London based, issue करती है। 140+ jurisdictions में required या permitted — EU, UK, Australia, Canada, Japan (optional), और Asia, Africa, Latin America।</p>

<p>Indian context: India ने Ind AS adopt किए हैं जो largely IFRS-converged हैं। तो Indian investors IFRS principles से पहले से familiar हैं। US stocks analyze करते समय GAAP और IFRS differences समझना important — especially foreign companies (Alibaba, Shell) जो IFRS use करती हैं US listing में।</p>

<h2>Principles-Based vs Rules-Based</h2>

<p>सबसे fundamental difference: IFRS principles-based — broad principles, professional judgment पर rely। GAAP rules-based — detailed, specific guidance, bright-line tests। IFRS ज़्यादा flexibility लेकिन variability भी; GAAP ज़्यादा consistency लेकिन form over substance structuring possible।</p>

<h2>Key Differences for Investors</h2>

<p><strong>Inventory valuation:</strong> GAAP LIFO permit करती है (most recent costs, lower profits during inflation)। IFRS LIFO prohibit। LIFO-using GAAP companies lower inventory values और lower profits दिखा सकती हैं IFRS comparison में।</p>

<p><strong>R&D:</strong> GAAP almost all R&D expense as incurred। IFRS research costs expense लेकिन development costs certain criteria meet करने पर capitalize और amortize। IFRS companies higher reported assets और short-term profits दिखा सकती हैं same R&D spending पर।</p>

<p><strong>Asset impairment:</strong> GAAP two-step process, impairment permanent (no reversal)। IFRS one-step, reversals allowed (goodwill छोड़कर) conditions improve होने पर।</p>

<p><strong>Revenue recognition:</strong> ASC 606 (GAAP) और IFRS 15 — same five-step model, successful convergence project। Minor interpretive differences still possible।</p>

<p><strong>Lease accounting:</strong> GAAP (ASC 842) operating और finance leases distinguish; IFRS (IFRS 16) virtually all leases finance leases treat — higher depreciation + interest expense (single operating expense line instead)।</p>

<h2>Convergence Effort</h2>

<p>Decades FASB और IASB ने convergence projects चलाए — shared standards revenue recognition और leases के लिए बनीं। लेकिन full convergence achieve नहीं हुई, SEC ने US adoption stall किया। Practical reality: दो frameworks coexist foreseeable future तक।</p>

<h2>SEC Filings में IFRS</h2>

<p><strong>20-F:</strong> Foreign private issuers annual report, IFRS use possible। <strong>6-K:</strong> Interim reports IFRS under। <strong>F-1:</strong> Registration statement IFRS financials। <strong>Auditor's report:</strong> "IFRS as issued by the IASB" compliance state।</p>

<p>Brefyr GAAP और IFRS दोनों frameworks के under filed financial statements process करती है — full universe SEC-reporting companies analyze करें regardless of accounting standard।</p>
`,
};
