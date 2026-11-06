import type { GlossaryTerm } from "../types";

export const term8KFiling: GlossaryTerm = {
  slug: "8-k-filing",
  term: "8-K Filing",
  title: "8-K Filing — Material Events That Move Stock Prices",
  shortDefinition:
    "An 8-K is a current report filed with the SEC when a significant event occurs at a public company — such as an acquisition, CEO departure, bankruptcy, or auditor change.",
  metaDescription:
    "What is an 8-K filing? A guide to the SEC's material event disclosure rule — what triggers an 8-K, the 9 categories of reportable events, and how investors use them.",
  wordCount: 2600,
  category: "SEC Filings",
  tags: ["sec-filing", "material-event", "current-report", "edgar"],
  relatedSlugs: ["10-k-filing", "10-q-filing", "sec-edgar", "material-event"],
  relatedTerms: ["10-k-filing", "10-q-filing", "sec-edgar", "material-event", "form-4"],
  faq: [
    {
      question: "How quickly must a company file an 8-K?",
      answer:
        "Companies must file an 8-K within four business days of the triggering event. Some events, like Regulation FD disclosures, may require even faster filing. The four-day window is a maximum, not a target — many companies file within 24 hours for significant events like CEO departures or acquisitions.",
    },
    {
      question: "Are all 8-K filings equally important?",
      answer:
        "No. An 8-K announcing a new $50 million credit facility is routine. An 8-K disclosing a going concern warning, auditor resignation, or restatement of financials is a red flag. The item number tells you the category — Item 4.01 (auditor change) and Item 2.04 (asset impairment) tend to be the most market-moving disclosures.",
    },
    {
      question: "What is the difference between an 8-K and a 10-Q?",
      answer:
        "A 10-Q is a scheduled quarterly report filed three times per year with a predictable deadline. An 8-K is an unscheduled report triggered by a specific event — it can be filed on any business day. Think of the 10-Q as a regular checkup and the 8-K as a trip to the emergency room.",
    },
    {
      question: "Can an 8-K filing affect a company's stock price?",
      answer:
        "Absolutely. Major 8-K events regularly move stock prices 5-20% in a single session. An acquisition announcement, management shake-up, or earnings revision disclosed via 8-K can trigger immediate trading activity. This is why investors who monitor 8-K filings in real time have an information advantage — especially for small-cap stocks with limited analyst coverage.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>An 8-K is a company's way of telling the SEC — and by extension, every investor — that something significant just happened. Unlike the 10-K (annual) and 10-Q (quarterly), which follow a predictable schedule, an 8-K can appear on any business day without warning. That unpredictability is what makes 8-Ks so valuable for active investors: they're the closest thing to real-time corporate disclosure that exists in the U.S. regulatory system.</p>

<h2 id="what-triggers-8k">What Triggers an 8-K</h2>

<p>The SEC defines nine categories of events that require 8-K disclosure. Each category has a specific item number, and understanding these numbers helps you quickly assess the significance of any 8-K filing.</p>

<h3>Section 1 — Business and Operations</h3>

<p><strong>Item 1.01: Entry into a Material Definitive Agreement.</strong> The company signed a significant contract — a major supply agreement, licensing deal, joint venture, or merger agreement. The full text of the agreement is typically attached as an exhibit, though companies can redact confidential terms.</p>

<p><strong>Item 1.02: Termination of a Material Definitive Agreement.</strong> The flip side. When a major contract ends — whether by expiration, breach, or mutual termination — the company discloses it here. Losing a contract that represents 20% of revenue is the kind of event that belongs in this section.</p>

<p><strong>Item 1.03: Bankruptcy or Receivership.</strong> The company or a significant subsidiary has filed for bankruptcy. This is one of the most critical 8-K items. When you see Item 1.03, the company is in serious financial distress.</p>

<h3>Section 2 — Financial Information</h3>

<p><strong>Item 2.01: Completion of Acquisition or Disposition.</strong> The company has closed an acquisition or sold a significant asset. The filing includes the purchase price, how it was financed, and a description of the acquired business. For small-cap investors, acquisitions can fundamentally transform a company's revenue profile overnight.</p>

<p><strong>Item 2.02: Results of Operations and Financial Condition.</strong> This is the earnings release item. When a company issues its quarterly or annual earnings press release, it files the text as an 8-K under Item 2.02. Technically, the press release is "furnished" rather than "filed" — a legal distinction that gives the company slightly less liability for forward-looking statements.</p>

<p><strong>Item 2.04: Triggering Events That Accelerate or Increase a Direct Financial Obligation.</strong> A covenant violation on a loan, an early repayment trigger, or a ratings downgrade that increases borrowing costs. These events signal potential liquidity stress.</p>

<p><strong>Item 2.05: Costs Associated with Exit or Disposal Activities.</strong> Layoffs, plant closures, and restructuring charges. When a company announces it's cutting 15% of its workforce, Item 2.05 is where the details appear — including the estimated cost and timeline.</p>

<p><strong>Item 2.06: Material Impairments.</strong> The company is writing down the value of an asset — goodwill from a prior acquisition, an investment, or equipment. Impairments are non-cash charges, but they signal that management overpaid for something or that conditions have deteriorated.</p>

<h3>Section 3 — Securities and Trading</h3>

<p><strong>Item 3.01: Notice of Delisting or Transfer.</strong> The stock is being moved to a different exchange or delisted entirely. Delisting from the NYSE or Nasdaq often means the stock will trade on OTC markets with far less liquidity.</p>

<p><strong>Item 3.02: Unregistered Sales of Equity Securities.</strong> The company issued shares without registering them with the SEC — typically to institutional investors in a private placement. This dilutes existing shareholders.</p>

<h3>Section 4 — Accounting and Financial Statements</h3>

<p><strong>Item 4.01: Changes in Registrant's Certifying Accountant.</strong> The company changed its auditor. This is a high-importance item. When a Big 4 auditor (Deloitte, PwC, EY, KPMG) is replaced by a smaller firm, or when the auditor resigns rather than being dismissed, the filing must disclose whether there were any disagreements on accounting matters. A "yes" in that field is a serious red flag.</p>

<p><strong>Item 4.02: Non-Reliance on Previously Issued Financial Statements.</strong> The company is telling you not to trust its prior financials. A restatement is coming. This is one of the most damaging 8-K items. Stocks regularly drop 20-40% on Item 4.02 disclosures.</p>

<h3>Section 5 — Corporate Governance and Management</h3>

<p><strong>Item 5.02: Departure/Election of Directors or Officers.</strong> The CEO resigned. The CFO was fired. A board member stepped down. This item tells you who left, who arrived, and the terms of any separation agreement. CEO departures are among the most-watched 8-K events — a sudden, unexplained departure is often a precursor to bad news.</p>

<p><strong>Item 5.07: Submission of Matters to a Vote of Security Holders.</strong> Results of the annual shareholders' meeting — which directors were elected, which proposals passed, and which failed.</p>

<h3>Section 7 — Regulation FD</h3>

<p><strong>Item 7.01: Regulation FD Disclosure.</strong> The company shared material non-public information with an analyst, investor, or other party, and is now making it public to comply with Regulation FD (Fair Disclosure). This ensures that no investor gets an unfair information advantage.</p>

<h3>Section 8 — Other Events</h3>

<p><strong>Item 8.01: Other Events.</strong> A catch-all for events the company considers important enough to disclose but that don't fit the other categories. Press releases, strategic updates, and voluntary disclosures often appear here.</p>

<h2 id="reading-8k-efficiently">How to Read 8-Ks Efficiently</h2>

<p>The item number is your triage tool. Here is a practical priority system:</p>

<p><strong>Drop everything and read:</strong> Items 1.03 (bankruptcy), 4.01 (auditor change), 4.02 (restatement), 5.02 (CEO/CFO departure)</p>

<p><strong>Read today:</strong> Items 1.01/1.02 (material contracts), 2.01 (acquisitions), 2.04 (covenant triggers), 2.06 (impairments)</p>

<p><strong>Read when convenient:</strong> Items 2.02 (earnings release), 5.07 (vote results), 7.01 (Reg FD), 8.01 (other)</p>

<p><strong>Usually skip:</strong> Items 2.05 (restructuring charges — unless you own the stock), 3.01 (delisting notice), 3.02 (private placement)</p>

<h2 id="why-8k-matters-small-cap">Why 8-Ks Matter More for Small-Cap Stocks</h2>

<p>A Fortune 500 company's 8-K reaches Bloomberg terminals within seconds. Analysts publish commentary within hours. The information is priced in fast.</p>

<p>A micro-cap company's 8-K might sit on EDGAR unread for days. Nobody at a major brokerage writes about it. Nobody tweets about it. An individual investor who reads that 8-K the day it's filed has a genuine information advantage — the kind that doesn't exist for Apple or Microsoft.</p>

<p>Brefyr monitors 8-K filings for 7,600+ companies and assigns significance scores within minutes of publication. A routine Regulation FD disclosure scores low. A going concern warning or auditor resignation scores high. The AI does the triage so you can focus your time on the filings that actually matter.</p>

<h2 id="8k-vs-press-release">8-K vs Press Release</h2>

<p>Companies often issue a press release and an 8-K for the same event. The press release goes to business wires (PR Newswire, Business Wire) and is designed for media consumption — it emphasizes the positive spin. The 8-K goes to the SEC and is designed for regulatory compliance — it includes the legally required details, exhibits, and risk language.</p>

<p>When the press release says "strategic restructuring to drive future growth" and the 8-K says "1,200 employees terminated, $45 million in severance charges," read the 8-K.</p>
`,
};
