import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Lazy-initialised Resend client (env vars unavailable at build time)
// ---------------------------------------------------------------------------

let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY must be set");
    _resend = new Resend(key);
  }
  return _resend;
}

function fromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || "noreply@brefyr.com";
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

// ---------------------------------------------------------------------------
// Email types
// ---------------------------------------------------------------------------

export interface FilingEmailData {
  ticker: string;
  companyName: string;
  filingType: string;
  filedDate: string;
  oneLiner: string | null;
  slug: string;
  significanceScore: number;
}

export interface DigestFilingItem {
  ticker: string;
  companyName: string;
  filingType: string;
  filedDate: string;
  oneLiner: string | null;
  slug: string;
  significanceScore: number;
}

export interface DigestData {
  filings: DigestFilingItem[];
  topFilings?: DigestFilingItem[];
  periodLabel: string; // e.g. "Today" or "This Week"
  startDate: string;
  endDate: string;
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

function baseLayout(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    body { margin:0; padding:0; background:#f4f4f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
    .container { max-width:600px; margin:0 auto; background:#fff; border-radius:8px; overflow:hidden; }
    .header { background:#18181b; color:#fff; padding:24px 32px; }
    .header h1 { margin:0; font-size:20px; font-weight:600; }
    .body { padding:24px 32px; color:#27272a; line-height:1.6; }
    .footer { padding:16px 32px; font-size:12px; color:#a1a1aa; border-top:1px solid #e4e4e7; }
    .btn { display:inline-block; padding:10px 20px; background:#18181b; color:#fff; text-decoration:none; border-radius:6px; font-weight:500; font-size:14px; }
    .filing-card { border:1px solid #e4e4e7; border-radius:6px; padding:12px 16px; margin-bottom:12px; }
    .filing-card h3 { margin:0 0 4px; font-size:15px; }
    .filing-card p { margin:0; font-size:13px; color:#52525b; }
    .badge { display:inline-block; padding:2px 8px; border-radius:4px; font-size:11px; font-weight:600; }
    .badge-high { background:#fef2f2; color:#dc2626; }
    .badge-med  { background:#fffbeb; color:#d97706; }
    .badge-low  { background:#f0fdf4; color:#16a34a; }
  </style>
</head>
<body>
  <div style="padding:24px 16px;">
    <div class="container">
      <div class="header">
        <h1>${title}</h1>
      </div>
      <div class="body">
        ${bodyHtml}
      </div>
      <div class="footer">
        <p>Brefyr &mdash; AI-powered SEC filing intelligence for small-cap stocks.</p>
        <p><a href="${SITE_URL}/dashboard/settings" style="color:#71717a;">Manage email preferences</a></p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function significanceBadge(score: number): string {
  if (score >= 7) return `<span class="badge badge-high">High Impact</span>`;
  if (score >= 4) return `<span class="badge badge-med">Medium</span>`;
  return `<span class="badge badge-low">Low</span>`;
}

function filingCardHtml(f: DigestFilingItem): string {
  const summary = escapeHtml(f.oneLiner || `${f.filingType} filing`);
  return `<div class="filing-card">
  <h3>${escapeHtml(f.ticker)} &mdash; ${escapeHtml(f.companyName)} ${significanceBadge(f.significanceScore)}</h3>
  <p><strong>${escapeHtml(f.filingType)}</strong> filed ${escapeHtml(f.filedDate)}</p>
  <p>${summary}</p>
  <p style="margin-top:8px;"><a href="${SITE_URL}/filings/${encodeURIComponent(f.slug)}" style="color:#18181b;font-weight:500;">View analysis &rarr;</a></p>
</div>`;
}

// ---------------------------------------------------------------------------
// Email senders
// ---------------------------------------------------------------------------

/**
 * Send an alert when a new significant filing is detected for a tracked stock.
 */
export async function sendFilingAlert(
  to: string,
  filing: FilingEmailData
): Promise<void> {
  const subject = `${filing.ticker}: New ${filing.filingType} Filing (Score ${filing.significanceScore}/10)`;
  const body = `
    <p>A new SEC filing was detected for <strong>${escapeHtml(filing.ticker)} (${escapeHtml(filing.companyName)})</strong>.</p>
    ${filingCardHtml(filing)}
    <p style="margin-top:16px;">
      <a class="btn" href="${SITE_URL}/filings/${encodeURIComponent(filing.slug)}">View Full Analysis</a>
    </p>
  `;

  await getResend().emails.send({
    from: fromAddress(),
    to,
    subject,
    html: baseLayout(`New Filing: ${escapeHtml(filing.ticker)}`, body),
  });
}

/**
 * Send a weekly digest of filings for free-tier users.
 */
export async function sendWeeklyDigest(
  to: string,
  digestData: DigestData
): Promise<void> {
  const count = digestData.filings.length;
  const subject = `Your Weekly Filing Digest: ${count} filing${count !== 1 ? "s" : ""} this week`;

  const filingsHtml = digestData.filings.map(filingCardHtml).join("\n");

  const body = `
    <p>Here's your weekly summary of SEC filings for your tracked stocks
    (${digestData.startDate} &ndash; ${digestData.endDate}).</p>
    <p><strong>${count} filing${count !== 1 ? "s" : ""}</strong> detected across your portfolio:</p>
    ${filingsHtml}
    <p style="margin-top:16px;">
      <a class="btn" href="${SITE_URL}/dashboard">Open Dashboard</a>
    </p>
    <p style="font-size:13px;color:#71717a;margin-top:12px;">
      Upgrade to a paid plan for daily digests and real-time alerts.
    </p>
  `;

  await getResend().emails.send({
    from: fromAddress(),
    to,
    subject,
    html: baseLayout("Weekly Filing Digest", body),
  });
}

/**
 * Send a daily digest of filings for all users with tracked stocks.
 * Includes personalized filings matching tracked stocks plus top market-wide filings.
 */
export async function sendDailyDigest(
  to: string,
  digestData: DigestData
): Promise<void> {
  const count = digestData.filings.length;
  const topFilings = digestData.topFilings ?? [];
  const totalCount = count + topFilings.length;
  const subject = totalCount > 0
    ? `Daily Filing Digest: ${totalCount} filing${totalCount !== 1 ? "s" : ""} today`
    : "Daily Filing Digest: Top market filings today";

  let body = "";

  // Personalized tracked-stock filings
  if (count > 0) {
    const filingsHtml = digestData.filings.map(filingCardHtml).join("\n");
    body += `
    <p>Here's your daily summary of SEC filings for your tracked stocks
    (${digestData.endDate}).</p>
    <p><strong>${count} filing${count !== 1 ? "s" : ""}</strong> detected across your portfolio:</p>
    ${filingsHtml}
    `;
  } else {
    body += `
    <p>No new filings today for your tracked stocks. Here are the most significant filings across the market:</p>
    `;
  }

  // Top market-wide filings section
  if (topFilings.length > 0) {
    const topFilingsHtml = topFilings.map(filingCardHtml).join("\n");
    body += `
    <div style="margin-top:24px;padding-top:20px;border-top:2px solid #e4e4e7;">
      <h2 style="font-size:16px;margin:0 0 12px;color:#18181b;">Top Filings Today</h2>
      <p style="font-size:13px;color:#52525b;margin:0 0 12px;">The most significant SEC filings across the market today.</p>
      ${topFilingsHtml}
    </div>
    `;
  }

  // CTA
  body += `
    <p style="margin-top:16px;">
      <a class="btn" href="${SITE_URL}/dashboard">Open Dashboard</a>
    </p>
    <p style="font-size:13px;color:#71717a;margin-top:16px;text-align:center;">
      Want instant insider alerts? <a href="${SITE_URL}/dashboard" style="color:#18181b;font-weight:500;">Track more stocks at brefyr.com/dashboard</a>
    </p>
  `;

  await getResend().emails.send({
    from: fromAddress(),
    to,
    subject,
    html: baseLayout("Daily Filing Digest", body),
  });
}

/**
 * Send a welcome email after signup.
 */
export async function sendWelcomeEmail(
  to: string,
  name: string
): Promise<void> {
  const displayName = escapeHtml(name || "there");
  const subject = "Welcome to Brefyr";

  const body = `
    <p>Hi ${displayName},</p>
    <p>Welcome to <strong>Brefyr</strong> &mdash; your AI-powered SEC filing intelligence platform
    for US small-cap stocks.</p>
    <p>Here's how to get started:</p>
    <ol>
      <li><strong>Add stocks to your watchlist</strong> &mdash; track up to ${3} companies on the free plan.</li>
      <li><strong>Get filing alerts</strong> &mdash; we'll notify you when new SEC filings are detected for your stocks.</li>
      <li><strong>Read AI analysis</strong> &mdash; every filing gets an instant AI-generated summary and significance score.</li>
    </ol>
    <p style="margin-top:16px;">
      <a class="btn" href="${SITE_URL}/dashboard">Go to Dashboard</a>
    </p>
    <p style="font-size:13px;color:#71717a;margin-top:16px;">
      Need more stocks or daily alerts? <a href="${SITE_URL}/pricing" style="color:#18181b;">View plans</a>
    </p>
  `;

  await getResend().emails.send({
    from: fromAddress(),
    to,
    subject,
    html: baseLayout("Welcome to Brefyr", body),
  });
}
