import { education, experience } from "@/content/site";
import { ArrowLink, Section, Tags } from "./ui";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={job.company}>
            <article>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-semibold">
                  <ArrowLink href={job.url}>{job.company}</ArrowLink>
                  <span className="font-normal text-muted-foreground"> · {job.role}</span>
                </h3>
                {job.period && (
                  <p className="shrink-0 text-sm tabular-nums text-muted-foreground">{job.period}</p>
                )}
              </div>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-foreground/30">
                    {b}
                  </li>
                ))}
              </ul>
              {job.link && (
                <p className="mt-3 text-sm">
                  <ArrowLink href={job.link.href} className="text-brand">{job.link.label}</ArrowLink>
                </p>
              )}
              {job.stack && <div className="mt-4"><Tags items={job.stack} /></div>}
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-10 border-t pt-6">
        <h3 className="flex flex-col gap-0.5 font-semibold sm:flex-row sm:items-baseline sm:justify-between">
          <span>
            {education.school}
            <span className="font-normal text-muted-foreground"> · {education.degree}</span>
          </span>
          <span className="text-sm font-normal text-muted-foreground">{education.period}</span>
        </h3>
        <p className="mt-2 text-[15px] text-muted-foreground">{education.note}</p>
      </div>
    </Section>
  );
}
