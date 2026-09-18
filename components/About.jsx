"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, Cpu, Code2, Sparkles, Server } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Code2 size={18} className="text-cyan-400" />, label: "Full-Stack Development" },
    { icon: <Cpu size={18} className="text-blue-400" />, label: "Machine Learning & AI" },
    { icon: <Server size={18} className="text-indigo-400" />, label: "Scalable Microservices" },
    { icon: <Sparkles size={18} className="text-sky-400" />, label: "Open-Source Contributor" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 bg-[#030712] text-slate-200 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
          <div className="relative p-2 bg-slate-900/90 border border-cyan-500/30 rounded-3xl shadow-2xl backdrop-blur-xl">
            <Image
              src="/image/about-img.png"
              width={420}
              height={420}
              alt="Priyanshu - Software Development Engineer"
              className="rounded-2xl object-cover shadow-xl brightness-95"
            />
          </div>
        </motion.div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <User size={14} />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
            Engineered for Innovation & Impact
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Hi, I’m <span className="font-semibold text-white">Priyanshu</span> — a
            driven <span className="text-cyan-400 font-semibold">Software Development Engineer</span> pursuing Computer Science & Engineering (Data Science) at Ajay Kumar Garg Engineering College (AKGEC).
          </p>

          <p className="text-base text-slate-400 leading-relaxed">
            I specialize in building production-ready web platforms, distributed backend systems, and AI-powered data pipelines using modern technologies like Python, React, Next.js, Node.js, and MongoDB.
          </p>

          <p className="text-base text-slate-400 leading-relaxed">
            Active in competitive programming (LeetCode 1600+, 400+ DSA problems solved) and an open-source contributor to major software projects like Supabase Auth, Socket.IO, and Idurar ERP.
          </p>

          {/* Core Feature Badges */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-blue-900/40 text-xs font-semibold text-slate-200 backdrop-blur-md"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}