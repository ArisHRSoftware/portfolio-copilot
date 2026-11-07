import { GoogleGenerativeAI, SchemaType, type Schema } from "@google/generative-ai";

/**
 * Structured output from AI analysis of an SEC filing.
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

export interface TokenUsage {
  input_tokens: number;
  output_tokens: number;
}

export interface AnalysisResult {
  analysis: FilingAnalysis;
  usage: TokenUsage;
}

/**
 * Custom error for rate limit exhaustion — signals the pipeline to stop
 * the current batch rather than retrying.
 */
export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
  }
}

/** Maximum filing text length sent to AI. */
const ABSOLUTE_MAX_CHARS = 120_000;

function ensureFitsContext(text: string): string {
  if (text.length <= ABSOLUTE_MAX_CHARS) return text;
  return text.slice(0, ABSOLUTE_MAX_CHARS) + "\n\n[Filing text truncated for analysis]";
}

const SYSTEM_PROMPT = `You are an SEC filing analyst for Brefyr, a tool that helps retail investors track small-cap stocks. Analyze SEC filings and return structured data.

Key principles:
- Write for retail investors, not Wall Street professionals
- Flag anything that could materially affect the stock price
- Be specific with numbers: revenue, EPS, share counts, transaction prices
- Significance score: 1-3 = routine. 4-6 = notable. 7-8 = significant. 9-10 = critical (restatement, fraud, hostile takeover).
- For Form 4: focus on insider trade details
- For 10-K/10-Q: focus on financial results and risk factors
- For 8-K: focus on the specific event
- For DEF 14A: focus on compensation and shareholder proposals

Return ONLY valid JSON with this exact structure:
{
  "key_facts": ["string - 3-8 bullet points of the most important facts"],
  "insider_trades": [{"person": "name", "title": "role", "transaction_type": "buy|sell|grant|exercise|other", "shares": 0, "price_per_share": 0.0, "date": "YYYY-MM-DD"}],
  "risk_flags": ["string - red flags: going concern, material weakness, litigation"],
  "earnings_impact": {"revenue_change": "string or null", "eps_change": "string or null", "guidance": "string or null", "notable_items": ["string"]},
  "significance_score": 5,
  "one_line_summary": "Max 150 chars",
  "detailed_summary": "2-3 paragraphs in plain language",
  "faq": [{"question": "string", "answer": "string"}]
}`;

// ---------------------------------------------------------------------------
// Retry logic
// ---------------------------------------------------------------------------

async function withRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  let lastError: Error | undefined;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      const msg = lastError.message;

      if (msg.includes("401") || msg.includes("API_KEY") || msg.includes("api_key")) {
        throw lastError;
      }

      // Daily quota exhausted — stop the entire batch
      if (msg.includes("429") && msg.includes("per day")) {
        throw new RateLimitError("Daily quota exhausted. Remaining filings will be processed in the next runs.");
      }

      // Per-minute rate limit — wait then retry
      if (msg.includes("429")) {
        const retryMatch = msg.match(/retryDelay":"(\d+)s"/) || msg.match(/retry.+?(\d+)\s*s/i);
        const waitSec = retryMatch ? parseInt(retryMatch[1], 10) + 5 : 65;
        if (attempt < maxRetries) {
          await new Promise((r) => setTimeout(r, waitSec * 1000));
          continue;
        }
      }

      // 503 overload — retry with longer backoff
      if (msg.includes("503")) {
        if (attempt < maxRetries) {
          await new Promise((r) => setTimeout(r, Math.pow(2, attempt + 2) * 1000));
          continue;
        }
      }

      if (attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 1000));
      }
    }
  }
  throw lastError;
}

// ---------------------------------------------------------------------------
// Groq provider (primary — 14,400 RPD free tier)
// Uses OpenAI-compatible API via fetch. No extra dependency.
// ---------------------------------------------------------------------------

async function analyzeWithGroq(
  filingText: string,
  filingType: string,
  companyName: string,
  ticker: string
): Promise<AnalysisResult> {
  const groqKey = process.env.GROQ_API_KEY!;
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  const safeText = ensureFitsContext(filingText);

  const userPrompt = `Analyze this ${filingType} filing from ${companyName} (${ticker}).

--- FILING TEXT ---
${safeText}`;

  const result = await withRetry(async () => {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
        max_tokens: 4096,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Groq API error ${res.status}: ${errText}`);
    }

    return res.json() as Promise<{
      choices: Array<{ message: { content: string } }>;
      usage?: { prompt_tokens?: number; completion_tokens?: number };
    }>;
  });

  const content = result.choices[0]?.message?.content ?? "{}";
  let analysis: FilingAnalysis;
  try {
    analysis = JSON.parse(content) as FilingAnalysis;
  } catch {
    throw new Error(`Failed to parse Groq JSON response: ${content.slice(0, 200)}`);
  }

  analysis.significance_score = Math.max(1, Math.min(10, Math.round(analysis.significance_score)));

  return {
    analysis,
    usage: {
      input_tokens: result.usage?.prompt_tokens ?? 0,
      output_tokens: result.usage?.completion_tokens ?? 0,
    },
  };
}

// ---------------------------------------------------------------------------
// Gemini provider (fallback — 20 RPD free tier)
// ---------------------------------------------------------------------------

const FILING_ANALYSIS_SCHEMA: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    key_facts: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description: "3-8 bullet points summarizing the most important facts from the filing.",
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
    "key_facts", "insider_trades", "risk_flags", "earnings_impact",
    "significance_score", "one_line_summary", "detailed_summary", "faq",
  ],
};

async function analyzeWithGemini(
  filingText: string,
  filingType: string,
  companyName: string,
  ticker: string
): Promise<AnalysisResult> {
  const googleKey = process.env.GOOGLE_API_KEY!;
  const modelName = process.env.GEMINI_FILING_MODEL || "gemini-3.8-flash";

  const genAI = new GoogleGenerativeAI(googleKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: FILING_ANALYSIS_SCHEMA,
      maxOutputTokens: 4096,
      temperature: 0.3,
    },
    systemInstruction: SYSTEM_PROMPT,
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

  analysis.significance_score = Math.max(1, Math.min(10, Math.round(analysis.significance_score)));

  const usageMetadata = response.usageMetadata;
  return {
    analysis,
    usage: {
      input_tokens: usageMetadata?.promptTokenCount ?? 0,
      output_tokens: usageMetadata?.candidatesTokenCount ?? 0,
    },
  };
}

// ---------------------------------------------------------------------------
// Public API — auto-selects provider
// ---------------------------------------------------------------------------

/**
 * Analyze an SEC filing using the best available AI provider.
 *
 * Provider selection:
 * - GROQ_API_KEY set → Groq (Llama 3.3 70B, 14,400 RPD free)
 * - GOOGLE_API_KEY only → Gemini (20 RPD free)
 * - Neither → throws
 */
export async function analyzeFilingWithClaude(
  filingText: string,
  filingType: string,
  companyName: string,
  ticker: string
): Promise<AnalysisResult> {
  const hasGroq = !!process.env.GROQ_API_KEY;
  const hasGemini = !!process.env.GOOGLE_API_KEY;

  if (!hasGroq && !hasGemini) {
    throw new Error("No AI API key configured. Set GROQ_API_KEY (recommended) or GOOGLE_API_KEY.");
  }

  if (hasGroq) {
    return analyzeWithGroq(filingText, filingType, companyName, ticker);
  }

  return analyzeWithGemini(filingText, filingType, companyName, ticker);
}
