"use client";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-blue-950/80 mt-16 sm:mt-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-8 sm:py-12 px-4 sm:px-6 gap-6">

        <div className="text-center md:text-left space-y-1"> 
          <h2 className="text-xl font-extrabold tracking-tight text-white">
            Priyanshu<span className="text-cyan-400">.dev</span>
          </h2>
          <p className="text-xs text-slate-400">
            Software Development Engineer • Data Science & Machine Learning
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 sm:gap-5 text-xl justify-center md:justify-end">
          <a
            href="https://github.com/tech00exploere"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/priyanshu-chandra-6420b2230/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Priyanshu214965"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
      
      <div className="text-center text-xs text-slate-500 py-5 sm:py-6 px-4 border-t border-slate-900">
        &copy; {new Date().getFullYear()} Priyanshu.dev · Designed & Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
