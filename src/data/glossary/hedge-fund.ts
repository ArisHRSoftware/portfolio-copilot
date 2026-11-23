import type { GlossaryTerm } from "../types";

export const termHedgeFund: GlossaryTerm = {
  slug: "hedge-fund",
  term: "Hedge Fund",
  title: "Hedge Fund — Exclusive Investment Partnerships Using Complex Strategies for Wealthy Investors",
  shortDefinition: "A hedge fund is a private investment partnership that pools capital from accredited investors and institutional investors, employing sophisticated strategies — including leverage, short selling, derivatives, and concentrated positions — in pursuit of absolute returns regardless of market direction.",
  metaDescription: "What is a hedge fund? How hedge funds differ from mutual funds, common strategies, the fee structure, 13F disclosure requirements, and what hedge fund filings reveal to investors.",
  wordCount: 850, category: "Investment Strategy", tags: ["hedge-fund", "alternative-investment", "accredited-investor", "short-selling", "13f-filing"],
  relatedSlugs: ["private-equity", "accredited-investor", "13f-filing", "short-selling", "qualified-institutional-buyer"], relatedTerms: ["private-equity", "accredited-investor", "13f-filing", "short-selling", "qualified-institutional-buyer"],
  faq: [{ question: "What is the typical hedge fund fee structure?", answer: "The traditional hedge fund fee structure is '2 and 20' — a 2% annual management fee on assets under management plus a 20% performance fee on profits. Some funds also include a 'high-water mark' (the performance fee is only charged on new profits above the previous peak) and a 'hurdle rate' (the fund must exceed a minimum return before the performance fee kicks in). Fee pressure has reduced the industry average to approximately 1.4% management fee and 16% performance fee, but top-performing funds can still charge the full 2 and 20 or even higher." },
  { question: "How can I see what hedge funds are buying and selling?", answer: "Hedge fund managers with over $100 million in assets file Form 13F with the SEC quarterly, disclosing their long equity positions. These filings are public and available on EDGAR. Brefyr processes 13F filings from thousands of institutional investors. However, 13F has limitations: it only shows long positions (not short positions, options in some cases, or non-equity holdings), it is filed 45 days after quarter-end (so the data is delayed), and the fund may have changed its positions since the filing date." }],
  lastUpdated: "2026-11-18",
  body: `
<p>A hedge fund is a private investment vehicle, typically structured as a limited partnership, that pools capital from wealthy individuals and institutional investors to pursue investment returns using strategies not available to traditional mutual funds. The name "hedge fund" originated from the original strategy of hedging market risk by simultaneously buying undervalued stocks (long) and selling overvalued stocks short. Modern hedge funds employ a vast range of strategies — many of which involve no hedging at all — including global macro, event-driven, quantitative, long/short equity, distressed debt, merger arbitrage, and many more.</p>

<h2 id="how-they-differ">How Hedge Funds Differ From Mutual Funds</h2>

<p><strong>Investor restrictions.</strong> Hedge funds are limited to accredited investors and qualified purchasers. They are exempt from SEC registration under the Investment Company Act of 1940 (though the managers typically register as investment advisers under the Investment Advisers Act).</p>

<p><strong>Strategy flexibility.</strong> Hedge funds can use leverage (borrowing to amplify returns), sell securities short, trade derivatives, concentrate in a small number of positions, and invest in illiquid or esoteric assets. Mutual funds face regulatory limits on most of these activities.</p>

<p><strong>Liquidity.</strong> Mutual funds offer daily redemptions. Hedge funds typically restrict redemptions to quarterly or annual windows, often with 30-90 day notice requirements and lock-up periods (1-3 years for new investments). This illiquidity allows funds to pursue longer-term strategies without the pressure of daily redemptions.</p>

<p><strong>Fee structure.</strong> Hedge funds charge both a management fee (1-2% of assets) and a performance fee (15-20% of profits). Mutual funds charge only a management fee. The performance fee aligns the manager's incentive with investors but also means the manager captures a significant share of gains.</p>

<h2 id="common-strategies">Common Hedge Fund Strategies</h2>

<p><strong>Long/short equity.</strong> Buying undervalued stocks and selling overvalued stocks short, aiming to profit from stock selection while reducing market exposure.</p>

<p><strong>Global macro.</strong> Making large directional bets on currencies, interest rates, commodities, and equity markets based on macroeconomic analysis. George Soros's Quantum Fund famously profited from shorting the British pound in 1992.</p>

<p><strong>Event-driven.</strong> Investing around corporate events — mergers, restructurings, bankruptcies, spin-offs. Merger arbitrage (buying the target company's stock after a deal announcement) is the most common event-driven sub-strategy.</p>

<p><strong>Quantitative.</strong> Using mathematical models and algorithms to identify trading opportunities. Quantitative funds range from high-frequency traders (holding periods of milliseconds) to systematic macro funds (holding periods of months).</p>

<p><strong>Distressed.</strong> Investing in the debt or equity of financially troubled companies, aiming to profit from restructuring, recovery, or liquidation at prices above the distressed market value.</p>

<h2 id="performance">Performance Reality</h2>

<p>Hedge fund returns have been disappointing on average relative to simple stock index funds. Over the decade ending 2023, the average hedge fund returned approximately 6-7% annually — significantly underperforming the S&P 500's 12%+ annualized return. Warren Buffett famously won a bet that the S&P 500 would outperform a portfolio of hedge funds over 10 years. However, averages mask enormous dispersion — the top-performing hedge funds deliver extraordinary returns, while the bottom performers lose money. The challenge is identifying top managers in advance.</p>

<h2 id="sec-filings">Hedge Funds in SEC Filings</h2>

<ul>
<li><strong>Form 13F:</strong> Filed quarterly by managers with $100M+ in assets, disclosing long equity positions. The primary window into hedge fund portfolios.</li>
<li><strong>Schedule 13D/13G:</strong> Filed when a hedge fund acquires 5%+ of a company's stock. 13D filings from activist hedge funds are market-moving events.</li>
<li><strong>Form ADV:</strong> Filed by registered investment advisers, disclosing the manager's business, fees, conflicts, and regulatory history.</li>
<li><strong>Form PF:</strong> Confidential filing with the SEC by large hedge fund managers, providing systemic risk data (not publicly available).</li>
</ul>

<p>Brefyr processes 13F filings from thousands of hedge funds and institutional investors, providing investors with visibility into what the most sophisticated market participants are buying and selling across 7,600+ public companies.</p>
`,
};
