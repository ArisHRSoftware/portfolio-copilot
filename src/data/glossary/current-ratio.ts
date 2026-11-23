import type { GlossaryTerm } from "../types";

export const termCurrentRatio: GlossaryTerm = {
  slug: "current-ratio",
  term: "Current Ratio",
  title: "Current Ratio — Can This Company Pay Its Bills Over the Next Year?",
  shortDefinition:
    "The current ratio divides current assets by current liabilities, measuring whether a company has enough short-term resources to cover its obligations due within one year.",
  metaDescription:
    "What is the current ratio? Learn how to calculate it, what a good current ratio is, how it compares to the quick ratio, and when it misleads.",
  wordCount: 470,
  category: "Financial Metrics",
  tags: ["current-ratio", "liquidity", "financial-metrics", "balance-sheet", "solvency"],
  relatedSlugs: ["quick-ratio", "working-capital", "debt-to-equity", "cash-conversion-cycle"],
  relatedTerms: ["quick-ratio", "working-capital", "debt-to-equity", "cash-conversion-cycle"],
  faq: [
    {
      question: "What is a good current ratio?",
      answer:
        "A current ratio between 1.5 and 3.0 is generally considered healthy. Below 1.0 means the company has more short-term obligations than short-term resources, which raises liquidity concerns. Above 3.0 may indicate the company is not efficiently using its assets — excess cash or inventory sitting idle could be deployed for growth. The ideal ratio depends on the industry: retailers with fast-turning inventory can operate safely at lower ratios than manufacturers with slow-moving stock.",
    },
    {
      question: "What is the difference between the current ratio and quick ratio?",
      answer:
        "The quick ratio excludes inventory and prepaid expenses from the numerator, including only the most liquid assets: cash, marketable securities, and accounts receivable. The current ratio includes all current assets. For companies with large inventory balances that might be hard to liquidate quickly (like manufacturers or retailers with seasonal stock), the quick ratio gives a more conservative measure of immediate liquidity.",
    },
    {
      question: "Can a company with a good current ratio still face cash problems?",
      answer:
        "Absolutely. The current ratio is a snapshot from the balance sheet date. If most of the current assets are in accounts receivable from slow-paying customers or in obsolete inventory, the company may struggle to convert those assets to cash when bills come due. Additionally, timing matters — if a large debt payment falls due next week but receivables won't be collected for 60 days, the current ratio misses this mismatch.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The current ratio is the most widely used measure of short-term financial health. It answers a question that creditors, suppliers, and investors all care about: does this company have enough liquid resources to meet its obligations over the next twelve months? A current ratio above 1.0 means current assets exceed current liabilities — the company can theoretically cover its short-term debts. Below 1.0 raises a warning flag about potential liquidity stress.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Current Ratio = Current Assets / Current Liabilities</strong></p>

<p>Both figures come directly from the balance sheet in the 10-K or 10-Q. Current assets include cash, marketable securities, accounts receivable, inventory, and prepaid expenses — anything expected to be converted to cash or consumed within one year. Current liabilities include accounts payable, short-term debt, current portion of long-term debt, accrued expenses, and deferred revenue — anything due within one year.</p>

<p>A current ratio of 2.0 means the company has $2 of current assets for every $1 of current liabilities. If all current liabilities came due simultaneously, the company could cover them twice over.</p>

<h2 id="interpreting">Interpreting the Current Ratio</h2>

<p>The current ratio provides a quick liquidity check, but context determines whether a given number is healthy or concerning. Industry norms vary dramatically. Grocery chains and fast-food restaurants routinely operate with current ratios near 1.0 because they collect cash from customers immediately while negotiating extended payment terms with suppliers. Their business model is inherently cash-efficient. A current ratio of 0.9 for Walmart is not alarming — it's their operating model.</p>

<p>Manufacturing companies typically carry current ratios of 1.5-2.5 because they maintain large inventories of raw materials, work-in-progress, and finished goods. These inventories take time to convert to cash, so a higher buffer is necessary. Construction and aerospace companies often show even higher ratios because project timelines extend over many months, with costs incurred long before payment is received.</p>

<p>Technology companies can swing widely. Cash-rich software companies may show current ratios of 3.0 or higher because they hold massive cash reserves relative to their modest liabilities. Capital-intensive hardware companies with significant supply chain obligations may operate closer to 1.5.</p>

<h2 id="trend-analysis">Trend Analysis</h2>

<p>A single current ratio reading means little in isolation. The trend over multiple quarters and years reveals far more about a company's financial trajectory. A declining current ratio — from 2.5 to 2.0 to 1.3 over three years — may signal deteriorating liquidity even if each individual reading looks acceptable. Possible causes include shrinking cash balances, rising short-term debt, slowing receivable collections, or inventory buildup.</p>

<p>Conversely, a rising current ratio could indicate improving financial health, but it could also signal inefficiency. A company hoarding cash rather than investing in growth will show a climbing current ratio — good for liquidity, potentially bad for returns.</p>

<h2 id="limitations">Limitations</h2>

<p>The current ratio treats all current assets as equally liquid, which they are not. Cash in the bank can pay a bill today. A receivable from a customer 90 days away cannot. Inventory in a warehouse may take months to sell, and some inventory may be obsolete and worth far less than its book value. The quick ratio addresses this by excluding inventory and prepaid expenses, providing a more stringent liquidity test.</p>

<p>Timing is another limitation. The current ratio reflects a single point in time — the balance sheet date. Companies can manage this date strategically by collecting receivables aggressively or delaying purchases before quarter-end to present a healthier ratio. This practice, known as window dressing, is common and legal but makes the ratio less reliable as a real-time liquidity indicator.</p>

<p>Finally, the current ratio says nothing about cash flow. A company may have adequate current assets but terrible cash flow from operations, meaning those assets are being consumed rather than replenished. The cash conversion cycle and operating cash flow metrics provide the dynamic perspective that the static current ratio misses.</p>

<p>On Brefyr, balance sheet data from SEC filings is available for thousands of public companies, letting you calculate and compare liquidity metrics alongside filing history, insider trades, and AI-generated analysis.</p>
`,
};
