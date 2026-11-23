import type { GlossaryTerm } from "../types";

export const termQualifiedInstitutionalBuyer: GlossaryTerm = {
  slug: "qualified-institutional-buyer",
  term: "Qualified Institutional Buyer (QIB)",
  title: "Qualified Institutional Buyer — The Institutional Investors Eligible for Rule 144A Markets",
  shortDefinition:
    "A qualified institutional buyer (QIB) is an institutional investor that owns and invests on a discretionary basis at least $100 million in securities of issuers not affiliated with the buyer, qualifying it to participate in Rule 144A private resale transactions.",
  metaDescription:
    "What is a qualified institutional buyer? The $100 million threshold, which institutions qualify, the connection to Rule 144A, and why QIBs matter for private capital markets.",
  wordCount: 800,
  category: "Regulatory & Compliance",
  tags: ["qib", "qualified-institutional-buyer", "rule-144a", "institutional-investor", "sec-regulation"],
  relatedSlugs: ["rule-144a", "accredited-investor", "regulation-d", "rule-144"],
  relatedTerms: ["rule-144a", "accredited-investor", "regulation-d", "rule-144"],
  faq: [
    {
      question: "What is the difference between a QIB and an accredited investor?",
      answer:
        "QIBs are a much more exclusive category. An accredited investor is an individual with $200,000+ income or $1 million+ net worth, or any entity with $5 million+ in assets. A QIB must be an institution with at least $100 million in securities under discretionary management ($10 million for broker-dealers). Accredited investors participate in Regulation D private placements; QIBs participate in Rule 144A resales. The QIB threshold is 20x higher than the accredited investor entity threshold, reflecting the assumption that institutions managing $100 million+ have the sophistication and resources to evaluate complex, unregistered securities without full SEC disclosure protections.",
    },
    {
      question: "How does an institution prove it is a QIB?",
      answer:
        "There is no formal SEC registration or certification for QIB status. The seller (or its broker) must have a reasonable basis to believe the buyer is a QIB. In practice, this is verified through self-certification questionnaires (the buyer represents its QIB status in writing), third-party databases that track institutional asset sizes, and review of publicly available information (13F filings, which report holdings for institutions managing $100 million+). The selling broker-dealer has liability if it sells to a non-QIB, so verification practices are taken seriously.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A qualified institutional buyer (QIB) is a category of institutional investor defined by the SEC under Rule 144A of the Securities Act of 1933. The defining characteristic is size: a QIB must own and invest on a discretionary basis at least $100 million in securities of issuers that are not affiliated with the buyer. For registered broker-dealers, the threshold is lower — $10 million. The QIB designation is the gatekeeping mechanism for Rule 144A, which allows privately placed securities to be resold exclusively to QIBs without SEC registration. This creates a parallel market for sophisticated institutional investors that operates alongside the public markets.</p>

<h2 id="who-qualifies">Who Qualifies as a QIB</h2>

<p>The following types of institutions can qualify as QIBs if they meet the $100 million investment threshold:</p>
<ul>
<li><strong>Insurance companies</strong></li>
<li><strong>Investment companies</strong> (mutual funds, ETFs, closed-end funds)</li>
<li><strong>Employee benefit plans</strong> (pension funds, 401(k) plans)</li>
<li><strong>Trust funds</strong> managed by banks or trust companies</li>
<li><strong>Business development companies</strong></li>
<li><strong>Non-profit organizations</strong> (endowments, foundations)</li>
<li><strong>Corporations, partnerships, and other entities</strong> not formed for the purpose of acquiring the securities</li>
<li><strong>Sovereign wealth funds</strong> and central banks (by SEC interpretation)</li>
<li><strong>Registered broker-dealers</strong> ($10 million threshold) acting as principal or agent</li>
<li><strong>Banks and savings institutions</strong> (must also have an audited net worth of at least $25 million)</li>
</ul>

<p>Notably absent: individuals. No matter how wealthy, an individual person cannot be a QIB. The concept is exclusively institutional. This distinguishes QIBs from accredited investors, a category that includes high-net-worth individuals.</p>

<h2 id="why-qibs-matter">Why QIBs Matter</h2>

<p><strong>Rule 144A market access.</strong> The primary significance of QIB status is eligibility to purchase securities in Rule 144A transactions. Without QIB status, an institution cannot participate in one of the largest segments of the U.S. capital markets. Hundreds of billions of dollars in bonds and equity are issued annually under Rule 144A, and the secondary market for 144A securities is active and liquid among QIBs.</p>

<p><strong>Sophisticated investor presumption.</strong> The $100 million threshold serves as a proxy for investor sophistication. The SEC's theory is that institutions managing portfolios of this size have professional investment staff, access to research and analysis, and the experience to evaluate complex securities without the protections provided by full SEC registration and disclosure. This presumption allows the 144A market to operate with less regulatory burden while still channeling securities to investors capable of protecting themselves.</p>

<p><strong>Market efficiency.</strong> The QIB framework enables efficient capital formation. Issuers can raise large amounts of capital quickly through 144A offerings — often in days rather than the weeks or months required for registered offerings. The speed and cost savings benefit both issuers and QIB investors, who gain access to investment opportunities not available in the public market.</p>

<h2 id="13f-connection">QIBs and 13F Filings</h2>

<p>There is a natural overlap between QIBs and institutions that file Form 13F with the SEC. Any institutional investment manager that exercises investment discretion over $100 million or more in Section 13(f) securities must file a quarterly 13F report disclosing its holdings. Since the 13F threshold matches the QIB threshold, most QIBs are also 13F filers, and their portfolio holdings are publicly available through SEC filings.</p>

<h2 id="global-context">Global Context</h2>

<p>The QIB concept is specific to U.S. securities law. Other jurisdictions have comparable concepts — the EU uses "qualified investors" under the Prospectus Regulation, and the UK has "qualified investors" under UK law. Cross-border offerings are frequently structured as combined Rule 144A (U.S. QIBs) and Regulation S (non-U.S. investors) placements to access both markets simultaneously.</p>

<h2 id="sec-filings">QIBs in SEC Filings</h2>

<ul>
<li><strong>Form 13F:</strong> Quarterly holdings reports filed by institutional managers with $100M+ in assets — the same population as QIBs.</li>
<li><strong>Offering memoranda:</strong> 144A offering documents identify the offering as restricted to QIBs.</li>
<li><strong>S-1/S-3:</strong> Registration statements filed when 144A securities are subsequently registered for public trading.</li>
</ul>

<p>Brefyr processes 13F filings from thousands of institutional investors, providing visibility into the holdings and trading activity of the same QIBs that drive the Rule 144A market.</p>
`,
};
