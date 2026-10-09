"use client";

import { RecruiterView } from "./RecruiterView";
import { useRecruiterNav } from "./RecruiterNav";

export function RecruiterPage() {
  const { close } = useRecruiterNav();

  return (
    <div className="os-root os-page h-dvh text-foreground">
      <div className="sticky top-0 z-10 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={close}
          className="text-sm text-[hsl(var(--os-accent))] underline underline-offset-2"
        >
          Back to Previous View
        </button>
      </div>
      <div className="px-4 py-6 md:px-8">
        <RecruiterView />
      </div>
    </div>
  );
}
