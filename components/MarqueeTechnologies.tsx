import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiClerk } from "react-icons/si";

const technologies = [
  {
    src: <FaGitAlt />,
    name: "Git",
  },
  {
    src: <SiMongodb />,
    name: "MongoDB",
  },
  {
    src: <IoLogoJavascript />,
    name: "Javascript",
  },
  {
    src: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    src: <FaJava />,
    name: "Java",
  },
  {
    src: <FaNodeJs />,
    name: "NodeJS",
  },
  {
    src: <BiLogoTypescript />,
    name: "Typescript",
  },
  {
    src: <RiNextjsFill />,
    name: "NextJS",
  },
  {
    src: <SiPostman />,
    name: "Postman",
  },
  {
    src: <FaReact />,
    name: "React",
  },
  {
    src: <FaGithub />,
    name: "Github",
  },
  {
    src: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    src: <SiPrisma />,
    name: "Prisma",
  },
  {
    src: <SiSupabase />,
    name: "Supabase",
  },
  {
    src: <SiClerk />,
    name: "Clerk",
  },
];

const row1 = technologies.slice(0, technologies.length / 2);
const row2 = technologies.slice(technologies.length / 2);

const TechnologiesCard = ({
  src,
  name,
}: {
  src: React.ReactNode;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-max cursor-pointer overflow-hidden rounded-xl border px-4 py-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {src}
        <div className="flex flex-col">
          <figcaption className="text-sm text-center font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeTechnologies() {
  return (
    <div className="relative flex h-max w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background mt-4">
      <Marquee pauseOnHover className="[--duration:30s]">
        {row1.map((review) => (
          <TechnologiesCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:30s]">
        {row2.map((review) => (
          <TechnologiesCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
