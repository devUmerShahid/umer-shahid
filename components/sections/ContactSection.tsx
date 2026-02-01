"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="container mx-auto max-w-4xl text-center">

        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
              Contact
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
            Let's Start a Conversation.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        {/* Contact Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:devumer.shahid@gmail.com"
            className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-3xl shadow-sm text-blue-500 group-hover:scale-110 transition-transform duration-300">
              ✉️
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Me</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">devumer.shahid@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhamad-umer-shahid/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-3xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform duration-300">
              in
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Connect professionally</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/devUmerShahid"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-3xl shadow-sm text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">GitHub</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Check out my code</p>
          </a>

        </div>

      </div>
    </section>
  );
}