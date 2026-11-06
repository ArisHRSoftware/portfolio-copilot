const EDGAR_USER_AGENT =
  "Brefyr admin@brefyr.com";

/**
 * Maximum character count for the parsed filing text sent to the Claude API.
 * Claude Haiku's context window is ~200K tokens; 100K chars is roughly 25-30K
 * tokens, leaving ample room for the system prompt, tool schema, and response.
 */
const MAX_FILING_CHARS = 100_000;

/**
 * Minimum delay between EDGAR requests in milliseconds.
 * SEC asks for max 10 req/sec; 100ms ensures compliance.
 */
const REQUEST_DELAY_MS = 100;

/** Timestamp of the last EDGAR request, used for rate limiting. */
let lastRequestTime = 0;

/**
 * Wait until at least REQUEST_DELAY_MS has elapsed since the last request.
 */
async function rateLimitWait(): Promise<void> {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < REQUEST_DELAY_MS) {
    await new Promise((resolve) =>
      setTimeout(resolve, REQUEST_DELAY_MS - elapsed)
    );
  }
  lastRequestTime = Date.now();
}

/**
 * Strip HTML tags from text. Handles common EDGAR patterns:
 * - SGML/HTML tags
 * - XBRL inline tags
 * - Style and script blocks
 * - HTML entities
 */
function stripHtml(html: string): string {
  let text = html;

  // Remove <style> and <script> blocks entirely
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

  // Remove all HTML/XML/XBRL tags
  text = text.replace(/<[^>]+>/g, " ");

  // Decode common HTML entities
  text = text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, " ")
    .replace(/&[a-zA-Z]+;/g, " ");

  // Collapse whitespace: replace tabs and multiple spaces with single space
  text = text.replace(/\t/g, " ");
  text = text.replace(/ {2,}/g, " ");

  // Collapse multiple blank lines into at most two newlines
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}

/**
 * Resolve the primary document URL from an EDGAR index page.
 *
 * EDGAR filing index pages list the actual documents. We look for the
 * primary document (usually the first .htm or .txt file in the filing).
 * If the URL already points to a document, use it directly.
 */
async function resolvePrimaryDocumentUrl(rawUrl: string): Promise<string> {
  // If the URL already points to a specific document (not an index), use it
  if (
    !rawUrl.endsWith("-index.htm") &&
    !rawUrl.endsWith("-index.html") &&
    !rawUrl.includes("/index.json")
  ) {
    return rawUrl;
  }

  // Try the JSON index first for structured data
  const jsonIndexUrl = rawUrl
    .replace(/-index\.html?$/, "/index.json")
    .replace(/\/index\.json$/, "/index.json");

  await rateLimitWait();

  try {
    const response = await fetch(jsonIndexUrl, {
      headers: {
        "User-Agent": EDGAR_USER_AGENT,
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const index = (await response.json()) as {
        directory?: {
          item?: Array<{ name: string; type: string; size: string }>;
        };
      };

      const items = index.directory?.item ?? [];

      // Find the primary document: prefer .htm files that aren't the index
      const primaryDoc = items.find(
        (item) =>
          (item.name.endsWith(".htm") || item.name.endsWith(".html")) &&
          !item.name.includes("index") &&
          !item.name.startsWith("R") // Skip R*.htm (XBRL viewer files)
      );

      if (primaryDoc) {
        const basePath = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1);
        return basePath + primaryDoc.name;
      }

      // Fallback: first .txt file
      const txtDoc = items.find(
        (item) => item.name.endsWith(".txt") && !item.name.includes("index")
      );
      if (txtDoc) {
        const basePath = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1);
        return basePath + txtDoc.name;
      }
    }
  } catch {
    // JSON index unavailable — fall through to use raw URL
  }

  return rawUrl;
}

/**
 * Download a filing from EDGAR and parse it into clean text suitable for
 * AI analysis.
 *
 * - Resolves the primary document from index pages
 * - Strips HTML/SGML/XBRL tags
 * - Truncates to ~100K characters for the Claude API context window
 * - Respects EDGAR rate limits (100ms between requests)
 *
 * @param rawUrl - The EDGAR filing URL (index page or direct document)
 * @returns Cleaned, truncated filing text
 */
export async function downloadAndParseFiling(
  rawUrl: string
): Promise<string> {
  const documentUrl = await resolvePrimaryDocumentUrl(rawUrl);

  await rateLimitWait();

  const response = await fetch(documentUrl, {
    headers: {
      "User-Agent": EDGAR_USER_AGENT,
      Accept: "text/html, text/plain, */*",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to download filing from ${documentUrl}: ${response.status} ${response.statusText}`
    );
  }

  const rawText = await response.text();
  const cleanText = stripHtml(rawText);

  // Truncate to MAX_FILING_CHARS, cutting at the last complete sentence
  if (cleanText.length <= MAX_FILING_CHARS) {
    return cleanText;
  }

  const truncated = cleanText.slice(0, MAX_FILING_CHARS);
  const lastPeriod = truncated.lastIndexOf(".");
  if (lastPeriod > MAX_FILING_CHARS * 0.8) {
    return truncated.slice(0, lastPeriod + 1) + "\n\n[Filing text truncated]";
  }

  return truncated + "\n\n[Filing text truncated]";
}
