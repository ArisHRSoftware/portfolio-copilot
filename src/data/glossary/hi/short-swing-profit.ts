import type { GlossaryTerm } from "../../types";

export const termShortSwingProfitHi: GlossaryTerm = {
  slug: "short-swing-profit",
  term: "Short-Swing Profit Rule (शॉर्ट-स्विंग प्रॉफिट रूल)",
  title: "Short-Swing Profit Rule — Corporate Insiders पर Six-Month Trading Restriction",
  shortDefinition:
    "Short-swing profit rule Section 16(b) के under corporate insiders को require करता है कि six-month period में company stock buy और sell (या sell और buy) करने से profits company को return करें।",
  metaDescription:
    "Short-swing profit rule क्या है? Section 16(b) insiders को six months में paired trades के profits disgorge करने कैसे force करता है, profits calculate कैसे होते हैं, और enforcement mechanisms।",
  wordCount: 420,
  category: "Regulatory & Compliance",
  tags: ["short-swing-profit", "section-16", "insider-trading", "disgorgement", "sec-regulation"],
  relatedSlugs: ["section-16", "insider-trading", "form-4", "rule-10b5"],
  relatedTerms: ["section-16", "insider-trading", "form-4", "rule-10b5"],
  faq: [
    {
      question: "Short-swing profit rule insider trading proof require करता है?",
      answer:
        "नहीं। यह rule की सबसे important characteristic है। Section 16(b) strict liability provision है — insider को six months में purchase और sale से profits disgorge करने होंगे, regardless material nonpublic information possess किया या नहीं, intent कुछ भी हो, trades overall profitable हों या नहीं। Rule prophylactic है: insiders को short-term trading से profit करने से prevent करता है।",
    },
    {
      question: "Short-swing profits calculate कैसे होते हैं?",
      answer:
        "Calculation 'lowest-in, highest-out' matching method use करता है जो disgorgeable profit maximize करे। हर purchase highest profit sale से match — chronological order regardless। Insider overall trading loss में भी disgorgement owe कर सकता है। Example: $7 purchase + $12 sale six months में = $5/share profit disgorge, भले overall net loss हो।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Short-swing profit rule — Section 16(b) of Securities Exchange Act of 1934 — blunt but effective anti-abuse provision है। <strong>कोई भी Section 16 insider (officer, director, 10%+ shareholder) जो six-month period में purchase और sale, या sale और purchase, से profit realize करे, वो profit company को disgorge करना होगा।</strong> Rule proof require नहीं करता कि insider ने inside information पर trade किया — automatic है।</p>

<h2>Rule कैसे काम करता है</h2>

<p><strong>Six-month window।</strong> Rolling six-month period में opposite transactions (buy + sell या sell + buy) rule subject। Six months first transaction date से second transaction date तक measure — calendar basis नहीं।</p>

<p><strong>Strict liability।</strong> Insider का intent irrelevant। Inside information नहीं हो, six months में trade plan नहीं था, personal reasons (tax, divorce) से sell किया — कोई matter नहीं। Trades match करें, calculable profit हो, disgorgement required।</p>

<p><strong>Profit maximization matching।</strong> Courts method use करते हैं जो profit calculation maximize करे। हर purchase price highest sale price से six months में match; हर sale price lowest purchase price से। Overall trading loss में भी specific transactions matching gains दिखा सकती है।</p>

<h2>Enforcement Mechanism</h2>

<p>Section 16(b) private right of action provide करता है। Company demand कर सकती है। Company 60 days में act न करे, कोई भी shareholder derivative lawsuit ला सकता है। Specialized plaintiffs' attorneys Form 4 filings systematically monitor करते हैं — self-funding enforcement mechanism।</p>

<h2>Common Exemptions</h2>

<p>सभी transactions 16(b) trigger नहीं करते। Rule 16b-3 exemptions: company compensation plans (stock option grants, RSU awards) generally purchase side से exempt। <strong>10b5-1 plans insider trading liability से protect करते हैं लेकिन Section 16(b) exemption नहीं देते</strong> — plan trades अन्य transactions से six months में match कर सकती हैं।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI PIT Regulations insider trading restrictions लागू करती हैं लेकिन exact six-month matching rule different है। US stocks follow करने वाले investors के लिए, Form 4 patterns समझना important — short-swing profit exposure insider trading constraints indicate करती है। Brefyr Form 4 filings process करता है और insider trading patterns flag करता है।</p>
`,
};
