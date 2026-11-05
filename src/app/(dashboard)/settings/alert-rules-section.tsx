"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { AlertRule } from "@/lib/supabase/queries";
import type { TierName } from "@/lib/constants/tiers";
import {
  createAlertRule,
  updateAlertRule,
  deleteAlertRule,
} from "./alert-rules-actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Plus,
  Trash2,
  ArrowUpRight,
  FileText,
  TrendingUp,
  UserCheck,
  Search,
  Bell,
} from "lucide-react";

type TierInfo = {
  tier: TierName;
  stocks: number;
  alertRules: number;
  digest: string;
  screener: boolean;
  api: boolean;
  export: boolean;
  webhook: boolean;
  name: string;
  priceINR: number;
  priceUSD: number;
};

interface RuleJson {
  name: string;
  type: "filing_type" | "significance" | "insider_activity" | "keyword";
  filing_type?: string;
  min_significance?: number;
  activity?: string;
  min_amount?: number;
  keywords?: string[];
}

interface AlertRulesSectionProps {
  alertRules: AlertRule[];
  tierInfo: TierInfo;
}

const RULE_TYPE_LABELS: Record<string, string> = {
  filing_type: "Filing Type",
  significance: "Significance Score",
  insider_activity: "Insider Activity",
  keyword: "Keyword Match",
};

const RULE_TYPE_ICONS: Record<string, typeof FileText> = {
  filing_type: FileText,
  significance: TrendingUp,
  insider_activity: UserCheck,
  keyword: Search,
};

function getRuleDescription(rule: RuleJson): string {
  switch (rule.type) {
    case "filing_type": {
      const parts: string[] = [];
      if (rule.filing_type) parts.push(`${rule.filing_type} filings`);
      if (rule.min_significance != null)
        parts.push(`significance >= ${rule.min_significance}`);
      return parts.length > 0 ? parts.join(", ") : "Any filing type";
    }
    case "significance":
      return `Significance score >= ${rule.min_significance ?? "?"}`;
    case "insider_activity": {
      const parts: string[] = [];
      if (rule.activity && rule.activity !== "any")
        parts.push(`${rule.activity} transactions`);
      else parts.push("Any insider transaction");
      if (rule.min_amount != null)
        parts.push(`>= $${rule.min_amount.toLocaleString()}`);
      return parts.join(", ");
    }
    case "keyword":
      return rule.keywords?.join(", ") ?? "No keywords";
    default:
      return "Unknown rule type";
  }
}

