import type { GlossaryTerm } from "../types";

export const termMarketCapitalization: GlossaryTerm = {
  slug: "market-capitalization",
  term: "Market Capitalization",
  title: "Market Capitalization — How Companies Are Sized and Why It Matters for Investors",
  shortDefinition:
    "Market capitalization (market cap) is the total dollar value of a company's outstanding shares, calculated by multiplying the current stock price by the total number of shares.",
  metaDescription:
    "What is market capitalization? How to calculate market cap, the size tiers (small-cap to mega-cap), and why market cap determines how analysts and investors categorize stocks.",
  wordCount: 2200,
  category: "Investing Concepts",
  tags: ["market-cap", "stock-valuation", "company-size", "investing-basics"],
  relatedSlugs: ["small-cap", "large-cap", "enterprise-value", "shares-outstanding"],
  relatedTerms: ["small-cap", "large-cap", "enterprise-value", "shares-outstanding"],
  faq: [
    {
      question: "How do you calculate market capitalization?",
      answer:
        "Market cap = current stock price x total shares outstanding. If a company has 100 million shares and the stock trades at $25, its market cap is $2.5 billion. The number changes constantly as the stock price fluctuates.",
    },
    {
      question: "Is a higher market cap always better?",
      answer:
        "Not necessarily. Market cap reflects size, not quality. A $500 billion company can be overvalued and a $500 million company can be undervalued. Market cap tells you the company's relative size in the market, which affects liquidity, analyst coverage, and index inclusion — but it says nothing about whether the stock is a good investment.",
    },
    {
      question: "What is the difference between market cap and enterprise value?",
      answer:
        "Market cap measures equity value only — what shareholders own. Enterprise value (EV) adds debt and subtracts cash: EV = market cap + total debt - cash. EV gives a more complete picture of what it would cost to acquire the entire company, which is why analysts prefer EV-based ratios (like EV/EBITDA) for comparing companies with different capital structures.",
    },
    {
      question: "Can market cap change without the company doing anything?",
      answer:
        "Yes. Market cap changes every time the stock price moves. If investor sentiment shifts and the stock drops 20%, the market cap drops 20% — even though the company's actual business hasn't changed. This is why market cap is a market-driven metric, not a fundamental one.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Market capitalization is the shorthand investors use to gauge a company's size. It's one number — stock price times shares outstanding — and it determines almost everything about how a stock is perceived: which index it belongs to, how much analyst coverage it gets, which mutual funds can own it, and how liquid the trading is.</p>

<h2 id="the-formula">The Formula</h2>

<p>Market capitalization = Current stock price x Total shares outstanding</p>

<p>If a company has 50 million shares and the stock trades at $40, its market cap is $2 billion. Simple arithmetic, but the implications are substantial.</p>

<p>The "current stock price" means the last traded price, so market cap fluctuates throughout the trading day. When people refer to a company's market cap, they typically mean the value at the most recent market close.</p>

<p>"Total shares outstanding" is the number of shares that exist — including those held by insiders, institutions, and retail investors. This number is disclosed in the 10-K and 10-Q filings. It changes when the company issues new shares (dilution), repurchases shares (buybacks), or when employees exercise stock options.</p>

<h2 id="size-tiers">Size Tiers</h2>

<p>The investment industry divides companies into size categories based on market cap. These tiers are conventions — no regulator defines them — but they're used consistently enough that you can rely on the following ranges:</p>

<table>
<thead><tr><th>Tier</th><th>Market Cap</th><th>Characteristics</th></tr></thead>
<tbody>
<tr><td><strong>Mega-cap</strong></td><td>$200B+</td><td>Household names. Maximum liquidity. Covered by 30+ analysts. Included in S&P 500 and Dow Jones. Apple, Amazon, Nvidia.</td></tr>
<tr><td><strong>Large-cap</strong></td><td>$10-200B</td><td>Well-known companies. High liquidity. 10-25 analysts. S&P 500 constituents. Starbucks, General Mills, Fortinet.</td></tr>
<tr><td><strong>Mid-cap</strong></td><td>$2-10B</td><td>Established but still growing. Moderate liquidity. 5-15 analysts. S&P 400 MidCap. Crocs, WillScot, Axon Enterprise.</td></tr>
<tr><td><strong>Small-cap</strong></td><td>$300M-2B</td><td>Growth-stage or niche. Lower liquidity. 0-5 analysts. Russell 2000. Less media coverage, more opportunity for individual research.</td></tr>
<tr><td><strong>Micro-cap</strong></td><td>$50-300M</td><td>Early stage or niche. Very low liquidity. Usually zero analyst coverage. SEC "smaller reporting company" rules apply. Higher risk, higher potential reward.</td></tr>
<tr><td><strong>Nano-cap</strong></td><td>Below $50M</td><td>Penny stocks. Minimal liquidity. Highest risk. Many trade OTC rather than on major exchanges. Susceptible to manipulation.</td></tr>
</tbody>
</table>

<p>A company's tier affects its practical reality in several concrete ways:</p>

<h3>Index Inclusion</h3>

<p>The S&P 500 requires a minimum market cap of approximately $14.5 billion (the threshold changes periodically). The Russell 2000 captures companies roughly ranked 1,001-3,000 by market cap. Index inclusion matters because index funds — which collectively manage trillions of dollars — automatically buy and sell stocks based on index membership. Getting added to the S&P 500 creates billions in forced buying.</p>

<h3>Institutional Ownership Limits</h3>

<p>Many mutual funds and pension funds have rules against holding more than 5-10% of a company's outstanding shares. For a mega-cap with $2 trillion in market cap, this is never a constraint. For a micro-cap with $100 million in market cap, it means that any fund managing more than $2 billion is effectively locked out. This institutional limitation is one reason small-caps are less efficiently priced.</p>

<h3>Analyst Coverage</h3>

<p>Wall Street research departments allocate analysts based on the revenue potential of the companies they cover. Covering Apple generates trading commissions, investment banking fees, and media attention. Covering a $400 million industrial supplies company generates almost none of these. The result: roughly 4,000 U.S.-listed companies have zero sell-side analyst coverage, and almost all of them are small-caps or micro-caps.</p>

<h2 id="market-cap-vs-ev">Market Cap vs Enterprise Value</h2>

<p>Market cap measures what equity investors collectively think the company's shares are worth. It ignores debt. Two companies can have the same $1 billion market cap while one has $50 million in cash and zero debt, and the other has $500 million in debt and $10 million in cash. These are fundamentally different financial positions.</p>

<p>Enterprise value (EV) adjusts for this:</p>

<p><strong>EV = Market cap + Total debt + Minority interest + Preferred equity - Cash and cash equivalents</strong></p>

<p>EV answers the question: "What would it cost to buy this entire company, including assuming its debts?" This is why acquirers and private equity firms think in EV terms, and why ratios like EV/EBITDA and EV/Revenue are preferred over P/E for comparing companies with different capital structures.</p>

<p>Both market cap and enterprise value are available in a company's SEC filings. Market cap can be derived from the shares outstanding (10-K, cover page) and the stock price. Enterprise value requires adding debt (balance sheet) and subtracting cash (also balance sheet).</p>

<h2 id="what-market-cap-tells-you">What Market Cap Tells You (and What It Doesn't)</h2>

<p><strong>It tells you:</strong> how the market collectively values the company right now. It's a consensus estimate of the company's worth based on all available information, expectations, and sentiment.</p>

<p><strong>It doesn't tell you:</strong> whether the stock is expensive or cheap. A $100 billion company can be cheap if its earnings justify a $150 billion valuation. A $200 million company can be expensive if it has no revenue and declining prospects. Market cap is a size measure, not a valuation measure.</p>

<p><strong>It doesn't tell you:</strong> the company's actual economic value. Market cap is driven by stock price, which is driven by supply and demand for shares. Prices overshoot (bubbles) and undershoot (panics). During the dot-com crash, companies lost 90% of their market cap in months without any change in their actual business fundamentals.</p>

<h2 id="market-cap-in-sec-filings">Where to Find Market Cap Information in SEC Filings</h2>

<p>The 10-K cover page discloses the aggregate market value of the voting and non-voting common equity held by non-affiliates — essentially the public float, which is closely related to market cap. The exact number of shares outstanding is disclosed in Item 12 of the 10-K and on the balance sheet.</p>

<p>The SEC uses a company's public float (not total market cap) to determine its filing category:</p>

<ul>
<li><strong>Large accelerated filer:</strong> Public float of $700 million+</li>
<li><strong>Accelerated filer:</strong> $75-700 million</li>
<li><strong>Non-accelerated filer:</strong> Below $75 million</li>
<li><strong>Smaller reporting company:</strong> Below $250 million (or below $700 million with less than $100 million in revenue)</li>
</ul>

<p>These categories determine filing deadlines, disclosure requirements, and exemptions from certain rules. A smaller reporting company has fewer disclosure obligations than a large accelerated filer — which means investors in smaller companies have less information to work with, making direct SEC filing analysis even more important.</p>

<p>Brefyr displays market cap data on every stock page, sourced from the companies' SEC filings. For the 7,600+ companies tracked, this provides a consistent, filing-derived size measure alongside filing history, insider trading activity, and AI-generated significance scores.</p>
`,
};
