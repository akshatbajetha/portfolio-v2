import Image from "next/image";
import myImage from "@/public/myPhoto.jpeg";

function About() {
  return (
    <div className="flex flex-row gap-x-24">
      <div className="py-4">
        <h1 className="text-3xl py-2">Akshat Bajetha</h1>
        <div className="max-w-lg">
          <h1 className="text-xl py-2">About Me</h1>
          <p>
            Hi there! I am a developer from Delhi, India. I enjoy coding,
            building things, and exploring new technologies.
          </p>
        </div>
        <div className="max-w-lg">
          <h1 className="text-xl py-2">What I do?</h1>
          <p>
            Currently I am exploring new technologies while building products
            that'll help people.
          </p>
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
  );
}
export default About;
