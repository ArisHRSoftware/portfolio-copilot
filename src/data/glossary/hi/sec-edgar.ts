import type { GlossaryTerm } from "../../types";

export const termSecEdgarHi: GlossaryTerm = {
  slug: "sec-edgar",
  term: "SEC EDGAR (इलेक्ट्रॉनिक डेटा सिस्टम)",
  title: "SEC EDGAR — US Companies की Filings Free में कैसे देखें",
  shortDefinition:
    "EDGAR (Electronic Data Gathering, Analysis, and Retrieval) SEC का online database है जहाँ सभी US public companies की filings free में available हैं — 10-K, 10-Q, 8-K, Form 4, और बाकी सब।",
  metaDescription:
    "SEC EDGAR क्या है? सीखें कैसे EDGAR database पर किसी भी US company की SEC filings free में ढूंढें और पढ़ें। भारतीय निवेशकों के लिए step-by-step guide।",
  wordCount: 700,
  category: "Regulatory",
  tags: ["sec", "edgar", "database", "filings", "research"],
  relatedSlugs: ["10-k-filing", "10-q-filing", "8-k-filing", "form-4"],
  relatedTerms: ["10-k-filing", "10-q-filing", "8-k-filing", "form-4", "13f-filing"],
  faq: [
    {
      question: "EDGAR पर filing कैसे search करें?",
      answer:
        "sec.gov/cgi-bin/browse-edgar पर जाएं। Company name या ticker symbol (जैसे AAPL) enter करें। Filing type select करें (10-K, 10-Q, 8-K, etc.)। Results में filings date-wise दिखेंगी। किसी भी filing पर click करें — full text free में पढ़ सकते हैं।",
    },
    {
      question: "क्या EDGAR भारत से access कर सकते हैं?",
      answer:
        "हाँ, EDGAR पूरी दुनिया में free access है। कोई registration, login, या subscription ज़रूरी नहीं। बस sec.gov/edgar पर जाएं और search करें। EDGAR API भी available है developers के लिए।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>EDGAR (Electronic Data Gathering, Analysis, and Retrieval) U.S. Securities and Exchange Commission (SEC) का official online database है। यहाँ हर US public company की हर SEC filing — 10-K, 10-Q, 8-K, Form 4, proxy statements, registration statements — सब free में available है।</p>

<p>EDGAR 1996 से operational है और आज दुनिया का सबसे बड़ा corporate disclosure database है। <strong>कोई भी, कहीं भी, कभी भी</strong> — free में access कर सकता है। कोई registration ज़रूरी नहीं।</p>

<h2>EDGAR कैसे Use करें</h2>

<h3>Company Search</h3>
<p>EDGAR की full-text search पर जाएं (efts.sec.gov/LATEST/search-index)। Company name, ticker symbol, या CIK number enter करें। Results में सभी filings chronological order में दिखेंगी।</p>

<h3>Filing Type Filter</h3>
<p>Specific filing type देखने के लिए filter use करें:</p>
<ul>
<li><strong>10-K</strong> — Annual report (साल में एक बार)</li>
<li><strong>10-Q</strong> — Quarterly report (Q1, Q2, Q3)</li>
<li><strong>8-K</strong> — Material event report (कभी भी)</li>
<li><strong>4</strong> — Insider trading disclosure (Form 4)</li>
<li><strong>DEF 14A</strong> — Proxy statement (annual meeting से पहले)</li>
<li><strong>13F-HR</strong> — Institutional holdings (quarterly)</li>
</ul>

<h3>XBRL Data</h3>
<p>EDGAR filings structured XBRL format में भी available हैं। XBRL से financial data machine-readable format में मिलता है — Excel, Python, या किसी analytics tool में directly import कर सकते हैं।</p>

<h2>EDGAR RSS Feeds</h2>

<p>EDGAR real-time RSS feeds provide करता है। किसी specific company की नई filings के लिए RSS subscribe कर सकते हैं — यह सबसे fast way है filings track करने का।</p>

<p>Brefyr EDGAR की RSS feeds को automatically monitor करता है और हर नई filing को minutes में AI-analyze करता है। आपको EDGAR पर manually check करने की ज़रूरत नहीं।</p>

<h2>भारतीय निवेशकों के लिए EDGAR</h2>

<p>India में SEBI की EDIFAR system कुछ हद तक EDGAR जैसी है, लेकिन US EDGAR कहीं ज़्यादा comprehensive और user-friendly है।</p>

<p><strong>Indian brokerages vs EDGAR:</strong> Vested, INDMoney, और Groww International basic financial data दिखाते हैं, लेकिन full SEC filings नहीं दिखाते। Risk factors, management discussion, insider trades, auditor opinions — ये सब EDGAR पर हैं, brokerage apps पर नहीं।</p>

<p><strong>Time zone advantage:</strong> EDGAR filings US business hours में publish होती हैं (IST रात 8:30 से सुबह 5:00)। Indian morning routine में EDGAR check करने से आपको previous day की filings सबसे पहले मिल सकती हैं।</p>

<p>Brefyr EDGAR data को automatically process करता है — हर filing को AI analyze करता है, significance score (1-10) assign करता है, और plain-language summary generate करता है। आपको raw EDGAR text पढ़ने की ज़रूरत नहीं।</p>
`,
};
