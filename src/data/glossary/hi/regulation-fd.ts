import type { GlossaryTerm } from "../../types";

export const termRegulationFDHi: GlossaryTerm = {
  slug: "regulation-fd",
  term: "Regulation FD (रेगुलेशन FD / Fair Disclosure)",
  title: "Regulation FD — वो Rule जिसने Wall Street Insiders को Selective Disclosure बंद करवा दिया",
  shortDefinition:
    "Regulation FD (Fair Disclosure) एक SEC rule है जो publicly traded companies को require करता है कि material nonpublic information सभी investors को simultaneously disclose करें — select analysts या institutional investors को selectively share करने की बजाय।",
  metaDescription:
    "Regulation FD क्या है? Fair disclosure rules कैसे काम करते हैं, Reg FD violation कब trigger होता है, और इस rule ने companies की investor communication कैसे बदली।",
  wordCount: 450,
  category: "Regulatory & Compliance",
  tags: ["regulation-fd", "fair-disclosure", "sec-regulation", "material-information", "insider-trading"],
  relatedSlugs: ["insider-trading", "8-k-filing", "quiet-period", "section-16", "rule-10b5"],
  relatedTerms: ["insider-trading", "8-k-filing", "quiet-period", "section-16", "rule-10b5"],
  faq: [
    {
      question: "अगर company accidentally analyst को material information disclose कर दे तो क्या होता है?",
      answer:
        "Unintentional disclosure पर Regulation FD require करता है कि company prompt public disclosure करे — typically 24 hours के अंदर या next trading session open होने से पहले। Company Form 8-K file करे, press release issue करे, या broad public disclosure method use करे। Key factor speed है — accidental selective disclosure rapid public dissemination से cure हो सकता है। Intentional selective disclosure जो simultaneously public न हो, violation constitute करता है।",
    },
    {
      question: "क्या Regulation FD companies और investors के बीच सभी conversations पर apply होता है?",
      answer:
        "नहीं। Reg FD senior officials (officers, directors, investor relations staff) द्वारा securities market professionals (analysts, institutional investors, broker-dealers) और shareholders को disclosures पर apply होता है। Ordinary course business discussions — customers, suppliers, या media — पर apply नहीं होता। Confidentiality agreement के under disclosures पर भी apply नहीं होता।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Regulation FD — formally Regulation Fair Disclosure — October 2000 में adopt किया गया SEC rule है जिसने public companies की investor communication fundamentally बदल दी। Reg FD से पहले, companies routinely select Wall Street analysts और large institutional investors को material information share करती थीं broader market को बताने से पहले। <strong>Retail investors को systematic information disadvantage</strong> था। Regulation FD ने यह practice eliminate कर दी — अब कोई भी material disclosure securities professionals को होगी, तो simultaneously entire public को भी करनी होगी।</p>

<h2>Regulation FD क्या Require करता है</h2>

<p><strong>Intentional disclosure:</strong> अगर company official intentionally analyst या fund manager को material information share करता है, तो company को simultaneously same information public available करनी होगी — typically press release, SEC filing, या webcast through।</p>

<p><strong>Unintentional disclosure:</strong> अगर accidentally material information reveal हो जाए (private meeting में slip, overheard conversation), तो company को promptly public disclosure करनी होगी — 24 hours के अंदर या next trading session से पहले।</p>

<h2>Material Information क्या Count होती है</h2>

<p>Securities laws का same materiality standard: information material है अगर reasonable investor इसे investment decision में important consider करे। Common examples: earnings guidance, revenue trends, significant new contracts, management changes, merger discussions, product approvals, regulatory actions।</p>

<h2>Companies कैसे Comply करती हैं</h2>

<p><strong>Earnings webcasts।</strong> Privately analysts को guidance देने की बजाय, companies quarterly earnings calls hold करती हैं जो सभी investors के लिए webcast through open होती हैं।</p>

<p><strong>Social media।</strong> SEC ने clarify किया है कि companies social media platforms (Twitter, Facebook) Reg FD-compliant disclosures के लिए use कर सकती हैं, बशर्ते investors को बताया गया हो कि कौन से platforms use होते हैं।</p>

<h2>भारतीय निवेशकों के लिए Reg FD</h2>

<p>India में SEBI की fair disclosure requirements similar intent रखती हैं लेकिन US system ज़्यादा transparent और fast है। Reg FD का मतलब है कि <strong>Indian retail investors को US companies की material information उसी समय मिलती है जब Wall Street institutions को</strong> — यह US market transparency का major advantage है।</p>

<p>Brefyr सभी 8-K filings process करता है Reg FD disclosures सहित, ensuring investors को timely access मिले उस information तक जो पहले सिर्फ institutional insiders को share होती थी।</p>
`,
};
