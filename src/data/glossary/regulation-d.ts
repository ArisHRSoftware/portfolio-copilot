import type { GlossaryTerm } from "../types";

export const termRegulationD: GlossaryTerm = {
  slug: "regulation-d",
  term: "Regulation D (Private Placement)",
  title: "Regulation D — The Rules That Govern Private Securities Offerings",
  shortDefinition:
    "Regulation D provides safe harbor exemptions from SEC registration for private placements of securities, allowing companies to raise capital from accredited investors without the cost and complexity of a public offering.",
  metaDescription:
    "What is Regulation D? How private placements work under Rules 504, 506(b), and 506(c), accredited investor requirements, and why Reg D is the backbone of private capital markets.",
  wordCount: 900,
  category: "Regulatory & Compliance",
  tags: ["regulation-d", "private-placement", "accredited-investor", "sec-regulation", "capital-raising"],
  relatedSlugs: ["accredited-investor", "rule-144", "rule-144a", "regulation-a-plus", "securities-act-1933"],
  relatedTerms: ["accredited-investor", "rule-144", "rule-144a", "regulation-a-plus", "securities-act-1933"],
  faq: [
    {
      question: "What is the difference between Rule 506(b) and Rule 506(c)?",
      answer:
        "Rule 506(b) allows unlimited capital raising from accredited investors plus up to 35 non-accredited but sophisticated investors. However, the company cannot use general solicitation or advertising — it can only offer securities to people with whom it has a pre-existing relationship. Rule 506(c), created by the JOBS Act in 2013, allows unlimited capital raising using general solicitation and advertising (social media ads, public announcements), but all purchasers must be accredited investors and the issuer must take reasonable steps to verify their accredited status (not just self-certification). Most private placements use 506(b) for its flexibility; 506(c) is used when broad marketing is needed.",
    },
    {
      question: "Do Regulation D securities need to be registered with the SEC?",
      answer:
        "No — that is the entire point of Regulation D. It provides exemptions from the registration requirement of Section 5 of the Securities Act of 1933. However, the company must file a Form D with the SEC within 15 days after the first sale of securities, providing notice of the offering. Form D is a brief notice filing — it discloses the company name, type of offering, amount raised, exemption relied upon, and the states where securities were sold. It does not contain the detailed disclosure of a registration statement.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Regulation D is the most widely used exemption from SEC registration for private securities offerings. It provides three safe harbor rules — Rules 504, 506(b), and 506(c) — that allow companies to raise capital without filing a registration statement with the SEC. The vast majority of private capital raising in the United States — venture capital rounds, private equity investments, angel financings, and corporate private placements — is conducted under Regulation D. In 2023 alone, companies raised over $2 trillion through Regulation D offerings, dwarfing the amount raised through registered public offerings.</p>

<h2 id="three-rules">The Three Rules</h2>

<p><strong>Rule 504:</strong> Allows offerings up to $10 million in a 12-month period. Available to non-reporting companies (not already filing 10-K/10-Q with the SEC). Rule 504 does not restrict the type of investor (accredited or non-accredited), but the securities are restricted (cannot be freely resold) unless the offering is registered in a state that requires public disclosure and delivery of a disclosure document. Rule 504 is used primarily by small companies raising modest amounts.</p>

<p><strong>Rule 506(b):</strong> No dollar limit on the amount raised. Up to an unlimited number of accredited investors plus up to 35 non-accredited investors who are financially sophisticated (have knowledge and experience in financial matters to evaluate the investment). No general solicitation or advertising is permitted — the company can only approach investors with whom it has a pre-existing, substantive relationship. This is the most commonly used private placement exemption, accounting for the vast majority of Regulation D capital.</p>

<p><strong>Rule 506(c):</strong> No dollar limit. Created by the JOBS Act in 2013, it permits general solicitation and advertising — the company can publicly market the offering through any channel. The tradeoff: all purchasers must be accredited investors, and the issuer must take reasonable steps to verify their accredited status. Verification methods include reviewing tax returns, bank statements, credit reports, or obtaining written confirmation from a registered broker-dealer, attorney, or CPA.</p>

<h2 id="form-d">Form D Filing</h2>

<p>Companies conducting Regulation D offerings must file a Form D with the SEC within 15 days of the first sale of securities. Form D is a notice filing — it does not contain the detailed disclosure of a registration statement. It identifies the company, the amount of securities sold, the exemption relied upon, and the states where the offering is being conducted. Form D filings are publicly available on EDGAR and are a valuable source of information about private capital raising activity.</p>

<h2 id="preemption">Federal Preemption</h2>

<p>Rule 506 offerings are "covered securities" under the National Securities Markets Improvement Act of 1996, which preempts state registration requirements. States cannot require registration of Rule 506 offerings, though they can require notice filings and collect fees. This preemption is a major advantage of Rule 506 over Rule 504, which is subject to state blue sky laws. The federal preemption makes Rule 506 the preferred exemption for offerings in multiple states.</p>

<h2 id="restricted-securities">Restricted Securities and Resale</h2>

<p>Securities sold under Regulation D are "restricted" — they cannot be freely resold to the public. The purchaser must hold the securities until an exemption for resale is available, typically under Rule 144 (after a six-month holding period for reporting companies or one year for non-reporting companies) or under Rule 144A (immediate resale to qualified institutional buyers). This illiquidity is a key characteristic of private placements and should factor into any investment decision.</p>

<h2 id="private-placement-memorandum">Private Placement Memorandum</h2>

<p>While Regulation D does not require a specific disclosure document (except for sales to non-accredited investors under Rule 506(b)), best practice is for the company to prepare a Private Placement Memorandum (PPM) containing detailed information about the company's business, financial condition, risk factors, and the terms of the offering. The PPM serves a dual purpose: informing investors and providing the company with a defense against fraud claims by demonstrating that all material information was disclosed.</p>

<h2 id="sec-filings">Regulation D in SEC Filings</h2>

<ul>
<li><strong>Form D:</strong> Notice of exempt offering of securities, filed within 15 days of the first sale.</li>
<li><strong>Form D/A:</strong> Amendments to Form D as the offering progresses or terms change.</li>
<li><strong>10-K and S-1:</strong> Public companies that have previously raised capital through Reg D describe the restricted securities outstanding and any registration rights granted.</li>
</ul>

<p>Brefyr monitors Form D filings on EDGAR, providing insights into private capital-raising activity by companies that may later become public filers through IPOs or Regulation A+ offerings.</p>
`,
};
