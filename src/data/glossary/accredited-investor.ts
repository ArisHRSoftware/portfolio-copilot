import type { GlossaryTerm } from "../types";

export const termAccreditedInvestor: GlossaryTerm = {
  slug: "accredited-investor",
  term: "Accredited Investor",
  title: "Accredited Investor — Who Qualifies and Why It Matters for Private Investments",
  shortDefinition:
    "An accredited investor is an individual or entity that meets specific financial thresholds set by the SEC — including income, net worth, or professional credentials — qualifying them to invest in private securities offerings not registered with the SEC.",
  metaDescription:
    "What is an accredited investor? The income and net worth thresholds, recent SEC changes, why accreditation matters for private investments, and what it means for retail investors.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["accredited-investor", "private-placement", "regulation-d", "sec-regulation", "investor-qualification"],
  relatedSlugs: ["regulation-d", "qualified-institutional-buyer", "regulation-a-plus", "rule-144a"],
  relatedTerms: ["regulation-d", "qualified-institutional-buyer", "regulation-a-plus", "rule-144a"],
  faq: [
    {
      question: "What are the current accredited investor thresholds?",
      answer:
        "For individuals: (1) Annual income exceeding $200,000 ($300,000 jointly with a spouse) in each of the two most recent years, with a reasonable expectation of the same in the current year. (2) Net worth exceeding $1 million, individually or jointly with a spouse, excluding the value of the primary residence. (3) Certain professional certifications — holders of Series 7, Series 65, or Series 82 licenses qualify regardless of income or net worth. For entities: $5 million in assets (for trusts, funds, etc.) or entities in which all equity owners are accredited investors. These thresholds have not been adjusted for inflation since 1982 (income) and 2010 (net worth).",
    },
    {
      question: "Why can't everyone invest in private placements?",
      answer:
        "The accredited investor framework reflects the SEC's view that private offerings carry higher risk than public securities — there is less disclosure, no ongoing reporting requirements, limited liquidity, and no SEC review of offering materials. The theory is that investors meeting the financial or professional thresholds have the sophistication and financial cushion to absorb losses from these higher-risk investments. Critics argue the thresholds are arbitrary (wealth does not equal sophistication) and exclude ordinary investors from potentially high-return opportunities.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An accredited investor is a person or entity that meets specific financial or professional criteria established by the SEC under Regulation D of the Securities Act of 1933. The accredited investor designation serves as a gatekeeping mechanism for private securities markets — most private placements, venture capital rounds, and hedge fund investments are restricted to accredited investors. The rationale is investor protection: private offerings provide less disclosure and liquidity than public securities, so the SEC limits participation to investors presumed to have the financial sophistication and resources to evaluate the risks and absorb potential losses.</p>

<h2 id="individual-criteria">Individual Accredited Investor Criteria</h2>

<p><strong>Income test.</strong> Individual income exceeding $200,000 in each of the two most recent calendar years, with a reasonable expectation of reaching the same level in the current year. For married couples filing jointly, the threshold is $300,000. This threshold has not been adjusted since it was established in 1982 — when $200,000 had the purchasing power of roughly $650,000 in today's dollars. As a result, a much larger percentage of the population now qualifies than when the threshold was set.</p>

<p><strong>Net worth test.</strong> Individual or joint net worth exceeding $1 million, excluding the value of the primary residence. This exclusion was added by the Dodd-Frank Act in 2010 to prevent homeowners with modest savings from qualifying solely based on home equity. The net worth calculation includes all assets (investment accounts, retirement accounts, other real estate, personal property) minus all liabilities (excluding the primary residence, unless the mortgage exceeds the home's value, in which case the excess is counted as a liability).</p>

<p><strong>Professional certification test.</strong> Added by the SEC in 2020, this category allows holders of certain FINRA-issued professional licenses — Series 7 (General Securities Representative), Series 65 (Investment Adviser Representative), and Series 82 (Private Securities Offerings Representative) — to qualify as accredited investors regardless of income or net worth. The rationale is that professionals with these credentials have demonstrated financial sophistication through examination.</p>

<p><strong>Knowledgeable employees.</strong> Employees of private funds who participate in the investment activities of the fund qualify as accredited investors with respect to investments in that fund.</p>

<h2 id="entity-criteria">Entity Accredited Investor Criteria</h2>

<p><strong>Asset-based:</strong> Banks, insurance companies, registered investment companies, business development companies, and employee benefit plans with assets exceeding $5 million. Trusts with assets exceeding $5 million that were not formed specifically to acquire the securities. Charitable organizations, corporations, and partnerships with assets exceeding $5 million.</p>

<p><strong>Ownership-based:</strong> Any entity in which all equity owners are individually accredited investors.</p>

<p><strong>Investment-based:</strong> Entities owning investments (not just total assets) exceeding $5 million. Family offices with at least $5 million in assets under management and their family clients.</p>

<h2 id="verification">Verification of Accredited Status</h2>

<p>Under Rule 506(b), issuers may rely on self-certification — the investor represents in writing that they meet the criteria. Under Rule 506(c), which permits general solicitation, the issuer must take "reasonable steps" to verify accredited status. Acceptable verification methods include reviewing tax returns (income test), obtaining bank or brokerage statements (net worth test), or receiving written confirmation from a registered broker-dealer, SEC-registered investment adviser, licensed attorney, or CPA that they have verified the investor's status within the prior three months.</p>

<h2 id="debate">The Ongoing Debate</h2>

<p>The accredited investor framework is controversial. Critics argue that financial thresholds are poor proxies for sophistication — a retired school teacher with $1.1 million in savings is not necessarily more sophisticated than a financial analyst with $900,000. The lack of inflation adjustment means the thresholds capture an ever-broader population. Proponents argue that some gatekeeping is necessary to protect unsophisticated investors from the high-risk, low-transparency private markets. The SEC has periodically reviewed the thresholds but has not implemented inflation adjustments.</p>

<h2 id="sec-filings">Accredited Investors in SEC Filings</h2>

<ul>
<li><strong>Form D:</strong> Reports the number of accredited and non-accredited investors in Regulation D offerings.</li>
<li><strong>S-1:</strong> IPO prospectuses describe shares previously sold to accredited investors in private placements and their resale restrictions.</li>
<li><strong>DEF 14A:</strong> Proxy statements may reference accredited investor sales in connection with capital raising history.</li>
</ul>

<p>Brefyr monitors Form D filings and registration statements that reference prior private placements, helping investors understand the pre-IPO capital structure of companies they follow.</p>
`,
};
