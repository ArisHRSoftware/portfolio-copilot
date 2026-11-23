import type { GlossaryTerm } from "../types";

export const termProForma: GlossaryTerm = {
  slug: "pro-forma",
  term: "Pro Forma Financial Statements",
  title: "Pro Forma Financial Statements — Hypothetical Financials That Show 'What If' Scenarios",
  shortDefinition:
    "Pro forma financial statements present hypothetical financial data showing what a company's results would have looked like if a specific transaction — such as a merger, acquisition, or divestiture — had occurred at an earlier date.",
  metaDescription:
    "What are pro forma financial statements? How they show the effect of transactions, SEC requirements under Article 11, the difference between SEC pro forma and company pro forma, and what investors should know.",
  wordCount: 850,
  category: "Accounting & Audit",
  tags: ["pro-forma", "financial-statements", "merger", "acquisition", "hypothetical"],
  relatedSlugs: ["gaap", "non-gaap-measures", "acquisition", "merger", "regulation-sx"],
  relatedTerms: ["gaap", "non-gaap-measures", "acquisition", "merger", "regulation-sx"],
  faq: [
    {
      question: "What is the difference between SEC pro forma and company pro forma?",
      answer:
        "SEC pro forma financial statements are required by Regulation S-X Article 11 for specific transactions (significant acquisitions, dispositions, restructurings) and follow strict rules about what adjustments are permitted — only adjustments that are directly attributable to the transaction, factually supportable, and expected to have a continuing impact. Company pro forma (or non-GAAP adjusted) measures are management's self-defined metrics that may include a broader range of adjustments. The two serve different purposes: SEC pro forma shows the effect of a transaction; company pro forma shows management's view of ongoing performance.",
    },
    {
      question: "When are pro forma financial statements required?",
      answer:
        "SEC rules require pro forma financial statements when a company completes or expects to complete a 'significant' acquisition or disposition — generally when the target represents more than 20% of the acquirer's total assets, revenue, or income. Pro forma statements are also required in S-4 registration statements for mergers, in S-1 statements when the IPO company has completed significant acquisitions, and in 8-K/A filings within 71 days after completing a significant acquisition.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Pro forma financial statements present a "what if" view of a company's financial results. They answer the question: what would the company's income statement, balance sheet, and cash flows look like if a specific transaction had occurred at a hypothetical earlier date? The most common use is in connection with mergers and acquisitions — the acquiring company's pro forma statements show the combined entity's results as if the acquisition had closed at the beginning of the fiscal year (for income statement purposes) or on the balance sheet date (for balance sheet purposes). This allows investors to evaluate the financial impact of the transaction on a pro forma basis.</p>

<h2 id="sec-requirements">SEC Pro Forma Requirements</h2>

<p>Article 11 of Regulation S-X specifies the requirements for pro forma financial information filed with the SEC. The rules are prescriptive:</p>

<p><strong>What must be presented:</strong> A pro forma condensed balance sheet as of the most recent balance sheet date, a pro forma condensed income statement for the most recent fiscal year, and a pro forma condensed income statement for the most recent interim period. The pro forma statements must start from the historical financial statements and show each adjustment in a separate column.</p>

<p><strong>Permitted adjustments:</strong> Only three types of pro forma adjustments are allowed: (1) Transaction Accounting Adjustments — adjustments to conform the target's accounting policies to the acquirer's and to record the acquisition at fair value (purchase price allocation). (2) Autonomous Entity Adjustments — adjustments to reflect operations as if the entity had been standalone (for carve-out transactions). (3) Management's Adjustments — synergies and other management estimates of the transaction's impact, but only if management has a reasonable basis and they are clearly labeled as management estimates.</p>

<h2 id="transaction-context">Common Transactions Requiring Pro Forma</h2>

<p><strong>Acquisitions.</strong> The acquiring company presents pro forma results showing the combined entity — the target's revenue, expenses, assets, and liabilities merged with the acquirer's, plus purchase price allocation adjustments (goodwill, intangible asset amortization, fair value adjustments to assets and liabilities).</p>

<p><strong>Divestitures.</strong> When a company sells a significant business unit, pro forma statements show the remaining company's results as if the divested business had not been part of the company during the periods presented.</p>

<p><strong>IPOs with predecessor transactions.</strong> If a company going public recently completed significant acquisitions, the S-1 must include pro forma statements showing the combined entity.</p>

<p><strong>Recapitalizations and restructurings.</strong> Significant changes to the capital structure (debt refinancings, equity raises, recapitalizations) may require pro forma presentation showing the impact on interest expense and capitalization.</p>

<h2 id="reading-pro-forma">How to Read Pro Forma Statements</h2>

<p>Pro forma financial statements typically present three columns: (1) the company's historical GAAP results, (2) the adjustments (each labeled and footnoted), and (3) the pro forma combined result. The footnotes are essential — they explain the basis for each adjustment, the assumptions used, and the preliminary nature of the purchase price allocation.</p>

<p>Key items to focus on: the pro forma revenue (does the combined entity have meaningful revenue scale?), pro forma operating income (are the acquired company's margins accretive or dilutive?), pro forma interest expense (how much debt was used to finance the transaction?), and goodwill created (how much of the purchase price exceeds the fair value of identifiable assets — a measure of how much the acquirer is paying for intangible value and synergy expectations).</p>

<h2 id="limitations">Limitations</h2>

<p>Pro forma statements are hypothetical — they show what would have happened, not what will happen. They typically exclude synergies (cost savings, revenue opportunities) that management expects from combining the businesses, unless management includes them as clearly labeled Management's Adjustments. Actual post-transaction results may differ significantly from pro forma because of integration challenges, customer attrition, employee turnover, and unforeseen complications.</p>

<h2 id="sec-filings">Pro Forma in SEC Filings</h2>

<ul>
<li><strong>8-K/A:</strong> Filed within 71 days of a significant acquisition, containing the target's historical financial statements and pro forma combined financial information.</li>
<li><strong>S-4:</strong> Merger registration statements contain extensive pro forma financial information for the combined entity.</li>
<li><strong>S-1:</strong> IPO prospectuses include pro forma statements when the company has completed significant recent transactions.</li>
<li><strong>10-K:</strong> May reference pro forma results in MD&A when discussing the impact of acquisitions completed during the year.</li>
</ul>

<p>Brefyr processes pro forma financial data from 8-K/A and S-4 filings, helping investors evaluate the financial impact of significant transactions on companies they follow.</p>
`,
};
