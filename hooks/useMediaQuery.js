"use client";

import { useSyncExternalStore, useCallback } from "react";

/**
 * Hook to evaluate responsive CSS media queries in JS
 * Uses useSyncExternalStore for concurrent-safe, zero-cascade rendering
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      if (typeof window === "undefined" || !window.matchMedia) {
        return () => {};
      }
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = () => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
