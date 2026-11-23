import type { GlossaryTerm } from "../types";

export const termRule144A: GlossaryTerm = {
  slug: "rule-144a",
  term: "Rule 144A (QIB Resale)",
  title: "Rule 144A — The Safe Harbor for Reselling Private Securities to Institutional Buyers",
  shortDefinition:
    "Rule 144A is an SEC regulation that provides a safe harbor for the resale of privately placed securities to qualified institutional buyers (QIBs) without requiring SEC registration, creating a secondary market for private placements.",
  metaDescription:
    "What is Rule 144A? How private securities can be resold to institutional buyers, the QIB requirement, the impact on capital markets, and how Rule 144A differs from public offerings.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["rule-144a", "private-placement", "qib", "sec-regulation", "institutional-investor"],
  relatedSlugs: ["rule-144", "regulation-d", "qualified-institutional-buyer", "accredited-investor"],
  relatedTerms: ["rule-144", "regulation-d", "qualified-institutional-buyer", "accredited-investor"],
  faq: [
    {
      question: "What is the difference between Rule 144 and Rule 144A?",
      answer:
        "Rule 144 allows holders of restricted securities to sell to any investor (including retail) after meeting holding period and other requirements. Rule 144A allows the resale of restricted securities exclusively to qualified institutional buyers (QIBs) without any holding period — the securities can be resold immediately after the initial private placement. Rule 144 is for eventual public sales; Rule 144A is for institutional-only secondary trading. Many private placements are structured as Rule 144A offerings specifically to give initial buyers immediate liquidity through institutional resale.",
    },
    {
      question: "Why is Rule 144A important for foreign companies?",
      answer:
        "Rule 144A allows foreign companies to raise capital from U.S. institutional investors without full SEC registration, which requires reconciliation to U.S. GAAP, compliance with Sarbanes-Oxley, and ongoing SEC reporting obligations. A foreign company can sell bonds or equity to QIBs through a Rule 144A offering while maintaining its home-country reporting standards. This has made the U.S. the world's largest capital market for international issuers, particularly for debt offerings.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Rule 144A, adopted by the SEC in 1990, created a safe harbor for the resale of privately placed securities to qualified institutional buyers (QIBs) without requiring SEC registration. Before Rule 144A, privately placed securities were essentially illiquid — holders had to wait through the Rule 144 holding period before they could sell. Rule 144A transformed the private placement market by creating immediate secondary market liquidity for institutional investors. This single rule change is credited with dramatically increasing the volume and efficiency of private capital raising in the United States.</p>

<h2 id="how-144a-works">How Rule 144A Works</h2>

<p><strong>Initial placement.</strong> A company sells securities (bonds, equity, or structured products) in a private placement under Section 4(a)(2) of the Securities Act or Regulation D. The initial buyers are typically large investment banks or institutional investors.</p>

<p><strong>Resale to QIBs.</strong> The initial buyers can immediately resell the securities to other qualified institutional buyers under Rule 144A. No holding period is required. The resale does not need to be registered with the SEC. The only requirement is that the buyer is a QIB — an institution that owns and invests on a discretionary basis at least $100 million in securities of issuers not affiliated with the buyer.</p>

<p><strong>Trading platform.</strong> Rule 144A securities trade on PORTAL (Private Offerings, Resales, and Trading through Automated Linkages) and other institutional trading systems. While not as liquid as publicly traded securities, the 144A market provides meaningful secondary market liquidity for institutional holders.</p>

<h2 id="market-impact">Market Impact</h2>

<p>Rule 144A transformed U.S. capital markets. Before 1990, private placements were a niche market. Today, the Rule 144A market is enormous — hundreds of billions of dollars in debt securities alone are issued annually under 144A. The rule is particularly significant for high-yield bonds, where many new issuances are initially placed under 144A with registration rights (the issuer agrees to register the securities with the SEC within a specified period after issuance, allowing them to eventually trade publicly).</p>

<p><strong>Speed of issuance.</strong> A 144A offering can be completed in days, compared to weeks or months for a registered public offering. The company avoids SEC review, comment letters, and the extended disclosure process. This speed is valuable when market conditions are favorable and the issuer wants to lock in pricing quickly.</p>

<p><strong>Lower costs.</strong> Without SEC registration requirements, 144A offerings have lower legal and accounting costs. The issuer does not need to prepare a full registration statement or comply with ongoing SEC reporting obligations (unless it also has public securities outstanding).</p>

<p><strong>International access.</strong> Foreign companies and sovereign issuers use Rule 144A to access U.S. institutional capital without submitting to the full SEC registration and reporting regime. This has made the U.S. market accessible to thousands of international issuers who would otherwise be excluded by the cost and complexity of SEC compliance.</p>

<h2 id="144a-vs-reg-s">Rule 144A and Regulation S</h2>

<p>Many international offerings are structured as combined Rule 144A / Regulation S offerings. The 144A tranche is sold to QIBs in the United States; the Regulation S tranche is sold to non-U.S. investors outside the United States. This dual structure maximizes the issuer's access to global capital markets while complying with both U.S. and international securities regulations.</p>

<h2 id="registration-rights">Registration Rights</h2>

<p>Many 144A offerings include registration rights agreements — the issuer promises to file a registration statement with the SEC within a specified period (typically 180-365 days) to exchange the 144A securities for freely tradable registered securities. If the issuer fails to register within the specified period, the interest rate on 144A bonds increases (a "penalty coupon"), incentivizing timely registration. Once registered, the securities trade in the public market like any other registered security.</p>

<h2 id="sec-filings">Rule 144A in SEC Filings</h2>

<ul>
<li><strong>No initial SEC filing:</strong> 144A offerings do not require SEC registration — no S-1 or S-3 is filed for the initial placement.</li>
<li><strong>Offering memorandum:</strong> Instead of a prospectus, the issuer provides an offering memorandum (also called an offering circular) to prospective QIB buyers. This document is not filed with the SEC but is similar in content to a prospectus.</li>
<li><strong>S-1 or S-3:</strong> Filed if and when the issuer fulfills registration rights obligations, converting 144A securities to registered securities.</li>
<li><strong>10-K and 10-Q:</strong> If the issuer is an SEC-reporting company, the 144A securities are disclosed in the balance sheet and notes to financial statements.</li>
</ul>

<p>Brefyr monitors SEC registration filings associated with 144A offerings, alerting investors when privately placed securities become registered and begin public trading for companies they follow.</p>
`,
};
