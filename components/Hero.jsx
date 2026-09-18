"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Github, Terminal, Code2, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-[#030712]">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[350px] bg-blue-600/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[200px] sm:w-[400px] h-[150px] sm:h-[250px] bg-cyan-500/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      {/* Content Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl z-10 flex flex-col items-center w-full"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs md:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/30">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-cyan-400"></span>
          </span>
          <span>Available for SDE Roles & Projects</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
            Priyanshu
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-cyan-400 font-mono flex items-center gap-1.5">
            <Terminal size={18} className="inline text-cyan-400 flex-shrink-0" />
            Software Development Engineer
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-400 text-sm sm:text-lg">Data Science & Full-Stack</span>
        </p>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed px-2">
          Crafting scalable web architectures, intelligent AI/ML solutions, and contributing to high-impact open-source systems.
        </p>

        {/* CTA Buttons - Full Width Stack on Mobile */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-2 sm:px-0">
          <a
            href="/image/priyanshuOnWork2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <FileText size={18} />
            <span>View PDF Resume</span>
          </a>

          <Link href="/#projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-200 font-semibold rounded-xl hover:text-cyan-300 hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>
          </Link>

          <a
            href="https://github.com/tech00exploere"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto p-3.5 bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
            <span className="sm:hidden text-sm font-semibold">GitHub Profile</span>
          </a>
        </div>
      </motion.div>

      {/* Code Terminal Graphic Visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-10 sm:mt-14 w-full max-w-4xl z-10 relative group px-1 sm:px-2"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition duration-700 pointer-events-none" />
        
        <div className="relative rounded-2xl overflow-hidden border border-blue-900/60 bg-slate-950/90 shadow-2xl backdrop-blur-2xl text-left font-mono text-[11px] sm:text-xs md:text-sm text-slate-300">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-1 sm:ml-2 text-slate-400 text-[11px] sm:text-xs font-semibold flex items-center gap-1">
                <Code2 size={14} className="text-cyan-400 flex-shrink-0" />
                <span className="truncate max-w-[140px] sm:max-w-none">developer@priyanshu: ~</span>
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-cyan-400/90 bg-blue-950/70 px-2 sm:px-2.5 py-0.5 rounded border border-blue-800/40 flex items-center gap-1 flex-shrink-0">
              <Zap size={11} className="text-cyan-400" />
              <span className="hidden sm:inline">Node.js • TypeScript • Next.js</span>
              <span className="sm:hidden">SDE Stack</span>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-[#030712]/95 overflow-x-auto">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <span className="text-slate-500">$</span>
              <span>priyanshu --status --verbose</span>
            </div>

            <div className="text-slate-300 pl-2 sm:pl-4 space-y-1.5 text-[11px] sm:text-xs md:text-sm">
              <p className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Role: <strong className="text-white">Software Development Engineer</strong></span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Focus: <span className="text-cyan-300 font-mono">Microservices, AI/LLMs, Next.js</span></span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Metrics: <span className="text-amber-400 font-bold">400+ DSA</span> | <span className="text-cyan-300">LeetCode 1600+</span></span>
              </p>
            </div>

            <div className="flex items-center gap-2 text-cyan-400 font-semibold pt-1 sm:pt-2">
              <span className="text-slate-500">$</span>
              <span>priyanshu --featured-projects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pl-2 sm:pl-4 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-900/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-cyan-400 font-bold">JobSearch.AI</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">AI / LLM</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block">AI role matching & resume insights</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-900/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-cyan-400 font-bold">Kisaan-Setu</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">Agritech</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block">AI Agritech marketplace</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-900/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-cyan-400 font-bold">Connectly</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">Real-Time</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block">Socket.IO real-time network</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 pt-1 sm:pt-2 text-[11px] sm:text-xs">
              <span className="text-cyan-400">❯</span>
              <span className="animate-pulse text-cyan-400 font-bold">Ready to build production-grade software_</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
