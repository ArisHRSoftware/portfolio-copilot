import type { GlossaryTerm } from "../../types";

export const termSection16Hi: GlossaryTerm = {
  slug: "section-16",
  term: "Section 16 (सेक्शन 16 / Insider Reporting)",
  title: "Section 16 — Corporate Insiders को हर Stock Transaction Report करने वाला Law",
  shortDefinition:
    "Securities Exchange Act of 1934 की Section 16 officers, directors, और 10% से ज़्यादा shares own करने वाले shareholders को require करती है कि अपनी ownership और company securities में सभी transactions SEC को report करें।",
  metaDescription:
    "Section 16 क्या है? Insider reporting requirements कैसे काम करती हैं, Forms 3, 4, और 5, short-swing profit rule, और insider transaction data investors के लिए क्यों matter करता है।",
  wordCount: 430,
  category: "Regulatory & Compliance",
  tags: ["section-16", "insider-reporting", "form-4", "insider-trading", "sec-regulation"],
  relatedSlugs: ["form-4", "insider-trading", "short-swing-profit", "beneficial-owner", "rule-10b5"],
  relatedTerms: ["form-4", "insider-trading", "short-swing-profit", "beneficial-owner", "rule-10b5"],
  faq: [
    {
      question: "Section 16 insider कौन consider होता है?",
      answer:
        "Section 16 insiders include: (1) company directors, (2) board द्वारा designated Section 16 officers (typically CEO, CFO, COO, general counsel, controller), और (3) company की equity securities की किसी class के 10% से ज़्यादा beneficial owners। Company proxy statement में Section 16 officers identify करती है। तीनों categories को Forms 3, 4, 5 file करने होते हैं और short-swing profit rule subject।",
    },
    {
      question: "Insiders को transactions कितनी जल्दी report करने होते हैं?",
      answer:
        "Form 4 (ownership changes) transaction के 2 business days में file करनी होती है। Sarbanes-Oxley Act ने 2002 में 10 days से 2 days shorten किया। Form 3 (initial ownership) insider बनने के 10 days में। Form 5 (annual summary) fiscal year-end के 45 days में।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Section 16 of Securities Exchange Act of 1934 U.S. securities markets में insider transaction transparency की bedrock है। तीन categories — officers, directors, और 10%+ beneficial owners — को publicly ownership disclose करनी होती है और हर change SEC को report करनी होती है। ये reports public records हैं, filing के hours में EDGAR पर available। <strong>Section 16 short-swing profit rule भी impose करता है</strong> — insiders को six-month window में paired purchases/sales के profits disgorge करने होते हैं।</p>

<h2>तीन Reporting Forms</h2>

<p><strong>Form 3 — Initial Statement of Beneficial Ownership।</strong> Section 16 insider बनने के 10 days में file। Company की सभी securities report करती है जो insider beneficially own करता है।</p>

<p><strong>Form 4 — Statement of Changes।</strong> किसी भी transaction के 2 business days में file — open-market purchases/sales, option exercises, restricted stock vesting, gifts। <strong>सबसे frequently filed और closely watched</strong> — near-real-time insider buying/selling data।</p>

<p><strong>Form 5 — Annual Statement।</strong> Fiscal year-end के 45 days में file। Form 4 reporting से exempt transactions और inadvertently missed transactions cover करती है।</p>

<h2>Short-Swing Profit Rule (Section 16(b))</h2>

<p>Section 16(b) provide करता है कि insider द्वारा six-month period में purchase और sale (या sale और purchase) से realized profit company को disgorge करना होगा। Rule strict liability है — intent और inside information irrelevant। Profit calculation most favorable matching use करता है। Plaintiffs' attorneys Form 4 filings monitor करके potential violations identify करते हैं।</p>

<h2>Insider Transaction Data क्यों Matter करता है</h2>

<p>Academic research consistently दिखाता है कि insider purchases bullish signal हैं। Multiple insiders अपने पैसे से shares खरीदें, company prospects में confidence indicate होता है। Insider sales weaker signal हैं — diversification, taxes, liquidity reasons से sell हो सकती हैं। लेकिन unusually heavy selling by multiple insiders warning sign।</p>

<p>Key patterns: cluster buying, CEO/CFO purchase, buying after price decline, transaction size relative to compensation।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI PIT Regulations insider trading reporting govern करती हैं। लेकिन US system ज़्यादा transparent है — Form 4 2 business days में public, EDGAR पर free access। Brefyr Form 4 filings near real-time process करता है — portfolio companies में insider buy/sell alerts।</p>
`,
};
