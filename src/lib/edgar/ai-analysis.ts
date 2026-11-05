import Anthropic from "@anthropic-ai/sdk";

/**
 * Structured output from Claude's analysis of an SEC filing.
 */
export interface FilingAnalysis {
  key_facts: string[];
  insider_trades: Array<{
    person: string;
    title: string;
    transaction_type: "buy" | "sell" | "grant" | "exercise" | "other";
    shares: number;
    price_per_share: number | null;
    date: string;
  }>;
  risk_flags: string[];
  earnings_impact: {
    revenue_change: string | null;
    eps_change: string | null;
    guidance: string | null;
    notable_items: string[];
  };
  significance_score: number;
  one_line_summary: string;
  detailed_summary: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Token usage from the Claude API response.
 */
export interface TokenUsage {
  input_tokens: number;
  output_tokens: number;
}

/**
 * Complete result from Claude analysis including the structured analysis
 * and token usage for cost tracking.
 */
export interface AnalysisResult {
  analysis: FilingAnalysis;
  usage: TokenUsage;
}

/**
 * The tool schema that forces Claude to return structured JSON output.
 */
const FILING_ANALYSIS_TOOL: Anthropic.Messages.Tool = {
  name: "record_filing_analysis",
  description:
    "Record the structured analysis of an SEC filing. Call this tool exactly once with the complete analysis.",
  input_schema: {
    type: "object" as const,
    properties: {
      key_facts: {
        type: "array",
        items: { type: "string" },
        description:
          "3-8 bullet points summarizing the most important facts from the filing.",
      },
      insider_trades: {
        type: "array",
        items: {
          type: "object",
          properties: {
            person: {
              type: "string",
              description: "Name of the insider.",
            },
            title: {
              type: "string",
              description:
                "Title or role of the insider (e.g. CEO, CFO, Director).",
            },
            transaction_type: {
              type: "string",
              enum: ["buy", "sell", "grant", "exercise", "other"],
            },
            shares: {
              type: "number",
              description: "Number of shares transacted.",
            },
            price_per_share: {
              type: ["number", "null"],
              description: "Price per share if disclosed, null otherwise.",
            },
            date: {
              type: "string",
              description: "Transaction date in YYYY-MM-DD format.",
            },
          },
          required: [
            "person",
            "title",
            "transaction_type",
            "shares",
            "price_per_share",
            "date",
          ],
        },
        description:
          "Insider transactions found in the filing. Empty array if not a Form 4 or no insider trades.",
      },
      risk_flags: {
        type: "array",
        items: { type: "string" },
        description:
          "Red flags, concerns, or risks identified. E.g. going concern, material weakness, litigation, revenue decline.",
      },
      earnings_impact: {
        type: "object",
        properties: {
          revenue_change: {
            type: ["string", "null"],
            description:
              "Revenue change description (e.g. '+15% YoY to $2.3B') or null if not applicable.",
          },
          eps_change: {
            type: ["string", "null"],
            description:
              "EPS change description (e.g. '$1.25 vs $1.10 prior year') or null if not applicable.",
          },
          guidance: {
            type: ["string", "null"],
            description:
              "Forward guidance summary or null if not provided.",
          },
          notable_items: {
            type: "array",
            items: { type: "string" },
            description:
              "Notable earnings items: one-time charges, segment changes, margin shifts.",
          },
        },
        required: [
          "revenue_change",
          "eps_change",
          "guidance",
          "notable_items",
        ],
      },
      significance_score: {
        type: "number",
        description:
          "1-10 score. 1=routine/immaterial. 5=notable. 8+=market-moving (CEO change, M&A, restatement, major earnings surprise). Score relative to a small-cap investor's portfolio.",
      },
      one_line_summary: {
        type: "string",
        description:
          "One-sentence summary suitable for a notification or news feed. Max 150 characters.",
      },
      detailed_summary: {
        type: "string",
        description:
          "2-3 paragraph summary for the filing detail page. Write in plain language for retail investors, not legalese.",
      },
      faq: {
        type: "array",
        items: {
          type: "object",
          properties: {
            question: {
              type: "string",
              description: "A question a retail investor would ask about this filing.",
            },
            answer: {
              type: "string",
              description: "A concise, plain-language answer.",
            },
          },
          required: ["question", "answer"],
        },
        description:
          "3-5 FAQ pairs that help a retail investor understand this filing.",
      },
    },
    required: [
      "key_facts",
      "insider_trades",
      "risk_flags",
      "earnings_impact",
      "significance_score",
      "one_line_summary",
      "detailed_summary",
      "faq",
    ],
  },
};

/**
 * The maximum filing text length we will send. If truncation in the parser
 * still exceeds this (shouldn't happen, but safeguard), we cut again here.
 */
const ABSOLUTE_MAX_CHARS = 120_000;

/**
 * Truncate filing text to fit within Claude's context window.
 * This is a safety net beyond the parser's own truncation.
 */
function ensureFitsContext(text: string): string {
  if (text.length <= ABSOLUTE_MAX_CHARS) {
    return text;
  }
  return (
    text.slice(0, ABSOLUTE_MAX_CHARS) + "\n\n[Filing text truncated for analysis]"
  );
}

/**
 * Retry a function with exponential backoff.
 */
async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: Error | undefined;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Don't retry on authentication errors
      if (
        lastError.message.includes("401") ||
        lastError.message.includes("authentication")
      ) {
        throw lastError;
      }

