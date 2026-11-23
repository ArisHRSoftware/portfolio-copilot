import type { GlossaryTerm } from "../../types";

export const termDripHi: GlossaryTerm = {
  slug: "drip",
  term: "Dividend Reinvestment Plan — DRIP (ड्रिप)",
  title: "DRIP — Dividends Automatically Reinvest करके Returns Compound करना",
  shortDefinition: "DRIP automatically cash dividends use करता है same stock या fund के additional shares purchase करने, compounding returns continuously shares increase करके investor action बिना।",
  metaDescription: "DRIP क्या है? Dividend reinvestment plans कैसे work करती हैं, compounding power, company-sponsored vs brokerage DRIPs, tax implications, और DRIP कब sense करता है।",
  wordCount: 420, category: "Investment Strategy", tags: ["drip", "dividend-reinvestment", "compounding", "income-investing", "dividend"],
  relatedSlugs: ["dividend", "dividend-yield", "compound-interest", "dollar-cost-averaging"], relatedTerms: ["dividend", "dividend-yield", "compound-interest", "dollar-cost-averaging"],
  faq: [{ question: "DRIP से reinvested dividends अभी भी taxable हैं?", answer: "हाँ। Dividends automatically reinvest होते हैं लेकिन cash receive जैसे taxable हैं। Tax bill income के लिए जो 'देखी' नहीं cash रूप में — common confusion। Reinvested dividends cost basis increase करती हैं, eventually sell पर capital gains tax reduce। Broker Form 1099-DIV report करता है।" },
  { question: "Dividends हमेशा reinvest करने चाहिए?", answer: "Accumulation phase (wealth build decades) — generally optimal, compounding maximize। Distribution phase (retirement income) — cash dividends income without selling। Stock overvalued — cash लेकर elsewhere deploy better। Tax-lot complexity record-keeping complicate कर सकती है।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>DRIP automatically cash dividends use करता है paying stock या fund के additional shares purchase करने। $100 quarterly dividend cash receive बजाय, DRIP $100 se ज़्यादा shares buy — including fractional shares — current market price पर। Reinvested dividends अपनी dividends generate, जो reinvest होकर और shares buy, compounding cycle create जो long-term returns significantly amplify।</p>

<h2>DRIPs कैसे Work करती हैं</h2>
<p><strong>Brokerage DRIPs:</strong> Most brokerages free automatic dividend reinvestment offer। Specific holdings या entire portfolio enable। Fractional shares supported।</p>
<p><strong>Company-sponsored DRIPs:</strong> कुछ companies direct stock purchase और reinvestment plans — sometimes 1-5% discount market price पर। Transfer agent through enrollment।</p>

<h2>Compounding Power</h2>
<p>$10,000 investment, 3% yield, 7% price appreciation। 30 years without reinvestment: ~$76,000 price appreciation + $33,000 dividends = ~$109,000। With reinvestment: $160,000+। Difference $50,000+ = reinvested dividends alone compounding return।</p>
<p>Historically dividend reinvestment S&P 500 total return का ~40-50% account। Cash dividends लेने वाले approximately half total return capture।</p>

<h2>Tax Implications</h2>
<p>Reinvested dividends taxable year of payment — IRS cash dividends identical treat। "Phantom income" — tax owe on income not received as cash। हर reinvested dividend new tax lot create — cost basis और holding period। Modern brokerages automatic track और Form 1099-B report।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में mutual fund "Growth option" DRIP equivalent — dividends automatically reinvest NAV में, separate units create नहीं। Direct equity investments में Indian brokers DRIP facility offer नहीं करते — dividends cash में credited, manually reinvest करना होता है।</p>

<p>US stocks hold करने वाले Indian investors DRIP enable कर सकते हैं US brokerage accounts पर (Interactive Brokers, Charles Schwab)। Indian platforms (Vested, INDMoney) भी DRIP feature offer करती हैं। Important consideration: US dividends पर withholding tax (15% DTAA) deducted before reinvestment — effective reinvestment amount reduced। $100 dividend = $85 reinvested after withholding।</p>

<p>DRIP + DCA combination most powerful: monthly SIP for new investments + DRIP for existing holdings = maximum compounding। Brefyr dividend data SEC filings से — 8-K declarations, cash flow statements — DRIP decision support।</p>
`,
};
