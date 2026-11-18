import type { GlossaryTerm } from "../../types";

export const termFilerCategoryHi: GlossaryTerm = {
  slug: "filer-category",
  term: "Filer Category (फाइलर कैटेगरी)",
  title: "SEC Filer Categories — Company Size से Filing Rules कैसे बदलते हैं",
  shortDefinition:
    "SEC companies को size के basis पर categories में divide करता है: Large Accelerated Filer, Accelerated Filer, Non-Accelerated Filer, और Smaller Reporting Company। Category filing deadlines और disclosure requirements determine करती है।",
  metaDescription:
    "SEC filer categories समझें — Large Accelerated, Accelerated, Non-Accelerated, SRC, और EGC। Filing deadlines, SOX requirements, और small-cap investors के लिए implications।",
  wordCount: 400,
  category: "Regulatory",
  tags: ["filer-category", "sec", "disclosure", "small-cap", "regulation"],
  relatedSlugs: ["10-k-filing", "sec-edgar", "small-cap", "material-weakness"],
  relatedTerms: ["10-k-filing", "sec-edgar", "small-cap", "material-weakness"],
  faq: [
    {
      question: "Company की filer category कैसे check करें?",
      answer: "10-K की cover page पर। 'Indicate by check mark' section में company खुद checkmark करती है: Large Accelerated Filer, Accelerated Filer, Non-Accelerated Filer, Smaller Reporting Company, Emerging Growth Company।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>SEC हर public company को size और public float के basis पर categorize करता है। Category determine करती है: filing deadlines, disclosure detail level, SOX compliance requirements, और audit standards।</p>

<h2>Categories</h2>

<table>
<tr><th>Category</th><th>Public Float</th><th>10-K Deadline</th><th>SOX 404(b) Audit</th></tr>
<tr><td><strong>Large Accelerated Filer</strong></td><td>$700M+</td><td>60 days</td><td>Required</td></tr>
<tr><td><strong>Accelerated Filer</strong></td><td>$75M-$700M</td><td>75 days</td><td>Required</td></tr>
<tr><td><strong>Non-Accelerated Filer</strong></td><td>&lt;$75M</td><td>90 days</td><td>Not required</td></tr>
<tr><td><strong>Smaller Reporting Company</strong></td><td>&lt;$250M (or revenue &lt;$100M)</td><td>Scaled disclosures</td><td>Not required</td></tr>
<tr><td><strong>Emerging Growth Company</strong></td><td>IPO within 5 years</td><td>Various exemptions</td><td>Not required</td></tr>
</table>

<h2>Small-Cap Investors के लिए Implications</h2>

<p><strong>Less disclosure:</strong> Smaller Reporting Companies और EGCs reduced disclosure requirements enjoy करती हैं — shorter risk factors, simplified executive compensation tables, no SOX 404(b) internal controls audit। इसका मतलब: <strong>आपको harder work करना होगा</strong> fundamental research के लिए।</p>

<p><strong>Later deadlines:</strong> Non-accelerated filers को 90 days मिलते हैं vs 60 for large filers। इसका मतलब small-cap 10-K data ज़्यादा delayed होती है।</p>

<p><strong>No internal controls audit:</strong> Non-accelerated filers को SOX 404(b) auditor attestation ज़रूरी नहीं। Internal controls weakness undetected रह सकती है — additional risk factor small-cap investing में।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI listing categories (Main Board, SME) somewhat similar concept है। US filer categories small-cap investors के लिए critical context provide करती हैं — reduced disclosure ≠ bad company, लेकिन = more research needed। Brefyr हर company की filer category 10-K cover page से extract करता है।</p>
`,
};
