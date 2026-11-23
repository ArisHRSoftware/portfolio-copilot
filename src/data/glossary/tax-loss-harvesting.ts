import type { GlossaryTerm } from "../types";

export const termTaxLossHarvesting: GlossaryTerm = {
  slug: "tax-loss-harvesting",
  term: "Tax-Loss Harvesting",
  title: "Tax-Loss Harvesting — Turning Investment Losses Into Tax Savings",
  shortDefinition: "Tax-loss harvesting is a strategy of selling investments at a loss to offset capital gains taxes on other investments, reducing the investor's tax bill while maintaining a similar portfolio exposure by purchasing a comparable (but not substantially identical) replacement investment.",
  metaDescription: "What is tax-loss harvesting? How selling losers saves on taxes, the wash sale rule, how to maintain portfolio exposure, and when this strategy makes sense.",
  wordCount: 850, category: "Investment Strategy", tags: ["tax-loss-harvesting", "capital-gains", "tax-strategy", "wash-sale", "portfolio-management"],
  relatedSlugs: ["wash-sale-rule", "rebalancing", "etf", "index-fund", "portfolio-diversification"], relatedTerms: ["wash-sale-rule", "rebalancing", "etf", "index-fund", "portfolio-diversification"],
  faq: [{ question: "How much can tax-loss harvesting save?", answer: "The savings depend on the amount of losses harvested and the investor's tax rate. Harvested losses offset capital gains dollar-for-dollar, saving the investor 15-23.8% (long-term gains rate plus potential net investment income tax) on each dollar of gains offset. If you have $10,000 in realized losses offsetting $10,000 in gains taxed at 20%, you save $2,000 in taxes. Additionally, up to $3,000 of net capital losses can offset ordinary income each year (saving up to $1,110 at the 37% tax rate), with excess losses carried forward indefinitely. Over decades, the cumulative tax savings compound significantly." },
  { question: "Can I buy back the same stock after selling for a loss?", answer: "Not within 30 days — that would trigger the wash sale rule, which disallows the tax loss. You must wait at least 31 days before repurchasing a 'substantially identical' security. The 30-day window applies both before and after the sale. During the 31-day waiting period, you can purchase a similar but not identical replacement — for example, selling one S&P 500 index fund and immediately buying a total stock market fund to maintain market exposure. After 31 days, you can switch back to the original holding if desired." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Tax-loss harvesting is the deliberate sale of investments at a loss to generate capital losses that offset capital gains elsewhere in the portfolio, reducing the investor's total tax bill. The strategy works because the IRS allows investors to use realized capital losses to offset realized capital gains — and if losses exceed gains, up to $3,000 of excess losses can offset ordinary income each year, with remaining losses carried forward to future years indefinitely. By strategically harvesting losses during market downturns, investors can convert temporary paper losses into permanent tax savings.</p>

<h2 id="how-it-works">How Tax-Loss Harvesting Works</h2>

<p><strong>Step 1 — Identify losses.</strong> Review the portfolio for positions with unrealized losses — investments currently worth less than what you paid for them. The loss is the difference between the purchase price (cost basis) and the current market value.</p>

<p><strong>Step 2 — Sell the losing position.</strong> Sell the investment, realizing the capital loss. This loss is now available to offset capital gains from other sales during the tax year.</p>

<p><strong>Step 3 — Buy a replacement.</strong> Immediately purchase a similar (but not substantially identical) investment to maintain your portfolio allocation and market exposure. For example, if you sell an S&P 500 index fund at a loss, you can immediately buy a total stock market index fund or a different S&P 500 fund from another provider.</p>

<p><strong>Step 4 — Offset gains.</strong> On your tax return, the harvested losses offset realized gains: short-term losses first offset short-term gains (taxed at ordinary income rates), then long-term gains (taxed at capital gains rates). Net losses of up to $3,000 offset ordinary income. Excess losses carry forward.</p>

<h2 id="wash-sale-rule">The Wash Sale Rule</h2>

<p>The wash sale rule (IRC Section 1091) prevents investors from claiming a tax loss if they purchase a "substantially identical" security within 30 days before or after the sale. The 61-day window (30 days before, the sale date, and 30 days after) is the exclusion zone. If the wash sale rule is triggered, the loss is disallowed and added to the cost basis of the replacement purchase — the tax benefit is deferred rather than eliminated, but the timing advantage is lost.</p>

<p>"Substantially identical" is not precisely defined in the tax code, but the IRS has provided guidance: selling and repurchasing the exact same security is clearly a wash sale; selling a Vanguard S&P 500 fund and buying a Fidelity S&P 500 fund tracking the same index is a gray area that some tax advisors consider risky; selling an S&P 500 fund and buying a total stock market fund is generally considered acceptable because the indexes are different.</p>

<h2 id="when-to-harvest">When to Harvest Losses</h2>

<p><strong>Market downturns.</strong> Broad market declines create harvesting opportunities across the portfolio. The 2020 COVID crash and the 2022 bear market were particularly fertile periods for tax-loss harvesting.</p>

<p><strong>Year-end planning.</strong> Many investors review their portfolios in November-December to identify final harvesting opportunities and ensure their realized gains are optimally offset before the tax year closes.</p>

<p><strong>Continuous monitoring.</strong> Robo-advisors and sophisticated investors monitor portfolios daily for harvesting opportunities, capturing losses from even modest market dips. Research shows that continuous harvesting captures significantly more value than annual harvesting alone.</p>

<h2 id="limitations">Limitations</h2>

<p>Tax-loss harvesting defers taxes rather than eliminating them — the replacement investment has a lower cost basis, meaning larger taxable gains when it is eventually sold. The strategy is most valuable for investors in high tax brackets, with large taxable portfolios, and long time horizons (which maximize the present value of the tax deferral). It provides no benefit in tax-advantaged accounts (IRA, 401(k)) where gains are already tax-deferred or tax-free.</p>

<p>Brefyr helps investors monitor the SEC filing data behind the companies and funds in their portfolios, supporting the fundamental analysis that informs tax-loss harvesting decisions about which positions to sell and which replacement investments to purchase.</p>
`,
};
