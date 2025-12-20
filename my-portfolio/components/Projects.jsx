"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects({ projects }) {
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section id="projects" className="py-20 bg-[#fdf8ef]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* 2 projects per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg p-5 space-y-4"
            >
              {/* Tabs */}
              <div className="flex gap-4 border-b pb-2">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`text-sm font-medium ${
                    activeTab === "description"
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("screenshots")}
                  className={`text-sm font-medium ${
                    activeTab === "screenshots"
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  Screenshots
                </button>
              </div>

              {/* TAB CONTENT */}
              {activeTab === "description" && (
                <>
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </>
              )}

              {activeTab === "screenshots" && (
                <div
                  className="relative h-48 cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setActive({ project, index: 0 })}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.alts[0]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div className="relative w-[90%] max-w-5xl h-[80vh]">
            <Image
              src={active.project.images[active.index]}
              alt={active.project.alts[active.index]}
              fill
              sizes="90vw"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
