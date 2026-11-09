/**
 * Template-based filing data extraction.
 *
 * Extracts structured data from SEC filing text WITHOUT AI.
 * Used as Phase 1: filings get real summaries instantly.
 * AI analysis (Phase 2) enhances these later.
 *
 * Supports: Form 4, 8-K, 10-K, 10-Q, DEF 14A, 13F-HR, SC 13D/G
 */

// ─── 8-K Item Definitions ──────────────────────────────────────────
const EIGHT_K_ITEMS: Record<string, string> = {
  "1.01": "Entry into a Material Definitive Agreement",
  "1.02": "Termination of a Material Definitive Agreement",
  "1.03": "Bankruptcy or Receivership",
  "1.04": "Mine Safety",
  "2.01": "Completion of Acquisition or Disposition of Assets",
  "2.02": "Results of Operations and Financial Condition",
  "2.03": "Creation of a Direct Financial Obligation",
  "2.04": "Triggering Events That Accelerate or Increase a Direct Financial Obligation",
  "2.05": "Costs Associated with Exit or Disposal Activities",
  "2.06": "Material Impairments",
  "3.01": "Notice of Delisting or Failure to Satisfy Listing Standards",
  "3.02": "Unregistered Sales of Equity Securities",
  "3.03": "Material Modification to Rights of Security Holders",
  "4.01": "Changes in Registrant's Certifying Accountant",
  "4.02": "Non-Reliance on Previously Issued Financial Statements",
  "5.01": "Changes in Control of Registrant",
  "5.02": "Departure/Election of Directors or Officers",
  "5.03": "Amendments to Articles of Incorporation or Bylaws",
  "5.07": "Submission of Matters to a Vote of Security Holders",
  "7.01": "Regulation FD Disclosure",
  "8.01": "Other Events",
  "9.01": "Financial Statements and Exhibits",
};

// Items that indicate higher significance
const HIGH_SIGNIFICANCE_ITEMS = new Set([
  "1.01", "1.02", "1.03", "2.01", "2.02", "2.05", "2.06",
  "3.01", "4.01", "4.02", "5.01", "5.02",
]);

// ─── Interfaces ────────────────────────────────────────────────────

export interface TemplateExtractionResult {
  one_line_summary: string;
  significance_score: number;
  insider_data: InsiderTrade[] | null;
  has_earnings_data: boolean;
  /** Items found in 8-K filings */
  eight_k_items?: string[];
}

interface InsiderTrade {
  person: string;
  title: string;
  transaction_type: "buy" | "sell" | "grant" | "exercise" | "other";
  shares: number;
  price_per_share: number | null;
  date: string;
}

// ─── Main Extraction Function ──────────────────────────────────────

/**
 * Extract structured data from filing text using templates/regex.
 * Always returns a valid result — never throws.
 */
export function extractTemplateData(
  filingText: string,
  filingType: string,
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  const type = filingType.toUpperCase().trim();

  if (type === "4" || type.startsWith("4/")) {
    return extractFormFour(filingText, companyName, ticker, filedDate);
  }
  if (type.startsWith("8-K")) {
    return extractEightK(filingText, companyName, ticker, filedDate);
  }
  if (type.startsWith("10-K")) {
    return extractTenK(filingText, companyName, ticker, filedDate);
  }
  if (type.startsWith("10-Q")) {
    return extractTenQ(filingText, companyName, ticker, filedDate);
  }
  if (type.startsWith("DEF 14A") || type.startsWith("DEF14A")) {
    return extractProxy(companyName, ticker, filedDate);
  }
  if (type.startsWith("13F")) {
    return extractThirteenF(companyName, ticker, filedDate);
  }
  if (type.startsWith("SC 13D") || type.startsWith("SC13D")) {
    return extractSC13D(companyName, ticker, filedDate);
  }
  if (type.startsWith("SC 13G") || type.startsWith("SC13G")) {
    return extractSC13G(companyName, ticker, filedDate);
  }

  // Fallback for any other filing type
  return {
    one_line_summary: `${ticker} filed a ${filingType} with the SEC on ${formatDate(filedDate)}`,
    significance_score: 3,
    insider_data: null,
    has_earnings_data: false,
  };
}

