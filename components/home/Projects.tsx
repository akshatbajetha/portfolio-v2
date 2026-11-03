import Image from "next/image";
import { projects } from "@/content/site";
import { GitHubIcon } from "./icons";
import { ArrowLink, Section, Tags } from "./ui";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--brand)/0.35)]">
              <div className="relative aspect-video overflow-hidden border-b bg-muted">
                {(["light", "dark"] as const).map((theme) => (
                  <Image
                    key={theme}
                    src={p.image[theme]}
                    alt={`Screenshot of ${p.name}`}
                    fill
                    sizes="(min-width: 640px) 340px, 100vw"
                    className={`object-cover object-top transition duration-500 group-hover:scale-[1.03] ${
                      theme === "light" ? "dark:hidden" : "hidden dark:block"
                    }`}
                  />
                ))}
                {/* Soft fade into the card */}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed">{p.problem}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.outcome}</p>
              <div className="mt-4">
                <Tags items={p.stack} />
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm font-medium">
                {p.live && (
                  <ArrowLink href={p.live} className="text-brand">
                    {p.live.startsWith("/") ? "Try it" : "Live"}
                    <span className="sr-only"> – {p.name}</span>
                  </ArrowLink>
                )}
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub<span className="sr-only"> – {p.name}</span>
                  </a>
                ) : (
                  p.note && <span className="text-muted-foreground">{p.note}</span>
                )}
              </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
