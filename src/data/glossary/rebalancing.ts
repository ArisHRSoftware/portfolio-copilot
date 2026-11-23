import type { GlossaryTerm } from "../types";

export const termRebalancing: GlossaryTerm = {
  slug: "rebalancing",
  term: "Portfolio Rebalancing",
  title: "Portfolio Rebalancing — Maintaining Your Target Asset Mix by Buying Low and Selling High",
  shortDefinition: "Portfolio rebalancing is the process of periodically adjusting a portfolio's asset allocation back to its target weights by selling assets that have grown beyond their target percentage and buying assets that have fallen below, enforcing a disciplined buy-low, sell-high strategy.",
  metaDescription: "What is portfolio rebalancing? How it works, when and how often to rebalance, the automatic buy-low-sell-high effect, tax considerations, and practical approaches.",
  wordCount: 850, category: "Investment Strategy", tags: ["rebalancing", "asset-allocation", "portfolio-management", "risk-management", "discipline"],
  relatedSlugs: ["asset-allocation", "portfolio-diversification", "tax-loss-harvesting", "index-fund"], relatedTerms: ["asset-allocation", "portfolio-diversification", "tax-loss-harvesting", "index-fund"],
  faq: [{ question: "How often should I rebalance my portfolio?", answer: "Research shows that the specific frequency matters less than having a consistent approach. Common approaches: (1) Calendar-based — rebalance annually, semi-annually, or quarterly on fixed dates. Annual rebalancing is sufficient for most investors. (2) Threshold-based — rebalance whenever any asset class drifts more than 5% from its target (e.g., if stocks drift from 70% to 76%). This approach rebalances only when needed. (3) Hybrid — check on a calendar basis and rebalance only if thresholds are exceeded. Over-rebalancing (monthly or more frequently) increases transaction costs and tax events without meaningful risk reduction benefit." },
  { question: "Does rebalancing actually improve returns?", answer: "Rebalancing primarily manages risk rather than maximizing returns. By selling the asset class that has outperformed and buying the one that has underperformed, you are systematically buying low and selling high — which feels counterintuitive but enforces discipline. In trending markets (one asset class consistently outperforming), rebalancing reduces returns because you are trimming your winners. In mean-reverting markets, rebalancing adds value. Over long periods, rebalancing produces slightly lower returns than a buy-and-hold approach but with significantly lower risk — the portfolio maintains its intended risk profile." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Portfolio rebalancing is the disciplined practice of returning a portfolio to its target asset allocation after market movements have caused it to drift. If your target allocation is 70% stocks and 30% bonds, and a strong stock market pushes your portfolio to 80% stocks and 20% bonds, rebalancing involves selling some stocks and buying bonds to restore the 70/30 split. This mechanical process enforces a buy-low, sell-high discipline — you are systematically selling the asset class that has become expensive (by virtue of having appreciated) and buying the one that has become relatively cheap.</p>

<h2 id="why-rebalance">Why Rebalancing Matters</h2>

<p><strong>Risk management.</strong> Without rebalancing, a portfolio's risk profile changes over time. A 70/30 stock/bond portfolio that drifts to 85/15 after a bull market carries significantly more risk than the investor originally intended. If a bear market hits, the unrebalanced portfolio will suffer larger losses. Rebalancing ensures the portfolio maintains the risk level the investor chose based on their goals and risk tolerance.</p>

<p><strong>Disciplined contrarianism.</strong> Rebalancing forces investors to do what is psychologically difficult: sell winners and buy losers. After a stock market surge, the natural instinct is to let winners ride. After a bond rally during a stock market downturn, the instinct is to stay in the safe asset. Rebalancing overrides these emotions with a systematic process, buying more of the underperforming asset class when it is relatively cheaper.</p>

<p><strong>Maintaining the plan.</strong> An asset allocation is chosen for a reason — it matches the investor's time horizon, risk tolerance, and goals. Market movements that change the allocation are changing the plan. Rebalancing is simply the mechanism for sticking to the plan.</p>

<h2 id="methods">Rebalancing Methods</h2>

<p><strong>Calendar-based.</strong> Rebalance on a fixed schedule — annually, semi-annually, or quarterly. Annual rebalancing is the most common and is sufficient for most investors. Many advisors recommend rebalancing on a date unrelated to market events (like a birthday) to avoid emotional decision-making.</p>

<p><strong>Threshold-based.</strong> Rebalance whenever any asset class deviates from its target by more than a specified percentage (commonly 5 percentage points or 20-25% of the target weight). This approach rebalances only when meaningful drift has occurred, avoiding unnecessary transactions.</p>

<p><strong>Cash flow rebalancing.</strong> Instead of selling overweight positions, direct new contributions (savings, dividends, rebalanced 401(k) contributions) to the underweight asset class. This achieves rebalancing without selling, avoiding transaction costs and capital gains taxes. This is the most tax-efficient method and works well for investors who are still accumulating assets.</p>

<h2 id="tax-considerations">Tax Considerations</h2>

<p>In taxable accounts, rebalancing by selling appreciated assets triggers capital gains taxes. Strategies to minimize the tax impact include rebalancing primarily in tax-advantaged accounts (IRA, 401(k)) where there is no tax on sales, using new contributions to rebalance (buying underweight assets without selling overweight assets), combining rebalancing with tax-loss harvesting (selling losing positions to offset gains from rebalancing sales), and using threshold-based rebalancing to reduce the frequency of taxable events.</p>

<h2 id="automation">Automation</h2>

<p>Many brokerage platforms and robo-advisors offer automatic rebalancing. The investor sets a target allocation, and the platform monitors and rebalances the portfolio — either on a calendar schedule or when thresholds are breached. Target-date mutual funds and balanced funds handle rebalancing internally, requiring no action from the investor. For those who prefer self-directed investing, setting a calendar reminder and spending 30 minutes annually reviewing and rebalancing is sufficient.</p>

<p>Brefyr helps investors understand the fundamental characteristics of the equity portion of their portfolios through SEC filing data, providing the information needed to make informed decisions about which positions to trim and which to add during the rebalancing process.</p>
`,
};
