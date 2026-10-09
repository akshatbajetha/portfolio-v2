"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import { profile } from "@/lib/portfolio";
import { Clock } from "./Clock";
import { UserGlyph } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const startY = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") onUnlock();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onUnlock]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    startY.current = event.clientY;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startY.current == null) return;
    const dy = startY.current - event.clientY;
    startY.current = null;
    if (dy > 72) onUnlock();
  };

  return (
    <div
      className="os-root os-lock os-fade relative flex h-dvh flex-col items-center px-6 touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        startY.current = null;
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute right-3 top-3 z-10">
        <ThemeToggle tooltip={false} />
      </div>
      <Clock
        showDate
        className="relative z-10 mt-[18vh] text-center text-white drop-shadow-lg [&>p:first-child]:text-7xl [&>p:first-child]:font-light [&>p:first-child]:text-white [&>p:last-child]:mt-2 [&>p:last-child]:text-lg [&>p:last-child]:text-white/80"
      />
      <div className="relative z-10 mt-auto mb-[8vh] flex flex-col items-center text-white">
        <UserGlyph className="h-16 w-16 drop-shadow-md" />
        <p className="mt-3 text-lg text-white drop-shadow">{profile.name}</p>
        <p className="text-sm text-white/80">{profile.role}</p>
        <button
          type="button"
          autoFocus
          onClick={onUnlock}
          className="mt-6 rounded-md bg-white/18 px-8 py-2 text-sm text-white backdrop-blur-md hover:bg-white/28 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white md:inline-flex"
        >
          Unlock
        </button>
        <p className="mt-6 text-xs text-white/70 md:hidden">Swipe up to unlock</p>
        <span className="mt-3 h-1.5 w-28 rounded-full bg-white/70 md:hidden" />
      </div>
    </div>
  );
}
