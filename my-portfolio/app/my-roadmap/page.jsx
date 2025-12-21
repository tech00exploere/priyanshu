"use client";
import { useState } from "react";
import { roadmap } from "@/data/roadmap";
import { motion, AnimatePresence } from "framer-motion"; 

export default function MyRoadmap() {
  const [completed, setCompleted] = useState([]);
  const [openCheat, setOpenCheat] = useState(null);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f7eedc] px-6 max-w-6xl mx-auto pt-32 md:pt-40">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#4a3f35]">
        My Roadmap Game
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((level) => (
          <motion.div
            key={level.id}
            className={`p-6 border rounded-xl shadow-lg bg-white cursor-pointer relative flex flex-col justify-between transition-all duration-200 ${
              completed.includes(level.id)
                ? "border-green-500 bg-green-50"
                : "border-gray-300"
            }`}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#4a3f35]">
              {level.title}
            </h2>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mb-2">
              {/* Mark complete button */}
              <button
                className={`text-sm px-3 py-1 rounded ${
                  completed.includes(level.id)
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-100 hover:bg-green-200"
                }`}
                onClick={() => toggleComplete(level.id)}
              >
                {completed.includes(level.id) ? " Completed" : "Mark Complete"}
              </button>

              {/* Cheat sheet button */}
              <button
                className="text-sm px-3 py-1 bg-blue-100 rounded hover:bg-blue-200"
                onClick={() =>
                  setOpenCheat(openCheat === level.id ? null : level.id)
                }
              >
                Cheat Sheet
              </button>
            </div>

            {/* Cheat sheet modal */}
            <AnimatePresence>
              {openCheat === level.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 p-4 bg-gray-50 border rounded shadow-inner"
                >
                  <p className="text-gray-700">{level.cheatSheet}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Resources / Links */}
            {level.links && level.links.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-1 text-[#4a3f35]">Resources:</h3>
                <ul className="list-disc list-inside text-blue-600 space-y-1">
                  {level.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
