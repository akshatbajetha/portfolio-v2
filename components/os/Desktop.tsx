"use client";

import { folders, profile } from "@/lib/portfolio";
import { DesktopIcon } from "./DesktopIcon";
import { FileGlyph, FolderGlyph, UserGlyph } from "./icons";
import { useRecruiterNav } from "./RecruiterNav";
import { useWindows } from "./WindowManager";

export function Desktop() {
  const { openWindow } = useWindows();
  const { open: openRecruiter } = useRecruiterNav();

  return (
    <div className="absolute inset-0 bottom-[var(--os-taskbar-h)] overflow-hidden p-2">
      <div className="flex w-fit flex-col gap-1">
        <DesktopIcon
          glyph={<UserGlyph className="h-10 w-10" />}
          label={profile.name}
          onOpen={() => openWindow("about")}
        />
        {folders.map((folder) => (
          <DesktopIcon
            key={folder.id}
            glyph={<FolderGlyph className="h-10 w-10" />}
            label={folder.label}
            onOpen={() => openWindow(folder.id)}
          />
        ))}
      </div>
      <div className="absolute right-2 top-2">
        <DesktopIcon
          glyph={<FileGlyph className="h-10 w-10" />}
          label="Recruiter View"
          onOpen={openRecruiter}
        />
      </div>
    </div>
  );
}
