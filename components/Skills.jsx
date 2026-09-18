"use client";

import { Layout, Server, Database, Cloud, BrainCircuit, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-cyan-400" size={20} />,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TailwindCSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend Engineering",
    icon: <Server className="text-blue-400" size={20} />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.IO"],
  },
  {
    title: "Database & Storage",
    icon: <Database className="text-indigo-400" size={20} />,
    skills: ["MongoDB", "MySQL", "SQL Queries", "Database Design"],
  },
  {
    title: "DevOps & Cloud Tools",
    icon: <Cloud className="text-sky-400" size={20} />,
    skills: ["Git & GitHub", "AWS Basics", "Linux CLI", "Postman", "CI/CD"],
  },
  {
    title: "Machine Learning & AI",
    icon: <BrainCircuit className="text-teal-400" size={20} />,
    skills: ["Python", "Machine Learning", "Matplotlib & Seaborn", "Generative AI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#030712] text-slate-100 scroll-mt-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Code size={14} />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
            Skills & Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto px-2">
            Technologies and frameworks I utilize to architect robust software applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-blue-950/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 border-b border-slate-800/80">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/40 flex-shrink-0">
                    {cat.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/80 text-slate-300 border border-slate-800/80 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}