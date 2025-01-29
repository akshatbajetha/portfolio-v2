import { X, Home, FolderKanban } from "lucide-react";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full max-w-xs bg-background p-6 h-full shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="space-y-6">
          <Link
            href="/"
            className="block text-foreground hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block text-foreground hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <ToggleTheme />
          </div>
        </nav>
      </div>
    </div>
  );
}
