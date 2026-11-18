import type { GlossaryTerm } from "../../types";

export const term8KFilingHi: GlossaryTerm = {
  slug: "8-k-filing",
  term: "8-K फाइलिंग (8-K Filing)",
  title: "8-K फाइलिंग — Material Events जो Stock Prices को Move करते हैं",
  shortDefinition:
    "8-K एक current report है जो SEC के पास तब file होती है जब किसी public company में कोई significant event होता है — जैसे acquisition, CEO departure, bankruptcy, या auditor change।",
  metaDescription:
    "8-K filing क्या है? SEC की material event disclosure को समझें — 8-K कब file होती है, 9 categories of reportable events, और investors इसे कैसे use करें।",
  wordCount: 700,
  category: "SEC Filings",
  tags: ["sec-filing", "material-event", "current-report", "edgar"],
  relatedSlugs: ["10-k-filing", "10-q-filing", "sec-edgar", "form-4"],
  relatedTerms: ["10-k-filing", "10-q-filing", "sec-edgar", "form-4", "going-concern"],
  faq: [
    {
      question: "8-K कब file होती है?",
      answer:
        "Company को material event होने के 4 business days के अंदर 8-K file करनी होती है। कुछ events (जैसे bankruptcy filing) तो तुरंत report होते हैं। 10-K और 10-Q schedule पर file होती हैं, लेकिन 8-K कभी भी आ सकती है — यही इसे important बनाता है।",
    },
    {
      question: "कौन से events 8-K trigger करते हैं?",
      answer:
        "SEC ने 9 categories define की हैं: (1) Business और operations में changes, (2) Financial information, (3) Securities और trading markets, (4) Accountant या auditor change, (5) Corporate governance, (6) Asset-backed securities, (7) Regulation FD disclosures, (8) Other events, (9) Financial statements और exhibits। सबसे common triggers हैं: acquisitions, executive departures, earnings announcements, और debt agreements।",
    },
    {
      question: "भारतीय निवेशकों को 8-K क्यों track करनी चाहिए?",
      answer:
        "8-K real-time news feed है आपकी holdings के लिए। जब आपकी company का CEO resign करता है या कोई major acquisition announce होती है, 8-K में सबसे पहले officially सामने आता है — Twitter rumors या news articles से पहले। Brefyr पर हर 8-K को AI automatically analyze करता है और significance score देता है।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>8-K filing SEC के पास file होने वाली एक current report है जो तब file होती है जब किसी company में कोई material (significant) event होता है। 10-K (annual) और 10-Q (quarterly) schedule पर file होती हैं, लेकिन 8-K कभी भी आ सकती है — और अक्सर यही filings stock price को सबसे ज़्यादा move करती हैं।</p>

<p>SEC require करता है कि company material event के <strong>4 business days</strong> के अंदर 8-K file करे। यह deadline strict है — late filing SEC action trigger कर सकती है।</p>

<h2>कौन से Events 8-K Trigger करते हैं</h2>

<p>SEC ने 9 broad categories define की हैं। सबसे common और important triggers:</p>

<h3>Acquisitions और Dispositions</h3>
<p>जब company कोई significant business acquire करती है या sell करती है। Deal terms, purchase price, और expected synergies 8-K में disclose होती हैं। Indian investors के लिए: अगर आपकी holding company ने $1 billion का acquisition announce किया, तो 8-K में full details मिलेंगी।</p>

<h3>Results of Operations (Earnings)</h3>
<p>बहुत सी companies earnings results को 8-K के through announce करती हैं, official 10-Q file होने से पहले। यह "earnings press release" typically Item 2.02 के under file होती है।</p>

<h3>Executive Changes</h3>
<p>CEO, CFO, या किसी senior executive का departure या appointment। यह corporate governance signal है — unexpected CEO resignation एक red flag हो सकती है, जबकि planned succession positive है।</p>

<h3>Auditor Change</h3>
<p>Auditing firm बदलना SEC को immediately report करना होता है। Big 4 (Deloitte, EY, KPMG, PwC) से smaller firm में switch accounting disagreements indicate कर सकता है।</p>

<h3>Bankruptcy या Receivership</h3>
<p>सबसे serious 8-K — company ने bankruptcy file की है। यह filing तुरंत होती है और stock price पर immediate impact होता है।</p>

<h2>8-K कैसे पढ़ें</h2>

<p><strong>Step 1:</strong> Subject line पढ़ें — "Entry into a Material Agreement" या "Departure of Directors" जैसे headers बताते हैं कि filing किस बारे में है।</p>

<p><strong>Step 2:</strong> Item number check करें। Item 1.01 (Material Agreement) और Item 5.02 (Executive Departure) सबसे market-moving होते हैं।</p>

<p><strong>Step 3:</strong> Exhibits देखें — actual agreements, press releases, और letters अक्सर exhibits में attached होते हैं।</p>

<h2>भारतीय निवेशकों के लिए 8-K</h2>

<p>अगर आप Vested, INDMoney, या Groww से US stocks hold करते हैं, तो 8-K alerts set करना critical है। Indian market timings (IST) और US market timings (ET) में 9.5-13 hours का gap है — जब भारत में रात होती है, तब 8-K file हो सकती है और stock price open से पहले react कर सकता है।</p>

<p>Brefyr पर हर 8-K automatically AI-analyzed होती है। High significance score (7+) वाली filings alert trigger करती हैं, ताकि आप important events miss न करें — चाहे time zone कोई भी हो।</p>

<p>RBI LRS scheme के तहत आपका invest किया capital protected रखने के लिए, 8-K monitoring essential है। एक bankruptcy 8-K पर तुरंत action लेने और देर से react करने में बहुत फ़र्क हो सकता है।</p>
`,
};
