import { Cloud, Code2, CreditCard, Database, LayoutTemplate, Server, Sparkles } from "lucide-react";
import { skills, type SkillGroup } from "@/content/site";
import { Section } from "./ui";

const icons: Record<SkillGroup["icon"], React.ComponentType<{ className?: string }>> = {
  ai: Sparkles,
  code: Code2,
  frontend: LayoutTemplate,
  backend: Server,
  data: Database,
  cloud: Cloud,
  product: CreditCard,
};

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((g) => {
          const Icon = icons[g.icon];
          return (
            <div key={g.label} className="grid gap-2.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="flex items-center gap-2 self-start pt-0.5 text-sm font-medium">
                <Icon className={`h-4 w-4 ${g.highlight ? "text-brand" : "text-muted-foreground"}`} aria-hidden="true" />
                {g.label}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className={
                      g.highlight
                        ? "rounded-md border border-brand/30 bg-brand/[0.07] px-2 py-0.5 text-[13px] text-foreground transition-colors hover:border-brand/60"
                        : "rounded-md border bg-muted/30 px-2 py-0.5 text-[13px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                    }
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
