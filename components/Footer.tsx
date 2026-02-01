"use client";

import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        {
            name: "GitHub", href: "https://github.com/devUmerShahid", icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: "LinkedIn", href: "https://www.linkedin.com/in/muhamad-umer-shahid/", icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: "Email", href: "mailto:devumer.shahid@gmail.com", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-white dark:bg-[#050505] border-t border-gray-100 dark:border-white/5 pt-16 pb-8 transition-colors duration-500">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <a
                            href="#"
                            onClick={(e) => scrollToSection(e, '#hero')}
                            className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter"
                        >
                            Umer<span className="text-blue-600">.</span>
                        </a>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Crafting digital experiences with code and creativity. Specialized in building modern, performant, and user-centric web applications.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.name === "Email" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">Navigation</h3>
                        <ul className="space-y-4">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-blue-600">●</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">Open for freelance opportunities</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-blue-600">●</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">Based in Islamabad, Pakistan</span>
                            </li>
                            <li>
                                <a href="mailto:devumer.shahid@gmail.com" className="text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    devumer.shahid@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-xs font-medium text-center md:text-left">
                        &copy; {currentYear} Umer Shahid. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-xs font-medium flex items-center gap-1">
                        Built with <span className="text-red-500">♥</span> and Next.js
                    </p>
                </div>

            </div>
        </footer>
    );
}
