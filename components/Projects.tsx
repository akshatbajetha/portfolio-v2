import { ProjectCard } from "./ProjectCard";
import CompoGen from "@/public/ProjectLogos/compogen.png";
import NextBuy from "@/public/ProjectLogos/nextbuy.png";
import Chatzy from "@/public/ProjectLogos/chatzy.png";
import BlogNation from "@/public/ProjectLogos/blognation.png";
import Taskly from "@/public/ProjectLogos/taskly.png";
import GrooveBeats from "@/public/ProjectLogos/groovebeats.png";
import { BlurFade } from "./ui/blur-fade";

function Projects() {
  const featuredProjects = [
    {
      title: "CompoGen",
      description:
        "An AI React component generator tool that generates Javascript code for React components",
      url: "https://compogen.vercel.app",
      github: "https://github.com/akshatbajetha/compo-gen",
      img: CompoGen,
    },
    {
      title: "Next Buy",
      description:
        "A full stack e-commerce website built with Next.js and Typescript ",
      url: "https://next-buy-shop.vercel.app",
      github: "https://github.com/akshatbajetha/next-buy",
      img: NextBuy,
    },
    {
      title: "Chatzy",
      description: "A realtime chat app made with MERN stack and Socket.IO",
      url: "https://chatzy-sasu.onrender.com/",
      github: "https://github.com/akshatbajetha/chatzy",
      img: Chatzy,
    },
  ];

  return (
    <BlurFade delay={0.03} inView>
      <div className="mt-5">
        <h1 className="text-3xl">Featured Projects</h1>
        <div className="grid grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
export default Projects;
