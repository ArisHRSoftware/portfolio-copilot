// Placeholder for Supabase generated types
// Run `npx supabase gen types typescript --project-id <project-id>` to generate
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          full_name?: string | null;
          avatar_url?: string | null;
        };
      };
      companies: {
        Row: {
          id: string;
          ticker: string;
          name: string;
          sector: string;
          market_cap: number | null;
          exchange: string;
          cik_number: string;
          last_filing_date: string | null;
          status: "active" | "inactive";
          previous_tickers: string[] | null;
          sic_code: string | null;
          sic_description: string | null;
          industry: string | null;
          state_of_incorporation: string | null;
          filer_category: string | null;
          fiscal_year_end: string | null;
          description: string | null;
          phone: string | null;
          business_address: Record<string, unknown> | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          ticker: string;
          name: string;
          sector: string;
          market_cap?: number | null;
          exchange: string;
          cik_number: string;
          sic_code?: string | null;
          sic_description?: string | null;
          industry?: string | null;
          state_of_incorporation?: string | null;
          filer_category?: string | null;
          fiscal_year_end?: string | null;
          description?: string | null;
          phone?: string | null;
          business_address?: Record<string, unknown> | null;
        };
        Update: {
          ticker?: string;
          name?: string;
          sector?: string;
          market_cap?: number | null;
          last_filing_date?: string | null;
          status?: "active" | "inactive";
          sic_code?: string | null;
          sic_description?: string | null;
          industry?: string | null;
          state_of_incorporation?: string | null;
          filer_category?: string | null;
          fiscal_year_end?: string | null;
          description?: string | null;
          phone?: string | null;
          business_address?: Record<string, unknown> | null;
        };
      };
      filings: {
        Row: {
          id: string;
          company_id: string;
          slug: string;
          filing_type: string;
          filed_date: string;
          accepted_date: string | null;
          accession_number: string;
          raw_url: string;
          ai_summary_json: Record<string, unknown> | null;
          ai_summary_prose: string | null;
          one_line_summary: string | null;
          significance_score: number;
          insider_data: Record<string, unknown> | null;
          has_earnings_data: boolean;
          input_tokens: number | null;
          output_tokens: number | null;
          superseded_by: string | null;
          processed_at: string | null;
          created_at: string;
        };
        Insert: {
          company_id: string;
          slug: string;
          filing_type: string;
          filed_date: string;
          accession_number: string;
          raw_url: string;
          significance_score?: number;
        };
        Update: {
          ai_summary_json?: Record<string, unknown> | null;
          ai_summary_prose?: string | null;
          one_line_summary?: string | null;
          significance_score?: number;
          insider_data?: Record<string, unknown> | null;
          has_earnings_data?: boolean;
          input_tokens?: number | null;
          output_tokens?: number | null;
          superseded_by?: string | null;
          processed_at?: string | null;
        };
      };
      user_stocks: {
        Row: {
          id: string;
          user_id: string;
          company_id: string;
          shares: number | null;
          added_at: string;
        };
        Insert: {
          user_id: string;
          company_id: string;
          shares?: number | null;
        };
        Update: {
          shares?: number | null;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan: "free" | "starter" | "plus" | "pro";
          razorpay_subscription_id: string | null;
          status: "active" | "canceled" | "past_due" | "trialing";
          current_period_start: string | null;
          current_period_end: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          plan?: "free" | "starter" | "plus" | "pro";
        };
        Update: {
          plan?: "free" | "starter" | "plus" | "pro";
          razorpay_subscription_id?: string | null;
          status?: "active" | "canceled" | "past_due" | "trialing";
          current_period_start?: string | null;
          current_period_end?: string | null;
        };
      };
      content_queue: {
        Row: {
          id: string;
          type: "newsletter" | "blog" | "social";
          title: string;
          body: Record<string, unknown>;
          preview_html: string | null;
          status:
            | "draft"
            | "pending_review"
            | "approved"
            | "published"
            | "rejected"
            | "archived";
          significance_score: number | null;
          founder_note: string | null;
          rejection_reason: string | null;
          scheduled_at: string | null;
          approved_at: string | null;
          published_at: string | null;
          archived_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          type: "newsletter" | "blog" | "social";
          title: string;
          body: Record<string, unknown>;
          status?: "draft" | "pending_review";
        };
        Update: {
          status?:
            | "draft"
            | "pending_review"
            | "approved"
            | "published"
            | "rejected"
            | "archived";
          founder_note?: string | null;
          rejection_reason?: string | null;
          approved_at?: string | null;
          published_at?: string | null;
          archived_at?: string | null;
        };
      };
      alerts: {
        Row: {
          id: string;
          user_id: string;
          filing_id: string;
          sent_at: string;
          channel: "email" | "push" | "webhook";
          created_at: string;
        };
        Insert: {
          user_id: string;
          filing_id: string;
          channel: "email" | "push" | "webhook";
        };
        Update: {
          sent_at?: string;
        };
      };
      page_views: {
        Row: {
          id: number;
          page_path: string;
          date: string;
          count: number;
        };
        Insert: {
          page_path: string;
          date: string;
          count?: number;
        };
        Update: {
          count?: number;
        };
      };
      api_keys: {
        Row: {
          id: string;
          user_id: string;
          key_hash: string;
          name: string;
          tier: string;
          calls_today: number;
          last_used_at: string | null;
          created_at: string;
        };
        Insert: {
          user_id: string;
          key_hash: string;
          name: string;
          tier: string;
        };
        Update: {
          calls_today?: number;
          last_used_at?: string | null;
        };
      };
      alert_rules: {
        Row: {
          id: string;
          user_id: string;
          rule_json: Record<string, unknown>;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          user_id: string;
          rule_json: Record<string, unknown>;
          is_active?: boolean;
        };
        Update: {
          rule_json?: Record<string, unknown>;
          is_active?: boolean;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          body: string;
          meta_description: string | null;
          published_at: string | null;
          auto_generated: boolean;
          created_at: string;
        };
        Insert: {
          slug: string;
          title: string;
          body: string;
          auto_generated?: boolean;
        };
        Update: {
          title?: string;
          body?: string;
          meta_description?: string | null;
          published_at?: string | null;
        };
      };
      newsletter_issues: {
        Row: {
          id: string;
          subject: string;
          body_html: string;
          sent_at: string | null;
          recipient_count: number;
          created_at: string;
        };
        Insert: {
          subject: string;
          body_html: string;
        };
        Update: {
          sent_at?: string | null;
          recipient_count?: number;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          subscribed_at: string;
          unsubscribed_at: string | null;
          source: string | null;
        };
        Insert: {
          email: string;
          source?: string | null;
        };
        Update: {
          unsubscribed_at?: string | null;
        };
      };
      referrals: {
        Row: {
          id: string;
          referrer_user_id: string;
          referred_user_id: string;
          status: string;
          reward_applied_at: string | null;
          created_at: string;
        };
        Insert: {
          referrer_user_id: string;
          referred_user_id: string;
          status?: string;
        };
        Update: {
          status?: string;
          reward_applied_at?: string | null;
        };
      };
      pipeline_runs: {
        Row: {
          id: string;
          started_at: string;
          completed_at: string | null;
          filings_processed: number;
          errors_count: number;
          status: "running" | "completed" | "failed";
        };
        Insert: {
          status?: "running";
        };
        Update: {
          completed_at?: string | null;
          filings_processed?: number;
          errors_count?: number;
          status?: "running" | "completed" | "failed";
        };
      };
      pipeline_errors: {
        Row: {
          id: string;
          pipeline_run_id: string;
          filing_accession: string | null;
          error_message: string;
          created_at: string;
        };
        Insert: {
          pipeline_run_id: string;
          filing_accession?: string | null;
          error_message: string;
        };
        Update: Record<string, never>;
      };
      redirects: {
        Row: {
          id: string;
          old_path: string;
          new_path: string;
          created_at: string;
        };
        Insert: {
          old_path: string;
          new_path: string;
        };
        Update: {
          new_path?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
