import { Calendar } from "lucide-react";
import { contact, links } from "@/content/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";
import { Section } from "./ui";

const outline =
  "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-muted/50";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <h3 className="text-2xl font-semibold tracking-tight">{contact.heading}</h3>
      <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">{contact.line}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={links.cal}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          Book a call
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" className={outline}>
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a href={links.x} target="_blank" rel="noreferrer" className={outline}>
          <XIcon className="h-3.5 w-3.5" />
          X (Twitter)
        </a>
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <span>
          Or email{" "}
          <a href={`mailto:${links.email}`} className="font-medium text-foreground underline decoration-brand/50 underline-offset-4 hover:decoration-brand">
            {links.email}
          </a>
        </span>
        <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </p>
    </Section>
  );
}
