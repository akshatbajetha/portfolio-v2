"use client";

import NoteKaro from "@/public/ProjectLogos/NoteKaro-Dark.png";
import CompoGen from "@/public/ProjectLogos/compogen.png";
import NextBuy from "@/public/ProjectLogos/nextbuy.png";
import Chatzy from "@/public/ProjectLogos/chatzy.png";
import BlogNation from "@/public/ProjectLogos/blognation.png";
import Taskly from "@/public/ProjectLogos/taskly.png";
import GrooveBeats from "@/public/ProjectLogos/groovebeats.png";
import { ProjectCard } from "@/components/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";

function Projects() {
  const allProjects = [
    {
      title: "NoteKaro",
      description:
        "An all-in-one workspace for notes, sketches, and todos with email reminders.",
      url: "https://www.notekaro.com/",
      github: "https://github.com/akshatbajetha/notekaro",
      img: NoteKaro,
    },
    {
      title: "CompoGen",
      description:
        "An AI React component generator tool that generates Javascript code for React components just by giving a prompt",
      url: "https://compogen.vercel.app",
      github: "https://github.com/akshatbajetha/compo-gen",
      img: CompoGen,
    },
    {
      title: "Next Buy",
      description:
        "A full stack e-commerce website built with Next.js and Typescript",
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
    {
      title: "Blog Nation",
      description:
        "A full stack blogging website, where users can login/signup, view, create and edit blogs.",
      url: "https://bloggingnation.vercel.app/",
      github: "https://github.com/akshatbajetha/blog-nation",
      img: BlogNation,
    },
    {
      title: "Taskly",
      description:
        "A To-do list project made in React using functionalities of Context API, and storing data in the Local Storage.",
      url: "https://github.com/akshatbajetha/todo-react",
      github: "https://taskly-todo.vercel.app/",
      img: Taskly,
    },
    {
      title: "Groove Beats",
      description:
        "A Responsive Spotify UI Clone, made as a practice and learning project",
      url: "https://github.com/akshatbajetha/spotify-clone",
      github: "https://groove-beats.vercel.app/",
      img: GrooveBeats,
    },
  ];
  return (
    <BlurFade delay={0.03} inView>
      <div className="md:px-[20vw] py-5 h-max">
        <h1 className="text-3xl relative inline-block group">
          All Projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
        </h1>
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-4">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
export default Projects;
