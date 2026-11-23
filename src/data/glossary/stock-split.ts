import type { GlossaryTerm } from "../types";

export const termStockSplit: GlossaryTerm = {
  slug: "stock-split",
  term: "Stock Split",
  title: "Stock Split — Why Companies Divide Their Shares and What It Means for Investors",
  shortDefinition:
    "A stock split increases the number of outstanding shares by issuing additional shares to existing shareholders proportionally, reducing the per-share price without changing the company's total market capitalization.",
  metaDescription:
    "What is a stock split? How forward splits work, why companies split their stock, the effect on share price and ownership, and how to find stock split announcements in SEC filings.",
  wordCount: 1100,
  category: "Corporate Actions",
  tags: ["stock-split", "corporate-action", "shares-outstanding", "market-cap", "shareholder"],
  relatedSlugs: ["reverse-stock-split", "dual-class-shares", "market-capitalization", "8-k-filing"],
  relatedTerms: ["reverse-stock-split", "dual-class-shares", "market-capitalization", "8-k-filing"],
  faq: [
    {
      question: "Does a stock split make my shares more valuable?",
      answer:
        "No. A stock split does not change the total value of your investment. If you own 100 shares at $200 each ($20,000 total) and the company does a 2-for-1 split, you now own 200 shares at $100 each — still $20,000. The split adjusts both the share count and the price proportionally. However, some research shows stocks tend to outperform modestly in the months following a split announcement, possibly because the lower price attracts more retail investors and the split signals management confidence.",
    },
    {
      question: "How do I find out about upcoming stock splits?",
      answer:
        "Companies announce stock splits through 8-K filings with the SEC and in press releases. The board of directors must approve the split, and the announcement specifies the ratio (e.g., 4-for-1), the record date (who qualifies), and the effective date (when shares adjust). Brefyr flags these 8-K filings automatically so you can track split announcements for companies in your portfolio.",
    },
    {
      question: "Do stock splits affect options and warrants?",
      answer:
        "Yes. Options contracts are adjusted to reflect the split ratio. In a 2-for-1 split, one options contract controlling 100 shares at a $200 strike becomes one contract controlling 200 shares at a $100 strike. The Options Clearing Corporation (OCC) handles these adjustments automatically. The economic value of the contract is preserved — only the terms change.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A stock split is a corporate action in which a company divides its existing shares into multiple new shares. The most common ratio is 2-for-1, meaning each existing share becomes two shares at half the previous price. Other common ratios include 3-for-1, 4-for-1, and occasionally larger splits like 10-for-1 or 20-for-1. The key principle is that the total market capitalization — the company's overall value as measured by share price times shares outstanding — remains unchanged immediately after the split.</p>

<h2 id="how-splits-work">How Stock Splits Work</h2>

<p>When a company's board of directors approves a stock split, the company files an 8-K with the SEC announcing the details. The filing specifies the split ratio, the record date (the date by which you must be a shareholder to receive the additional shares), and the effective date (when the new shares appear in your account and the adjusted price takes effect).</p>

<p><strong>Example — a 4-for-1 split:</strong> A company trading at $1,200 per share with 100 million shares outstanding has a market cap of $120 billion. After the 4-for-1 split, the company has 400 million shares outstanding trading at $300 each. The market cap is still $120 billion. An investor who held 50 shares worth $60,000 now holds 200 shares worth $60,000.</p>

<p>Mechanically, the company's transfer agent credits the additional shares to each shareholder's account. If shares are held in a brokerage account, the broker handles the adjustment automatically. Shareholders do not need to take any action.</p>

<h2 id="why-companies-split">Why Companies Split Their Stock</h2>

<p><strong>Accessibility.</strong> The primary reason companies split their stock is to make shares more affordable for retail investors. When a share price reaches several hundred or thousands of dollars, individual investors may be unable or unwilling to purchase even a single share. While fractional share trading has reduced this barrier, many investors still prefer buying whole shares. A lower per-share price broadens the pool of potential buyers.</p>

<p><strong>Liquidity.</strong> More shares outstanding at a lower price generally increases trading volume. Higher liquidity narrows the bid-ask spread, reducing transaction costs for all investors. This benefits institutional investors executing large orders as well as retail traders.</p>

<p><strong>Index eligibility.</strong> Some price-weighted indexes, like the Dow Jones Industrial Average, weight components by share price rather than market cap. An extremely high share price gives a stock outsized influence on the index — or may prevent inclusion entirely. Companies sometimes split specifically to manage their weight in such indexes or to qualify for inclusion.</p>

<p><strong>Psychological signaling.</strong> A stock split is often interpreted as a sign of management confidence. Companies typically split their stock after a sustained price increase — the split itself signals that management expects continued growth and wants to position the stock for broader ownership.</p>

<h2 id="common-ratios">Common Split Ratios</h2>

<p>The most frequent split ratios and their effects:</p>
<ul>
<li><strong>2-for-1:</strong> Each share becomes two shares at half the price. The most traditional ratio.</li>
<li><strong>3-for-1:</strong> Each share becomes three shares at one-third the price.</li>
<li><strong>4-for-1:</strong> Used by major tech companies when share prices exceed $1,000.</li>
<li><strong>10-for-1:</strong> Aggressive splits used when prices reach very high levels. Walmart executed a series of 2-for-1 splits over decades; some companies opt for a single large ratio instead.</li>
<li><strong>20-for-1:</strong> Amazon and Alphabet both used this ratio when their shares exceeded $2,000.</li>
</ul>

<h2 id="tax-impact">Tax Implications</h2>

<p>A stock split is not a taxable event. No capital gains or losses are triggered. However, your cost basis per share is adjusted. If you bought 100 shares at $200 each ($20,000 total) and a 2-for-1 split occurs, your adjusted cost basis is $100 per share for 200 shares. When you eventually sell, the per-share gain or loss is calculated from the split-adjusted cost basis. Brokerages handle this adjustment automatically and report the adjusted basis on Form 1099-B.</p>

<h2 id="impact-on-filings">Stock Splits in SEC Filings</h2>

<p>Stock split activity appears in several places within SEC filings:</p>
<ul>
<li><strong>8-K filing:</strong> The initial announcement, including the ratio, record date, and effective date.</li>
<li><strong>10-K and 10-Q:</strong> Per-share figures (EPS, dividends per share, book value per share) are retroactively adjusted for all prior periods presented to reflect the split. A footnote explains the adjustment.</li>
<li><strong>Proxy statement (DEF 14A):</strong> If the split requires a charter amendment to increase authorized shares, it may appear as a shareholder vote item in the proxy.</li>
</ul>

<p>Brefyr tracks 8-K filings for all 7,600+ SEC-reporting companies and flags corporate action announcements including stock splits, ensuring investors are notified when companies in their portfolio announce share adjustments.</p>
`,
};
