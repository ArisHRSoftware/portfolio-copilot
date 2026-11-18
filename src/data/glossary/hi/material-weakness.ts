import type { GlossaryTerm } from "../../types";

export const termMaterialWeaknessHi: GlossaryTerm = {
  slug: "material-weakness",
  term: "Material Weakness (मटीरियल वीकनेस)",
  title: "Material Weakness — Financial Reporting में Serious Problem कैसे Spot करें",
  shortDefinition:
    "Material weakness internal controls में एक serious deficiency है जहाँ financial statements में material misstatement का reasonable possibility है कि detect न हो। यह 10-K audit report में एक major red flag है।",
  metaDescription:
    "Material weakness क्या है? Internal controls over financial reporting में serious deficiency समझें — 10-K में कैसे spot करें और investor action plan।",
  wordCount: 400,
  category: "Regulatory",
  tags: ["material-weakness", "internal-controls", "audit", "sox", "10-k"],
  relatedSlugs: ["10-k-filing", "going-concern", "8-k-filing", "sec-edgar"],
  relatedTerms: ["10-k-filing", "going-concern", "8-k-filing", "sec-edgar"],
  faq: [
    {
      question: "Material weakness और significant deficiency में difference?",
      answer: "Material weakness सबसे severe — material misstatement reasonable possibility। Significant deficiency serious लेकिन material weakness से कम — misstatement possible लेकिन less than reasonable। Material weakness 10-K में publicly disclosed होती है; significant deficiency अक्सर audit committee को ही report होती है।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Material weakness Sarbanes-Oxley Act (SOX) के under define होती है: internal controls over financial reporting (ICFR) में एक deficiency, या deficiencies का combination, जहाँ reasonable possibility है कि financial statements में material misstatement timely detect न हो।</p>

<p>Simple शब्दों में: company की accounting systems इतनी weak हैं कि <strong>financial numbers गलत हो सकते हैं और किसी को पता भी न चले</strong>।</p>

<h2>Material Weakness 10-K में कहाँ मिलती है</h2>

<p>दो जगह:</p>
<ol>
<li><strong>Item 9A:</strong> Management's Report on Internal Controls। Management खुद disclose करता है।</li>
<li><strong>Auditor's Report:</strong> Accelerated filers के लिए auditor independently assess करता है।</li>
</ol>

<h2>Common Material Weaknesses</h2>

<ul>
<li><strong>Revenue recognition errors:</strong> Revenue गलत period में book हो रही है</li>
<li><strong>Insufficient IT controls:</strong> Financial systems secured नहीं</li>
<li><strong>Inadequate segregation of duties:</strong> Same person authorize और execute करता है</li>
<li><strong>Tax provision errors:</strong> Tax calculations unreliable</li>
<li><strong>Inventory or asset valuation issues:</strong> Assets overvalued</li>
</ul>

<h2>Investor Impact</h2>

<p><strong>Short-term:</strong> Material weakness disclosure often stock price drop trigger करता है (5-15% typical)। 8-K file हो सकती है।</p>

<p><strong>Long-term:</strong> Company को remediation plan implement करना होता है — additional audit costs, potential restatements, SEC scrutiny। Remediation usually 1-2 years लेता है।</p>

<p><strong>Restatement risk:</strong> Material weakness means past financial statements may need restatement — this is the worst case scenario क्योंकि numbers जिन पर investors relied, wrong थे।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Companies Act internal audit requirements हैं, लेकिन US SOX compliance ज़्यादा stringent है। Indian investors जो US stocks hold करते हैं, 10-K Item 9A ज़रूर check करें — material weakness disclosure serious red flag है। Brefyr AI automatically 10-K में material weakness और auditor concerns detect करती है और high significance score assign करती है।</p>
`,
};
