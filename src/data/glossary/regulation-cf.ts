import type { GlossaryTerm } from "../types";

export const termRegulationCF: GlossaryTerm = {
  slug: "regulation-cf",
  term: "Regulation CF (Crowdfunding)",
  title: "Regulation CF — SEC Rules for Equity Crowdfunding by Small Companies",
  shortDefinition:
    "Regulation CF (Regulation Crowdfunding) is an SEC exemption that allows small companies to raise up to $5 million per year from the general public through SEC-registered crowdfunding platforms, enabling retail investors to buy equity in startups and early-stage companies.",
  metaDescription:
    "What is Regulation CF? How equity crowdfunding works under SEC rules, investor limits, platform requirements, and what investors should know before investing through crowdfunding portals.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["regulation-cf", "crowdfunding", "startup-investing", "sec-regulation", "retail-investor"],
  relatedSlugs: ["regulation-a-plus", "regulation-d", "accredited-investor", "securities-act-1933"],
  relatedTerms: ["regulation-a-plus", "regulation-d", "accredited-investor", "securities-act-1933"],
  faq: [
    {
      question: "How much can I invest in Regulation CF crowdfunding offerings?",
      answer:
        "Investment limits depend on your income and net worth. If both your annual income and net worth are less than $124,000, you can invest the greater of $2,500 or 5% of the lesser of your income or net worth in all Reg CF offerings during a 12-month period. If either your income or net worth is $124,000 or more, you can invest up to 10% of the lesser of your income or net worth, with a maximum of $124,000 across all Reg CF investments in a 12-month period. Accredited investors are not subject to these limits.",
    },
    {
      question: "Can I sell my Regulation CF shares?",
      answer:
        "Reg CF shares have limited liquidity. Securities purchased in a Reg CF offering cannot be resold for one year after purchase, except to the issuer, an accredited investor, as part of a registered offering, to a family member, or in connection with death or divorce. Even after the one-year restriction expires, there may be no active market for the shares — most Reg CF companies are not listed on any exchange. Investors should consider Reg CF investments as illiquid and be prepared to hold for years.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Regulation CF — enacted under Title III of the JOBS Act and effective since May 2016 — opened equity investing in startups and small businesses to ordinary retail investors for the first time. Before Reg CF, investing in early-stage companies was limited to accredited investors (high-net-worth individuals) and institutional investors through Regulation D private placements. Reg CF allows companies to raise up to $5 million per year from the general public through SEC-registered crowdfunding intermediaries (funding portals or broker-dealers), subject to investor protection requirements including investment limits, disclosure obligations, and mandatory use of regulated platforms.</p>

<h2 id="how-it-works">How Regulation CF Works</h2>

<p><strong>Platform requirement.</strong> All Reg CF offerings must be conducted through an SEC-registered intermediary — either a funding portal (registered with the SEC and FINRA) or a broker-dealer. The intermediary hosts the offering on its platform, provides investor education materials, facilitates the investment process, and transmits funds. Major Reg CF platforms include Wefunder, Republic, StartEngine, and others.</p>

<p><strong>Disclosure requirements.</strong> The company files Form C with the SEC, disclosing its business plan, financial condition, officers and directors, ownership structure, use of proceeds, and the terms of the offering. Companies raising more than $124,000 must include financial statements reviewed by an independent accountant; those raising more than $1,235,000 must provide audited financial statements.</p>

<p><strong>Investment limits.</strong> Non-accredited investors are subject to aggregate investment limits across all Reg CF offerings in a 12-month period, based on their income and net worth. These limits are designed to prevent unsophisticated investors from concentrating too much of their savings in high-risk startup investments.</p>

<p><strong>Cancellation rights.</strong> Investors can cancel their investment commitment up to 48 hours before the offering deadline. If the company makes a material change to the offering terms, investors are notified and must reconfirm their investment within five business days or the commitment is canceled.</p>

<h2 id="ongoing-reporting">Ongoing Reporting</h2>

<p>Companies that complete a Reg CF offering must file an annual report on Form C-AR with the SEC, disclosing their financial condition and results of operations. This provides investors with at least minimal ongoing information about their investment. Companies can terminate this reporting obligation if they have fewer than 300 shareholders of record and have filed at least one annual report, or if they become subject to Exchange Act reporting (filing 10-K/10-Q).</p>

<h2 id="risks">Risks for Investors</h2>

<p><strong>High failure rate.</strong> Early-stage companies have high failure rates — most startups fail within five years. Reg CF investments are inherently risky, and investors should expect that many of their investments may lose their entire value.</p>

<p><strong>Illiquidity.</strong> There is typically no secondary market for Reg CF securities. Investors cannot easily sell their shares and should be prepared to hold for years — potentially until the company is acquired, goes public, or fails.</p>

<p><strong>Limited information.</strong> While Reg CF requires disclosure, the information available for startup investments is far less comprehensive than for publicly traded companies. Financial statements may be unaudited, forward-looking projections are inherently unreliable, and there is no ongoing analyst coverage.</p>

<p><strong>Dilution.</strong> Startups typically raise multiple rounds of financing. Each subsequent round may dilute earlier investors' ownership percentage, particularly if the company raises at lower valuations (down rounds).</p>

<h2 id="reg-cf-vs-alternatives">Reg CF vs Regulation A+ vs Regulation D</h2>

<p>Regulation CF ($5 million cap, general public) is the smallest exemption. Regulation A+ ($75 million cap, general public, more disclosure) is the mid-tier option. Regulation D (no dollar cap, accredited investors only) is the standard private placement. Companies choose based on their capital needs, target investor base, and willingness to accept ongoing reporting obligations. Some companies start with Reg CF to build an initial shareholder base and later graduate to Reg A+ or a full IPO.</p>

<h2 id="sec-filings">Regulation CF in SEC Filings</h2>

<ul>
<li><strong>Form C:</strong> The offering statement filed with the SEC, containing the company's disclosure and offering terms.</li>
<li><strong>Form C-U:</strong> Progress updates filed to report the amount raised during the offering.</li>
<li><strong>Form C-AR:</strong> Annual report filed after the offering closes, providing ongoing financial information.</li>
<li><strong>Form C-TR:</strong> Termination of reporting obligations.</li>
</ul>

<p>Brefyr focuses on SEC filings from public companies, but investors considering Reg CF crowdfunding investments should review Form C filings on the SEC's EDGAR system and conduct thorough due diligence before committing capital to early-stage companies.</p>
`,
};
