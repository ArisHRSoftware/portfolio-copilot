import type { GlossaryTerm } from "../types";

export const termTreasuryStock: GlossaryTerm = {
  slug: "treasury-stock",
  term: "Treasury Stock",
  title: "Treasury Stock — Shares a Company Has Repurchased and Holds in Reserve",
  shortDefinition:
    "Treasury stock consists of shares that a company has issued and subsequently repurchased from the open market, holding them in its own treasury rather than retiring them, reducing the number of shares outstanding available to public investors.",
  metaDescription:
    "What is treasury stock? How it differs from retired shares, its impact on financial statements, why companies hold treasury shares, and where to find treasury stock data in SEC filings.",
  wordCount: 850,
  category: "Corporate Actions",
  tags: ["treasury-stock", "share-repurchase", "equity", "balance-sheet", "corporate-action"],
  relatedSlugs: ["share-repurchase", "stock-split", "dilution", "book-value"],
  relatedTerms: ["share-repurchase", "stock-split", "dilution", "book-value"],
  faq: [
    {
      question: "Does treasury stock receive dividends?",
      answer:
        "No. Treasury shares are not considered outstanding and do not receive dividends, cannot vote at shareholder meetings, and are not included in the calculation of earnings per share. They are essentially dormant shares sitting in the company's treasury. If and when the company reissues them (for example, to satisfy employee stock option exercises), they become outstanding again and regain all shareholder rights.",
    },
    {
      question: "How does treasury stock affect the balance sheet?",
      answer:
        "Treasury stock is recorded as a contra-equity account — it reduces total shareholders' equity. It appears as a negative number in the equity section of the balance sheet. For example, if a company has $5 billion in paid-in capital and retained earnings but $2 billion in treasury stock, total equity is $3 billion. Companies that aggressively repurchase shares can even have negative total equity if the treasury stock exceeds other equity components, as Apple and several other large companies demonstrate.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Treasury stock represents shares that a company has issued to the public, then bought back through share repurchase programs. Unlike retired shares, which are permanently canceled, treasury shares remain in the company's possession and can be reissued in the future. While held in treasury, these shares are not considered outstanding — they do not vote, receive dividends, or factor into per-share calculations. Treasury stock is a mechanism that gives companies flexibility to repurchase shares now and reissue them later for specific purposes without going through a new public offering.</p>

<h2 id="why-companies-hold-treasury">Why Companies Hold Treasury Stock</h2>

<p><strong>Employee compensation programs.</strong> Companies frequently reissue treasury shares to satisfy employee stock option exercises, RSU vestings, and employee stock purchase plan (ESPP) purchases. Using treasury shares for this purpose avoids issuing new shares that would increase the authorized share count and require additional SEC registration.</p>

<p><strong>Acquisition currency.</strong> Treasury shares can be used as consideration in mergers and acquisitions. Rather than issuing new shares or paying cash, the company can deliver treasury shares to the target's shareholders. This provides deal flexibility without further diluting existing shareholders through new share issuance.</p>

<p><strong>Future flexibility.</strong> By holding repurchased shares in treasury rather than retiring them, the company preserves the option to reissue them. Retiring shares permanently reduces the authorized share count, which may require a shareholder vote to increase later. Treasury stock gives the board more options for future capital allocation decisions.</p>

<p><strong>Defensive measure.</strong> A company with a large block of treasury shares has the ability to place those shares with friendly parties if faced with a hostile takeover attempt, diluting the hostile acquirer's ownership percentage. This is an uncommon use but represents a strategic reserve.</p>

<h2 id="treasury-vs-retired">Treasury Stock vs Retired Shares</h2>

<p>The distinction matters for balance sheet presentation and corporate flexibility. Treasury stock remains authorized and issued but is not outstanding. Retired shares are removed from both the issued and outstanding counts, and the authorized share count may be reduced accordingly. Under the cost method of accounting (the most common), treasury stock is recorded at the repurchase price as a negative equity item. Under the par value method, treasury stock is recorded at par value with the excess debited to additional paid-in capital.</p>

<p>Companies like Apple hold over $100 billion in treasury stock on their balance sheet. Because treasury stock reduces equity, Apple's total shareholders' equity has at times been negative — an unusual situation for one of the world's most valuable companies, explained entirely by its massive buyback program.</p>

<h2 id="financial-impact">Impact on Financial Metrics</h2>

<p><strong>Earnings per share (EPS):</strong> Treasury shares are excluded from the shares outstanding used to calculate basic EPS. This means buybacks held as treasury stock increase EPS by reducing the denominator, identical to the effect of retiring shares.</p>

<p><strong>Book value per share:</strong> Treasury stock reduces total equity, which reduces book value per share if the repurchase price exceeds the original issuance price (almost always the case). Heavy buyback programs can depress or even turn book value negative.</p>

<p><strong>Return on equity (ROE):</strong> With lower equity due to treasury stock, ROE appears higher. This mechanical effect means that companies with large buyback programs may show inflated ROE that doesn't reflect genuine operational improvement.</p>

<h2 id="accounting-entries">Accounting for Treasury Stock</h2>

<p>Under the cost method, when a company repurchases shares: Treasury Stock (debit, increases contra-equity) and Cash (credit). When treasury shares are reissued at a price above cost: Cash (debit), Treasury Stock (credit), and the excess goes to Additional Paid-In Capital from Treasury Stock. When reissued below cost, the difference is charged against paid-in capital or retained earnings.</p>

<h2 id="sec-filings">Treasury Stock in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Treasury stock appears as a line item in shareholders' equity, shown as a negative (parenthetical) number.</li>
<li><strong>Equity rollforward:</strong> The notes to financial statements include a table showing beginning treasury stock, shares repurchased, shares reissued, and ending balance.</li>
<li><strong>10-K Part II, Item 5:</strong> Contains the monthly repurchase activity table showing shares purchased and average price.</li>
<li><strong>Cash flow statement:</strong> Treasury stock purchases appear as cash outflows in financing activities.</li>
</ul>

<p>Brefyr extracts balance sheet data including treasury stock balances from 10-K and 10-Q filings for 7,600+ companies, allowing investors to monitor the scale of buyback activity and its impact on equity metrics across their portfolio.</p>
`,
};
