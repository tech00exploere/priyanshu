"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#f7eedc] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
           src="/image/about-img.png"

            width={400}
            height={400}
            alt="About Image"
            className="rounded-2xl shadow-xl border border-[#d2bfa5]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#4a3f35] mb-6">About Me</h2>

          <p className="text-lg text-[#5a4f45] leading-relaxed">
            Hi, I’m <span className="font-semibold">Priyanshu</span> — a
            curious software engeener. 
          </p>

          <p className="text-lg text-[#5a4f45] mt-4 leading-relaxed">
            I’m passionate about working with modern tools like Python, Machine Learning, React, Django, and Next.js. My focus is on building clean, scalable, and AI-powered applications that make a real impact.
         </p>

        <p className="text-lg text-[#5a4f45] mt-4 leading-relaxed">
            Beyond coding and technology, I love turning ideas into engaging projects, designing creative content, and exploring emerging trends that push the boundaries of innovation.
        </p>

        </motion.div>
      </div>
    </section>
  );
}