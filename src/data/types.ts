/** Shared types for static content pages (glossary, learn, guides) */

export interface ContentPage {
  slug: string;
  title: string;
  metaDescription: string;
  body: string; // HTML content
  wordCount: number;
  category?: string;
  tags: string[];
  relatedSlugs: string[]; // Internal links to other content pages
  faq: { question: string; answer: string }[];
  lastUpdated: string; // ISO date
}

export interface GlossaryTerm extends ContentPage {
  term: string; // The term being defined
  shortDefinition: string; // 1-2 sentence definition for previews
  relatedTerms: string[]; // Slugs of related glossary entries
}

export interface LearnArticle extends ContentPage {
  pillar: "sec-filings" | "sectors" | "states" | "stocks";
  readingTime: number; // minutes
  difficulty: "beginner" | "intermediate" | "advanced";
}
