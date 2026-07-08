"use client";

import { useState, useEffect } from "react";

export function useHoverSupport() {
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover)");
    setSupportsHover(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setSupportsHover(e.matches);
    };

    // Modern browsers support addEventListener, fallback for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      // @ts-ignore
      mediaQuery.addListener(handler);
      return () => {
        // @ts-ignore
        mediaQuery.removeListener(handler);
      };
    }
  }, []);

  return supportsHover;
}
