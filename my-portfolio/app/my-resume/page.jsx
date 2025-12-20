"use client";
import { motion } from "framer-motion";

export default function MyResume() {
  return (
    <div className="min-h-screen bg-[#f7eedc] pt-32 pb-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Resume</h1>

      <div className="max-w-5xl mx-auto grid gap-8">

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hello! I’m Priyanshu, a Software Engineer and a 3rd-year B.Tech CSE (Data Science) student at AKGEC. I’m passionate about full-stack development and machine learning, with a keen interest in building and scaling robust applications.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "tailwindcss",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "Python",
              "Machine Learning",
              "Generative AI",
              "DevOps Basics",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>


        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="font-semibold">AKGEC — B.Tech CSE (Data Science)</p>
          <p className="text-gray-700 text-sm">3rd Year • student</p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>DevOps – SkillUp (GeeksforGeeks)</li>
           <li>Complete Machine Learning & Data Science – SkillUp (GeeksforGeeks)</li>
           <li>Generative AI & ChatGPT – Self-Paced (GeeksforGeeks)</li>
         </ul>

        </motion.div>

        {/* Download Button */}
        <div className="text-center mt-4">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-black text-white rounded-xl shadow hover:opacity-80 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}