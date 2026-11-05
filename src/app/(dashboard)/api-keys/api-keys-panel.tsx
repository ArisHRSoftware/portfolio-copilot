"use client";

import { useState, useTransition } from "react";
import type { Database } from "@/lib/types/database";
import { createApiKey, deleteApiKey } from "./api-keys-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2, Copy, Check, Key, Eye, EyeOff } from "lucide-react";

type ApiKey = Database["public"]["Tables"]["api_keys"]["Row"];

interface ApiKeysPanelProps {
  apiKeys: ApiKey[];
}

export function ApiKeysPanel({ apiKeys }: ApiKeysPanelProps) {
  const [isPending, startTransition] = useTransition();
  const [newKeyName, setNewKeyName] = useState("");
  const [revealedKey, setRevealedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleCreate() {
    if (!newKeyName.trim()) return;
    setError(null);
    setRevealedKey(null);

    const formData = new FormData();
    formData.set("name", newKeyName);

    startTransition(async () => {
      const result = await createApiKey(formData);
      if ("error" in result) {
        setError(result.error);
      } else {
        setRevealedKey(result.rawKey);
        setNewKeyName("");
      }
    });
  }

  function handleDelete(keyId: string) {
    startTransition(async () => {
      const result = await deleteApiKey(keyId);
      if ("error" in result) {
        setError(result.error);
      }
    });
  }

  function handleCopy() {
    if (revealedKey) {
      navigator.clipboard.writeText(revealedKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">API Keys</h1>
        <p className="text-muted-foreground">
          Manage your Filing Intelligence API keys. Include your key as a Bearer
          token in the Authorization header.
        </p>
      </div>

      {/* Create new key */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Create New Key</CardTitle>
          <CardDescription>
            Give your key a name to identify its purpose (e.g., &quot;Production
            App&quot;, &quot;Research Script&quot;).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Key name"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              disabled={isPending}
            />
            <Button onClick={handleCreate} disabled={isPending || !newKeyName.trim()}>
              <Plus className="h-4 w-4 mr-1" />
              Create
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Revealed key (show once) */}
      {revealedKey && (
        <Card className="border-primary/50 bg-primary/5">
          <CardContent className="pt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Your new API key (shown once — copy it now)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 rounded bg-muted px-3 py-2 text-xs font-mono break-all">
                {revealedKey}
              </code>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              This key will not be shown again. Store it securely.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Existing keys */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Your API Keys</CardTitle>
        </CardHeader>
        <CardContent>
          {apiKeys.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              No API keys yet. Create one above to get started.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead className="text-right">Calls Today</TableHead>
                  <TableHead className="text-right">Last Used</TableHead>
                  <TableHead className="w-[50px]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((key) => (
                  <TableRow key={key.id}>
                    <TableCell className="font-medium">{key.name}</TableCell>
                    <TableCell>
                      <code className="text-xs text-muted-foreground">
                        pc_{"•".repeat(12)}
                      </code>
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {key.calls_today}
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {key.last_used_at
                        ? new Date(key.last_used_at).toLocaleDateString()
                        : "Never"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(key.id)}
                        disabled={isPending}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* API documentation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Base URL</p>
            <code className="block rounded bg-muted px-3 py-2 text-xs font-mono">
              https://portfoliocopilot.com/api/v1
            </code>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Authentication</p>
            <code className="block rounded bg-muted px-3 py-2 text-xs font-mono">
              Authorization: Bearer pc_your_api_key_here
            </code>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Endpoints</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs font-mono">
                  GET
                </Badge>
                <code className="text-xs">/api/v1/filings</code>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground text-xs">
                  Search filings with filters
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs font-mono">
                  GET
                </Badge>
                <code className="text-xs">/api/v1/companies</code>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground text-xs">
                  List covered companies
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs font-mono">
                  GET
                </Badge>
                <code className="text-xs">/api/v1/insider-trades</code>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground text-xs">
                  Insider trading activity
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