// ─── Form 4 (Insider Trading) ──────────────────────────────────────

function extractFormFour(
  text: string,
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  const trades: InsiderTrade[] = [];

  // Try to extract insider name from the text
  // Form 4 text typically contains: "REPORTING OWNER" or "Name of Reporting Person"
  let insiderName = "An insider";
  const namePatterns = [
    /(?:reporting\s+(?:owner|person))[:\s]*([A-Za-z][A-Za-z'.,-]+(?:\s+[A-Za-z'.,-]+){1,4})/i,
    /(?:name\s+of\s+reporting\s+person)[:\s]*([A-Za-z][A-Za-z'.,-]+(?:\s+[A-Za-z'.,-]+){1,4})/i,
    /(?:filed\s+by|filer)[:\s]*([A-Za-z][A-Za-z'.,-]+(?:\s+[A-Za-z'.,-]+){1,4})/i,
  ];
  for (const pat of namePatterns) {
    const match = text.match(pat);
    if (match?.[1]) { insiderName = match[1].trim(); break; }
  }

  // Try to extract title/role
  let title = "";
  const titlePatterns = [
    /(?:relationship|title)[:\s]*((?:Chief|CEO|CFO|COO|CTO|President|Director|VP|Officer|Chairman|Secretary|Treasurer|General\s+Counsel|SVP|EVP)[^\n,;]*)/i,
    /(?:10%\s*owner|director|officer)/i,
  ];
  for (const pat of titlePatterns) {
    const match = text.match(pat);
    if (match) {
      title = match[1]?.trim() || match[0].trim();
      break;
    }
  }

  // Try to extract transaction details
  let transactionType: "buy" | "sell" | "grant" | "exercise" | "other" = "other";
  let totalShares = 0;
  let pricePerShare: number | null = null;

  // Look for transaction codes: P = purchase, S = sale, A = grant, M = exercise
  const codeMatch = text.match(/transaction\s+code[:\s]*([PSAMJGCDF])/i);
  if (codeMatch) {
    const code = codeMatch[1].toUpperCase();
    if (code === "P") transactionType = "buy";
    else if (code === "S") transactionType = "sell";
    else if (code === "A") transactionType = "grant";
    else if (code === "M") transactionType = "exercise";
  } else {
    // Fallback: look for keywords
    if (/\b(?:purchase|acquired|bought)\b/i.test(text)) transactionType = "buy";
    else if (/\b(?:sale|sold|disposed)\b/i.test(text)) transactionType = "sell";
    else if (/\b(?:grant|awarded)\b/i.test(text)) transactionType = "grant";
    else if (/\b(?:exercis)/i.test(text)) transactionType = "exercise";
  }

  // Extract share count — look for numbers near "shares"
  const sharesPatterns = [
    /(\d[\d,]*)\s+(?:shares?\s+)?(?:of\s+common\s+stock\s+)?(?:acquired|purchased|sold|disposed|granted|exercised)/i,
    /(?:number\s+of\s+(?:derivative\s+)?(?:securities|shares)[^:]*)[:\s]*(\d[\d,]*)/i,
    /(?:amount\s+of\s+securities)[^:]*[:\s]*(\d[\d,]*)/i,
  ];
  for (const pat of sharesPatterns) {
    const match = text.match(pat);
    if (match?.[1]) {
      totalShares = parseInt(match[1].replace(/,/g, ""), 10);
      if (totalShares > 0) break;
    }
  }

  // Extract price
  const pricePatterns = [
    /(?:price\s+of\s+(?:derivative\s+)?(?:securities|shares)|price\s+per\s+share|exercise\s+price)[^$\d]*\$?([\d,.]+)/i,
    /\$\s*([\d,.]+)\s*(?:per\s+share)/i,
  ];
  for (const pat of pricePatterns) {
    const match = text.match(pat);
    if (match?.[1]) {
      pricePerShare = parseFloat(match[1].replace(/,/g, ""));
      if (!isNaN(pricePerShare) && pricePerShare > 0) break;
      pricePerShare = null;
    }
  }

  if (totalShares > 0 || insiderName !== "An insider") {
    trades.push({
      person: insiderName,
      title: title || "Insider",
      transaction_type: transactionType,
      shares: totalShares,
      price_per_share: pricePerShare,
      date: filedDate.slice(0, 10),
    });
  }

  // Build summary
  const txLabel = {
    buy: "purchased", sell: "sold", grant: "was granted",
    exercise: "exercised options for", other: "reported a transaction involving",
  }[transactionType];

  let summary: string;
  if (totalShares > 0 && pricePerShare) {
    const total = totalShares * pricePerShare;
    summary = `${insiderName}${title ? ` (${title})` : ""} ${txLabel} ${totalShares.toLocaleString()} shares at $${pricePerShare.toFixed(2)} ($${formatMoney(total)})`;
  } else if (totalShares > 0) {
    summary = `${insiderName}${title ? ` (${title})` : ""} ${txLabel} ${totalShares.toLocaleString()} shares of ${ticker}`;
  } else {
    summary = `Insider transaction filed for ${companyName} (${ticker})`;
  }

  // Significance: based on transaction value
  let score = 2; // routine
  if (totalShares > 0 && pricePerShare) {
    const value = totalShares * pricePerShare;
    if (value >= 10_000_000) score = 7;
    else if (value >= 1_000_000) score = 5;
    else if (value >= 100_000) score = 4;
    else score = 2;
  }

  return {
    one_line_summary: summary.slice(0, 150),
    significance_score: score,
    insider_data: trades.length > 0 ? trades : null,
    has_earnings_data: false,
  };
}

