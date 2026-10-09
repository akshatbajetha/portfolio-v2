"use client";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useWindows } from "../WindowManager";
import { AndroidActivity } from "./AndroidActivity";
import { AndroidHome } from "./AndroidHome";

export function AndroidShell() {
  const { windows, focusedId, closeWindow, closeAllWindows, openWindow } =
    useWindows();
  const active = windows.find((win) => win.id === focusedId && !win.minimized);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !focusedId) return;
      event.preventDefault();
      if (focusedId.startsWith("project:")) {
        closeWindow(focusedId);
        openWindow("projects");
        return;
      }
      closeAllWindows();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedId, closeWindow, closeAllWindows, openWindow]);

  return (
    <div className="os-root os-fade relative h-dvh overflow-hidden text-foreground">
      <AndroidHome />
      <AnimatePresence>
        {active ? <AndroidActivity key={active.id} win={active} /> : null}
      </AnimatePresence>
    </div>
  );
}
