import type { GlossaryTerm } from "../../types";

export const termAdverseOpinionHi: GlossaryTerm = {
  slug: "adverse-opinion",
  term: "Adverse Audit Opinion (प्रतिकूल ऑडिट राय)",
  title: "Adverse Audit Opinion — Company के Financial Statements पर सबसे Negative Verdict",
  shortDefinition:
    "Adverse audit opinion auditor का formal conclusion है कि company के financial statements GAAP के अनुसार fairly presented नहीं हैं — material misstatements इतने pervasive हैं कि financial statements पर rely नहीं किया जा सकता।",
  metaDescription:
    "Adverse audit opinion क्या है? कब auditors financial statements unreliable मानते हैं, क्या trigger करता है, company पर consequences, और investors को कैसे respond करना चाहिए।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["adverse-opinion", "audit", "material-misstatement", "financial-statements", "unreliable"],
  relatedSlugs: ["audit-opinion", "qualified-opinion", "going-concern", "restatement", "material-weakness"],
  relatedTerms: ["audit-opinion", "qualified-opinion", "going-concern", "restatement", "material-weakness"],
  faq: [
    {
      question: "Public companies को adverse audit opinions कितनी बार मिलती हैं?",
      answer:
        "Financial statements पर adverse opinions exceedingly rare हैं public companies के लिए — किसी भी year में 1% से कम audit reports में। ऐसा इसलिए क्योंकि companies typically issues resolve करती हैं auditor के साथ opinion issue होने से पहले। Internal controls (ICFR) पर adverse opinions ज़्यादा common हैं — roughly 3-5% accelerated filers को material weaknesses के कारण adverse ICFR opinions मिलती हैं।",
    },
    {
      question: "Adverse opinion के बाद company की stock पर क्या होता है?",
      answer:
        "Financial statements पर adverse opinion severe consequences trigger करती है: stock price significantly drop (20-50%+ common), potential exchange delisting, SEC investigation likely, securities class action lawsuits, capital markets access restricted। ICFR पर adverse opinion (ज़्यादा common) के consequences कम severe लेकिन significant — stock typically 5-15% decline, credit agencies downgrade कर सकती हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Adverse audit opinion सबसे negative conclusion है जो independent auditor company के financial statements के बारे में reach कर सकता है। यह state करता है कि financial statements GAAP के अनुसार fairly presented नहीं हैं — misstatements material और pervasive दोनों हैं, मतलब errors इतने significant और widespread हैं कि financial statements as a whole investment decisions के लिए rely नहीं किए जा सकते। Adverse opinion एक declaration है कि company के reported numbers fundamentally unreliable हैं।</p>

<h2>कब Issue होती है Adverse Opinion</h2>

<p>Adverse opinion तब issue होती है जब auditor ऐसे misstatements identify करता है जो material (investment decisions affect करने के लिए significant) और pervasive (financial statements as a whole affect करते हैं) दोनों हैं। Common scenarios: widespread revenue recognition fraud, systemic failure properly account करने में major transactions के लिए, pervasive GAAP application failures, और management की refusal identified misstatements correct करने में।</p>

<p>Qualified और adverse opinion के बीच distinction pervasiveness पर turns करता है। Single material misstatement एक area में qualified opinion warrant करता है। Multiple areas affect करने वाले misstatements adverse opinion trigger करते हैं।</p>

<h2>Adverse ICFR Opinions</h2>

<p>Financial statements पर adverse opinions से far more common हैं internal control over financial reporting (ICFR) पर adverse opinions। SOX Section 404(b) के under auditor company के internal controls की effectiveness पर separate opinion issue करता है। अगर auditor material weaknesses identify करता है, तो ICFR opinion adverse होती है। Adverse ICFR opinion मतलब necessarily financial statements में errors नहीं — लेकिन controls insufficient हैं future errors prevent या detect करने के लिए।</p>

<h2>Consequences</h2>

<p><strong>Market reaction:</strong> Stock prices significantly decline। Financial statements पर adverse opinions के लिए decline catastrophic हो सकता है।</p>

<p><strong>Delisting risk:</strong> Stock exchanges require timely filing with clean opinions। Adverse opinion exchange compliance review trigger कर सकती है।</p>

<p><strong>Credit impact:</strong> Loan agreements often unqualified opinion require करते हैं। Adverse opinion default event constitute कर सकती है।</p>

<p><strong>SEC investigation:</strong> SEC closely adverse opinions monitor करती है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में ICAI (Institute of Chartered Accountants of India) similar audit opinion framework follow करता है — qualified, adverse, और disclaimer opinions। Satyam Computer Services fraud (2009) India का सबसे notable case था जहाँ auditor ने massive accounting fraud miss कर दिया। US-listed Indian ADRs (जैसे Infosys, HDFC Bank) को US PCAOB standards follow करने पड़ते हैं। Indian investors US stocks evaluate करते समय audit opinion section हमेशा check करें 10-K में।</p>

<p>Brefyr adverse audit opinions — financial statements और internal controls दोनों पर — highest-severity risk indicators के रूप में flag करता है।</p>
`,
};
