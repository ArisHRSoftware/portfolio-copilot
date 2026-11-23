import type { GlossaryTerm } from "../../types";

export const termEarningsManagementHi: GlossaryTerm = {
  slug: "earnings-management",
  term: "Earnings Management (आय प्रबंधन)",
  title: "Earnings Management — Companies कैसे Legally (और Illegally) Reported Profits Manipulate करती हैं",
  shortDefinition: "Earnings management accounting techniques और judgment use करना financial reports alter करने — stakeholders mislead या reported numbers tied contractual outcomes influence।",
  metaDescription: "Earnings management क्या है? Legal और illegal manipulation difference, common techniques, red flags investors watch करें, और SEC filings कैसे reveal कर सकती हैं।",
  wordCount: 430, category: "Accounting & Audit", tags: ["earnings-management", "accounting-manipulation", "revenue-recognition", "financial-reporting", "fraud"],
  relatedSlugs: ["restatement", "gaap", "non-gaap-measures", "audit-opinion", "material-weakness"], relatedTerms: ["restatement", "gaap", "non-gaap-measures", "audit-opinion", "material-weakness"],
  faq: [{ question: "Earnings management हमेशा illegal है?", answer: "नहीं। Spectrum legitimate से fraudulent। GAAP significant judgment require — bad debts, revenue timing estimate। Aggressive but within GAAP = legal। Analyst expectations penny meet = aggressive not illegal। Fabricating transactions, fictitious revenue = fraud — criminal charges, SEC enforcement, restatements। Line intent और materiality determine।" },
  { question: "Earnings management red flags क्या हैं?", answer: "Revenue growing significantly faster than cash from operations, accounts receivable growing faster than revenue (channel stuffing), unusual quarter-end revenue spikes, frequent accounting estimate changes, consistently beating estimates by exactly one penny, significant one-time gains offsetting weakness, declining accrual quality। Beneish M-Score quantitative model flag कर सकता है।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Earnings management accounting choices, estimates, और transaction timing use करने की practice है reported financial results influence करने। Mildest: favorable accounting methods select करना। Most severe: outright fraud — transactions fabricate, records manipulate। Understanding essential क्योंकि reported numbers accurately economic reality reflect नहीं कर सकते।</p>

<h2>Common Techniques</h2>
<p><strong>Revenue manipulation:</strong> Channel stuffing (quarter-end excess inventory distributors ship with return rights), bill-and-hold, contingent transaction revenue recognize।</p>
<p><strong>Expense deferral:</strong> Operating expenses capitalize (WorldCom $3.8 billion), useful lives extend, impaired assets write down fail।</p>
<p><strong>Cookie jar reserves:</strong> Strong quarters over-reserve, weak quarters release — earnings smooth। GAAP violate लेकिन detect difficult।</p>
<p><strong>Big bath accounting:</strong> Already-bad quarter massive write-offs — future periods artificially strong appear।</p>
<p><strong>Real earnings management:</strong> Actual business decisions change — R&D cut, deep discounts revenue pull forward, maintenance delay। Real economic consequences — long-term value sacrifice short-term reported results।</p>

<h2>Motivations</h2>
<p><strong>Analyst expectations:</strong> One penny miss significant stock price decline trigger। Meet या narrowly beat pressure।</p>
<p><strong>Executive compensation:</strong> Bonuses, stock vesting earnings targets tied।</p>
<p><strong>Debt covenants:</strong> Financial ratios maintain — covenant breach default trigger कर सकता।</p>

<h2>Detection</h2>
<p>Quantitative: DSO changes vs revenue growth, cash conversion ratio <1.0 consistently, receivables faster than revenue growing, Beneish M-Score।</p>
<p>Qualitative: aggressive revenue recognition policies, frequent non-GAAP adjustments, management turnover accounting roles, auditor changes, SEC comment letters।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में earnings management equally prevalent — Satyam (2009) India का biggest accounting fraud, ₹7,000+ crore fictitious revenue। Recent cases: Manpasand Beverages, Coffee Day Group। SEBI और SFIO enforcement actions increase। Indian investors US stocks evaluate करते समय earnings quality critically assess करें — GAAP vs non-GAAP gap wide हो और cash flow diverge तो red flag।</p>

<p>Indian investors cash flow statement attention दें — persistent divergence net income और operating cash flow बीच warning sign। Brefyr 10-K/10-Q filings से analytical checks apply करता है earnings quality concerns flag करने — divergent revenue और cash flow trends।</p>
`,
};
