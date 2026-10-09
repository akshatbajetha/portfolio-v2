"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { TaskbarTip } from "./TaskbarTip";

function formatNow() {
  const now = new Date();
  return {
    time: new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    }).format(now),
    date: new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(now),
    shortDate: new Intl.DateTimeFormat(undefined, {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }).format(now),
  };
}

export function Clock({
  showDate = false,
  compact = false,
  tooltip = true,
  className = "",
}: {
  showDate?: boolean;
  compact?: boolean;
  tooltip?: boolean;
  className?: string;
}) {
  const [now, setNow] = useState<ReturnType<typeof formatNow> | null>(null);

  useEffect(() => {
    const tick = () => setNow(formatNow());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) {
    return <span className={className} aria-hidden="true" />;
  }

  if (showDate) {
    return (
      <div className={className}>
        <p>{now.time}</p>
        <p>{now.date}</p>
      </div>
    );
  }

  if (compact) {
    return (
      <time className={className} dateTime={new Date().toISOString()}>
        {now.time}
      </time>
    );
  }

  const body = (
    <time
      className={cn("block", className)}
      dateTime={new Date().toISOString()}
    >
      <span className="block">{now.time}</span>
      <span className="block text-muted-foreground">{now.shortDate}</span>
    </time>
  );

  if (!tooltip) return body;

  return (
    <TaskbarTip label={`${now.time} · ${now.date}`} align="end">
      {body}
    </TaskbarTip>
  );
}
