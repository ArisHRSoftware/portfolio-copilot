import type { GlossaryTerm } from "../types";

export const termGoodwill: GlossaryTerm = {
  slug: "goodwill",
  term: "Goodwill",
  title: "Goodwill — The Premium Companies Pay for Acquisitions and What It Means on the Balance Sheet",
  shortDefinition:
    "Goodwill is an intangible asset recorded on the balance sheet when a company acquires another business for more than the fair value of its identifiable net assets, representing the premium paid for factors like brand reputation, customer relationships, and expected synergies.",
  metaDescription:
    "What is goodwill in accounting? How it arises from acquisitions, annual impairment testing, what goodwill write-downs signal, and where to find goodwill details in SEC filings.",
  wordCount: 900,
  category: "Accounting & Audit",
  tags: ["goodwill", "intangible-asset", "acquisition", "impairment", "balance-sheet"],
  relatedSlugs: ["intangible-assets", "impairment", "acquisition", "gaap", "book-value"],
  relatedTerms: ["intangible-assets", "impairment", "acquisition", "gaap", "book-value"],
  faq: [
    {
      question: "Is goodwill a real asset?",
      answer:
        "Goodwill represents the difference between what a company paid for an acquisition and the fair value of the identifiable assets acquired. It reflects real economic value — brand strength, assembled workforce, customer loyalty, and synergy potential — but it cannot be separated from the business and sold independently. Unlike tangible assets, goodwill has no independent market value. It is real in the sense that the acquirer paid for it, but its value depends entirely on the ongoing success of the acquired business. If the business underperforms, the goodwill is impaired.",
    },
    {
      question: "Why do some companies have massive goodwill on their balance sheets?",
      answer:
        "Companies that grow through acquisitions — particularly in industries where intangible value dominates (technology, healthcare, media) — accumulate goodwill with each deal. Because acquisition premiums are typically 20-50% above market value, and much of the target's value resides in intangibles that cannot be separately identified, goodwill can grow to represent 30-60% of total assets for serial acquirers. For example, companies like Microsoft, Johnson & Johnson, and Procter & Gamble carry tens of billions in goodwill from decades of acquisitions.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Goodwill is the most prominent intangible asset on most large company balance sheets. It arises exclusively from business acquisitions — when Company A buys Company B for $10 billion, and the fair value of Company B's identifiable net assets (tangible assets plus identifiable intangibles minus liabilities) is $7 billion, the remaining $3 billion is recorded as goodwill. This premium reflects the value that the acquirer attributed to things that cannot be separately identified and valued: the acquired company's reputation, workforce expertise, market position, customer relationships that extend beyond contractual terms, and the synergies expected from combining the businesses.</p>

<h2 id="how-goodwill-arises">How Goodwill Is Created</h2>

<p>Goodwill can only arise from a business acquisition — it is never generated internally. When a company completes an acquisition, it performs purchase price allocation (PPA) under ASC 805, assigning the purchase price to all identifiable assets and liabilities at their acquisition-date fair values. Identifiable intangible assets — customer relationships, developed technology, trade names, patents, non-compete agreements — are separately valued and recorded. Whatever purchase price remains after allocating to all identifiable assets and liabilities becomes goodwill.</p>

<p>The size of the goodwill depends on two factors: how much the acquirer paid (driven by competitive bidding and strategic value) and how much of the target's value resides in identifiable vs unidentifiable intangible assets. In technology acquisitions, where the workforce and culture may be the primary value, goodwill often exceeds 50% of the purchase price.</p>

<h2 id="impairment-testing">Annual Impairment Testing</h2>

<p>Under ASC 350, goodwill is not amortized — it remains on the balance sheet indefinitely at its original recorded amount until it is impaired. Companies must test goodwill for impairment at least annually (most choose the fourth quarter) and whenever triggering events suggest impairment may exist. The test compares the fair value of the reporting unit to its carrying amount. If the carrying amount exceeds fair value, the goodwill is impaired by the difference (capped at the goodwill amount).</p>

<p>Fair value is typically estimated using discounted cash flow analysis (income approach), comparable company multiples (market approach), or a combination. The assumptions underlying these valuations — growth rates, discount rates, margin projections — are critical and heavily scrutinized by auditors and regulators. Companies must disclose their goodwill impairment testing methodology, key assumptions, and sensitivity analysis in the notes to financial statements.</p>

<h2 id="impairment-signals">What Goodwill Impairment Signals</h2>

<p>A goodwill impairment charge is a public admission that the company overpaid for an acquisition or that the acquired business has not performed as expected. When a company writes down goodwill by $5 billion, it is acknowledging that $5 billion of value that was once expected to be realized from the acquisition will not materialize. For serial acquirers, repeated goodwill impairments may indicate a systematic pattern of overpaying — paying premiums based on optimistic synergy forecasts that do not materialize.</p>

<p>Some of the largest goodwill impairments in history include: AOL Time Warner ($99 billion in 2002), Kraft Heinz ($15.4 billion in 2019), and GE ($22 billion in 2018). Each represented a massive destruction of shareholder value from acquisitions that failed to deliver.</p>

<h2 id="balance-sheet-impact">Balance Sheet Significance</h2>

<p>For many large companies, goodwill is the single largest asset on the balance sheet. When evaluating balance sheet quality, investors should consider: the ratio of goodwill to total assets (above 30% suggests heavy reliance on acquisition-driven growth), the ratio of goodwill to shareholders' equity (above 100% means equity depends entirely on goodwill valuations), the age of the goodwill (old goodwill from acquisitions completed years ago suggests the business is mature), and the gap between goodwill carrying value and the company's market capitalization (if market cap approaches or falls below net assets excluding goodwill, the market is questioning the goodwill's value).</p>

<h2 id="sec-filings">Goodwill in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Goodwill appears as a separate line item in total assets, often the largest intangible asset.</li>
<li><strong>Notes to financial statements:</strong> Detailed goodwill rollforward (beginning balance, additions from acquisitions, impairments, divestitures, ending balance), allocation by reporting unit, and impairment testing methodology and assumptions.</li>
<li><strong>8-K/A:</strong> Purchase price allocation for significant acquisitions, showing how the acquisition price was divided between goodwill and identifiable assets.</li>
<li><strong>MD&A:</strong> Discussion of goodwill impairment risk and sensitivity analysis in critical accounting estimates.</li>
</ul>

<p>Brefyr extracts goodwill balances and impairment charges from 10-K and 10-Q filings for all SEC-reporting companies, helping investors monitor this critical balance sheet item and identify companies where acquisition strategies may be under stress.</p>
`,
};
