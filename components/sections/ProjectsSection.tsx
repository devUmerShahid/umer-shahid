"use client";

import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Interactive SaaS Dashboard",
      description: "A high-performance analytics platform with real-time data visualization and complex state management.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      color: "from-blue-500 to-indigo-600",
      link: "#"
    },
    {
      id: 2,
      title: "E-Commerce Experience",
      description: "Modern shopping platform featuring server-side rendering, dynamic filtering, and secure checkout flows.",
      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
      color: "from-purple-500 to-pink-600",
      link: "#"
    },
    {
      id: 3,
      title: "AI Prompt Marketplace",
      description: "A community-focused platform for sharing and discovery of optimized AI generation prompts.",
      tech: ["Next.js", "OpenAI", "Supabase", "Radix UI"],
      color: "from-emerald-500 to-teal-600",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-[#050505] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-500/10 rounded-lg">
            <p className="text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">Selected Work</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Masterpieces.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
            From architecture to implementation, here's a glimpse into the diverse range of projects I've crafted recently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-gray-100 dark:border-white/5 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              {/* Preview Area */}
              <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                {/* Abstract Visual for Project */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
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
                    Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}