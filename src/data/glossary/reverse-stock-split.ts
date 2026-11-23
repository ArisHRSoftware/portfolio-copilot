import type { GlossaryTerm } from "../types";

export const termReverseStockSplit: GlossaryTerm = {
  slug: "reverse-stock-split",
  term: "Reverse Stock Split",
  title: "Reverse Stock Split — When Companies Consolidate Shares and Why It Often Signals Trouble",
  shortDefinition:
    "A reverse stock split reduces the number of outstanding shares by consolidating multiple shares into one, raising the per-share price without changing the company's total market capitalization.",
  metaDescription:
    "What is a reverse stock split? Why companies do reverse splits, the delisting risk connection, how to spot them in SEC filings, and what they signal about a company's health.",
  wordCount: 1050,
  category: "Corporate Actions",
  tags: ["reverse-stock-split", "corporate-action", "delisting", "shares-outstanding", "penny-stock"],
  relatedSlugs: ["stock-split", "market-capitalization", "8-k-filing", "going-concern"],
  relatedTerms: ["stock-split", "market-capitalization", "8-k-filing", "going-concern"],
  faq: [
    {
      question: "Is a reverse stock split bad for investors?",
      answer:
        "Often, yes — not because the split itself destroys value, but because of what it signals. Most reverse splits happen because the stock price has fallen below the minimum required by the exchange (usually $1 for Nasdaq). The reverse split is a cosmetic fix for a fundamental problem: the company's business has deteriorated. Studies show that stocks underperform the market on average in the 12 months following a reverse split. However, some healthy companies do reverse splits for strategic reasons, so each case must be evaluated individually.",
    },
    {
      question: "What happens to fractional shares in a reverse stock split?",
      answer:
        "If you hold a number of shares that isn't evenly divisible by the split ratio, the fractional share is typically cashed out at the current market price. For example, in a 1-for-10 reverse split, if you hold 15 shares, you receive 1 whole share plus a cash payment for the value of the remaining 5 shares (which would have become 0.5 shares). Some companies round up instead of paying cash. The 8-K filing explains the specific treatment of fractional shares.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A reverse stock split is the opposite of a traditional stock split. Instead of dividing shares into more pieces, the company consolidates multiple shares into fewer shares at a proportionally higher price. In a 1-for-10 reverse split, every 10 shares you hold become 1 share at 10 times the previous price. If you held 1,000 shares at $0.50 each ($500 total), you now hold 100 shares at $5 each — still $500 total. Market capitalization is unchanged.</p>

<h2 id="why-reverse-splits-happen">Why Companies Do Reverse Splits</h2>

<p><strong>Exchange compliance.</strong> The most common reason is to avoid delisting. Both the NYSE and Nasdaq require minimum share prices — typically $1 per share. When a stock falls below this threshold for an extended period (usually 30 consecutive trading days), the exchange sends a deficiency notice. The company typically has 180 days to regain compliance. A reverse split is the fastest way to push the price above the minimum, buying the company time to address its underlying problems.</p>

<p><strong>Institutional requirements.</strong> Many institutional investors and mutual funds have internal policies against holding stocks below $5 or $10 per share. Some brokerages restrict margin trading on sub-$5 stocks. By raising the per-share price through a reverse split, the company makes its stock eligible for a broader range of investors and trading activities.</p>

<p><strong>Perception management.</strong> Penny stocks carry a stigma. A stock trading at $0.30 is perceived differently from one trading at $3.00, even if the market cap is identical. Some companies use reverse splits to shed the penny stock label and attract more serious investors. This is a cosmetic fix — the underlying business fundamentals have not changed.</p>

<p><strong>Preparing for a transaction.</strong> Occasionally, a company executes a reverse split before a merger, acquisition, or new stock issuance. A higher per-share price can facilitate smoother deal mechanics, particularly when exchange ratios are involved.</p>

<h2 id="common-ratios">Common Reverse Split Ratios</h2>

<p>Reverse splits range from modest consolidations to dramatic ones:</p>
<ul>
<li><strong>1-for-2:</strong> Two shares become one. Relatively mild.</li>
<li><strong>1-for-5 or 1-for-10:</strong> Common for companies near the $1 delisting threshold.</li>
<li><strong>1-for-20 or 1-for-50:</strong> Seen in severely distressed companies where the stock has fallen to pennies.</li>
<li><strong>1-for-100 or higher:</strong> Extreme consolidations, typically in companies on the verge of bankruptcy or restructuring.</li>
</ul>

<h2 id="track-record">Historical Track Record</h2>

<p>Academic research consistently shows that stocks underperform after reverse splits. A study by the Journal of Financial Economics found that the average stock executing a reverse split underperformed its benchmark by approximately 15-20% in the following year. This is not because the split causes the underperformance — it is because the conditions that made the split necessary (deteriorating business, management struggles, loss of investor confidence) persist after the cosmetic price adjustment.</p>

<p>However, there are exceptions. Some companies use reverse splits as part of genuine turnaround plans. If the company pairs the reverse split with meaningful operational changes — cost restructuring, new management, strategic pivots — the outcome can be positive. The reverse split itself is neutral; the context is what matters.</p>

<h2 id="shareholder-vote">Shareholder Approval</h2>

<p>Reverse splits typically require shareholder approval because they involve amending the company's certificate of incorporation (specifically, the authorized share count). The proposal appears in the proxy statement (DEF 14A) with the board's recommendation, the proposed ratio or range of ratios, and the rationale. Some companies request authority for a range (e.g., between 1-for-5 and 1-for-20) and let the board determine the exact ratio after the vote.</p>

<h2 id="sec-filings">Reverse Splits in SEC Filings</h2>

<p>Reverse stock split activity is documented in multiple filings:</p>
<ul>
<li><strong>DEF 14A (Proxy Statement):</strong> Contains the shareholder vote proposal, management's rationale, and the proposed ratio.</li>
<li><strong>8-K filing:</strong> Announces the board's decision, effective date, and treatment of fractional shares.</li>
<li><strong>10-K and 10-Q:</strong> All per-share figures are retroactively restated for prior periods to reflect the reverse split. Notes to financial statements explain the adjustment.</li>
</ul>

<p>Brefyr tracks all 8-K and proxy filings and flags reverse stock split announcements, helping investors monitor this critical warning signal for companies in their watchlists. The AI significance scoring system assigns high scores to reverse split announcements given their historically negative implications.</p>
`,
};
