import { achievements } from "@/content/site";
import { ArrowLink, Section } from "./ui";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid grid-cols-3 gap-3">
        {achievements.stats.map((a) => (
          <li key={a.label} className="rounded-xl border p-3 sm:p-4">
            <p className="text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">{a.value}</p>
            <p className="mt-1 text-xs font-medium sm:text-sm">{a.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{a.detail}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <ArrowLink href={achievements.link.href} className="text-brand">{achievements.link.label}</ArrowLink>
      </p>
    </Section>
  );
}
