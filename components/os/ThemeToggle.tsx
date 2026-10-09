"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TaskbarTip } from "./TaskbarTip";

export function ThemeToggle({ tooltip = true }: { tooltip?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light" : "Switch to dark";

  const button = (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-8 items-center justify-center rounded-md text-current hover:bg-black/10 dark:hover:bg-white/10"
      aria-label={label}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );

  if (!tooltip) return button;
  return (
    <TaskbarTip label={label} align="end">
      {button}
    </TaskbarTip>
  );
}
