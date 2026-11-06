"use client";

import { useEffect } from "react";
import { useLenis } from "@/providers/SmoothScrollProvider";

let lockCount = 0;
let previousOverflow = "";

export function useLockScroll(isLocked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isLocked) return;

    if (lockCount === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    lockCount += 1;

    if (lenis) {
      lenis.stop();
    }

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = previousOverflow;
      }
      if (lenis) {
        lenis.start();
      }
    };
  }, [isLocked, lenis]);
}
