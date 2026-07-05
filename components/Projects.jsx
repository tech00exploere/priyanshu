"use client";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 bg-[#fdf8ef]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-deepbrown text-center mb-12">
          Projects
        </h2>

        {/* 2 projects per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 space-y-4 border border-orange-100 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>
              
              {project.technologies && (
                <p className="text-sm font-semibold text-orange-600 mb-2">
                  {project.technologies}
                </p>
              )}
              
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2 flex-grow">
                {Array.isArray(project.description) ? (
                  project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                ) : (
                  <li>{project.description}</li>
                )}
              </ul>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 mt-auto border-t border-gray-100">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-5 py-2.5 rounded-lg text-sm font-bold border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
