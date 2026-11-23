import type { GlossaryTerm } from "../types";

export const termAssetAllocation: GlossaryTerm = {
  slug: "asset-allocation",
  term: "Asset Allocation",
  title: "Asset Allocation — The Most Important Investment Decision You'll Make",
  shortDefinition: "Asset allocation is the process of dividing an investment portfolio among different asset categories — stocks, bonds, cash, real estate, and alternatives — based on the investor's goals, time horizon, and risk tolerance, and is widely considered the primary determinant of long-term portfolio returns and risk.",
  metaDescription: "What is asset allocation? How dividing investments between stocks, bonds, and other assets determines portfolio risk and return, common allocation models, and when to adjust.",
  wordCount: 850, category: "Investment Strategy", tags: ["asset-allocation", "portfolio-construction", "stocks-bonds", "risk-tolerance", "investment-strategy"],
  relatedSlugs: ["portfolio-diversification", "rebalancing", "index-fund", "etf", "compound-interest"], relatedTerms: ["portfolio-diversification", "rebalancing", "index-fund", "etf", "compound-interest"],
  faq: [{ question: "What is the right asset allocation for me?", answer: "There is no universal answer — the right allocation depends on your time horizon, risk tolerance, and financial goals. A common starting framework is '100 minus your age in stocks' (a 30-year-old holds 70% stocks, 30% bonds), though many advisors now recommend '110 or 120 minus your age' given longer life expectancies and low bond yields. Younger investors with 30+ year horizons can tolerate more stock exposure (80-100%) because they have time to recover from downturns. Investors near or in retirement typically reduce stock exposure to 40-60% to preserve capital. The key principle is that stocks provide growth (but with volatility) and bonds provide stability (but with lower returns)." },
  { question: "How much difference does asset allocation make?", answer: "Research suggests that asset allocation explains approximately 90% of the variation in portfolio returns over time — far more than individual security selection or market timing. The classic Brinson, Hood, and Beebower study (1986) found that the decision between stocks and bonds was the dominant factor in investment outcomes. A portfolio that is 90% stocks will behave very differently from one that is 40% stocks, regardless of which specific stocks or bonds are chosen within each allocation." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Asset allocation is the strategic decision of how to divide your investment portfolio among major asset categories — primarily stocks, bonds, and cash, with potential additions of real estate, commodities, and alternative investments. Research consistently shows that this decision — not which specific stocks to buy or when to enter the market — is the primary determinant of long-term investment results. An investor with a well-chosen asset allocation and low-cost index funds will almost certainly outperform an investor who picks brilliant stocks but has the wrong overall portfolio mix for their situation.</p>

<h2 id="major-asset-classes">Major Asset Classes</h2>

<p><strong>Stocks (equities).</strong> Ownership stakes in companies. Highest long-term expected return (historically 8-10% annually) but also the highest volatility. Stocks can decline 30-50% in bear markets. Appropriate for investors with long time horizons who can tolerate significant short-term losses.</p>

<p><strong>Bonds (fixed income).</strong> Loans to governments or corporations that pay fixed interest and return the principal at maturity. Lower expected returns (historically 4-6%) but much lower volatility than stocks. Bonds provide income and portfolio stability, particularly during stock market declines.</p>

<p><strong>Cash and cash equivalents.</strong> Savings accounts, money market funds, Treasury bills. Near-zero real return after inflation but zero volatility. Cash provides liquidity for near-term needs and dry powder for investment opportunities.</p>

<p><strong>Real estate.</strong> Real estate investment trusts (REITs), direct property investment, or real estate funds. Provides income, potential appreciation, and inflation protection. Moderate correlation with stocks.</p>

<p><strong>Alternatives.</strong> Commodities, hedge funds, private equity, infrastructure, and other non-traditional investments. May provide diversification benefits but typically with higher costs, lower liquidity, and more complexity.</p>

<h2 id="allocation-models">Common Allocation Models</h2>

<p><strong>Age-based:</strong> The simplest framework. Hold (110 minus your age) percent in stocks. A 30-year-old holds 80% stocks and 20% bonds. A 60-year-old holds 50% stocks and 50% bonds. This mechanical approach automatically becomes more conservative as the investor ages.</p>

<p><strong>Risk-tolerance-based:</strong> Allocate based on your willingness and ability to tolerate losses. Conservative investors (cannot stomach a 20%+ decline) might hold 30-40% stocks. Moderate investors hold 50-60% stocks. Aggressive investors (comfortable with large swings, long time horizon) hold 70-90% stocks.</p>

<p><strong>Goal-based:</strong> Different goals get different allocations. Retirement in 30 years: 90% stocks. House down payment in 3 years: 20% stocks, 80% short-term bonds and cash. Emergency fund: 100% cash. Each goal's allocation reflects its time horizon and the consequence of falling short.</p>

<p><strong>Target-date funds:</strong> All-in-one funds that automatically adjust the allocation based on your expected retirement year. A 2060 target-date fund holds mostly stocks today and gradually shifts to bonds as 2060 approaches. These funds implement asset allocation and rebalancing automatically, making them suitable for investors who want simplicity.</p>

<h2 id="strategic-vs-tactical">Strategic vs Tactical Allocation</h2>

<p><strong>Strategic allocation:</strong> Setting a long-term target allocation (e.g., 70% stocks, 30% bonds) and maintaining it through regular rebalancing. This is the recommended approach for most investors — it is disciplined, low-cost, and avoids the temptation of market timing.</p>

<p><strong>Tactical allocation:</strong> Temporarily deviating from the strategic allocation based on market conditions or valuations — for example, reducing stock exposure when valuations are historically extreme. Tactical allocation attempts to add value through timing, but research shows it is difficult to execute consistently and can detract from returns if done poorly.</p>

<h2 id="sec-context">Asset Allocation and SEC Filings</h2>

<p>While asset allocation operates at the portfolio level, the financial data from SEC filings informs the analysis underlying allocation decisions. Stock market valuations (PE ratios, earnings yields) derived from 10-K and 10-Q data help investors assess whether stocks are expensive or cheap relative to bonds. Corporate earnings trends, credit quality indicators, and economic signals embedded in SEC filings all feed into the macroeconomic assessment that informs allocation decisions.</p>

<p>Brefyr provides the fundamental financial data from SEC filings that investors and advisors use to evaluate stock market conditions and make informed asset allocation decisions across the equity portion of their portfolios.</p>
`,
};
