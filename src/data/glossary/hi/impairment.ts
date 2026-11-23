import type { GlossaryTerm } from "../../types";

export const termImpairmentHi: GlossaryTerm = {
  slug: "impairment",
  term: "Asset Impairment (एसेट इम्पेयरमेंट)",
  title: "Asset Impairment — जब Companies अपनी Assets की Value Write Down करती हैं",
  shortDefinition:
    "Asset impairment एक accounting write-down है जो तब होती है जब balance sheet पर asset की carrying value उसकी recoverable amount exceed करती है — company को book value reduce करनी होती है और income statement पर loss record।",
  metaDescription:
    "Asset impairment क्या है? Impairment testing कैसे काम करती है, write-downs trigger क्या करता है, financial statements पर impact, और SEC filings में कहाँ मिलती है।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["impairment", "write-down", "goodwill", "asset-valuation", "accounting"],
  relatedSlugs: ["goodwill", "intangible-assets", "gaap", "going-concern", "restatement"],
  relatedTerms: ["goodwill", "intangible-assets", "gaap", "going-concern", "restatement"],
  faq: [
    {
      question: "क्या impairment charge cash expense है?",
      answer:
        "नहीं। Impairment non-cash accounting entry है — asset value reduce और income statement पर loss, लेकिन cash company से बाहर नहीं जाती। Cash तो originally asset acquire करते वक़्त खर्च हो चुकी थी। Non-GAAP measures और cash flow analysis में add back होती है। लेकिन real economic loss represent करती है — investment expected value generate नहीं कर पाई।",
    },
    {
      question: "Impairment और depreciation में क्या difference है?",
      answer:
        "Depreciation systematic allocation है asset cost की useful life में — regular schedule, asset value regardless। Impairment event-driven write-down — carrying value recoverable amount exceed करे तब। Depreciation expected consumption; impairment unexpected decline। Asset depreciated भी हो सकती है और impaired भी।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Asset impairment तब होती है जब company determine करती है कि balance sheet पर asset की carrying value उसकी fair value या recoverable amount exceed करती है। Company asset recoverable value तक write down करती है और impairment charge record — income statement पर loss। Millions से billions dollars तक हो सकती है, particularly goodwill और intangible assets acquisitions से जो expected value deliver नहीं कर पाईं।</p>

<p>Indian context: Indian companies भी Ind AS 36 के under impairment testing करती हैं — concept same है। Tata Motors ने JLR goodwill impairment ली, Vodafone Idea ने massive write-downs लिए — Indian investors को concept familiar होगा।</p>

<h2>Types of Asset Impairment</h2>

<p><strong>Goodwill impairment:</strong> सबसे बड़ी और visible। ASC 350 के under annually test + triggering events पर। Reporting unit carrying amount > fair value = goodwill impaired। GAAP में permanent — reverse नहीं हो सकती।</p>

<p><strong>Intangible asset impairment:</strong> Finite-lived (customer relationships, technology, patents) triggering events पर test। Indefinite-lived (trade names) annually test goodwill जैसे।</p>

<p><strong>Long-lived asset impairment:</strong> PP&E और दूसरी long-lived assets — carrying value vs expected undiscounted future cash flows compare। Exceed करे तो fair value तक write down।</p>

<p><strong>Investment impairment:</strong> Equity investments, debt securities — fair value significantly below carrying value drop हो और decline other-than-temporary consider हो।</p>

<h2>Triggers</h2>

<p>Market capitalization significant decline, financial performance deterioration, adverse industry/economic conditions, key customers/contracts loss, technology/regulation changes, management disposal decision, equity carrying amount > market cap। Goodwill और indefinite-lived intangibles annual testing required regardless।</p>

<h2>Financial Statements पर Impact</h2>

<p><strong>Income statement:</strong> Operating income reduce (या separate line item)। Large impairments में GAAP net income significant loss swing हो सकती है underlying business profitable होने पर भी।</p>

<p><strong>Balance sheet:</strong> Asset carrying value permanently reduce। Goodwill impairments total assets और shareholders' equity directly reduce — financial ratios affect।</p>

<p><strong>Cash flow statement:</strong> No impact operating cash flows — non-cash charge। Net income से operating cash flow reconciliation में add-back।</p>

<h2>Investors को क्या Signal करती हैं</h2>

<p>Management का original investment thesis wrong था। Recurring impairments = systematic overpaying pattern या poor strategic decisions। Timing भी informative — कुछ companies already-bad quarters में large impairments "clear the decks" के लिए लेती हैं ("big bath" accounting)।</p>

<h2>SEC Filings में</h2>

<p><strong>10-K:</strong> Annual impairment testing results, notes में methodology, assumptions, sensitivity analysis। <strong>10-Q:</strong> Interim impairments। <strong>8-K:</strong> Material charges current events। <strong>MD&A:</strong> Factors discussion।</p>

<p>Brefyr impairment disclosures process करती है 10-K/10-Q से — material write-downs flag करती है high-significance events के रूप में।</p>
`,
};
