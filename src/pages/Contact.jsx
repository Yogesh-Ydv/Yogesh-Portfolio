import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6 py-20 font-mono">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
        Contact Me
      </h1>
       <div className="max-w-4xl bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md border border-purple-500/20">

      <p className="text-gray-300 text-lg mb-10 text-center max-w-xl">
        Whether you want to discuss a project, collaborate, or just say hello — feel free to reach out!
      </p>

      <div className="flex flex-col gap-6 text-center">
        <a
          href="mailto:yogeshydv247@gmail.com"
          className="flex items-center gap-3 text-white text-lg hover:text-purple-400 transition"
        >
          <FaEnvelope className="text-2xl" />
          yogeshydv247@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/yogesh-ydv247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white text-lg hover:text-purple-400 transition"
        >
          <FaLinkedin className="text-2xl" />
         linkedin.com/in/yogesh-ydv247
        </a>
      </div>
      </div>
    </div>
  );
};

export default Contact;
