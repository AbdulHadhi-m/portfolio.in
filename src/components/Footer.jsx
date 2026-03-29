import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-violet-400">Abdul.dev</h3>
          <p className="text-sm text-gray-400">
            MERN Stack Developer Portfolio
          </p>
        </div>

        <div className="flex items-center gap-4 text-violet-400">
          <a href="#" className="transition hover:text-white">
            <FaGithub />
          </a>
          <a href="#" className="transition hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@gmail.com" className="transition hover:text-white">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Abdul Hadi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}