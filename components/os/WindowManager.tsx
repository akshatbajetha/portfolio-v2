"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { projects, type FolderId } from "@/lib/portfolio";

export type WindowId = FolderId | "about" | `project:${string}`;

export type OsWindowState = {
  id: WindowId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
};

type WindowContextValue = {
  windows: OsWindowState[];
  focusedId: WindowId | null;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, x: number, y: number) => void;
  minimizeWindow: (id: WindowId) => void;
  toggleMaximize: (id: WindowId) => void;
  restoreAndMove: (id: WindowId, x: number, y: number) => void;
  toggleTaskbarWindow: (id: WindowId) => void;
  closeAllWindows: () => void;
};

const WindowContext = createContext<WindowContextValue | null>(null);

const WINDOW_SIZE: Record<string, { width: number; height: number }> = {
  about: { width: 440, height: 360 },
  experience: { width: 580, height: 520 },
  projects: { width: 440, height: 440 },
  skills: { width: 500, height: 460 },
  education: { width: 440, height: 300 },
  project: { width: 540, height: 380 },
};

export function titleFor(id: WindowId): string {
  if (id === "about") return "About";
  if (id === "experience") return "Experience";
  if (id === "projects") return "Projects";
  if (id === "skills") return "Technical skills";
  if (id === "education") return "Education";
  const slug = id.slice("project:".length);
  return projects.find((project) => project.slug === slug)?.title ?? "File";
}

function sizeFor(id: WindowId) {
  if (id.startsWith("project:")) return WINDOW_SIZE.project;
  return WINDOW_SIZE[id] ?? { width: 480, height: 400 };
}

function topVisible(list: OsWindowState[]) {
  return list
    .filter((win) => !win.minimized)
    .reduce<OsWindowState | null>(
      (best, win) => (!best || win.zIndex > best.zIndex ? win : best),
      null
    );
}

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<OsWindowState[]>([]);
  const [focusedId, setFocusedId] = useState<WindowId | null>(null);
  const zRef = useRef(10);
  const focusedRef = useRef<WindowId | null>(null);

  useEffect(() => {
    focusedRef.current = focusedId;
  }, [focusedId]);

  const focusWindow = useCallback((id: WindowId) => {
    zRef.current += 1;
    const nextZ = zRef.current;
    setWindows((list) =>
      list.map((win) =>
        win.id === id ? { ...win, zIndex: nextZ, minimized: false } : win
      )
    );
    setFocusedId(id);
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setWindows((list) => {
      const existing = list.find((win) => win.id === id);
      zRef.current += 1;
      const nextZ = zRef.current;
      if (existing) {
        return list.map((win) =>
          win.id === id
            ? { ...win, zIndex: nextZ, minimized: false }
            : win
        );
      }
      const size = sizeFor(id);
      const offset = (list.length % 6) * 28;
      return [
        ...list,
        {
          id,
          title: titleFor(id),
          x: 120 + offset,
          y: 48 + offset,
          width: size.width,
          height: size.height,
          zIndex: nextZ,
          minimized: false,
          maximized: false,
        },
      ];
    });
    setFocusedId(id);
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((list) => {
      const remaining = list.filter((win) => win.id !== id);
      setFocusedId(topVisible(remaining)?.id ?? null);
      return remaining;
    });
  }, []);

  const moveWindow = useCallback((id: WindowId, x: number, y: number) => {
    setWindows((list) =>
      list.map((win) => (win.id === id ? { ...win, x, y } : win))
    );
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((list) => {
      const next = list.map((win) =>
        win.id === id ? { ...win, minimized: true } : win
      );
      setFocusedId(topVisible(next)?.id ?? null);
      return next;
    });
  }, []);

  const toggleMaximize = useCallback((id: WindowId) => {
    zRef.current += 1;
    const nextZ = zRef.current;
    setWindows((list) =>
      list.map((win) =>
        win.id === id
          ? {
              ...win,
              maximized: !win.maximized,
              minimized: false,
              zIndex: nextZ,
            }
          : win
      )
    );
    setFocusedId(id);
  }, []);

  const restoreAndMove = useCallback((id: WindowId, x: number, y: number) => {
    setWindows((list) =>
      list.map((win) =>
        win.id === id
          ? { ...win, maximized: false, minimized: false, x, y }
          : win
      )
    );
    setFocusedId(id);
  }, []);

  const closeAllWindows = useCallback(() => {
    setWindows([]);
    setFocusedId(null);
  }, []);

  const toggleTaskbarWindow = useCallback(
    (id: WindowId) => {
      const current = windows.find((win) => win.id === id);
      if (!current) return;
      if (!current.minimized && focusedRef.current === id) {
        minimizeWindow(id);
        return;
      }
      focusWindow(id);
    },
    [windows, minimizeWindow, focusWindow]
  );

  const value = useMemo(
    () => ({
      windows,
      focusedId,
      openWindow,
      closeWindow,
      focusWindow,
      moveWindow,
      minimizeWindow,
      toggleMaximize,
      restoreAndMove,
      toggleTaskbarWindow,
      closeAllWindows,
    }),
    [
      windows,
      focusedId,
      openWindow,
      closeWindow,
      focusWindow,
      moveWindow,
      minimizeWindow,
      toggleMaximize,
      restoreAndMove,
      toggleTaskbarWindow,
      closeAllWindows,
    ]
  );

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) {
    throw new Error("useWindows must be used within WindowProvider");
  }
  return ctx;
}
