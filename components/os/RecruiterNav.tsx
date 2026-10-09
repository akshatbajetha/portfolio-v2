"use client";

import { createContext, useContext, type ReactNode } from "react";

const RecruiterNavContext = createContext<{
  open: () => void;
  close: () => void;
} | null>(null);

export function RecruiterNavProvider({
  open,
  close,
  children,
}: {
  open: () => void;
  close: () => void;
  children: ReactNode;
}) {
  return (
    <RecruiterNavContext.Provider value={{ open, close }}>
      {children}
    </RecruiterNavContext.Provider>
  );
}

export function useRecruiterNav() {
  const ctx = useContext(RecruiterNavContext);
  if (!ctx) {
    throw new Error("useRecruiterNav must be used within RecruiterNavProvider");
  }
  return ctx;
}
