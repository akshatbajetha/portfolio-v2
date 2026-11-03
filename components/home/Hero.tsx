import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import { links, site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const iconLinks = [
  { href: links.github, label: "GitHub", Icon: GitHubIcon },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: links.x, label: "X (Twitter)", Icon: XIcon },
  { href: `mailto:${links.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-12 pt-10 sm:pt-16">
      <p
        className="blur-in inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs"
        style={delay(0)}
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="shiny">{site.status}</span>
      </p>

      <div className="blur-in mt-6 flex items-center gap-4" style={delay(80)}>
        <Image
          src={site.photo}
          alt={`Photo of ${site.name}`}
          width={64}
          height={64}
          priority
          className="h-16 w-16 rounded-full border object-cover"
        />
        <div>
          <h1 id="hero-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-0.5 text-sm text-muted-foreground">AI-native {site.title}</p>
        </div>
      </div>

      <p className="blur-in mt-6 text-balance text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={delay(160)}>
        {site.tagline}
      </p>

      <div className="blur-in mt-4 space-y-3 leading-relaxed text-muted-foreground" style={delay(240)}>
        {site.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ul className="blur-in mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm" style={delay(300)} aria-label="What I build">
        {site.focus.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="blur-in mt-8 flex flex-wrap items-center gap-2" style={delay(360)}>
        <a
          href={links.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
        {iconLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