// ─── 8-K (Current Events) ─────────────────────────────────────────

function extractEightK(
  text: string,
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  const items: string[] = [];

  // Find "Item X.XX" patterns in the text
  const itemRegex = /Item\s+(\d\.\d{2})/gi;
  const seen = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(text)) !== null) {
    const itemNum = match[1];
    if (!seen.has(itemNum) && EIGHT_K_ITEMS[itemNum]) {
      seen.add(itemNum);
      items.push(itemNum);
    }
  }

  // Build summary from items
  let summary: string;
  let score = 3;
  let hasEarnings = false;

  if (items.length > 0) {
    const hasHighSig = items.some((i) => HIGH_SIGNIFICANCE_ITEMS.has(i));
    hasEarnings = items.includes("2.02");

    if (items.length === 1) {
      summary = `${ticker}: ${EIGHT_K_ITEMS[items[0]]}`;
    } else if (items.length <= 3) {
      const labels = items.map((i) => EIGHT_K_ITEMS[i]);
      summary = `${ticker} 8-K: ${labels.join("; ")}`;
    } else {
      const topItems = items.slice(0, 2).map((i) => EIGHT_K_ITEMS[i]);
      summary = `${ticker} 8-K: ${topItems.join("; ")} (+${items.length - 2} more items)`;
    }

    // Significance scoring
    if (items.includes("4.02")) score = 8; // Non-reliance on financials
    else if (items.includes("1.03")) score = 8; // Bankruptcy
    else if (items.includes("5.01")) score = 7; // Change in control
    else if (hasHighSig) score = 5;
    else score = 3;
  } else {
    summary = `${companyName} (${ticker}) filed a current report (8-K) with the SEC`;
    score = 3;
  }

  return {
    one_line_summary: summary.slice(0, 150),
    significance_score: score,
    insider_data: null,
    has_earnings_data: hasEarnings,
    eight_k_items: items.length > 0 ? items : undefined,
  };
}

// ─── 10-K (Annual Report) ─────────────────────────────────────────

