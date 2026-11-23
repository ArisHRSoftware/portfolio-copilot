import type { GlossaryTerm } from "../types";

export const termShareRepurchase: GlossaryTerm = {
  slug: "share-repurchase",
  term: "Share Repurchase / Buyback",
  title: "Share Repurchase — How and Why Companies Buy Back Their Own Stock",
  shortDefinition:
    "A share repurchase (or stock buyback) is when a company buys its own outstanding shares from the market, reducing the total number of shares in circulation and increasing each remaining shareholder's ownership percentage.",
  metaDescription:
    "What is a share repurchase? How stock buybacks work, why companies buy back shares, the debate around buybacks, and how to track repurchase activity in SEC filings.",
  wordCount: 1000,
  category: "Corporate Actions",
  tags: ["share-repurchase", "buyback", "capital-return", "treasury-stock", "corporate-action"],
  relatedSlugs: ["treasury-stock", "dividend", "special-dividend", "free-cash-flow", "ebitda"],
  relatedTerms: ["treasury-stock", "dividend", "special-dividend", "free-cash-flow", "ebitda"],
  faq: [
    {
      question: "Are share buybacks good for investors?",
      answer:
        "It depends on the price paid. When a company buys back shares below their intrinsic value, the remaining shareholders benefit — they own a larger percentage of the company at a good price. When the company overpays for its own stock (as many do, buying most aggressively when stock prices are highest), it destroys value. The key metric is whether the buyback price is below the company's intrinsic value per share. Critics argue that many companies use buybacks to prop up EPS and stock prices for executive compensation purposes rather than creating genuine shareholder value.",
    },
    {
      question: "How do buybacks affect earnings per share (EPS)?",
      answer:
        "Buybacks reduce the share count, which mechanically increases EPS even if net income is flat. If a company earns $1 billion with 500 million shares outstanding, EPS is $2.00. If it buys back 50 million shares, EPS rises to $2.22 on the same earnings. This is why some analysts adjust for buybacks when evaluating EPS growth — a company that grows EPS 10% through buybacks alone hasn't actually grown its business. Look at total net income growth, not just per-share growth.",
    },
    {
      question: "Is there a tax on share buybacks?",
      answer:
        "Yes. As of 2023, the Inflation Reduction Act imposed a 1% excise tax on the fair market value of stock repurchased by publicly traded U.S. corporations. The tax applies to net repurchases (buybacks minus new shares issued during the year). This tax is paid by the company, not individual shareholders. For shareholders, buybacks defer taxation — unlike dividends, you don't owe tax until you sell your shares.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A share repurchase — commonly called a stock buyback — occurs when a company uses its cash to buy its own shares from the open market or through structured programs. The repurchased shares are either retired (permanently reducing the share count) or held as treasury stock (which can be reissued later for employee compensation, acquisitions, or other purposes). By reducing the number of shares outstanding, buybacks increase each remaining shareholder's proportional ownership of the company's earnings, cash flows, and assets.</p>

<h2 id="how-buybacks-work">How Buybacks Work</h2>

<p><strong>Open market repurchases.</strong> The most common method. The company buys shares on the open market through a broker, just like any other investor. SEC Rule 10b-18 provides a safe harbor from market manipulation charges if the company follows specific conditions: using a single broker per day, not buying at the opening or close of trading, keeping the daily volume below 25% of average daily volume, and not paying above the highest independent bid or last sale price. Most large-company buyback programs operate under Rule 10b-18.</p>

<p><strong>Accelerated share repurchase (ASR).</strong> The company enters a contract with an investment bank, paying a lump sum. The bank immediately delivers a large block of shares (borrowed from its inventory), and over the following weeks or months, purchases shares on the open market to cover its position. The final number of shares delivered is adjusted based on the volume-weighted average price during the purchase period. ASRs allow companies to retire shares immediately while the actual repurchase happens gradually.</p>

<p><strong>Tender offer repurchase.</strong> The company makes a formal offer to buy a specified number of shares at a fixed price or within a price range, typically at a premium to the market price. This method is used when the company wants to repurchase a large block of shares quickly. Dutch auction tenders allow shareholders to specify the minimum price they would accept within a range set by the company.</p>

<h2 id="why-companies-buy-back">Why Companies Buy Back Shares</h2>

<p><strong>Return excess capital.</strong> When a company generates more cash than it needs for operations, capital expenditures, and strategic investments, it can return the excess to shareholders through dividends or buybacks. Buybacks offer more flexibility than dividends — a company can adjust or stop buyback programs without the negative signal that a dividend cut sends.</p>

<p><strong>Undervaluation signal.</strong> Buybacks can signal that management believes the stock is undervalued. By putting the company's money behind that conviction, management provides a stronger signal than a simple public statement. However, the signaling value is undermined when companies buy back shares at all-time high prices — suggesting the buyback is driven by cash availability rather than valuation conviction.</p>

<p><strong>EPS management.</strong> By reducing the share count, buybacks increase earnings per share even without earnings growth. This can help companies meet analyst EPS estimates and hit performance targets tied to executive compensation. Critics argue this creates perverse incentives — executives may prefer buybacks (which boost their compensation metrics) over capital investment (which might create more long-term value).</p>

<p><strong>Offset dilution.</strong> Companies that issue stock through employee stock option plans, RSU vesting, and equity-based acquisitions face ongoing dilution. Buybacks offset this dilution, keeping the share count relatively stable.</p>

<h2 id="scale">Scale of Buyback Activity</h2>

<p>Share repurchases are massive. S&P 500 companies have spent over $800 billion annually on buybacks in recent years, frequently exceeding total dividend payments. Some companies — particularly large tech firms — have authorization programs in the tens of billions of dollars. Apple alone has repurchased over $600 billion in stock since 2012, reducing its share count by approximately 40%.</p>

<h2 id="sec-filings">Buybacks in SEC Filings</h2>

<ul>
<li><strong>10-K and 10-Q:</strong> Companies must disclose monthly repurchase activity in a table format: total shares purchased, average price paid, maximum remaining authorization. This table is in Part II, Item 2 of the 10-Q and Part II, Item 5 of the 10-K.</li>
<li><strong>8-K:</strong> New buyback authorizations are announced via 8-K and press release.</li>
<li><strong>DEF 14A:</strong> The proxy statement discusses the board's capital allocation philosophy, including the rationale for buybacks vs dividends vs investment.</li>
<li><strong>Cash flow statement:</strong> Total cash spent on repurchases appears in financing activities.</li>
</ul>

<p>Brefyr extracts buyback disclosure tables from 10-K and 10-Q filings and tracks new authorization announcements in 8-Ks, giving investors a comprehensive view of how companies in their portfolio are deploying capital.</p>
`,
};
