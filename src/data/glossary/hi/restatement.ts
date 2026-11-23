import type { GlossaryTerm } from "../../types";

export const termRestatementHi: GlossaryTerm = {
  slug: "restatement",
  term: "Financial Restatement (फाइनेंशियल रीस्टेटमेंट)",
  title: "Financial Restatement — जब Companies Previously Reported Numbers में Errors Correct करती हैं",
  shortDefinition:
    "Financial restatement तब होता है जब company previously filed financial statements revise करती है accounting, revenue recognition, expense classification, या अन्य financial reporting में material errors correct करने के लिए — amended SEC filings require होती हैं।",
  metaDescription:
    "Financial restatement क्या है? Companies क्यों restate करती हैं, Big R और little r restatements में difference, stock price और investor trust पर impact, और SEC filings में कैसे spot करें।",
  wordCount: 450,
  category: "Accounting & Audit",
  tags: ["restatement", "accounting-error", "sec-filing", "financial-reporting", "material-weakness"],
  relatedSlugs: ["material-weakness", "gaap", "audit-opinion", "sarbanes-oxley", "clawback-provision"],
  relatedTerms: ["material-weakness", "gaap", "audit-opinion", "sarbanes-oxley", "clawback-provision"],
  faq: [
    {
      question: "Big R और little r restatement में क्या difference है?",
      answer:
        "Big R restatement (formally ASC 250-10-45-23 under) में company को SEC को amended 10-K या 10-Q reports file करने होते हैं, prior period financial statements restate करते हुए। Little r restatement (revision) errors correct करता है जो prior period statements में immaterial थे लेकिन current period में correct करने पर material होंगे। Big R बहुत serious हैं — clawback provisions trigger करते हैं, SEC scrutiny, securities litigation, और significant stock price impact।",
    },
    {
      question: "Restatements stock price कैसे affect करते हैं?",
      answer:
        "Big R restatements typically significant stock price declines cause करते हैं — average 10-20% या ज़्यादा। Error की nature और size, fraud suspicion, और company की disclosure clarity पर magnitude depend करता है। Stock subsequent months में भी underperform करता है। Restatements frequently securities class action lawsuits, SEC investigations, auditor changes, और management turnover trigger करते हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Financial restatement previously issued financial statements का formal revision है errors correct करने के लिए जो original filing के बाद discover हुए। Restatements corporate financial reporting की सबसे significant negative events में से हैं — ये investors को बताते हैं कि जिन numbers पर उन्होंने rely किया वो wrong थे, internal controls fail हुए, और audit ने error miss किया। Severity minor corrections (misclassified expenses) से लेकर massive frauds (fabricated revenue) तक range करती है।</p>

<h2>Common Causes</h2>

<p><strong>Revenue recognition errors।</strong> सबसे frequent cause। Companies revenue prematurely recognize कर सकती हैं, return allowances properly account नहीं करतीं, या aggressive estimates use करती हैं। Technology, healthcare, और construction industries में ज़्यादा common।</p>

<p><strong>Expense misclassification।</strong> Costs capitalize करना जो expense होने चाहिए (assets inflate और expenses understate), liabilities accrue करने में failure।</p>

<p><strong>Tax accounting errors।</strong> Deferred tax assets/liabilities की incorrect calculation — complex और frequent restatement source।</p>

<p><strong>Fraud।</strong> Intentional manipulation — fabricating transactions, manipulating estimates, hiding expenses। Fraud-driven restatements सबसे severe हैं — SEC enforcement actions, criminal charges, massive litigation।</p>

<h2>Restatement Process</h2>

<p><strong>Discovery।</strong> Errors internal audit reviews, new management scrutiny, SEC comment letters, whistleblower reports, या audit process से discover होते हैं। Audit committee investigation lead करती है।</p>

<p><strong>Assessment।</strong> Company और auditor assess करते हैं कि error material है (Big R trigger) या immaterial (little r revision allow)। Quantitative और qualitative दोनों factors consider होते हैं।</p>

<p><strong>Disclosure और Filing।</strong> Big R restatements के लिए, company non-reliance 8-K (Item 4.02) file करती है — previously issued financial statements पर rely नहीं कर सकते। फिर amended 10-K/A या 10-Q/A reports file होते हैं।</p>

<h2>Consequences</h2>

<p><strong>Stock price impact:</strong> Average 10-20% decline। <strong>Securities litigation:</strong> Class action lawsuits — settlements hundreds of millions तक। <strong>Clawback provisions:</strong> Dodd-Frank rules के under executive incentive compensation recover करना होगा। <strong>Management changes:</strong> CFO turnover rates spike।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI restatements को similarly seriously लेता है। US market में restatement announcements investors के लिए immediate red flag हैं। Brefyr 8-K filings (Item 4.02) और amended filings monitor करता है — restatement announcements high-significance events flag करता है।</p>
`,
};
