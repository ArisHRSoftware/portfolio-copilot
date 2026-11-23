import type { GlossaryTerm } from "../types";

export const termImpairment: GlossaryTerm = {
  slug: "impairment",
  term: "Asset Impairment",
  title: "Asset Impairment — When Companies Write Down the Value of Their Assets",
  shortDefinition:
    "An asset impairment is an accounting write-down that occurs when the carrying value of an asset on the balance sheet exceeds its recoverable amount, forcing the company to reduce the asset's book value and record a loss on the income statement.",
  metaDescription:
    "What is an asset impairment? How impairment testing works, what triggers write-downs, the impact on financial statements, and how to find impairment charges in SEC filings.",
  wordCount: 850,
  category: "Accounting & Audit",
  tags: ["impairment", "write-down", "goodwill", "asset-valuation", "accounting"],
  relatedSlugs: ["goodwill", "intangible-assets", "gaap", "going-concern", "restatement"],
  relatedTerms: ["goodwill", "intangible-assets", "gaap", "going-concern", "restatement"],
  faq: [
    {
      question: "Is an impairment charge a cash expense?",
      answer:
        "No. An impairment charge is a non-cash accounting entry — it reduces the asset's value on the balance sheet and records a loss on the income statement, but no cash leaves the company. The cash was spent when the asset was originally acquired. The impairment simply acknowledges that the asset is no longer worth what the company paid for it. This is why impairment charges are often added back in non-GAAP measures and cash flow analysis. However, the impairment represents a real economic loss — the investment did not generate the expected value.",
    },
    {
      question: "What is the difference between impairment and depreciation?",
      answer:
        "Depreciation is the systematic allocation of an asset's cost over its useful life — it occurs on a regular schedule regardless of the asset's current value. Impairment is an event-driven write-down that occurs when the asset's carrying value exceeds its recoverable amount. Depreciation reflects the expected consumption of value over time; impairment reflects an unexpected decline in value. An asset can be both depreciated on schedule and impaired when circumstances change.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An asset impairment occurs when a company determines that the carrying value of an asset on its balance sheet exceeds the asset's fair value or recoverable amount. The company must write down the asset to its recoverable value and record a loss — an impairment charge — on the income statement. Impairment charges can range from millions to billions of dollars, particularly for goodwill and intangible assets from acquisitions that failed to deliver expected value. While non-cash, impairment charges represent real economic losses and are a critical signal that management's investment decisions have not played out as planned.</p>

<h2 id="types-of-impairment">Types of Asset Impairment</h2>

<p><strong>Goodwill impairment.</strong> The largest and most visible impairment charges typically involve goodwill — the premium paid above the fair value of identifiable net assets in an acquisition. Under current GAAP (ASC 350), goodwill is tested for impairment annually and whenever triggering events occur. If the reporting unit's carrying amount exceeds its fair value, goodwill impairment is recognized for the excess, up to the amount of goodwill allocated to that unit. Goodwill impairments are permanent under GAAP — they cannot be reversed.</p>

<p><strong>Intangible asset impairment.</strong> Finite-lived intangible assets (customer relationships, technology, patents) are tested for impairment when triggering events suggest the asset may not be recoverable. Indefinite-lived intangibles (trade names, certain licenses) are tested annually, similar to goodwill.</p>

<p><strong>Long-lived asset impairment.</strong> Property, plant, and equipment, and other long-lived assets are tested when events or circumstances indicate the carrying amount may not be recoverable. The test compares the asset's carrying value to its expected undiscounted future cash flows. If carrying value exceeds undiscounted cash flows, the asset is written down to fair value.</p>

<p><strong>Investment impairment.</strong> Equity investments, debt securities, and other financial assets can be impaired when their fair value drops significantly below carrying value and the decline is considered other-than-temporary (for certain investment categories) or expected credit losses exceed threshold (for debt securities under ASC 326).</p>

<h2 id="triggers">What Triggers Impairment Testing</h2>

<p>Companies must test for impairment when triggering events occur, including significant decline in market capitalization, deterioration in financial performance or cash flows, adverse industry or economic conditions, loss of key customers or contracts, significant changes in technology or regulation, management's decision to dispose of or restructure an asset, and carrying amount of equity exceeding market capitalization. For goodwill and indefinite-lived intangibles, annual testing is required regardless of triggering events.</p>

<h2 id="financial-impact">Impact on Financial Statements</h2>

<p><strong>Income statement:</strong> The impairment charge reduces operating income (or is reported as a separate line item below operating income, depending on the company's presentation). For large impairments, GAAP net income can swing to a significant loss even if the underlying business is profitable.</p>

<p><strong>Balance sheet:</strong> The impaired asset's carrying value is permanently reduced. For goodwill impairments, this directly reduces total assets and shareholders' equity. The balance sheet becomes more conservative — but the reduction in equity can affect financial ratios like return on equity and debt-to-equity.</p>

<p><strong>Cash flow statement:</strong> No impact on operating cash flows — the impairment is a non-cash charge. It appears as an add-back in the reconciliation from net income to operating cash flow.</p>

<h2 id="signal-value">What Impairments Signal to Investors</h2>

<p>Impairment charges convey that management's original investment thesis was wrong — the acquired business, technology, or asset is not worth what was paid. Recurring impairments suggest a pattern of overpaying for acquisitions or poor strategic decision-making. However, the timing of impairments is also informative: some companies delay recognition, only taking large impairments during already-bad quarters to "clear the decks" (a practice known as "big bath" accounting).</p>

<h2 id="sec-filings">Impairment Charges in SEC Filings</h2>

<ul>
<li><strong>10-K:</strong> Annual impairment testing results are disclosed in the notes to financial statements, including the methodology, assumptions, and sensitivity analysis.</li>
<li><strong>10-Q:</strong> Interim impairments triggered by events are disclosed in quarterly reports.</li>
<li><strong>8-K:</strong> Material impairment charges may be reported as current events, particularly when announced before the periodic filing.</li>
<li><strong>MD&A:</strong> Management discusses the factors leading to impairment and the impact on results.</li>
</ul>

<p>Brefyr processes impairment disclosures from 10-K and 10-Q filings, flagging material write-downs as high-significance events that may indicate deteriorating asset quality or failed investments at companies investors follow.</p>
`,
};
