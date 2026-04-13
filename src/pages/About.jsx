import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6 py-20 font-mono">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
        About Me
      </h1>

      <div className="max-w-4xl bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md border border-purple-500/20">
        <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
          Hi! I'm <span className="text-purple-400 font-semibold">Yogesh Yadav</span>,
          a passionate Full-Stack Developer and Computer Science Engineering student, on a mission to turn ideas into impactful digital experiences.
        </p>

        <p className="text-gray-300 text-md">
          I specialize in building beautiful, responsive, and scalable web applications using modern technologies like React, Node.js, Express, MongoDB, and SQL. From crafting smooth UI/UX to structuring robust backends with RESTful APIs and MVC architecture, I love owning the full product lifecycle.
        </p>
        <p className="text-gray-300 text-md mt-4">
          With a strong foundation in Data Structures & Algorithms, OOPs, and DBMS, I thrive at translating complex problems into clean, efficient solutions. I've also published a research paper on Deep Learning for Autonomous Systems — because I believe great developers never stop learning.
        </p>
        <p className="text-gray-300 text-md mt-4">
          When I'm not coding, you'll find me exploring new tools, gaming, or hitting the gym — because I believe in keeping both the mind and body sharp.
        </p>


        <p className="mt-4 text-gray-400 text-sm italic text-center   ">
          “Build, Break, Learn, Repeat.”
        </p>
        <p className="mt-4 text-gray-400 text-sm italic text-center   ">
          "Building today what the world will use tomorrow."
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/YogeshYadav_Resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

