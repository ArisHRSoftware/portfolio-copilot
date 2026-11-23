import type { GlossaryTerm } from "../types";

export const termMutualFund: GlossaryTerm = {
  slug: "mutual-fund",
  term: "Mutual Fund",
  title: "Mutual Fund — Pooled Investment Vehicles Managed by Professional Portfolio Managers",
  shortDefinition: "A mutual fund is an investment vehicle that pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities, managed by a professional portfolio manager and priced once daily at the fund's net asset value.",
  metaDescription: "What is a mutual fund? How mutual funds work, types of funds, fees and expenses, the difference between active and index funds, and what investors should know.",
  wordCount: 850, category: "Investment Strategy", tags: ["mutual-fund", "investment-vehicle", "active-management", "diversification", "nav"],
  relatedSlugs: ["index-fund", "etf", "hedge-fund", "asset-allocation", "portfolio-diversification"], relatedTerms: ["index-fund", "etf", "hedge-fund", "asset-allocation", "portfolio-diversification"],
  faq: [{ question: "What fees do mutual funds charge?", answer: "Mutual fund fees include: (1) Expense ratio — the annual management fee, ranging from 0.03% for index funds to 1.5%+ for actively managed funds. (2) Front-end load — a sales charge (up to 5.75%) deducted from your initial investment. (3) Back-end load — a sales charge when you sell shares, typically declining over time. (4) 12b-1 fees — marketing and distribution fees included in the expense ratio. No-load funds (no sales charges) have become the industry standard for direct-sold funds. Always check the prospectus for the total expense ratio and any load fees before investing." },
  { question: "How are mutual fund gains taxed?", answer: "Mutual funds distribute capital gains and income to shareholders annually. Even if you do not sell your shares, you owe taxes on these distributions: short-term capital gains (taxed as ordinary income), long-term capital gains (taxed at lower capital gains rates), and dividends (qualified dividends at capital gains rates, non-qualified at ordinary income rates). This is a key disadvantage of mutual funds relative to ETFs — you can owe taxes on gains you never realized because other shareholders' redemptions forced the fund to sell appreciated securities." }],
  lastUpdated: "2026-11-18",
  body: `
<p>A mutual fund is a professionally managed investment vehicle that pools money from multiple investors to invest in a diversified portfolio of securities. Each investor owns shares proportional to their investment, and the value of those shares — the net asset value (NAV) — is calculated once daily at market close. Mutual funds are the most established collective investment vehicle, with over $23 trillion in U.S. assets. They provide individual investors with access to diversified, professionally managed portfolios that would be impractical to replicate with individual security purchases.</p>

<h2 id="how-they-work">How Mutual Funds Work</h2>

<p><strong>Pooling.</strong> Investors purchase shares in the fund, and the fund uses the pooled capital to buy a portfolio of securities according to its investment objective (growth, value, income, balanced, sector-specific, etc.).</p>

<p><strong>Professional management.</strong> A portfolio manager (or team) makes investment decisions — selecting securities, determining position sizes, and deciding when to buy and sell. The manager's objective is to achieve the fund's stated goal, whether that is beating a benchmark index, generating income, or preserving capital.</p>

<p><strong>Daily pricing.</strong> Mutual fund shares are bought and sold at the fund's net asset value (NAV), calculated once daily after the market closes. NAV equals the total value of the fund's assets minus liabilities, divided by the number of shares outstanding. All buy and sell orders placed during the day execute at the closing NAV.</p>

<p><strong>Distributions.</strong> Mutual funds distribute income (dividends, interest) and realized capital gains to shareholders, typically annually or quarterly. These distributions are taxable to shareholders even if reinvested — a structural tax disadvantage compared to ETFs.</p>

<h2 id="types">Types of Mutual Funds</h2>

<p><strong>Equity funds.</strong> Invest in stocks. Subcategories include large-cap, mid-cap, small-cap, growth, value, international, sector, and total market.</p>

<p><strong>Bond funds.</strong> Invest in fixed-income securities. Subcategories include government, corporate, municipal, high-yield, inflation-protected, and international bonds.</p>

<p><strong>Balanced/allocation funds.</strong> Hold both stocks and bonds in a specified ratio (e.g., 60/40). Target-date funds adjust the allocation over time, becoming more conservative as the target retirement date approaches.</p>

<p><strong>Money market funds.</strong> Invest in short-term, high-quality debt instruments. Aim to maintain a stable $1.00 NAV and function as a cash-equivalent investment.</p>

<p><strong>Index funds.</strong> Passively track a market index rather than relying on active management. Index mutual funds offer the same strategy as index ETFs but in a mutual fund structure.</p>

<h2 id="active-vs-passive">Active vs Passive</h2>

<p>The mutual fund industry is experiencing a profound shift from active to passive management. Active funds — where a portfolio manager selects securities based on research and judgment — have been losing assets to passive index funds and ETFs for over a decade. The reason is straightforward: data consistently shows that the majority of active managers underperform their benchmark indices over long periods after accounting for fees. The SPIVA scorecard shows that over 15-year periods, approximately 85-90% of active U.S. large-cap funds underperform the S&P 500. Active management can add value in less efficient markets (small-cap, international, fixed income) but has struggled to justify its higher costs in liquid, well-covered markets.</p>

<h2 id="selecting">Selecting a Mutual Fund</h2>

<p>Key factors to evaluate: the expense ratio (lower is better for comparable strategies), historical performance relative to the benchmark (not absolute returns), portfolio manager tenure and track record, turnover ratio (high turnover generates more taxable events), and the fund's investment style consistency (style drift is a red flag). The fund's prospectus and semi-annual report contain all of this information, filed with the SEC.</p>

<p>Brefyr provides the fundamental financial data from SEC filings that both mutual fund managers and individual investors use to evaluate the 7,600+ public companies that constitute the investable universe for U.S. equity mutual funds.</p>
`,
};
