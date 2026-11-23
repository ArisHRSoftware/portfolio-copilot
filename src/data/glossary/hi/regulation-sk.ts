import type { GlossaryTerm } from "../../types";

export const termRegulationSKHi: GlossaryTerm = {
  slug: "regulation-sk",
  term: "Regulation S-K (रेगुलेशन S-K)",
  title: "Regulation S-K — SEC Filings में Non-Financial Disclosure का Blueprint",
  shortDefinition:
    "Regulation S-K वो SEC regulation है जो registration statements और periodic reports में non-financial disclosure requirements prescribe करता है — business descriptions, risk factors, management discussion, executive compensation, और corporate governance cover करता है।",
  metaDescription:
    "Regulation S-K क्या है? यह 10-K, 10-Q, और S-1 filings में non-financial disclosures कैसे govern करता है, key items जो investors को जानने चाहिए, और Reg S-K companies को क्या reveal करने पर मजबूर करता है।",
  wordCount: 450,
  category: "Regulatory & Compliance",
  tags: ["regulation-sk", "sec-regulation", "disclosure-requirements", "10-k-filing", "risk-factors"],
  relatedSlugs: ["regulation-sx", "10-k-filing", "10-q-filing", "sarbanes-oxley", "executive-compensation"],
  relatedTerms: ["regulation-sx", "10-k-filing", "10-q-filing", "sarbanes-oxley", "executive-compensation"],
  faq: [
    {
      question: "Regulation S-K और Regulation S-X में क्या difference है?",
      answer:
        "Regulation S-K non-financial disclosures cover करता है — narrative और descriptive portions: business description, risk factors, MD&A, executive compensation, corporate governance। Regulation S-X financial statement requirements cover करता है — balance sheets, income statements, cash flow statements, और notes। Together, ये दोनों SEC filings की complete content requirements define करते हैं।",
    },
    {
      question: "क्या Regulation S-K recently change हुआ है?",
      answer:
        "हाँ। SEC ने 2020 में significant updates किए — business description (Item 101), legal proceedings (Item 103), और risk factor (Item 105) requirements revise किए। Updates principles-based disclosure encourage करते हैं material information पर focused। Human capital disclosure requirements भी update हुए — companies को describe करना होगा कि business manage करने में कौन से human capital measures material हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Regulation S-K master regulation है जो govern करता है कि companies को अपनी SEC filings में कौन सी non-financial information include करनी होगी। Regulation S-X financial statements specify करता है (numbers, accounting policies), Regulation S-K बाकी सब specify करता है: business description, risk factors, properties, legal proceedings, management's discussion and analysis, executive compensation, corporate governance। <strong>10-K filing में हर word जो financial statement या footnote नहीं है, Regulation S-K govern करता है।</strong></p>

<h2>Key Items</h2>

<p><strong>Item 101 — Description of Business।</strong> Company के business का comprehensive overview — principal products/services, competitive conditions, customers, seasonality, working capital requirements, government regulation, human capital resources। 10-K का पहला substantive section।</p>

<p><strong>Item 105 — Risk Factors।</strong> Investors के लिए सबसे valuable sections में से एक। Company को disclose करना होगा कि कौन से significant factors investment को risky बनाते हैं। 2020 amendments require करते हैं कि risk factors headings से organize हों और significant risks पहले आएं।</p>

<p><strong>Item 303 — Management's Discussion and Analysis (MD&A)।</strong> Management को financial condition, results of operations, और liquidity discuss करनी होगी management's perspective से — revenue changes क्या drove किए, margins क्यों expand/contract हुए, capital expenditure plans क्या हैं। Fundamental investors के लिए अक्सर सबसे informative narrative section।</p>

<p><strong>Item 402 — Executive Compensation।</strong> सबसे detailed disclosure requirements में से एक — Summary Compensation Table, CD&A section, outstanding equity awards, retirement benefits, severance arrangements, pay-versus-performance comparisons।</p>

<p><strong>Item 407 — Corporate Governance।</strong> Director independence, board committee composition, nomination processes, board leadership structure disclose करना।</p>

<h2>Principles-Based Disclosure की Shift</h2>

<p>Historically, Regulation S-K prescriptive था — exact checklist format। Recent modernization principles-based disclosure की तरफ shift हुई है — companies को वो information disclose करनी है जो उनके specific business के लिए material है, one-size-fits-all checklist follow करने की बजाय।</p>

<h2>भारतीय निवेशकों के लिए Reg S-K</h2>

<p>India में SEBI Listing Regulations similar disclosures require करती हैं लेकिन US system ज़्यादा detailed और standardized है। Indian investors जो US stocks analyze करते हैं, उनके लिए Reg S-K items — especially risk factors और MD&A — सबसे valuable information sources हैं।</p>

<p>Brefyr 10-K और 10-Q filings की Regulation S-K governed हर section process करता है — AI से material changes identify करता है risk factors, business descriptions, और management analysis में 7,600+ companies के लिए।</p>
`,
};
