import type { GlossaryTerm } from "../../types";

export const termInformationRatioHi: GlossaryTerm = {
  slug: "information-ratio",
  term: "Information Ratio (इन्फॉर्मेशन रेशियो)",
  title: "Information Ratio — Fund Manager Benchmark को कितनी Consistently Outperform करता है",
  shortDefinition:
    "Information ratio portfolio manager की ability measure करती है benchmark relative excess returns generate करने की, outperformance consistency adjust करके — active return divide by tracking error।",
  metaDescription:
    "Information ratio क्या है? Calculate कैसे करें, active management skill का सबसे अच्छा measure, और good information ratio कितना होता है।",
  wordCount: 410,
  category: "Risk Metrics",
  tags: ["information-ratio", "active-management", "risk-metrics", "benchmark", "performance"],
  relatedSlugs: ["tracking-error", "alpha", "sharpe-ratio", "r-squared"],
  relatedTerms: ["tracking-error", "alpha", "sharpe-ratio", "r-squared"],
  faq: [
    {
      question: "अच्छा information ratio कितना होता है?",
      answer:
        "0.5 से ऊपर good — हर unit active risk पर half unit excess return। 0.75+ very good, 1.0+ exceptional। बहुत कम active managers 0.5+ sustain कर पाते हैं long periods में। Grinold और Kahn के अनुसार 0.5 'good' manager, 0.3 भी upper quartile multi-year periods में।",
    },
    {
      question: "Information ratio और Sharpe ratio में क्या difference है?",
      answer:
        "Sharpe ratio total return per unit of total risk measure करती है risk-free rate relative। Information ratio excess return per unit of active risk benchmark relative। Sharpe evaluate करती है कि investment ने total volatility के लिए enough return earn किया। Information ratio evaluate करती है कि manager की active decisions (benchmark से deviations) ने value add किया। Fund good Sharpe हो सकती है market exposure से जबकि negative information ratio from poor stock picking।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Information ratio active management skill का सबसे precise measure है। Pointed question answer करती है: benchmark से deviate करने का हर unit risk लेकर manager कितना excess return generate करता है? High IR = active bets consistently pay off। Low/negative IR = active decisions value destroy कर रहे।</p>

<p>Indian context: India में mutual fund performance भी benchmark relative measure होती है — Nifty 50, Sensex। Same concept apply होता है। US में S&P 500 या Russell 2000 benchmark typically। Indian investors PMS या mutual fund evaluate करें तो information ratio powerful tool है।</p>

<h2>Calculation</h2>

<p><strong>Information Ratio = Active Return / Tracking Error</strong></p>
<p><strong>Active Return = Portfolio Return - Benchmark Return</strong></p>
<p><strong>Tracking Error = Standard Deviation of Active Returns</strong></p>

<p>Active return outperformance magnitude। Tracking error consistency measure। Manager 3% outperform एक साल, 2% underperform अगले, 4% outperform तीसरे — positive average active return लेकिन high tracking error — erratic results। Information ratio दोनों dimensions single number में capture।</p>

<h2>Fundamental Law of Active Management</h2>

<p>Grinold और Kahn का formula: <strong>IR = IC x Square Root of Breadth</strong></p>

<p>IC (Information Coefficient) = manager skill (forecasts और actual outcomes correlation)। Breadth = number of independent bets per year। Modest skill (IC 0.05) + many bets = respectable IR। Quantitative strategy hundreds stocks evaluate monthly — enormous breadth, tiny predictive edges compound। Concentrated manager 20 stocks — limited breadth, much higher accuracy needed same IR achieve करने।</p>

<h2>Active Managers Evaluate करना</h2>

<p>IR gold standard metric है active management fees justify करने के लिए। Manager 1% charge, 1.5% outperform, 5% tracking error — IR 0.3 gross, ~0.1 net after fees। Active risk adequately compensated नहीं।</p>

<p>Gross IR 0.4-0.5+ चाहिए fees justify करने — positive net-of-fees IR। Below that = index fund worse in every dimension।</p>

<p>Time period matter करता है — 3 years under unreliable। 5-10 years robust estimate। Luck wash out longer periods में।</p>

<h2>Practical Implications</h2>

<p>Same category managers compare करें तो IR raw returns से better tool। 12% return vs 10% benchmark, 3% tracking error (IR 0.67) ज़्यादा skilled है 14% return vs 10% benchmark, 8% tracking error (IR 0.50) से — first manager active risk efficiently convert करता है।</p>

<p>Brefyr पर SEC filings से company financial data fundamental context provide करती है active investment opportunities समझने के लिए।</p>
`,
};
