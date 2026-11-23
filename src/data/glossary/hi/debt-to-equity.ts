import type { GlossaryTerm } from "../../types";

export const termDebtToEquityHi: GlossaryTerm = {
  slug: "debt-to-equity",
  term: "Debt-to-Equity Ratio (डेट-टू-इक्विटी रेशियो)",
  title: "Debt-to-Equity Ratio — Company की Funding कितनी Borrowing से आती है",
  shortDefinition:
    "Debt-to-equity ratio total liabilities को shareholders' equity से divide करता है — दिखाता है कि company अपनी capital relative to equity कितनी aggressively debt financing use करती है।",
  metaDescription:
    "Debt-to-equity ratio क्या है? D/E calculate करना सीखें, industry benchmarks समझें, high leverage कब dangerous है, और analysis में कैसे use करें।",
  wordCount: 480,
  category: "Financial Metrics",
  tags: ["debt-to-equity", "leverage", "financial-metrics", "balance-sheet", "solvency"],
  relatedSlugs: ["roe", "interest-coverage", "current-ratio", "cost-of-debt"],
  relatedTerms: ["roe", "interest-coverage", "current-ratio", "cost-of-debt"],
  faq: [
    {
      question: "अच्छा debt-to-equity ratio कितना होता है?",
      answer:
        "Industry पर depend करता है। ज़्यादातर non-financial companies के लिए 1.0 से नीचे D/E conservative माना जाता है। 1.0-2.0 capital-intensive industries (manufacturing, telecoms, utilities) में common है। Financial institutions routinely 5.0-10.0 या higher पर operate करती हैं क्योंकि leverage उनके business model का fundamental part है। Key यह है कि company के cash flows comfortably debt service कर सकें।",
    },
    {
      question: "Debt-to-equity stock returns कैसे affect करता है?",
      answer:
        "Moderate leverage shareholders के returns amplify करता है जब चीज़ें अच्छी चलती हैं। लेकिन leverage double-edged sword है: downturns में fixed interest payments cash consume करते हैं regardless of business performance, losses magnify करते हुए। Highly leveraged companies ज़्यादा volatile stock prices experience करती हैं और economic stress में greater bankruptcy risk face करती हैं।",
    },
    {
      question: "कुछ companies की negative equity क्यों होती है?",
      answer:
        "Accumulated losses, aggressive share buybacks, या large special dividends equity को zero से नीचे erode कर सकते हैं। Negative equity पर D/E ratio meaningless हो जाता है। Starbucks और McDonald's की negative equity रही है — financial distress नहीं बल्कि shareholders को retained earnings से ज़्यादा capital return किया। ऐसे cases में interest coverage और cash flow coverage ज़्यादा informative हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Debt-to-equity ratio financial leverage का सबसे common measure है। यह बताता है कि company की capital structure कितनी creditors vs owners द्वारा funded है। 1.0 ratio मतलब company के पास equal amounts debt और equity हैं — investors ने जो हर dollar contribute किया, lenders ने भी एक dollar contribute किया। Higher ratios borrowed money का ज़्यादा aggressive use indicate करते हैं, जो returns और risk दोनों amplify करता है।</p>

<h2>Calculation कैसे करें</h2>

<p><strong>Debt-to-Equity Ratio = Total Liabilities / Shareholders' Equity</strong></p>

<p>कुछ versions total liabilities की बजाय सिर्फ interest-bearing debt (short-term और long-term borrowings) use करते हैं। Total-liabilities version accounts payable, deferred revenue, और pension liabilities सहित सभी obligations capture करता है। Interest-bearing-debt version specifically borrowing से financial leverage पर focus करता है।</p>

<p>0.5 D/E मतलब equity के हर dollar के लिए 50 cents debt। 2.0 मतलब equity के हर dollar के लिए two dollars debt।</p>

<h2>Leverage Spectrum</h2>

<p><strong>Low leverage (D/E 0.5 से नीचे):</strong> Cash-rich technology companies और uncertain cash flows वाली businesses में common। Financial flexibility और resilience prioritize करती हैं। Trade-off: cheap debt use न करके returns table पर छोड़ सकती हैं।</p>

<p><strong>Moderate leverage (D/E 0.5-1.5):</strong> ज़्यादातर industrial और consumer companies के लिए sweet spot। Interest payments की tax deductibility का benefit लेने के लिए enough debt, लेकिन downturn में solvency threaten करने जितना नहीं।</p>

<p><strong>High leverage (D/E 2.0 से ऊपर):</strong> Utilities, telecoms, और real estate जैसी capital-intensive industries में common। Stable cash flows heavy debt loads support करते हैं। Risk: cash flows decline होने पर fixed interest payments meet करने में struggle।</p>

<h2>Industry Norms</h2>

<p>D/E ratios industries across compare करना pointless है क्योंकि fundamentally different capital structures हैं। Banks 8-12 D/E पर operate करते हैं। Utilities 1.0-2.5 पर। Technology companies अक्सर 0.1-0.5 पर। Industry within, D/E ratio relative aggressiveness reveal करता है।</p>

<h2>भारतीय निवेशकों के लिए D/E</h2>

<p>Indian investors debt-to-equity ratio Indian stocks (Nifty 50, Sensex) में बहुत use करते हैं। US stocks invest करते समय कुछ differences ध्यान रखें:</p>

<ul>
<li><strong>Share buybacks:</strong> US companies aggressively buybacks करती हैं जो equity reduce करता है और D/E inflate करता है। Apple, Microsoft जैसी companies high D/E दिखा सकती हैं buybacks की वजह से, financial distress से नहीं।</li>
<li><strong>Interest rates:</strong> US interest rates India से typically कम हैं, तो US companies same D/E पर comparatively कम interest burden face करती हैं।</li>
<li><strong>Vested/INDMoney पर screening:</strong> RBI LRS limit के तहत invest करते समय, moderate D/E (0.5-1.5) companies safer bet हैं recession-resistant portfolio build करने के लिए।</li>
</ul>

<h2>Leverage और ROE</h2>

<p>D/E ratio का DuPont framework के through ROE से direct mathematical relationship है। Equity multiplier (total assets / equity, जो total liabilities use करने पर 1 + D/E) ROE के तीन drivers में से एक है। Higher leverage multiplier बढ़ाता है, जो ROE बढ़ाता है — जब तक return on assets after-tax cost of debt exceed करता है।</p>

<p>इसलिए investors D/E check किए बिना ROE evaluate न करें। 25% ROE with D/E 3.0 — returns primarily leverage से। 20% ROE with D/E 0.3 — returns genuine operational excellence से। दूसरी company lower headline ROE के बावजूद far higher quality है।</p>

<h2>Limitations</h2>

<p>D/E ratio off-balance-sheet obligations (operating leases, purchase commitments, guarantees), pension obligations, और post-retirement benefit liabilities miss कर सकता है। Book value of equity accounting number है जो economic reality से बहुत different हो सकता है।</p>

<p>Brefyr पर SEC filings से company balance sheets leverage analysis enable करती हैं thousands of public companies across, insider trading data और AI-driven filing analysis के साथ।</p>
`,
};
