"use client";
import { useState } from "react";
import { roadmap } from "@/data/roadmap";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, BookOpen, ExternalLink, Map, Flame } from "lucide-react";

export default function MyRoadmap() {
  const [completed, setCompleted] = useState([]);
  const [openCheat, setOpenCheat] = useState(null);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-20 bg-[#030712] text-slate-100 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Map size={14} />
            Skill Quest
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
            SDE Engineering Roadmap
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Track my learning progression, master concepts, and view quick reference cheat sheets.
          </p>
        </div>

        {/* Level Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((level) => {
            const isDone = completed.includes(level.id);

            return (
              <motion.div
                key={level.id}
                className={`p-6 rounded-2xl border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 relative group ${
                  isDone
                    ? "bg-emerald-950/30 border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                    : "bg-slate-900/60 border-blue-950/80 hover:border-cyan-500/40 shadow-xl"
                }`}
                whileHover={{ y: -3 }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-cyan-400">
                        L{level.id}
                      </span>
                      {level.title}
                    </h2>
                    {isDone && (
                      <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    <button
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                        isDone
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-blue-950/80 text-cyan-300 border border-blue-800/50 hover:bg-blue-900/80"
                      }`}
                      onClick={() => toggleComplete(level.id)}
                    >
                      <Flame size={14} />
                      {isDone ? "Completed" : "Mark Complete"}
                    </button>

                    <button
                      className="text-xs font-semibold px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg hover:text-white hover:border-slate-700 transition-all flex items-center gap-1.5"
                      onClick={() =>
                        setOpenCheat(openCheat === level.id ? null : level.id)
                      }
                    >
                      <BookOpen size={14} />
                      Cheat Sheet
                    </button>
                  </div>

                  {/* Cheat Sheet Modal */}
                  <AnimatePresence>
                    {openCheat === level.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 p-3.5 bg-slate-950 border border-blue-900/50 rounded-xl text-slate-300 text-xs font-mono leading-relaxed"
                      >
                        <p className="text-cyan-300 font-semibold mb-1">💡 Quick Notes:</p>
                        <p>{level.cheatSheet}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources */}
                {level.links && level.links.length > 0 && (
                  <div className="pt-4 mt-2 border-t border-slate-800/80">
                    <h3 className="text-xs font-mono uppercase text-slate-400 mb-2">Resource Links:</h3>
                    <ul className="space-y-1.5 text-xs font-medium">
                      {level.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 truncate"
                          >
                            <ExternalLink size={12} className="flex-shrink-0" />
                            <span className="truncate">{link}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
