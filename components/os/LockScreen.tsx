"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import { ChevronUp } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { Clock } from "./Clock";
import { UserGlyph } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import { useIsDesktop } from "./use-media-query";

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const isDesktop = useIsDesktop();
  const y = useMotionValue(0);
  const unlocking = useRef(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") onUnlock();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onUnlock]);

  const slideUnlock = () => {
    if (unlocking.current) return;
    unlocking.current = true;
    const distance = typeof window !== "undefined" ? window.innerHeight : 900;
    void animate(y, -distance, {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    }).then(() => onUnlock());
  };

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (unlocking.current) return;
    const lifted = -info.offset.y;
    const flick = -info.velocity.y;
    if (lifted > 88 || flick > 650) {
      slideUnlock();
      return;
    }
    void animate(y, 0, { type: "spring", stiffness: 420, damping: 36 });
  };

  return (
    <motion.div
      className="os-root os-lock relative flex h-dvh flex-col items-center px-6 touch-none"
      style={{ y }}
      drag={isDesktop ? false : "y"}
      dragConstraints={{ top: -2000, bottom: 0 }}
      dragElastic={{ top: 0.08, bottom: 0.12 }}
      dragMomentum={false}
      dragDirectionLock
      onDragEnd={onDragEnd}
    >
      <div className="absolute inset-0 bg-black/35" />
      <div
        className="absolute right-3 top-3 z-10 touch-auto"
        onPointerDown={(event) => event.stopPropagation()}
      >
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
          autoFocus={isDesktop === true}
          onClick={onUnlock}
          onPointerDown={(event) => event.stopPropagation()}
          className="mt-6 hidden rounded-md bg-white/18 px-8 py-2 text-sm text-white backdrop-blur-md hover:bg-white/28 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white md:inline-flex"
        >
          Unlock
        </button>
        <motion.div
          className="mt-8 flex flex-col items-center md:hidden"
          animate={{ y: [0, -10, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronUp className="h-6 w-6" />
          <ChevronUp className="-mt-3 h-6 w-6 opacity-50" />
          <p className="mt-2 text-xs text-white/80">Swipe up to unlock</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
