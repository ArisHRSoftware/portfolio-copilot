import type { GlossaryTerm } from "../types";

export const termPortfolioDiversification: GlossaryTerm = {
  slug: "portfolio-diversification",
  term: "Portfolio Diversification",
  title: "Portfolio Diversification — Spreading Risk Across Multiple Investments to Protect Your Wealth",
  shortDefinition: "Portfolio diversification is the investment practice of spreading capital across multiple asset classes, sectors, geographies, and securities to reduce the impact of any single investment's poor performance on the overall portfolio, based on the principle that different investments respond differently to the same economic conditions.",
  metaDescription: "What is portfolio diversification? How spreading investments reduces risk, the right number of stocks, asset class diversification, and the limits of diversification.",
  wordCount: 850, category: "Investment Strategy", tags: ["diversification", "risk-management", "portfolio-construction", "asset-allocation", "correlation"],
  relatedSlugs: ["asset-allocation", "rebalancing", "index-fund", "etf", "value-investing"], relatedTerms: ["asset-allocation", "rebalancing", "index-fund", "etf", "value-investing"],
  faq: [{ question: "How many stocks do I need for adequate diversification?", answer: "Research suggests that 20-30 individual stocks across different sectors eliminate approximately 90% of unsystematic (company-specific) risk. Beyond 30 stocks, the incremental diversification benefit is minimal. However, this applies only to company-specific risk — market risk (the risk that the entire market declines) cannot be diversified away by adding more stocks. For most individual investors, the simplest path to full equity diversification is a total stock market index fund, which holds 3,500+ stocks. Adding international stocks further diversifies against country-specific risks." },
  { question: "Can you be over-diversified?", answer: "Yes, in a practical sense. Over-diversification (or 'diworsification') occurs when adding investments reduces portfolio quality or increases costs without meaningfully reducing risk. Holding 100+ individual stocks replicates an index fund but with higher transaction costs and tax complexity. Adding exotic alternative investments with high fees may reduce expected returns more than they reduce risk. The goal is to find the minimum number of uncorrelated investments that achieves the desired risk reduction — not to maximize the number of holdings." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Portfolio diversification is the investment world's closest thing to a free lunch. By combining investments that do not move in perfect lockstep — stocks and bonds, domestic and international, large-cap and small-cap, growth and value — investors can reduce portfolio risk without proportionally reducing expected returns. The mathematical foundation was established by Harry Markowitz in his 1952 paper on Modern Portfolio Theory, which demonstrated that portfolio risk depends not only on the risk of individual holdings but on the correlations between them. When some investments zig while others zag, the portfolio's overall volatility is smoothed.</p>

<h2 id="levels-of-diversification">Levels of Diversification</h2>

<p><strong>Within asset class.</strong> Holding multiple stocks across different sectors (technology, healthcare, financials, consumer staples, energy) reduces the impact of any single sector's downturn. If you hold only tech stocks and the tech sector declines 30%, your entire portfolio declines 30%. If tech is 20% of a diversified portfolio, the same sector decline costs you only 6%.</p>

<p><strong>Across asset classes.</strong> Combining stocks, bonds, real estate, and commodities provides diversification because these asset classes respond differently to economic conditions. Stocks perform well during economic expansion; bonds often rally during recessions (as interest rates fall). Real estate and commodities may provide inflation protection. The mix of asset classes is the primary determinant of portfolio risk and return.</p>

<p><strong>Geographic diversification.</strong> Including international stocks and bonds reduces dependence on a single country's economy, currency, and policy environment. The U.S. has dominated global stock returns in recent years, but historically there have been extended periods where international markets outperformed.</p>

<p><strong>Time diversification.</strong> Investing over time (dollar-cost averaging) rather than all at once diversifies against the risk of investing at a market peak.</p>

<h2 id="correlation">The Role of Correlation</h2>

<p>Correlation measures how two investments move relative to each other, ranging from +1 (perfect positive correlation — they always move together) to -1 (perfect negative correlation — they always move opposite). Diversification is most effective when combining assets with low or negative correlation. Stocks and bonds have historically had low or negative correlation, making them powerful diversification partners. However, correlations are not static — during severe market stress, correlations tend to increase as panicked selling hits all asset classes, reducing the diversification benefit exactly when it is needed most.</p>

<h2 id="practical-approach">A Practical Diversification Approach</h2>

<p>For most individual investors, effective diversification can be achieved with as few as three to five holdings: a U.S. total stock market index fund, an international stock index fund, a U.S. bond index fund, and optionally a REIT fund and a TIPS fund. This "lazy portfolio" approach provides exposure to thousands of individual securities across multiple asset classes and geographies at minimal cost.</p>

<p>More sophisticated investors may add small-cap value tilts, emerging market exposure, commodity funds, or alternative investments — but the core principle remains the same: spread risk across uncorrelated asset classes and avoid concentration in any single security, sector, or country.</p>

<h2 id="limits">The Limits of Diversification</h2>

<p>Diversification eliminates unsystematic (company-specific) risk but cannot eliminate systematic (market) risk. If the entire stock market declines 40% (as it did in 2008), even a perfectly diversified stock portfolio declines 40%. To reduce exposure to stock market risk, investors must hold non-stock assets (bonds, cash) — which is why asset allocation (the mix between stocks and bonds) is the most important investment decision. Additionally, diversification within a single asset class has diminishing returns beyond approximately 25-30 holdings, and over-diversification can dilute the impact of your best investment ideas.</p>

<p>Brefyr provides the fundamental data from SEC filings that investors need to evaluate individual securities and assess sector, geographic, and concentration risk across their portfolios, supporting informed diversification decisions.</p>
`,
};
