import type { GlossaryTerm } from "../../types";

export const termRsuHi: GlossaryTerm = {
  slug: "rsu",
  term: "RSU (रिस्ट्रिक्टेड स्टॉक यूनिट)",
  title: "RSU — Employee Stock Compensation कैसे काम करता है",
  shortDefinition:
    "RSU (Restricted Stock Unit) employee compensation का एक form है जहाँ company future date पर shares देने का promise करती है, usually vesting schedule के through।",
  metaDescription:
    "RSU क्या है? Employee stock compensation समझें — vesting schedule, tax implications, और Form 4 पर RSU transactions कैसे दिखती हैं। भारतीय IT professionals के लिए relevant guide।",
  wordCount: 450,
  category: "Trading",
  tags: ["rsu", "compensation", "vesting", "stock-options"],
  relatedSlugs: ["form-4", "insider-trading", "dilution", "10-k-filing"],
  relatedTerms: ["form-4", "insider-trading", "dilution", "10-k-filing"],
  faq: [
    {
      question: "RSU और stock options में क्या difference है?",
      answer: "RSU shares directly देती हैं vesting पर — guaranteed value (जब तक stock zero न हो)। Stock options right देते हैं shares खरीदने का एक fixed price (strike price) पर — अगर stock price strike से नीचे गिर जाए तो options worthless। RSU safer है employee के लिए।",
    },
    {
      question: "RSU vest होने पर Form 4 file होती है?",
      answer: "हाँ। जब insiders (executives) की RSU vest होती है, Form 4 file होती है (transaction code 'A' for award/grant, 'M' for exercise)। Often insiders vest हुई RSU का कुछ portion immediately sell करते हैं tax pay करने के लिए — यह routine selling है, bearish signal नहीं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>RSU (Restricted Stock Unit) modern tech companies में employee compensation का primary form है। Google, Microsoft, Meta, Amazon — ये सब RSU heavily use करती हैं top talent attract और retain करने के लिए।</p>

<h2>RSU कैसे काम करता है</h2>

<ol>
<li><strong>Grant:</strong> Company employee को RSU grant करती है (मान लें 1,000 RSUs)</li>
<li><strong>Vesting:</strong> RSU time ke saath vest होती हैं — typically 4-year schedule (25% per year)</li>
<li><strong>Conversion:</strong> Vest होने पर RSU actual shares बन जाती हैं — employee own करता है</li>
<li><strong>Tax:</strong> Vesting पर shares की fair market value income tax के under taxable है</li>
</ol>

<h2>Investors के लिए RSU क्यों Matters</h2>

<p><strong>Dilution:</strong> RSU vest होने पर new shares create होती हैं → existing shareholders diluted। 10-K की financial statements notes में "stock-based compensation" section बताता है कितनी dilution हो रही है। ज़्यादा RSU = ज़्यादा dilution = existing shares less valuable।</p>

<p><strong>Stock-Based Compensation (SBC):</strong> Company income statement पर SBC expense report करती है लेकिन ज़्यादातर "Adjusted" metrics में इसे add back करती हैं। Tech companies में SBC significant हो सकता है — Salesforce, Uber, Snowflake में SBC revenue का 20-30% हो सकता है।</p>

<p><strong>Insider selling context:</strong> जब CEO Form 4 file करता है showing shares sold, check करें — RSU vest पर tax selling है या discretionary selling? Tax selling routine है और bearish signal नहीं।</p>

<h2>भारतीय IT Professionals और RSU</h2>

<p>Indian IT professionals जो US companies (Google, Microsoft, Amazon) में काम करते हैं, RSU directly receive करते हैं। Key tax implications:</p>

<ul>
<li><strong>India tax:</strong> RSU vest होने पर fair market value Indian income tax under taxable है। Sale पर capital gains tax additional।</li>
<li><strong>US tax:</strong> US employer withholding करता है vesting पर। India में credit available (DTAA)।</li>
<li><strong>Timing:</strong> Indian IT professionals अक्सर RSU vest dates पर sell करते हैं — ये Form 4 filings often appear as large selling volumes। Context: यह programmatic/tax selling है।</li>
</ul>

<p>Indian investors के perspective से: heavy SBC वाली companies (annual SBC > 15% of revenue) में net profit inflated दिख सकता है अगर SBC ignore करें। 10-K में "GAAP vs Non-GAAP reconciliation" carefully पढ़ें — Brefyr AI summary इसे highlight करती है।</p>
`,
};
