import type { GlossaryTerm } from "../types";

export const termRule144: GlossaryTerm = {
  slug: "rule-144",
  term: "Rule 144 (Restricted Securities)",
  title: "Rule 144 — How Insiders and Holders of Restricted Stock Can Sell Their Shares",
  shortDefinition:
    "Rule 144 is an SEC regulation providing a safe harbor for the public resale of restricted securities (shares acquired in private placements) and control securities (shares held by company affiliates), subject to holding periods, volume limits, and filing requirements.",
  metaDescription:
    "What is SEC Rule 144? How insiders sell restricted stock, the holding period and volume requirements, Form 144 filings, and what Rule 144 sales signal to investors.",
  wordCount: 900,
  category: "Regulatory & Compliance",
  tags: ["rule-144", "restricted-stock", "insider-selling", "sec-regulation", "affiliate"],
  relatedSlugs: ["rule-144a", "insider-trading", "section-16", "form-4", "rsu"],
  relatedTerms: ["rule-144a", "insider-trading", "section-16", "form-4", "rsu"],
  faq: [
    {
      question: "What is the difference between restricted securities and control securities?",
      answer:
        "Restricted securities are shares acquired in unregistered, private transactions — such as private placements, employee stock compensation, or Regulation D offerings — that have not been registered for public sale. Control securities are any shares held by an affiliate of the company (directors, officers, and significant shareholders who can influence corporate decisions), regardless of how they were acquired. An affiliate who bought shares on the open market holds control securities. Rule 144 applies to both categories, but the specific requirements differ slightly.",
    },
    {
      question: "How long must I hold restricted shares before I can sell under Rule 144?",
      answer:
        "For reporting companies (those that file 10-K and 10-Q with the SEC), the holding period is six months from the date of acquisition. For non-reporting companies, the holding period is one year. After the holding period, restricted shares held by non-affiliates of a reporting company can be sold without further restrictions. Affiliates must continue to comply with volume limits, manner of sale requirements, and Form 144 filing requirements even after the holding period.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Rule 144, adopted by the SEC under the Securities Act of 1933, provides a safe harbor that allows holders of restricted and control securities to sell those securities to the public without a full registration statement. Without Rule 144, insiders and private placement investors would have no practical way to liquidate their holdings — every sale would require the expensive and time-consuming process of filing a registration statement with the SEC. Rule 144 creates specific conditions under which these sales can occur, balancing the holders' need for liquidity with investor protection.</p>

<h2 id="conditions">Conditions for Selling Under Rule 144</h2>

<p><strong>Holding period.</strong> Restricted securities must be held for a minimum period before they can be sold. For securities of SEC-reporting companies (those filing 10-K, 10-Q), the holding period is six months. For non-reporting companies, it is one year. The holding period begins when the securities are fully paid for and the risk of investment passes to the holder.</p>

<p><strong>Current public information.</strong> The company must be current in its SEC filings — it must have filed all required periodic reports (10-K, 10-Q) for the preceding 12 months. This ensures that the market has access to current financial information when evaluating the securities being sold. If a company falls behind on its SEC filings, Rule 144 sales are suspended until the company catches up.</p>

<p><strong>Volume limitations (affiliates only).</strong> Affiliates are limited in the number of shares they can sell during any three-month period. The limit is the greater of: (a) 1% of the total outstanding shares of the same class, or (b) the average weekly trading volume during the four calendar weeks preceding the Form 144 filing. This prevents a large insider sale from overwhelming the market.</p>

<p><strong>Ordinary brokerage transactions (affiliates only).</strong> Affiliate sales must be handled as routine trading transactions — the seller cannot solicit orders or make any special selling effort. The broker may not receive more than a normal commission.</p>

<p><strong>Form 144 filing (affiliates only).</strong> If the amount to be sold exceeds 5,000 shares or $50,000 in value during any three-month period, the affiliate must file a Form 144 with the SEC (and with the principal stock exchange) concurrently with placing the sell order. Form 144 is a notice of proposed sale — it does not require SEC approval and becomes immediately effective.</p>

<h2 id="non-affiliates">Simplified Rules for Non-Affiliates</h2>

<p>Non-affiliates (holders of restricted securities who are not company insiders) have a much simpler path. After holding restricted securities of a reporting company for six months, they can sell freely, subject only to the current public information requirement. After one year, non-affiliates can sell without any restrictions at all — no volume limits, no Form 144, no manner-of-sale requirements. This two-tier system reflects the fact that non-affiliates do not have access to inside information and present less risk to market integrity.</p>

<h2 id="form-144-signals">What Form 144 Filings Signal</h2>

<p>Form 144 filings are public records that alert the market to planned insider sales. While a Form 144 filing does not necessarily mean the sale will be completed (the affiliate has 90 days to execute), it signals the insider's intention to sell. Investors often monitor Form 144 filings alongside Form 4 filings (which report completed transactions) to build a comprehensive picture of insider selling activity.</p>

<p>Heavy Form 144 filings by multiple insiders at the same company may indicate a bearish sentiment among those closest to the business. Conversely, the absence of Form 144 filings during a period when insiders are eligible to sell may signal that insiders believe the stock is undervalued and prefer to hold.</p>

<h2 id="lockup-expiration">Lock-Up Expirations and Rule 144</h2>

<p>After an IPO, insiders typically agree to a lock-up period (usually 180 days) during which they will not sell shares. When the lock-up expires, Rule 144 governs how insiders can sell. Lock-up expiration dates often coincide with significant trading volume and price pressure as insiders begin selling for the first time. Investors should monitor both the lock-up expiration date (disclosed in the S-1) and subsequent Form 144 filings.</p>

<h2 id="sec-filings">Rule 144 in SEC Filings</h2>

<ul>
<li><strong>Form 144:</strong> Notice of proposed sale filed by affiliates, disclosing the number of shares, the relationship to the company, and the proposed sale date.</li>
<li><strong>Form 4:</strong> Reports completed sales by insiders, including sales made under Rule 144.</li>
<li><strong>S-1 (IPO Prospectus):</strong> Describes shares eligible for future sale under Rule 144 and the lock-up provisions.</li>
<li><strong>10-K:</strong> Notes to financial statements may reference restricted shares outstanding and their vesting or eligibility schedule.</li>
</ul>

<p>Brefyr tracks Form 144 filings alongside Form 4 insider transaction reports, providing investors with a complete view of insider selling plans and completed transactions across 7,600+ SEC-reporting companies.</p>
`,
};
