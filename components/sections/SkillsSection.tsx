"use client";

import React from "react";

const skills = [
    {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "/images/tailwindcss.svg",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "REST API",
        icon: "/images/rest-api.svg",
    },
    {
        name: "Postman",
        icon: "/images/postman.svg",
    },
    {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
        name: "Elementor",
        icon: "https://cdn.simpleicons.org/elementor",
    },
    {
        name: "Antigravity",
        icon: "/images/Antigravity.webp",
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-6 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                        <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
                            My Toolbox
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive look at the technologies and tools I use to build scalable digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                                <img src={skill.icon} alt={skill.name} className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
