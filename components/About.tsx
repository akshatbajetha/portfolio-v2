"use client";

import Image from "next/image";
import myImage from "@/public/myPhoto.jpeg";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";

function About() {
  return (
    <BlurFade delay={0.03} inView>
      <div className="flex flex-row gap-x-24">
        <div className="py-4">
          <h1 className="text-3xl font-bold relative inline-block group pt-2 mb-2">
            Akshat Bajetha
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
          </h1>
          <div className="max-w-lg pt-4">
            <h1 className="text-2xl relative inline-block group pt-2 mb-2">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
            </h1>
            <p className="text-lg">
              Hi there! I am a developer from Delhi, India. I enjoy coding,
              building things, solving problems and exploring new technologies.
            </p>
            <p className="text-lg">
              Currently I am exploring new technologies while building products
              that&apos;ll help people.
            </p>
            <p className="text-lg">
              I&apos;m open to work, freelance, or collaborate!
            </p>
          </div>

          <div className="max-w-lg py-4">
            <h3 className="text-lg font-bold tracking-tighter sm:text-3xl">
              Check out my{" "}
              <Link
                href="https://drive.google.com/file/d/1AwIgb4JYaW5OO89cQ1JPyYixExDQDUH8/view?usp=drive_link"
                target="_blank"
                className="text-cyan-500 relative inline-block group"
              >
                resume.
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
              </Link>
            </h3>
          </div>
        </div>
        <div className="flex items-center ">
          <Image
            src={myImage}
            alt="Akshat Bajetha"
            width={200}
            className="rounded-full"
          />
        </div>
      </div>
    </BlurFade>
  );
}
export default About;
