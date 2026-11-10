"use client";

import { useClipboard } from "@/hooks/useClipboard";
import { FiCheck, FiCopy } from "react-icons/fi";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export default function CopyEmailButton({
  email,
  className = "",
}: CopyEmailButtonProps) {
  const { copied, copy } = useClipboard(2500);

  return (
    <button
      type="button"
      onClick={() => copy(email)}
      aria-label="Copy email address to clipboard"
      className={`h-11 px-2.5 sm:px-5 text-[11px] sm:text-xs font-mono-tech uppercase tracking-wider border border-borderline hover:border-primary text-primary hover:bg-canvas inline-flex items-center justify-center gap-1.5 sm:gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer whitespace-nowrap ${className}`}
    >
      {copied ? (
        <>
          <FiCheck className="w-3.5 h-3.5 shrink-0 text-primary" aria-hidden="true" />
          <span className="font-medium">Copied</span>
        </>
      ) : (
        <>
          <FiCopy className="w-3.5 h-3.5 shrink-0 text-primary" aria-hidden="true" />
          <span>Copy Address</span>
        </>
      )}
    </button>
  );
}
