/**
 * Newsletter email template — renders structured v2 newsletter data
 * into mobile-first HTML email.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

// ── Types matching content_queue.body v2 schema ──────────────────

export interface NewsletterV2Data {
  version: number;
  date: string;
  subject: string;
  intro: string;
  topFiling: {
    ticker: string;
    companyName: string;
    filingType: string;
    summary: string;
    keyPoints: string[];
    significanceScore: number;
    slug: string;
  };
  moreFilings: Array<{
    ticker: string;
    filingType: string;
    oneLine: string;
  }>;
  insiderMoves: Array<{
    ticker: string;
    person: string;
    action: string;
    detail: string;
  }>;
  stats: {
    totalFilings: number;
    form4Count: number;
    eightKCount: number;
    topSector: string;
  };
  filingEducation: {
    topic: string;
    explanation: string;
  };
}

// ── Helpers ──────────────────────────────────────────────────────

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function scoreColor(score: number): { bg: string; text: string; label: string } {
  if (score >= 8) return { bg: "#fef2f2", text: "#dc2626", label: "Critical" };
  if (score >= 5) return { bg: "#f0fdf4", text: "#16a34a", label: "Notable" };
  return { bg: "#f4f4f5", text: "#71717a", label: "Routine" };
}

function isBuyAction(action: string): boolean {
  const lower = action.toLowerCase();
  return lower.includes("buy") || lower.includes("purchase") || lower.includes("acquisition");
}

// ── Main template ───────────────────────────────────────────────

export function renderNewsletterHtml(
  data: NewsletterV2Data,
  unsubscribeUrl: string
): string {
  const { topFiling, moreFilings, insiderMoves, stats, filingEducation } = data;
  const sc = scoreColor(topFiling.significanceScore);
  const topFilingUrl = `${SITE_URL}/stocks/${topFiling.ticker.toLowerCase()}/${topFiling.slug}`;

  const keyPointsHtml = topFiling.keyPoints.length > 0
    ? topFiling.keyPoints
        .map((kp) => `<li style="margin-bottom:4px;color:#374151;font-size:14px;">${esc(kp)}</li>`)
        .join("")
    : `<li style="color:#374151;font-size:14px;">${esc(topFiling.summary)}</li>`;

  const moreFilingsHtml = moreFilings.length > 0
    ? moreFilings
        .map(
          (f, i) =>
            `<tr>
              <td style="padding:8px 0;border-bottom:1px solid #f4f4f5;font-size:14px;color:#374151;">
                <strong style="color:#18181b;">${i + 1}.</strong>
                <span style="font-family:monospace;font-weight:700;color:#16a34a;">${esc(f.ticker)}</span>
                <span style="display:inline-block;padding:1px 6px;background:#f4f4f5;border-radius:3px;font-size:11px;color:#52525b;margin-left:4px;">${esc(f.filingType)}</span>
                <br/><span style="color:#6b7280;font-size:13px;">${esc(f.oneLine)}</span>
              </td>
            </tr>`
        )
        .join("")
    : '<tr><td style="padding:8px 0;font-size:14px;color:#9ca3af;">No additional significant filings.</td></tr>';

  const insiderHtml = insiderMoves.length > 0
    ? insiderMoves
        .map((m) => {
          const buy = isBuyAction(m.action);
          const color = buy ? "#16a34a" : "#dc2626";
          const icon = buy ? "&#x25B2;" : "&#x25BC;";
          return `<tr>
            <td style="padding:8px 0;border-bottom:1px solid #f4f4f5;font-size:14px;">
              <span style="color:${color};font-weight:700;">${icon}</span>
              <span style="font-family:monospace;font-weight:700;color:#16a34a;">${esc(m.ticker)}</span>
              <span style="display:inline-block;padding:1px 6px;background:${buy ? "#f0fdf4" : "#fef2f2"};border-radius:3px;font-size:11px;color:${color};margin-left:4px;">${buy ? "Buy" : "Sell"}</span>
              <br/><span style="color:#6b7280;font-size:13px;">${esc(m.person)} &mdash; ${esc(m.detail)}</span>
            </td>
          </tr>`;
        })
        .join("")
    : '<tr><td style="padding:8px 0;font-size:14px;color:#9ca3af;">No insider trades detected.</td></tr>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>The Filing Brief</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:16px;">

  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#18181b;border-radius:8px 8px 0 0;">
    <tr>
      <td style="padding:24px 28px;">
        <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">THE FILING BRIEF</h1>
        <p style="margin:4px 0 0;font-size:13px;color:#a1a1aa;">${esc(data.date)} &middot; ${stats.totalFilings} filings analyzed</p>
      </td>
    </tr>
  </table>

  <!-- Intro -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td style="padding:24px 28px 16px;">
        <p style="margin:0;font-size:15px;color:#374151;line-height:1.5;">${esc(data.intro)}</p>
      </td>
    </tr>
  </table>

  <!-- Divider -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td style="padding:0 28px;"><div style="border-top:2px solid #16a34a;"></div></td></tr>
  </table>

  <!-- Top Filing -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td style="padding:20px 28px;">
        <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#16a34a;">TOP FILING</p>
        <h2 style="margin:0 0 8px;font-size:18px;font-weight:700;color:#18181b;">
          ${esc(topFiling.companyName)} (${esc(topFiling.ticker)}) &mdash; ${esc(topFiling.filingType)}
        </h2>
        <ul style="margin:0 0 12px;padding-left:20px;">
          ${keyPointsHtml}
        </ul>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-right:12px;">
              <span style="display:inline-block;padding:3px 10px;background:${sc.bg};color:${sc.text};border-radius:4px;font-size:12px;font-weight:700;">
                ${topFiling.significanceScore}/10 ${sc.label}
              </span>
            </td>
            <td>
              <a href="${topFilingUrl}" style="display:inline-block;padding:8px 18px;background:#16a34a;color:#ffffff;text-decoration:none;border-radius:6px;font-size:13px;font-weight:600;">
                Read full analysis &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Divider -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td style="padding:0 28px;"><div style="border-top:1px solid #e4e4e7;"></div></td></tr>
  </table>

  <!-- More Filings -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td style="padding:20px 28px;">
        <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#71717a;">3 MORE FILINGS THAT MATTER</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${moreFilingsHtml}
        </table>
      </td>
    </tr>
  </table>

  <!-- Divider -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td style="padding:0 28px;"><div style="border-top:1px solid #e4e4e7;"></div></td></tr>
  </table>

  <!-- Insider Moves -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td style="padding:20px 28px;">
        <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#71717a;">INSIDER MOVES</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${insiderHtml}
        </table>
      </td>
    </tr>
  </table>

  <!-- Divider -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td style="padding:0 28px;"><div style="border-top:1px solid #e4e4e7;"></div></td></tr>
  </table>

  <!-- By the Numbers -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td style="padding:20px 28px;">
        <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#71717a;">BY THE NUMBERS</p>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">
          Filings: <strong>${stats.totalFilings}</strong> &middot;
          Form 4s: <strong>${stats.form4Count}</strong> &middot;
          8-Ks: <strong>${stats.eightKCount}</strong><br/>
          Most active sector: <strong>${esc(stats.topSector)}</strong>
        </p>
      </td>
    </tr>
  </table>

  <!-- Divider -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td style="padding:0 28px;"><div style="border-top:1px solid #e4e4e7;"></div></td></tr>
  </table>

  <!-- Filing 101 -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border-radius:0 0 8px 8px;">
    <tr>
      <td style="padding:20px 28px;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#16a34a;">FILING 101</p>
        <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#18181b;">${esc(filingEducation.topic)}</p>
        <p style="margin:0;font-size:13px;color:#52525b;line-height:1.5;">${esc(filingEducation.explanation)}</p>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:20px 28px;text-align:center;">
        <p style="margin:0 0 8px;font-size:12px;color:#a1a1aa;">
          That's your daily filing intelligence. See you tomorrow.
        </p>
        <p style="margin:0 0 8px;font-size:12px;color:#a1a1aa;">
          <a href="${SITE_URL}" style="color:#71717a;">Brefyr</a> &mdash; AI-powered SEC filing intelligence
        </p>
        <p style="margin:0 0 8px;font-size:11px;color:#d4d4d8;">
          <a href="${unsubscribeUrl}" style="color:#a1a1aa;">Unsubscribe</a>
        </p>
        <p style="margin:0;font-size:10px;color:#d4d4d8;">
          Brefyr &middot; This email contains SEC filing data, not investment advice.
        </p>
      </td>
    </tr>
  </table>

</div>
</body>
</html>`;
}
