import type { GlossaryTerm } from "../types";

export const termIpo: GlossaryTerm = {
  slug: "ipo",
  term: "Initial Public Offering (IPO)",
  title: "IPO — How Private Companies Become Publicly Traded Stocks",
  shortDefinition:
    "An initial public offering (IPO) is the process by which a private company offers shares of stock to the public for the first time, listing on a stock exchange and becoming a publicly traded company subject to SEC reporting requirements.",
  metaDescription:
    "What is an IPO? Learn how initial public offerings work from S-1 filing to first trade, the role of underwriters, IPO pricing, lock-up periods, and how to evaluate IPO filings.",
  wordCount: 620,
  category: "Market Structure",
  tags: ["ipo", "going-public", "s-1", "underwriting", "lock-up", "sec-filings"],
  relatedSlugs: ["direct-listing", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  relatedTerms: ["direct-listing", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  faq: [
    {
      question: "Why do IPO stocks often jump on the first day of trading?",
      answer:
        "IPOs are typically priced below the expected market value to ensure strong demand and a successful first day — this is called 'underpricing.' Underwriters set the IPO price conservatively to reward their institutional clients who are allocated shares. The gap between the IPO price and the first-day closing price is called the 'IPO pop.' Research shows the average first-day pop is approximately 15-20% historically. This money effectively goes from the company (which sold shares too cheaply) to the institutional investors who received allocations. For retail investors buying at the opening market price, the pop has already occurred and returns from that point are mixed.",
    },
    {
      question: "What is the IPO lock-up period?",
      answer:
        "The lock-up period is typically 90-180 days after the IPO during which company insiders (founders, executives, early investors, employees with stock options) are prohibited from selling their shares. When the lock-up expires, these insiders become eligible to sell, often creating significant selling pressure. Lock-up expirations are among the most predictable events in stock markets — the date is disclosed in the S-1 filing, and stocks frequently decline 2-5% in the week surrounding the lock-up expiry as the market anticipates insider selling.",
    },
    {
      question: "Where can I read an IPO filing?",
      answer:
        "The primary IPO filing is the S-1 registration statement, available on SEC EDGAR. The initial S-1 is filed confidentially by most companies and later made public. It is then amended (S-1/A) based on SEC comments, with the final version filed shortly before pricing. The S-1 contains everything: business description, financial statements, risk factors, management compensation, insider ownership, use of proceeds, and the competitive landscape. It is the single most comprehensive document that will ever exist about the company. After the IPO, the company files 10-K annual reports and 10-Q quarterly reports.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An initial public offering is a company's debut on the stock market. Before an IPO, the company is privately held — its shares are owned by founders, employees, and private investors (venture capital or private equity firms). After an IPO, anyone with a brokerage account can buy and sell shares on a public exchange. The company gains access to public capital markets and its early investors gain liquidity.</p>

<p>The IPO process is governed by the Securities Act of 1933, which requires full disclosure of material information before securities can be offered to the public. This disclosure takes the form of the S-1 registration statement — one of the most detailed and informative documents in corporate finance.</p>

<h2 id="process">The IPO Process</h2>

<ol>
<li><strong>Select underwriters.</strong> The company hires investment banks to manage the offering. The lead underwriter (the "bookrunner") structures the deal, prices the shares, and allocates them to institutional investors. Major IPO underwriters include Goldman Sachs, Morgan Stanley, JP Morgan, and others.</li>
<li><strong>File the S-1.</strong> The company files a draft registration statement with the SEC (most companies file confidentially under the JOBS Act, making it public only 15 days before the roadshow). The S-1 discloses the company's financials, business model, risk factors, management team, insider ownership, and intended use of proceeds.</li>
<li><strong>SEC review.</strong> The SEC reviews the S-1 and issues comment letters requesting clarifications, additional disclosures, or corrections. The company responds and files amended S-1/A versions until the SEC declares the registration effective. This process typically takes 2-6 months.</li>
<li><strong>Roadshow.</strong> Management presents to institutional investors over 1-2 weeks, explaining the business and investment thesis. Investors indicate interest (non-binding) at various price levels, building the "book" of demand.</li>
<li><strong>Pricing.</strong> The night before the first day of trading, the underwriter and company set the final IPO price based on investor demand. Shares are allocated primarily to institutional investors.</li>
<li><strong>First day of trading.</strong> The stock begins trading on the exchange. The opening price is determined by supply and demand — it may be significantly above the IPO price if demand is strong (the "IPO pop").</li>
</ol>

<h2 id="s1-anatomy">The S-1 Filing — What to Read</h2>

<p>The S-1 is the most important document for evaluating an IPO. Key sections:</p>

<ul>
<li><strong>Prospectus summary.</strong> A condensed overview of the business, the offering, and key financial metrics. Start here.</li>
<li><strong>Risk factors.</strong> Dozens of pages of risks — legal, operational, financial, competitive. Many are boilerplate, but company-specific risks reveal what management considers the genuine threats.</li>
<li><strong>Business.</strong> Detailed description of products, customers, competition, and growth strategy. Often 20-40 pages.</li>
<li><strong>Financial statements.</strong> Audited financial results for the prior 2-3 years, plus unaudited interim results. Revenue growth, profitability (or lack thereof), cash flow, and balance sheet composition.</li>
<li><strong>Use of proceeds.</strong> How the company intends to spend the IPO money. "General corporate purposes" is a red flag — it means they have no specific plan. Specific allocations (debt repayment, R&D investment, acquisitions) are more reassuring.</li>
<li><strong>Dilution.</strong> Shows how much the IPO price exceeds the net tangible book value per share — a measure of how much more public investors are paying relative to what insiders paid. High <a href="/glossary/dilution">dilution</a> means insiders are capturing most of the value created before the IPO.</li>
<li><strong>Principal stockholders.</strong> Who owns the company before and after the IPO. Insider ownership above 20% post-IPO generally aligns management incentives with public shareholders.</li>
</ul>

<h2 id="lock-up">The Lock-Up Period and Its Impact</h2>

<p>The lock-up period (typically 180 days) prevents insiders from selling immediately after the IPO. When the lock-up expires, the supply of sellable shares increases — sometimes dramatically. If insiders hold 70% of outstanding shares and the lock-up expires, the tradable float effectively triples. This supply shock often depresses the stock price, particularly for companies whose stock has appreciated significantly since the IPO.</p>

<p><a href="/glossary/form-4">Form 4</a> filings begin appearing shortly after the lock-up expiry, revealing which insiders are selling and how much. Tracking these filings through Brefyr provides real-time visibility into insider sentiment. If the CEO and CFO sell heavily at lock-up expiry, it may signal a lack of confidence in the stock's current valuation. If insiders hold, it signals conviction that the best growth is still ahead.</p>
`,
};
