import Reveal from "../components/Reveal";
import { FaCode, FaLaptopCode, FaLayerGroup, FaRocket } from "react-icons/fa";

const cards = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "I focus on readable, scalable, and maintainable code structure.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Apps",
    desc: "I build complete web applications using MERN stack technologies.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Modern UI",
    desc: "I create responsive and premium user interfaces using Tailwind CSS.",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    desc: "I aim for smooth user experience and efficient application flow.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-violet-700/10 blur-[100px]"></div>
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]"></div>
      
      <Reveal>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
              About Me
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              MERN Stack Developer with a passion for
              <span className="text-violet-500"> modern web experiences</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              I build full-stack web applications using React, Node.js, Express,
              and MongoDB. I enjoy creating clean user interfaces, reusable
              components, and backend systems that are simple, scalable, and
              practical.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              My goal is to create projects that look professional, work
              smoothly, and solve real user problems with good design and solid
              development practices.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-xl text-violet-400">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      </Reveal>

    </section>
  );
}