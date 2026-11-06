import type { GlossaryTerm } from "../types";

export const termDilution: GlossaryTerm = {
  slug: "dilution",
  term: "Dilution",
  title: "Dilution — How Companies Shrink Your Ownership Without You Selling a Single Share",
  shortDefinition:
    "Dilution occurs when a company issues new shares — through equity offerings, stock-based compensation, or convertible securities — reducing each existing shareholder's percentage ownership of the company.",
  metaDescription:
    "What is stock dilution? How new share issuances reduce existing shareholder ownership, how to track dilution in SEC filings, and when dilution is acceptable vs a red flag.",
  wordCount: 2200,
  category: "Investing Concepts",
  tags: ["dilution", "shares-outstanding", "stock-compensation", "equity-offering", "secondary"],
  relatedSlugs: ["market-capitalization", "free-cash-flow", "10-k-filing", "ebitda"],
  relatedTerms: ["market-capitalization", "free-cash-flow", "10-k-filing", "ebitda"],
  faq: [
    {
      question: "Is dilution always bad for shareholders?",
      answer:
        "Not necessarily. Dilution that funds accretive growth — an acquisition that increases earnings per share, or capital raised to fund a product that generates returns above the cost of capital — creates value despite reducing ownership percentage. Dilution that funds operating losses (the company burns cash and issues shares to survive) or excessive executive compensation destroys value. The key question is: does the company generate more value with the new capital than it gives away in ownership?",
    },
    {
      question: "How do I track dilution in SEC filings?",
      answer:
        "Compare basic shares outstanding on the 10-K cover page year over year. Check the cash flow statement for 'Proceeds from issuance of common stock' and 'Stock-based compensation.' The notes to financial statements detail every equity issuance during the year, including share counts and terms. Also compare basic vs diluted EPS — a large gap indicates significant in-the-money options or convertible securities.",
    },
    {
      question: "What is the difference between basic and diluted shares?",
      answer:
        "Basic shares are the shares currently issued and outstanding. Diluted shares include basic shares plus the additional shares that would be created if all in-the-money stock options, warrants, and convertible securities were exercised or converted. Diluted shares represent the worst-case ownership scenario. Companies report both basic and diluted EPS on the income statement.",
    },
    {
      question: "How much dilution is too much?",
      answer:
        "There's no universal threshold, but share count growth above 3-5% per year (excluding one-time events like acquisitions) warrants scrutiny. Some tech companies dilute 5-10% annually through stock-based compensation alone, which represents a significant hidden cost to shareholders. Compare dilution rates to industry peers and evaluate whether the company's growth justifies the ownership transfer.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Every time a company creates new shares, existing shareholders own a smaller piece of the pie. Your 1,000 shares don't disappear — but if the company issues another million shares, your percentage of ownership just dropped. That's dilution, and it's one of the most underappreciated costs of owning equity.</p>

<p>Dilution is particularly relevant for small-cap investors because smaller companies dilute more aggressively than large-caps. Pre-profit companies raise capital through equity offerings to fund operations. Growth-stage companies grant generous stock-based compensation to attract talent. Both activities create new shares and reduce existing shareholders' ownership.</p>

<h2 id="how-dilution-works">How Dilution Works</h2>

<p>Suppose a company has 10 million shares outstanding and you own 100,000 shares — a 1% ownership stake. The company then issues 2 million new shares in a secondary offering.</p>

<p>After the offering: 12 million shares outstanding. Your 100,000 shares now represent 0.83% of the company — a 17% reduction in your ownership percentage. You didn't sell anything, but you own less of the company.</p>

<p>The financial impact depends on what the new shares were issued for:</p>

<ul>
<li><strong>If the company raised $50 million at fair value</strong> and invested it profitably, the 17% ownership dilution might be offset by the company's increased earning power. Your smaller slice of a larger pie could be worth more.</li>
<li><strong>If the company raised $50 million and burned it on operating losses</strong>, you have a smaller slice of the same (or smaller) pie. The dilution destroyed your value.</li>
<li><strong>If the shares were issued as executive compensation</strong>, the company received no cash — the shares went to employees. The dilution is a real cost borne by existing shareholders, equivalent to the company paying cash compensation and then asking shareholders to reimburse it.</li>
</ul>

<h2 id="sources-of-dilution">Sources of Dilution</h2>

<h3>Secondary Equity Offerings</h3>

<p>A follow-on offering (registered via an S-3 or S-1 filing) is the most visible form of dilution. The company sells new shares to institutional investors, usually at a slight discount to the market price. Proceeds go to the company for growth, debt repayment, or general corporate purposes.</p>

<p>The 8-K filing (Item 3.02: Unregistered Sales of Equity Securities) and the S-3/S-1 prospectus supplement disclose the number of shares issued, the offering price, and the use of proceeds. On the day of announcement, the stock typically drops 3-10% to reflect the dilution plus the signaling effect (if the company needs cash, something may be wrong).</p>

<h3>Stock-Based Compensation (SBC)</h3>

<p>The silent diluter. Companies grant stock options and restricted stock units (RSUs) to employees as compensation. When options are exercised or RSUs vest, new shares are created. Unlike equity offerings, SBC dilution happens gradually and doesn't generate headlines — but the cumulative effect can be enormous.</p>

<p>Consider a software company with 100 million shares that grants $200 million in SBC annually. If the stock trades at $50, that's roughly 4 million new shares per year — 4% annual dilution. Over five years, the share count grows from 100 million to 120 million, a 20% cumulative dilution. Shareholders effectively paid $1 billion in value transfer to employees.</p>

<p>SBC appears on the cash flow statement as a non-cash add-back to operating cash flow. It also appears in the notes to financial statements, which detail the fair value of grants, the number of shares granted, and the remaining unvested awards. The gap between basic and diluted EPS reflects the potential dilution from outstanding equity awards.</p>

<h3>Convertible Securities</h3>

<p>Convertible bonds and convertible preferred stock can be exchanged for common shares under specified conditions (usually when the stock price exceeds a conversion price). Until conversion, they're debt or preferred equity. Upon conversion, they become common shares and dilute existing holders.</p>

<p>The terms of convertible securities are disclosed in the debt note of the 10-K. Key terms to check: conversion price (at what stock price can the holder convert?), conversion ratio (how many shares per bond?), and forced conversion provisions (can the company force conversion above a certain price?).</p>

<h3>Warrants</h3>

<p>Similar to options but issued to external parties — typically investors in a capital raise or lenders as a sweetener. Warrants give the holder the right to buy shares at a predetermined price. Small-cap and micro-cap companies frequently attach warrants to private placements, creating future dilution when the warrants are exercised.</p>

<h3>At-the-Market (ATM) Offerings</h3>

<p>An ATM program allows a company to sell newly issued shares directly into the open market at prevailing prices, at its discretion, without a formal offering. ATMs are filed as S-3 prospectus supplements and create ongoing, drip-feed dilution that's hard to track in real time. The quarterly 10-Q discloses how many shares were sold under the ATM program during the period.</p>

<p>ATM programs are common among biotech, cannabis, and other cash-burning small-cap sectors. A company with a $100 million ATM program and a $300 million market cap can dilute shareholders by 33% over time if it uses the full program.</p>

<h2 id="measuring-dilution">How to Measure Dilution in SEC Filings</h2>

<p><strong>Year-over-year share count change.</strong> The 10-K cover page shows "Shares of Common Stock Outstanding" as of a recent date. Compare to the prior year's 10-K. Growth above 2-3% (excluding one-time acquisitions) is worth investigating.</p>

<p><strong>Basic vs diluted EPS gap.</strong> The income statement shows both. If basic EPS is $2.00 and diluted EPS is $1.60, there are significant in-the-money options and convertibles that, if exercised, would reduce earnings per share by 20%.</p>

<p><strong>Stock-based compensation on the cash flow statement.</strong> This line item shows the fair value of equity awards granted during the period. Divide by the average stock price for an approximate number of shares issued. Compare SBC to operating income — if SBC exceeds 30% of operating income, employees are receiving a large share of the company's economic output.</p>

<p><strong>Equity issuance proceeds on the cash flow statement.</strong> "Proceeds from issuance of common stock" in the financing activities section shows cash raised through equity sales. Non-zero amounts mean new shares were sold.</p>

<p><strong>The notes.</strong> Note disclosures on stock options, RSUs, warrants, and convertible securities provide the complete picture: how many awards are outstanding, their exercise prices, vesting schedules, and remaining terms.</p>

<h2 id="dilution-vs-buybacks">Dilution vs Buybacks</h2>

<p>Share buybacks are the opposite of dilution — the company purchases its own shares in the open market, reducing the share count and increasing each remaining share's ownership percentage. Many mature companies use buybacks specifically to offset SBC dilution, keeping the net share count roughly constant.</p>

<p>Check the cash flow statement: "Repurchase of common stock" in the financing section shows buyback spending. Compare to SBC in the operating section. If buybacks exceed SBC, the net share count is shrinking (good for shareholders). If SBC exceeds buybacks, net dilution is occurring despite the buyback program.</p>

<p>Apple, for example, has reduced its share count from 26 billion in 2013 to under 15 billion in 2025 through aggressive buybacks — one of the largest sustained buyback programs in corporate history. Each remaining share represents twice the ownership it did a decade ago.</p>

<h2 id="small-cap-dilution">Dilution Risk in Small-Cap Stocks</h2>

<p>Small-caps dilute more than large-caps for structural reasons: they have less access to debt markets, their stock-based compensation represents a larger percentage of total pay (attracting talent requires equity when cash is tight), and many are pre-profit with no operating cash flow to fund growth.</p>

<p>The worst-case pattern: a micro-cap company that does a secondary offering every 12-18 months, each time at lower prices, while the business doesn't improve. Shareholders who bought at the first offering see their ownership diluted by 50-70% over three years while the stock price falls. This is sometimes called a "death spiral" — each offering signals weakness, which depresses the stock, which necessitates selling more shares at lower prices.</p>

<p>Before buying any small-cap stock, check the share count history. If shares outstanding have doubled in three years without corresponding revenue or earnings growth, the company is funding itself by selling pieces of your ownership.</p>

<p>Brefyr tracks shares outstanding from 10-K and 10-Q filings for all 7,600+ companies, making it straightforward to spot companies with aggressive dilution patterns alongside their filing history and insider trading activity.</p>
`,
};
