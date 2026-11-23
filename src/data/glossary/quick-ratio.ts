import type { GlossaryTerm } from "../types";

export const termQuickRatio: GlossaryTerm = {
  slug: "quick-ratio",
  term: "Quick Ratio",
  title: "Quick Ratio (Acid Test) — Can This Company Pay Its Bills Without Selling Inventory?",
  shortDefinition:
    "The quick ratio, also called the acid-test ratio, measures a company's ability to meet short-term obligations using only its most liquid assets: cash, marketable securities, and receivables.",
  metaDescription:
    "What is the quick ratio? Learn how the acid test works, how it differs from the current ratio, what a good quick ratio is, and when to use each.",
  wordCount: 460,
  category: "Financial Metrics",
  tags: ["quick-ratio", "acid-test", "liquidity", "financial-metrics", "balance-sheet"],
  relatedSlugs: ["current-ratio", "working-capital", "cash-conversion-cycle", "debt-to-equity"],
  relatedTerms: ["current-ratio", "working-capital", "cash-conversion-cycle", "debt-to-equity"],
  faq: [
    {
      question: "Why is it called the acid test?",
      answer:
        "The name comes from the gold mining era. Miners used nitric acid to test whether a metal was real gold — gold resists acid while other metals dissolve. The quick ratio applies the same logic to company finances: strip away the less liquid assets (inventory, prepaid expenses) and see if the company can still meet its obligations using only assets that are virtually guaranteed to convert to cash quickly. It tests whether the company's liquidity is 'real gold' or base metal.",
    },
    {
      question: "What is a good quick ratio?",
      answer:
        "A quick ratio of 1.0 or higher is generally considered adequate — it means the company can cover all current liabilities with liquid assets alone, without needing to sell any inventory. Ratios between 0.5 and 1.0 are common for companies with fast-turning inventory models like retailers and restaurants. Below 0.5 warrants close attention, though it may be normal for certain business models. As always, compare to industry peers.",
    },
    {
      question: "When should I use the quick ratio instead of the current ratio?",
      answer:
        "Use the quick ratio when evaluating companies with large inventory balances that may be difficult to liquidate quickly — manufacturers, retailers with seasonal goods, or companies with perishable products. If a company's current ratio looks healthy but most of its current assets are tied up in slow-moving inventory, the quick ratio reveals the true liquidity picture. For service companies with minimal inventory, the two ratios will be nearly identical.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The quick ratio is a stricter version of the current ratio that asks a tougher question: can this company pay its short-term debts using only assets that can be converted to cash almost immediately? By excluding inventory and prepaid expenses — which may take weeks or months to liquidate — the quick ratio provides a more conservative and often more realistic assessment of a company's ability to weather short-term financial stress.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Quick Ratio = (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities</strong></p>

<p>Or equivalently: <strong>Quick Ratio = (Current Assets - Inventory - Prepaid Expenses) / Current Liabilities</strong></p>

<p>All components come from the balance sheet. Cash includes cash equivalents like money market funds and Treasury bills maturing within 90 days. Marketable securities are short-term investments that can be sold on public markets within days. Accounts receivable represent money owed by customers for goods or services already delivered.</p>

<p>A quick ratio of 1.5 means the company holds $1.50 in liquid assets for every $1.00 of current liabilities. It could pay off all short-term obligations one and a half times over without touching its inventory or prepaid expenses.</p>

<h2 id="current-vs-quick">Current Ratio vs Quick Ratio</h2>

<p>The difference between these two ratios reveals how much of a company's liquidity depends on inventory. If the current ratio is 2.5 but the quick ratio is 0.8, the company's apparent liquidity is almost entirely tied up in inventory. For a grocery store with weekly inventory turnover, this might be fine. For a heavy equipment manufacturer with 180-day inventory cycles, it could spell trouble.</p>

<p>The gap between the two ratios is itself diagnostic. A large gap (current ratio much higher than quick ratio) signals heavy inventory dependence. A small gap indicates that most current assets are already in liquid form — cash, securities, or receivables. Companies in the latter category are inherently more financially flexible.</p>

<h2 id="industry-context">Industry Context</h2>

<p>The quick ratio varies by industry even more than the current ratio because industries differ dramatically in inventory intensity. Software and professional services companies, which carry virtually no inventory, typically show quick ratios that mirror their current ratios — often 2.0 to 4.0. These businesses convert intellectual labor directly into receivables and cash.</p>

<p>Retailers and manufacturers show the biggest divergence. A clothing retailer might have a current ratio of 2.0 but a quick ratio of only 0.4, with most current assets locked in seasonal inventory that may need to be marked down to sell. Automotive manufacturers carry billions in parts and finished vehicles, creating a similarly large spread between the two liquidity measures.</p>

<p>Restaurants and fast-food chains often operate with quick ratios below 0.5, which looks alarming in isolation but reflects their cash-intensive business model: customers pay immediately, inventory is perishable and turns over daily, and suppliers grant standard payment terms. The low quick ratio is a feature of the model, not a deficiency.</p>

<h2 id="limitations">Limitations and Nuances</h2>

<p>The quick ratio assumes accounts receivable are fully collectible and quickly convertible to cash. This is not always true. If a significant portion of receivables are overdue, disputed, or owed by financially distressed customers, the quick ratio overstates true liquidity. Checking the aging schedule of receivables (disclosed in SEC filing footnotes) provides a reality check.</p>

<p>Like the current ratio, the quick ratio is a point-in-time snapshot subject to window dressing. Companies can delay vendor payments or accelerate customer collections before quarter-end to inflate the ratio temporarily. Comparing multiple quarters smooths this effect.</p>

<p>The quick ratio also ignores available but undrawn credit facilities. A company with a quick ratio of 0.5 but a $500 million revolving credit facility has far more liquidity than the ratio suggests. The footnotes to the balance sheet disclose these credit lines and their current utilization, providing essential context that the ratio alone cannot capture.</p>

<p>On Brefyr, balance sheet data sourced from SEC filings lets you assess liquidity across thousands of public companies, comparing quick ratios and current ratios alongside insider activity and filing history.</p>
`,
};
