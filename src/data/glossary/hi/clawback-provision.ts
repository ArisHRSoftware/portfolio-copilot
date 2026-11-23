import type { GlossaryTerm } from "../../types";

export const termClawbackProvisionHi: GlossaryTerm = {
  slug: "clawback-provision",
  term: "Clawback Provision (क्लॉबैक प्रावधान)",
  title: "Clawback Provision — Financial Restatements के बाद Executive Pay Recover करना",
  shortDefinition:
    "Clawback provision एक corporate policy या contractual clause है जो executives से incentive-based compensation recovery require करती है जब company financial results restate करती है, ensuring executives inaccurate financials पर based pay नहीं रखें।",
  metaDescription:
    "Clawback provision क्या है? Dodd-Frank mandatory clawback rules कैसे work करती हैं, क्या trigger करता है, कितना recover करना होता है, और SEC filings में clawback policies कहाँ find करें।",
  wordCount: 420,
  category: "Regulatory & Compliance",
  tags: ["clawback", "executive-compensation", "restatement", "dodd-frank", "corporate-governance"],
  relatedSlugs: ["dodd-frank", "executive-compensation", "restatement", "sarbanes-oxley", "say-on-pay"],
  relatedTerms: ["dodd-frank", "executive-compensation", "restatement", "sarbanes-oxley", "say-on-pay"],
  faq: [
    {
      question: "Clawback apply होने के लिए executive को fault पर होना ज़रूरी है?",
      answer:
        "Dodd-Frank mandatory rules (effective 2023) के under, नहीं। Clawback 'no-fault' है — executive restatement में error के लिए responsible था या नहीं, irrelevant है। Logic: अगर financial results गलत थे, तो उन results पर based compensation भी गलत थी, return करनी होगी। Sarbanes-Oxley Section 304 clawback से यह significant difference है, जो personal misconduct require करता है।",
    },
    {
      question: "कौन सी compensation clawback subject है?",
      answer:
        "Dodd-Frank clawback covers incentive-based compensation restatement से पहले तीन-year period में received। Cash bonuses tied to financial metrics, financial performance-based stock awards, और financial targets पर dependent stock options include हैं। Base salary, time-vesting RSUs, और non-financial discretionary bonuses include नहीं। Recovery amount excess है जो restated financials under paid होता।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Clawback provision एक mechanism है जो company को executives से incentive compensation recover करने allow — या require — करता है जो financial results पर based थी जो बाद में incorrect prove हुए। जब company financial statements restate करती है, restated numbers show कर सकते हैं कि company ने actually performance targets achieve नहीं किए जिन्होंने executive bonuses trigger किए। Clawback provisions ensure करती हैं कि executives difference return करें।</p>

<h2>Dodd-Frank Mandatory Clawback</h2>

<p>Section 954 Dodd-Frank Act ने SEC को direct किया stock exchanges mandatory clawback policies require करें। Key features:</p>

<p><strong>Trigger:</strong> कोई भी accounting restatement — "Big R" और "little r" दोनों। Company excess compensation recover करे fraud हो या innocent error।</p>

<p><strong>Covered persons:</strong> सभी current और former executive officers (typically 10-15 individuals including CEO, CFO, division presidents)।</p>

<p><strong>Lookback period:</strong> Restatement date से पहले तीन completed fiscal years।</p>

<p><strong>Amount:</strong> Incentive compensation received और restated financials under जो amount received होता, का excess।</p>

<p><strong>No-fault:</strong> Executive involvement irrelevant — knowledge और culpability matter नहीं करती।</p>

<p><strong>No discretion:</strong> Companies must recover — board waive नहीं कर सकता limited circumstances except।</p>

<h2>Sarbanes-Oxley Section 304</h2>

<p>Dodd-Frank से पहले SOX Section 304 narrower clawback provide करता था: CEO और CFO bonuses और stock profits reimburse करें misconduct due to restatement के 12 months में। Key differences: misconduct required, सिर्फ CEO/CFO, shorter lookback, SEC enforced।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में clawback provisions अभी developing stage में हैं। SEBI ने LODR (Listing Obligations and Disclosure Requirements) में some provisions introduce किए हैं, लेकिन US जैसा comprehensive mandatory clawback framework अभी नहीं है। Indian Companies Act, 2013 में Section 197 executive remuneration regulate करता है, लेकिन specific clawback mechanism limited है।</p>

<p>US-listed Indian companies (ADRs जैसे Infosys, HDFC Bank) को Dodd-Frank clawback rules follow करने होते हैं। Indian investors US stocks evaluate करते समय proxy statement (DEF 14A) में clawback policy description check करें — यह governance quality का indicator है। Strong clawback policy मतलब company accountability seriously लेती है।</p>

<p>Brefyr restatement disclosures और proxy statement compensation information monitor करता है, investors alert करता है जब companies mandatory clawback recoveries trigger करने वाली errors experience करती हैं।</p>
`,
};
