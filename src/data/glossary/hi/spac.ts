import type { GlossaryTerm } from "../../types";

export const termSpacHi: GlossaryTerm = {
  slug: "spac",
  term: "SPAC (Special Purpose Acquisition Company / स्पैक)",
  title: "SPAC — Blank-Check Companies जो Private Firms को Public बनाती हैं",
  shortDefinition:
    "SPAC (Special Purpose Acquisition Company) एक shell company है जो IPO से पैसा raise करती है एक private company acquire करने के sole purpose से, traditional IPO process बिना उसे public बनाती है।",
  metaDescription:
    "SPAC क्या है? Special Purpose Acquisition Companies कैसे काम करती हैं, SPAC lifecycle IPO से de-SPAC merger तक, investor protections, redemption rights, और SPAC transactions govern करने वाली SEC filings।",
  wordCount: 490,
  category: "Market Structure",
  tags: ["spac", "blank-check", "ipo", "merger", "de-spac", "sec-filings"],
  relatedSlugs: ["ipo", "reverse-merger", "sec-edgar", "8k-filing", "shelf-registration"],
  relatedTerms: ["ipo", "reverse-merger", "sec-edgar", "8k-filing", "shelf-registration"],
  faq: [
    {
      question: "SPAC company acquire नहीं करे तो पैसे का क्या होता है?",
      answer:
        "SPAC deadline (typically 18-24 months) में acquisition complete नहीं करे तो liquidate होना ज़रूरी — trust funds shareholders को return plus interest। Trust protection key feature — पैसा trust account (US Treasury bills) में safe रहता है deal complete या liquidation तक। Downside risk roughly IPO price ($10/share) minus trust interest तक limited — de-SPAC merger vote से पहले hold करें तो।",
    },
    {
      question: "De-SPAC transaction क्या है?",
      answer:
        "De-SPAC = SPAC और target company का merger। SPAC management acquisition identify और negotiate करे, shareholders vote करें deal पर। Approve → target company SPAC में merge, ticker change → formerly private company publicly traded। Extensive SEC filings — proxy statements, S-4 registration, 8-K announcements। Deal नहीं चाहते shareholders trust value (~$10/share + interest) पर redeem कर सकते हैं vote result से independent।",
    },
    {
      question: "बहुत सी SPACs merger के बाद poorly perform क्यों करती हैं?",
      answer:
        "कई factors: (1) SPAC sponsors को deal complete incentive (20% shares free — 'promote')। (2) Targets अक्सर early-stage optimistic projections जो materialize नहीं। (3) High dilution sponsor promote, warrants, PIPE financing से। (4) बहुत से targets traditional IPO qualify नहीं कर पाते financial profile वजह। Research: average SPAC merger बाद 2 years market significantly underperform।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>SPAC publicly traded company है जिसकी कोई commercial operations नहीं। एक purpose: investors से IPO through पैसा raise करना और फिर private company acquire करके उसे merger through public बनाना — traditional IPO process बिना। "Blank-check company" भी कहते हैं क्योंकि investors management team ("sponsors") को पैसा trust करके देते हैं good acquisition find करने के लिए।</p>

<h2>SPAC Lifecycle</h2>

<ol>
<li><strong>SPAC IPO:</strong> Sponsors SEC में S-1 registration statement file करते हैं और IPO conduct — typically $10/unit। हर unit usually 1 share common stock + fraction warrant (future में $11.50 पर additional shares buy right)। IPO proceeds trust account (US Treasury bills) में।</li>
<li><strong>Target search:</strong> Sponsors 18-24 months में acquisition target identify और announce। इस period SPAC shares exchange पर trade — typically ~$10 (trust value) near, unless target rumors/announcements।</li>
<li><strong>Deal announcement:</strong> Target identify → SPAC 8-K file करता है definitive agreement announce। Stock price surge या decline target reaction पर। Additional financing (PIPE deals) often arranged।</li>
<li><strong>Proxy/registration statement:</strong> Detailed proxy statement या S-4 SEC में file — target financials, deal terms, projections। SPAC process की most informative filing।</li>
<li><strong>Shareholder vote और redemptions:</strong> Shareholders merger पर vote। कोई भी shareholder shares trust value (~$10 + interest) पर redeem कर सकता है — vote for या against से independent। High redemption rates combined company cash reduce।</li>
<li><strong>De-SPAC merger:</strong> Approve → merger close, SPAC ticker change → previously private company public।</li>
</ol>

<h2>SPAC Economics और Dilution</h2>

<p>SPAC dilution समझना essential। Sponsors typically 20% "promote" receive — post-IPO shares का 20% nominal investment (अक्सर $25,000) पर। $10 IPO investor invest करे तो sponsor promote dilution बाद ~$8 value बचता है। Additional dilution warrants ($11.50 exercise) और PIPE financing (new shares at/below market price) से।</p>

<p>यह dilution structure explain करती है बहुत सी SPACs merger बाद underperform क्यों। Target fairly valued भी हो, sponsor promote + warrant dilution public shareholders की value erode। De-SPAC financial analysis proxy statement में dilution effects disclose — headline valuation अक्सर all dilutive instruments account नहीं करता।</p>

<h2>SPAC Process में SEC Filings</h2>

<ul>
<li><strong>S-1:</strong> Initial IPO registration — SPAC structure, sponsor background, trust terms।</li>
<li><strong>8-K:</strong> Deal announcement — target identification, merger terms, expected timeline।</li>
<li><strong>S-4 / Proxy Statement:</strong> Full merger details — target financials, projections, dilution analysis, risk factors। Investors evaluate deal — most important document।</li>
<li><strong>10-K / 10-Q:</strong> Merger बाद combined company regular periodic reports।</li>
<li><strong>Form 4:</strong> SPAC sponsors और target executives insider transactions — selling patterns post-merger reveal।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SPAC structure formally exist नहीं करता — SEBI ने explore किया लेकिन adopt नहीं। Indian investors US SPACs access कर सकते हैं LRS under Vested, INDMoney, Interactive Brokers through। Caution: SPAC investing complex — dilution mechanics, redemption rights, timing सब matter। Brefyr पर proxy statement और S-4 filings track करें — revenue projections, dilution tables, comparable company analysis में investment thesis या weaknesses दिखती हैं।</p>
`,
};
