import type { GlossaryTerm } from "../types";

export const termWashSaleRule: GlossaryTerm = {
  slug: "wash-sale-rule",
  term: "Wash Sale Rule",
  title: "Wash Sale Rule — The IRS Rule That Prevents Gaming Tax-Loss Harvesting",
  shortDefinition: "The wash sale rule is an IRS regulation that disallows a capital loss deduction if the investor purchases a substantially identical security within 30 days before or after selling the security at a loss, preventing investors from claiming tax benefits while effectively maintaining the same investment position.",
  metaDescription: "What is the wash sale rule? How the 30-day window works, what constitutes a substantially identical security, the impact on cost basis, and how to avoid wash sale violations.",
  wordCount: 850, category: "Investment Strategy", tags: ["wash-sale", "tax-rule", "capital-loss", "irs", "tax-loss-harvesting"],
  relatedSlugs: ["tax-loss-harvesting", "rebalancing", "etf", "index-fund"], relatedTerms: ["tax-loss-harvesting", "rebalancing", "etf", "index-fund"],
  faq: [{ question: "What happens if I trigger the wash sale rule?", answer: "The capital loss is disallowed for the current tax year. However, the disallowed loss is not permanently lost — it is added to the cost basis of the replacement purchase. This means you will recognize a larger gain (or smaller loss) when you eventually sell the replacement security. The wash sale rule defers the loss recognition rather than eliminating it entirely. Your broker tracks wash sales and reports them on Form 1099-B, adjusting the cost basis of the replacement shares. If you do not sell the replacement shares in the same tax year, the adjusted basis carries forward." },
  { question: "Does the wash sale rule apply across different accounts?", answer: "Yes. The wash sale rule applies across all of your accounts — if you sell a stock at a loss in your taxable brokerage account and buy the same stock within 30 days in your IRA, the wash sale rule is triggered. Worse, when the repurchase is in an IRA, the disallowed loss cannot be added to the IRA's cost basis (because IRAs don't track cost basis for tax purposes), so the loss may be permanently lost. Spouses' accounts are also subject to the wash sale rule under certain circumstances. Investors must coordinate across all accounts to avoid unintentional violations." }],
  lastUpdated: "2026-11-18",
  body: `
<p>The wash sale rule, codified in Section 1091 of the Internal Revenue Code, prevents investors from claiming a tax deduction for a capital loss while maintaining essentially the same economic position in the investment. Without this rule, an investor could sell a stock at a loss on December 30, claim the tax deduction, and buy the same stock back on December 31 — getting a tax benefit without actually changing their investment. The wash sale rule closes this loophole by disallowing the loss if the investor purchases a "substantially identical" security within a 61-day window centered on the sale date (30 days before through 30 days after).</p>

<h2 id="the-61-day-window">The 61-Day Window</h2>

<p>The wash sale period covers 61 calendar days: 30 days before the sale, the day of the sale itself, and 30 days after the sale. Any purchase of a substantially identical security within this window triggers the rule. This includes purchases that occur before the sale — if you buy shares on December 1 and sell your original shares at a loss on December 20, the loss is disallowed because the replacement purchase fell within the 30-day pre-sale window.</p>

<p>The rule applies to purchases through any means: open market purchases, automatic dividend reinvestment (DRIP), 401(k) payroll contributions, option exercises, and even conversions between share classes of the same fund. This comprehensive scope means investors must be vigilant about all acquisition activity across all accounts during the wash sale window.</p>

<h2 id="substantially-identical">What Is "Substantially Identical"</h2>

<p>The IRS has not provided a precise definition of "substantially identical," creating a gray area that investors must navigate. Clear wash sales include selling and repurchasing the exact same stock, selling a stock and buying a call option on the same stock, and selling a bond and buying a substantially identical bond from the same issuer with the same coupon and maturity.</p>

<p>Generally accepted as NOT substantially identical: selling an S&P 500 index fund and buying a total stock market index fund (different indexes, different compositions), selling one company's stock and buying a competitor's stock (different issuers), and selling a stock and buying a sector ETF that includes the stock (the ETF is diversified and not identical to the single stock).</p>

<p>The gray area includes selling one provider's S&P 500 fund and buying another provider's S&P 500 fund (tracking the same index — many tax advisors recommend avoiding this), and selling an ETF and buying a mutual fund tracking the same index.</p>

<h2 id="cost-basis-adjustment">Cost Basis Adjustment</h2>

<p>When a wash sale occurs, the disallowed loss is added to the cost basis of the replacement shares, and the holding period of the original shares transfers to the replacement shares. For example, if you sell 100 shares at a $10/share loss ($1,000 total loss) and trigger a wash sale by repurchasing, the $1,000 disallowed loss is added to the cost basis of the replacement shares. If the replacement shares were purchased at $50/share, their adjusted cost basis becomes $60/share. When you eventually sell the replacement shares, the higher cost basis reduces your taxable gain (or increases your deductible loss) by the previously disallowed amount.</p>

<h2 id="avoiding-violations">Strategies to Avoid Wash Sales</h2>

<p><strong>Wait 31 days.</strong> The simplest approach — sell the losing position and wait 31 calendar days before repurchasing. The risk is that the stock may appreciate during the waiting period, reducing or eliminating the benefit of the harvested loss.</p>

<p><strong>Substitute similar investments.</strong> Sell the losing position and immediately buy a similar but not substantially identical replacement. Sell a Vanguard Total Stock Market fund, buy a Schwab Total Stock Market fund tracking a different index. Sell an individual tech stock, buy a technology sector ETF.</p>

<p><strong>Coordinate across accounts.</strong> Ensure that automatic purchases (DRIP, 401(k) contributions) do not inadvertently trigger wash sales by purchasing substantially identical securities during the 61-day window. This requires coordination between taxable accounts, retirement accounts, and spouse accounts.</p>

<p>Brefyr provides fundamental data from SEC filings that helps investors evaluate substitute investments for tax-loss harvesting, ensuring that replacement purchases maintain similar portfolio exposure without triggering wash sale violations.</p>
`,
};
