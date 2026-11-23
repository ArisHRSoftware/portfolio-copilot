import type { GlossaryTerm } from "../types";

export const termForm8A: GlossaryTerm = {
  slug: "form-8a",
  term: "Form 8-A",
  title: "Form 8-A — Registration of a Class of Securities Explained",
  shortDefinition:
    "Form 8-A is an SEC filing used by companies to register a class of securities under Section 12 of the Securities Exchange Act, enabling the securities to be listed and traded on a national stock exchange.",
  metaDescription:
    "What is Form 8-A? Learn how companies register securities for exchange listing, what triggers the filing, and why investors see it.",
  wordCount: 1800,
  category: "SEC Filings",
  tags: ["sec-filing", "securities-registration", "exchange-listing", "edgar", "ipo"],
  relatedSlugs: ["s-1-filing", "form-15", "8-k-filing", "sec-edgar", "10-k-filing"],
  relatedTerms: ["s-1-filing", "form-15", "8-k-filing", "sec-edgar", "10-k-filing"],
  faq: [
    {
      question: "When is a Form 8-A filed?",
      answer:
        "A Form 8-A is typically filed in connection with an IPO, a spin-off, or the listing of a new class of securities (such as preferred stock or warrants) on a national exchange. For IPOs, the Form 8-A is usually filed shortly before the company's securities begin trading — often on the same day the S-1 registration statement is declared effective. The form itself does not trigger the start of trading; that depends on the exchange's listing approval and the effectiveness of the Securities Act registration statement.",
    },
    {
      question: "What is the difference between Securities Act registration and Exchange Act registration?",
      answer:
        "Securities Act registration (using Forms S-1, S-3, etc.) registers a specific offering of securities — it allows the company to sell a defined number of shares to the public. Exchange Act registration (using Form 8-A or Form 10) registers a class of securities for ongoing trading and reporting. A company doing an IPO typically needs both: an S-1 to register the shares being sold and a Form 8-A to register the class of common stock under the Exchange Act. After that, the Exchange Act registration triggers ongoing obligations like filing 10-Ks, 10-Qs, 8-Ks, and proxy statements.",
    },
    {
      question: "Can a company undo a Form 8-A registration?",
      answer:
        "Yes. A company can deregister a class of securities by filing a Form 15, which terminates the Exchange Act registration and suspends ongoing reporting obligations. This is sometimes called 'going dark.' Companies typically do this when they have fewer than 300 shareholders of record (or 500 if the company does not have significant assets) and want to avoid the cost and burden of SEC reporting. Deregistration through Form 15 effectively reverses what Form 8-A initiated.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 8-A is the SEC filing that formally brings a class of securities into the Exchange Act reporting system. While it is one of the shortest and most technical filings in the SEC's inventory — often just a few pages — its effect is profound. Once a Form 8-A is filed and effective, the company becomes subject to the full range of Exchange Act obligations: annual 10-K reports, quarterly 10-Q reports, current reports on Form 8-K, proxy statements, insider trading disclosures, and all the other requirements that define what it means to be a U.S. public company.</p>

<h2 id="purpose">Purpose of Form 8-A</h2>

<p>The Securities Exchange Act of 1934 requires companies to register their securities before those securities can be listed on a national stock exchange. Section 12(b) of the Exchange Act covers registration for exchange listing, and Form 8-A is the primary vehicle for accomplishing this registration. The form is intentionally streamlined — it allows the company to incorporate by reference the detailed disclosures already included in its Securities Act registration statement (such as the S-1) rather than repeating them.</p>

<p>This design reflects a practical reality: companies filing Form 8-A have almost always filed (or are simultaneously filing) a Securities Act registration statement that contains the full prospectus with business descriptions, risk factors, financial statements, and management information. Requiring the same information again on Form 8-A would be duplicative.</p>

<h2 id="when-filed">When Companies File Form 8-A</h2>

<p>Form 8-A appears in several contexts:</p>

<p><strong>Initial public offerings.</strong> The most common context. A company going public files an S-1 to register the shares being sold and a Form 8-A to register the class of common stock under the Exchange Act. The Form 8-A is typically filed just before the IPO prices and becomes effective upon filing.</p>

<p><strong>Spin-offs.</strong> When a parent company spins off a subsidiary as a separate public company, the subsidiary files a Form 8-A (often alongside a Form 10 or as part of the spin-off registration process) to register its securities for independent trading.</p>

<p><strong>New classes of securities.</strong> If an already-public company issues a new class of securities — preferred stock, warrants, rights, or depositary shares — that will be listed on an exchange, it files a Form 8-A for that class. This is distinct from registering the securities for sale (which uses the S-3 or other Securities Act form).</p>

<p><strong>Exchange transfers.</strong> When a company moves its listing from one exchange to another — say, from NASDAQ to the NYSE — it may file a new Form 8-A to register under Section 12(b) of the Exchange Act with respect to the new exchange.</p>

<h2 id="what-form8a-contains">What Form 8-A Contains</h2>

<p>The form itself is minimal. It identifies the company, the class of securities being registered, the exchange on which the securities will be listed, and any applicable information about the rights and attributes of the securities. The substantive content comes from incorporation by reference — the form points to the company's S-1, prospectus, or other filing where the detailed descriptions of the securities and the company can be found.</p>

<p>Two items are specifically covered:</p>

<p><strong>Item 1: Description of Registrant's Securities to Be Registered.</strong> The company describes the class of securities — common stock, preferred stock, warrants, etc. — including voting rights, dividend rights, liquidation preferences, conversion features, and any anti-dilution provisions. For common stock in a straightforward IPO, this description is usually brief. For preferred stock or complex instruments, it can be detailed.</p>

<p><strong>Item 2: Exhibits.</strong> The form typically includes exhibits such as the company's articles of incorporation, bylaws, and any certificates of designation that define the rights of the registered securities.</p>

<h2 id="exchange-act-obligations">Exchange Act Obligations That Follow</h2>

<p>Once the Form 8-A is effective, the company enters the full SEC reporting regime. This includes:</p>

<ul>
<li>Annual reports on Form 10-K (due 60-90 days after fiscal year-end, depending on filer category)</li>
<li>Quarterly reports on Form 10-Q (due 40-45 days after each quarter-end)</li>
<li>Current reports on Form 8-K (due within four business days of triggering events)</li>
<li>Proxy statements on Schedule 14A (before each shareholder meeting)</li>
<li>Insider ownership reports on Forms 3, 4, and 5</li>
<li>Beneficial ownership reports on Schedules 13D and 13G (for 5%+ holders)</li>
<li>Annual beneficial ownership reports on Schedule 13F (for institutional managers)</li>
</ul>

<p>These obligations continue until the company terminates its registration by filing Form 15 or the SEC revokes the registration. The compliance cost is significant — estimates range from $1 million to $5 million annually for smaller public companies — which is one reason companies sometimes choose to go dark by filing Form 15 when they have few public shareholders.</p>

<h2 id="section-12b-vs-12g">Section 12(b) vs. Section 12(g)</h2>

<p>Form 8-A registers securities under Section 12(b) — registration in connection with exchange listing. Some companies instead become reporting companies under Section 12(g), which applies when a company has total assets exceeding $10 million and a class of equity securities held by 2,000 or more persons (or 500 or more persons who are not accredited investors). Section 12(g) registration uses Form 10 rather than Form 8-A and does not require an exchange listing.</p>

<p>The practical difference for investors is minimal — both trigger the same ongoing reporting obligations. But the distinction matters for understanding how a company entered the SEC reporting system and what options it has for exiting.</p>

<h2 id="investor-relevance">What Form 8-A Means for Investors</h2>

<p>Most investors encounter Form 8-A only in connection with IPOs and new security issuances. The filing itself contains little analytical value — the important information is in the accompanying S-1 or prospectus. However, Form 8-A is worth understanding because it represents the moment a company accepts the full obligations of public company life. Everything that follows — the 10-Ks, the proxy votes, the insider disclosures — flows from this registration.</p>

<h2 id="where-to-find-form8a">Where to Find Form 8-A Filings</h2>

<p>All Form 8-A filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=8-A&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, Form 8-A filings are noted in the company's filing timeline, primarily as context for understanding when a company's public reporting obligations began and what classes of securities are registered for trading.</p>
`,
};
