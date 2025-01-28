import Link from "next/link";

function Footer() {
  return (
    <div className="px-[20vw] py-5 text-center">
      &copy; 2025 Developed with ❤️ by{" "}
      <Link
        href="https://github.com/akshatbajetha"
        target="_blank"
        className="relative inline-block group"
      >
        Akshat Bajetha{" "}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
      </Link>
    </div>
  );
}
export default Footer;
