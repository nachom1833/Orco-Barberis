"use client";

import { useState, useEffect } from "react";

export function useHoverSupport() {
  // Always initialize as false to match server rendering (SSR) and prevent hydration mismatch errors.
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover)");
    
    // We defer the state update using setTimeout to satisfy strict eslint rules
    // and prevent cascading renders during initial hydration.
    const syncState = () => {
      setSupportsHover(mediaQuery.matches);
    };

    const timer = setTimeout(syncState, 0);

    const handler = (e: MediaQueryListEvent) => {
      setSupportsHover(e.matches);
    };

    // Modern browsers support addEventListener, fallback for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => {
        clearTimeout(timer);
        mediaQuery.removeEventListener("change", handler);
      };
    } else {
      const legacyQuery = mediaQuery as {
        addListener?: (cb: (e: MediaQueryListEvent) => void) => void;
        removeListener?: (cb: (e: MediaQueryListEvent) => void) => void;
      };
      if (legacyQuery.addListener && legacyQuery.removeListener) {
        legacyQuery.addListener(handler);
        return () => {
          clearTimeout(timer);
          if (legacyQuery.removeListener) {
            legacyQuery.removeListener(handler);
          }
        };
      }
    }
  }, []); // Empty dependency array: runs only on client-side mount

  return supportsHover;
}
