"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function TaskbarTip({
  label,
  disabled = false,
  align = "center",
  children,
}: {
  label: string;
  disabled?: boolean;
  align?: "center" | "end";
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number>(0);

  const hide = () => {
    window.clearTimeout(timer.current);
    setOpen(false);
  };

  const show = () => {
    if (disabled) return;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(true), 160);
  };

  useEffect(() => {
    if (disabled) hide();
    return () => window.clearTimeout(timer.current);
  }, [disabled]);

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      <AnimatePresence>
        {open && !disabled && (
          <div
            className={
              align === "end"
                ? "pointer-events-none absolute bottom-[calc(100%+0.45rem)] right-0 z-[2100]"
                : "pointer-events-none absolute bottom-[calc(100%+0.45rem)] left-1/2 z-[2100] -translate-x-1/2"
            }
          >
            <motion.div
              role="tooltip"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="whitespace-nowrap rounded-md bg-neutral-800 px-2.5 py-1 text-[11px] text-white shadow-lg dark:bg-neutral-200 dark:text-neutral-900"
            >
              {label}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