function extractTenK(
  text: string,
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  // Try to extract fiscal year period
  const periodMatch = text.match(
    /(?:fiscal\s+year|period\s+of\s+report|for\s+the\s+(?:fiscal\s+)?year\s+end(?:ed|ing))[:\s]*([A-Za-z]+\s+\d{1,2},?\s+\d{4}|\d{4}-\d{2}-\d{2})/i
  );
  const period = periodMatch?.[1] ?? "";

  // Check for going concern, material weakness
  const hasGoingConcern = /going\s+concern/i.test(text);
  const hasMaterialWeakness = /material\s+weakness/i.test(text);
  const hasRestatement = /restate/i.test(text);

  let summary: string;
  if (period) {
    summary = `${companyName} (${ticker}) filed annual report (10-K) for period ending ${period}`;
  } else {
    summary = `${companyName} (${ticker}) filed annual report (10-K) on ${formatDate(filedDate)}`;
  }

  let score = 4; // Annual reports are noteworthy
  if (hasRestatement) score = 8;
  else if (hasGoingConcern) score = 7;
  else if (hasMaterialWeakness) score = 6;

  return {
    one_line_summary: summary.slice(0, 150),
    significance_score: score,
    insider_data: null,
    has_earnings_data: true, // 10-K always has financial data
  };
}

// ─── 10-Q (Quarterly Report) ──────────────────────────────────────

function extractTenQ(
  text: string,
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  const periodMatch = text.match(
    /(?:quarterly\s+period|period\s+of\s+report|for\s+the\s+(?:quarterly\s+)?period\s+end(?:ed|ing))[:\s]*([A-Za-z]+\s+\d{1,2},?\s+\d{4}|\d{4}-\d{2}-\d{2})/i
  );
  const period = periodMatch?.[1] ?? "";

  const hasGoingConcern = /going\s+concern/i.test(text);
  const hasRestatement = /restate/i.test(text);

  let summary: string;
  if (period) {
    summary = `${companyName} (${ticker}) filed quarterly report (10-Q) for period ending ${period}`;
  } else {
    summary = `${companyName} (${ticker}) filed quarterly report (10-Q) on ${formatDate(filedDate)}`;
  }

  let score = 3;
  if (hasRestatement) score = 7;
  else if (hasGoingConcern) score = 6;

  return {
    one_line_summary: summary.slice(0, 150),
    significance_score: score,
    insider_data: null,
    has_earnings_data: true,
  };
}

// ─── DEF 14A (Proxy Statement) ────────────────────────────────────

function extractProxy(
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  return {
    one_line_summary: `${companyName} (${ticker}) proxy statement for shareholder vote on ${formatDate(filedDate)}`,
    significance_score: 3,
    insider_data: null,
    has_earnings_data: false,
  };
}

// ─── 13F-HR (Institutional Holdings) ──────────────────────────────

function extractThirteenF(
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  return {
    one_line_summary: `${companyName} (${ticker}) institutional holdings report (13F-HR) filed ${formatDate(filedDate)}`,
    significance_score: 3,
    insider_data: null,
    has_earnings_data: false,
  };
}

// ─── SC 13D (Activist/Large Stake >5%) ────────────────────────────

function extractSC13D(
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  return {
    one_line_summary: `Beneficial ownership report (SC 13D) filed for ${companyName} (${ticker}) — 5%+ activist stake`,
    significance_score: 6, // SC 13D always significant — implies activist intent
    insider_data: null,
    has_earnings_data: false,
  };
}

// ─── SC 13G (Passive Large Stake >5%) ─────────────────────────────

function extractSC13G(
  companyName: string,
  ticker: string,
  filedDate: string
): TemplateExtractionResult {
  return {
    one_line_summary: `Beneficial ownership report (SC 13G) filed for ${companyName} (${ticker}) — 5%+ passive stake`,
    significance_score: 4, // 13G is passive, less significant than 13D
    insider_data: null,
    has_earnings_data: false,
  };
}

// ─── Helpers ───────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr.slice(0, 10);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr.slice(0, 10);
  }
}

function formatMoney(amount: number): string {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(0)}K`;
  return amount.toFixed(0);
}
