"use client";

/**
 * Keyboard-accessible skip link that appears on Tab focus.
 * Placed as the first focusable element in the layout.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Skip to content
    </a>
  );
}
