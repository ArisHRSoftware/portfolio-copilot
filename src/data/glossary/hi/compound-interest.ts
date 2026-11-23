import type { GlossaryTerm } from "../../types";

export const termCompoundInterestHi: GlossaryTerm = {
  slug: "compound-interest",
  term: "Compound Interest (चक्रवृद्धि ब्याज)",
  title: "Compound Interest — वो Force जो Money को Exponentially Grow करती है Time के साथ",
  shortDefinition:
    "Compound interest वो process है जिसमें returns सिर्फ original investment (principal) पर नहीं बल्कि prior periods के accumulated returns पर भी earn होते हैं, exponential growth create करता है जो time के साथ accelerate होती है।",
  metaDescription:
    "Compound interest क्या है? Compounding कैसे work करता है, Rule of 72, जल्दी start करना क्यों enormously matter करता है, stocks vs bonds में compounding, और real-world examples।",
  wordCount: 440,
  category: "Investment Strategy",
  tags: ["compound-interest", "compounding", "time-value-of-money", "long-term-investing", "exponential-growth"],
  relatedSlugs: ["drip", "dollar-cost-averaging", "index-fund", "asset-allocation"],
  relatedTerms: ["drip", "dollar-cost-averaging", "index-fund", "asset-allocation"],
  faq: [
    {
      question: "Rule of 72 क्या है?",
      answer:
        "Rule of 72 quick mental math shortcut है estimate करने investment double होने में कितना time लगता है। 72 divide करें annual return rate से: 8% returns पर money approximately 9 years में double (72/8=9)। 6% पर 12 years। 10% पर 7.2 years। Small differences return rates में enormously matter करती हैं long term — 6% और 8% difference मतलब money 3 years पहले double हर cycle में।",
    },
    {
      question: "लोग कहते हैं time investing में सबसे important factor क्यों है?",
      answer:
        "Compound interest exponential है — gains time के साथ accelerate होते हैं। 8% पर $10,000 पहले decade में $21,600 ($11,600 gain)। दूसरे decade में $46,600 ($25,000 gain — पहले decade से double+)। तीसरे decade में $100,600 ($54,000 gain)। Same 8% return dramatically larger dollar gains produce करता है base grow होने पर। इसलिए 25 पर start करना 35 की बजाय — same contribution से — 50-100% larger retirement portfolio result कर सकता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Compound interest mathematical phenomenon है जहाँ investment returns अपने returns generate करते हैं, snowball effect create करता है जो time के साथ accelerate होता है। Warren Buffett अपनी wealth majority decades of compounding attribute करते हैं। Concept simple है: 8% earn करें $10,000 पर, year one के बाद $10,800। Year two में 8% earn $10,800 पर (सिर्फ $10,000 नहीं), $11,664। हर year base amount grows, same percentage larger dollar gain produce करता है।</p>

<h2>Simple vs Compound Interest</h2>

<p><strong>Simple interest:</strong> सिर्फ original principal पर calculate। 8% simple interest, $10,000 earn $800 per year। 30 years बाद: $34,000।</p>

<p><strong>Compound interest:</strong> Principal plus accumulated interest पर। 8% compound interest, $10,000 grows to $100,627 after 30 years — nearly तीन गुना simple interest result। 50 years बाद compound amount $469,016 vs simple $50,000।</p>

<h2>जल्दी Start करने का Overwhelming Advantage</h2>

<p>दो investors, retirement age 65, 8% annual returns:</p>

<p><strong>Investor A:</strong> 25 पर start, $5,000/year 10 years (total: $50,000), फिर stop। Age 65 पर approximately $787,000।</p>

<p><strong>Investor B:</strong> 35 पर start, $5,000/year 30 years (total: $150,000)। Age 65 पर approximately $611,000।</p>

<p>Investor A ने एक-तिहाई money invest किया लेकिन ज़्यादा end up किया, solely 10 years पहले start करने के कारण।</p>

<h2>Compounding के दुश्मन</h2>

<p><strong>Fees:</strong> 1% annual fee effective return 8% से 7% reduce करती है। 30 years में approximately 25% terminal wealth cost।</p>

<p><strong>Taxes:</strong> Capital gains taxes compounding available amount reduce करती हैं। Tax-advantaged accounts (India में PPF, NPS, ELSS; US में IRA, 401(k)) full compounding allow करते हैं।</p>

<p><strong>Interruptions:</strong> Money withdraw करना withdrawn amount पर compounding clock reset करता है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में compounding concept well-understood है — PPF (7.1% compounded annually), FDs, और mutual fund SIPs सब compounding leverage करते हैं। Indian investors US stocks या index funds में invest करते समय compounding दो dimensions में work करता है: (1) investment returns compounding, और (2) INR depreciation मतलब USD-denominated returns INR में और बढ़ते हैं historical average 3-4% annual depreciation के कारण।</p>

<p>SIP (Systematic Investment Plan) India का dollar-cost averaging equivalent है — monthly fixed amount invest करना compounding power maximize करता है। ₹10,000 monthly SIP in US index fund (12% average return including currency benefit) 25 years में approximately ₹1.9 crore बन सकता है।</p>

<p>Brefyr investors को companies और funds understand करने में help करता है जो long-term compounding portfolios building blocks form करते हैं।</p>
`,
};
