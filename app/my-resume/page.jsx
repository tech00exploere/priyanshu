"use client";
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Code2, GitPullRequest, Terminal, CheckCircle2 } from "lucide-react";

export default function MyResume() {
  return (
    <div className="py-20 bg-[#030712] text-slate-100 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal size={14} />
            Curriculum Vitae
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
            Software Engineering Resume
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Detailed breakdown of my technical background, open-source work, and competitive programming achievements.
          </p>
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-blue-950/80 hover:border-cyan-500/30 transition-all space-y-3"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <Briefcase size={20} className="text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Professional Summary</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-base">
            Software Engineer passionate about building scalable full-stack applications, solving real-world challenges, collaborating in team-driven environments, and contributing to impactful open-source software systems.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-blue-950/80 hover:border-cyan-500/30 transition-all space-y-4"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <GraduationCap size={20} className="text-blue-400" />
            <h2 className="text-xl font-bold text-white">Education</h2>
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <p className="font-bold text-lg text-white">Ajay Kumar Garg Engineering College (AKGEC)</p>
              <p className="text-cyan-400 text-sm font-medium">Bachelor of Technology in Computer Science & Engineering (Data Science)</p>
            </div>
            <div className="text-slate-400 text-sm font-mono sm:text-right">
              <p>Ghaziabad, India</p>
              <p className="text-cyan-400">2023 – 2027</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-blue-950/80 hover:border-cyan-500/30 transition-all space-y-4"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <Code2 size={20} className="text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Technical Skills</h2>
          </div>
          <ul className="text-slate-300 text-sm space-y-3">
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-bold text-white sm:w-48">Programming Languages:</span>
              <span className="text-cyan-300 font-mono">C++, C, Java, JavaScript, Python</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-bold text-white sm:w-48">Frontend Frameworks:</span>
              <span className="text-slate-300">React.js, Next.js, HTML5, CSS3, Tailwind CSS</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-bold text-white sm:w-48">Backend & APIs:</span>
              <span className="text-slate-300">Node.js, Express.js, REST APIs, JWT Auth, Google OAuth, Socket.IO</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-bold text-white sm:w-48">Databases & Storage:</span>
              <span className="text-slate-300">MongoDB, MySQL</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-bold text-white sm:w-48">Developer Tools:</span>
              <span className="text-slate-300 font-mono">Git, GitHub, Linux, VS Code, Postman</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-bold text-white sm:w-48">Core CS Fundamentals:</span>
              <span className="text-slate-300">Data Structures & Algorithms, OOPs, DBMS, Operating Systems, Computer Networks</span>
            </li>
          </ul>
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-blue-950/80 hover:border-cyan-500/30 transition-all space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <GitPullRequest size={20} className="text-teal-400" />
            <h2 className="text-xl font-bold text-white">Open Source Contributions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="font-bold text-base text-white">Idurar ERP CRM</p>
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">React.js, Node.js, MongoDB (PR #1464)</span>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5 list-disc pl-5">
                <li>Implemented a production-ready CSV Export feature for the DataTable component, resolving Issue #1403.</li>
                <li>Integrated toolbar actions, handled empty-table states, and improved ESLint compatibility.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="font-bold text-base text-white">Supabase Auth</p>
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">Go, Authentication (PR #1322)</span>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5 list-disc pl-5">
                <li>Resolved a WebOTP compatibility issue by fixing SMS OTP template newline handling, improving auth reliability.</li>
                <li>Added regression tests to strengthen authentication stability.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="font-bold text-base text-white">Socket.IO</p>
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">Documentation (PR #542)</span>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5 list-disc pl-5">
                <li>Clarified server.on() and server.emit() API behavior in official developer documentation, resolving Issue #4608.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-blue-950/80 hover:border-cyan-500/30 transition-all space-y-4"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <Award size={20} className="text-amber-400" />
            <h2 className="text-xl font-bold text-white">Achievements & Competitive Programming</h2>
          </div>
          <ul className="text-slate-300 text-sm space-y-2.5">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
              <span>Solved <strong>400+ Data Structures & Algorithms</strong> problems across competitive programming platforms.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
              <span><strong>LeetCode:</strong> Rating 1600+</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
              <span><strong>CodeChef:</strong> 2★ Rated Programmer</span>
            </li>
          </ul>
        </motion.div>

        {/* Download CTA Button */}
        <div className="text-center pt-6">
          <a
            href="/image/priyanshuOnWork2.pdf"
            download="Priyanshu_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={20} />
            Download PDF Resume
          </a>
        </div>

      </div>
    </div>
  );
}