export function AlertRulesSection({
  alertRules,
  tierInfo,
}: AlertRulesSectionProps) {
  const maxRules = tierInfo.alertRules;
  const canCreateRules = maxRules !== 0;
  const isAtLimit = maxRules !== -1 && alertRules.length >= maxRules;
  const limitLabel = maxRules === -1 ? "Unlimited" : String(maxRules);

  if (!canCreateRules) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>Alert Rules</CardTitle>
            <Badge variant="secondary">Upgrade required</Badge>
          </div>
          <CardDescription>
            Create custom rules to get notified about specific filing events for
            your tracked stocks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Bell className="size-4" />
            <AlertTitle>Not available on your plan</AlertTitle>
            <AlertDescription>
              Alert rules are available on Starter, Plus, and Pro plans. Upgrade
              to start creating custom alert rules.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter>
          <Button variant="outline" render={<Link href="/pricing" />}>
            View plans
            <ArrowUpRight className="size-3.5" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CardTitle>Alert Rules</CardTitle>
                <Badge variant="secondary">
                  {alertRules.length} / {limitLabel}
                </Badge>
              </div>
              <CardDescription>
                Create custom rules to get notified about specific filing events
                for your tracked stocks.
              </CardDescription>
            </div>
            <CreateRuleDialog disabled={isAtLimit} />
          </div>
        </CardHeader>
        <CardContent>
          {alertRules.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="size-8 text-muted-foreground/50 mb-3" />
              <p className="text-sm font-medium">No alert rules yet</p>
              <p className="text-xs text-muted-foreground mt-1">
                Create your first rule to start getting notified about filings.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {alertRules.map((rule) => (
                <RuleRow key={rule.id} rule={rule} />
              ))}
            </div>
          )}
          {isAtLimit && (
            <div className="mt-4">
              <Alert>
                <AlertDescription>
                  You have reached the maximum of {maxRules} alert rules for
                  your plan.{" "}
                  <Link
                    href="/pricing"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    Upgrade for more
                  </Link>
                  .
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function RuleRow({ rule }: { rule: AlertRule }) {
  const [isPending, startTransition] = useTransition();
  const ruleJson = rule.rule_json as unknown as RuleJson;
  const Icon = RULE_TYPE_ICONS[ruleJson.type] ?? FileText;

  function handleToggle(checked: boolean) {
    startTransition(async () => {
      await updateAlertRule(rule.id, { is_active: checked });
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await deleteAlertRule(rule.id);
    });
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border p-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted">
        <Icon className="size-4 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium truncate">
            {ruleJson.name ?? "Unnamed rule"}
          </p>
          <Badge variant="secondary" className="text-[10px] shrink-0">
            {RULE_TYPE_LABELS[ruleJson.type] ?? ruleJson.type}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground truncate mt-0.5">
          {getRuleDescription(ruleJson)}
        </p>
      </div>
      <Switch
        checked={rule.is_active}
        onCheckedChange={handleToggle}
        disabled={isPending}
        size="sm"
      />
      <AlertDialog>
        <AlertDialogTrigger
          render={<Button variant="ghost" size="icon-sm" />}
        >
          <Trash2 className="size-3.5 text-muted-foreground" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete alert rule?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the rule &ldquo;
              {ruleJson.name ?? "Unnamed"}&rdquo;. You will stop receiving
              alerts from this rule.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete rule"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function CreateRuleDialog({ disabled }: { disabled: boolean }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [ruleType, setRuleType] = useState("filing_type");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.set("rule_type", ruleType);

    startTransition(async () => {
      const result = await createAlertRule(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setOpen(false);
        setRuleType("filing_type");
        setError(null);
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          setError(null);
          setRuleType("filing_type");
        }
      }}
    >
      <DialogTrigger
        render={<Button size="sm" disabled={disabled} />}
      >
        <Plus className="size-3.5" />
        Add rule
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Create Alert Rule</DialogTitle>
          <DialogDescription>
            Set up conditions to get notified when a matching filing is
            published.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rule-name">Rule name</Label>
            <Input
              id="rule-name"
              name="name"
              placeholder="e.g. High significance 8-K"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Rule type</Label>
            <Select value={ruleType} onValueChange={(val) => { if (val) setRuleType(val); }}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="filing_type">Filing Type</SelectItem>
                <SelectItem value="significance">
                  Significance Score
                </SelectItem>
                <SelectItem value="insider_activity">
                  Insider Activity
                </SelectItem>
                <SelectItem value="keyword">Keyword Match</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {ruleType === "filing_type" && <FilingTypeFields />}
          {ruleType === "significance" && <SignificanceFields />}
          {ruleType === "insider_activity" && <InsiderActivityFields />}
          {ruleType === "keyword" && <KeywordFields />}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create rule"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function FilingTypeFields() {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Label>Filing type</Label>
        <Select name="filing_type" defaultValue="8-K">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10-K">10-K (Annual Report)</SelectItem>
            <SelectItem value="10-Q">10-Q (Quarterly Report)</SelectItem>
            <SelectItem value="8-K">8-K (Current Report)</SelectItem>
            <SelectItem value="DEF 14A">DEF 14A (Proxy Statement)</SelectItem>
            <SelectItem value="Form 4">Form 4 (Insider Transaction)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="ft-sig">Minimum significance (optional)</Label>
        <Input
          id="ft-sig"
          name="min_significance"
          type="number"
          min={1}
          max={10}
          placeholder="1-10"
        />
        <p className="text-xs text-muted-foreground">
          Only alert when the filing reaches this significance level.
        </p>
      </div>
    </div>
  );
}

function SignificanceFields() {
  return (
    <div className="space-y-2">
      <Label htmlFor="sig-score">Minimum significance score</Label>
      <Input
        id="sig-score"
        name="min_significance"
        type="number"
        min={1}
        max={10}
        placeholder="e.g. 7"
        required
      />
      <p className="text-xs text-muted-foreground">
        Alert when any filing for your tracked stocks has a significance score at
        or above this value (1-10).
      </p>
    </div>
  );
}

function InsiderActivityFields() {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Label>Transaction type</Label>
        <Select name="activity" defaultValue="any">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any (buy or sell)</SelectItem>
            <SelectItem value="buy">Buy only</SelectItem>
            <SelectItem value="sell">Sell only</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="insider-amount">Minimum amount (optional)</Label>
        <Input
          id="insider-amount"
          name="min_amount"
          type="number"
          min={0}
          placeholder="e.g. 100000"
        />
        <p className="text-xs text-muted-foreground">
          Only alert when the transaction total value exceeds this amount in USD.
        </p>
      </div>
    </div>
  );
}

function KeywordFields() {
  return (
    <div className="space-y-2">
      <Label htmlFor="keywords">Keywords</Label>
      <Input
        id="keywords"
        name="keywords"
        placeholder="e.g. bankruptcy, chapter 11, restructuring"
        required
      />
      <p className="text-xs text-muted-foreground">
        Comma-separated keywords. Alert when any filing summary contains at
        least one of these.
      </p>
    </div>
  );
}
