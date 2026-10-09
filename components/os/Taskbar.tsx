"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Clock } from "./Clock";
import { FileGlyph, FolderGlyph, UserGlyph, WindowsLogo } from "./icons";
import { StartMenu } from "./StartMenu";
import { TaskbarTip } from "./TaskbarTip";
import { ThemeToggle } from "./ThemeToggle";
import { useWindows, type WindowId } from "./WindowManager";

function TaskbarGlyph({ id }: { id: WindowId }) {
  const className = "h-5 w-5";
  if (id === "about") return <UserGlyph className={className} />;
  if (id.startsWith("project:")) {
    return <FileGlyph className={className} />;
  }
  return <FolderGlyph className={className} />;
}

export function Taskbar({
  startOpen,
  onStartOpenChange,
}: {
  startOpen: boolean;
  onStartOpenChange: (open: boolean) => void;
}) {
  const { windows, focusedId, toggleTaskbarWindow } = useWindows();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        onStartOpenChange(false);
      }
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [startOpen, onStartOpenChange]);

  return (
    <div
      ref={menuRef}
      className="os-taskbar absolute inset-x-0 bottom-0 z-[2000] flex items-center px-2"
    >
      <AnimatePresence>
        {startOpen && <StartMenu onClose={() => onStartOpenChange(false)} />}
      </AnimatePresence>

      <div className="flex min-w-0 flex-1 items-center justify-center px-24">
        <div className="flex items-center gap-1">
          <TaskbarTip label="Start" disabled={startOpen}>
            <button
              type="button"
              onClick={() => onStartOpenChange(!startOpen)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md transition-transform hover:-translate-y-px",
                "hover:bg-black/10 dark:hover:bg-white/10",
                startOpen && "bg-black/10 dark:bg-white/15"
              )}
              aria-expanded={startOpen}
              aria-haspopup="menu"
              aria-label="Start"
            >
              <WindowsLogo className="h-5 w-5" />
            </button>
          </TaskbarTip>

          {windows.map((win) => {
            const active = focusedId === win.id && !win.minimized;
            return (
              <TaskbarTip
                key={win.id}
                label={win.title}
              >
                <button
                  type="button"
                  onClick={() => toggleTaskbarWindow(win.id)}
                  className={cn(
                    "relative inline-flex h-10 w-10 items-center justify-center rounded-md transition-transform hover:-translate-y-px",
                    "hover:bg-black/10 dark:hover:bg-white/10",
                    active && "bg-black/10 dark:bg-white/10"
                  )}
                  aria-label={
                    win.minimized ? `Restore ${win.title}` : win.title
                  }
                >
                  <TaskbarGlyph id={win.id} />
                  <span
                    className={cn(
                      "absolute bottom-0.5 h-0.5 rounded-full transition-all",
                      active
                        ? "w-4 bg-[hsl(var(--os-accent))]"
                        : "w-1.5 bg-foreground/45"
                    )}
                  />
                </button>
              </TaskbarTip>
            );
          })}
        </div>
      </div>

      <div className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-0.5">
        <ThemeToggle />
        <Clock className="rounded-md px-2 py-1 text-right text-[11px] leading-tight tabular-nums hover:bg-black/10 dark:hover:bg-white/10" />
      </div>
    </div>
  );
}
