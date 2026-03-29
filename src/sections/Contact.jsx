import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-700/10 blur-[100px]"></div>
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            Contact
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Let’s build something
            <span className="text-violet-500"> great together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            I’m open to internships, freelance work, and collaboration. Feel
            free to reach out and connect with me.
          </p>
        </div>
        </Reveal>
        
        <Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT CONTACT INFO */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                Contact Information
              </h3>

              <div className="mt-6 space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-violet-400" />
                  <span>your-email@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaGithub className="text-violet-400" />
                  <span>github.com/yourusername</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-violet-400" />
                  <span>linkedin.com/in/yourprofile</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                Let’s Work Together 🚀
              </h3>
              <p className="mt-4 text-gray-400">
                If you have a project idea or opportunity, I would love to work
                with you.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white mb-6">
              Send Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-violet-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-violet-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-violet-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}