import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="reveal py-12">
      <h2 id={`${id}-title`} className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        <span className="h-px w-6 bg-brand" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {items.map((t) => (
        <li key={t} className="rounded-md border bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Link with an arrow that nudges on hover. External links open in a new tab. */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const cls = `group/link inline-flex items-center gap-0.5 underline-offset-4 hover:underline ${className}`;
  const arrow = (
    <ArrowUpRight
      className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      aria-hidden="true"
    />
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
      {arrow}
    </a>
  );
}
