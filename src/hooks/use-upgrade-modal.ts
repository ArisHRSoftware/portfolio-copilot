"use client";

import { useState } from "react";

export function useUpgradeModal() {
  const [state, setState] = useState<{
    open: boolean;
    feature: string;
    requiredTier: string;
  }>({ open: false, feature: "", requiredTier: "" });

  function show(feature: string, requiredTier: string) {
    setState({ open: true, feature, requiredTier });
  }

  function hide() {
    setState((prev) => ({ ...prev, open: false }));
  }

  return {
    ...state,
    show,
    hide,
    onOpenChange: (open: boolean) => {
      if (!open) hide();
    },
  };
}
