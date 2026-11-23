import type { GlossaryTerm } from "../../types";

export const termForm144Hi: GlossaryTerm = {
  slug: "form-144",
  term: "Form 144 (फॉर्म 144)",
  title: "Form 144 — Restricted Securities की Proposed Sale का Notice Explained",
  shortDefinition: "Form 144 SEC filing है जो market notify करती है जब company insider या affiliate Rule 144 under restricted या control securities sell करने intend करता है, amount और approximate sale date specify करता है।",
  metaDescription: "SEC Form 144 क्या है? Insiders restricted stock upcoming sales कैसे signal करते हैं, Rule 144 requirements, और investors data कैसे use कर सकते हैं।",
  wordCount: 440, category: "SEC Filings", tags: ["sec-filing", "restricted-securities", "insider-selling", "edgar", "rule-144"],
  relatedSlugs: ["form-4", "insider-trading", "rsu", "beneficial-owner", "sec-edgar"], relatedTerms: ["form-4", "insider-trading", "rsu", "beneficial-owner", "sec-edgar"],
  faq: [{ question: "Restricted securities क्या हैं?", answer: "Shares unregistered private transactions acquire — private placement, employee stock option exercise, compensation। Resale restrictions public investors protect। Public market sell से पहले SEC register (expensive, time-consuming) या Rule 144 exemption (holding period, public information, volume limits, Form 144 file)।" },
  { question: "Form 144 file करना मतलब insider definitely sell करेगा?", answer: "नहीं। Intent notice, commitment नहीं। 90 days complete proposed sale। Market conditions change, plans change — fewer shares sell या sell ही नहीं। Practice में majority filings actual sales result — insider typically already broker engage और transaction plan कर चुका।" },
  { question: "Form 144 Form 4 से different कैसे?", answer: "Form 144 forward-looking notice filed before/concurrently — intent। Form 4 backward-looking transaction report two business days after sale — confirmation। दोनों sequence: Form 144 signal, Form 4 confirm। दोनों monitor = advance warning + confirmation insider selling।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Form 144 insider और affiliate stock sales का advance notice system। SEC with Rule 144 Securities Act 1933 under file, restricted या control securities sell intent market बताता है। Insider activity signal track करने वाले investors के लिए earliest possible warning selling आने वाली — actual transaction Form 4 पर appear होने से पहले।</p>

<h2>Rule 144 समझना</h2>
<p>Rule 144 safe harbor exemption — restricted securities और company affiliates public market sell without registration। Conditions:</p>
<ul>
<li><strong>Holding period:</strong> SEC-reporting companies six months minimum; non-reporting one year।</li>
<li><strong>Current public information:</strong> Company current SEC filings — late filing (NT 10-K) insider ability sell lock।</li>
<li><strong>Volume limitations:</strong> Affiliates — greater of 1% outstanding shares या average weekly trading volume four weeks, rolling three-month periods।</li>
<li><strong>Form 144:</strong> Three-month period 5,000 shares या $50,000 aggregate exceed तो file।</li>
</ul>

<h2>Form 144 Contains क्या</h2>
<p><strong>Seller name और relationship:</strong> Officer, director, 10% shareholder, affiliate।</p>
<p><strong>Shares to sell:</strong> Maximum number 90-day window — ceiling, commitment नहीं।</p>
<p><strong>Approximate sale date:</strong> Filing date या next business day typically।</p>
<p><strong>Total shares owned:</strong> Holdings before proposed sale — context provide। CEO selling 10,000 of 500,000 vs 10,000 of 15,000 different signal।</p>
<p><strong>How securities acquired:</strong> Private placement, option exercise, restricted grant — cost basis context।</p>

<h2>Investors कैसे Interpret करें</h2>
<p><strong>कौन sell कर रहा:</strong> CEO, CFO, founder sales ज़्यादा signal value lower officers।</p>
<p><strong>Size vs total holdings:</strong> 2% position routine diversification। 50%+ warrants attention, especially poor stock performance।</p>
<p><strong>Timing:</strong> Large equity offering बाद, disappointing earnings, negative regulatory decision — further deterioration expect।</p>
<p><strong>Pattern:</strong> Multiple insiders short period same company = trend। C-suite collectively sell — market pays attention।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में SEBI PIT Regulations insider trading disclosures govern — Form D disclosures required insider transactions। लेकिन US Form 144 advance notice mechanism India में directly equivalent नहीं — Indian regulations transaction after disclosure focus। US system pre-notification advantage provide करता है investors — Form 144 selling signal advance में, Form 4 confirmation।</p>

<p>Indian investors US stocks track करते समय Form 144 filings insider sentiment gauge — especially company-specific negative news period। Multiple insiders filing Form 144 simultaneously strong caution signal।</p>

<p>Brefyr Form 144 filings insider activity timeline में integrate, Form 4 transaction reports alongside complete view — intent से execution।</p>
`,
};
