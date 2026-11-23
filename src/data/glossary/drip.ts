import type { GlossaryTerm } from "../types";

export const termDrip: GlossaryTerm = {
  slug: "drip",
  term: "Dividend Reinvestment Plan (DRIP)",
  title: "DRIP — Automatically Reinvesting Dividends to Compound Your Returns",
  shortDefinition: "A dividend reinvestment plan (DRIP) automatically uses cash dividends to purchase additional shares of the same stock or fund, compounding returns over time by continuously increasing the number of shares owned without requiring the investor to take any action.",
  metaDescription: "What is a DRIP? How dividend reinvestment plans work, the power of compounding, company-sponsored vs brokerage DRIPs, tax implications, and when DRIPs make sense.",
  wordCount: 850, category: "Investment Strategy", tags: ["drip", "dividend-reinvestment", "compounding", "income-investing", "dividend"],
  relatedSlugs: ["dividend", "dividend-yield", "compound-interest", "dollar-cost-averaging"], relatedTerms: ["dividend", "dividend-yield", "compound-interest", "dollar-cost-averaging"],
  faq: [{ question: "Are dividends reinvested through a DRIP still taxable?", answer: "Yes. Even though the dividends are automatically reinvested rather than received as cash, they are taxable in the year they are paid. You owe taxes on the dividend income regardless of whether it is paid in cash or reinvested in additional shares. This is a common source of confusion — many investors are surprised to receive a tax bill for income they never 'saw' as cash. The reinvested dividends increase your cost basis in the stock, which reduces the capital gains tax when you eventually sell. Your broker reports the reinvested dividends on Form 1099-DIV." },
  { question: "Should I always reinvest my dividends?", answer: "For investors in the accumulation phase (building wealth over decades), reinvesting dividends is generally optimal — it maximizes the compounding effect. For investors in the distribution phase (living off their investments in retirement), taking dividends as cash provides income without selling shares. Other considerations: if the stock is overvalued, reinvesting at high prices may be suboptimal (better to take cash and deploy it elsewhere); if you need the cash for living expenses or other investments, taking the dividend makes sense. DRIPs also create tax-lot complexity that can complicate record-keeping for tax purposes." }],
  lastUpdated: "2026-11-18",
  body: `
<p>A dividend reinvestment plan (DRIP) automatically uses cash dividends to purchase additional shares of the paying stock or fund. Instead of receiving a $100 quarterly dividend as cash in your brokerage account, the DRIP uses that $100 to buy more shares — including fractional shares — at the current market price. Over time, the reinvested dividends generate their own dividends, which are reinvested to buy even more shares, creating a compounding cycle that significantly amplifies long-term returns. DRIPs embody the power of compound interest applied to equity investing.</p>

<h2 id="how-drips-work">How DRIPs Work</h2>

<p><strong>Brokerage DRIPs.</strong> Most brokerage accounts offer automatic dividend reinvestment as a free feature. You enable DRIP for specific holdings or your entire portfolio, and the broker automatically uses each dividend payment to purchase additional shares at the market price on the payment date. Fractional shares are supported by most major brokers, so every dollar of dividend income is reinvested. This is the most common form of DRIP for individual investors.</p>

<p><strong>Company-sponsored DRIPs.</strong> Some companies offer direct stock purchase and dividend reinvestment plans, allowing investors to buy shares directly from the company (bypassing a broker) and reinvest dividends, sometimes at a discount (typically 1-5%) to the market price. Company DRIPs may also waive or reduce commissions. These plans require enrollment directly with the company's transfer agent.</p>

<h2 id="compounding-power">The Power of Compounding</h2>

<p>The impact of dividend reinvestment over long periods is dramatic. Consider an investment of $10,000 in a stock yielding 3% with 7% annual price appreciation. After 30 years without reinvestment, the position is worth approximately $76,000 (from price appreciation alone) plus $33,000 in cumulative dividends received as cash — total value approximately $109,000. With dividend reinvestment, the same investment grows to approximately $160,000+ because the reinvested dividends purchased additional shares, which themselves appreciated and generated more dividends. The difference — $50,000+ — represents the compounding return on reinvested dividends alone.</p>

<p>Historically, dividend reinvestment has accounted for roughly 40-50% of the S&P 500's total return over long periods. An investor who took dividends as cash and only benefited from price appreciation captured approximately half the total return available from the market.</p>

<h2 id="dollar-cost-averaging">DRIP as Dollar-Cost Averaging</h2>

<p>DRIPs provide a natural form of dollar-cost averaging. Dividends are paid quarterly (for most stocks), and the reinvestment occurs at whatever the market price happens to be on the payment date. When the stock price is low, the dividend buys more shares. When the stock price is high, it buys fewer shares. This automatic accumulation at varying prices smooths the average cost and removes the temptation to time purchases.</p>

<h2 id="tax-implications">Tax Implications</h2>

<p>Reinvested dividends are taxable in the year they are paid — the IRS treats them identically to dividends received as cash. This creates a "phantom income" situation where the investor owes taxes on income they did not receive in cash. Each reinvested dividend creates a new tax lot with its own cost basis and holding period, which can complicate record-keeping and tax preparation. When you eventually sell shares accumulated through DRIP, you must track the cost basis of each lot to calculate gains and losses correctly. Modern brokerages handle this tracking automatically and report it on Form 1099-B.</p>

<h2 id="when-to-disable">When Not to DRIP</h2>

<p>Disabling DRIP makes sense when you need the dividend income for living expenses, the stock is significantly overvalued (better to take cash and invest elsewhere), you want to rebalance across your portfolio (taking cash dividends from overweight positions), or you are approaching retirement and transitioning from accumulation to distribution. Some investors disable DRIP for individual stocks but enable it for index funds, taking a more selective approach to reinvestment.</p>

<p>Brefyr tracks dividend data from SEC filings — 8-K declarations, cash flow statements, and financial notes — providing investors with the information needed to evaluate dividend sustainability before committing to long-term reinvestment through DRIP programs.</p>
`,
};
