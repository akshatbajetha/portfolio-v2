import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { BlurFade } from "./ui/blur-fade";

export default function Contact() {
  return (
    <BlurFade delay={0.03} inView>
      <div className="h-max  dark:text-white pt-5 px-3 md:px-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <div className="w-24 h-1 bg-cyan-500 mb-6" />

            <p className="dark:text-gray-400 mb-8">
              If you have any inquiries, please feel free to reach out. You can
              contact me via my email at{" "}
              <a
                href="mailto:akshatbajetha@gmail.com"
                className="text-cyan-500 hover:text-cyan-400"
              >
                akshatbajetha@gmail.com
              </a>
            </p>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Social Links</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/akshatbajetha"
                  target="_blank"
                  className="dark:bg-zinc-900 p-3 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akshat-bajetha/"
                  target="_blank"
                  className="dark:bg-zinc-900 p-3 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/akshatbajetha"
                  target="_blank"
                  className="dark:bg-zinc-900 p-3 rounded-lg hover:bg-gray-600 dark:hover:bg-black transition-colors"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </BlurFade>
  );
}
