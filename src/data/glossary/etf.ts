import type { GlossaryTerm } from "../types";

export const termEtf: GlossaryTerm = {
  slug: "etf",
  term: "Exchange-Traded Fund (ETF)",
  title: "Exchange-Traded Fund (ETF) — Index Investing That Trades Like a Stock",
  shortDefinition: "An exchange-traded fund (ETF) is an investment fund that holds a basket of securities (stocks, bonds, commodities) and trades on a stock exchange throughout the day like an individual stock, combining the diversification of a mutual fund with the trading flexibility of a stock.",
  metaDescription: "What is an ETF? How ETFs work, the difference between ETFs and mutual funds, types of ETFs, creation and redemption, and why ETFs have become the dominant investment vehicle.",
  wordCount: 850, category: "Investment Strategy", tags: ["etf", "exchange-traded-fund", "passive-investing", "diversification", "investment-vehicle"],
  relatedSlugs: ["index-fund", "mutual-fund", "factor-investing", "portfolio-diversification", "asset-allocation"], relatedTerms: ["index-fund", "mutual-fund", "factor-investing", "portfolio-diversification", "asset-allocation"],
  faq: [{ question: "How do ETFs differ from mutual funds?", answer: "Key differences: (1) Trading — ETFs trade on exchanges throughout the day at market prices; mutual funds are bought/sold once daily at the closing NAV. (2) Tax efficiency — ETFs use the creation/redemption mechanism to minimize capital gains distributions; mutual funds must sell securities to meet redemptions, potentially triggering taxable gains for all shareholders. (3) Minimum investment — ETFs can be purchased one share at a time (or fractionally); some mutual funds have $1,000-$3,000 minimums. (4) Transparency — most ETFs disclose holdings daily; mutual funds disclose quarterly. (5) Costs — both can be very low-cost for index strategies; ETFs have no load fees but incur brokerage commissions (now often zero)." },
  { question: "What is the creation and redemption process?", answer: "ETF shares are created and redeemed by authorized participants (APs) — typically large broker-dealers. When demand for an ETF exceeds supply, APs deliver a basket of the underlying securities to the ETF issuer and receive new ETF shares in return (creation). When there is excess supply, APs return ETF shares to the issuer and receive the underlying securities (redemption). This in-kind process keeps the ETF's market price close to its net asset value and generates minimal taxable events, giving ETFs a structural tax advantage over mutual funds." }],
  lastUpdated: "2026-11-18",
  body: `
<p>An exchange-traded fund (ETF) is an investment fund that holds a diversified portfolio of securities and trades on a stock exchange, allowing investors to buy and sell shares throughout the trading day at market-determined prices. ETFs have become the dominant vehicle for investment management, with global assets exceeding $10 trillion. They combine the best features of index mutual funds (broad diversification, low cost, passive management) with the best features of individual stocks (intraday trading, transparency, tax efficiency). The first ETF — the SPDR S&P 500 ETF (SPY) — was launched in 1993 and remains one of the most heavily traded securities in the world.</p>

<h2 id="how-etfs-work">How ETFs Work</h2>

<p><strong>Index tracking.</strong> Most ETFs track a specific index — the S&P 500, the Nasdaq-100, a bond index, a sector index, or a factor index. The ETF holds the securities in the index (or a representative sample) and aims to match the index's return before fees.</p>

<p><strong>Intraday trading.</strong> Unlike mutual funds (priced once daily), ETFs trade continuously on stock exchanges. Investors can buy and sell at any point during market hours, use limit orders, and even sell short. This provides flexibility for investors who want to manage their entry and exit timing.</p>

<p><strong>Creation/redemption.</strong> The mechanism that keeps ETF prices aligned with the underlying securities' net asset value (NAV). Authorized participants arbitrage any premium or discount by creating new shares (delivering underlying securities in exchange for ETF shares) or redeeming shares (returning ETF shares in exchange for underlying securities). This in-kind process is also the source of ETFs' tax efficiency.</p>

<h2 id="types-of-etfs">Types of ETFs</h2>

<p><strong>Broad market ETFs.</strong> Track major indexes (S&P 500, total stock market, total international). These are the core building blocks for most portfolios and charge the lowest fees (as low as 0.03% annually).</p>

<p><strong>Sector ETFs.</strong> Focus on specific industries (technology, healthcare, financials, energy). Allow investors to overweight or underweight specific sectors.</p>

<p><strong>Factor/smart beta ETFs.</strong> Target specific factor exposures (value, momentum, quality, low volatility, dividend growth). These ETFs implement systematic investment strategies at index-fund costs.</p>

<p><strong>Bond ETFs.</strong> Hold portfolios of bonds (government, corporate, municipal, high-yield, inflation-protected). Bond ETFs have democratized fixed-income investing by making bond markets accessible to individual investors.</p>

<p><strong>Thematic ETFs.</strong> Focus on specific themes (artificial intelligence, clean energy, cybersecurity, cannabis). These are more speculative and typically carry higher fees.</p>

<p><strong>Active ETFs.</strong> Managed by portfolio managers who actively select securities rather than tracking an index. Active ETFs combine active management with the ETF structure's tax efficiency and transparency benefits. They have been the fastest-growing ETF category in recent years.</p>

<h2 id="tax-efficiency">Tax Efficiency</h2>

<p>ETFs are structurally more tax-efficient than mutual funds because of the in-kind creation/redemption process. When a mutual fund investor redeems, the fund may need to sell securities at a gain to raise cash, distributing taxable capital gains to all remaining shareholders. When an ETF investor sells, they sell their shares on the exchange — the fund does not need to sell any underlying securities. Additionally, the authorized participant mechanism allows ETFs to remove low-cost-basis securities from the portfolio through in-kind redemptions, purging embedded capital gains without triggering taxable events.</p>

<h2 id="costs">Understanding ETF Costs</h2>

<p>ETF costs include the expense ratio (annual management fee), the bid-ask spread (the cost of buying at the ask and selling at the bid), and any premium or discount to NAV (the difference between the ETF's market price and the value of its underlying holdings). For large, liquid ETFs tracking major indexes, all three costs are minimal. For niche, thinly traded ETFs, bid-ask spreads and NAV premiums can be significant.</p>

<p>Brefyr provides the fundamental financial data from SEC filings that underpins both the indexes tracked by ETFs and the investment analysis that ETF investors use to construct and monitor their portfolios across 7,600+ public companies.</p>
`,
};
