// "use client";

// import Link from "next/link";
// import { ToggleTheme } from "./ToggleTheme";
// import Logo from "./Logo";
// import { BlurFade } from "./ui/blur-fade";
// import MobileMenu from "./MobileMenu";

// function Navbar() {
//   return (
//     <>
//       <MobileMenu />
//       <BlurFade delay={0.03} inView>
//         <nav className="px-[20vw] pt-5 hidden md:block">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex justify-between h-16">
//               <div className="flex items-center">
//                 <Link href="/">
//                   <Logo />
//                 </Link>
//               </div>
//               <div className="flex items-center gap-x-1">
// {/* <Link
//   href="/"
//   className="dark:text-white text-black  font-bold mx-2 rounded-md md:text-base sm:text-sm hover:text-cyan-500 hover:dark:text-cyan-500 relative inline-block group"
// >
//   Home
//   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
// </Link>; */}
//                 <Link
//                   href="/projects"
//                   className="dark:text-white text-black  font-bold mx-2 rounded-md md:text-base sm:text-sm hover:text-cyan-500 hover:dark:text-cyan-500 relative inline-block group"
//                 >
//                   Projects
//                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
//                 </Link>
//                 <ToggleTheme />
//               </div>
//             </div>
//           </div>
//         </nav>
//       </BlurFade>
//     </>
//   );
// }
// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, FolderKanban } from "lucide-react";
import { ToggleTheme } from "./ToggleTheme";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`md:px-[20vw] px-3 pt-5 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
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
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  );
}
