import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="h-max  text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <div className="w-24 h-1 bg-teal-500 mb-6" />

          <p className="text-gray-400 mb-8">
            If you have any inquiries, please feel free to reach out. You can
            contact us via email at{" "}
            <a
              href="mailto:akshatbajetha@gmail.com"
              className="text-teal-500 hover:text-teal-400"
            >
              akshatbajetha@gmail.com
            </a>
          </p>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Follow me</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <FaTwitter className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Buy me a coffee"
              >
                <SiBuymeacoffee className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
