import type { GlossaryTerm } from "../types";

export const termSection16: GlossaryTerm = {
  slug: "section-16",
  term: "Section 16 (Insider Reporting)",
  title: "Section 16 — The Law Requiring Corporate Insiders to Report Every Stock Transaction",
  shortDefinition:
    "Section 16 of the Securities Exchange Act of 1934 requires officers, directors, and shareholders owning more than 10% of a company's stock to report their ownership and all transactions in the company's securities to the SEC.",
  metaDescription:
    "What is Section 16? How insider reporting requirements work, Forms 3, 4, and 5, the short-swing profit rule, and why insider transaction data matters for investors.",
  wordCount: 900,
  category: "Regulatory & Compliance",
  tags: ["section-16", "insider-reporting", "form-4", "insider-trading", "sec-regulation"],
  relatedSlugs: ["form-4", "insider-trading", "short-swing-profit", "beneficial-owner", "rule-10b5"],
  relatedTerms: ["form-4", "insider-trading", "short-swing-profit", "beneficial-owner", "rule-10b5"],
  faq: [
    {
      question: "Who is considered a Section 16 insider?",
      answer:
        "Section 16 insiders include: (1) directors of the company, (2) officers designated by the board as Section 16 officers (typically the CEO, CFO, COO, general counsel, controller, and other senior executives), and (3) beneficial owners of more than 10% of any class of the company's equity securities. The company identifies its Section 16 officers in its proxy statement. The 10% threshold is calculated on the total shares of that class outstanding, not the company's total equity. All three categories must file Forms 3, 4, and 5 and are subject to the short-swing profit disgorgement rule.",
    },
    {
      question: "How quickly must insiders report their transactions?",
      answer:
        "Form 4 (changes in ownership) must be filed within two business days of the transaction. This tight deadline was shortened from 10 days by the Sarbanes-Oxley Act in 2002 to give the market faster access to insider trading information. Form 3 (initial statement of ownership) must be filed within 10 days of becoming an insider. Form 5 (annual summary) is due within 45 days after the company's fiscal year-end and covers any transactions that should have been reported on Form 4 but were exempt or inadvertently missed.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Section 16 of the Securities Exchange Act of 1934 is the bedrock of insider transaction transparency in U.S. securities markets. It requires three categories of corporate insiders — officers, directors, and 10%+ beneficial owners — to publicly disclose their ownership of the company's securities and report every change in that ownership to the SEC. These reports are public records, available on EDGAR within hours of filing, and they provide investors with real-time visibility into how the people closest to the company are trading its stock. Section 16 also imposes the short-swing profit rule, which requires insiders to disgorge any profits from paired purchases and sales within a six-month window.</p>

<h2 id="reporting-forms">The Three Reporting Forms</h2>

<p><strong>Form 3 — Initial Statement of Beneficial Ownership.</strong> Filed within 10 days of a person becoming a Section 16 insider (joining the board, being designated as an officer, or crossing the 10% ownership threshold). Form 3 reports all securities of the company beneficially owned by the insider as of the date they became an insider. This establishes the baseline for all subsequent transaction reports.</p>

<p><strong>Form 4 — Statement of Changes in Beneficial Ownership.</strong> Filed within two business days of any transaction that changes the insider's ownership position. This includes open-market purchases and sales, option exercises, restricted stock vesting, gifts, and transfers. Form 4 is the most frequently filed and most closely watched by investors, as it provides near-real-time data on insider buying and selling activity. Each Form 4 details the transaction date, security type, number of shares, price, and whether the transaction was a purchase or sale.</p>

<p><strong>Form 5 — Annual Statement of Changes in Beneficial Ownership.</strong> Filed within 45 days after the company's fiscal year-end. It covers transactions that were exempt from Form 4 reporting (such as small acquisitions under certain SEC rules) and any transactions that should have been reported on Form 4 but were inadvertently missed. Many insiders report all transactions on Form 4 and have no Form 5 to file.</p>

<h2 id="beneficial-ownership">Beneficial Ownership</h2>

<p>Section 16 uses the concept of "beneficial ownership," which extends beyond direct ownership to include shares owned by family members living in the same household, shares held by trusts for the insider's benefit, shares controlled through entities the insider controls, and shares over which the insider has voting or investment power. The beneficial ownership rules prevent insiders from hiding transactions through family members, trusts, or shell entities.</p>

<h2 id="short-swing-profit">Short-Swing Profit Rule (Section 16(b))</h2>

<p>Section 16(b) provides that any profit realized by an insider from a purchase and sale (or sale and purchase) of the company's equity securities within any six-month period must be disgorged to the company. The rule is strict liability — intent and knowledge of inside information are irrelevant. The profit calculation uses the most favorable matching of purchases and sales within the six-month window, regardless of the insider's actual intent or the order of transactions.</p>

<p>The disgorgement obligation is enforceable by the company or by any shareholder on the company's behalf through a derivative lawsuit. This creates a private enforcement mechanism that supplements SEC enforcement. Plaintiffs' attorneys actively monitor Form 4 filings to identify potential short-swing profit violations.</p>

<h2 id="investor-use">Why Insider Transaction Data Matters</h2>

<p>Academic research consistently shows that insider purchases are a bullish signal. When multiple insiders buy shares with their own money, it indicates confidence in the company's prospects — they are putting personal capital at risk. The signal from insider sales is weaker: insiders sell for many non-informational reasons (diversification, taxes, liquidity needs, estate planning). However, unusually heavy selling by multiple insiders can be a warning sign.</p>

<p>Key patterns investors monitor include cluster buying (multiple insiders purchasing within a short period), buying by the CEO or CFO (the insiders with the most comprehensive knowledge), buying after a price decline (conviction that the market overreacted), and the relationship between transaction size and the insider's total compensation.</p>

<h2 id="sec-filings">Section 16 in SEC Filings</h2>

<ul>
<li><strong>Form 3:</strong> Initial ownership report when a person becomes a Section 16 insider.</li>
<li><strong>Form 4:</strong> Transaction report within two business days of any ownership change.</li>
<li><strong>Form 5:</strong> Annual summary of exempt or previously unreported transactions.</li>
<li><strong>DEF 14A:</strong> Proxy statements identify Section 16 officers and may note any late filings.</li>
</ul>

<p>Brefyr processes Form 4 filings in near real-time for all SEC-reporting companies, providing investors with immediate alerts when insiders at companies in their portfolio buy or sell shares, complete with transaction details and historical context.</p>
`,
};
