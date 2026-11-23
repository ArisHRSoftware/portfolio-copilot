import type { GlossaryTerm } from "../types";

export const termForm144: GlossaryTerm = {
  slug: "form-144",
  term: "Form 144",
  title: "Form 144 — Notice of Proposed Sale of Restricted Securities Explained",
  shortDefinition:
    "Form 144 is an SEC filing that notifies the market when a company insider or affiliate intends to sell restricted or control securities under Rule 144, specifying the amount and approximate date of the planned sale.",
  metaDescription:
    "What is SEC Form 144? Learn how insiders signal upcoming sales of restricted stock, what Rule 144 requires, and how investors can use this data.",
  wordCount: 2000,
  category: "SEC Filings",
  tags: ["sec-filing", "restricted-securities", "insider-selling", "edgar", "rule-144"],
  relatedSlugs: ["form-4", "insider-trading", "rsu", "beneficial-owner", "sec-edgar"],
  relatedTerms: ["form-4", "insider-trading", "rsu", "beneficial-owner", "sec-edgar"],
  faq: [
    {
      question: "What are restricted securities?",
      answer:
        "Restricted securities are shares that were acquired in unregistered, private transactions — such as through a private placement, an employee stock option exercise, or as compensation. These shares carry restrictions on resale to protect public investors from unregistered distributions. Before the holder can sell restricted securities in the public market, they must either register the shares with the SEC (expensive and time-consuming) or sell them under an exemption like Rule 144 (which requires meeting specific conditions including holding period, current public information, volume limits, and filing a Form 144).",
    },
    {
      question: "Does filing a Form 144 mean the insider will definitely sell?",
      answer:
        "No. A Form 144 is a notice of intent, not a commitment. The filer has up to 90 days to complete the proposed sale. If market conditions change, the insider's plans change, or for any other reason, the insider may sell fewer shares than indicated or may not sell at all. However, in practice, the majority of Form 144 filings do result in actual sales — the insider has typically already engaged a broker and planned the transaction before filing.",
    },
    {
      question: "How is Form 144 different from Form 4?",
      answer:
        "Form 144 is a forward-looking notice filed before or concurrently with the sale — it says what the insider intends to do. Form 4 is a backward-looking transaction report filed within two business days after the sale is executed — it confirms what actually happened. The two forms often appear in sequence: Form 144 signals the upcoming sale, and Form 4 confirms the sale occurred. Investors who monitor both get advance warning (Form 144) and confirmation (Form 4) of insider selling activity.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 144 is the advance notice system for insider and affiliate stock sales. Filed with the Securities and Exchange Commission under Rule 144 of the Securities Act of 1933, it tells the market that someone with restricted or control securities intends to sell. For investors who track insider activity as a signal of management sentiment, Form 144 provides the earliest possible warning that selling is coming — before the actual transaction appears on Form 4.</p>

<h2 id="rule-144-overview">Understanding Rule 144</h2>

<p>To understand Form 144, you need to understand the rule it serves. Rule 144 provides a safe harbor exemption that allows holders of restricted securities and affiliates of the issuing company to sell their shares into the public market without registering them. Without this exemption, restricted securities would be essentially illiquid — the holder would need to file a full registration statement with the SEC before selling, a process that can take months and cost hundreds of thousands of dollars in legal and accounting fees.</p>

<p>Rule 144 imposes several conditions that must be met before the sale can proceed:</p>

<ul>
<li><strong>Holding period.</strong> For securities of SEC-reporting companies, the holder must have owned and fully paid for the restricted securities for at least six months. For non-reporting companies, the holding period is one year.</li>
<li><strong>Current public information.</strong> The company must be current on its SEC filings — 10-Ks, 10-Qs, and other required reports must be up to date. This is another reason a late filing (NT 10-K or NT 10-Q) matters — it can lock up insiders' ability to sell under Rule 144.</li>
<li><strong>Volume limitations.</strong> Affiliates (officers, directors, and 10% shareholders) can sell no more than the greater of 1% of the company's outstanding shares or the average weekly trading volume over the preceding four weeks, measured in rolling three-month periods.</li>
<li><strong>Ordinary brokerage transactions.</strong> Sales must be made through routine trading transactions, not through privately negotiated deals. The broker cannot solicit orders to buy the shares.</li>
<li><strong>Filing Form 144.</strong> If the amount to be sold during any three-month period exceeds 5,000 shares or $50,000 in aggregate sale price, the seller must file a Form 144 with the SEC concurrently with the placement of the sell order.</li>
</ul>

<h2 id="what-form144-contains">What Form 144 Contains</h2>

<p>The form is relatively brief but contains actionable data points for investors:</p>

<p><strong>Name and relationship of the seller.</strong> The filer's name and their relationship to the company — officer, director, 10% shareholder, or other affiliate. This tells you who is selling.</p>

<p><strong>Name of the issuer.</strong> The company whose securities are being sold.</p>

<p><strong>Number of shares to be sold.</strong> The maximum number of shares the filer intends to sell within the 90-day window. This is a ceiling, not a commitment — actual sales may be lower.</p>

<p><strong>Approximate date of sale.</strong> When the filer expects to begin selling. This is typically the date of the filing itself or the next business day.</p>

<p><strong>Number of shares owned.</strong> The filer's total holdings before the proposed sale, including both restricted and unrestricted shares. This provides context — a CEO selling 10,000 of their 500,000 shares is a different signal than a CEO selling 10,000 of their 15,000 shares.</p>

<p><strong>How the securities were acquired.</strong> Whether through a private placement, employee stock option exercise, restricted stock grant, or other method. This reveals the insider's cost basis context — shares acquired through option exercises may carry a low cost basis, making a sale more economically motivated.</p>

<h2 id="electronic-filing">The Shift to Electronic Filing</h2>

<p>Historically, Form 144 was one of the last SEC forms filed on paper. In 2023, the SEC adopted amendments requiring electronic filing of Form 144 on EDGAR, effective April 2023. This was a significant improvement for investors — paper-filed Form 144s were difficult to search and often delayed in appearing on EDGAR. Electronic filing means Form 144 data is now available to the public in real time, the same day it is filed.</p>

<p>The shift to electronic filing also means Form 144 data is now machine-readable, enabling automated screening tools to flag insider selling intentions as they are filed. This levels the information playing field between institutional investors (who previously had systems to track paper filings) and individual investors.</p>

<h2 id="interpreting-form144">How Investors Interpret Form 144</h2>

<p>Not all Form 144 filings carry the same weight. Context determines significance:</p>

<p><strong>Who is selling?</strong> Sales by the CEO, CFO, or founder carry more signal value than sales by lower-level officers. A CEO who files a Form 144 to sell 25% of their holdings is making a statement about their confidence level — even if they never publicly explain the motivation.</p>

<p><strong>What is the size relative to total holdings?</strong> An insider selling 2% of their position for portfolio diversification is routine. An insider selling 50% or more of their position warrants attention, especially if the company's stock has been performing poorly.</p>

<p><strong>What is the timing?</strong> Sales that occur shortly after the company completes a large equity offering, announces disappointing earnings, or receives a negative regulatory decision may indicate that insiders expect further deterioration. Conversely, sales that occur during a rising stock price in a strong market are more likely motivated by personal financial planning.</p>

<p><strong>Is there a pattern?</strong> A single Form 144 filing from one officer is data. Multiple Form 144 filings from several insiders at the same company within a short period is a trend. When the C-suite collectively signals they want to sell, the market pays attention.</p>

<h2 id="form144-and-10b5-1">Form 144 and 10b5-1 Plans</h2>

<p>Many insiders sell their shares through pre-established 10b5-1 trading plans, which provide an affirmative defense against insider trading allegations. Even when selling under a 10b5-1 plan, the insider must file Form 144 if the sale involves restricted securities and exceeds the threshold. However, the existence of a 10b5-1 plan provides context — a sale under a plan established months earlier is less informative about the insider's current view of the company than a sale outside of such a plan.</p>

<h2 id="where-to-find-form144">Where to Find Form 144 Filings</h2>

<p>Since April 2023, all Form 144 filings are available electronically on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=144&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, Form 144 filings are integrated into the insider activity timeline, appearing alongside Form 4 transaction reports to give investors a complete view of insider selling — from the initial intent to the confirmed execution.</p>
`,
};
