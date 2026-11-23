import type { GlossaryTerm } from "../types";

export const termRegulationFD: GlossaryTerm = {
  slug: "regulation-fd",
  term: "Regulation FD (Fair Disclosure)",
  title: "Regulation FD — The Rule That Ended Selective Disclosure to Wall Street Insiders",
  shortDefinition:
    "Regulation FD (Fair Disclosure) is an SEC rule requiring publicly traded companies to disclose material nonpublic information to all investors simultaneously, rather than selectively sharing it with favored analysts or institutional investors.",
  metaDescription:
    "What is Regulation FD? How fair disclosure rules work, what triggers a Reg FD violation, notable enforcement cases, and how the rule changed how companies communicate with investors.",
  wordCount: 950,
  category: "Regulatory & Compliance",
  tags: ["regulation-fd", "fair-disclosure", "sec-regulation", "material-information", "insider-trading"],
  relatedSlugs: ["insider-trading", "8-k-filing", "quiet-period", "section-16", "rule-10b5"],
  relatedTerms: ["insider-trading", "8-k-filing", "quiet-period", "section-16", "rule-10b5"],
  faq: [
    {
      question: "What happens if a company accidentally discloses material information to an analyst?",
      answer:
        "If the disclosure was unintentional, Regulation FD requires the company to make prompt public disclosure — typically within 24 hours or before the next trading session opens. The company must file or furnish a Form 8-K, issue a press release, or use another method of broad, non-exclusionary public disclosure. The key factor is speed: an accidental selective disclosure can be cured by rapid public dissemination. An intentional selective disclosure that is not simultaneously made public constitutes a violation.",
    },
    {
      question: "Does Regulation FD apply to all conversations between companies and investors?",
      answer:
        "No. Reg FD applies to disclosures by senior officials (officers, directors, investor relations staff, and others who regularly communicate with market professionals) to securities market professionals (analysts, institutional investors, broker-dealers) and shareholders who may trade on the information. It does not apply to ordinary course business discussions with customers, suppliers, or the media. It also does not apply to disclosures made under a confidentiality agreement (which is how companies share information with potential acquirers during M&A due diligence).",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Regulation FD — formally titled Regulation Fair Disclosure — is an SEC rule adopted in October 2000 that fundamentally changed how public companies communicate with investors. Before Reg FD, companies routinely shared material information with select Wall Street analysts and large institutional investors before the broader market learned about it. This gave professional investors a systematic information advantage over retail investors — they could trade on earnings guidance, strategic changes, or operational updates hours or days before the public knew. Regulation FD eliminated this practice by requiring that any material disclosure to securities professionals must be simultaneously made to the entire public.</p>

<h2 id="what-reg-fd-requires">What Regulation FD Requires</h2>

<p>The rule is straightforward in concept: whenever an issuer (or a person acting on its behalf) discloses material nonpublic information to certain enumerated persons, the issuer must make simultaneous public disclosure of that same information. The enumerated persons include broker-dealers, investment advisers, institutional investment managers, and any holder of the issuer's securities who may reasonably be expected to trade on the basis of the information.</p>

<p><strong>Intentional disclosure:</strong> If a company official intentionally shares material information with an analyst or fund manager, the company must simultaneously make the same information available to the public — typically through a press release, SEC filing, or webcast.</p>

<p><strong>Unintentional disclosure:</strong> If a company official accidentally reveals material information (a slip in a private meeting, an overheard conversation, an inadvertent comment), the company must make public disclosure promptly — within 24 hours or before the opening of the next day's trading session, whichever comes first.</p>

<h2 id="what-is-material">What Counts as Material Information</h2>

<p>Regulation FD uses the same materiality standard as other securities laws: information is material if there is a substantial likelihood that a reasonable investor would consider it important in making an investment decision. Common examples of material information include earnings guidance or pre-announcements, revenue trends, significant new contracts or customer losses, management changes, merger or acquisition discussions, product approvals or failures, and regulatory actions.</p>

<p>The challenge is that materiality is not always clear-cut. Companies and their counsel must make judgment calls about whether a particular piece of information crosses the materiality threshold. When in doubt, the safer course is to treat information as material and ensure broad disclosure.</p>

<h2 id="how-companies-comply">How Companies Comply</h2>

<p><strong>Earnings webcasts.</strong> Instead of giving earnings guidance to analysts privately, companies now hold quarterly earnings calls open to all investors via webcast. The transcript and replay are made publicly available. This is the most visible impact of Reg FD on corporate communication practices.</p>

<p><strong>Investor day presentations.</strong> Public webcasts and simultaneous posting of presentation materials on the company's website and through SEC filings (Form 8-K).</p>

<p><strong>Social media.</strong> The SEC has clarified that companies can use social media platforms (Twitter, Facebook) for Reg FD-compliant disclosures, provided investors have been told which platforms the company uses and the platforms provide broad access.</p>

<p><strong>Disclosure policies.</strong> Companies maintain internal Reg FD policies that designate authorized spokespersons, define material information categories, require legal review of investor communications, and establish procedures for prompt public disclosure if an inadvertent selective disclosure occurs.</p>

<h2 id="enforcement">Enforcement and Consequences</h2>

<p>The SEC enforces Reg FD through civil proceedings — it is not a criminal statute. Penalties include cease-and-desist orders and civil monetary penalties. The SEC has brought enforcement actions against both companies and individual executives for Reg FD violations. Notable cases have involved executives who shared revenue expectations, customer wins, or negative financial trends with analysts before public disclosure.</p>

<p>The practical consequences extend beyond SEC penalties. A Reg FD violation damages a company's reputation with investors and can trigger private securities fraud lawsuits if investors who traded without the information suffered losses. Companies invest heavily in compliance training and disclosure controls specifically to prevent Reg FD violations.</p>

<h2 id="impact">Impact on Markets</h2>

<p>Research suggests Reg FD achieved its goal of leveling the informational playing field. Studies show that after Reg FD, analyst forecasts became less accurate (they lost their information advantage), trading volume around earnings announcements increased (more investors were making independent assessments), and information asymmetry between institutional and retail investors decreased. The rule is widely considered one of the SEC's most successful investor protection regulations.</p>

<h2 id="sec-filings">Regulation FD in SEC Filings</h2>

<ul>
<li><strong>Form 8-K:</strong> Companies furnish Reg FD disclosures under Item 7.01 (Regulation FD Disclosure) or Item 2.02 (Results of Operations). Note the distinction: Reg FD disclosures are "furnished" rather than "filed," which provides some liability protection.</li>
<li><strong>10-K:</strong> Companies describe their disclosure controls and procedures, which include Reg FD compliance mechanisms.</li>
<li><strong>Earnings call transcripts:</strong> Attached as exhibits to 8-K filings.</li>
</ul>

<p>Brefyr processes all 8-K filings including Reg FD disclosures, ensuring investors receive timely access to the same information that was previously shared only with institutional insiders.</p>
`,
};
