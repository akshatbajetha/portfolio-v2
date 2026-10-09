"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import {
  folders,
  profile,
  projects,
  socialLinks,
} from "@/lib/portfolio";
import { FileGlyph, FolderGlyph, SocialTile, UserGlyph } from "./icons";
import { useRecruiterNav } from "./RecruiterNav";
import { useWindows, type WindowId } from "./WindowManager";

type PinnedId = WindowId | "recruiter";

export function StartMenu({ onClose }: { onClose: () => void }) {
  const { openWindow } = useWindows();
  const { open: openRecruiter } = useRecruiterNav();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const pinned = useMemo(
    () => [
      { id: "about" as PinnedId, label: "About", kind: "user" as const },
      { id: "recruiter" as PinnedId, label: "Recruiter View", kind: "page" as const },
      ...folders.map((folder) => ({
        id: folder.id as PinnedId,
        label: folder.label,
        kind: "folder" as const,
      })),
    ],
    []
  );

  const recommended = projects.filter((project) => project.featured);

  const filteredPinned = pinned.filter((item) =>
    q ? item.label.toLowerCase().includes(q) : true
  );
  const filteredProjects = (q ? projects : recommended).filter((project) =>
    q
      ? `${project.title} ${project.summary}`.toLowerCase().includes(q)
      : true
  );
  const filteredLinks = socialLinks.filter((link) =>
    q ? link.label.toLowerCase().includes(q) : true
  );

  const open = (id: PinnedId) => {
    if (id === "recruiter") {
      openRecruiter();
    } else {
      openWindow(id);
    }
    onClose();
  };

  return (
    <motion.div
      role="menu"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="os-start absolute bottom-[calc(var(--os-taskbar-h)+0.6rem)] left-2 right-2 z-[1990] max-h-[min(36rem,calc(100dvh-5rem))] overflow-y-auto rounded-2xl p-4 md:left-1/2 md:right-auto md:w-[36rem] md:ml-[-18rem]"
    >
      <label className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-sm dark:bg-white/5">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for apps, folders, and links"
          className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
        />
      </label>

      <p className="mb-2 mt-5 text-xs font-medium text-muted-foreground">
        Pinned
      </p>
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-6">
        {filteredPinned.map((item) => (
          <button
            key={item.id}
            type="button"
            role="menuitem"
            onClick={() => open(item.id)}
            className="flex flex-col items-center gap-1.5 rounded-xl px-1 py-3 text-center text-xs hover:bg-black/5 dark:hover:bg-white/10"
          >
            {item.kind === "user" ? (
              <UserGlyph className="h-9 w-9" />
            ) : item.kind === "page" ? (
              <FileGlyph className="h-9 w-9" />
            ) : (
              <FolderGlyph className="h-9 w-9" />
            )}
            {item.label}
          </button>
        ))}
      </div>

      <p className="mb-2 mt-5 text-xs font-medium text-muted-foreground">
        {q ? "Results" : "Recommended"}
      </p>
      <div className="space-y-0.5">
        {filteredProjects.map((project) => (
          <button
            key={project.slug}
            type="button"
            role="menuitem"
            onClick={() => open(`project:${project.slug}`)}
            className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            <FileGlyph className="h-8 w-8 shrink-0" />
            <span className="min-w-0">
              <span className="block truncate">{project.title}</span>
              {project.stack ? (
                <span className="block truncate text-xs text-muted-foreground">
                  {project.stack}
                </span>
              ) : null}
            </span>
          </button>
        ))}
        {filteredLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
          >
            <SocialTile label={link.label} className="h-8 w-8 rounded-md" />
            {link.label}
          </a>
        ))}
        {filteredPinned.length === 0 &&
          filteredProjects.length === 0 &&
          filteredLinks.length === 0 && (
            <p className="px-2 py-4 text-sm text-muted-foreground">
              No results
            </p>
          )}
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-black/10 pt-3 dark:border-white/10">
        <UserGlyph className="h-9 w-9" />
        <div className="min-w-0">
          <p className="truncate text-sm">{profile.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {profile.role}
          </p>
        </div>
        <button
          type="button"
          onClick={() => open("about")}
          className="ml-auto rounded-md px-2 py-1 text-xs hover:bg-black/5 dark:hover:bg-white/10"
        >
          Open
        </button>
      </div>
    </motion.div>
  );
}
