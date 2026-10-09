import { FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { cn } from "@/lib/utils";

const socialIcons = {
  LinkedIn: { Icon: FaLinkedin, tile: "bg-[#0a66c2]" },
  GitHub: { Icon: FaGithub, tile: "bg-neutral-900 dark:bg-neutral-800" },
  LeetCode: { Icon: SiLeetcode, tile: "bg-[#ffa116]" },
  Resume: { Icon: FaFileLines, tile: "bg-emerald-600" },
} as const;

export function SocialTile({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const social = socialIcons[label as keyof typeof socialIcons];
  if (!social) return null;
  const { Icon, tile } = social;
  return (
    <span
      className={cn(
        "flex items-center justify-center text-white shadow-md",
        tile,
        className
      )}
    >
      <Icon className="h-[55%] w-[55%]" aria-hidden="true" />
    </span>
  );
}

export function WindowsLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" rx="0.6" fill="#00adef" />
      <rect x="13" y="1" width="10" height="10" rx="0.6" fill="#00adef" />
      <rect x="1" y="13" width="10" height="10" rx="0.6" fill="#00adef" />
      <rect x="13" y="13" width="10" height="10" rx="0.6" fill="#00adef" />
    </svg>
  );
}

export function FolderGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M6 14c0-2.2 1.8-4 4-4h9l3 3h16c2.2 0 4 1.8 4 4v17c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V14z"
        fill="#fbbf24"
      />
      <path
        d="M6 20h36v14c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V20z"
        fill="#f59e0b"
      />
    </svg>
  );
}

export function FileGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M12 6h16l10 10v26c0 1.1-.9 2-2 2H12c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" fill="#60a5fa" />
      <path d="M28 6v10h10" fill="#93c5fd" />
    </svg>
  );
}

export function UserGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#3b82f6" />
      <circle cx="24" cy="19" r="7" fill="#dbeafe" />
      <path d="M10 38c2.8-7 8-11 14-11s11.2 4 14 11" fill="#dbeafe" />
    </svg>
  );
}
