"use client";

import { useState, useTransition, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Bell, FileText, CreditCard, Check } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  getNotifications,
  markNotificationRead,
  markAllNotificationsRead,
  type Notification,
} from "@/app/(dashboard)/notifications-actions";

function getTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

function NotificationIcon({ type }: { type: string }) {
  switch (type) {
    case "filing":
      return <FileText className="size-4 shrink-0 text-primary" />;
    case "subscription":
      return <CreditCard className="size-4 shrink-0 text-green-500" />;
    default:
      return <Bell className="size-4 shrink-0 text-muted-foreground" />;
  }
}

interface NotificationBellProps {
  userId: string;
  initialUnreadCount: number;
}

export function NotificationBell({
  userId,
  initialUnreadCount,
}: NotificationBellProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(initialUnreadCount);
  const [loaded, setLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  const loadNotifications = useCallback(() => {
    if (loaded) return;
    startTransition(async () => {
      const result = await getNotifications(userId);
      if (!result.error) {
        setNotifications(result.data.slice(0, 10));
        setLoaded(true);
      }
    });
  }, [userId, loaded]);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (nextOpen) {
      loadNotifications();
    }
  }

  function handleNotificationClick(notification: Notification) {
    if (!notification.read_at) {
      startTransition(async () => {
        await markNotificationRead(notification.id);
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === notification.id
              ? { ...n, read_at: new Date().toISOString() }
              : n
          )
        );
        setUnreadCount((prev) => Math.max(0, prev - 1));
      });
    }
    if (notification.link) {
      setOpen(false);
      router.push(notification.link);
    }
  }

  function handleMarkAllRead() {
    startTransition(async () => {
      await markAllNotificationsRead(userId);
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, read_at: n.read_at ?? new Date().toISOString() }))
      );
      setUnreadCount(0);
    });
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger
        className="relative inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
        aria-label="Notifications"
      >
        <Bell className="size-4" />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </PopoverTrigger>

      <PopoverContent align="end" sideOffset={8} className="w-80 p-0">
        <PopoverHeader className="flex flex-row items-center justify-between border-b px-3 py-2">
          <PopoverTitle className="text-sm font-semibold">
            Notifications
          </PopoverTitle>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="xs"
              onClick={handleMarkAllRead}
              disabled={isPending}
            >
              <Check className="size-3" />
              Mark all read
            </Button>
          )}
        </PopoverHeader>

        <div className="max-h-80 overflow-y-auto">
          {isPending && !loaded ? (
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-muted-foreground">Loading...</span>
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Bell className="mb-2 size-8 text-muted-foreground/40" />
              <span className="text-sm text-muted-foreground">
                No notifications yet
              </span>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {notifications.map((notification) => (
                <li key={notification.id}>
                  <button
                    type="button"
                    onClick={() => handleNotificationClick(notification)}
                    className={`flex w-full items-start gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted/50 ${
                      notification.read_at
                        ? "opacity-60"
                        : "bg-primary/[0.03]"
                    }`}
                  >
                    <div className="mt-0.5">
                      <NotificationIcon type={notification.type} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-sm ${
                          notification.read_at
                            ? "font-normal"
                            : "font-medium"
                        }`}
                      >
                        {notification.title}
                      </p>
                      {notification.body && (
                        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                          {notification.body}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-muted-foreground/70">
                        {getTimeAgo(notification.created_at)}
                      </p>
                    </div>
                    {!notification.read_at && (
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
