import type { GlossaryTerm } from "../types";

export const termS1Filing: GlossaryTerm = {
  slug: "s-1-filing",
  term: "S-1 Filing",
  title: "S-1 Filing — The IPO Registration Statement Explained for Investors",
  shortDefinition:
    "An S-1 is the registration statement a company files with the SEC before conducting an initial public offering (IPO), disclosing its financials, business model, risks, and use of proceeds.",
  metaDescription:
    "What is an S-1 filing? Learn how the SEC's IPO registration statement works, what it contains, and how investors use it to evaluate new public companies.",
  wordCount: 2400,
  category: "SEC Filings",
  tags: ["sec-filing", "ipo", "registration-statement", "edgar", "equity-offering"],
  relatedSlugs: ["10-k-filing", "s-3-filing", "form-424b", "sec-edgar", "dilution"],
  relatedTerms: ["10-k-filing", "s-3-filing", "form-424b", "sec-edgar", "dilution", "form-8a"],
  faq: [
    {
      question: "How long does it take for the SEC to review an S-1?",
      answer:
        "The SEC typically provides its first round of comments within 30 days of an S-1 filing. After that, the company and its lawyers respond to comments and file amendments (S-1/A). The full process — from initial filing to the SEC declaring the registration effective — usually takes two to four months, though complex offerings can take longer. Companies cannot sell shares until the SEC declares the S-1 effective.",
    },
    {
      question: "Can individual investors read an S-1 before an IPO?",
      answer:
        "Yes. Every S-1 is publicly available on the SEC's EDGAR database as soon as it is filed. This means individual investors can read the same document that institutional investors receive during the roadshow. Studying the S-1 before an IPO prices is one of the best ways to decide whether the offering is worth participating in — or worth avoiding.",
    },
    {
      question: "What is the difference between an S-1 and a prospectus?",
      answer:
        "The S-1 is the full registration statement, which includes the prospectus plus additional exhibits, undertakings, and financial schedules. The prospectus is Part I of the S-1 — the investor-facing document that describes the offering. When people talk about reading the IPO prospectus, they are reading the front section of the S-1. The back section (Part II) contains supplemental information like legal expenses and recent sales of unregistered securities.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The S-1 registration statement is the document that transforms a private company into a public one. Filed with the Securities and Exchange Commission under the Securities Act of 1933, the S-1 is required before any company can offer its shares to the general public for the first time. It is the single most important document in the IPO process — a comprehensive disclosure of everything a potential investor needs to know before deciding whether to buy shares at the offering price.</p>

<p>Unlike periodic filings such as the 10-K or 10-Q, which report on past performance, the S-1 is forward-looking. It introduces a company that most public market investors have never analyzed before. There are no prior public earnings calls to reference, no analyst estimates to compare against, and no trading history to study. The S-1 is the starting point for all analysis.</p>

<h2 id="what-the-s1-contains">What the S-1 Contains</h2>

<p>The S-1 is divided into two parts. Part I is the prospectus — the core document delivered to investors. Part II contains supplemental disclosures and exhibits.</p>

<h3>Prospectus Summary</h3>

<p>The opening pages provide a high-level overview of the company, its business model, and the terms of the offering. This includes the number of shares being offered, the estimated price range, and where the shares will be listed. For investors screening dozens of upcoming IPOs, the summary is the first filter — it tells you in a few pages whether the company is worth a deeper read.</p>

<h3>Risk Factors</h3>

<p>This section lists everything that could go wrong. Companies preparing to go public tend to be exhaustive here because their lawyers know that anything omitted becomes a potential liability in shareholder lawsuits. For pre-revenue or early-stage companies, the risk factors section can run 30 or more pages. Investors should read this section carefully — especially the risks specific to the company's business rather than the boilerplate language that appears in every S-1.</p>

<h3>Use of Proceeds</h3>

<p>Companies must disclose how they plan to spend the money raised in the IPO. Common uses include paying down debt, funding research and development, expanding sales and marketing, general corporate purposes, and acquisitions. Vague language like "general corporate purposes" is common but not particularly informative. Investors prefer specific plans — a company that says "we will use $50 million to build a manufacturing facility in Texas" is easier to evaluate than one that says "working capital and general purposes."</p>

<h3>Management's Discussion and Analysis (MD&A)</h3>

<p>Similar to the MD&A found in a 10-K, this section provides management's narrative explanation of the company's financial results, trends, and known uncertainties. For IPO companies, the MD&A often covers three years of financial history (or since inception for younger companies). This is where you learn about growth rates, margin trajectories, customer concentration, and seasonality.</p>

<h3>Business Description</h3>

<p>A detailed explanation of what the company does, how it makes money, its competitive advantages, its total addressable market, and its growth strategy. This section reads like a more sober version of the company's investor pitch deck — stripped of marketing language by SEC review. Companies must describe their competitive landscape honestly, which sometimes reveals weaknesses they would rather not highlight.</p>

<h3>Financial Statements</h3>

<p>The S-1 includes audited financial statements prepared in accordance with GAAP. For most IPO companies, this means two to three years of income statements, balance sheets, and cash flow statements. These financials have been reviewed by an independent auditor, and the auditor's report is included. Any going concern opinions, material weaknesses, or accounting restatements appear here.</p>

<h3>Executive Compensation and Ownership</h3>

<p>Detailed tables showing what executives and directors are paid, how much equity they own, and what will happen to their ownership stakes after the IPO. This section also discloses related-party transactions — deals between the company and its insiders. Investors use this information to assess whether management's incentives are aligned with new shareholders.</p>

<h3>Shares Eligible for Future Sale</h3>

<p>One of the most important sections for IPO investors. It discloses how many shares are subject to lock-up agreements (typically 90 to 180 days) and when insiders will be free to sell. A large number of shares coming off lock-up can create significant selling pressure and depress the stock price. Knowing the lock-up expiration date is essential for managing risk in a recently public company.</p>

<h2 id="sec-review-process">The SEC Review Process</h2>

<p>Filing an S-1 does not mean the company can immediately sell shares. The SEC's Division of Corporation Finance reviews every S-1 and issues comment letters requesting additional disclosure or clarification. The company must respond to each comment and file amended versions (S-1/A) until the SEC is satisfied. Only when the SEC declares the registration statement "effective" can the offering proceed.</p>

<p>This back-and-forth is public. Every comment letter and response is available on EDGAR, usually 20 business days after the SEC declares the S-1 effective. Reading the comment letters reveals what the SEC was concerned about — which can be just as informative as the S-1 itself.</p>

<h2 id="confidential-filing">Confidential Filing Option</h2>

<p>Since the JOBS Act of 2012, emerging growth companies (annual revenue below $1.235 billion) can submit their S-1 confidentially. This means the filing is not publicly visible until 15 days before the IPO roadshow begins. The advantage for companies is that they can begin the SEC review process without alerting competitors, customers, and employees. For investors, it means the first public S-1 may already be a substantially revised version — the initial drafts and early comment letters remain hidden.</p>

<h2 id="reading-the-s1-as-investor">How Investors Use the S-1</h2>

<p>Institutional investors — mutual funds, hedge funds, and pension funds — receive S-1 copies during the IPO roadshow and use them alongside management presentations to decide whether to participate. Individual investors can access the same document on EDGAR, though they typically cannot participate in the IPO allocation itself.</p>

<p>The most useful approach is to read the S-1 with a checklist: Is the company profitable or burning cash? How fast is revenue growing? What is the customer concentration — does one client account for 30% or more of revenue? How much debt is on the balance sheet? What is the dilution to new investors? How large is the insider lock-up? What are the most specific and unusual risk factors?</p>

<p>Comparing the S-1 to competing companies that are already public provides essential context. If a SaaS company is IPO-ing at 20 times revenue but public competitors trade at 10 times revenue, the IPO pricing may be aggressive. The S-1 gives you the numbers to make that comparison.</p>

<h2 id="s1-vs-other-registration">S-1 vs. Other Registration Statements</h2>

<p>The S-1 is the most common registration form, but it is not the only one. The <strong>S-3</strong> is a simplified registration for companies that are already public and meet certain eligibility requirements — it allows them to reference their existing SEC filings rather than repeating everything. The <strong>S-4</strong> is used for shares issued in mergers and acquisitions. The <strong>F-1</strong> is the equivalent of the S-1 for foreign private issuers listing in the United States.</p>

<p>For investors, the S-1 remains the most detailed and informative because it represents a company's first full disclosure to the public market. Every subsequent filing builds on the foundation laid in the S-1.</p>

<h2 id="where-to-find-s1">Where to Find S-1 Filings</h2>

<p>All S-1 filings are freely available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=S-1&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. Search by company name or use the full-text search to find S-1 filings across all companies. On Brefyr, upcoming and recent IPO filings are highlighted with AI-generated summaries that extract the key metrics — saving hours of reading while ensuring you catch the critical details before the stock begins trading.</p>
`,
};
