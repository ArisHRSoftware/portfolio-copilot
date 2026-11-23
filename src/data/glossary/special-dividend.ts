import type { GlossaryTerm } from "../types";

export const termSpecialDividend: GlossaryTerm = {
  slug: "special-dividend",
  term: "Special Dividend",
  title: "Special Dividend — One-Time Cash Payouts and What They Signal",
  shortDefinition:
    "A special dividend is a non-recurring, one-time cash payment to shareholders that is separate from the company's regular dividend schedule, often funded by asset sales, excess cash reserves, or unusually profitable periods.",
  metaDescription:
    "What is a special dividend? Why companies issue one-time payouts, how they differ from regular dividends, tax implications, and how to track them in SEC filings.",
  wordCount: 950,
  category: "Corporate Actions",
  tags: ["special-dividend", "dividend", "corporate-action", "cash-distribution", "shareholder"],
  relatedSlugs: ["dividend", "dividend-yield", "share-repurchase", "free-cash-flow", "8-k-filing"],
  relatedTerms: ["dividend", "dividend-yield", "share-repurchase", "free-cash-flow", "8-k-filing"],
  faq: [
    {
      question: "Is a special dividend taxable?",
      answer:
        "Yes. Special dividends are taxable in the year they are received. If the special dividend is classified as a qualified dividend, it is taxed at the capital gains rate (0%, 15%, or 20%). If classified as a return of capital, it reduces your cost basis in the stock rather than being immediately taxable — but this increases your capital gain when you eventually sell. Large special dividends are sometimes classified as return of capital. Your broker's 1099-DIV will specify the tax classification.",
    },
    {
      question: "How does a special dividend affect the stock price?",
      answer:
        "On the ex-dividend date, the stock price typically drops by approximately the amount of the special dividend. For large special dividends (say $10 per share on a $50 stock), this drop is very noticeable. Options contracts are also adjusted by the OCC to reflect the special dividend. The price drop is mechanical, reflecting that the cash has left the company's balance sheet.",
    },
    {
      question: "Can a company issue a special dividend and still pay regular dividends?",
      answer:
        "Absolutely. Special dividends are supplementary to the regular dividend program. A company might pay $0.50 per quarter as its regular dividend and then announce a one-time $5.00 special dividend from the proceeds of an asset sale. The two are completely separate. The special dividend does not change the regular dividend amount or schedule.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A special dividend — also called an extraordinary dividend or extra dividend — is a one-time cash distribution to shareholders outside the company's regular dividend schedule. Unlike regular quarterly dividends that investors can count on recurring, a special dividend is explicitly non-recurring. Companies issue special dividends when they accumulate excess cash they do not need for operations, growth, or debt repayment, and decide the best use of that cash is to return it directly to shareholders.</p>

<h2 id="triggers">What Triggers a Special Dividend</h2>

<p><strong>Asset sales.</strong> When a company sells a division, subsidiary, real estate portfolio, or significant asset, the proceeds may be distributed as a special dividend. The company has converted a non-cash asset into cash and determined it has no better internal use for the funds.</p>

<p><strong>Excess cash accumulation.</strong> Companies with highly profitable, cash-generative businesses sometimes accumulate more cash than they can productively deploy. Rather than let it sit on the balance sheet earning minimal returns, the board may distribute it. Technology companies with mature product lines are frequent sources of special dividends.</p>

<p><strong>Lawsuit settlements or insurance proceeds.</strong> Large cash inflows from legal settlements or insurance payouts that are outside normal business operations may be distributed as special dividends, particularly when the amount is significant relative to the company's market cap.</p>

<p><strong>Tax-motivated distributions.</strong> Changes in tax law can motivate companies to accelerate cash distributions before higher tax rates take effect. In 2012, dozens of companies issued special dividends ahead of anticipated increases in dividend tax rates.</p>

<p><strong>Restructuring or strategic shift.</strong> A company pivoting from a cash-rich business model to a growth-oriented one may distribute excess cash as a special dividend, signaling a shift in capital allocation strategy.</p>

<h2 id="vs-regular">Special vs Regular Dividends</h2>

<p>The critical distinction is expectation. Regular dividends create an implicit commitment — once a company starts paying $0.50 per quarter, the market expects that payment to continue and grow. Cutting the regular dividend is punished severely by the market. Special dividends carry no such expectation. The company explicitly labels the payment as one-time, so there is no commitment to repeat it.</p>

<p>This is why some companies prefer special dividends over regular dividend increases. If a company has a windfall year, increasing the regular dividend creates a permanent higher baseline that must be sustained even in bad years. A special dividend distributes the windfall without raising the ongoing commitment. It preserves financial flexibility.</p>

<h2 id="vs-buyback">Special Dividends vs Share Buybacks</h2>

<p>Both special dividends and share repurchases return cash to shareholders, but the mechanics differ significantly. A special dividend pays all shareholders equally — every shareholder receives cash in proportion to their holdings. A buyback benefits shareholders who do not sell (their ownership percentage increases) but requires sellers to give up their shares. Special dividends are taxable upon receipt. Buybacks defer tax until the shareholder sells, and the gain may qualify for long-term capital gains treatment.</p>

<p>Some companies use both: a special dividend for immediate shareholder return plus a buyback program for ongoing capital return. The proxy statement (DEF 14A) typically discusses the board's philosophy on choosing between these mechanisms.</p>

<h2 id="notable-examples">Scale of Special Dividends</h2>

<p>Special dividends can be enormous relative to the stock price. Costco has issued multiple special dividends of $7-15 per share. Microsoft's 2004 special dividend of $3 per share returned approximately $32 billion to shareholders — one of the largest cash distributions in corporate history. Some smaller companies have issued special dividends exceeding 20% of their stock price in connection with asset sales or business divestitures.</p>

<h2 id="sec-filings">Special Dividends in SEC Filings</h2>

<p>Special dividend announcements appear in the same SEC filings as regular dividends but are explicitly labeled:</p>
<ul>
<li><strong>8-K filing:</strong> The declaration announcement, specifying the amount, record date, payment date, and that it is a one-time or special dividend.</li>
<li><strong>10-K and 10-Q:</strong> The cash flow statement includes the payment in financing activities. The notes may explain the source of funds (e.g., proceeds from an asset sale).</li>
<li><strong>DEF 14A:</strong> The proxy may discuss the board's decision-making process for the special distribution.</li>
</ul>

<p>Brefyr flags special dividend announcements in 8-K filings and distinguishes them from regular dividend declarations in its filing intelligence, so investors can track both recurring income and one-time distributions across their portfolio.</p>
`,
};
