import type { GlossaryTerm } from "../types";

export const termCompoundInterest: GlossaryTerm = {
  slug: "compound-interest",
  term: "Compound Interest",
  title: "Compound Interest — The Force That Makes Money Grow Exponentially Over Time",
  shortDefinition: "Compound interest is the process of earning returns not only on your original investment (principal) but also on the accumulated returns from prior periods, creating exponential growth that accelerates over time — often called the most powerful force in investing.",
  metaDescription: "What is compound interest? How compounding works, the Rule of 72, why starting early matters enormously, compounding in stocks vs bonds, and real-world examples.",
  wordCount: 850, category: "Investment Strategy", tags: ["compound-interest", "compounding", "time-value-of-money", "long-term-investing", "exponential-growth"],
  relatedSlugs: ["drip", "dollar-cost-averaging", "index-fund", "asset-allocation"], relatedTerms: ["drip", "dollar-cost-averaging", "index-fund", "asset-allocation"],
  faq: [{ question: "What is the Rule of 72?", answer: "The Rule of 72 is a quick mental math shortcut for estimating how long it takes for an investment to double. Divide 72 by the annual return rate: at 8% returns, your money doubles in approximately 9 years (72 / 8 = 9). At 6%, it takes 12 years. At 10%, it takes 7.2 years. This simple formula illustrates why even small differences in return rates matter enormously over time — the difference between 6% and 8% means your money doubles 3 years earlier each cycle, creating dramatically different outcomes over a 30-40 year investment horizon." },
  { question: "Why do people say time is the most important factor in investing?", answer: "Because compound interest is exponential — the gains accelerate over time. In the first decade of investing at 8%, $10,000 grows to $21,600 (a $11,600 gain). In the second decade, it grows to $46,600 (a $25,000 gain — more than double the first decade). In the third decade, it grows to $100,600 (a $54,000 gain — nearly five times the first decade). The same 8% return produces dramatically larger dollar gains as the base grows. This is why starting at age 25 instead of 35 — even with the same contribution amount — can result in a retirement portfolio that is 50-100% larger." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Compound interest is the mathematical phenomenon where investment returns generate their own returns, creating a snowball effect that accelerates over time. Albert Einstein (apocryphally) called it "the eighth wonder of the world," and Warren Buffett attributes the majority of his wealth to decades of compounding. The concept is simple: when you earn 8% on $10,000, you have $10,800 after year one. In year two, you earn 8% on $10,800 (not just the original $10,000), giving you $11,664. Each year, the base amount grows, and the same percentage return produces a larger dollar gain. Over decades, this exponential growth transforms modest regular investments into substantial wealth.</p>

<h2 id="simple-vs-compound">Simple Interest vs Compound Interest</h2>

<p><strong>Simple interest</strong> is calculated only on the original principal. At 8% simple interest, $10,000 earns $800 per year, every year. After 30 years: $10,000 + (30 x $800) = $34,000.</p>

<p><strong>Compound interest</strong> is calculated on the principal plus accumulated interest. At 8% compound interest, $10,000 grows to $100,627 after 30 years — nearly three times the simple interest result. The difference — $66,627 — is the interest earned on previously earned interest. This gap widens dramatically with time: after 50 years, the compound amount is $469,016 versus $50,000 for simple interest.</p>

<h2 id="compounding-frequency">Compounding Frequency</h2>

<p>The more frequently interest is compounded, the faster the growth. Daily compounding produces slightly more than monthly, which produces slightly more than annual. For stock market investments, compounding is effectively continuous — returns accrue with every market day, and reinvested dividends compound quarterly. For bonds, compounding typically occurs semi-annually (matching coupon payment schedules). For savings accounts, daily compounding is standard. In practice, the difference between monthly and daily compounding is small — the far more important factor is the rate of return and the length of time invested.</p>

<h2 id="time-advantage">The Overwhelming Advantage of Starting Early</h2>

<p>Consider two investors saving for retirement at age 65 with 8% annual returns:</p>

<p><strong>Investor A</strong> starts at age 25, investing $5,000 per year for 10 years (total investment: $50,000), then stops contributing but leaves the money invested. At age 65, she has approximately $787,000.</p>

<p><strong>Investor B</strong> starts at age 35, investing $5,000 per year for 30 years (total investment: $150,000). At age 65, he has approximately $611,000.</p>

<p>Investor A invested one-third as much money but ended up with more, solely because she started 10 years earlier. The extra decade of compounding — during which her entire balance was growing at 8% — more than compensated for three times more contributions. This example illustrates why financial advisors universally emphasize starting to invest as early as possible, even with small amounts.</p>

<h2 id="compounding-in-stocks">Compounding in the Stock Market</h2>

<p>In the stock market, compounding occurs through two channels: price appreciation (the stock price grows, and that growth compounds as the base increases) and reinvested dividends (dividends buy more shares, which generate more dividends). Historically, the S&P 500 has returned approximately 10% annually (before inflation), which means money invested in a broad stock index has doubled approximately every 7 years. An investor who started with $10,000 at age 25 and added nothing would have approximately $450,000 by age 65 — just from compounding at the historical average rate.</p>

<h2 id="enemies-of-compounding">Enemies of Compounding</h2>

<p><strong>Fees.</strong> A 1% annual fee reduces your effective return from 8% to 7%. Over 30 years, this 1% fee costs approximately 25% of your terminal wealth. This is why low-cost index funds are so powerful — they minimize the drag on compounding.</p>

<p><strong>Taxes.</strong> Capital gains taxes and dividend taxes reduce the amount available to compound. Tax-advantaged accounts (IRA, 401(k)) allow full compounding by deferring or eliminating taxes.</p>

<p><strong>Interruptions.</strong> Withdrawing money resets the compounding clock on the amount withdrawn. Selling during a downturn permanently impairs compounding because you lose the eventual recovery.</p>

<p>Brefyr helps investors understand the fundamentals behind the companies and funds that form the building blocks of their long-term compounding portfolios, providing SEC filing data that supports informed investment decisions across 7,600+ public companies.</p>
`,
};
