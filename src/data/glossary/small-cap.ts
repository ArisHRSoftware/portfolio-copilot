import type { GlossaryTerm } from "../types";

export const termSmallCap: GlossaryTerm = {
  slug: "small-cap",
  term: "Small-Cap Stock",
  title: "Small-Cap Stocks — What They Are, Why They're Different, and How to Research Them",
  shortDefinition:
    "A small-cap stock is a publicly traded company with a market capitalization between roughly $300 million and $2 billion, smaller than mid-cap and large-cap companies.",
  metaDescription:
    "What is a small-cap stock? Market cap ranges, how small-caps differ from large-caps, the risks and rewards, and how to research them using SEC filings.",
  wordCount: 2400,
  category: "Investing Concepts",
  tags: ["small-cap", "market-cap", "investing", "stock-categories"],
  relatedSlugs: ["market-capitalization", "micro-cap", "large-cap", "russell-2000"],
  relatedTerms: ["market-capitalization", "micro-cap", "large-cap", "russell-2000"],
  faq: [
    {
      question: "What market cap range defines a small-cap stock?",
      answer:
        "There is no official SEC definition, but the widely accepted range is $300 million to $2 billion in market capitalization. Companies below $300 million are typically called micro-caps. Companies between $2 billion and $10 billion are mid-caps. These boundaries are conventions, not rules — different data providers use slightly different cutoffs.",
    },
    {
      question: "Are small-cap stocks riskier than large-cap stocks?",
      answer:
        "Yes, on average. Small-caps have higher volatility, lower liquidity, less analyst coverage, weaker balance sheets, and a higher failure rate than large-caps. However, they also have historically delivered higher returns over long periods. The Ibbotson data shows U.S. small-cap stocks returned approximately 12% annually from 1926-2023, compared to about 10% for large-caps. The extra return compensates for the extra risk.",
    },
    {
      question: "Why do small-cap stocks get less analyst coverage?",
      answer:
        "Sell-side research coverage is driven by investment banking revenue. Large companies generate more trading commissions and are more likely to issue bonds or equity — both of which generate fees for brokerages. A micro-cap company with $400 million in market cap simply doesn't generate enough revenue for a Wall Street bank to justify paying an analyst $300,000+/year to cover it.",
    },
    {
      question: "What is the best way to research small-cap stocks?",
      answer:
        "SEC filings are the most reliable source. Start with the 10-K for a comprehensive business overview and audited financials. Check Form 4 filings for insider trading activity. Look at 8-K filings for material events. Because small-caps lack analyst coverage, reading the primary source documents gives you an information advantage that barely exists in large-cap investing.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Small-cap stocks occupy the middle ground of the public equity universe. They're large enough to be listed on major exchanges and file regular SEC reports, but small enough that most Wall Street analysts ignore them. That combination — publicly available information plus minimal professional scrutiny — creates an environment where individual investors can develop a real informational edge.</p>

<h2 id="defining-small-cap">Defining Small-Cap</h2>

<p>Market capitalization — calculated by multiplying the stock price by the total shares outstanding — is how the market classifies company size. The conventional tiers are:</p>

<table>
<thead><tr><th>Category</th><th>Market Cap Range</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Mega-cap</td><td>$200 billion+</td><td>Apple, Microsoft, Amazon</td></tr>
<tr><td>Large-cap</td><td>$10-200 billion</td><td>Starbucks, FedEx, Deere</td></tr>
<tr><td>Mid-cap</td><td>$2-10 billion</td><td>Crocs, Axon, Five Below</td></tr>
<tr><td><strong>Small-cap</strong></td><td><strong>$300M-2B</strong></td><td>Most Russell 2000 constituents</td></tr>
<tr><td>Micro-cap</td><td>$50-300 million</td><td>Many OTC and small exchange-listed</td></tr>
<tr><td>Nano-cap</td><td>Below $50 million</td><td>Penny stocks, pre-revenue companies</td></tr>
</tbody>
</table>

<p>These ranges are conventions, not SEC definitions. The SEC categorizes companies by filing status — large accelerated filer, accelerated filer, non-accelerated filer, and smaller reporting company — which roughly corresponds to size but uses different thresholds based on public float rather than market cap.</p>

<p>The Russell 2000 index is the most widely used benchmark for small-cap stocks. It tracks the smallest 2,000 companies in the Russell 3000 index, which represents approximately 98% of the investable U.S. equity market. As of recent reconstitutions, the median market cap of a Russell 2000 company is approximately $1 billion.</p>

<h2 id="why-different">Why Small-Caps Behave Differently</h2>

<h3>Less Efficient Pricing</h3>

<p>Large-cap stocks are covered by 20-40 sell-side analysts, monitored by thousands of institutional investors, and traded billions of dollars daily. New information is processed and reflected in the stock price within minutes. It's extraordinarily difficult to find a mispriced Apple or Microsoft.</p>

<p>Small-cap stocks are often covered by zero to two analysts. Many are not held by any major mutual fund. Average daily trading volume may be $500,000 or less. When a small-cap company files a 10-K with an unexpectedly strong quarter, it may take days for the information to reach investors. That delay is where the opportunity lies.</p>

<h3>Higher Volatility</h3>

<p>Low liquidity means that relatively small buy or sell orders can move the stock price significantly. A fund manager buying $5 million of Apple barely registers. A fund manager buying $5 million of a small-cap stock with $500K daily volume would drive the price up 5-10% or more. This works in both directions — small-caps drop harder on bad news too.</p>

<h3>Higher Growth Potential</h3>

<p>A $1 billion company can plausibly double in value. A $2 trillion company cannot. Small-caps are earlier in their growth trajectory and have more room to expand revenue, margins, and market share. Many of today's mega-caps (Nvidia, Tesla, Amazon) were once small-cap stocks.</p>

<h3>Higher Failure Rate</h3>

<p>The flip side of higher growth potential is higher mortality. Small-cap companies are more likely to run out of cash, lose their key customer, face a competitive threat they can't overcome, or get delisted from exchanges. The going concern warnings in their 10-K risk factors are not theoretical — they reflect real survival risk.</p>

<h2 id="researching-small-caps">How to Research Small-Cap Stocks</h2>

<p>Because analyst coverage is sparse, small-cap investors must do their own fundamental research. SEC filings are the foundation.</p>

<h3>Start with the 10-K</h3>

<p>Read the business description (Item 1) to understand what the company actually does. Read the risk factors (Item 1A) to understand what could go wrong. Read the MD&A (Item 7) to hear management's assessment of performance. Check the financial statements for revenue growth, profitability, cash position, and debt levels.</p>

<p>For small-caps specifically, pay extra attention to:</p>
<ul>
<li><strong>Customer concentration.</strong> Does 40%+ of revenue come from a single customer? Losing that customer would be catastrophic.</li>
<li><strong>Cash runway.</strong> How many months of cash does the company have at its current burn rate? Pre-profit small-caps often need to raise capital, diluting existing shareholders.</li>
<li><strong>Going concern language.</strong> If the auditor's report mentions "substantial doubt about the ability to continue as a going concern," the company may be at risk of bankruptcy within 12 months.</li>
<li><strong>Related party transactions.</strong> Small-caps are more prone to self-dealing by management — leasing office space from the CEO's family, paying above-market consulting fees to board members' firms.</li>
</ul>

<h3>Track Insider Trading (Form 4)</h3>

<p>Insider buying is a stronger signal in small-caps than in large-caps. When the CEO of a $500 million company buys $200,000 worth of stock on the open market, they're making a meaningful bet relative to their net worth and the company's size. The same $200,000 purchase by a Google executive is rounding error.</p>

<h3>Monitor 8-K Filings</h3>

<p>Material events at small-cap companies receive far less media attention than at large companies. A small-cap's 8-K announcing a major contract win might not appear on any financial news site. The only way to learn about it is to read the filing on EDGAR — or use a service like Brefyr that monitors 8-K filings and sends alerts.</p>

<h3>Check the Proxy Statement (DEF 14A)</h3>

<p>Small-cap governance is more variable than large-cap governance. Some small-caps have professional boards with independent oversight. Others have boards stacked with the founder's friends and family. The proxy statement reveals board composition, executive compensation, and related party transactions.</p>

<h2 id="small-cap-premium">The Small-Cap Premium</h2>

<p>The academic "size effect" — the observation that small-cap stocks outperform large-caps over long periods — was first documented by Rolf Banz in 1981. The original paper found that the smallest quintile of NYSE stocks outperformed the largest quintile by approximately 4% per year.</p>

<p>The premium has narrowed in recent decades, and some researchers argue it has disappeared entirely after adjusting for risk and survivorship bias. Others contend that the premium still exists but concentrates in specific segments — value stocks within small-caps, or micro-caps with positive earnings momentum.</p>

<p>Whether or not a systematic small-cap premium exists, the informational inefficiency is real. Individual investors who are willing to read SEC filings, track insider trading, and do fundamental analysis on companies with zero analyst coverage can find opportunities that simply don't exist in the large-cap space.</p>

<h2 id="how-brefyr-helps">How Brefyr Fits In</h2>

<p>Brefyr exists specifically for this use case. The platform tracks 7,600+ U.S.-listed companies — the vast majority of which are small-caps and micro-caps with no analyst coverage. Every SEC filing (10-K, 10-Q, 8-K, Form 4) is processed by AI within minutes of publication and assigned a significance score. Insider trading activity is parsed from Form 4 filings and displayed on each stock page.</p>

<p>The result: the same filing intelligence that institutional investors pay $24,000/year for on Bloomberg, applied to the stocks that Bloomberg's analysts don't cover.</p>
`,
};
