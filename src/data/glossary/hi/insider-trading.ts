import type { GlossaryTerm } from "../../types";

export const termInsiderTradingHi: GlossaryTerm = {
  slug: "insider-trading",
  term: "Insider Trading (इनसाइडर ट्रेडिंग)",
  title: "Insider Trading — Legal vs Illegal, और Indian Investors को क्या जानना चाहिए",
  shortDefinition:
    "Insider trading तब होती है जब company insiders (officers, directors, 10%+ shareholders) company stock buy या sell करते हैं। Legal insider trading SEC को disclose की जाती है; illegal insider trading non-public information पर based होती है।",
  metaDescription:
    "Insider trading क्या है? Legal vs illegal insider trading समझें, Form 4 disclosures कैसे पढ़ें, और भारतीय निवेशक insider buying/selling signals कैसे use करें।",
  wordCount: 700,
  category: "Trading",
  tags: ["insider-trading", "form-4", "insider-buying", "insider-selling", "sec"],
  relatedSlugs: ["form-4", "beneficial-owner", "10-k-filing", "sec-edgar"],
  relatedTerms: ["form-4", "beneficial-owner", "10-k-filing", "sec-edgar"],
  faq: [
    {
      question: "Insider trading legal कब होती है?",
      answer:
        "Legal insider trading तब होती है जब company insiders SEC rules follow करके stocks buy/sell करते हैं और Form 4 through SEC को disclose करते हैं। CEO अपनी company का stock खरीद सकता है — बस उसे 2 business days में Form 4 file करनी होती है। Legal insider trading market के लिए healthy है क्योंकि यह insiders के confidence level बताती है।",
    },
    {
      question: "Insider trading illegal कब होती है?",
      answer:
        "Illegal insider trading तब होती है जब कोई material non-public information (MNPI) के basis पर trade करता है। Example: CFO को पता है कि company next quarter loss report करेगी, और वो पहले अपने shares बेच देता है। SEC investigation और criminal charges file कर सकता है — jail time possible है।",
    },
    {
      question: "India और US में insider trading rules कैसे different हैं?",
      answer:
        "India में SEBI PIT (Prohibition of Insider Trading) Regulations govern करते हैं, US में Securities Exchange Act Section 10(b)। दोनों में illegal insider trading पर criminal penalties हैं। लेकिन US system ज़्यादा transparent है — Form 4 2 business days में public होती है, जबकि India में disclosures slow हो सकती हैं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Insider trading एक broad term है जो company insiders — officers, directors, और 10% से ज़्यादा shares hold करने वाले shareholders — द्वारा की गई stock trading को describe करता है। Important बात: <strong>insider trading हमेशा illegal नहीं होती</strong>। Legal और illegal insider trading में clear distinction है।</p>

<h2>Legal Insider Trading</h2>

<p>Company insiders अपनी company का stock legally buy और sell कर सकते हैं — बस उन्हें SEC rules follow करने होते हैं:</p>

<ul>
<li>Trade के 2 business days के अंदर <strong>Form 4</strong> file करनी होती है</li>
<li>Material non-public information पर based trade नहीं हो सकती</li>
<li>Company की trading window policies follow करनी होती हैं (usually earnings announcement के आसपास blackout period)</li>
<li>कई executives <strong>10b5-1 plans</strong> use करते हैं — pre-scheduled trading plans जो insider trading accusations से protect करते हैं</li>
</ul>

<p>Legal insider trading investors के लिए valuable signal है। जब CEO open market से $2 million worth stock खरीदता है, वो literally अपना पैसा company पर bet कर रहा है।</p>

<h2>Illegal Insider Trading</h2>

<p>Illegal insider trading तब होती है जब कोई <strong>material non-public information (MNPI)</strong> के basis पर trade करता है या ऐसी information किसी और को देता है (tipping)।</p>

<p><strong>Examples:</strong></p>
<ul>
<li>CFO को पता है company next week acquisition announce करेगी → पहले stock खरीदता है</li>
<li>Lawyer client की merger deal जानता है → अपने भाई को बताता है → भाई stock खरीदता है</li>
<li>Employee earnings results leak करता है → friend उस information पर trade करता है</li>
</ul>

<p>SEC actively illegal insider trading investigate करता है। Penalties severe हैं — fines, disgorgement of profits, और <strong>prison time</strong>। Raj Rajaratnam (Galleon Group) को 2011 में 11 years jail हुई थी insider trading के लिए।</p>

<h2>Insider Buying Signals</h2>

<p>Research consistently दिखाता है कि insider buying एक reliable bullish signal है:</p>

<ul>
<li><strong>Cluster buying</strong> — 3+ insiders same period में buy करते हैं → strongest signal</li>
<li><strong>CEO/CFO purchase</strong> — C-suite executives को सबसे ज़्यादा information access होती है</li>
<li><strong>Large purchases</strong> — Annual salary का 50%+ invest करना serious conviction दिखाता है</li>
<li><strong>Buying during dips</strong> — Stock price down होने पर insider buying confidence signal है</li>
</ul>

<h2>Insider Selling Signals</h2>

<p>Insider selling interpret करना ज़्यादा nuanced है:</p>

<ul>
<li><strong>Not always bearish</strong> — Executives diversification, tax payments, personal expenses के लिए sell करते हैं</li>
<li><strong>10b5-1 plan sales</strong> — Pre-scheduled हैं, current view reflect नहीं करते</li>
<li><strong>Red flags:</strong> Multiple insiders simultaneously selling, unusual volume, timing right before bad news</li>
</ul>

<h2>भारतीय निवेशकों के लिए Insider Trading</h2>

<p>India में SEBI PIT Regulations insider trading govern करती हैं। लेकिन US system कई मायनों में ज़्यादा transparent है:</p>

<ul>
<li><strong>Speed:</strong> US Form 4 2 business days में file और public। India में disclosures slow हो सकती हैं।</li>
<li><strong>Access:</strong> EDGAR पर सब free है। India में insider trading data fragmented है।</li>
<li><strong>Coverage:</strong> Brefyr हर Form 4 को automatically process करता है।</li>
</ul>

<p>अगर आप Vested, INDMoney, या Groww से US stocks hold करते हैं, insider activity monitor करना critical है। Brefyr पर <strong>/insider-buying</strong> और <strong>/insider-selling</strong> pages पर latest Form 4 filings AI-scored format में available हैं। High significance insider trades alerts trigger करती हैं।</p>

<p>Indian market के Sensex/Nifty stocks में insider trading track करना harder है compared to US EDGAR system। यही US market transparency का advantage है — information सबके लिए equally और quickly available है।</p>
`,
};
