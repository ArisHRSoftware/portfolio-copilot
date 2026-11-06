import { GoogleGenerativeAI, SchemaType, type Schema } from "@google/generative-ai";

/**
 * Structured output from Gemini's analysis of an SEC filing.
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
 * Token usage from the API response.
 */
export interface TokenUsage {
  input_tokens: number;
  output_tokens: number;
}

/**
 * Complete result from analysis including the structured analysis
 * and token usage for cost tracking.
 */
export interface AnalysisResult {
  analysis: FilingAnalysis;
  usage: TokenUsage;
}

/**
 * JSON schema for Gemini structured output.
 */
const FILING_ANALYSIS_SCHEMA: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    key_facts: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description:
        "3-8 bullet points summarizing the most important facts from the filing.",
    },
    insider_trades: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          person: { type: SchemaType.STRING, description: "Name of the insider." },
          title: { type: SchemaType.STRING, description: "Title or role (e.g. CEO, CFO, Director)." },
          transaction_type: { type: SchemaType.STRING, description: "One of: buy, sell, grant, exercise, other." },
          shares: { type: SchemaType.NUMBER, description: "Number of shares transacted." },
          price_per_share: { type: SchemaType.NUMBER, nullable: true, description: "Price per share if disclosed, null otherwise." },
          date: { type: SchemaType.STRING, description: "Transaction date in YYYY-MM-DD format." },
        },
        required: ["person", "title", "transaction_type", "shares", "price_per_share", "date"],
      },
      description: "Insider transactions found in the filing. Empty array if not a Form 4.",
    },
    risk_flags: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description: "Red flags or risks: going concern, material weakness, litigation, revenue decline.",
    },
    earnings_impact: {
      type: SchemaType.OBJECT,
      properties: {
        revenue_change: { type: SchemaType.STRING, nullable: true, description: "Revenue change (e.g. '+15% YoY to $2.3B') or null." },
        eps_change: { type: SchemaType.STRING, nullable: true, description: "EPS change (e.g. '$1.25 vs $1.10') or null." },
        guidance: { type: SchemaType.STRING, nullable: true, description: "Forward guidance summary or null." },
        notable_items: {
          type: SchemaType.ARRAY,
          items: { type: SchemaType.STRING },
          description: "Notable items: one-time charges, segment changes, margin shifts.",
        },
      },
      required: ["revenue_change", "eps_change", "guidance", "notable_items"],
    },
    significance_score: {
      type: SchemaType.NUMBER,
      description: "1-10 score. 1=routine. 5=notable. 8+=market-moving. Score for small-cap investors.",
    },
    one_line_summary: {
      type: SchemaType.STRING,
      description: "One-sentence summary. Max 150 characters.",
    },
    detailed_summary: {
      type: SchemaType.STRING,
      description: "2-3 paragraph summary in plain language for retail investors.",
    },
    faq: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          question: { type: SchemaType.STRING, description: "A question a retail investor would ask." },
          answer: { type: SchemaType.STRING, description: "A concise, plain-language answer." },
        },
        required: ["question", "answer"],
      },
      description: "3-5 FAQ pairs about this filing.",
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
};

/**
 * Maximum filing text length. Gemini Flash handles 1M tokens but we cap
 * to keep costs/latency reasonable.
 */
const ABSOLUTE_MAX_CHARS = 200_000;

function ensureFitsContext(text: string): string {
  if (text.length <= ABSOLUTE_MAX_CHARS) return text;
  return text.slice(0, ABSOLUTE_MAX_CHARS) + "\n\n[Filing text truncated for analysis]";
}

/**
 * Retry with exponential backoff.
 */
async function withRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  let lastError: Error | undefined;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (lastError.message.includes("401") || lastError.message.includes("API_KEY")) {
        throw lastError;
      }
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
  }
  throw lastError;
}

/**
 * Analyze an SEC filing using Google Gemini with structured JSON output.
 *
 * Uses Gemini's native JSON mode with a schema to return well-structured
 * analysis including key facts, insider trades, risk flags, earnings impact,
 * significance score, summaries, and FAQs.
 *
 * Falls back to Anthropic if GOOGLE_API_KEY is not set but ANTHROPIC_API_KEY is.
 */
export async function analyzeFilingWithClaude(
  filingText: string,
  filingType: string,
  companyName: string,
  ticker: string
): Promise<AnalysisResult> {
  const googleKey = process.env.GOOGLE_API_KEY;
  if (!googleKey) {
    throw new Error(
      "GOOGLE_API_KEY environment variable is required for filing analysis"
    );
  }

  const modelName = process.env.GEMINI_FILING_MODEL || "gemini-2.5-flash";

  const genAI = new GoogleGenerativeAI(googleKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: FILING_ANALYSIS_SCHEMA,
      maxOutputTokens: 4096,
      temperature: 0.3,
    },
    systemInstruction: `You are an SEC filing analyst for Brefyr, a tool that helps retail investors track small-cap stocks. Analyze SEC filings and return structured data.

Key principles:
- Write for retail investors, not Wall Street professionals
- Flag anything that could materially affect the stock price
- Be specific with numbers: revenue, EPS, share counts, transaction prices
- Significance score: 1-3 = routine. 4-6 = notable. 7-8 = significant. 9-10 = critical (restatement, fraud, hostile takeover).
- For Form 4: focus on insider trade details
- For 10-K/10-Q: focus on financial results and risk factors
- For 8-K: focus on the specific event
- For DEF 14A: focus on compensation and shareholder proposals`,
  });

  const safeText = ensureFitsContext(filingText);

  const prompt = `Analyze this ${filingType} filing from ${companyName} (${ticker}).

Return the structured analysis as JSON.

--- FILING TEXT ---
${safeText}`;

  const result = await withRetry(async () => {
    return await model.generateContent(prompt);
  });

  const response = result.response;
  const text = response.text();

  let analysis: FilingAnalysis;
  try {
    analysis = JSON.parse(text) as FilingAnalysis;
  } catch {
    throw new Error(`Failed to parse Gemini JSON response: ${text.slice(0, 200)}`);
  }

  // Clamp significance score to 1-10
  analysis.significance_score = Math.max(
    1,
    Math.min(10, Math.round(analysis.significance_score))
  );

  // Extract token usage from response metadata
  const usageMetadata = response.usageMetadata;

  return {
    analysis,
    usage: {
      input_tokens: usageMetadata?.promptTokenCount ?? 0,
      output_tokens: usageMetadata?.candidatesTokenCount ?? 0,
    },
  };
}
