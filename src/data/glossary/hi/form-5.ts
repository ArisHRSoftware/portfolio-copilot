import type { GlossaryTerm } from "../../types";

export const termForm5Hi: GlossaryTerm = {
  slug: "form-5",
  term: "Form 5 (फॉर्म 5)",
  title: "Form 5 — Annual Insider Ownership Statement और Catch-All Filing",
  shortDefinition:
    "Form 5 एक annual SEC filing है जो insiders use करते हैं उन transactions को report करने के लिए जो पिछले fiscal year में Form 4 पर disclose नहीं हुईं — exempt transactions और late reports दोनों।",
  metaDescription:
    "Form 5 क्या है? Annual insider ownership catch-all filing कैसे काम करती है, कौन सी transactions cover होती हैं, और भारतीय निवेशक इसे कैसे monitor करें।",
  wordCount: 420,
  category: "SEC Filings",
  tags: ["sec-filing", "insider-ownership", "annual-filing", "edgar", "insider-trading"],
  relatedSlugs: ["form-3", "form-4", "insider-trading", "beneficial-owner", "10-k-filing"],
  relatedTerms: ["form-3", "form-4", "insider-trading", "beneficial-owner", "10-k-filing"],
  faq: [
    {
      question: "Form 5 कब due होती है?",
      answer:
        "Company के fiscal year-end के 45 calendar days के भीतर। December 31 fiscal year वाली companies के लिए deadline February 14 है। अगर insider की सभी transactions पहले से Form 4 पर report हो चुकी हैं, तो Form 5 file करने की ज़रूरत नहीं — लेकिन कई companies written representation माँगती हैं कि no filing required है।",
    },
    {
      question: "Form 5 पर कौन सी transactions report होती हैं?",
      answer:
        "Gifts of securities, small acquisitions (certain thresholds के under), inheritances, employee benefit plan transactions, और वो transactions जो Form 4 पर time पर report नहीं हुईं। Form 5 essentially एक catch-up mechanism है।",
    },
    {
      question: "क्या Form 5 filing red flag है?",
      answer:
        "ज़रूरी नहीं। बहुत सी Form 5 filings में routine exempt transactions होती हैं — small gifts या benefit plan transactions। लेकिन अगर Form 5 पर large transactions reveal होती हैं जो Form 4 पर होनी चाहिए थीं, तो यह sloppy compliance या deliberate delay indicate करता है। CEO ने shares बेचे और months बाद Form 5 पर पता चला — यह serious question उठाता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Form 5 SEC के insider ownership disclosure system का annual safety net है। Section 16(a) of the Securities Exchange Act of 1934 के तहत file होती है। यह उन transactions को capture करती है जो Form 4 reporting process में miss हो गईं — या तो exempt थीं Form 4 requirements से या insider ने time पर Form 4 file नहीं की। Indian investors के लिए: SEBI की insider trading reporting भी similar structure follow करती है, लेकिन US system ज़्यादा public और granular है।</p>

<h2>Section 16 Filing System में Role</h2>

<p>System तीन layers में काम करता है: Form 3 initial holdings establish करती है, Form 4 हर transaction two business days में report करती है, Form 5 annual catch-all है जो gaps fill करती है। तीनों मिलकर complete, continuous public record बनाते हैं हर insider की ownership position और trading activity का।</p>

<p>Practice में, electronic filing और corporate compliance programs की वजह से ज़्यादातर transactions Form 4 पर real time में report होती हैं। Form 5 कम prominent हो गई है primary disclosure vehicle के रूप में, लेकिन exempt transactions report करने और compliance backstop के रूप में important रहती है।</p>

<h2>Form 5 पर Report होने वाली Transactions</h2>

<p><strong>Gifts of securities:</strong> Insider shares gift करता है family member, charity, या trust को — Form 5 पर deferred reporting eligible हो सकती है। लेकिन SEC का view tight हो गया है — ज़्यादातर practitioners अब voluntarily Form 4 पर report recommend करते हैं।</p>

<p><strong>Small acquisitions:</strong> SEC Rule 16a-6 के under certain thresholds exceed नहीं करने वाली acquisitions। Employee benefit plans या dividend reinvestment programs के through minor accumulations।</p>

<p><strong>Inheritances:</strong> Inheritance या bequest से मिली securities Form 4 से exempt हैं और Form 5 पर report होती हैं।</p>

<p><strong>Employee benefit plan transactions:</strong> Tax-qualified retirement plans, ESPPs, और similar benefit arrangements के under कुछ transactions Form 5 पर report eligible हैं।</p>

<p><strong>Late Form 4 transactions:</strong> Insider ने Form 4 deadline miss कर दी तो missed transaction Form 5 पर appear होनी चाहिए — compliance backstop function।</p>

<h2>Investors कैसे Use करें</h2>

<p>Form 5 year-end reconciliation tool के रूप में सबसे useful है। साल भर Form 4 track करने के बाद, Form 5 review करें कि कोई previously undisclosed transaction तो नहीं। Large undisclosed sale या acquisition दिखे तो governance concern है।</p>

<p>Insider gifts track करने का primary source भी Form 5 है। CEO बड़ा block of shares family trust को gift करता है — estate planning हो सकता है या future stock price decline anticipation में ownership reduce कर रहा है। Context matters।</p>

<p>Small-cap investors के लिए Form 5 कभी-कभी ऐसी transactions reveal करती है जो market ने पूरी तरह miss कर दीं। Thinly traded company में insider ने significant purchase किया जो exempt था — months बाद Form 5 पर पता चला — actionable information।</p>

<h2>Form 5 कहाँ मिलती है</h2>

<p>सभी Form 5 filings SEC EDGAR पर available हैं। Brefyr पर Form 5 data insider activity timeline में integrated है Form 3 और Form 4 के साथ — complete picture year-end transactions सहित।</p>
`,
};
