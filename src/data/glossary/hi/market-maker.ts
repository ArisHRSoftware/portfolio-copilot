import type { GlossaryTerm } from "../../types";

export const termMarketMakerHi: GlossaryTerm = {
  slug: "market-maker",
  term: "Market Maker (मार्केट मेकर)",
  title: "Market Maker — Stock Market को Liquid रखने वाली Firms",
  shortDefinition:
    "Market maker वह firm या individual है जो continuously किसी security की buy price (bid) और sell price (ask) दोनों quote करता है, bid-ask spread से profit कमाता है और market में liquidity provide करता है।",
  metaDescription:
    "Market maker क्या है? जानें market makers कैसे liquidity provide करते हैं, spread कमाते हैं, inventory risk manage करते हैं, और payment for order flow कैसे काम करता है।",
  wordCount: 460,
  category: "Market Structure",
  tags: ["market-maker", "liquidity", "market-structure", "order-flow", "spread"],
  relatedSlugs: ["bid-ask-spread", "dark-pool", "market-order", "block-trade"],
  relatedTerms: ["bid-ask-spread", "dark-pool", "market-order", "block-trade"],
  faq: [
    {
      question: "Market makers पैसे कैसे कमाते हैं?",
      answer:
        "Market makers हर round trip पर bid-ask spread earn करते हैं। $49.98 (bid) पर buy और $50.00 (ask) पर sell = $0.02/share profit। Millions of shares daily पर यह significant revenue है। लेकिन inventory risk भी है — stock accumulated position के against move करे तो spread से ज़्यादा loss हो सकता है। Sophisticated risk management, hedging, और sub-microsecond execution essential है profitability के लिए। Citadel Securities और Virtu Financial जैसे बड़े market makers retail brokers से payment for order flow भी earn करते हैं।",
    },
    {
      question: "Payment for order flow (PFOF) क्या है?",
      answer:
        "PFOF में wholesale market makers retail brokers (Robinhood, Schwab) को pay करते हैं उनके customers के orders execute करने के लिए। Market maker benefit करता है क्योंकि retail order flow 'uninformed' होता है — retail traders के पास typically insider information नहीं होती। Exchange में market maker usually slight price improvement देता है NBBO से better। SEC ने PFOF scrutinize किया है क्योंकि conflict of interest है — broker highest-paying market maker को route करता है, best execution वाले venue को नहीं।",
    },
    {
      question: "India में market makers कैसे काम करते हैं?",
      answer:
        "NSE पर market makers specific securities में two-sided quotes maintain करते हैं, especially less liquid stocks और ETFs में। SEBI regulations under करते हैं। BSE का market making scheme SME platform पर mandatory है। US market जैसे Designated Market Makers (DMMs) NYSE specific हैं — Indian market structure slightly different है लेकिन core concept same है: liquidity ensure करना।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Market makers वे firms हैं जो हर stock trade के बीच में खड़ी होती हैं — continuously sellers से buy और buyers को sell करने को तैयार। बिना market makers के, आपको exact same time पर exactly वही stock buy करने वाला ढूँढना पड़ता जो आप sell करना चाहते हैं। Market makers इस coordination problem eliminate करते हैं।</p>

<p>उनका compensation <a href="/glossary/bid-ask-spread">bid-ask spread</a> है — bid पर buy, ask पर sell, difference earn। Heavily traded stock पर 1-cent spread trivial लगता है, लेकिन millions of shares daily across thousands of stocks पर revenue enormous है। सबसे बड़े electronic market makers US equity trading volume का 25-40% handle करते हैं।</p>

<h2>Market Makers कैसे Operate करते हैं</h2>

<p>Market maker continuously bid (buy willingness) और ask (sell willingness) post करता है। Quotes price और size (shares available) specify करती हैं। Buy orders ज़्यादा आएँ तो long position build होती है, sell orders dominate करें तो short position। दोनों risk create करते हैं।</p>

<p>Modern market makers risk manage करते हैं:</p>

<ul>
<li><strong>Dynamic quoting:</strong> बहुत shares accumulate हो जाएँ (long exposure) तो bid lower करते हैं further buying discourage करने के लिए, ask lower करते हैं selling encourage करने के लिए।</li>
<li><strong>Hedging:</strong> Directional exposure correlated instruments से hedge करते हैं — ETFs, options, futures। JPMorgan में 100,000 shares long? Financial sector ETF short करें।</li>
<li><strong>Speed:</strong> Sub-microsecond latency से quotes update करते हैं। Exchange data centers में co-located servers में hundreds of millions invest।</li>
<li><strong>Statistical models:</strong> Quantitative models near-term price moves predict करते हैं, quotes accordingly adjust होती हैं।</li>
</ul>

<h2>Designated vs. Electronic Market Makers</h2>

<p>NYSE अभी भी <strong>Designated Market Makers (DMMs)</strong> use करता है — specific stocks assigned, continuous two-sided quotes maintain करने, orderly openings/closings facilitate करने की obligation। Exchange privileges और information advantages मिलते हैं।</p>

<p>Nasdaq और electronic venues पर market making voluntary है। Multiple market makers का competition liquid stocks पर spreads minimum tick तक drive करता है।</p>

<h2>Wholesale Market Makers और Retail Flow</h2>

<p>Off-exchange parallel ecosystem exists करता है। <strong>Wholesale market makers</strong> जैसे Citadel Securities और Virtu Financial retail broker order flow internalize करते हैं। Robinhood या Schwab से <a href="/glossary/market-order">market order</a> place करने पर order public exchange के बजाय इन firms को route होता है।</p>

<p>Wholesale market maker order अपनी inventory से fill करता है, usually slight price improvement देता है NBBO से। Retail broker को payment मिलता है — यह <strong>payment for order flow (PFOF)</strong> है। Profitable है क्योंकि retail orders statistically less informed हैं।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में NSE/BSE पर SEBI-regulated market making scheme है। SME segment में market making mandatory है liquid trading ensure करने के लिए। लेकिन US market का PFOF model India में नहीं है — SEBI ने different approach लिया है।</p>

<p>Indian investors जो Vested या INDMoney से US stocks trade करते हैं, उनके orders likely PFOF ecosystem से route होते हैं। Price improvement usually मिलता है, लेकिन execution quality awareness important है। Brefyr पर company analysis करें और समझें कि trade execution quality stock liquidity ecosystem पर depend करती है।</p>
`,
};
