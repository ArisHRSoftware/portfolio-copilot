import type { GlossaryTerm } from "../types";

export const termPrivateEquity: GlossaryTerm = {
  slug: "private-equity",
  term: "Private Equity",
  title: "Private Equity — Firms That Buy, Improve, and Sell Entire Companies",
  shortDefinition: "Private equity is an alternative investment class in which firms raise capital from institutional and accredited investors to acquire controlling stakes in companies — typically private businesses or public companies taken private — with the goal of improving operations, growing value, and selling at a profit within 3-7 years.",
  metaDescription: "What is private equity? How PE firms operate, the LBO model, value creation strategies, the impact on public markets, and how PE activity appears in SEC filings.",
  wordCount: 850, category: "Investment Strategy", tags: ["private-equity", "lbo", "buyout", "alternative-investment", "institutional-investor"],
  relatedSlugs: ["leveraged-buyout", "venture-capital", "hedge-fund", "accredited-investor", "management-buyout"], relatedTerms: ["leveraged-buyout", "venture-capital", "hedge-fund", "accredited-investor", "management-buyout"],
  faq: [{ question: "How do private equity firms make money?", answer: "PE firms earn returns through three mechanisms: (1) operational improvement — increasing revenue, cutting costs, and improving margins at the acquired company. (2) Financial engineering — using debt to amplify equity returns (the leveraged buyout model). (3) Multiple expansion — buying at a low valuation multiple and selling at a higher one, often by improving the business quality or timing the exit during favorable market conditions. The PE firm collects management fees (1.5-2% of committed capital annually) and carried interest (typically 20% of profits above a hurdle rate), aligning their incentives with investor returns." },
  { question: "Can individual investors invest in private equity?", answer: "Direct PE fund investment is restricted to institutional investors and accredited individuals, typically requiring minimum investments of $1-10 million. However, individual investors can gain PE exposure through publicly traded PE firms (like KKR, Blackstone, Apollo, Carlyle — which trade on stock exchanges), listed PE funds and business development companies (BDCs), PE-focused ETFs, and secondary market platforms that provide access to PE fund interests. Each approach offers different levels of PE exposure with different liquidity and fee profiles." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Private equity refers to investment firms that raise pools of capital — called funds — from institutional investors (pension funds, endowments, sovereign wealth funds) and wealthy individuals to acquire controlling interests in companies, improve their operations and financial performance, and sell them at a profit after a holding period of typically 3-7 years. The private equity industry manages over $5 trillion in assets globally and has become one of the most influential forces in corporate ownership, employing more people through its portfolio companies than any public corporation.</p>

<h2 id="how-pe-works">How Private Equity Works</h2>

<p><strong>Fundraising.</strong> PE firms raise funds from limited partners (LPs) — the institutional and individual investors who provide the capital. A typical fund has a 10-year life: approximately 5 years to invest the capital and 5 years to manage and exit the investments. The PE firm (the general partner, or GP) commits 1-5% of the fund's capital alongside its LPs.</p>

<p><strong>Investment.</strong> The fund acquires companies through negotiated transactions. The most common structure is the leveraged buyout — using a combination of fund equity (30-40% of the purchase price) and borrowed money (60-70%) to acquire the target. The debt is placed on the target company's balance sheet, and the target's cash flows service the debt.</p>

<p><strong>Value creation.</strong> During the holding period, the PE firm works with portfolio company management to implement improvements: revenue growth strategies, cost reduction programs, operational efficiency initiatives, strategic acquisitions (buy-and-build), management team upgrades, and technology modernization. The goal is to increase the company's enterprise value so it can be sold at a premium.</p>

<p><strong>Exit.</strong> The PE firm sells the company through one of three channels: a sale to a strategic acquirer (another company in the industry), a secondary buyout (sale to another PE firm), or an IPO (taking the company public). The proceeds are distributed to the LPs, with the GP retaining carried interest on profits.</p>

<h2 id="impact-on-public-markets">Impact on Public Markets</h2>

<p>PE activity directly affects public market investors in several ways. Take-private transactions remove companies from public markets — shareholders receive a premium, but lose the ability to participate in future value creation. IPO exits create new public companies, often with significant debt from the LBO. PE-owned companies that file for IPO provide disclosure in S-1 filings that reveals the PE firm's value creation track record and remaining ownership stake.</p>

<p>PE firms are also increasingly relevant as large shareholders in public companies. Some PE firms take significant minority positions in public companies and use their operational expertise to drive value creation without taking the company private.</p>

<h2 id="performance">Performance</h2>

<p>PE has historically delivered returns 2-4% above public equity markets (net of fees), compensating investors for the illiquidity and complexity of PE investments. However, performance varies enormously across funds and vintages. Top-quartile PE funds significantly outperform, while bottom-quartile funds may lose money. Manager selection is the primary determinant of PE investment outcomes, making due diligence on the PE firm itself as important as the underlying investments.</p>

<h2 id="criticism">Criticism and Debate</h2>

<p>PE faces criticism for excessive leverage (which can bankrupt portfolio companies), workforce reductions (cost-cutting through layoffs), asset stripping (extracting value through dividends funded by new debt), and fee extraction (management fees and monitoring fees that benefit the GP regardless of performance). Defenders argue that PE creates value through genuine operational improvement, provides patient capital for long-term investments, and disciplines management teams that might otherwise be complacent.</p>

<h2 id="sec-filings">Private Equity in SEC Filings</h2>

<ul>
<li><strong>SC 13E-3:</strong> Going-private transaction filings when PE firms take public companies private.</li>
<li><strong>S-1:</strong> IPO prospectuses for PE-backed companies, disclosing the PE firm's ownership, the company's history under PE ownership, and use of proceeds.</li>
<li><strong>10-K:</strong> PE-backed companies with public debt continue filing annual reports, revealing leverage levels and financial performance.</li>
<li><strong>SC 13D:</strong> Filed when PE firms acquire 5%+ stakes in public companies.</li>
</ul>

<p>Brefyr monitors take-private filings, PE-backed IPO prospectuses, and 13D filings from major PE firms, providing investors with visibility into private equity activity affecting companies they follow.</p>
`,
};
