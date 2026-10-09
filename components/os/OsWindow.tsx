"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { motion } from "framer-motion";
import { Minus, Square, Copy, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWindows, type OsWindowState } from "./WindowManager";
import { WindowBody } from "./window-contents";
import { FileGlyph, FolderGlyph, UserGlyph } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

const TASKBAR = 48;

function WindowGlyph({ id }: { id: string }) {
  const className = "h-4 w-4";
  if (id === "about") return <UserGlyph className={className} />;
  if (id.startsWith("project:")) {
    return <FileGlyph className={className} />;
  }
  return <FolderGlyph className={className} />;
}

export function OsWindow({ win }: { win: OsWindowState }) {
  const {
    focusedId,
    focusWindow,
    closeWindow,
    moveWindow,
    minimizeWindow,
    toggleMaximize,
    restoreAndMove,
  } = useWindows();
  const focused = focusedId === win.id;
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const [canDrag, setCanDrag] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setCanDrag(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const onPointerDownTitle = (event: PointerEvent<HTMLDivElement>) => {
    focusWindow(win.id);
    if (!canDrag) return;
    if ((event.target as HTMLElement).closest("button")) return;

    let origX = win.x;
    let origY = win.y;

    if (win.maximized) {
      origX = Math.min(
        Math.max(0, event.clientX - win.width / 2),
        Math.max(0, window.innerWidth - win.width)
      );
      origY = 0;
      restoreAndMove(win.id, origX, origY);
    }

    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      origX,
      origY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;
    const maxX = Math.max(0, window.innerWidth - win.width);
    const maxY = Math.max(0, window.innerHeight - TASKBAR - 32);
    const x = Math.min(maxX, Math.max(0, drag.current.origX + dx));
    const y = Math.min(maxY, Math.max(0, drag.current.origY + dy));
    moveWindow(win.id, x, y);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  };

  return (
    <motion.section
      role="dialog"
      aria-labelledby={`${win.id}-title`}
      aria-hidden={win.minimized}
      data-maximized={win.maximized ? "true" : "false"}
      layout={!dragging}
      onPointerDown={() => {
        if (!win.minimized) focusWindow(win.id);
      }}
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={
        win.minimized
          ? { opacity: 0, scale: 0.84, y: 28 }
          : { opacity: focused ? 1 : 0.96, scale: 1, y: 0 }
      }
      exit={{ opacity: 0, scale: 0.96, y: 8 }}
      transition={{ duration: 0.2, ease, layout: { duration: 0.22, ease } }}
      className={cn(
        "os-window flex flex-col",
        win.minimized && "pointer-events-none"
      )}
      style={{
        zIndex: win.minimized ? 0 : win.zIndex,
        transformOrigin: "50% 100%",
        ["--os-x" as string]: `${win.x}px`,
        ["--os-y" as string]: `${win.y}px`,
        ["--os-w" as string]: `${win.width}px`,
        ["--os-h" as string]: `${win.height}px`,
      }}
    >
      <div
        onPointerDown={onPointerDownTitle}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          toggleMaximize(win.id);
        }}
        className={cn(
          "flex h-8 shrink-0 select-none items-center bg-[hsl(var(--os-titlebar)/0.9)]",
          canDrag && !win.maximized
            ? "cursor-grab active:cursor-grabbing"
            : "cursor-default"
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2 pl-3">
          <WindowGlyph id={win.id} />
          <h2 id={`${win.id}-title`} className="truncate text-[13px]">
            {win.title}
          </h2>
        </div>
        <div className="flex h-full">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              minimizeWindow(win.id);
            }}
            className="inline-flex h-full w-11 items-center justify-center hover:bg-black/10 dark:hover:bg-white/10"
            aria-label={`Minimize ${win.title}`}
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              toggleMaximize(win.id);
            }}
            className="inline-flex h-full w-11 items-center justify-center hover:bg-black/10 dark:hover:bg-white/10"
            aria-label={win.maximized ? `Restore ${win.title}` : `Maximize ${win.title}`}
          >
            {win.maximized ? (
              <Copy className="h-3 w-3 -scale-x-100" />
            ) : (
              <Square className="h-3 w-3" />
            )}
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeWindow(win.id);
            }}
            className="os-caption-close inline-flex h-full w-11 items-center justify-center hover:text-white"
            aria-label={`Close ${win.title}`}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <WindowBody id={win.id} />
      </div>
    </motion.section>
  );
}
