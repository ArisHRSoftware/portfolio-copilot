import type { GlossaryTerm } from "../../types";

export const termForm8AHi: GlossaryTerm = {
  slug: "form-8a",
  term: "Form 8-A (फॉर्म 8-A)",
  title: "Form 8-A — Securities को Exchange पर List कराने का Registration Filing",
  shortDefinition:
    "Form 8-A एक SEC filing है जो companies securities के class को Exchange Act Section 12 के under register करने के लिए use करती हैं, ताकि वो national stock exchange पर list और trade हो सकें।",
  metaDescription:
    "Form 8-A क्या है? Companies securities कैसे register करती हैं exchange listing के लिए, कब file होती है, और investors के लिए क्या मतलब है।",
  wordCount: 420,
  category: "SEC Filings",
  tags: ["sec-filing", "securities-registration", "exchange-listing", "edgar", "ipo"],
  relatedSlugs: ["s-1-filing", "form-15", "8-k-filing", "sec-edgar", "10-k-filing"],
  relatedTerms: ["s-1-filing", "form-15", "8-k-filing", "sec-edgar", "10-k-filing"],
  faq: [
    {
      question: "Form 8-A कब file होती है?",
      answer:
        "IPO, spin-off, या new class of securities (preferred stock, warrants) को exchange पर list करते समय। IPO में Form 8-A typically S-1 effective होने के साथ file होती है। Trading start होना exchange listing approval और Securities Act registration effectiveness पर depend करता है।",
    },
    {
      question: "Securities Act registration और Exchange Act registration में क्या difference है?",
      answer:
        "Securities Act registration (S-1, S-3) specific offering register करती है — defined number of shares बेचने की permission। Exchange Act registration (Form 8-A, Form 10) securities का class register करती है ongoing trading और reporting के लिए। IPO में दोनों चाहिए: S-1 shares बेचने के लिए, Form 8-A common stock class register करने के लिए।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Form 8-A वो SEC filing है जो securities के class को formally Exchange Act reporting system में लाती है। यह SEC की सबसे छोटी filings में से एक है — अक्सर सिर्फ़ कुछ pages — लेकिन इसका effect गहरा है। एक बार Form 8-A file और effective हो जाने पर, company पूरी Exchange Act obligations accept कर लेती है: annual 10-K, quarterly 10-Q, 8-K current reports, proxy statements, insider trading disclosures।</p>

<p>Indian context: जैसे भारत में SEBI listing regulations हैं, वैसे ही US में Form 8-A exchange listing का formal step है। Indian companies जो US में ADR list कराती हैं, उन्हें भी similar registration process follow करना होता है।</p>

<h2>Form 8-A का Purpose</h2>

<p>Exchange Act Section 12(b) exchange listing के लिए registration require करता है। Form 8-A primary vehicle है — intentionally streamlined है क्योंकि company ने already S-1 जैसी detailed filing submit कर दी होती है। Same information duplicate करने की ज़रूरत नहीं — Form 8-A incorporate by reference करती है।</p>

<h2>कब File होती है</h2>

<p><strong>IPO:</strong> सबसे common context। S-1 shares बेचने के लिए file होती है, Form 8-A common stock Exchange Act के under register करने के लिए। IPO pricing से just पहले file होती है।</p>

<p><strong>Spin-offs:</strong> Parent company subsidiary spin off करती है तो subsidiary Form 8-A file करती है independent trading के लिए securities register करने।</p>

<p><strong>New classes of securities:</strong> Already-public company preferred stock, warrants, या rights issue करती है exchange listing के लिए तो separate Form 8-A file होती है।</p>

<p><strong>Exchange transfers:</strong> NASDAQ से NYSE जाने पर new Form 8-A file हो सकती है।</p>

<h2>Form 8-A में क्या होता है</h2>

<p>Form minimal है — company identify, securities class, exchange name, और securities की rights/attributes। Substantive content incorporation by reference से आती है। दो items specifically covered:</p>

<p><strong>Item 1:</strong> Securities description — voting rights, dividend rights, liquidation preferences, conversion features। Common stock IPO में usually brief; preferred stock या complex instruments में detailed।</p>

<p><strong>Item 2:</strong> Exhibits — articles of incorporation, bylaws, certificates of designation।</p>

<h2>Exchange Act Obligations</h2>

<p>Form 8-A effective होने के बाद company full SEC reporting regime में enter करती है: 10-K (annual), 10-Q (quarterly), 8-K (current events), proxy statements, insider ownership reports (Forms 3, 4, 5), beneficial ownership reports (Schedules 13D, 13G)। Compliance cost $1-5 million annually — smaller companies के लिए significant burden है।</p>

<h2>Investors के लिए Relevance</h2>

<p>ज़्यादातर investors Form 8-A सिर्फ़ IPO और new security issuance के context में encounter करते हैं। Filing में ज़्यादा analytical value नहीं — important information S-1 में है। लेकिन Form 8-A समझना important है क्योंकि यह वो moment represent करती है जब company public company life की पूरी obligations accept करती है।</p>

<p>Brefyr पर Form 8-A filings company filing timeline में note होती हैं — context provide करती हैं कि public reporting obligations कब शुरू हुईं।</p>
`,
};
