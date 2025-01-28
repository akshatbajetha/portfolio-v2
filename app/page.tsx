import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="px-[20vw] py-5">
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

// TODO: Responsive
// TODO: More navlink options if possible
