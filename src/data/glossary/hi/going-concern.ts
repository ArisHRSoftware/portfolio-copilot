import type { GlossaryTerm } from "../../types";

export const termGoingConcernHi: GlossaryTerm = {
  slug: "going-concern",
  term: "Going Concern (गोइंग कंसर्न)",
  title: "Going Concern — Bankruptcy Warning Sign कैसे पहचानें",
  shortDefinition:
    "Going concern warning तब आती है जब auditor को doubt होता है कि company अगले 12 months तक operate कर पाएगी या नहीं। यह 10-K में सबसे serious red flag है।",
  metaDescription:
    "Going concern warning क्या है? 10-K में bankruptcy risk कैसे पहचानें — auditor's report में going concern language, और investors को क्या action लेना चाहिए।",
  wordCount: 450,
  category: "Regulatory",
  tags: ["going-concern", "bankruptcy", "audit", "risk", "10-k"],
  relatedSlugs: ["10-k-filing", "material-weakness", "8-k-filing", "free-cash-flow"],
  relatedTerms: ["10-k-filing", "material-weakness", "8-k-filing", "free-cash-flow"],
  faq: [
    {
      question: "Going concern warning मतलब company bankrupt हो जाएगी?",
      answer: "ज़रूरी नहीं, लेकिन risk significant है। Going concern warning का मतलब auditor को 'substantial doubt' है कि company 12 months और survive कर पाएगी। कुछ companies recovery कर लेती हैं (additional funding, restructuring), लेकिन statistics दिखाते हैं कि going concern warnings के बाद bankruptcy rate significantly elevated होती है।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Going concern 10-K filing में सबसे <strong>alarming phrase</strong> है। जब independent auditor company की financial statements review करता है और conclude करता है कि "substantial doubt" है कि company continue as a going concern — मतलब auditor doubt कर रहा है कि company अगले 12 months survive करेगी।</p>

<h2>Going Concern कहाँ मिलता है</h2>

<p>10-K में दो जगह:</p>
<ol>
<li><strong>Auditor's Report:</strong> Independent auditor's report (usually 10-K की शुरुआत में) explicitly "going concern" mention करेगा।</li>
<li><strong>Notes to Financial Statements:</strong> Management भी going concern issues disclose करता है, usually Note 1 या Note 2 में।</li>
</ol>

<h2>कब Going Concern Warning आती है</h2>

<ul>
<li>Company के पास 12 months operations fund करने के लिए sufficient cash नहीं</li>
<li>Recurring losses और negative cash flow pattern</li>
<li>Debt covenants violated (loan terms broken)</li>
<li>Major customer loss या regulatory action</li>
<li>Inability to refinance maturing debt</li>
</ul>

<h2>Investors को क्या करना चाहिए</h2>

<p><strong>Immediate action:</strong> Going concern warning मिलने पर:</p>
<ol>
<li>Cash flow statement check करें — कितने months का runway बचा?</li>
<li>Debt maturity schedule देखें — कब debt due है?</li>
<li>Management plans पढ़ें — cost cutting, asset sales, या new financing planned?</li>
<li>Insider activity check करें — insiders sell कर रहे हैं? (Form 4)</li>
</ol>

<p><strong>Risk assessment:</strong> Going concern ≠ guaranteed bankruptcy। लेकिन probability significantly elevated है। Position size accordingly — full exit या significant reduction usually prudent।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में auditor's reports similar going concern opinions दे सकते हैं (Ind-AS compliant)। US system में going concern warning standardized और well-defined है।</p>

<p>RBI LRS से invest किया पैसा protect करने के लिए going concern warnings seriously लें। Brefyr AI हर 10-K analyze करता है और going concern language automatically detect करता है — high significance score (9-10) assign होता है। Alert set करें ताकि miss न हो।</p>
`,
};
