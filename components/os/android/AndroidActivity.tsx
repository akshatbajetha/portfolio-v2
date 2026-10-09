"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { WindowBody } from "../window-contents";
import { useWindows, type OsWindowState } from "../WindowManager";

const ease = [0.22, 1, 0.36, 1] as const;

export function AndroidActivity({ win }: { win: OsWindowState }) {
  const { closeWindow, openWindow, closeAllWindows } = useWindows();

  const goBack = () => {
    if (win.id.startsWith("project:")) {
      closeWindow(win.id);
      openWindow("projects");
      return;
    }
    closeWindow(win.id);
  };

  const goHome = () => {
    closeAllWindows();
  };

  return (
    <motion.section
      role="dialog"
      aria-labelledby="android-app-title"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.22, ease }}
      className="absolute inset-0 z-20 flex flex-col bg-[hsl(var(--os-window))]"
    >
      <header className="flex h-12 shrink-0 items-center gap-1 px-1 pt-[env(safe-area-inset-top)]">
        <button
          type="button"
          onClick={goBack}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 id="android-app-title" className="truncate text-[17px] font-medium">
          {win.title}
        </h1>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
        <WindowBody id={win.id} />
      </div>
      <div className="flex justify-center bg-[hsl(var(--os-window))] pb-[calc(0.4rem+env(safe-area-inset-bottom))] pt-1">
        <button
          type="button"
          onClick={goHome}
          className="h-1.5 w-28 rounded-full bg-foreground/35"
          aria-label="Home"
        />
      </div>
    </motion.section>
  );
}
