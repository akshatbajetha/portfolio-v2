import { ProjectCard } from "./ProjectCard";
import CompoGen from "@/public/ProjectLogos/compogen.png";
import NextBuy from "@/public/ProjectLogos/nextbuy.png";
import Chatzy from "@/public/ProjectLogos/chatzy.png";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";

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
      <div className="my-5">
        <h1 className="text-3xl relative inline-block group">
          Featured Projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
        </h1>
        <div className="md:grid md:grid-cols-2 flex flex-col p-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <Link
          href="/projects"
          className=" text-cyan-500 text-lg font-bold pl-6"
        >
          View all projects &rarr;
        </Link>
      </div>
    </BlurFade>
  );
}
export default Projects;
