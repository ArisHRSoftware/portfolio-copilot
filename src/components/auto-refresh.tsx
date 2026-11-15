"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function AutoRefresh({ interval = 30000 }: { interval?: number }) {
  const router = useRouter();
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [ago, setAgo] = useState(0);

  useEffect(() => {
    const refreshTimer = setInterval(() => {
      router.refresh();
      setLastRefresh(Date.now());
    }, interval);

    return () => {
      clearInterval(refreshTimer);
    };
  }, [interval, router]);

  useEffect(() => {
    const tickTimer = setInterval(() => {
      setAgo(Math.floor((Date.now() - lastRefresh) / 1000));
    }, 1000);

    return () => {
      clearInterval(tickTimer);
    };
  }, [lastRefresh]);

  return (
    <span className="text-xs text-muted-foreground">Updated {ago}s ago</span>
  );
}
