import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../components/Reveal";


const projects = [
  {
    title: "Rentora",
    desc: "A full-stack property rental platform built with MERN stack for browsing, managing, and exploring rental properties with a clean modern interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "ZyraCart",
    desc: "A modern eCommerce marketplace concept with premium UI, product management, authentication, and scalable full-stack architecture.",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "GoPath",
    desc: "A premium bus booking web application with route search, smooth booking flow, responsive design, and futuristic user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-28 md:py-32"
    >
      <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-violet-700/10 blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            Projects
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Some of my
            <span className="text-violet-500"> featured work</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Here are some projects that reflect my skills in full-stack
            development, clean UI design, and building practical web
            applications using modern technologies.
          </p>
        </div>
        </Reveal>
         
         <Reveal>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/10"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="mt-3 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex gap-3 text-lg text-violet-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-3 transition hover:bg-violet-500/10 hover:text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-3 transition hover:bg-violet-500/10 hover:text-white"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-400">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}