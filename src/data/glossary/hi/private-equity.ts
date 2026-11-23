import type { GlossaryTerm } from "../../types";

export const termPrivateEquityHi: GlossaryTerm = {
  slug: "private-equity",
  term: "Private Equity (प्राइवेट इक्विटी)",
  title: "Private Equity — Firms जो Companies Buy, Improve, और Sell करती हैं",
  shortDefinition:
    "Private equity alternative investment class है — firms institutional/accredited investors से capital raise करती हैं companies में controlling stakes acquire, operations improve, value grow, और 3-7 years में profit पर sell।",
  metaDescription:
    "Private equity क्या है? PE firms कैसे operate, LBO model, value creation strategies, public markets पर impact, और SEC filings में PE activity।",
  wordCount: 420,
  category: "Investment Strategy",
  tags: ["private-equity", "lbo", "buyout", "alternative-investment", "institutional-investor"],
  relatedSlugs: ["leveraged-buyout", "venture-capital", "hedge-fund", "accredited-investor", "management-buyout"],
  relatedTerms: ["leveraged-buyout", "venture-capital", "hedge-fund", "accredited-investor", "management-buyout"],
  faq: [
    { question: "PE firms पैसा कैसे बनाती हैं?", answer: "Three mechanisms: (1) Operational improvement — revenue grow, costs cut, margins improve। (2) Financial engineering — debt leverage amplify returns। (3) Multiple expansion — low multiple buy, higher sell। Management fees (1.5-2% committed capital) + carried interest (20% profits above hurdle)।" },
    { question: "Individual investors PE में invest कर सकते हैं?", answer: "Direct fund = restricted, $1-10M minimum। Alternatives: publicly traded PE firms (KKR, Blackstone, Apollo, Carlyle — stock exchanges), listed PE funds, BDCs, PE-focused ETFs, secondary market platforms। Different exposure/liquidity/fees each।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Private equity firms capital pools (funds) raise करती हैं institutional investors (pension funds, endowments, sovereign wealth) और wealthy individuals से — companies controlling interests acquire, operations/financial performance improve, 3-7 years hold पर profit sell। $5 trillion+ globally, most influential forces corporate ownership, more people employed through portfolio companies than any public corporation।</p>

<p>Indian context: India PE market growing rapidly — Warburg Pincus, KKR, Blackstone active। Indian investors PE concept familiar — US scale significantly larger। SEC filings PE activity publicly track करने का window provide।</p>

<h2>कैसे काम करती है</h2>
<p><strong>Fundraising:</strong> Limited partners (LPs) capital provide। Fund 10-year life: ~5 years invest, ~5 manage/exit। GP (PE firm) 1-5% fund capital commit alongside LPs।</p>
<p><strong>Investment:</strong> Companies acquire negotiated transactions। Most common LBO — 30-40% fund equity + 60-70% debt। Debt target balance sheet, cash flows service।</p>
<p><strong>Value creation:</strong> Revenue growth, cost reduction, operational efficiency, strategic acquisitions (buy-and-build), management upgrades, technology modernization। Enterprise value increase → premium sell।</p>
<p><strong>Exit:</strong> Trade sale (industry buyer), secondary buyout (another PE firm), IPO (re-list publicly)। Proceeds LPs distribute, GP carried interest retain。</p>

<h2>Public Markets Impact</h2>
<p>Take-private: shareholders premium receive, future value creation participation lost। IPO exits: new public companies, often significant LBO debt। S-1 filings PE value creation track record, remaining ownership stake reveal। PE firms increasingly significant minority positions public companies — operational expertise drive value without taking private।</p>

<h2>Performance</h2>
<p>Historically 2-4% above public equities (net fees) — illiquidity/complexity compensation। Enormous variation across funds/vintages। Top-quartile significantly outperform, bottom-quartile lose money। Manager selection primary determinant — due diligence PE firm itself as important as investments।</p>

<h2>Criticism</h2>
<p>Excessive leverage (bankrupt portfolio companies), workforce reductions (layoffs), asset stripping (dividends new debt fund), fee extraction (management/monitoring fees GP benefit regardless)। Defenders: genuine operational improvement, patient capital long-term, management discipline।</p>

<h2>SEC Filings</h2>
<p><strong>SC 13E-3:</strong> Going-private transactions। <strong>S-1:</strong> PE-backed IPO prospectuses — ownership, history, proceeds। <strong>10-K:</strong> PE-backed public debt companies — leverage, performance। <strong>SC 13D:</strong> 5%+ public company stakes।</p>

<p>Brefyr take-private filings, PE-backed IPOs, 13D filings monitor — PE activity visibility companies investors follow।</p>
`,
};
