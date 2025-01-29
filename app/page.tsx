import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="md:px-[20vw] overflow-x-hidden md:overflow-x-auto px-3 py-5">
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}
