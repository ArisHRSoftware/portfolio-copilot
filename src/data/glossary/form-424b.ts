import type { GlossaryTerm } from "../types";

export const termForm424B: GlossaryTerm = {
  slug: "form-424b",
  term: "Form 424B",
  title: "Form 424B — Prospectus Supplement Explained for Investors",
  shortDefinition:
    "Form 424B is a prospectus supplement filed with the SEC when a company sells securities from an existing shelf registration, disclosing the specific terms, pricing, and underwriters of that offering.",
  metaDescription:
    "What is Form 424B? Learn how prospectus supplements work, why companies file them, and what the different 424B variants mean for investors.",
  wordCount: 2100,
  category: "SEC Filings",
  tags: ["sec-filing", "prospectus", "shelf-registration", "edgar", "offering"],
  relatedSlugs: ["s-3-filing", "s-1-filing", "dilution", "sec-edgar", "10-k-filing"],
  relatedTerms: ["s-3-filing", "s-1-filing", "dilution", "sec-edgar", "10-k-filing"],
  faq: [
    {
      question: "What is the difference between 424B2, 424B4, and 424B5?",
      answer:
        "The number after 424B indicates which paragraph of SEC Rule 424(b) the filing is made under. 424B2 is used when a prospectus supplement relates to a shelf offering and contains pricing information not in the base prospectus. 424B4 is used for prospectuses in connection with transactions under Rule 430A — typically IPOs where the final price was not set until the last moment. 424B5 is used for prospectus supplements to shelf registrations on Form S-3 when the supplement contains new information. In practice, 424B2 and 424B5 are the most common variants investors encounter for follow-on and at-the-market offerings.",
    },
    {
      question: "Does a 424B filing always mean dilution?",
      answer:
        "Not always, but usually. If the 424B relates to a primary offering of common stock, it means the company is issuing new shares and existing shareholders are being diluted. If it relates to a secondary offering (selling shareholders disposing of their existing shares), there is no dilution — but the increased supply of shares in the market can still pressure the stock price. If it relates to a debt offering, there is no immediate dilution, though convertible debt can lead to future dilution.",
    },
    {
      question: "How quickly does a 424B need to be filed after pricing?",
      answer:
        "SEC rules require the prospectus supplement to be filed within two business days of the determination of the offering price, or the date it is first used, whichever is earlier. In practice, 424B filings typically appear on EDGAR the same day or the next business day after the offering is priced. This means investors can often find the final terms of an offering before the market opens the following morning.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 424B is the SEC filing that turns a shelf registration from a theoretical possibility into real securities hitting the market. While the S-3 registration statement gives a company the option to sell securities over a multi-year period, the 424B prospectus supplement is filed each time the company actually executes an offering. For investors, this is the filing that tells you exactly how many shares are being sold, at what price, and through which underwriters — the concrete details that determine the immediate impact on your holdings.</p>

<h2 id="how-424b-works">How the 424B Works</h2>

<p>When a company files an S-3 shelf registration, it includes a base prospectus describing the general types of securities that may be offered and the general terms. This base document is intentionally broad — it might say the company "may offer common stock, preferred stock, debt securities, warrants, and units" in any combination up to a specified aggregate dollar amount.</p>

<p>The 424B prospectus supplement narrows this down to a specific transaction. It is filed under Rule 424(b) of the Securities Act and supplements the base prospectus with the final terms of a particular offering. Together, the base prospectus and the 424B supplement constitute the full prospectus delivered to investors.</p>

<h2 id="424b-variants">Understanding the 424B Variants</h2>

<p>The SEC designates different paragraphs of Rule 424(b) for different circumstances. The most commonly encountered variants are:</p>

<ul>
<li><strong>424B1</strong> — A prospectus filed under paragraph (b)(1), typically used for offerings where the terms have changed from those in the original registration statement.</li>
<li><strong>424B2</strong> — Filed when the prospectus supplement relates to a shelf offering and includes pricing information not in the base prospectus. This is one of the most common variants for secondary equity offerings and debt issuances.</li>
<li><strong>424B3</strong> — Used when the prospectus is filed to reflect facts or events that represent a fundamental change from the information in the registration statement.</li>
<li><strong>424B4</strong> — Filed in connection with offerings under Rule 430A, where the final price, underwriting discounts, or other final terms were not known at the time the registration statement became effective. Most commonly seen in IPOs.</li>
<li><strong>424B5</strong> — Filed when a prospectus supplement contains new or additional information not included in the base prospectus. This is the other most common variant for shelf takedowns and at-the-market offerings.</li>
<li><strong>424B7</strong> — Used specifically for shelf offerings by well-known seasoned issuers (WKSIs) under Rule 430B.</li>
</ul>

<p>For practical purposes, most investors only need to focus on 424B2, 424B4, and 424B5. These are the variants that accompany the equity and debt offerings that directly affect shareholder value.</p>

<h2 id="what-424b-contains">What a 424B Filing Contains</h2>

<p>A typical 424B prospectus supplement for an equity offering includes the following key information:</p>

<p><strong>Offering summary.</strong> The number of shares being offered, the public offering price per share, the underwriting discount (what the investment banks charge), and the net proceeds to the company. This is the first thing investors should read — it tells you the size and cost of the offering in a single table.</p>

<p><strong>Use of proceeds.</strong> How the company intends to use the money. As with the S-1, specific plans are more informative than vague "general corporate purposes" language.</p>

<p><strong>Dilution.</strong> A table showing the net tangible book value per share before and after the offering, and the dilution to new investors. This quantifies the immediate impact on existing shareholders.</p>

<p><strong>Plan of distribution.</strong> Details about the underwriters, the type of offering (firm commitment, best efforts, or at-the-market), any lock-up agreements, and stabilization provisions. For at-the-market offerings, this section describes the sales agent and the maximum amount that may be sold.</p>

<p><strong>Risk factors.</strong> Any additional risk factors specific to this offering that are not already covered in the company's existing SEC filings. These might include risks related to the use of proceeds, the impact of dilution, or market conditions affecting the offering.</p>

<h2 id="at-the-market-offerings">At-the-Market (ATM) Offerings and 424B Filings</h2>

<p>At-the-market offerings deserve special attention. In an ATM program, the company enters into a sales agreement with a broker-dealer to sell shares gradually into the open market over time. The initial 424B for an ATM program specifies the maximum aggregate amount of shares that may be sold — but not when or at what price individual sales will occur.</p>

<p>This creates a persistent overhang. Unlike a traditional overnight offering where the dilution happens all at once, an ATM program creates ongoing uncertainty about the pace and magnitude of share sales. Investors can sometimes track ATM activity by monitoring changes in the company's share count in its quarterly 10-Q filings.</p>

<h2 id="reading-424b-investor">How Investors Should Read a 424B</h2>

<p>When a company you own files a 424B, start with the offering summary table. Calculate the dilution as a percentage of shares outstanding. A 5% dilution in a company with strong growth prospects and a clear plan for the proceeds may be acceptable. A 20% dilution in a company burning cash with no clear path to profitability is a warning signal.</p>

<p>Next, read the use of proceeds. Debt repayment and growth investments are generally positive uses. "General corporate purposes" combined with large executive compensation packages warrants skepticism.</p>

<p>Finally, check the offering price relative to the current market price. Offerings priced at a significant discount to the market suggest that institutional investors demanded a lower price to participate — a bearish indicator of market sentiment.</p>

<h2 id="where-to-find-424b">Where to Find 424B Filings</h2>

<p>All 424B filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=424B&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, prospectus supplement filings are tracked alongside other material filings and highlighted when they indicate meaningful dilution — helping investors react quickly to offerings that affect their holdings.</p>
`,
};
