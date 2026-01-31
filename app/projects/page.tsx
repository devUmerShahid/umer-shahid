export default function Projects() {
  // Yeh fake projects hain — baad mein apne real projects se replace kar denge
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "Yeh wahi portfolio hai jo abhi bana rahe hain! Next.js + Tailwind se bana.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/yourusername/umer-portfolio",
      live: "https://umer-portfolio.vercel.app",
    },
    {
      id: 2,
      title: "Todo App",
      description: "Simple task manager app jisme add, delete aur complete tasks kar sakte ho.",
      tech: ["React", "LocalStorage", "Tailwind"],
      github: "https://github.com/yourusername/todo-app",
      live: "https://todo-app-yourusername.vercel.app",
    },
    {
      id: 3,
      title: "Weather App",
      description: "City search karke current weather aur forecast dekho (API se data).",
      tech: ["React", "OpenWeather API", "Tailwind"],
      github: "https://github.com/yourusername/weather-app",
      live: "#", // abhi live nahi to # daal do
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Project Screenshot Here
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2 rounded-lg transition ${
                      project.live !== "#"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}