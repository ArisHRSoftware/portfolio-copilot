import type { GlossaryTerm } from "../types";

export const termDoddFrank: GlossaryTerm = {
  slug: "dodd-frank",
  term: "Dodd-Frank Act",
  title: "Dodd-Frank Act — The Post-Financial-Crisis Law That Reshaped Wall Street Regulation",
  shortDefinition:
    "The Dodd-Frank Wall Street Reform and Consumer Protection Act of 2010 is comprehensive financial reform legislation enacted after the 2008 financial crisis, introducing stricter regulation of banks, derivatives, executive compensation disclosure, and investor protections.",
  metaDescription:
    "What is the Dodd-Frank Act? Key provisions for investors including say-on-pay votes, the Volcker Rule, enhanced SEC powers, and the SEC whistleblower bounty program.",
  wordCount: 950,
  category: "Regulatory & Compliance",
  tags: ["dodd-frank", "financial-reform", "sec-regulation", "say-on-pay", "whistleblower"],
  relatedSlugs: ["sarbanes-oxley", "say-on-pay", "executive-compensation", "clawback-provision", "whistleblower-program"],
  relatedTerms: ["sarbanes-oxley", "say-on-pay", "executive-compensation", "clawback-provision", "whistleblower-program"],
  faq: [
    {
      question: "How does Dodd-Frank affect individual investors in public companies?",
      answer:
        "Dodd-Frank gave shareholders several new rights and protections: (1) Say-on-pay votes — advisory votes on executive compensation at least every three years. (2) Pay ratio disclosure — companies must report the ratio of CEO compensation to median employee compensation. (3) Clawback provisions — companies must recover erroneously paid incentive compensation following a restatement. (4) Enhanced whistleblower protections and financial bounties for reporting securities violations. (5) Conflict mineral disclosures in certain products. These provisions give investors more information and more voice in corporate governance.",
    },
    {
      question: "What is the SEC whistleblower bounty program?",
      answer:
        "Dodd-Frank created a program that pays monetary awards to individuals who provide original information leading to successful SEC enforcement actions resulting in sanctions exceeding $1 million. The award is 10-30% of the total sanctions collected. Since the program's inception, the SEC has awarded over $1 billion in whistleblower bounties. The largest single award exceeded $279 million. Whistleblowers are protected from retaliation by their employers and can submit tips anonymously through an attorney.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The Dodd-Frank Wall Street Reform and Consumer Protection Act — enacted in July 2010 and signed into law by President Obama — is the most comprehensive overhaul of U.S. financial regulation since the New Deal. Named after its congressional sponsors, Senator Chris Dodd and Representative Barney Frank, the 848-page law was a direct response to the 2008 financial crisis, addressing the regulatory failures, excessive risk-taking, and systemic fragility that allowed the near-collapse of the global financial system. While much of Dodd-Frank targets banks and systemic risk, several provisions significantly affect public company investors.</p>

<h2 id="key-provisions-for-investors">Key Provisions for Investors</h2>

<p><strong>Say-on-pay (Section 951).</strong> Dodd-Frank requires public companies to hold advisory shareholder votes on executive compensation at least once every three years. While the vote is non-binding, failed say-on-pay votes (less than 50% support) draw significant attention from proxy advisory firms, the media, and the SEC. Companies that fail say-on-pay votes typically revise their compensation programs in response. Most companies hold the vote annually.</p>

<p><strong>Pay ratio disclosure (Section 953(b)).</strong> Companies must disclose the ratio of the CEO's total compensation to the median employee's total compensation. This "CEO pay ratio" is reported in the proxy statement. For large companies, ratios of 200:1 to 500:1 are common. The rule was intended to give shareholders context about the magnitude of executive compensation relative to the typical worker.</p>

<p><strong>Pay vs performance (Section 953(a)).</strong> Companies must disclose the relationship between executive compensation actually paid and the company's financial performance, including total shareholder return. This "pay versus performance" table, implemented by the SEC in 2022, allows investors to evaluate whether executives are being rewarded for genuine performance or simply for being in the seat.</p>

<p><strong>Clawback provisions (Section 954).</strong> Dodd-Frank requires stock exchanges to mandate that listed companies adopt policies to recover erroneously awarded incentive compensation from current and former executive officers in the event of a financial restatement. The SEC finalized the clawback rules in 2022, requiring recovery of incentive compensation received during the three-year period preceding the restatement, regardless of whether the executive was at fault. This is a no-fault, mandatory clawback that applies to all executive officers.</p>

<p><strong>SEC whistleblower program (Section 922).</strong> Created a bounty program that rewards individuals who provide original information leading to successful SEC enforcement actions exceeding $1 million. Awards range from 10-30% of the sanctions collected. The program has been remarkably successful — generating thousands of tips annually and resulting in over $1 billion in cumulative awards. It has fundamentally changed the SEC's enforcement capabilities by creating powerful financial incentives for insiders to report fraud.</p>

<h2 id="systemic-regulation">Systemic Risk Provisions</h2>

<p><strong>Financial Stability Oversight Council (FSOC).</strong> Created to identify and respond to systemic risks in the financial system. FSOC can designate non-bank financial companies as "systemically important," subjecting them to enhanced regulatory scrutiny.</p>

<p><strong>Volcker Rule (Section 619).</strong> Prohibits banks from proprietary trading (trading for their own profit rather than on behalf of clients) and limits their investments in hedge funds and private equity funds. The Volcker Rule aims to prevent taxpayer-backed banks from engaging in speculative trading that contributed to the 2008 crisis.</p>

<p><strong>Orderly Liquidation Authority.</strong> Provides a mechanism for the government to wind down failing systemically important financial institutions without a taxpayer bailout, addressing the "too big to fail" problem.</p>

<p><strong>Derivatives regulation (Title VII).</strong> Required most standardized derivatives (swaps) to be cleared through central counterparties and traded on regulated exchanges or swap execution facilities, increasing transparency in a market that had been largely opaque before the crisis.</p>

<h2 id="consumer-protection">Consumer Protection</h2>

<p>Dodd-Frank created the Consumer Financial Protection Bureau (CFPB) to protect consumers in financial transactions — mortgages, credit cards, student loans, and other consumer financial products. The CFPB has enforcement authority over banks and non-bank financial institutions and has returned billions of dollars to consumers through enforcement actions and settlements.</p>

<h2 id="sec-filings">Dodd-Frank in SEC Filings</h2>

<ul>
<li><strong>DEF 14A:</strong> Contains say-on-pay vote proposals, CEO pay ratio disclosure, pay versus performance tables, and clawback policy descriptions.</li>
<li><strong>10-K:</strong> May discuss Dodd-Frank regulatory impacts in the business description and risk factors sections, particularly for financial institutions.</li>
<li><strong>8-K:</strong> Reports say-on-pay vote results and clawback actions.</li>
<li><strong>SD (Special Disclosure):</strong> Contains conflict mineral disclosures required by Section 1502.</li>
</ul>

<p>Brefyr processes proxy statements containing Dodd-Frank-required disclosures — say-on-pay votes, pay ratios, pay versus performance tables, and clawback policies — across all SEC filers, helping investors evaluate corporate governance and executive compensation practices.</p>
`,
};
