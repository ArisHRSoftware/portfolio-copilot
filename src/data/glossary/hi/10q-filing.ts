import type { GlossaryTerm } from "../../types";

export const term10QFilingHi: GlossaryTerm = {
  slug: "10-q-filing",
  term: "10-Q फाइलिंग (10-Q Filing)",
  title: "10-Q फाइलिंग — Quarterly Report में क्या होता है और इसे कैसे पढ़ें",
  shortDefinition:
    "10-Q एक quarterly report है जो public companies साल में तीन बार SEC के पास file करती हैं। इसमें unaudited financial statements और एक condensed management discussion होती है।",
  metaDescription:
    "10-Q filing क्या है? SEC की quarterly report को समझें — 10-K से कैसे अलग है, हर section में क्या होता है, और हर quarter में investors को क्या देखना चाहिए।",
  wordCount: 800,
  category: "SEC Filings",
  tags: ["sec-filing", "quarterly-report", "financial-statements", "edgar"],
  relatedSlugs: ["10-k-filing", "8-k-filing", "sec-edgar", "free-cash-flow"],
  relatedTerms: ["10-k-filing", "8-k-filing", "sec-edgar", "free-cash-flow", "revenue-recognition"],
  faq: [
    {
      question: "10-Q और 10-K में क्या difference है?",
      answer:
        "10-K annual report है (साल में एक बार, audited financials), जबकि 10-Q quarterly report है (Q1, Q2, Q3 के लिए, unaudited)। 10-K ज़्यादा detailed होती है — full risk factors, complete business description। 10-Q एक lighter update है जो बताती है कि पिछली quarter में क्या बदला।",
    },
    {
      question: "10-Q कब file होती है?",
      answer:
        "Large accelerated filers को quarter end के 40 days में file करना होता है। Smaller companies को 45 days मिलते हैं। Q4 के लिए कोई 10-Q नहीं होती — उसकी जगह 10-K (annual report) file होती है जो Q4 और पूरे year को cover करती है।",
    },
    {
      question: "भारतीय निवेशक 10-Q क्यों पढ़ें?",
      answer:
        "अगर आप Vested या INDMoney से US stocks hold करते हैं, तो 10-Q हर तीन महीने में आपकी company की health check है। Revenue trends, cash position, और new risks — ये सब 10-Q में सबसे पहले दिखते हैं, earnings call से पहले। Brefyr पर हर 10-Q की AI summary मिलती है।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>10-Q filing SEC के पास file होने वाली quarterly report है। हर US-listed company इसे साल में तीन बार file करती है — Q1, Q2, और Q3 के लिए। Q4 के लिए अलग से 10-Q नहीं होती, क्योंकि 10-K (annual report) पूरे साल को cover करती है।</p>

<p>10-K की तरह 10-Q भी EDGAR पर free में available है, लेकिन यह काफी shorter होती है। ज़्यादातर 10-Q 30-80 pages की होती हैं जबकि 10-K 100-200+ pages की।</p>

<h2>10-Q में क्या होता है</h2>

<h3>Financial Statements (Unaudited)</h3>

<p>10-Q में income statement, balance sheet, और cash flow statement होती हैं — लेकिन ये <strong>unaudited</strong> होती हैं। इसका मतलब independent auditor ने इन्हें formally verify नहीं किया है (10-K में audited statements होती हैं)। फिर भी, company का management इनकी accuracy certify करता है।</p>

<p>Smart investors 10-Q financials को पिछली quarter और पिछले साल की same quarter से compare करते हैं। Revenue growth slow हो रहा है? Margins compress हो रहे हैं? Cash burn बढ़ रहा है? ये early warning signals 10-Q में पहले दिखते हैं।</p>

<h3>MD&A (Management's Discussion and Analysis)</h3>

<p>यह 10-Q का सबसे useful section है। Management बताता है कि quarter में क्या हुआ — revenue drivers, expense changes, और forward-looking statements। 10-K की MD&A पूरे साल का overview देती है, जबकि 10-Q की MD&A latest quarter पर focused होती है।</p>

<p><strong>Tip:</strong> MD&A में tone changes ध्यान से पढ़ें। पिछली quarter "strong growth" कह रही थी और इस बार "challenging market conditions" — यह significant shift है।</p>

<h3>Risk Factor Updates</h3>

<p>10-Q में companies को कोई भी new risk factors add करने होते हैं जो पिछली 10-K के बाद सामने आए हों। एक नया risk factor जैसे "liquidity concerns" या "customer concentration" एक red flag हो सकता है।</p>

<h2>10-Q कैसे efficiently पढ़ें</h2>

<p><strong>5-minute scan:</strong> Revenue और net income numbers देखें — quarter-over-quarter और year-over-year comparison करें। MD&A का पहला paragraph पढ़ें।</p>

<p><strong>15-minute deep dive:</strong> Cash flow statement पर focus करें (operating cash flow positive है?), balance sheet पर debt levels check करें, और risk factor section में कोई नया addition देखें।</p>

<h2>भारतीय निवेशकों के लिए 10-Q की अहमियत</h2>

<p>अगर आप Vested, INDMoney, Groww International, या Dhan Global से US stocks में invest करते हैं, तो 10-Q आपकी <strong>quarterly health check</strong> है। Indian brokerage apps अक्सर simplified earnings data दिखाते हैं, लेकिन 10-Q में पूरी picture होती है।</p>

<p>RBI LRS scheme के तहत आपका US market में invest किया गया पैसा significant हो सकता है। 10-Q पढ़कर आप early warning signs पकड़ सकते हैं — इससे पहले कि stock price react करे।</p>

<p>Brefyr हर 10-Q को publish होने के minutes में process करता है और significance score (1-10) assign करता है। आपको पूरी filing पढ़ने की ज़रूरत नहीं — AI summary key points highlight कर देती है।</p>
`,
};
