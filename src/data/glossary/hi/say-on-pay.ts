import type { GlossaryTerm } from "../../types";

export const termSayOnPayHi: GlossaryTerm = {
  slug: "say-on-pay",
  term: "Say-on-Pay Vote (से-ऑन-पे वोट)",
  title: "Say-on-Pay — Shareholders Executive Compensation पर कैसे Vote करते हैं",
  shortDefinition:
    "Say-on-pay vote एक advisory shareholder vote है company के named executive officers की compensation पर — Dodd-Frank Act द्वारा कम से कम हर तीन साल required — shareholders को executive pay practices approve/disapprove करने का formal channel।",
  metaDescription:
    "Say-on-pay vote क्या है? Advisory compensation votes कैसे काम करते हैं, fail होने पर क्या होता है, proxy advisors का influence, और SEC filings में say-on-pay results कहाँ मिलते हैं।",
  wordCount: 430,
  category: "Regulatory & Compliance",
  tags: ["say-on-pay", "executive-compensation", "shareholder-vote", "corporate-governance", "dodd-frank"],
  relatedSlugs: ["executive-compensation", "dodd-frank", "golden-parachute", "proxy-statement", "voting-rights"],
  relatedTerms: ["executive-compensation", "dodd-frank", "golden-parachute", "proxy-statement", "voting-rights"],
  faq: [
    {
      question: "Say-on-pay vote fail हो जाए तो क्या होता है?",
      answer:
        "Vote advisory है, इसलिए legally company को कुछ बदलना required नहीं। लेकिन practice में companies failed votes seriously लेती हैं। Failure (50% से कम support) typically trigger करता है: major shareholders से board engagement, compensation program review/revision, enhanced proxy disclosure, कभी-कभी compensation committee chair replacement। Proxy advisory firms say-on-pay results track करती हैं।",
    },
    {
      question: "Say-on-pay votes कितनी बार fail होते हैं?",
      answer:
        "Outright failures (50% से नीचे) relatively uncommon हैं — roughly 2-3% S&P 500 companies किसी given year में। लेकिन low support (50-70%) ज़्यादा common और almost equally impactful है। S&P 500 companies का average say-on-pay approval rate approximately 90% है — 80% से नीचे yellow flag और 70% से नीचे red flag।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Say-on-pay Dodd-Frank Act Section 951 द्वारा mandated advisory shareholder vote है executive compensation पर। कम से कम हर तीन साल — और ज़्यादातर companies में annually — shareholders proxy statement के CD&A और compensation tables में disclose named executive officers (NEOs) की compensation approve/disapprove करते हैं। <strong>Vote non-binding है — majority against vote करे भी, company legally बदलने को मजबूर नहीं। लेकिन signal powerful है।</strong></p>

<h2>Say-on-Pay कैसे काम करता है</h2>

<p><strong>Frequency vote।</strong> Dodd-Frank separate vote भी require करता है (हर six years में एक बार) कि say-on-pay vote कितनी बार हो: annually, biennially, triennially। Overwhelming majority companies annual adopt करती हैं।</p>

<p><strong>Shareholders क्या vote कर रहे हैं।</strong> Resolution NEOs — typically CEO, CFO, और तीन highest-paid executives — की compensation approve करने को कहता है। पूरे compensation program पर vote — base salary, annual bonuses, equity grants, retirement benefits, perquisites, severance।</p>

<p><strong>Proxy advisor influence।</strong> ISS और Glass Lewis dominant proxy advisory firms हैं। ISS की adverse recommendation typically say-on-pay support 20-25 percentage points reduce करती है।</p>

<h2>Shareholder Opposition क्या Drive करती है</h2>

<p><strong>Pay-performance disconnect।</strong> Executive pay और company performance में misalignment — CEO को large bonus मिला जबकि stock price decline हुआ।</p>

<p><strong>Excessive quantum।</strong> Compensation levels disproportionate to company size या peer group — mid-cap company CEO $30 million pay करे जबकि peer median $10 million।</p>

<p><strong>Poor pay practices।</strong> Single-trigger change-of-control payments, tax gross-ups, underwater stock options repricing, lack of clawback provisions।</p>

<h2>Board कैसे Respond करता है</h2>

<p>70-80% से कम support पाने वाली companies typically shareholder outreach करती हैं — compensation committee chair और lead independent director largest institutional shareholders से मिलते हैं। Common responses: performance metrics revise, clawback provisions add, problematic pay practices eliminate।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI regulations भी executive compensation disclosure और shareholder approval require करती हैं। US companies में say-on-pay approval rates governance quality indicator हैं। Low approval rates signal कर सकती हैं कि management shareholder interests align नहीं कर रहा।</p>

<p>Brefyr proxy statements और vote result filings process करता है — say-on-pay approval rates track और governance concerns identify करने में मदद।</p>
`,
};
