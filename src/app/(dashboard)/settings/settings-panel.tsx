"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Profile, Subscription, AlertRule } from "@/lib/supabase/queries";
import type { TierName } from "@/lib/constants/tiers";
import { updateProfile, sendPasswordReset, deleteAccount } from "./settings-actions";
import { AlertRulesSection } from "./alert-rules-section";

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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  User,
  Bell,
  CreditCard,
  Download,
  Mail,
  Key,
  Trash2,
  ArrowUpRight,
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

interface SettingsPanelProps {
  user: { id: string; email: string };
  profile: Profile | null;
  subscription: Subscription | null;
  alertRules: AlertRule[];
  tierInfo: TierInfo;
}

export function SettingsPanel({
  user,
  profile,
  subscription,
  alertRules,
  tierInfo,
}: SettingsPanelProps) {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account, notifications, and subscription.
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="w-full overflow-x-auto">
          <TabsTrigger value="profile">
            <User className="size-3.5" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="size-3.5" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="subscription">
            <CreditCard className="size-3.5" />
            Subscription
          </TabsTrigger>
          <TabsTrigger value="data">
            <Download className="size-3.5" />
            Data &amp; Export
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileTab user={user} profile={profile} />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationsTab alertRules={alertRules} tierInfo={tierInfo} />
        </TabsContent>

        <TabsContent value="subscription">
          <SubscriptionTab
            subscription={subscription}
            tierInfo={tierInfo}
            alertRules={alertRules}
          />
        </TabsContent>

        <TabsContent value="data">
          <DataExportTab alertRules={alertRules} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// --- Profile Tab ---

function ProfileTab({
  user,
  profile,
}: {
  user: { id: string; email: string };
  profile: Profile | null;
}) {
  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [resetMessage, setResetMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  function handleSaveProfile() {
    setMessage(null);
    const formData = new FormData();
    formData.set("full_name", fullName);

    startTransition(async () => {
      const result = await updateProfile(formData);
      if (result.error) {
        setMessage({ type: "error", text: result.error });
      } else {
        setMessage({ type: "success", text: "Profile updated." });
      }
    });
  }

  function handlePasswordReset() {
    setResetMessage(null);
    setIsResetting(true);

    startTransition(async () => {
      const result = await sendPasswordReset();
      setIsResetting(false);
      if (result.error) {
        setResetMessage({ type: "error", text: result.error });
      } else {
        setResetMessage({
          type: "success",
          text: "Password reset email sent. Check your inbox.",
        });
      }
    });
  }

  return (
    <div className="space-y-4 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your name and manage your account details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">Full name</Label>
            <Input
              id="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          {message && (
            <Alert
              variant={message.type === "error" ? "destructive" : "default"}
            >
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveProfile} disabled={isPending}>
            {isPending ? "Saving..." : "Save changes"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Send a password reset link to your email address.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {resetMessage && (
            <Alert
              variant={
                resetMessage.type === "error" ? "destructive" : "default"
              }
            >
              <AlertDescription>{resetMessage.text}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            onClick={handlePasswordReset}
            disabled={isResetting}
          >
            <Key className="size-3.5" />
            {isResetting ? "Sending..." : "Send reset email"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// --- Notifications Tab ---

function NotificationsTab({ alertRules, tierInfo }: { alertRules: AlertRule[]; tierInfo: TierInfo }) {
  const [digestFrequency, setDigestFrequency] = useState(tierInfo.digest);
  const [highSignificanceAlerts, setHighSignificanceAlerts] = useState(false);
  const [insiderTradeAlerts, setInsiderTradeAlerts] = useState(false);

  const isFree = tierInfo.tier === "free";
  const supportsRealtimeAlerts =
    tierInfo.tier === "plus" || tierInfo.tier === "pro";

  return (
    <div className="space-y-4 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Digest</CardTitle>
          <CardDescription>
            Choose how often you receive email summaries of new filings for your
            tracked stocks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Digest frequency</Label>
            <Select
              value={digestFrequency}
              onValueChange={(val) => setDigestFrequency(val as string)}
            >
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                {!isFree && <SelectItem value="daily">Daily</SelectItem>}
              </SelectContent>
            </Select>
            {isFree && (
              <p className="text-xs text-muted-foreground">
                Daily digests are available on paid plans.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Real-Time Alerts</CardTitle>
          <CardDescription>
            Get notified immediately when important filings are published.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {supportsRealtimeAlerts ? (
            <>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="high-sig">High significance filings</Label>
                  <p className="text-xs text-muted-foreground">
                    Email alerts for filings with significance score 8 or above.
                  </p>
                </div>
                <Switch
                  id="high-sig"
                  checked={highSignificanceAlerts}
                  onCheckedChange={setHighSignificanceAlerts}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="insider">Insider trade alerts</Label>
                  <p className="text-xs text-muted-foreground">
                    Email alerts when insiders buy or sell shares of your
                    tracked stocks.
                  </p>
                </div>
                <Switch
                  id="insider"
                  checked={insiderTradeAlerts}
                  onCheckedChange={setInsiderTradeAlerts}
                />
              </div>
            </>
          ) : (
            <Alert>
              <Mail className="size-4" />
              <AlertTitle>Upgrade for real-time alerts</AlertTitle>
              <AlertDescription>
                Real-time email alerts for high-significance filings and insider
                trades are available on Plus and Pro plans.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        {!supportsRealtimeAlerts && (
          <CardFooter>
            <Button variant="outline" render={<Link href="/pricing" />}>
              View plans
              <ArrowUpRight className="size-3.5" />
            </Button>
          </CardFooter>
        )}
      </Card>

      <AlertRulesSection alertRules={alertRules} tierInfo={tierInfo} />
    </div>
  );
}

// --- Subscription Tab ---

function SubscriptionTab({
  subscription,
  tierInfo,
  alertRules,
}: {
  subscription: Subscription | null;
  tierInfo: TierInfo;
  alertRules: AlertRule[];
}) {
  const isPaid = tierInfo.tier !== "free";
  const stocksLabel =
    tierInfo.stocks === -1 ? "Unlimited" : String(tierInfo.stocks);
  const alertRulesLabel =
    tierInfo.alertRules === -1 ? "Unlimited" : String(tierInfo.alertRules);

  return (
    <div className="space-y-4 pt-4">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>Current Plan</CardTitle>
            <Badge variant={isPaid ? "default" : "secondary"}>
              {tierInfo.name}
            </Badge>
          </div>
          <CardDescription>
            {isPaid ? `$${tierInfo.priceUSD}/month` : "Free forever"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {subscription?.current_period_start &&
            subscription?.current_period_end && (
              <div className="text-sm">
                <span className="text-muted-foreground">Current period: </span>
                {new Date(
                  subscription.current_period_start
                ).toLocaleDateString()}
                {" \u2013 "}
                {new Date(
                  subscription.current_period_end
                ).toLocaleDateString()}
              </div>
            )}

          <Separator />

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Usage</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <UsageStat label="Tracked stocks" limit={stocksLabel} />
              <UsageStat
                label="Alert rules"
                used={alertRules.length}
                limit={alertRulesLabel}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button render={<Link href="/pricing" />}>
            {isPaid ? "Change plan" : "Upgrade"}
            <ArrowUpRight className="size-3.5" />
          </Button>
          {isPaid && <CancelSubscriptionDialog />}
        </CardFooter>
      </Card>
    </div>
  );
}

function UsageStat({
  label,
  used = 0,
  limit,
}: {
  label: string;
  used?: number;
  limit: string;
}) {
  return (
    <div className="rounded-lg border p-3 space-y-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold">
        {used}{" "}
        <span className="text-sm font-normal text-muted-foreground">
          / {limit}
        </span>
      </p>
    </div>
  );
}

function CancelSubscriptionDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="ghost" />}>
        Cancel subscription
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel subscription?</AlertDialogTitle>
          <AlertDialogDescription>
            Your plan will remain active until the end of your current billing
            period. After that, you will be downgraded to the Free plan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep subscription</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Confirm cancellation
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// --- Data & Export Tab ---

function DataExportTab({ alertRules }: { alertRules: AlertRule[] }) {
  const [isDeleting, startDeleteTransition] = useTransition();

  function downloadCsv(filename: string, csvContent: string) {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function handleExportAlertRules() {
    if (alertRules.length === 0) return;

    const headers = ["id", "is_active", "rule_json", "created_at"];
    const rows = alertRules.map((rule) => [
      rule.id,
      String(rule.is_active),
      `"${JSON.stringify(rule.rule_json).replace(/"/g, '""')}"`,
      rule.created_at,
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join(
      "\n"
    );
    downloadCsv("alert-rules.csv", csv);
  }

  function handleDeleteAccount() {
    startDeleteTransition(async () => {
      await deleteAccount();
    });
  }

  return (
    <div className="space-y-4 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Export Data</CardTitle>
          <CardDescription>Download your data as CSV files.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Alert rules</p>
              <p className="text-xs text-muted-foreground">
                Export your {alertRules.length} alert rule
                {alertRules.length !== 1 ? "s" : ""} as CSV.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportAlertRules}
              disabled={alertRules.length === 0}
            >
              <Download className="size-3.5" />
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              <Trash2 className="size-3.5" />
              Delete account
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete your account, tracked stocks,
                  alert rules, and all associated data. This action cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete my account"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}
