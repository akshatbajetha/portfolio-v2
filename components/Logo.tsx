import Image from "next/image";
import logo from "@/public/Logo.png";

function Logo({ width = 100 }: { width?: number }) {
  return (
    <div>
      <Image
        src={logo}
        alt="Logo"
        className="dark:invert"
        width={width}
        height={width}
      />
    </div>
  );
}
export default Logo;
