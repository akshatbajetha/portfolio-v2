"use client";

import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import Logo from "./Logo";
import { BlurFade } from "./ui/blur-fade";

function Navbar() {
  return (
    <BlurFade delay={0.03} inView>
      <nav className="px-[20vw] pt-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="flex items-center gap-x-1">
              <Link
                href="/"
                className="dark:text-white text-black  font-bold mx-2 rounded-md md:text-base sm:text-sm hover:text-cyan-500 hover:dark:text-cyan-500 relative inline-block group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
              </Link>
              <Link
                href="/projects"
                className="dark:text-white text-black  font-bold mx-2 rounded-md md:text-base sm:text-sm hover:text-cyan-500 hover:dark:text-cyan-500 relative inline-block group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
              </Link>
              <ToggleTheme />
            </div>
          </div>
        </div>
      </nav>
    </BlurFade>
  );
}
export default Navbar;
