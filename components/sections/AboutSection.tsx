"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image/Visual Side */}
          <div className="flex-1 relative group w-full max-w-[400px] lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto bg-gray-100 dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-lg">
              <img
                src="/images/umer_pfp.jpg"
                alt="Umer Shahid"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x500/png?text=Profile+Image";
                }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-[1.2] space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">About Me</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                Turning Vision into Reality.
              </h2>

              <div className="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I am a Frontend-focused MERN Stack Developer with 1+ year of hands-on experience building modern web applications. I specialize in React.js, Next.js, and Tailwind CSS to deliver responsive and user-centric interfaces.
                </p>
                <p>
                  On the backend, I work with the MERN stack and use Firebase as BaaS for authentication, databases, and hosting. I enjoy solving real-world problems, writing clean code, and continuously improving my development skills.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all group text-lg">
                Let's discuss your next project
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}