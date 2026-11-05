import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserProfile } from "@/lib/supabase/queries";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Briefcase,
  Settings,
  Shield,
  FileText,
  GitBranch,
  CreditCard,
  SlidersHorizontal,
  KeyRound,
  Gift,
} from "lucide-react";
import { NotificationBell } from "@/components/notification-bell";

export const dynamic = "force-dynamic";

const NAV_ITEMS = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Portfolio", href: "/portfolio", icon: Briefcase },
  { title: "Screener", href: "/screener", icon: SlidersHorizontal },
  { title: "API Keys", href: "/api-keys", icon: KeyRound },
  { title: "Referrals", href: "/referrals", icon: Gift },
  { title: "Billing", href: "/billing", icon: CreditCard },
  { title: "Settings", href: "/settings", icon: Settings },
];

const ADMIN_ITEMS = [
  { title: "Content", href: "/admin/content", icon: FileText },
  { title: "Pipeline", href: "/admin/pipeline", icon: GitBranch },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const profile = await getUserProfile(supabase, user.id);
  const displayName = profile?.full_name || user.email?.split("@")[0] || "User";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const isAdmin =
    process.env.ADMIN_EMAIL && user.email === process.env.ADMIN_EMAIL;

  // Fetch unread notification count for the bell icon
  const { count: unreadCount } = await supabase
    .from("notifications" as never)
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .is("read_at", null);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
              PC
            </div>
            <span className="text-sm font-semibold tracking-tight">
              Portfolio Copilot
            </span>
          </div>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ITEMS.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      render={<Link href={item.href} />}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {isAdmin && (
            <SidebarGroup>
              <SidebarGroupLabel>
                <Shield className="mr-1 size-3" />
                Admin
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {ADMIN_ITEMS.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        render={<Link href={item.href} />}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                render={<Link href="/settings" />}
                tooltip={displayName}
              >
                <Avatar className="h-7 w-7">
                  {profile?.avatar_url && (
                    <AvatarImage src={profile.avatar_url} alt={displayName} />
                  )}
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="truncate text-sm font-medium">
                    {displayName}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="ml-auto">
            <NotificationBell
              userId={user.id}
              initialUnreadCount={unreadCount ?? 0}
            />
          </div>
        </header>
        <main id="main-content" className="flex-1 overflow-auto p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
