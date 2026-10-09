"use client";

import { folders, profile, socialLinks } from "@/lib/portfolio";
import { FileGlyph, FolderGlyph, SocialTile, UserGlyph } from "../icons";
import { Clock } from "../Clock";
import { ThemeToggle } from "../ThemeToggle";
import { useRecruiterNav } from "../RecruiterNav";
import { useWindows, type WindowId } from "../WindowManager";

const apps: { id: WindowId; label: string }[] = [
  { id: "about", label: "About" },
  ...folders.map((folder) => ({ id: folder.id, label: folder.label })),
];

function DockTile({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center gap-1 text-white"
    >
      <SocialTile label={label} className="h-12 w-12 rounded-2xl" />
      <span className="max-w-[4.5rem] truncate text-[11px] drop-shadow">
        {label}
      </span>
    </a>
  );
}

export function AndroidHome() {
  const { openWindow } = useWindows();
  const { open: openRecruiter } = useRecruiterNav();

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex h-10 items-center justify-between px-4 text-white">
        <Clock
          compact
          tooltip={false}
          className="text-[13px] tabular-nums drop-shadow"
        />
        <ThemeToggle tooltip={false} />
      </div>

      <div className="grid flex-1 grid-cols-3 content-start gap-y-6 px-6 pt-8">
        <button
          type="button"
          onClick={openRecruiter}
          className="flex flex-col items-center gap-1.5 text-white"
        >
          <FileGlyph className="h-12 w-12 drop-shadow-md" />
          <span className="max-w-[5.5rem] text-center text-[12px] leading-tight drop-shadow">
            Recruiter View
          </span>
        </button>
        {apps.map((app) => (
          <button
            key={app.id}
            type="button"
            onClick={() => openWindow(app.id)}
            className="flex flex-col items-center gap-1.5 text-white"
          >
            {app.id === "about" ? (
              <UserGlyph className="h-12 w-12 drop-shadow-md" />
            ) : (
              <FolderGlyph className="h-12 w-12 drop-shadow-md" />
            )}
            <span className="max-w-[5.5rem] text-center text-[12px] leading-tight drop-shadow">
              {app.label}
            </span>
          </button>
        ))}
      </div>

      <div className="px-5 pb-2">
        <div className="mb-3 flex items-end justify-around gap-1 rounded-[1.75rem] bg-white/18 px-2 py-3 backdrop-blur-xl dark:bg-black/25">
          <button
            type="button"
            onClick={() => openWindow("about")}
            className="flex flex-col items-center gap-1 text-white"
          >
            <UserGlyph className="h-12 w-12 drop-shadow-md" />
            <span className="max-w-[4.5rem] truncate text-[11px] drop-shadow">
              {profile.name.split(" ")[0]}
            </span>
          </button>
          {socialLinks.map((link) => (
            <DockTile key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
        <div className="flex justify-center pb-[env(safe-area-inset-bottom)]">
          <span className="h-1.5 w-28 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
}
