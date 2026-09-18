"use client";

import { ExternalLink, Github, FolderGit2, CheckCircle2, Globe, Cpu, Radio } from "lucide-react";

export default function Projects({ projects }) {
  // Mapping project titles to visual graphic badges/icons
  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes("ai")) return <Cpu className="text-cyan-400" size={16} />;
    if (title.toLowerCase().includes("connect")) return <Radio className="text-indigo-400" size={16} />;
    return <Globe className="text-blue-400" size={16} />;
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#030712] text-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 size={14} />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto px-2">
            Production-ready web apps, real-time messaging platforms, and AI-driven marketplace architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => {
            const techList = project.technologies
              ? project.technologies.split(",").map((t) => t.trim())
              : [];

            return (
              <div
                key={project.id}
                className="bg-slate-900/70 rounded-2xl shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 border border-blue-950/80 hover:border-cyan-500/40 flex flex-col h-full backdrop-blur-xl group overflow-hidden"
              >
                {/* Visual Browser Header Mockup */}
                <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 px-2 sm:px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 truncate max-w-[140px] sm:max-w-[180px]">
                    {project.live ? project.live.replace("https://", "").replace(/\/$/, "") : project.title.toLowerCase()}
                  </div>
                  <div className="p-1 text-slate-500 flex-shrink-0">
                    {getProjectIcon(project.title)}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-5 sm:p-7 space-y-4 sm:space-y-5 flex flex-col flex-grow">
                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tech Badges */}
                  {techList.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {techList.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-blue-950/70 border border-blue-800/50 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <ul className="text-slate-300 text-xs sm:text-sm space-y-2 sm:space-y-2.5 flex-grow leading-relaxed">
                    {Array.isArray(project.description) ? (
                      project.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{project.description}</span>
                      </li>
                    )}
                  </ul>

                  {/* Footer Action Buttons - Stack Full Width on Mobile */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 mt-auto border-t border-slate-800/80">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
