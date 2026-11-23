import type { GlossaryTerm } from "../../types";

export const termRule144Hi: GlossaryTerm = {
  slug: "rule-144",
  term: "Rule 144 (रूल 144 / Restricted Securities)",
  title: "Rule 144 — Insiders और Restricted Stock Holders अपने Shares कैसे Sell कर सकते हैं",
  shortDefinition:
    "Rule 144 SEC regulation है जो restricted securities (private placements में acquire किए shares) और control securities (company affiliates द्वारा held shares) की public resale के लिए safe harbor provide करता है — holding periods, volume limits, और filing requirements subject।",
  metaDescription:
    "SEC Rule 144 क्या है? Insiders restricted stock कैसे sell करते हैं, holding period और volume requirements, Form 144 filings, और Rule 144 sales investors को क्या signal करती हैं।",
  wordCount: 430,
  category: "Regulatory & Compliance",
  tags: ["rule-144", "restricted-stock", "insider-selling", "sec-regulation", "affiliate"],
  relatedSlugs: ["rule-144a", "insider-trading", "section-16", "form-4", "rsu"],
  relatedTerms: ["rule-144a", "insider-trading", "section-16", "form-4", "rsu"],
  faq: [
    {
      question: "Restricted shares कितने समय तक hold करने होते हैं Rule 144 के under sell करने से पहले?",
      answer:
        "Reporting companies (10-K, 10-Q file करने वाली) के लिए holding period six months है acquisition date से। Non-reporting companies के लिए one year। Holding period के बाद, reporting company के non-affiliates के restricted shares बिना किसी restriction के sell हो सकते हैं। Affiliates को volume limits, manner of sale requirements, और Form 144 filing requirements continue comply करने होते हैं।",
    },
    {
      question: "Restricted securities और control securities में क्या difference है?",
      answer:
        "Restricted securities वो shares हैं जो unregistered, private transactions में acquire किए — private placements, employee stock compensation, या Regulation D offerings। Control securities वो shares हैं जो company affiliate (directors, officers, significant shareholders) hold करते हैं, चाहे कैसे भी acquire किए हों। Affiliate ने open market से shares खरीदे हों, वो control securities हैं। Rule 144 दोनों categories पर apply होता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Rule 144, Securities Act of 1933 के under SEC द्वारा adopt किया गया, restricted और control securities के holders को public को sell करने का safe harbor provide करता है बिना full registration statement के। Rule 144 के बिना, insiders और private placement investors के पास अपनी holdings liquidate करने का कोई practical तरीका नहीं होता। <strong>Rule 144 specific conditions create करता है जिनमें ये sales हो सकती हैं</strong> — holders की liquidity need और investor protection balance करता है।</p>

<h2>Rule 144 के under Sell करने की Conditions</h2>

<p><strong>Holding period।</strong> SEC-reporting companies के securities: six months। Non-reporting companies: one year।</p>

<p><strong>Current public information।</strong> Company SEC filings में current होनी चाहिए — preceding 12 months के सभी required periodic reports file किए हों। Company filings में पीछे हो तो Rule 144 sales suspend।</p>

<p><strong>Volume limitations (affiliates only)।</strong> Three-month period में: (a) total outstanding shares का 1%, या (b) preceding four calendar weeks की average weekly trading volume — जो ज़्यादा हो।</p>

<p><strong>Form 144 filing (affiliates only)।</strong> Three-month period में 5,000 shares या $50,000 value से ज़्यादा sell करने पर Form 144 SEC को file करनी होगी sell order place करने के साथ।</p>

<h2>Non-Affiliates के लिए Simplified Rules</h2>

<p>Non-affiliates को बहुत simpler path है। Reporting company के restricted securities six months hold करने के बाद, freely sell कर सकते हैं। One year बाद, बिना किसी restriction — no volume limits, no Form 144, no manner-of-sale requirements।</p>

<h2>Form 144 Filings क्या Signal करती हैं</h2>

<p>Form 144 filings planned insider sales alert करती हैं। Heavy Form 144 filings by multiple insiders bearish sentiment indicate कर सकती हैं। Filing absence जब insiders eligible हों sell करने के, undervaluation signal हो सकता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI insider trading regulations similar framework follow करती हैं। US market में Form 144 और Form 4 filings monitor करना insider sentiment समझने के लिए valuable है। IPO lock-up expiration (typically 180 days) के बाद Rule 144 govern करता है कि insiders कैसे sell करें — significant trading volume और price pressure हो सकता है।</p>

<p>Brefyr Form 144 filings Form 4 insider transaction reports के साथ track करता है — insider selling plans और completed transactions का complete view।</p>
`,
};
