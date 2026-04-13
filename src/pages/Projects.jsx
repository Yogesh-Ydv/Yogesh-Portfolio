import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects] = useState([
  {
    title: 'Stayloft – Property Booking & Listing Platform',
    description:
      'A full-stack rental marketplace where users can register, list properties with image uploads, browse listings, and post reviews. Built with Node.js, Express, and MongoDB, it features secure authentication and authorization using Passport.js, ensuring only owners can manage their listings. Images are stored on Cloudinary via Multer, sessions are persisted in MongoDB for production reliability, and all inputs are validated server-side using Joi.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'EJS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'Multer', 'Cloudinary', 'Joi'],
    github: 'https://github.com/Yogesh-Ydv/Stayloft',
    live: 'https://stayloft-y99k.onrender.com/listings'
  },
  // {
  //   title: 'Shop Management System',
  //   description:
  //     'A multi-role inventory and billing management system for shops with real-time dashboard updates. Includes role-based authentication for employees and owners, CRUD operations, and secure admin/employee routes.',
  //   tech: ['HTML', 'CSS', 'JavaScript', 'EJS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
  //   github: '',
  //   live: ''
  // },
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built in React with Tailwind CSS, showcasing dedicated pages for Home, About, Skills, Projects, and Contact, delivering a smooth and immersive browsing experience with animations and responsive design.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Yogesh-Ydv/Yogesh-Portfolio',
    live: ''
  },
  {
    title: 'Todo List React App',
    description:
      'A responsive To-Do List app built with HTML, CSS, and JavaScript, featuring task creation, completion toggling, and deletion. Tasks are saved to localStorage, ensuring data persistence across page refreshes.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Yogesh-Ydv/To-Do-List-App',
    live: 'https://yogesh-ydv.github.io/To-Do-List-App/'
  },
  
  // {
  //   title: 'Music Player UI',
  //   description:
  //     'A frontend music player design with custom controls, progress bar, responsive layout, and smooth visual transitions.',
  //   tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  //   github: '',
  //   live: ''
  // },
  {
    title: 'Event Landing Page',
    description:
      'A responsive Event Landing Page built with HTML, CSS, and JavaScript for a Microsoft SDE webinar, featuring a popup registration form integrated with Google Sheets for real-time data collection. Includes smooth scrolling, Font Awesome icons, and a mobile-friendly layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Yogesh-Ydv/Landing-Page',
    live: 'https://yogesh-ydv.github.io/Landing-Page/'
  },
  {
    title: 'NETFLIX-CLONE',
    description:
      'A responsive Netflix clone landing page built using only HTML and CSS. It replicates the visual design of Netflix’s homepage with sections like hero banner, features, and FAQ.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/Yogesh-Ydv/Netflix',
    live: 'https://yogesh-ydv.github.io/Netflix/'
  },
  {
    title: 'Temperature Converter',
    description:
      'A lightweight Temperature Converter app built with vanilla HTML, CSS, and JavaScript that instantly converts between Celsius and Fahrenheit. It features a clean, minimal UI with a dropdown selector, real-time result display, and precise one-decimal-point output.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Yogesh-Ydv/Temp-Converter',
    live: 'https://yogesh-ydv.github.io/Temp-Converter/'
  },
  {
    title: 'Quiz Simulator',
    description:
      'A dynamic Quiz App built with HTML, CSS, and JavaScript featuring multiple-choice questions with a 20-second countdown timer per question. Answers are highlighted green or red instantly, and a final score is displayed upon completion.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Yogesh-Ydv/Quiz-Application',
    live: 'https://yogesh-ydv.github.io/Quiz-Application/'
  },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6 py-25 font-mono ">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-purple-700/30 px-3 py-1 rounded-full text-sm text-purple-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-600 transition"
              >
                <FaGithub />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition"
                >
                  <FaExternalLinkAlt />
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
