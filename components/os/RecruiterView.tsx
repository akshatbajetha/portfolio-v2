"use client";

import type { ReactNode } from "react";
import {
  achievements,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/lib/portfolio";

function Link({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[hsl(var(--os-accent))] underline underline-offset-2"
    >
      {children}
    </a>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-4">
      <h2 className="border-b border-foreground pb-0.5 text-[13px] font-bold uppercase tracking-wide">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export function RecruiterView() {
  const resume = socialLinks.find((link) => link.label === "Resume");
  const featured = projects.filter((project) => project.featured);
  const openSource = projects.find((project) => project.slug === "calcom");

  return (
    <article className="mx-auto max-w-3xl pb-6 text-[13px] leading-snug">
      <header className="text-center">
        <h1 className="text-2xl font-bold tracking-wide uppercase">
          {profile.name}
        </h1>
        <p className="mt-1 text-[13px]">{profile.tagline}</p>
        <p className="mt-1 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px]">
          <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
          <span aria-hidden="true">|</span>
          {socialLinks
            .filter((link) => link.label !== "Resume")
            .map((link, index, list) => (
              <span key={link.href} className="contents">
                <Link href={link.href}>{link.label}</Link>
                {index < list.length - 1 ? <span aria-hidden="true">|</span> : null}
              </span>
            ))}
          <span aria-hidden="true">|</span>
          <Link href={profile.portfolio}>Portfolio</Link>
          {resume ? (
            <>
              <span aria-hidden="true">|</span>
              <Link href={resume.href}>Resume</Link>
            </>
          ) : null}
        </p>
      </header>

      <Section title="Professional summary">
        <p>{profile.summary}</p>
      </Section>

      <Section title="Experience">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="font-semibold">
                {job.role} | {job.company}
              </p>
              <p className="text-[12px]">{job.period}</p>
            </div>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Projects">
        {featured.map((project) => (
          <div key={project.slug} className="mt-3 first:mt-0">
            <p className="font-semibold">
              {project.title}
              {project.live || project.github ? (
                <span className="ml-2 font-normal">
                  {project.live ? <Link href={project.live}>Live Website</Link> : null}
                  {project.live && project.github ? " | " : null}
                  {project.github ? <Link href={project.github}>GitHub</Link> : null}
                </span>
              ) : null}
            </p>
            <p className="text-[12px] text-muted-foreground">{project.stack}</p>
            {project.bullets ? (
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-1">{project.summary}</p>
            )}
          </div>
        ))}
      </Section>

      {openSource ? (
        <Section title="Open source">
          <p className="font-semibold">{openSource.title}</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {(openSource.bullets ?? [openSource.summary]).map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section title="Achievements">
        <ul className="list-disc space-y-1 pl-5">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <p className="font-semibold">
          {education.school} – {education.location}
        </p>
        <p>
          {education.degree} | {education.graduation} | CGPA: {education.cgpa}
        </p>
      </Section>

      <Section title="Technical skills">
        <ul className="space-y-1">
          {skillGroups.map((group) => (
            <li key={group.label}>
              <span className="font-semibold">{group.label}:</span>{" "}
              {group.items.join(", ")}
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
