import type { GlossaryTerm } from "../types";

export const termDividend: GlossaryTerm = {
  slug: "dividend",
  term: "Dividend",
  title: "Dividend — How Companies Share Profits With Shareholders",
  shortDefinition:
    "A dividend is a distribution of a portion of a company's earnings to its shareholders, typically paid in cash on a regular quarterly schedule as decided by the board of directors.",
  metaDescription:
    "What is a dividend? How dividends work, the key dates investors must know, types of dividends, how to find dividend information in SEC filings, and what dividends signal about a company.",
  wordCount: 1150,
  category: "Corporate Actions",
  tags: ["dividend", "income-investing", "corporate-action", "shareholder", "payout"],
  relatedSlugs: ["dividend-yield", "special-dividend", "share-repurchase", "drip", "free-cash-flow"],
  relatedTerms: ["dividend-yield", "special-dividend", "share-repurchase", "drip", "free-cash-flow"],
  faq: [
    {
      question: "How often are dividends paid?",
      answer:
        "Most U.S. companies that pay dividends do so quarterly (four times per year). Some pay monthly (common among REITs and certain closed-end funds), semi-annually, or annually. The frequency is set by the board of directors and disclosed in the company's SEC filings. Each payment is preceded by an 8-K filing announcing the declaration, amount, record date, and payment date.",
    },
    {
      question: "What are the important dividend dates I need to know?",
      answer:
        "Four dates matter: (1) Declaration date — the board announces the dividend. (2) Ex-dividend date — if you buy the stock on or after this date, you do NOT receive the upcoming dividend. (3) Record date — the company checks its shareholder records to determine who gets paid; typically one business day after the ex-date. (4) Payment date — the cash hits your account. You must own the stock before the ex-dividend date to receive the payment.",
    },
    {
      question: "Are dividends taxed?",
      answer:
        "Yes. Qualified dividends (from stocks held more than 60 days) are taxed at the lower capital gains rate (0%, 15%, or 20% depending on your income bracket). Ordinary (non-qualified) dividends are taxed at your regular income tax rate. REIT dividends are generally taxed as ordinary income. Your broker reports dividend income on Form 1099-DIV. The tax treatment should factor into your after-tax yield calculations.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A dividend is a cash payment from a company to its shareholders, funded by the company's earnings or accumulated profits. When a company generates more cash than it needs for operations and reinvestment, the board of directors may decide to return some of that cash to shareholders as dividends. This creates a stream of income for investors independent of changes in the stock price — making dividends a cornerstone of income investing strategies.</p>

<h2 id="how-dividends-work">How Dividends Work</h2>

<p>The dividend process follows a specific sequence governed by both corporate law and securities regulation. The board of directors votes to declare a dividend, specifying the amount per share, the record date, and the payment date. This declaration is filed with the SEC as an 8-K (current report) and announced publicly.</p>

<p><strong>Declaration date:</strong> The board approves the dividend. This creates a legal obligation — once declared, the company must pay it.</p>

<p><strong>Ex-dividend date:</strong> Set by the stock exchange, typically one business day before the record date. If you buy the stock on the ex-date or later, you will not receive the upcoming dividend. The stock price typically drops by approximately the dividend amount on the ex-date, reflecting the fact that new buyers will not receive the payment.</p>

<p><strong>Record date:</strong> The company reviews its shareholder register. Only shareholders of record on this date receive the dividend.</p>

<p><strong>Payment date:</strong> Cash is distributed to qualifying shareholders, usually via electronic transfer to brokerage accounts.</p>

<h2 id="types-of-dividends">Types of Dividends</h2>

<p><strong>Cash dividends</strong> are the most common form. The company pays a fixed amount per share in cash. Most S&P 500 dividend-paying companies pay cash dividends quarterly.</p>

<p><strong>Stock dividends</strong> distribute additional shares instead of cash. A 5% stock dividend gives you 5 additional shares for every 100 you hold. Stock dividends do not change the value of your holdings — they function similarly to a small stock split.</p>

<p><strong>Special dividends</strong> are one-time payments outside the regular dividend schedule, often funded by asset sales, lawsuit settlements, or exceptionally profitable periods. They are not expected to recur and are typically excluded from yield calculations.</p>

<p><strong>Property dividends</strong> distribute assets other than cash — such as shares of a subsidiary being spun off, physical assets, or inventory. These are rare among publicly traded companies.</p>

<h2 id="who-pays">Who Pays Dividends and Who Doesn't</h2>

<p>Dividend payments are entirely voluntary. The board decides whether to initiate, maintain, increase, decrease, or eliminate the dividend based on the company's financial condition, capital needs, and strategic priorities.</p>

<p><strong>Companies that typically pay:</strong> Mature, profitable businesses with stable cash flows — utilities, consumer staples, banks, REITs (which are legally required to distribute at least 90% of taxable income), and large industrial companies. The "Dividend Aristocrats" are S&P 500 members that have increased their dividend for 25+ consecutive years.</p>

<p><strong>Companies that typically don't:</strong> High-growth companies that reinvest all earnings into expansion — most tech startups, early-stage biotech firms, and companies in rapid-growth phases. Many tech giants like Amazon and Alphabet did not pay dividends for their first 20+ years, choosing instead to reinvest profits into growth.</p>

<h2 id="dividend-policy">Dividend Policy and Signals</h2>

<p>A company's dividend policy reveals management's confidence in future earnings. Initiating a dividend signals that the company believes its cash flows are stable enough to commit to regular payments. Increasing the dividend signals continued confidence and growth. Cutting or eliminating the dividend is typically received very negatively by the market — it signals that management believes future cash flows will be insufficient to maintain the payment.</p>

<p>The payout ratio (dividends per share divided by earnings per share) measures how much of earnings go to dividends. A ratio below 50% suggests ample room for dividend growth. Above 80% suggests limited headroom. Above 100% means the company is paying out more than it earns — an unsustainable situation unless earnings recover quickly.</p>

<h2 id="sec-filings">Dividends in SEC Filings</h2>

<p>Dividend information appears throughout SEC filings:</p>
<ul>
<li><strong>8-K filing:</strong> Each dividend declaration is filed as a current report with the amount, record date, and payment date.</li>
<li><strong>10-K and 10-Q:</strong> The cash flow statement shows total dividends paid. The income statement footnotes show per-share amounts. Management's Discussion and Analysis may discuss dividend policy and sustainability.</li>
<li><strong>DEF 14A (Proxy Statement):</strong> Discusses the board's approach to capital allocation, including dividends vs buybacks vs reinvestment.</li>
</ul>

<p>Brefyr processes all SEC filings for 7,600+ companies and tracks dividend declarations from 8-K filings, helping investors monitor the payment stream that underpins their income investing strategies.</p>
`,
};
