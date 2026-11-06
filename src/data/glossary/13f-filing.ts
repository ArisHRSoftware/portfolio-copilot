import type { GlossaryTerm } from "../types";

export const term13FFiling: GlossaryTerm = {
  slug: "13f-filing",
  term: "13F-HR Filing",
  title: "13F-HR Filing — How to See What Hedge Funds and Institutions Own",
  shortDefinition:
    "A 13F-HR is a quarterly SEC filing that institutional investment managers with $100 million or more in assets must submit, disclosing their U.S. equity holdings.",
  metaDescription:
    "What is a 13F filing? How institutional investors disclose their stock portfolios quarterly, how to find 13F data on EDGAR, and the limitations investors should know.",
  wordCount: 2000,
  category: "SEC Filings",
  tags: ["13f", "institutional-holdings", "hedge-fund", "sec-filing", "portfolio-tracking"],
  relatedSlugs: ["sec-edgar", "beneficial-owner", "form-4", "insider-trading"],
  relatedTerms: ["sec-edgar", "beneficial-owner", "form-4", "insider-trading"],
  faq: [
    {
      question: "Who must file a 13F?",
      answer: "Any institutional investment manager exercising investment discretion over $100 million or more in Section 13(f) securities (primarily U.S. exchange-listed equities). This includes hedge funds, mutual funds, pension funds, insurance companies, bank trust departments, and registered investment advisors. Individual investors are exempt regardless of portfolio size.",
    },
    {
      question: "How current is 13F data?",
      answer: "Not very. 13F filings are due within 45 days of quarter end. A filing due February 14 (for Q4 ending December 31) reflects positions as of December 31 — the data is already 6+ weeks old by the time it's public. Hedge funds may have substantially changed their portfolios in the interim. Use 13F data for trend analysis, not real-time position tracking.",
    },
    {
      question: "Can I see short positions on 13F filings?",
      answer: "No. 13F filings only report long equity positions. Short positions are not required to be disclosed on Form 13F. However, put options (a bearish derivative) do appear if they're held. Large put positions can indicate a bearish bet or a hedge against a long position.",
    },
    {
      question: "How do I find what Berkshire Hathaway or other famous investors own?",
      answer: "Search for the investor's name on EDGAR and filter by filing type '13F-HR'. The most recent filing shows their complete U.S. equity portfolio. Famous investors whose 13F filings are closely followed include Berkshire Hathaway (Warren Buffett), Bridgewater Associates (Ray Dalio), Renaissance Technologies (Jim Simons), and Pershing Square (Bill Ackman).",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Every quarter, the SEC pulls back the curtain on what institutional investors actually own. Form 13F-HR requires any investment manager with $100 million or more in U.S. equity assets to disclose their complete long equity portfolio — every stock, the number of shares, and the approximate market value. This filing is how retail investors see what Berkshire Hathaway, Bridgewater, and thousands of other professional investors are buying and selling.</p>

<p>The data is valuable but imperfect. By the time a 13F becomes public, the positions are already 6-8 weeks old. The filing shows only long equity positions — no shorts, no international stocks, and limited derivatives visibility. Still, 13F filings remain the best publicly available window into institutional money flows, and they're particularly useful for identifying which small-cap stocks are attracting professional attention.</p>

<h2 id="what-13f-contains">What a 13F Filing Contains</h2>

<p>The core of the 13F is the information table — a spreadsheet listing every Section 13(f) security the manager holds. For each position:</p>

<ul>
<li><strong>Issuer name and CUSIP.</strong> The company and its unique security identifier.</li>
<li><strong>Shares or principal amount.</strong> The number of shares (for equities) or face value (for convertible securities).</li>
<li><strong>Market value.</strong> The approximate dollar value based on the quarter-end stock price. Reported in thousands of dollars.</li>
<li><strong>Investment discretion.</strong> Whether the manager has sole, shared, or no voting authority and investment authority over the position.</li>
<li><strong>Type of security.</strong> SH (shares), PUT (put options), CALL (call options), or PRN (principal amount/bonds).</li>
</ul>

<p>The information table is the only section most investors need. The cover page and signature page are administrative.</p>

<h2 id="how-to-use">How to Use 13F Data</h2>

<h3>Track Famous Investors</h3>

<p>The most common use: seeing what Buffett, Dalio, Ackman, and other high-profile investors own. Search for their fund name on EDGAR, filter by 13F-HR, and open the most recent filing. Compare to the prior quarter to see what they bought and sold.</p>

<p>Widely followed 13F filers:</p>
<ul>
<li><strong>Berkshire Hathaway</strong> (Warren Buffett) — Value investing, concentrated portfolio</li>
<li><strong>Bridgewater Associates</strong> (Ray Dalio) — Macro, highly diversified</li>
<li><strong>Renaissance Technologies</strong> — Quantitative, hundreds of positions</li>
<li><strong>Pershing Square Capital</strong> (Bill Ackman) — Activist, concentrated</li>
<li><strong>Appaloosa Management</strong> (David Tepper) — Distressed and value</li>
<li><strong>Tiger Global Management</strong> — Growth/tech focused</li>
<li><strong>Elliott Management</strong> — Activist, event-driven</li>
</ul>

<h3>Identify Institutional Interest in Small-Caps</h3>

<p>This is where 13F data becomes most valuable for Brefyr users. When a hedge fund with a strong track record initiates a new position in a $500 million market cap company, it often precedes significant stock price appreciation — the fund has done deep due diligence that the broader market hasn't yet reflected in the price.</p>

<p>To find institutional interest in a specific stock: search EDGAR's full-text search for the company's CUSIP number within 13F-HR filings. This returns every institutional investor who held the stock as of the reporting date. Compare across quarters to see whether institutional ownership is increasing or decreasing.</p>

<h3>Sector and Thematic Analysis</h3>

<p>Aggregating 13F data across many filers reveals sector-level trends. If 50 hedge funds added healthcare positions in Q3 while reducing technology, that's a meaningful shift in institutional sentiment. These flows often precede sector rotation in the broader market by one to two quarters.</p>

<h2 id="limitations">Critical Limitations</h2>

<h3>Stale Data</h3>
<p>The 45-day filing deadline means positions are 6-8 weeks old by publication. A hedge fund that bought 5% of a company in October has already held the position for two months by the time the December 13F is public in February. They may have sold the entire position in the interim.</p>

<h3>Long Positions Only</h3>
<p>Short positions are absent. A fund might appear to be bullish on a sector based on its long equity positions while simultaneously holding massive short positions that aren't visible on the 13F. This creates a misleading picture of the fund's actual market exposure.</p>

<h3>U.S. Equities Only</h3>
<p>International stocks, fixed income, commodities, and most derivatives are excluded from 13F reporting. For globally diversified funds, the 13F shows a fraction of the total portfolio.</p>

<h3>Position Size Without Context</h3>
<p>The 13F shows that a fund holds $50 million in Apple stock. It doesn't tell you what percentage of the fund's total portfolio that represents. A $50 million Apple position is a core holding for a $500 million fund but a rounding error for a $100 billion fund. Without knowing the fund's total AUM (which isn't always publicly available), the position size lacks context.</p>

<h3>Confidential Treatment Requests</h3>
<p>Fund managers can request confidential treatment for specific positions if disclosure would reveal proprietary trading strategies. The SEC grants these requests selectively. The positions are eventually disclosed (typically the following quarter), but the delay eliminates the timeliness advantage. Major activist positions are often filed confidentially during the accumulation phase.</p>

<h2 id="13f-vs-13d">13F vs SC 13D/13G</h2>

<p>13F and SC 13D/13G serve different purposes:</p>

<table>
<thead><tr><th>Feature</th><th>13F-HR</th><th>SC 13D/13G</th></tr></thead>
<tbody>
<tr><td>Who files</td><td>All institutional managers with $100M+ AUM</td><td>Any holder crossing 5% of a company</td></tr>
<tr><td>Trigger</td><td>Quarterly calendar</td><td>Crossing 5% threshold</td></tr>
<tr><td>Scope</td><td>Entire U.S. equity portfolio</td><td>Single company only</td></tr>
<tr><td>Timeliness</td><td>45 days after quarter end</td><td>10 business days (13D) or 45 days (13G)</td></tr>
<tr><td>Intent disclosed</td><td>No</td><td>Yes (13D requires disclosure of plans)</td></tr>
</tbody>
</table>

<p>For tracking activist investors, SC 13D filings are more timely and informative than 13F filings. For tracking broad institutional money flows, 13F provides the comprehensive picture.</p>

<p>Brefyr processes SEC filings including 13F-HR data for companies in its 7,600+ tracked universe. When institutional filings indicate significant new positions or ownership changes in tracked stocks, this data complements the insider trading (Form 4) and financial filing (10-K/10-Q) analysis already available on each stock page.</p>
`,
};
