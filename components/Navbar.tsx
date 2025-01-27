"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import Logo from "./Logo";

function Navbar() {
  // const pathname = usePathname();
  return (
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
              className="dark:text-white text-black  font-bold px-3 py-2 rounded-md text-sm hover:text-cyan-500 hover:dark:text-cyan-500"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="dark:text-white text-black  font-bold px-3 py-2 rounded-md text-sm hover:text-cyan-500 hover:dark:text-cyan-500"
            >
              Projects
            </Link>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
