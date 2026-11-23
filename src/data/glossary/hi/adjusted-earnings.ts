import type { GlossaryTerm } from "../../types";

export const termAdjustedEarningsHi: GlossaryTerm = {
  slug: "adjusted-earnings",
  term: "Adjusted Earnings (समायोजित आय)",
  title: "Adjusted Earnings — Companies Core Performance दिखाने के लिए कौन से Numbers Use करती हैं",
  shortDefinition:
    "Adjusted earnings एक non-GAAP measure है जो reported net income को modify करती है management द्वारा non-recurring, non-cash, या core operations से unrelated माने जाने वाले items — जैसे restructuring charges, impairments, stock-based compensation — exclude करके।",
  metaDescription:
    "Adjusted earnings क्या हैं? Companies इन्हें कैसे calculate करती हैं, common adjustments, SEC reconciliation requirements, और GAAP vs adjusted earnings gap कैसे interpret करें।",
  wordCount: 430,
  category: "Accounting & Audit",
  tags: ["adjusted-earnings", "non-gaap", "earnings", "financial-reporting", "core-operations"],
  relatedSlugs: ["non-gaap-measures", "gaap", "pro-forma", "ebitda", "earnings-management"],
  relatedTerms: ["non-gaap-measures", "gaap", "pro-forma", "ebitda", "earnings-management"],
  faq: [
    {
      question: "Adjusted earnings से typically कौन से items exclude होते हैं?",
      answer:
        "Common exclusions: stock-based compensation expense, amortization of acquired intangible assets, restructuring और severance charges, acquisition और integration costs, litigation settlements, asset impairment charges, divestitures पर gains या losses, और इन adjustments के tax effects। हर company अपने adjusted earnings define करती है, इसलिए specific exclusions vary करते हैं। Earnings release में reconciliation table GAAP net income से adjusted earnings तक bridge दिखाती है।",
    },
    {
      question: "Valuation के लिए GAAP या adjusted earnings use करें?",
      answer:
        "दोनों, with judgment। GAAP earnings सभी economic costs reflect करती हैं — including real costs जैसे stock compensation जो shareholders dilute करती है। Adjusted earnings cash-generating ability better reflect कर सकती हैं अगर adjustments genuinely one-time हैं। अगर company की adjusted earnings consistently 40% higher रही हैं GAAP से पाँच साल से, तो adjustments persistent costs remove कर रही हैं, और adjusted figure sustainable profitability overstate करती है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Adjusted earnings एक company की self-defined profit measure है जो GAAP net income से start करती है और उन items add back (या subtract) करती है जो management के अनुसार company की ongoing, core operating performance reflect नहीं करते। Concept simple है: अगर एक company ने failed acquisition पर one-time $500 million impairment charge लिया, तो वो charge dramatically GAAP earnings reduce करता है quarter के लिए — लेकिन company की current operating trajectory reflect नहीं करता। Adjusted earnings वो charge remove करती हैं।</p>

<h2>Common Adjustments</h2>

<p><strong>Stock-based compensation (SBC):</strong> सबसे widespread और controversial adjustment। GAAP requires companies equity awards की fair value expense करें vesting period में। बहुत सी companies — especially technology में — यह expense add back करती हैं क्योंकि यह non-cash है। Critics argue करते हैं कि SBC real economic cost है (shareholders dilute होते हैं)।</p>

<p><strong>Amortization of acquired intangibles:</strong> Acquisition के बाद GAAP requires intangible assets (customer relationships, technology) amortize करना। Companies इसे add back करती हैं क्योंकि यह non-cash charge है acquisition accounting से driven।</p>

<p><strong>Restructuring charges:</strong> Facility closures, workforce reductions से associated costs। Companies इन्हें non-recurring मानती हैं। लेकिन अगर company हर दो साल restructure करती है, तो क्या ये truly non-recurring हैं?</p>

<p><strong>Impairment charges:</strong> Goodwill, intangible assets की write-downs। Non-cash लेकिन real economic losses represent करती हैं।</p>

<h2>GAAP-to-Adjusted Gap</h2>

<p>GAAP और adjusted earnings के बीच gap enormously vary करता है। Mature industrial company के लिए gap 5-10% हो सकता है। Fast-growing technology company के लिए adjusted earnings 50-100%+ higher हो सकती हैं GAAP से। Gap जितना wider, उतना ज़्यादा skepticism investors को apply करना चाहिए।</p>

<p>Gap over time track करें। अगर gap years से consistent रहा है roughly same magnitude पर, तो excluded items likely recurring nature के हैं, और adjusted figure sustainable profitability overstate कर सकती है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में listed companies Ind-AS (Indian Accounting Standards) follow करती हैं जो IFRS-converged हैं। Indian companies भी non-GAAP measures report करती हैं — जैसे "adjusted EBITDA" या "core profit"। US stocks analyze करते समय Indian investors को GAAP vs non-GAAP gap carefully evaluate करना चाहिए। TCS, Infosys जैसी India-listed companies US-listed peers से compare करते समय accounting framework differences ध्यान में रखें।</p>

<p>Wall Street consensus earnings estimates typically adjusted (non-GAAP) earnings correspond करती हैं, GAAP नहीं। जब company "beats estimates" करती है, तो comparison usually adjusted figure से होता है।</p>

<p>Brefyr GAAP और adjusted earnings दोनों SEC filings से extract करता है, reconciliation display करता है ताकि investors देख सकें exactly क्या exclude हो रहा है।</p>
`,
};
