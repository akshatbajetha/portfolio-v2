import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[720px] flex-col gap-2 border-t px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <Link href="/playground" className="hover:text-foreground">
        Prefer something playful? Try the OS version →
      </Link>
    </footer>
  );
}
