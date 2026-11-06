"use client";

import { useLiveClock } from "@/hooks/useLiveClock";

export default function LiveClock() {
  const { timeString, isMounted } = useLiveClock("Asia/Jakarta");

  return (
    <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-secondary">
      <span>
        {isMounted && timeString ? (
          <>
            <span className="text-primary font-medium">{timeString}</span>
            <span className="text-secondary ml-1">WIB (UTC+7)</span>
          </>
        ) : (
          <span className="text-secondary">--:--:-- WIB (UTC+7)</span>
        )}
      </span>
    </div>
  );
}
