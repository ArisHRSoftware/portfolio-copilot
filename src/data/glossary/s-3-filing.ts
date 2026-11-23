import type { GlossaryTerm } from "../types";

export const termS3Filing: GlossaryTerm = {
  slug: "s-3-filing",
  term: "S-3 Filing",
  title: "S-3 Filing — Shelf Registration Explained for Investors",
  shortDefinition:
    "An S-3 is a simplified SEC registration form that allows eligible public companies to register securities for future sale off a shelf, letting them raise capital quickly without filing a new registration each time.",
  metaDescription:
    "What is an S-3 filing? Learn how shelf registration works, who can use it, and why companies file S-3s to raise capital quickly from public markets.",
  wordCount: 2200,
  category: "SEC Filings",
  tags: ["sec-filing", "shelf-registration", "equity-offering", "edgar", "secondary-offering"],
  relatedSlugs: ["s-1-filing", "form-424b", "10-k-filing", "sec-edgar", "dilution"],
  relatedTerms: ["s-1-filing", "form-424b", "10-k-filing", "sec-edgar", "dilution"],
  faq: [
    {
      question: "How is an S-3 different from an S-1?",
      answer:
        "The S-1 is a full registration statement used primarily for IPOs and by companies that do not yet meet the eligibility requirements for the S-3. The S-3 is a short-form registration that incorporates by reference the company's existing SEC filings — its 10-Ks, 10-Qs, 8-Ks, and proxy statements. This means the S-3 itself can be much shorter because the detailed disclosures already exist in the public record. The practical effect is that an S-3 filer can bring a new offering to market in days rather than months.",
    },
    {
      question: "What is a shelf registration?",
      answer:
        "A shelf registration is a technique enabled by SEC Rule 415 that allows a company to register a large amount of securities in advance and then sell them in smaller tranches over a three-year period. The company files the S-3 once, and each time it wants to sell securities, it files a prospectus supplement (Form 424B) describing the specific terms of that sale. This avoids the cost and delay of filing a new registration for each offering.",
    },
    {
      question: "Should investors be concerned when a company files an S-3?",
      answer:
        "An S-3 filing does not necessarily mean the company will issue shares immediately. Many companies maintain an active shelf registration as a form of financial flexibility — it gives them the option to raise capital quickly if market conditions are favorable. However, when a company follows the S-3 with an actual prospectus supplement (424B), that means dilution is imminent. Investors should monitor for the 424B filing, not just the S-3 itself.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The S-3 registration statement is the tool that lets established public companies raise capital from the equity and debt markets without going through the full registration process required of an IPO. Filed with the Securities and Exchange Commission under the Securities Act of 1933, the S-3 is a short-form registration that relies heavily on information already available in the company's existing public filings. For investors, understanding the S-3 — and especially the shelf registration mechanism it enables — is essential for anticipating dilution and evaluating a company's capital strategy.</p>

<h2 id="eligibility-requirements">Who Can File an S-3</h2>

<p>Not every public company qualifies to use the S-3. The SEC imposes eligibility requirements designed to ensure that investors already have access to sufficient public information about the company. The key requirements include: the company must have been a reporting company under the Securities Exchange Act for at least 12 months, it must have filed all required reports (10-K, 10-Q, 8-K) on time during that period, and it must not have failed to pay dividends on preferred stock or defaulted on debt. For primary offerings (new shares sold by the company itself), the company must also meet a public float threshold — currently $75 million or more in common equity held by non-affiliates.</p>

<p>Companies that do not meet these requirements must use the more comprehensive S-1 form, which requires full standalone disclosure rather than incorporation by reference.</p>

<h2 id="shelf-registration">How Shelf Registration Works</h2>

<p>The defining feature of the S-3 is its use in shelf registration under SEC Rule 415. A shelf registration allows a company to register a maximum dollar amount of securities — say, $500 million — and then sell them in pieces over up to three years. Each time the company decides to sell a portion, it files a prospectus supplement (Form 424B) that specifies the amount, price, underwriters, and other terms of that particular sale.</p>

<p>This mechanism gives companies significant flexibility. They can wait for favorable market conditions — a rising stock price, strong investor demand, or low interest rates — before pulling securities off the shelf. Without a shelf registration, the company would need to file a new registration statement each time, introducing weeks or months of delay.</p>

<p>Well-known seasoned issuers (WKSIs) — companies with a public float of $700 million or more — receive additional advantages. They can file automatic shelf registrations that become effective immediately upon filing, without SEC review. This allows the largest public companies to execute offerings within hours of deciding to raise capital.</p>

<h2 id="what-s3-contains">What the S-3 Contains</h2>

<p>Because the S-3 incorporates existing filings by reference, the document itself is relatively short — often 20 to 40 pages compared to the 200-plus pages of a typical S-1. The S-3 typically includes a prospectus summary describing the types of securities that may be offered, risk factors specific to the offering (beyond those already in the 10-K), a description of the securities, the plan of distribution, and legal and tax considerations.</p>

<p>The incorporation by reference is not just a convenience — it creates a living document. When the company files a new 10-K or 8-K, those filings automatically become part of the S-3 registration statement. This means the information available to investors is always current without the company needing to amend the S-3 itself.</p>

<h2 id="types-of-offerings">Types of Offerings Under an S-3</h2>

<p>Companies use S-3 registrations for several types of capital-raising transactions:</p>

<ul>
<li><strong>Follow-on equity offerings</strong> — The company sells new shares to raise cash. This directly dilutes existing shareholders.</li>
<li><strong>At-the-market (ATM) offerings</strong> — The company sells shares gradually into the open market through a broker-dealer, rather than in a single large block. ATM programs can run for months, with the company controlling the pace and volume of sales.</li>
<li><strong>Debt offerings</strong> — The company issues bonds or notes. While not directly dilutive, debt increases leverage and affects the company's risk profile.</li>
<li><strong>Secondary offerings</strong> — Existing shareholders (often insiders or early investors) sell their shares through the registered offering. The company does not receive proceeds, but the increased supply of freely tradable shares can pressure the stock price.</li>
<li><strong>Convertible securities</strong> — Bonds or preferred shares that can be converted into common stock. These create potential future dilution.</li>
</ul>

<h2 id="dilution-impact">The Dilution Question</h2>

<p>For equity investors, the most important implication of an S-3 filing is potential dilution. When a company registers $500 million in common stock on a shelf, it is signaling that it may sell up to that amount over the next three years. The actual dilution depends on when and at what price shares are sold — information that only becomes available when the company files a 424B prospectus supplement.</p>

<p>Investors in small-cap and mid-cap stocks should be especially attentive to S-3 filings. A company with a $200 million market capitalization that files a $100 million shelf registration has the theoretical capacity to increase its share count by 50%. Even if the company never uses the full shelf, the overhang can weigh on the stock price as the market prices in the probability of dilution.</p>

<h2 id="s3-and-424b">The S-3 and 424B Connection</h2>

<p>The S-3 is the registration. The 424B is the execution. When a company actually decides to sell securities from its shelf, it files a prospectus supplement on Form 424B (most commonly 424B2 or 424B5) that contains the specific terms: how many shares, at what price, through which underwriters, and when. This is the filing that tells investors dilution is happening now — not just that it might happen someday.</p>

<p>Smart investors track both filings. The S-3 tells you the company wants the option. The 424B tells you the company is exercising it.</p>

<h2 id="reading-s3-as-investor">How Investors Should Read an S-3</h2>

<p>When a company you own files an S-3, ask these questions: What is the maximum amount registered? How does it compare to the company's current market capitalization? Does the company have an immediate need for capital — upcoming debt maturities, cash burn, or an acquisition pipeline? Is this a renewal of an expiring shelf (routine) or a new shelf at a significantly larger amount (potentially concerning)?</p>

<p>Companies in strong financial positions often maintain shelf registrations as a matter of good corporate finance practice, the same way individuals maintain an unused line of credit. The filing alone is not a sell signal. But a cash-burning company with a declining stock price filing a large shelf registration is a different story — it may signal that a dilutive offering is imminent.</p>

<h2 id="where-to-find-s3">Where to Find S-3 Filings</h2>

<p>All S-3 filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=S-3&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. Search by company name or ticker. On Brefyr, shelf registration filings are flagged alongside other material SEC filings, with AI-generated summaries that highlight the maximum offering amount and the types of securities registered — giving you the essential facts without reading the full legal document.</p>
`,
};
