import Reveal from "../components/Reveal";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-28 md:py-32"
    >
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-700/10 blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <Reveal>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            Skills
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Technologies I use to build
            <span className="text-violet-500"> modern applications</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            I work with modern frontend, backend, database, and deployment tools
            to build clean, scalable, and responsive full-stack applications.
          </p>
        </div>
        </Reveal>

        <Reveal delay={0.2}>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/10"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-gray-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    <span className="text-xl text-violet-400">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
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