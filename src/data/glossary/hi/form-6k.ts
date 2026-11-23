import type { GlossaryTerm } from "../../types";

export const termForm6KHi: GlossaryTerm = {
  slug: "form-6k",
  term: "Form 6-K (फॉर्म 6-K)",
  title: "Form 6-K — Foreign Private Issuer की Current Report Filing",
  shortDefinition:
    "Form 6-K वो SEC filing है जो foreign private issuers use करती हैं material information report करने के लिए annual 20-F filings के बीच — यह domestic 8-K और 10-Q का combined international equivalent है।",
  metaDescription:
    "Form 6-K क्या है? Foreign companies US investors को interim results और material events कैसे report करती हैं — भारतीय निवेशकों के लिए complete guide।",
  wordCount: 430,
  category: "SEC Filings",
  tags: ["sec-filing", "foreign-private-issuer", "current-report", "edgar", "interim-report"],
  relatedSlugs: ["form-20f", "8-k-filing", "10-q-filing", "sec-edgar", "10-k-filing"],
  relatedTerms: ["form-20f", "8-k-filing", "10-q-filing", "sec-edgar", "10-k-filing"],
  faq: [
    {
      question: "6-K और 8-K में क्या difference है?",
      answer:
        "8-K domestic companies file करती हैं specific triggering events पर — four business days के भीतर। 6-K broader और flexible है: foreign issuers को वो information furnish करनी होती है जो वो home country में public करती हैं। कोई fixed triggering events list या specific deadline नहीं — SEC prompt furnishing expect करती है।",
    },
    {
      question: "6-K filings में 'furnished' क्यों लिखा होता है 'filed' की जगह?",
      answer:
        "'Filed' information Section 18 liability carry करती है — material misstatements पर sue हो सकता है। 'Furnished' information पर यह automatic liability नहीं लगती। ज़्यादातर 6-K reports furnished होती हैं, लेकिन अगर company registration statement में incorporate by reference करती है, तो effectively 'filed' हो जाती है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Form 6-K foreign company की home-country disclosures और US securities market के बीच bridge है। Foreign private issuers को 10-Q quarterly reports और 8-K current reports file करने से exemption मिलती है, तो 6-K उनका primary vehicle है material developments communicate करने का annual 20-F filings के बीच। इसके बिना Alibaba, Shell, या Toyota जैसी companies के investors को एक साल तक wait करना पड़ता comprehensive disclosures के लिए।</p>

<p>भारतीय context: TCS, Infosys जैसी Indian companies जो US-listed हैं (ADRs), वो 6-K filings करती हैं quarterly results share करने के लिए। Indian investors पहले से इन companies से familiar हैं — 6-K वही information US investors तक पहुँचाती है।</p>

<h2>6-K Filing कब Trigger होती है</h2>

<p>SEC Rule 13a-16 के under, foreign private issuer को promptly furnish करनी होती है वो material information जो:</p>
<ul>
<li><strong>Home country में public की:</strong> Quarterly या semi-annual results</li>
<li><strong>Home-country exchange पर file की:</strong> Regulatory filings</li>
<li><strong>Shareholders को distribute की:</strong> AGM materials, notices</li>
<li><strong>Press releases:</strong> Earnings, management changes, material contracts</li>
<li><strong>Material events:</strong> Acquisitions, divestitures, restructurings, legal proceedings</li>
</ul>

<p>Key principle: home-country investors को available information US investors को भी 6-K के through मिलनी चाहिए। Information asymmetry prevent करना goal है।</p>

<h2>6-K में क्या होता है</h2>

<p>Domestic 8-K जो structured format use करती है, 6-K essentially cover sheet है attached document के साथ — press release, financial statements, या shareholder communication। Format flexible है: single page से लेकर hundreds of pages तक। कुछ companies साल में 20-40 6-Ks file करती हैं, कुछ सिर्फ़ 3-5।</p>

<h2>Interim Financial Statements</h2>

<p>Investors के लिए सबसे valuable 6-K वो हैं जिनमें interim financials हों। ज़्यादातर foreign issuers quarterly या semi-annual results provide करती हैं क्योंकि home-country exchanges require करती हैं। लेकिन important caveat: ये financials unaudited हो सकती हैं, IFRS या home-country standards follow कर सकती हैं US GAAP की जगह, और domestic 10-Q जितनी detailed notes नहीं हो सकतीं।</p>

<h2>Filed vs Furnished</h2>

<p>ज़्यादातर 6-K reports 'furnished' होती हैं — Section 18 liability नहीं लगती। लेकिन company cover page पर box check करके specific 6-K को 'filed' treat करा सकती है — typically जब active registration statement में incorporate by reference करना हो।</p>

<h2>Investors कैसे Use करें</h2>

<p>Foreign private issuers में invest करने वालों को 6-K filings monitor करनी चाहिए जैसे domestic companies के लिए 8-K और 10-Q। Semi-annual financial statements effectively mid-year health check हैं। Management change, acquisition, या legal dispute वाली 6-K को 8-K जितना attention दें। Home-country regulatory notices ignore न करें — कभी-कभी material information सिर्फ़ वहीं मिलती है।</p>

<p>Brefyr पर 6-K filings same AI pipeline से process होती हैं जो domestic filings handle करती है — summaries extract करती हैं key financial metrics और material events।</p>
`,
};
