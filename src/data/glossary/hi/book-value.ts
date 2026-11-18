import type { GlossaryTerm } from "../../types";

export const termBookValueHi: GlossaryTerm = {
  slug: "book-value",
  term: "Book Value (बुक वैल्यू)",
  title: "Book Value — Company की Accounting Value कैसे समझें",
  shortDefinition:
    "Book value company की net asset value है — total assets minus total liabilities। यह बताता है कि अगर company आज बंद हो जाए तो shareholders को per share कितना मिलेगा।",
  metaDescription:
    "Book value क्या है? Company की net asset value और Price-to-Book ratio समझें — value investing में कैसे use करें और US stocks analyze करने का guide।",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["valuation", "book-value", "price-to-book", "balance-sheet"],
  relatedSlugs: ["pe-ratio", "market-capitalization", "enterprise-value", "10-k-filing"],
  relatedTerms: ["pe-ratio", "market-capitalization", "enterprise-value", "10-k-filing"],
  faq: [
    {
      question: "P/B ratio कब useful है?",
      answer:
        "P/B ratio (Price ÷ Book Value per Share) asset-heavy industries — banks, insurance, real estate, manufacturing — में सबसे useful है। P/B 1 से कम मतलब stock book value से cheap trade कर रहा है। लेकिन tech companies (Apple, Google) में book value meaningless है क्योंकि value intellectual property और brand में है, balance sheet पर नहीं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Book value company का accounting net worth है:</p>

<p><strong>Book Value = Total Assets - Total Liabilities</strong></p>

<p><strong>Book Value Per Share = Book Value ÷ Total Outstanding Shares</strong></p>

<p>Balance sheet पर directly मिलता है — "Total Stockholders' Equity" section 10-K की Item 8 में।</p>

<h2>Price-to-Book (P/B) Ratio</h2>

<p><strong>P/B = Stock Price ÷ Book Value Per Share</strong></p>

<ul>
<li><strong>P/B < 1:</strong> Stock book value से cheap — either undervalued या market problems expect करता है</li>
<li><strong>P/B 1-3:</strong> Normal range ज़्यादातर sectors के लिए</li>
<li><strong>P/B 5+:</strong> Premium valuation — usually growth companies</li>
</ul>

<h2>कब Useful, कब Useless</h2>

<p><strong>Useful:</strong> Banks (JPMorgan P/B ~1.8), insurance companies, REITs, manufacturing — asset-heavy businesses जहाँ balance sheet assets real value represent करती हैं।</p>

<p><strong>Useless:</strong> Tech companies (Apple P/B ~45), software companies, service businesses — इनकी real value intellectual property, brand, और human capital में है जो balance sheet पर नहीं दिखती। Google का search algorithm balance sheet पर $0 value है।</p>

<h2>Tangible Book Value</h2>

<p>Tangible Book Value = Book Value - Intangible Assets (goodwill, patents, trademarks)</p>

<p>यह conservative measure है। Acquisition-heavy companies में goodwill book value inflate कर सकता है। Tangible book value ज़्यादा reliable floor value देता है।</p>

<h2>भारतीय निवेशकों के लिए Book Value</h2>

<p>Indian investors P/B ratio Indian banks (SBI, HDFC Bank) analyze करने में use करते हैं। Same logic US banks पर apply करें:</p>

<ul>
<li><strong>US bank comparison:</strong> JPMorgan P/B ~1.8, Bank of America ~1.1, Goldman Sachs ~1.5। Indian banks: HDFC Bank P/B ~3, SBI ~1.8। US banks relatively cheaper on P/B basis।</li>
<li><strong>Financial sector opportunity:</strong> RBI LRS से US bank stocks accessible हैं। P/B based value investing Indian investors के skill set में already है।</li>
<li><strong>10-K essential:</strong> Book value 10-K balance sheet से verify करें — recent write-downs, impairments, या goodwill changes value significantly affect कर सकते हैं।</li>
</ul>
`,
};
