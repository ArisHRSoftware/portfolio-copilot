"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, Mail } from "lucide-react";

interface NewsletterFormProps {
  source?: string;
}

export function NewsletterForm({ source = "website" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "already"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const data = await res.json();
      if (data.status === "already_subscribed") {
        setStatus("already");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-primary">
        <CheckCircle2 className="h-4 w-4" />
        <span>You're subscribed! Check your inbox.</span>
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Mail className="h-4 w-4" />
        <span>You're already subscribed.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "loading"}
        className="max-w-[260px]"
      />
      <Button type="submit" disabled={status === "loading"} size="sm">
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Subscribe"
        )}
      </Button>
      {status === "error" && (
        <span className="text-xs text-destructive self-center">
          Failed. Try again.
        </span>
      )}
    </form>
  );
}
