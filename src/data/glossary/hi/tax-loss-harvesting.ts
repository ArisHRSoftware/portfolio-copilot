import type { GlossaryTerm } from "../../types";

export const termTaxLossHarvestingHi: GlossaryTerm = {
  slug: "tax-loss-harvesting",
  term: "Tax-Loss Harvesting (टैक्स-लॉस हार्वेस्टिंग)",
  title: "Tax-Loss Harvesting — Investment Losses को Tax Savings में बदलना",
  shortDefinition:
    "Tax-loss harvesting strategy है investments loss पर sell करके capital gains taxes offset करने की — investor's tax bill reduce करते हुए similar portfolio exposure maintain comparable (but not substantially identical) replacement investment purchase करके।",
  metaDescription:
    "Tax-loss harvesting क्या है? Losers sell करने से taxes कैसे बचते हैं, wash sale rule, portfolio exposure maintain कैसे करें, और strategy कब sense बनाती है।",
  wordCount: 420,
  category: "Investment Strategy",
  tags: ["tax-loss-harvesting", "capital-gains", "tax-strategy", "wash-sale", "portfolio-management"],
  relatedSlugs: ["wash-sale-rule", "rebalancing", "etf", "index-fund", "portfolio-diversification"],
  relatedTerms: ["wash-sale-rule", "rebalancing", "etf", "index-fund", "portfolio-diversification"],
  faq: [
    {
      question: "Tax-loss harvesting से कितना save हो सकता है?",
      answer:
        "Savings harvested losses amount और investor tax rate पर depend। Harvested losses capital gains dollar-for-dollar offset — 15-23.8% save (long-term gains rate + net investment income tax)। $10,000 realized losses $10,000 gains offset करें 20% tax rate: $2,000 save। Additionally $3,000 net capital losses ordinary income offset कर सकती हैं annually। Excess losses indefinitely carry forward।",
    },
    {
      question: "Loss पर sell करने के बाद same stock वापस buy कर सकते हैं?",
      answer:
        "30 days के अंदर नहीं — wash sale rule trigger होगा, tax loss disallow। कम से कम 31 days wait करें 'substantially identical' security repurchase से पहले। 31-day waiting period में similar but not identical replacement buy कर सकते हैं — example: S&P 500 index fund sell, total stock market fund immediately buy। 31 days बाद original holding पर switch back।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Tax-loss harvesting investments deliberately loss पर sell करना है capital losses generate करने के लिए जो portfolio में elsewhere capital gains offset करें — total tax bill reduce। IRS allow करता है realized capital losses से realized capital gains offset करना — losses gains exceed करें तो $3,000 तक excess losses ordinary income offset annually, remaining losses future years carry forward indefinitely। <strong>Market downturns में strategically losses harvest करके, temporary paper losses permanent tax savings में convert।</strong></p>

<h2>Tax-Loss Harvesting कैसे काम करता है</h2>

<p><strong>Step 1 — Losses identify करें।</strong> Portfolio review unrealized losses — investments currently purchase price से कम worth।</p>

<p><strong>Step 2 — Losing position sell करें।</strong> Capital loss realize — अब other sales से capital gains offset available।</p>

<p><strong>Step 3 — Replacement buy करें।</strong> Immediately similar (but not substantially identical) investment purchase — portfolio allocation और market exposure maintain। Example: S&P 500 index fund sell, total stock market fund buy।</p>

<p><strong>Step 4 — Gains offset करें।</strong> Tax return पर harvested losses gains offset: short-term losses पहले short-term gains (ordinary income rates), फिर long-term gains। Net losses $3,000 तक ordinary income offset। Excess carry forward।</p>

<h2>Wash Sale Rule</h2>

<p>Wash sale rule (IRC Section 1091) prevent करता है — "substantially identical" security 30 days before या after sale purchase करने पर tax loss disallow। 61-day window (30 before, sale day, 30 after)। Loss disallow होती है लेकिन permanently lost नहीं — replacement purchase cost basis में add।</p>

<h2>कब Losses Harvest करें</h2>

<p><strong>Market downturns।</strong> Broad declines portfolio-wide harvesting opportunities create। 2020 COVID crash, 2022 bear market — fertile periods।</p>

<p><strong>Year-end planning।</strong> November-December portfolio review — final opportunities, realized gains optimally offset।</p>

<p><strong>Continuous monitoring।</strong> Robo-advisors daily monitor — modest dips से भी losses capture। Continuous harvesting annual से significantly ज़्यादा value।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में capital gains tax rules different हैं — LTCG/STCG rates और indexation benefits। US investments tax-loss harvest करें तो US tax rules apply। India-US tax treaty under DTAA provisions check करें। Tax-advantaged accounts (IRA, 401(k)) में कोई benefit नहीं — gains already tax-deferred।</p>

<p>Brefyr fundamental data provide करता है — replacement investments evaluate करने में help, portfolio exposure maintain wash sale violations avoid करते हुए।</p>
`,
};
