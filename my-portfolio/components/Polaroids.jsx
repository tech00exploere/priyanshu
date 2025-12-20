"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "AI Dashboard", img: "/images/placeholder-polaroid.png" },
  { title: "DS Portfolio Hub", img: "/images/placeholder-polaroid.png" },
  { title: "OurMemeWorld Tools", img: "/images/placeholder-polaroid.png" },
];

export default function Polaroids() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <h3 className="text-deepbrown font-semibold mb-2">Projects</h3>

      <div className="flex gap-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, rotate: i % 2 ? -2 : 2 }}
            onClick={() => setActive(p)}
            className="polaroid w-28 p-2 cursor-pointer"
          >
            <img
              src={p.img}
              alt="polaroid"
              className="w-full h-20 object-cover rounded-sm"
            />
            <div className="mt-2 text-xs text-deepbrown font-medium text-center">
              {p.title}
            </div>
          </motion.div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[640px]">
            <div className="flex justify-between">
              <h3 className="font-semibold">{active.title}</h3>
              <button
                onClick={() => setActive(null)}
                className="text-gray-400"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-700">
              This project showcases an interactive data-driven dashboard built
              using React, Next.js and TailwindCSS.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100 transition"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}