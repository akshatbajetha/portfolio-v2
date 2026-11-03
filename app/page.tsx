import { Achievements } from "@/components/home/Achievements";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { links, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: `mailto:${links.email}`,
  sameAs: [links.github, links.linkedin, links.x],
};

export default function Home() {
  return (
    <div id="top" className="relative isolate min-h-dvh">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]" />
      <Header />
      <main className="mx-auto max-w-[720px] px-5">
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
