"use client";

import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/lib/portfolio";
import { FileGlyph } from "./icons";
import { useWindows, type WindowId } from "./WindowManager";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[hsl(var(--os-accent))] underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </a>
  );
}

function AboutContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed">
      <div>
        <p className="text-base">{profile.name}</p>
        <p className="text-muted-foreground">{profile.role}</p>
      </div>
      <p>{profile.about}</p>
      <ul className="space-y-1 text-muted-foreground">
        <li>
          <ExternalLink href={`mailto:${profile.email}`}>
            {profile.email}
          </ExternalLink>
        </li>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-3 text-sm">
      {experience.map((job) => (
        <article
          key={job.company}
          className="rounded-xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <header className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-base font-medium">{job.company}</h3>
              <p className="text-muted-foreground">{job.role}</p>
            </div>
            <p className="shrink-0 text-right text-muted-foreground">
              {job.period}
            </p>
          </header>
          <ul className="mt-3 list-disc space-y-2 pl-4 leading-relaxed marker:text-muted-foreground">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function ProjectsContent() {
  const { openWindow } = useWindows();
  const featured = projects.filter(
    (project) => project.featured && !project.openSource
  );
  const rest = projects.filter(
    (project) => !project.featured && !project.openSource
  );
  const openSource = projects.filter((project) => project.openSource);

  const renderList = (list: typeof projects) => (
    <ul className="mt-1">
      {list.map((project) => (
        <li key={project.slug}>
          <button
            type="button"
            onClick={() => openWindow(`project:${project.slug}`)}
            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/10"
          >
            <FileGlyph className="h-5 w-5 shrink-0" />
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="text-sm">
      <p className="text-muted-foreground">Open a file</p>
      {renderList(featured)}
      {rest.length > 0 ? (
        <>
          <p className="mt-4 text-muted-foreground">Other</p>
          {renderList(rest)}
        </>
      ) : null}
      {openSource.length > 0 ? (
        <>
          <p className="mt-4 text-muted-foreground">Open Source Contributions</p>
          {renderList(openSource)}
        </>
      ) : null}
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="space-y-4 text-sm">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="mb-1">{group.label}</p>
          <p className="text-muted-foreground">{group.items.join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-3 text-sm leading-relaxed">
      <div>
        <p className="text-base">{education.school}</p>
        <p className="text-muted-foreground">{education.location}</p>
      </div>
      <p>{education.degree}</p>
      <p className="text-muted-foreground">
        {education.graduation} · CGPA {education.cgpa}
      </p>
      <p>{education.note}</p>
    </div>
  );
}

function ProjectDetailContent({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <p className="text-sm">File not found.</p>;

  return (
    <div className="space-y-4 text-sm leading-relaxed">
      {project.bullets ? (
        <ul className="list-disc space-y-1 pl-5">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p>{project.summary}</p>
      )}
      {project.stack ? (
        <p className="text-muted-foreground">{project.stack}</p>
      ) : null}
      {(project.live || project.github || project.pr) && (
        <p className="flex gap-4 text-muted-foreground">
          {project.live && <ExternalLink href={project.live}>Live</ExternalLink>}
          {project.github && (
            <ExternalLink href={project.github}>GitHub</ExternalLink>
          )}
          {project.pr && <ExternalLink href={project.pr}>PR Link</ExternalLink>}
        </p>
      )}
    </div>
  );
}

export function WindowBody({ id }: { id: WindowId }) {
  if (id === "about") return <AboutContent />;
  if (id === "experience") return <ExperienceContent />;
  if (id === "projects") return <ProjectsContent />;
  if (id === "skills") return <SkillsContent />;
  if (id === "education") return <EducationContent />;
  if (id.startsWith("project:")) {
    return <ProjectDetailContent slug={id.slice("project:".length)} />;
  }
  return null;
}
