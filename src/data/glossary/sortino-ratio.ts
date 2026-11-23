import type { GlossaryTerm } from "../types";

export const termSortinoRatio: GlossaryTerm = {
  slug: "sortino-ratio",
  term: "Sortino Ratio",
  title: "Sortino Ratio — Risk-Adjusted Returns That Focus on Downside Pain",
  shortDefinition:
    "The Sortino ratio measures risk-adjusted return using only downside deviation as the risk measure, penalizing only harmful volatility (losses) rather than total volatility including gains.",
  metaDescription:
    "What is the Sortino ratio? Learn how it improves on the Sharpe ratio, how to calculate it, and why focusing on downside risk better reflects investor concerns.",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["sortino-ratio", "downside-risk", "risk-metrics", "risk-adjusted-return", "portfolio-management"],
  relatedSlugs: ["sharpe-ratio", "standard-deviation", "drawdown", "volatility"],
  relatedTerms: ["sharpe-ratio", "standard-deviation", "drawdown", "volatility"],
  faq: [
    {
      question: "How does the Sortino ratio differ from the Sharpe ratio?",
      answer:
        "Both measure return per unit of risk, but they define risk differently. The Sharpe ratio uses total standard deviation (upside and downside volatility equally). The Sortino ratio uses only downside deviation — the volatility of returns that fall below a target rate (usually zero or the risk-free rate). This distinction matters because investors don't want to penalize positive surprises. A stock that gains 30% unexpectedly increases the Sharpe denominator but not the Sortino denominator.",
    },
    {
      question: "What is a good Sortino ratio?",
      answer:
        "Because the Sortino ratio uses only downside deviation (a smaller number than total standard deviation), Sortino ratios are typically higher than Sharpe ratios for the same investment. A Sortino ratio above 2.0 is considered good. Above 3.0 is excellent. The S&P 500's long-term Sortino ratio is approximately 0.8-1.0. Hedge funds targeting absolute returns often benchmark against a Sortino ratio of 2.0 or higher.",
    },
    {
      question: "When should you use the Sortino ratio instead of the Sharpe ratio?",
      answer:
        "Use the Sortino ratio when evaluating investments with asymmetric return distributions — strategies that have more upside potential than downside risk (or vice versa). Venture capital, options strategies, and growth stock portfolios often have positively skewed returns. The Sharpe ratio penalizes these strategies for their large upside moves, making them appear riskier than they actually are from a loss perspective. The Sortino ratio correctly reflects that upside volatility is not a risk investors want to minimize.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The Sortino ratio refines the Sharpe ratio's approach to risk measurement by recognizing a truth that every investor understands intuitively: upside volatility is not risk. When a stock jumps 20% on a great earnings report, that volatility is desirable — it's the whole point of investing. When it drops 20% on bad news, that's the volatility investors fear. The Sharpe ratio lumps both together. The Sortino ratio separates them, counting only the downside volatility that actually hurts investors.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Sortino Ratio = (Rp - T) / Downside Deviation</strong></p>

<p>Where Rp is the portfolio return, T is the target or minimum acceptable return (often zero or the risk-free rate), and downside deviation is the standard deviation of only those returns that fall below the target.</p>

<p>Downside deviation is calculated as: square root of the average squared difference between each below-target return and the target. Returns above the target are excluded from the calculation entirely — they contribute nothing to the risk measure. This asymmetric treatment is the core innovation of the Sortino ratio.</p>

<h2 id="why-downside">Why Downside Matters More</h2>

<p>Behavioral finance research by Kahneman and Tversky showed that losses hurt approximately twice as much as equivalent gains feel good — a phenomenon called loss aversion. A 10% portfolio loss requires an 11.1% gain just to break even. A 50% loss requires a 100% gain. The asymmetric mathematics of losses means that avoiding large downside moves is at least as important as capturing upside moves for long-term wealth accumulation.</p>

<p>The Sortino ratio aligns risk measurement with this reality. By using downside deviation rather than total standard deviation, it rewards strategies that deliver consistent or positively skewed returns — strategies that have modest or rare losses even if they occasionally produce large gains. These are exactly the return characteristics most investors seek.</p>

<h2 id="asymmetric-strategies">Evaluating Asymmetric Strategies</h2>

<p>The Sortino ratio is especially valuable for evaluating strategies with non-normal return distributions. Venture capital, for example, produces many small losses (failed investments) and occasional enormous gains (successful exits). The Sharpe ratio penalizes the large gains as "volatility," making venture capital look riskier than it is from a downside perspective. The Sortino ratio correctly identifies that the downside is bounded (you can only lose what you invested) while the upside is unlimited.</p>

<p>Similarly, momentum strategies in equities often produce modestly positive returns most of the time with occasional sharp drawdowns during trend reversals. The Sharpe ratio shows moderate risk-adjusted returns. The Sortino ratio better captures the strategy's true risk profile by focusing on those periodic sharp losses as the relevant risk measure.</p>

<p>Options strategies present the reverse case. Selling out-of-the-money puts generates small, consistent gains (the premium collected) with rare catastrophic losses (when the market crashes through the strike price). The Sharpe ratio looks excellent because day-to-day volatility is low. But the Sortino ratio provides a reality check by focusing on the downside events — it reveals that when losses occur, they're severe.</p>

<h2 id="practical-application">Practical Application</h2>

<p>For portfolio construction, the Sortino ratio helps identify investments that contribute genuine risk reduction versus merely low total volatility. An investment with a high Sortino ratio has limited downside — it doesn't blow up when markets stress. Adding such investments to a portfolio reduces drawdown risk more effectively than adding investments selected purely on Sharpe ratio criteria.</p>

<p>When comparing two funds with similar Sharpe ratios, the one with a higher Sortino ratio is typically the better choice because it achieves its risk-adjusted return with less downside pain. The difference between the two ratios reveals the return distribution's shape — a large gap suggests significant positive skew (which is desirable), while a small gap suggests returns are roughly symmetric.</p>

<p>On Brefyr, company financial data from SEC filings provides fundamental context for evaluating risk characteristics across thousands of public companies alongside insider trading and AI-generated analysis.</p>
`,
};
