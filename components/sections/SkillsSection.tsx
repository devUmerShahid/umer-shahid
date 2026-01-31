"use client";

import React from "react";

const skills = [
    {
        name: "React.js",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
    },
    {
        name: "Next.js",
        level: 70,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000",
    },
    {
        name: "JavaScript",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
    },
    {
        name: "TypeScript",
        level: 70,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
    },
    {
        name: "Tailwind CSS",
        level: 95,
        icon: "/images/tailwindcss.svg",
        color: "#38B2AC",
    },
    {
        name: "Node.js",
        level: 70,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
    },
    {
        name: "MongoDB",
        level: 65,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
    },
    {
        name: "Firebase",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "#FFCA28",
    },
    {
        name: "Git",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032",
    },
    {
        name: "REST API",
        level: 70,
        icon: "/images/rest-api.svg",
        color: "#009688",
    },
    {
        name: "Postman",
        level: 75,
        icon: "/images/postman.svg",
        color: "#FF6C37",
    },
    {
        name: "Antigravity",
        level: 90,
        icon: "/images/Antigravity.webp",
        color: "#6366F1",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <img src={skill.icon} alt={skill.name} className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        {skill.level}% Proficiency
                                    </span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                                    style={{
                                        width: `${skill.level}%`,
                                        backgroundColor: skill.color
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
