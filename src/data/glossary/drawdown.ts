import type { GlossaryTerm } from "../types";

export const termDrawdown: GlossaryTerm = {
  slug: "drawdown",
  term: "Maximum Drawdown",
  title: "Maximum Drawdown — The Worst-Case Peak-to-Trough Loss",
  shortDefinition:
    "Maximum drawdown measures the largest peak-to-trough decline in an investment's value over a specific period, capturing the worst loss an investor would have experienced.",
  metaDescription:
    "What is maximum drawdown? Learn how to calculate it, why it matters more than volatility for many investors, and how to use it for risk assessment.",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["drawdown", "maximum-drawdown", "risk-metrics", "loss", "portfolio-management"],
  relatedSlugs: ["standard-deviation", "volatility", "sharpe-ratio", "sortino-ratio"],
  relatedTerms: ["standard-deviation", "volatility", "sharpe-ratio", "sortino-ratio"],
  faq: [
    {
      question: "How is maximum drawdown calculated?",
      answer:
        "Maximum drawdown is the largest percentage decline from any peak to the subsequent trough before a new peak is established. For each point in time, calculate the drawdown from the highest value reached before that point: Drawdown = (Current Value - Peak Value) / Peak Value. The maximum drawdown is the most negative value in this series. It captures the worst possible timing scenario — an investor who bought at the peak and sold at the trough.",
    },
    {
      question: "Why do investors care about drawdown more than standard deviation?",
      answer:
        "Because drawdown measures actual pain. Standard deviation says the annual volatility is 20% — an abstract statistical concept. Maximum drawdown says the portfolio lost 35% from its peak — a concrete, emotionally resonant number. Most investors don't think in terms of standard deviations; they think in terms of 'how much could I lose?' Drawdown answers that question directly. It also captures the sequential nature of losses — a 50% drawdown requires a 100% gain just to break even, which can take years.",
    },
    {
      question: "What is a typical maximum drawdown for the stock market?",
      answer:
        "The S&P 500 has experienced maximum drawdowns of roughly 50% during the 2000-2002 dot-com crash, 57% during the 2007-2009 financial crisis, and 34% during the 2020 COVID crash. Smaller drawdowns of 10-20% (corrections) occur every few years on average. These numbers establish the baseline risk of equity investing — an investor in a broad stock index should expect to see portfolio losses of 30-50% at some point during their investing lifetime.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Maximum drawdown answers the question that keeps investors awake at night: how bad can it get? While standard deviation and beta describe average risk behavior, maximum drawdown captures the extreme — the worst-case loss from the highest point to the lowest point before recovery. It's the most intuitive and viscerally meaningful risk metric because it translates directly to real money lost and real time spent underwater.</p>

<h2 id="anatomy">Anatomy of a Drawdown</h2>

<p>A drawdown has three dimensions, each important for understanding the full risk experience.</p>

<p><strong>Depth</strong> is the percentage decline from peak to trough — the headline maximum drawdown number. A 40% drawdown means the portfolio lost 40% of its peak value. This is the magnitude of the pain.</p>

<p><strong>Duration</strong> is the total time from peak to full recovery. A 40% drawdown that recovers in 6 months is far less damaging than one that takes 5 years to recover. The 2007-2009 S&P 500 drawdown of 57% took until 2013 to fully recover — a 5.5-year round trip. Duration measures the length of the pain.</p>

<p><strong>Recovery time</strong> (from trough to new peak) is the period after the worst loss when the portfolio is climbing back but hasn't yet returned to its previous high-water mark. During this period, the investor has unrealized losses and is waiting to break even — often the most psychologically difficult phase.</p>

<h2 id="mathematics-of-recovery">The Mathematics of Recovery</h2>

<p>Drawdowns have an asymmetric relationship with the gains needed to recover. A 10% loss requires an 11.1% gain to break even. A 25% loss requires 33%. A 50% loss requires 100%. A 75% loss requires 300%. This non-linear relationship means that large drawdowns are disproportionately destructive to wealth — the deeper the hole, the exponentially harder it is to climb out.</p>

<p>This asymmetry has profound implications for portfolio construction and risk management. Avoiding large drawdowns is mathematically more important than capturing large gains. A portfolio that returns 8% annually with a maximum drawdown of 15% will compound to significantly more wealth over 20 years than one returning 10% annually with a maximum drawdown of 45%, because the severe drawdown sets back the compounding process by years.</p>

<h2 id="behavioral-impact">Behavioral Impact</h2>

<p>Maximum drawdown directly determines investor behavior — often to their detriment. Research consistently shows that investors are most likely to sell (capitulate) near the bottom of a drawdown, when the pain is greatest and the fear most intense. They then miss the recovery, locking in losses. The deeper and longer the drawdown, the higher the probability of capitulation.</p>

<p>This behavioral reality means that the "best" investment strategy isn't necessarily the one with the highest expected return or even the best Sharpe ratio — it's the one the investor can actually stick with through inevitable drawdowns. A strategy with slightly lower returns but significantly shallower drawdowns may produce better real-world outcomes because the investor doesn't panic and sell at the worst possible time.</p>

<h2 id="portfolio-use">Portfolio Risk Management</h2>

<p>Professional portfolio managers use maximum drawdown alongside standard deviation and VaR (value at risk) for comprehensive risk assessment. Some fund mandates set explicit drawdown limits — if the portfolio declines more than 10% from its peak, the manager must reduce risk. These drawdown triggers help prevent catastrophic losses but can force selling at inopportune times if set too tightly.</p>

<p>When evaluating competing investments or strategies, compare both Sharpe ratio and maximum drawdown. Two strategies with identical Sharpe ratios may have very different drawdown profiles. The one with shallower maximum drawdown is generally preferred because it's easier to stay invested through, even if the peak-to-peak returns are similar.</p>

<p>On Brefyr, company financial data from SEC filings provides fundamental context for understanding the business risks that drive stock drawdowns across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
