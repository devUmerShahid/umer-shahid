"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      id: 1,
      title: "Tuneflow Music Streaming",
      description: "A full-featured, production-ready music streaming web app that closely replicates Spotify’s core experience",
      tech: ["React.js", "ExpressJS", "MongoDB","Node.js","JWT" , "Tailwind"],
      color: "from-blue-500 to-indigo-600",
      link: "https://tuneflow-lime.vercel.app/",
      github:"https://github.com/devUmerShahid/tuneflow",
      image: "/images/tuneflow1.jpg",
    },
    {
      id: 2,
      title: "E-Commerce Experience",
      description: "A modern, full-featured e-commerce application built with React and Firebase.",
      tech: ["React", "Firebase", "Tailwind CSS", "React-Router"],
      color: "from-purple-500 to-pink-600",
      link: "https://mystore-sable-psi.vercel.app/",
      github:"https://github.com/devUmerShahid/mystore",
      image: "/images/mystore1.jpg"
    },
    {
      id: 3,
      title: "Password Saver",
      description: "Guardo is a secure and user-friendly password manager built with React.js, Vite, and Firebase.",
      tech: ["React.js", "Vite", "Firebase"],
      color: "from-emerald-500 to-teal-600",
      link: "https://guardo-eight.vercel.app/",
      github:"https://github.com/devUmerShahid/guardo",
      image: "/images/passaver1.jpg"
    },
    {
      id: 4,
      title: "Landing Page",
      description: "A simple react demo single page project for practice",
      tech: ["React", "Tailwind"],
      color: "from-orange-500 to-red-600",
      link: "https://demo-react-app-inky.vercel.app/",
      github:"https://github.com/devUmerShahid/demo-react-app",
      image: "/images/landingpage1.jpg"
    },
    {
      id: 5,
      title: "HDPO Profile",
      description: "A fully functional wordpress based website for a HDPO organization",
      tech: ["Wordpress", "Elementor", "HTML", "CSS", "JS", "PHP"],
      color: "from-cyan-500 to-blue-600",
      link: "https://hdpo.org/",
      image: "/images/hdpo1.jpg"
    },
    {
      id: 6,
      title: "Antidumping Pakistan Website",
      description: "Antidumping Pakistan is a law firm that provides legal services to individuals and businesses related to antidumping in Pakistan.",
      tech: ["Wordpress", "Elementor", "HTML", "CSS", "JS", "PHP"],
      color: "from-violet-500 to-purple-600",
      link: "https://antidumpingpakistan.com/",
      image: "/images/antidumping1.jpg"
    },
    {
      id: 7,
      title: "Web Planers",
      description: "A multi-page website for a agency that provides digital services",
      tech: ["Wordpress", "Elementor", "HTML", "CSS", "JS", "PHP"],
      color: "from-blue-500 to-indigo-600",
      link: "https://webplaners.com/",
      image: "/images/webplaners1.jpg"
    },
    {
      id: 8,
      title: "Unicorn Hotel",
      description: "Website for a hotel business in UK",
      tech: ["Wordpress", "Elementor", "HTML", "CSS", "JS", "PHP"],
      color: "from-blue-500 to-indigo-600",
      link: "https://unicornhotelllanidloes.co.uk/",
      image: "/images/unicorn1.jpg"
    },
    {
      id: 9,
      title: "Sips Uk",
      description: "A multi-page website for a Structural Insulated Panel Manufacturers in UK",
      tech: ["Wordpress", "Elementor", "HTML", "CSS", "JS", "PHP"],
      color: "from-blue-500 to-indigo-600",
      link: "https://www.sips.uk.com/",
      image: "/images/sips1.jpg"
    },
  ];

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-[#050505] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">Selected Work</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
            Building Digital Masterpieces.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            From architecture to implementation, here's a glimpse into the diverse range of projects I've crafted recently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="group flex flex-col bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-gray-100 dark:border-white/5 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              {/* Preview Area */}
              <div className={`h-56 relative overflow-hidden bg-gray-100 dark:bg-gray-800`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Content Area */}
              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-white/5 rounded-lg text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 mt-auto border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest">
                    Live Preview
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="flex gap-4">
                    <a href={project.github} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Load More Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}