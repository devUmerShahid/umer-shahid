type Experience = {
    company: string;
    tagline: string;
    position: string;
    location: string;
    industry: string;
    date: string;
    description: string;
    companyDescription: string;
    website?: string;
};

const experiences: Experience[] = [
    {
        company: "Alpha Digital",
        tagline: "Digital agency",
        position: "Web Developer",
        location: "Islamabad, Pakistan (On-site)",
        industry: "Digital Marketing / Web Development",
        date: "Aug 2026 - Present",
        description:
            "As a Web Developer, I build and maintain responsive websites using React.js, Next.js, and WordPress, converting UI/UX designs into functional, cross-browser-compatible pages, and collaborate closely with SEO and marketing teams to optimize site structure and performance.",
        companyDescription:
            "Alpha Digital is a digital agency delivering websites and web-based marketing solutions for clients.",
        website: "http://www.alphadigital.live",
    },
    {
        company: "uExel Solutions",
        tagline: "SaaS / enterprise software",
        position: "Frontend Developer",
        location: "Islamabad, Pakistan (On-site)",
        industry: "SaaS / Enterprise Software",
        date: "Sep 2025 - Aug 2026",
        description:
            "As a Frontend Developer, I built responsive, scalable React.js modules for production grade SaaS platforms - a Point of Sale (POS) system and a Learning Management System (LMS) - integrating REST APIs with a Node.js/Express.js backend and managing application state with Redux Toolkit and Context API.",
        companyDescription:
            "uExel Solutions builds production-grade SaaS platforms, including point-of-sale and learning management systems, for businesses.",
    },
    {
        company: "WebPlaners",
        tagline: "Remote web development agency",
        position: "Web Developer (Project-Based)",
        location: "Islamabad, Pakistan (Remote)",
        industry: "Web Development / Digital Agency",
        date: "Jun 2024 - Nov 2025",
        description:
            "Working remotely as a Web Developer, I built and maintained 10-15+ client websites - from custom WordPress builds using Elementor, ACF, and WooCommerce, to custom CMS portals built with Next.js, React, Firebase, and Tailwind CSS - taking each project from concept through launch.",
        companyDescription:
            "WebPlaners is a web development agency delivering business websites, e-commerce stores, and custom web portals for international clients across the UK, UAE, and beyond.",
    },
];

function ExperienceDetail({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-1">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300/75">
                {label}
            </dt>
            <dd className="text-sm font-semibold leading-relaxed text-white/90">{value}</dd>
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="bg-gray-50 px-6 py-24 text-gray-900 transition-colors duration-500 dark:bg-[#050505] dark:text-white md:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 flex items-end justify-between gap-6 border-b border-white/15 pb-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                        Experience
                    </h2>
                    <span className="hidden pb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/35 md:block">
                        2024 - Present
                    </span>
                </div>

                <div className="divide-y divide-white/10">
                    {experiences.map((experience) => (
                        <article key={experience.company} className="py-12 first:pt-0 last:pb-0 md:py-16">
                            <header className="mb-8">
                                <h3 className="text-3xl font-bold tracking-tight text-white md:text-[2rem]">
                                    {experience.company}
                                </h3>
                                <p className="mt-2 text-sm text-white/45">{experience.tagline}</p>
                            </header>

                            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_3fr] md:gap-16">
                                <dl className="grid grid-cols-2 gap-x-5 gap-y-7 md:block md:space-y-7">
                                    <ExperienceDetail label="Position" value={experience.position} />
                                    <ExperienceDetail label="Location" value={experience.location} />
                                    <ExperienceDetail label="Industry" value={experience.industry} />
                                    <ExperienceDetail label="Date" value={experience.date} />
                                    {experience.website && (
                                        <div className="space-y-1">
                                            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300/75">
                                                Website
                                            </dt>
                                            <dd>
                                                <a
                                                    href={experience.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm font-semibold text-white/90 underline decoration-white/35 underline-offset-4 transition-colors hover:text-blue-300"
                                                >
                                                    alphadigital.live
                                                </a>
                                            </dd>
                                        </div>
                                    )}
                                </dl>

                                <div className="max-w-3xl space-y-5 text-base leading-8 text-[#b8b7c8] md:text-lg">
                                    <p>{experience.description}</p>
                                    <p className="text-white/55">{experience.companyDescription}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
