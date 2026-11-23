import type { GlossaryTerm } from "../../types";

export const termTrackingErrorHi: GlossaryTerm = {
  slug: "tracking-error",
  term: "Tracking Error (ट्रैकिंग एरर)",
  title: "Tracking Error — Portfolio Benchmark से कितना Deviate करता है Measure करना",
  shortDefinition:
    "Tracking error portfolio returns और benchmark returns के बीच difference की standard deviation है — portfolio benchmark को कितना closely (या loosely) follow करता है measure।",
  metaDescription:
    "Tracking error क्या है? Calculate कैसे करें, index funds और active managers के लिए क्यों matter करता है, और typical tracking error levels क्या हैं।",
  wordCount: 420,
  category: "Risk Metrics",
  tags: ["tracking-error", "benchmark", "risk-metrics", "active-management", "index-funds"],
  relatedSlugs: ["information-ratio", "r-squared", "alpha", "standard-deviation"],
  relatedTerms: ["information-ratio", "r-squared", "alpha", "standard-deviation"],
  faq: [
    {
      question: "Different fund types के लिए typical tracking error?",
      answer:
        "Index funds/ETFs (large-cap benchmarks): 0.02-0.20% — extremely tight। Enhanced index funds: 0.5-2.0%। Active large-cap managers: 2-6%। Concentrated active managers: 6-10%। Hedge funds/unconstrained: 10-15%+। Higher tracking error means more deviation — outperformance या underperformance दोनों possible।",
    },
    {
      question: "Lower tracking error हमेशा better है?",
      answer:
        "Index funds: हाँ — benchmark replicate करना purpose है। Active managers: depend करता है। Very low tracking error (1% under) actively managed fund में closet indexing suggest — manager enough active bets नहीं ले रहा fees justify करने के लिए। Ideal active manager tracking error: meaningful alpha generate करने के लिए high enough, positive information ratio maintain करने के लिए low enough।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Tracking error active risk की volatility है — portfolio और benchmark के return difference की standard deviation। Portfolio performance benchmark से कितना deviate करती है बताता है। Index fund investors के लिए replication quality measure। Active fund investors के लिए manager benchmark से कितना aggressively depart quantify। <strong>दोनों cases में essential context — fund वो कर रहा है जो करना चाहिए या नहीं।</strong></p>

<h2>Calculation</h2>

<p><strong>Tracking Error = Standard Deviation of (Portfolio Returns - Benchmark Returns)</strong></p>

<p>हर period (monthly/weekly) return difference (active return) calculate, series standard deviation compute, annualize। Monthly active returns standard deviation 0.87%: annualized approximately 0.87% × Square Root of 12 = 3.0%।</p>

<p>3% tracking error means: किसी year fund return benchmark से roughly 3 percentage points differ likely। 5% chance difference 6 points exceed (two standard deviations)।</p>

<h2>Index Fund Quality</h2>

<p>Passive investors के लिए tracking error primary quality metric। दो S&P 500 index funds choose करना हो — lower tracking error ज़्यादा faithfully benchmark replicate। Decades compounding में 0.05% और 0.20% difference meaningful wealth differences।</p>

<p>Index funds tracking error sources: expense ratio (constant drag), rebalancing transaction costs, cash drag, sampling, dividend reinvestment timing। Securities lending income partially offset कर सकती है।</p>

<h2>Active Management Tracking Error Budget</h2>

<p>Active managers tracking error "budget" operate — कितना active risk लेने willing। Budget reflects investment philosophy, client expectations, risk constraints। 4% tracking error budget: enough deviation meaningful alpha generate, bad picks devastate relative performance नहीं।</p>

<p>Too little tracking error: expensive index fund essentially। Too much: highly variable performance, large outperformance/underperformance swings। Optimal: information ratio maximize — enough active risk alpha generate, unreliable न हो।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors US ETFs (Vested, INDMoney through) evaluate करते समय tracking error check करना essential — especially low-cost index funds compare। India-listed Nifty 50 ETFs और US S&P 500 ETFs दोनों tracking error compare। Brefyr fundamental data fund positioning और benchmark deviations context provide।</p>
`,
};
