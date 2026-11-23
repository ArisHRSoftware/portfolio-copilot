import type { GlossaryTerm } from "../types";

export const termWhistleblowerProgram: GlossaryTerm = {
  slug: "whistleblower-program",
  term: "SEC Whistleblower Program",
  title: "SEC Whistleblower Program — How Tipsters Earn Millions for Reporting Securities Fraud",
  shortDefinition:
    "The SEC Whistleblower Program, created by the Dodd-Frank Act, pays financial awards of 10-30% of sanctions collected to individuals who provide original information leading to successful SEC enforcement actions exceeding $1 million.",
  metaDescription:
    "What is the SEC whistleblower program? How bounties work, award amounts, anti-retaliation protections, anonymous reporting, and why the program has transformed securities enforcement.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["whistleblower", "sec-enforcement", "dodd-frank", "securities-fraud", "bounty-program"],
  relatedSlugs: ["dodd-frank", "rule-10b5", "sarbanes-oxley", "insider-trading"],
  relatedTerms: ["dodd-frank", "rule-10b5", "sarbanes-oxley", "insider-trading"],
  faq: [
    {
      question: "How much can a whistleblower receive?",
      answer:
        "Whistleblowers receive 10-30% of monetary sanctions collected in enforcement actions where the total sanctions exceed $1 million. The SEC determines the exact percentage within this range based on factors including the significance of the information, the degree of assistance provided, the SEC's interest in deterring violations through the program, and whether the whistleblower reported through internal compliance channels first. The largest individual award exceeded $279 million. Cumulative awards since the program's inception have exceeded $1 billion.",
    },
    {
      question: "Can whistleblowers remain anonymous?",
      answer:
        "Yes. Whistleblowers can submit tips anonymously, but they must do so through an attorney. The attorney submits the tip and identifies the whistleblower to the SEC only under seal. The SEC's identity protections are robust — the whistleblower's identity is not disclosed to the company being investigated, and even in final award orders, the SEC refers to the whistleblower anonymously. This protection is critical because many whistleblowers are current or former employees of the company they are reporting.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The SEC Whistleblower Program was created by Section 922 of the Dodd-Frank Act and became operational in August 2011. It represents a fundamental shift in securities enforcement strategy: instead of relying solely on the SEC's own investigators to detect fraud, the program enlists corporate insiders, accountants, auditors, and other knowledgeable individuals by offering substantial financial rewards for reporting securities violations. The program has been transformatively successful — generating thousands of tips annually, leading to billions of dollars in enforcement sanctions, and paying over $1 billion in awards to individual whistleblowers.</p>

<h2 id="how-the-program-works">How the Program Works</h2>

<p><strong>Submitting a tip.</strong> Any individual (not a company or organization) can submit a tip to the SEC through Form TCR (Tip, Complaint, or Referral), available online at the SEC's website. Tips can be submitted anonymously through an attorney. The information must be "original" — derived from the whistleblower's independent knowledge or analysis, not from publicly available sources or prior SEC investigations.</p>

<p><strong>SEC investigation.</strong> The SEC evaluates the tip and may open a formal investigation. The whistleblower is not part of the investigation team but may be asked to provide additional information or testimony. The investigation process can take months or years, depending on the complexity of the case.</p>

<p><strong>Enforcement action.</strong> If the SEC brings a successful enforcement action resulting in monetary sanctions exceeding $1 million, the whistleblower is eligible for an award. The sanctions can include disgorgement of profits, civil penalties, and prejudgment interest. Related actions by other agencies (DOJ criminal actions, state regulators, self-regulatory organizations) may also count toward the $1 million threshold.</p>

<p><strong>Award determination.</strong> The SEC's Office of the Whistleblower determines the award amount within the statutory range of 10-30% of collected sanctions. Factors increasing the award: the significance of the information, the level of assistance provided, law enforcement interest in encouraging whistleblowing, and whether the whistleblower reported internally first. Factors decreasing the award: the whistleblower's culpability in the violation, unreasonable delays in reporting, and interference with internal compliance processes.</p>

<h2 id="anti-retaliation">Anti-Retaliation Protections</h2>

<p>Dodd-Frank provides robust anti-retaliation protections for whistleblowers. Employers may not discharge, demote, suspend, threaten, harass, or otherwise discriminate against an employee for reporting potential securities violations to the SEC. Whistleblowers who experience retaliation can bring a private lawsuit and are entitled to reinstatement, double back pay with interest, litigation costs, and attorney's fees. The retaliation protection extends to employees who report internally to their company's compliance department, not just those who report to the SEC.</p>

<h2 id="program-impact">Impact on Securities Enforcement</h2>

<p>The whistleblower program has dramatically enhanced the SEC's enforcement capabilities. Before the program, the SEC relied primarily on its own surveillance, examination program, and tips received without financial incentive. The financial bounty attracts high-quality information from people with deep knowledge of the violations — often current or former employees of the company, auditors who discovered irregularities, or industry participants who observe misconduct by competitors.</p>

<p>The program has contributed to enforcement actions involving accounting fraud, insider trading, market manipulation, bribery and corruption (FCPA violations), offering fraud, and investment adviser misconduct. Some of the SEC's largest enforcement actions in recent years originated from whistleblower tips.</p>

<h2 id="internal-reporting">Internal vs External Reporting</h2>

<p>The SEC encourages — but does not require — whistleblowers to report through their company's internal compliance channels before or simultaneously with reporting to the SEC. Reporting internally first can increase the award percentage. However, the whistleblower is not penalized for going directly to the SEC, and in some cases, internal reporting may be inadvisable (if the compliance function is compromised or the whistleblower fears retaliation).</p>

<h2 id="sec-filings">The Whistleblower Program in SEC Filings</h2>

<ul>
<li><strong>SEC Annual Report to Congress:</strong> The SEC publishes an annual report on the whistleblower program, disclosing the number of tips received, awards paid, and enforcement impact.</li>
<li><strong>SEC enforcement releases:</strong> Individual award orders are published (with the whistleblower's identity anonymized) on the SEC's website.</li>
<li><strong>10-K:</strong> Companies may disclose pending SEC investigations in the legal proceedings section, though the whistleblower's involvement is typically not specifically identified.</li>
</ul>

<p>Brefyr monitors SEC enforcement actions and legal proceeding disclosures in 10-K filings, providing investors with awareness of regulatory risks that may stem from whistleblower-initiated investigations at companies they follow.</p>
`,
};
