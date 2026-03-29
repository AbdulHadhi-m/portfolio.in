import HeroCanvas from "../three/HeroCanvas";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 md:pt-32 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-violet-600/30 blur-[120px] rounded-full top-20 left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-600/20 blur-[100px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        <div>
          <span className="inline-block mb-4 px-4 py-2 bg-violet-500/10 text-violet-400 rounded-full text-sm">
            MERN Stack Developer
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Modern <br />
            <span className="text-violet-500">Web Experiences</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            I create scalable full-stack applications using React, Node.js,
            Express, and MongoDB with clean UI and smooth performance.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-700 transition hover:scale-105">
           View Projects
             </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition hover:scale-105">
  Contact Me
</button>
          </div>
        </div>

        <div className="h-[400px] md:h-[500px] border border-white/10 rounded-2xl backdrop-blur-lg bg-white/5 overflow-hidden">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}