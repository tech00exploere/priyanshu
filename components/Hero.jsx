"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Github, Terminal, Code2, Cpu, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#030712]">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Content Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl z-10 flex flex-col items-center"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/30">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          Available for SDE Roles & Engineering Projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
            Priyanshu
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl md:text-2xl font-semibold text-slate-300 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-cyan-400 font-mono flex items-center gap-1.5">
            <Terminal size={20} className="inline text-cyan-400" />
            Software Development Engineer
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Data Science & Full-Stack</span>
        </p>

        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Crafting scalable web architectures, intelligent AI/ML solutions, and contributing to high-impact open-source systems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
          <a
            href="/image/priyanshuOnWork2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm"
          >
            <FileText size={18} />
            View PDF Resume
          </a>

          <Link href="/#projects">
            <button className="px-7 py-3.5 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-200 font-semibold rounded-xl hover:text-cyan-300 hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm">
              Explore Projects
              <ArrowRight size={18} />
            </button>
          </Link>

          <a
            href="https://github.com/tech00exploere"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
        </div>
      </motion.div>

      {/* Code Terminal Graphic Visual (Replaces Desk Image) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-14 w-full max-w-4xl z-10 relative group px-2"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition duration-700 pointer-events-none" />
        
        <div className="relative rounded-2xl overflow-hidden border border-blue-900/60 bg-slate-950/90 shadow-2xl backdrop-blur-2xl text-left font-mono text-xs md:text-sm text-slate-300">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-slate-400 text-xs font-semibold flex items-center gap-1.5">
                <Code2 size={14} className="text-cyan-400" /> developer@priyanshu-sde: ~
              </span>
            </div>
            <div className="text-[11px] text-cyan-400/90 bg-blue-950/70 px-2.5 py-0.5 rounded border border-blue-800/40 flex items-center gap-1">
              <Zap size={12} className="text-cyan-400" /> Node.js • TypeScript • Next.js
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-6 space-y-4 bg-[#030712]/95 overflow-x-auto">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <span className="text-slate-500">$</span>
              <span>priyanshu --status --verbose</span>
            </div>

            <div className="text-slate-300 pl-4 space-y-1.5 text-xs md:text-sm">
              <p className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                <span>Role: <strong className="text-white">Software Development Engineer (Full-Stack & Data Science)</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                <span>Focus: <span className="text-cyan-300 font-mono">Scalable Microservices, AI/LLMs, Next.js, Distributed Systems</span></span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                <span>Problem Solving: <span className="text-amber-400 font-bold">400+ DSA Solved</span> | <span className="text-cyan-300">LeetCode 1600+</span> | <span className="text-indigo-300">CodeChef 2★</span></span>
              </p>
            </div>

            <div className="flex items-center gap-2 text-cyan-400 font-semibold pt-2">
              <span className="text-slate-500">$</span>
              <span>priyanshu --featured-projects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-4 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-900/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-cyan-400 font-bold">JobSearch.AI</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">AI / LLM</span>
                </div>
                <span className="text-[11px] text-slate-400 block">Smart AI role matching & resume insights</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-900/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-cyan-400 font-bold">Kisaan-Setu</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">Agritech</span>
                </div>
                <span className="text-[11px] text-slate-400 block">AI Agritech marketplace (26+ pages)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-900/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-cyan-400 font-bold">Connectly</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">Real-Time</span>
                </div>
                <span className="text-[11px] text-slate-400 block">Socket.IO real-time social network</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 pt-2 text-xs">
              <span className="text-cyan-400">❯</span>
              <span className="animate-pulse text-cyan-400 font-bold">Ready to build production-grade software_</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
