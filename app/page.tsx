import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="px-[20vw] py-5">
      {/* <Navbar /> */}
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}
