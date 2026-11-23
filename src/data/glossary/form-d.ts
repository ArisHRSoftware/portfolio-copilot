import type { GlossaryTerm } from "../types";

export const termFormD: GlossaryTerm = {
  slug: "form-d",
  term: "Form D",
  title: "Form D — Regulation D Private Placement Notice Explained",
  shortDefinition:
    "Form D is an SEC filing that companies use to notify regulators of a securities offering exempt from registration under Regulation D, disclosing the amount raised, the type of investors, and basic terms of the private placement.",
  metaDescription:
    "What is SEC Form D? Learn how private placement notices work, what Regulation D exemptions mean, and how investors use Form D data.",
  wordCount: 2100,
  category: "SEC Filings",
  tags: ["sec-filing", "private-placement", "regulation-d", "edgar", "exempt-offering"],
  relatedSlugs: ["s-1-filing", "form-8a", "dilution", "sec-edgar", "accession-number"],
  relatedTerms: ["s-1-filing", "form-8a", "dilution", "sec-edgar", "accession-number"],
  faq: [
    {
      question: "What is Regulation D?",
      answer:
        "Regulation D is a set of SEC rules (Rules 504, 506(b), and 506(c)) that provide exemptions from the Securities Act's requirement to register securities before selling them. These exemptions allow companies to raise capital from investors without going through the full IPO registration process. Rule 506(b) is the most commonly used — it allows unlimited fundraising from accredited investors plus up to 35 sophisticated non-accredited investors, without general solicitation. Rule 506(c) allows general solicitation but requires all investors to be accredited investors with verified status. Rule 504 allows offerings up to $10 million.",
    },
    {
      question: "Is filing Form D mandatory?",
      answer:
        "Technically, failure to file Form D does not invalidate the Regulation D exemption — the SEC has stated that the filing is a notice, not a condition of the exemption. However, most securities lawyers strongly advise filing because it provides evidence of compliance with Regulation D and because many state securities laws (blue sky laws) require the notice filing as a condition of their own exemptions. Additionally, some institutional investors require evidence of Form D filing before participating in a Reg D offering.",
    },
    {
      question: "Can individual investors participate in Reg D offerings?",
      answer:
        "Under Rule 506(b), up to 35 non-accredited but sophisticated investors can participate alongside unlimited accredited investors. Under Rule 506(c), all investors must be accredited — meaning they meet specific income thresholds ($200,000 individual, $300,000 joint) or net worth thresholds ($1 million excluding primary residence), or hold certain professional certifications. In practice, most Reg D offerings target accredited investors only. The shares received are restricted securities that cannot be freely resold without registration or an exemption like Rule 144.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form D is the SEC's window into the private capital markets. While most SEC filings relate to public companies and publicly traded securities, Form D captures activity in the much larger private securities market — venture capital rounds, private equity investments, real estate syndications, hedge fund launches, and corporate private placements. Filed electronically on EDGAR since 2008, Form D data reveals the scale, structure, and geography of private capital formation across the U.S. economy.</p>

<h2 id="what-form-d-is">What Form D Is</h2>

<p>Form D is a notice of exempt offering filed with the SEC under Regulation D of the Securities Act of 1933. It is not a registration statement — the whole point of Regulation D is to avoid registration. Instead, Form D is a brief notification that an exempt offering is taking place, providing the SEC and state regulators with basic information about who is raising money, how much, from what types of investors, and under which Regulation D rule.</p>

<p>The filing must be made within 15 calendar days after the first sale of securities in the offering. For ongoing offerings (common in private fund structures), amendments are filed annually.</p>

<h2 id="what-form-d-contains">What Form D Contains</h2>

<p>The form is structured as a series of items that together provide a snapshot of the offering:</p>

<p><strong>Issuer information.</strong> The legal name, state of incorporation, and industry classification of the company raising capital. For private companies, this is often the first time their name appears on EDGAR — making Form D searchable public data about otherwise private entities.</p>

<p><strong>Related persons.</strong> The names and addresses of the company's executive officers and directors, as well as any promoters involved in the offering. This discloses who is behind the fundraise.</p>

<p><strong>Industry classification.</strong> The company's industry group (technology, healthcare, real estate, etc.) using the SEC's classification system. This allows researchers and regulators to analyze capital formation trends by sector.</p>

<p><strong>Federal exemption claimed.</strong> Which Regulation D rule the offering relies on — Rule 504 (offerings up to $10 million), Rule 506(b) (unlimited amount, no general solicitation, up to 35 non-accredited investors), or Rule 506(c) (unlimited amount, general solicitation permitted, all investors must be verified accredited). The choice of exemption reveals the nature of the offering and its investor base.</p>

<p><strong>Type of securities offered.</strong> Common equity, preferred equity, debt, convertible notes, limited partnership interests, or other instrument types. Venture capital rounds typically show preferred equity. Real estate syndications typically show limited partnership interests. Corporate bridge loans show debt or convertible notes.</p>

<p><strong>Offering amount.</strong> The total amount being offered and the amount already sold. For indefinite offerings (common in hedge fund and private equity structures), the offering amount may be listed as "indefinite." For fixed offerings (a startup raising a $5 million seed round), the amount provides a clear picture of the target raise.</p>

<p><strong>Number of investors.</strong> How many investors have already participated, broken down into accredited and non-accredited categories. This reveals the breadth of the investor base and whether the offering is targeting a small group of institutional investors or a broader set of individual accredited investors.</p>

<p><strong>Sales commissions and finder's fees.</strong> Whether intermediaries are being paid to place the securities, and the total amount of commissions. High placement fees can indicate that the offering is difficult to sell or that the terms are aggressive.</p>

<h2 id="reg-d-rules">Understanding the Regulation D Rules</h2>

<h3>Rule 506(b) — The Workhorse</h3>

<p>Rule 506(b) is the most commonly used Reg D exemption, accounting for the vast majority of Form D filings by dollar volume. It allows companies to raise an unlimited amount of capital from an unlimited number of accredited investors plus up to 35 non-accredited investors who are "sophisticated" (they have sufficient knowledge and experience in financial matters). The company cannot use general solicitation — no advertising, no public announcements of the offering, and no broad outreach. This is the standard private placement structure used by venture-backed startups, private equity funds, and corporate issuers.</p>

<h3>Rule 506(c) — With General Solicitation</h3>

<p>Added by the JOBS Act in 2013, Rule 506(c) allows companies to publicly advertise their offerings — through websites, social media, conferences, and other general solicitation methods. The trade-off is that all investors must be accredited, and the company must take "reasonable steps" to verify their accredited status (not just accept self-certification). Rule 506(c) has enabled the growth of online investment platforms and crowdfunding portals for accredited investors.</p>

<h3>Rule 504 — Small Offerings</h3>

<p>Rule 504 allows offerings up to $10 million in a 12-month period with fewer restrictions than Rule 506. Depending on state law compliance, securities sold under Rule 504 may not be restricted. This rule is used primarily by smaller companies and early-stage ventures that need less capital and want simpler compliance.</p>

<h2 id="private-market-data">Form D as Private Market Data</h2>

<p>For researchers, journalists, and market observers, Form D filings are the most comprehensive public dataset on private capital activity. By analyzing Form D filings, you can track venture capital trends by sector, monitor which geographies are attracting private investment, identify new fund launches from established investment managers, and spot companies raising later-stage private rounds that may be approaching an IPO.</p>

<p>Academic researchers use Form D data to study the relationship between private and public markets, the characteristics of companies that eventually go public versus those that remain private, and the role of different investor types in private capital formation.</p>

<h2 id="limitations">Limitations of Form D Data</h2>

<p>Form D has significant limitations. The filing is a notice, not a comprehensive disclosure — it contains no financial statements, no business description, and no risk factors. The offering amount reported may be an estimate or an indefinite placeholder. And because filing is technically not a condition of the Regulation D exemption, some offerings — particularly smaller ones — may not be reported at all. Investors should treat Form D as a starting point for research, not a complete picture of a private offering.</p>

<h2 id="where-to-find-form-d">Where to Find Form D Filings</h2>

<p>All Form D filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=D&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. The SEC also provides a full-text search for Form D filings and a structured data feed. On Brefyr, Form D filings are referenced in company profiles when relevant — particularly for pre-IPO companies whose private fundraising history provides context for their eventual public offering.</p>
`,
};
