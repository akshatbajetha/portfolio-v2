"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AndroidShell } from "./android/AndroidShell";
import { Desktop } from "./Desktop";
import { LockScreen } from "./LockScreen";
import { OsWindow } from "./OsWindow";
import { RecruiterNavProvider } from "./RecruiterNav";
import { RecruiterPage } from "./RecruiterPage";
import { Taskbar } from "./Taskbar";
import { useIsDesktop } from "./use-media-query";
import { WindowProvider, useWindows } from "./WindowManager";

const ease = [0.22, 1, 0.36, 1] as const;

function DesktopSession() {
  const { windows, closeWindow, focusedId } = useWindows();
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (startOpen) {
        event.preventDefault();
        setStartOpen(false);
        return;
      }
      if (focusedId) {
        event.preventDefault();
        closeWindow(focusedId);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [startOpen, focusedId, closeWindow]);

  return (
    <div className="os-root relative h-dvh overflow-hidden text-foreground">
      <Desktop />
      <AnimatePresence>
        {windows.map((win) => (
          <OsWindow key={win.id} win={win} />
        ))}
      </AnimatePresence>
      <Taskbar startOpen={startOpen} onStartOpenChange={setStartOpen} />
    </div>
  );
}

function Session() {
  const isDesktop = useIsDesktop();

  if (isDesktop === null) {
    return <div className="os-root h-dvh" />;
  }

  return isDesktop ? <DesktopSession /> : <AndroidShell />;
}

export function OperatingSystem() {
  const [unlocked, setUnlocked] = useState(false);
  const [recruiter, setRecruiter] = useState(false);
  const unlock = useCallback(() => setUnlocked(true), []);
  const openRecruiter = useCallback(() => setRecruiter(true), []);
  const closeRecruiter = useCallback(() => setRecruiter(false), []);

  if (!unlocked) {
    return <LockScreen onUnlock={unlock} />;
  }

  return (
    <WindowProvider>
      <RecruiterNavProvider open={openRecruiter} close={closeRecruiter}>
        <AnimatePresence mode="wait">
          {recruiter ? (
            <motion.div
              key="recruiter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease }}
              className="h-dvh"
            >
              <RecruiterPage />
            </motion.div>
          ) : (
            <motion.div
              key="os"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease }}
              className="h-dvh"
            >
              <Session />
            </motion.div>
          )}
        </AnimatePresence>
      </RecruiterNavProvider>
    </WindowProvider>
  );
}