      if (attempt < maxRetries) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

/**
 * Analyze an SEC filing using Claude Haiku with tool_use for structured output.
 *
 * Uses the `record_filing_analysis` tool to force Claude to return a
 * well-structured JSON analysis including key facts, insider trades,
 * risk flags, earnings impact, significance score, summaries, and FAQs.
 *
 * @param filingText - The cleaned, parsed filing text
 * @param filingType - The SEC form type (e.g. "10-K", "8-K", "4")
 * @param companyName - The company name
 * @param ticker - The company ticker symbol
 * @returns Structured analysis and token usage
 */
export async function analyzeFilingWithClaude(
  filingText: string,
  filingType: string,
  companyName: string,
  ticker: string
): Promise<AnalysisResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY environment variable is required for filing analysis"
    );
  }

  const filingModel = process.env.ANTHROPIC_FILING_MODEL;
  if (!filingModel) {
    throw new Error(
      "ANTHROPIC_FILING_MODEL environment variable is required for filing analysis"
    );
  }

  const client = new Anthropic({ apiKey });
  const safeText = ensureFitsContext(filingText);

  const systemPrompt = `You are an SEC filing analyst for Portfolio Copilot, a tool that helps retail investors track small-cap stocks. Your job is to analyze SEC filings and extract structured data.

Key principles:
- Write for retail investors, not Wall Street professionals
- Flag anything that could materially affect the stock price
- Be specific with numbers: revenue, EPS, share counts, transaction prices
- Significance score context: 1-3 = routine (annual report with no surprises, routine Form 4). 4-6 = notable (earnings beat/miss, new risk factor, material insider trade). 7-8 = significant (CEO change, acquisition, going concern). 9-10 = critical (restatement, fraud allegation, hostile takeover).
- For Form 4 filings, focus on the insider trade details
- For 10-K/10-Q, focus on financial results and risk factors
- For 8-K, focus on the specific event being reported
- For DEF 14A, focus on executive compensation and shareholder proposals`;

  const userMessage = `Analyze this ${filingType} filing from ${companyName} (${ticker}).

Use the record_filing_analysis tool to record your structured analysis.

--- FILING TEXT ---
${safeText}`;

  const response = await withRetry(async () => {
    return await client.messages.create({
      model: filingModel,
      max_tokens: 4096,
      system: systemPrompt,
      tools: [FILING_ANALYSIS_TOOL],
      tool_choice: { type: "tool", name: "record_filing_analysis" },
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    });
  });

  // Extract the tool use result
  const toolUseBlock = response.content.find(
    (block): block is Anthropic.Messages.ToolUseBlock =>
      block.type === "tool_use"
  );

  if (!toolUseBlock) {
    throw new Error(
      "Claude did not return a tool_use block. This indicates an API issue."
    );
  }

  const analysis = toolUseBlock.input as unknown as FilingAnalysis;

  // Clamp significance score to 1-10
  analysis.significance_score = Math.max(
    1,
    Math.min(10, Math.round(analysis.significance_score))
  );

  return {
    analysis,
    usage: {
      input_tokens: response.usage.input_tokens,
      output_tokens: response.usage.output_tokens,
    },
  };
}
