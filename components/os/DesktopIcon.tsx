"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function DesktopIcon({
  glyph,
  label,
  onOpen,
}: {
  glyph: ReactNode;
  label: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "flex w-[5.75rem] flex-col items-center gap-1 rounded-md px-1 py-2 text-center",
        "text-zinc-900 hover:bg-white/35 focus-visible:bg-white/35",
        "dark:text-white dark:hover:bg-white/10 dark:focus-visible:bg-white/10",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
      )}
    >
      <span className="drop-shadow-md">{glyph}</span>
      <span className="text-[11px] leading-tight drop-shadow-sm">{label}</span>
    </button>
  );
}
