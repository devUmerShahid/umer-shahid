"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500 pt-15"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-pink-400/10 dark:bg-pink-600/5 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Open for opportunities
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl font-[500] text-gray-700 dark:text-gray-300 leading-tight animate-fade-in-up">
                Hi! I'm&nbsp; Umer&nbsp; Shahid.
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                  Shahid.
                </span> */}
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-black-700 dark:text-gray-300 animate-fade-in-up animation-delay-200">
                Full-Stack Developer & UI Architect
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              I transform complex ideas into elegant, high-performance digital solutions.
              Specializing in <span className="text-black dark:text-white font-semibold border-b-2 border-blue-600/10">Next.js</span>,
              <span className="text-[#33CFFA] dark:text-[#33CFFA] font-semibold border-b-2 border-purple-600/10"> React.js</span>, and
              <span className="text-black dark:text-white font-semibold border-b-2 border-indigo-600/10"> Scalable Architectures</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up animation-delay-600">
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/10 dark:shadow-white/5"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-wide">
                  Explore Work
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-3.5 bg-transparent text-gray-900 dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:border-gray-900 dark:hover:border-white"
              >
                <span className="flex items-center gap-2 text-sm uppercase tracking-wide">
                  View Resume
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>


          </div>

          {/* Right Visual Element */}
          <div className="flex-1 relative w-full max-w-[380px] aspect-square animate-fade-in animation-delay-400">
            {/* Abstract Decorative Shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[3rem] rotate-6 scale-95 blur-sm"></div>
            <div className="absolute inset-0 bg-white dark:bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/20 dark:border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group">
              {/* Inside the frame: A stylized 'code' card or graphic */}
              <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[9px] font-mono text-gray-400">PORTFOLIO.TSX</div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <p className="text-blue-500"><span className="text-purple-500">const</span> umer <span className="text-gray-400">=</span> {"{"}</p>
                  <p className="pl-5 text-gray-600 dark:text-gray-300">role: <span className="text-emerald-500">'Developer'</span>,</p>
                  <p className="pl-5 text-gray-600 dark:text-gray-300">passions: [<span className="text-emerald-500">'Tech'</span>, <span className="text-emerald-500">'Design'</span>],</p>
                  <p className="pl-5 text-gray-600 dark:text-gray-300">status: <span className="text-emerald-500">'Building'</span></p>
                  <p className="text-blue-500">{"}"};</p>
                </div>

                <div className="mt-6 relative h-28 w-full bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 p-4 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="h-1.5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded"></div>
                    <div className="h-1.5 w-3/4 bg-gray-100 dark:bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center animate-bounce animation-delay-1000">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="p-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}