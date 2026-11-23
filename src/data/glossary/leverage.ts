import type { GlossaryTerm } from "../types";

export const termLeverage: GlossaryTerm = {
  slug: "leverage",
  term: "Leverage",
  title: "Leverage — Amplifying Returns (and Losses) With Borrowed Capital",
  shortDefinition:
    "Leverage is the use of borrowed capital or financial instruments to increase the potential return of an investment. It amplifies both gains and losses, making it a powerful but dangerous tool.",
  metaDescription:
    "What is leverage in investing? Learn how leverage works through margin, options, and ETFs, the mathematics of amplified returns, and the risks that make leverage the most common cause of catastrophic investment losses.",
  wordCount: 560,
  category: "Trading",
  tags: ["leverage", "margin", "amplification", "risk", "leveraged-etf", "borrowed-capital"],
  relatedSlugs: ["margin-trading", "options", "short-selling", "call-option"],
  relatedTerms: ["margin-trading", "options", "short-selling", "call-option"],
  faq: [
    {
      question: "What are the most common ways individual investors use leverage?",
      answer:
        "The most common forms are: (1) Margin trading — borrowing from your broker to buy more stock (typically 2:1 leverage). (2) Options — a call option controlling 100 shares might cost $500, while the shares would cost $10,000, providing roughly 20:1 notional leverage. (3) Leveraged ETFs — funds like TQQQ provide 3x daily returns of the Nasdaq 100. (4) Futures — a futures contract on the S&P 500 might require $15,000 in margin to control $250,000 of exposure (roughly 17:1). Each form has different mechanics, costs, and risk profiles.",
    },
    {
      question: "Why is leverage considered the most dangerous tool in investing?",
      answer:
        "Leverage turns survivable losses into catastrophic ones. Without leverage, a 30% market decline (which happens roughly once per decade) reduces a $100,000 portfolio to $70,000 — painful but recoverable. With 3:1 leverage, the same 30% decline erases 90% of equity ($100,000 becomes $10,000 after repaying the $200,000 loan). With 4:1 leverage, a 25% decline wipes out the entire account. Leverage also creates path dependency — even if the investment eventually recovers, a margin call during the drawdown can force you out of the position permanently.",
    },
    {
      question: "Do leveraged ETFs actually deliver leveraged long-term returns?",
      answer:
        "No — leveraged ETFs reset daily and suffer from 'volatility decay.' They deliver the stated multiple (2x or 3x) of the daily return, not the long-term return. In a volatile, sideways market, a 3x ETF can lose money even if the underlying index finishes flat. For example, if the index drops 10% one day and rises 11.1% the next (back to even), a 3x ETF drops 30% then rises 33.3%, ending at 93.3% — a 6.7% loss from a flat market. This decay makes leveraged ETFs unsuitable for long-term buy-and-hold. They are trading tools designed for short-term directional bets.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Leverage is the financial equivalent of a lever in physics — it magnifies force. In investing, leverage means using borrowed money or financial derivatives to control a larger position than your capital alone would allow. If you have $10,000 and use 3:1 leverage, you control $30,000 of assets. A 10% gain yields $3,000 (30% return on your capital) instead of $1,000. But a 10% loss costs $3,000 (30% loss of capital), and a 33.3% decline wipes out your entire investment.</p>

<p>This asymmetry — where the upside is attractive but the downside can be existential — is why leverage is simultaneously the most powerful and most dangerous tool in investing. More wealth has been destroyed by leverage than by any other single factor.</p>

<h2 id="forms-of-leverage">Forms of Leverage</h2>

<p>Investors access leverage through several mechanisms:</p>

<ul>
<li><strong><a href="/glossary/margin-trading">Margin trading</a>.</strong> The most direct form. Your broker lends you money secured by your securities. Regulation T allows up to 2:1 leverage (50% initial margin). Portfolio margin can provide more. The cost is margin interest (6-12% annually).</li>
<li><strong><a href="/glossary/options">Options</a>.</strong> Options provide implicit leverage. A <a href="/glossary/call-option">call option</a> costing $3 might control shares worth $100, providing 33:1 notional leverage. The advantage over margin is defined risk — you cannot lose more than the premium paid. The disadvantage is time decay and expiration.</li>
<li><strong>Leveraged ETFs.</strong> Funds like TQQQ (3x Nasdaq 100), UPRO (3x S&P 500), and SOXL (3x Semiconductors) use derivatives to deliver a daily return multiple of their benchmark. No margin account needed — you buy them like any ETF. But daily reset causes volatility decay over time.</li>
<li><strong>Futures.</strong> Futures contracts require a small margin deposit (5-15% of the contract value) to control the full notional amount. A single E-mini S&P 500 futures contract controls approximately $250,000 of market exposure with perhaps $15,000 in margin — roughly 17:1 leverage.</li>
</ul>

<h2 id="mathematics">The Mathematics of Leverage</h2>

<p>Understanding leverage requires simple arithmetic:</p>

<table>
<thead><tr><th>Leverage Ratio</th><th>10% Market Gain</th><th>10% Market Loss</th><th>Decline to Wipe Out</th></tr></thead>
<tbody>
<tr><td>1:1 (no leverage)</td><td>+10%</td><td>-10%</td><td>-100%</td></tr>
<tr><td>2:1</td><td>+20%</td><td>-20%</td><td>-50%</td></tr>
<tr><td>3:1</td><td>+30%</td><td>-30%</td><td>-33%</td></tr>
<tr><td>5:1</td><td>+50%</td><td>-50%</td><td>-20%</td></tr>
<tr><td>10:1</td><td>+100%</td><td>-100%</td><td>-10%</td></tr>
</tbody>
</table>

<p>At 10:1 leverage, a routine 10% market correction eliminates your entire position. The S&P 500 has experienced 10%+ corrections in most calendar years. This is why institutional risk management focuses on controlling leverage ratios above almost all other metrics.</p>

<h2 id="corporate-leverage">Corporate Leverage — Debt on the Balance Sheet</h2>

<p>Leverage is not just an investor concept. Companies use leverage (debt) to amplify returns on equity. A company that borrows $1 billion at 5% and invests it in projects earning 15% generates $100 million in excess returns for shareholders. But if those projects earn only 3%, the company loses $20 million — and must still service the debt.</p>

<p>Corporate leverage appears throughout SEC filings. The <a href="/glossary/10k-filing">10-K</a> filing reports total debt, interest expense, and debt covenants. The debt-to-equity ratio, interest coverage ratio, and <a href="/glossary/ebitda">EBITDA</a>-to-debt ratio measure how leveraged a company is and how safely it can service its obligations. High corporate leverage amplifies earnings volatility — the same dynamic that affects leveraged investors applies to leveraged businesses.</p>

<h2 id="prudent-use">Prudent Use of Leverage</h2>

<p>Leverage is not inherently good or bad — it is a tool. Used conservatively (1.2-1.5:1 on a diversified portfolio), it can enhance returns without existential risk. Used aggressively (3:1+ on concentrated positions), it creates the conditions for catastrophic loss. The key variables are the leverage ratio, the volatility of the underlying positions, the correlation between positions, and the time horizon. Investors using Brefyr for SEC filing analysis should evaluate corporate leverage alongside their own portfolio leverage — both amplify the consequences of being right or wrong about a company's prospects.</p>
`,
};
