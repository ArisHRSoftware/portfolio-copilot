import type { GlossaryTerm } from "../types";

export const termForm3: GlossaryTerm = {
  slug: "form-3",
  term: "Form 3",
  title: "Form 3 — Initial Statement of Beneficial Ownership Explained",
  shortDefinition:
    "Form 3 is an SEC filing that company insiders — officers, directors, and 10%+ shareholders — must submit within 10 days of becoming an insider, disclosing their initial ownership of the company's securities.",
  metaDescription:
    "What is SEC Form 3? Learn how the initial insider ownership disclosure works, who must file it, and what it reveals to investors.",
  wordCount: 2000,
  category: "SEC Filings",
  tags: ["sec-filing", "insider-ownership", "beneficial-ownership", "edgar", "insider-trading"],
  relatedSlugs: ["form-4", "form-5", "insider-trading", "beneficial-owner", "sec-edgar"],
  relatedTerms: ["form-4", "form-5", "insider-trading", "beneficial-owner", "sec-edgar"],
  faq: [
    {
      question: "When must a Form 3 be filed?",
      answer:
        "A Form 3 must be filed within 10 days of the event that triggers the filing requirement — typically the date a person becomes an officer, director, or 10% beneficial owner of a company registered with the SEC. For companies conducting an IPO, all insiders must file their Form 3s on or before the date the registration statement becomes effective. Late filings are disclosed in the company's proxy statement, which means persistent tardiness is visible to shareholders and can raise governance concerns.",
    },
    {
      question: "What if an insider owns zero shares when they join the company?",
      answer:
        "They still must file a Form 3. The filing is required regardless of whether the insider currently owns any securities. A Form 3 showing zero shares is common for newly appointed directors who have not yet received their equity grants. The form serves as a baseline — establishing that the insider started with nothing — so that subsequent Form 4 filings accurately reflect all changes from that starting point.",
    },
    {
      question: "How is Form 3 different from Form 4?",
      answer:
        "Form 3 reports the initial state of an insider's holdings at the time they become an insider. Form 4 reports changes — purchases, sales, option exercises, and grants — that occur after the initial Form 3. Think of Form 3 as the opening balance and Form 4 as each subsequent transaction. Form 5 is an annual summary that catches any transactions that should have been reported on Form 4 but were not, plus certain exempt transactions.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 3 is the starting point of every insider's public ownership record. Filed with the Securities and Exchange Commission under Section 16(a) of the Securities Exchange Act of 1934, it establishes the baseline of what a company officer, director, or major shareholder owns at the moment they assume insider status. Without this initial snapshot, there would be no way to verify whether subsequent transactions — reported on Form 4 — accurately reflect the insider's trading activity.</p>

<p>For investors who track insider ownership as a signal of management confidence, Form 3 is the first piece of data in a long chain. It answers the question: what did this person own on day one?</p>

<h2 id="who-must-file">Who Must File Form 3</h2>

<p>Section 16 of the Exchange Act defines three categories of insiders who must file Form 3:</p>

<p><strong>Officers.</strong> The SEC defines "officer" broadly to include the company's president, principal financial officer, principal accounting officer, any vice president in charge of a principal business unit, and any other person who performs a policy-making function. This typically covers the C-suite — CEO, CFO, COO, CTO — along with certain senior vice presidents. The company determines who qualifies and discloses these individuals in its proxy statement.</p>

<p><strong>Directors.</strong> Every member of the board of directors is a Section 16 insider, regardless of whether they own shares or receive compensation. This includes both independent directors and non-independent directors.</p>

<p><strong>10% beneficial owners.</strong> Any person or entity that beneficially owns more than 10% of any class of the company's registered equity securities is treated as an insider for Section 16 purposes. Unlike officers and directors, 10% owners become insiders automatically when their position crosses the threshold — no appointment or election is required.</p>

<h2 id="what-form3-contains">What Form 3 Contains</h2>

<p>The form is relatively brief compared to other SEC filings, but it contains several important data points:</p>

<p><strong>Table I: Non-derivative securities.</strong> Lists the insider's direct and indirect ownership of common stock, preferred stock, and other equity securities that are not derivatives. For each holding, the form shows the number of shares or units owned, the type of ownership (direct or indirect), and, for indirect holdings, the nature of the indirect ownership (such as through a trust, family member, or LLC).</p>

<p><strong>Table II: Derivative securities.</strong> Lists stock options, warrants, convertible securities, restricted stock units, and other derivative instruments. For each derivative, the form discloses the title, the date exercisable, the exercise or conversion price, and the number of underlying shares. This table reveals the full extent of an insider's potential ownership — not just shares they already hold, but shares they have the right to acquire.</p>

<p>The distinction between Tables I and II matters. An insider with 10,000 shares of common stock (Table I) and options to purchase 500,000 additional shares (Table II) has a very different incentive structure than one with 510,000 shares outright.</p>

<h2 id="timing-and-deadlines">Timing and Deadlines</h2>

<p>Form 3 must be filed within 10 calendar days of the triggering event. For newly elected directors, this means 10 days after the board election (which typically occurs at the annual shareholder meeting). For newly hired officers, 10 days after their appointment. For 10% owners, 10 days after crossing the threshold.</p>

<p>For companies going public via an IPO, the deadline is the date the S-1 registration statement becomes effective. This creates a cluster of Form 3 filings around the IPO date, establishing the initial ownership records for all officers, directors, and major shareholders simultaneously.</p>

<p>Late Form 3 filings must be disclosed in the company's annual proxy statement (DEF 14A) under a section titled "Delinquent Section 16(a) Reports." While a single late filing is usually a minor administrative issue, a pattern of late filings can indicate sloppy corporate governance.</p>

<h2 id="zero-holdings">Form 3 with Zero Holdings</h2>

<p>It is common for newly appointed directors or officers to file a Form 3 reporting zero shares in both Tables I and II. This happens when the individual has not yet received equity compensation or purchased shares on the open market. The zero-holdings Form 3 is not meaningless — it establishes the baseline from which all future transactions will be measured. If the insider subsequently purchases shares, that transaction must appear on a Form 4 within two business days.</p>

<h2 id="investor-use">How Investors Use Form 3 Data</h2>

<p>Form 3 filings are most useful in three contexts:</p>

<p><strong>IPO analysis.</strong> When a company goes public, the cluster of Form 3 filings reveals the ownership structure of the founding team, executives, and pre-IPO investors. An investor evaluating the IPO can see how much equity the CEO holds relative to other officers, whether directors have meaningful skin in the game, and how concentrated ownership is among a few pre-IPO shareholders.</p>

<p><strong>New executive appointments.</strong> When a company announces a new CEO or CFO, the subsequent Form 3 reveals whether that executive received a significant equity grant as part of their compensation package. A new CEO who receives 500,000 stock options has strong alignment with shareholders. A new CEO who receives only a cash salary may not.</p>

<p><strong>Tracking 10% owners.</strong> When a new 10% owner surfaces via Form 3, it may indicate that a major investor has crossed a significant threshold — which could precede activist activity or an acquisition attempt. Cross-referencing the Form 3 with any Schedule 13D or 13G filing provides the full picture of the investor's position and intentions.</p>

<h2 id="form3-in-sequence">Form 3 in the Insider Filing Sequence</h2>

<p>The three Section 16 forms work together as a complete record of insider ownership over time. Form 3 is the opening snapshot. Form 4 reports each individual transaction — a purchase, sale, option exercise, or grant — within two business days of the transaction. Form 5 is an annual catch-all, filed within 45 days of the company's fiscal year-end, that covers any transactions exempt from Form 4 reporting and any transactions that should have been on Form 4 but were not.</p>

<p>Together, these three forms create a continuous, public ledger of insider activity. Investors can reconstruct exactly how an insider's position has changed from the day they became an insider to the present.</p>

<h2 id="where-to-find-form3">Where to Find Form 3 Filings</h2>

<p>All Form 3 filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=3&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, insider ownership data from Form 3 filings is integrated into company profiles alongside Form 4 and Form 5 data, providing a complete picture of insider positions from the first day of an insider's tenure through every subsequent transaction.</p>
`,
};
