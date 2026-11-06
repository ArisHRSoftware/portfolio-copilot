import type { GlossaryTerm } from "../types";

export const termFilerCategory: GlossaryTerm = {
  slug: "filer-category",
  term: "Filer Category",
  title: "SEC Filer Categories — How Filing Deadlines and Disclosure Rules Vary by Company Size",
  shortDefinition:
    "The SEC classifies public companies into filer categories (large accelerated, accelerated, non-accelerated, and smaller reporting company) based on their public float, which determines filing deadlines and disclosure requirements.",
  metaDescription:
    "What are SEC filer categories? How large accelerated, accelerated, non-accelerated, and smaller reporting company classifications affect filing deadlines and disclosure obligations.",
  wordCount: 2000,
  category: "SEC & Regulatory",
  tags: ["filer-category", "sec", "filing-deadline", "public-float", "regulatory"],
  relatedSlugs: ["10-k-filing", "10-q-filing", "market-capitalization", "small-cap"],
  relatedTerms: ["10-k-filing", "10-q-filing", "market-capitalization", "small-cap"],
  faq: [
    {
      question: "How is a company's filer category determined?",
      answer:
        "Filer category is based primarily on public float — the market value of shares held by non-affiliates (i.e., excluding insiders and controlling shareholders). Large accelerated filers have a public float of $700 million or more. Accelerated filers have $75 million to $700 million. Non-accelerated filers are below $75 million. Smaller reporting companies have a public float below $250 million, or public float below $700 million with less than $100 million in annual revenue.",
    },
    {
      question: "What is the difference between filer category and market cap?",
      answer:
        "Market cap includes all outstanding shares multiplied by the stock price. Public float excludes shares held by insiders (officers, directors, and 10%+ holders). A company with a $1 billion market cap might have a $400 million public float if insiders own 60% of the shares. The SEC uses public float, not market cap, for filer category determination.",
    },
    {
      question: "Why does filer category matter for investors?",
      answer:
        "Filer category determines how much information you get and how quickly you get it. Large accelerated filers must file their 10-K within 60 days and provide auditor opinions on internal controls. Smaller reporting companies get 90 days and are exempt from some disclosures. As an investor in a smaller company, you get less information with more delay — making your own due diligence more important.",
    },
    {
      question: "Can a company's filer category change?",
      answer:
        "Yes. Companies are reclassified annually based on their public float as of the last business day of their most recent second fiscal quarter (typically June 30 for December fiscal year-end companies). A growing company can move from non-accelerated to accelerated filer, gaining stricter requirements. A shrinking company can move the other direction.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Not all public companies play by the same SEC rules. The Commission divides filers into categories based on their size, and each category comes with different filing deadlines, disclosure requirements, and audit obligations. Understanding these categories explains why a $50 billion company's 10-K appears 60 days after fiscal year end while a $200 million company's arrives 90 days later — and why the smaller company's filing may contain less information.</p>

<h2 id="the-categories">The Four Filer Categories</h2>

<h3>Large Accelerated Filer</h3>
<p><strong>Public float threshold:</strong> $700 million or more</p>
<p><strong>10-K deadline:</strong> 60 days after fiscal year end</p>
<p><strong>10-Q deadline:</strong> 40 days after quarter end</p>
<p><strong>Internal control audit:</strong> Required (PCAOB Auditing Standard No. 5)</p>

<p>The strictest category. Companies like Apple, JPMorgan, and Nvidia fall here. They must file the fastest, disclose the most, and have their internal controls independently audited by their external auditor. This is the gold standard of corporate disclosure.</p>

<h3>Accelerated Filer</h3>
<p><strong>Public float threshold:</strong> $75 million to less than $700 million</p>
<p><strong>10-K deadline:</strong> 75 days after fiscal year end</p>
<p><strong>10-Q deadline:</strong> 40 days after quarter end</p>
<p><strong>Internal control audit:</strong> Required</p>

<p>Mid-sized companies. They get 15 extra days for the 10-K compared to large accelerated filers, but are still subject to the internal control audit requirement. Many small-cap stocks in the Russell 2000 fall into this category.</p>

<h3>Non-Accelerated Filer</h3>
<p><strong>Public float threshold:</strong> Less than $75 million</p>
<p><strong>10-K deadline:</strong> 90 days after fiscal year end</p>
<p><strong>10-Q deadline:</strong> 45 days after quarter end</p>
<p><strong>Internal control audit:</strong> Not required (only management's assessment)</p>

<p>The most lenient category for standard filers. These are typically micro-cap companies. They get the most time to file and are exempt from having their auditor independently assess internal controls. For investors, this exemption means you're relying on management's own assessment of whether their controls work — without independent verification.</p>

<h3>Smaller Reporting Company (SRC)</h3>
<p><strong>Threshold:</strong> Public float below $250 million, OR public float below $700 million with annual revenue below $100 million</p>
<p><strong>Benefits:</strong> Reduced disclosure requirements across multiple areas</p>

<p>SRC is an overlay category — a company can be both an accelerated filer and a smaller reporting company simultaneously. SRC status provides specific disclosure accommodations:</p>
<ul>
<li>Two years of audited financial statements instead of three in the 10-K</li>
<li>Reduced executive compensation disclosure (fewer tables, fewer named officers)</li>
<li>Simplified risk factor presentation</li>
<li>Exemption from the auditor's report on internal controls (if also a non-accelerated filer)</li>
<li>No requirement for selected financial data (Item 6 of 10-K)</li>
</ul>

<h2 id="what-it-means">What Filer Category Means for Investors</h2>

<h3>Information Asymmetry</h3>

<p>A large accelerated filer gives you audited financials within 60 days, an independent assessment of internal controls, three years of comparative data, and detailed executive compensation tables. A non-accelerated smaller reporting company gives you audited financials within 90 days, only management's word on internal controls, two years of comparative data, and minimal compensation detail.</p>

<p>This creates an information gap that grows with company size. When you invest in a micro-cap stock, you're working with less data, delivered later, with fewer independent checks. That's not a reason to avoid small-caps — it's a reason to do more of your own work reading the actual filings rather than relying on third-party summaries that may not exist.</p>

<h3>Filing Delay as a Signal</h3>

<p>A large accelerated filer that files its 10-K on day 59 is normal. One that files an NT 10-K (late filing notification) is unusual — large companies have the accounting staff to meet the 60-day deadline. A late filing from a large filer often signals accounting complications or auditor disagreements.</p>

<p>For non-accelerated filers, a late filing is more common but still worth noting. If a micro-cap company that normally files on day 85 suddenly files an NT 10-K, it may indicate emerging problems.</p>

<h3>Internal Control Audit Exemption</h3>

<p>The most consequential difference between categories. Without the auditor's independent assessment, you're trusting management to honestly evaluate their own control environment. Studies show that companies exempt from the internal control audit have higher rates of restatements and financial reporting errors — not necessarily because of fraud, but because the independent check that would catch errors before they reach the financial statements doesn't exist.</p>

<h2 id="checking-category">How to Check a Company's Filer Category</h2>

<p>The cover page of every 10-K filing includes checkboxes indicating the company's filer category. Look for the section that reads:</p>

<blockquote>
<p>Indicate by check mark whether the registrant is a large accelerated filer, an accelerated filer, a non-accelerated filer, a smaller reporting company, or an emerging growth company.</p>
</blockquote>

<p>One or more boxes will be checked. On EDGAR, the filer category also appears in the company header information.</p>

<p>On Brefyr, each company's stock page displays the filer category extracted from their most recent SEC filing, alongside the SIC code, state of incorporation, and other regulatory metadata. This helps investors quickly understand the disclosure framework that applies to each company they're researching.</p>

<h2 id="emerging-growth">Emerging Growth Companies (EGC)</h2>

<p>The JOBS Act of 2012 created an additional category: the Emerging Growth Company. A company qualifies as an EGC if its most recent IPO was within the past five years and its annual revenue is below approximately $1.235 billion (adjusted for inflation). EGC status provides temporary accommodations including reduced financial statement requirements, delayed adoption of new accounting standards, and exemption from the internal control audit.</p>

<p>EGC status is temporary — companies lose it after five years, after crossing the revenue threshold, or after becoming a large accelerated filer. Many recently-IPO'd tech companies file under EGC status. For investors, this means their filings contain less historical data and fewer disclosures than mature companies of similar size.</p>
`,
};
