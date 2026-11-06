"use client";

import { useCallback, useState } from "react";

export function useClipboard(timeoutMs: number = 2500) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), timeoutMs);
          return true;
        }
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), timeoutMs);
        return true;
      } catch (err) {
        console.error("Failed to copy to clipboard", err);
        return false;
      }
    },
    [timeoutMs]
  );

  return { copied, copy };
}
