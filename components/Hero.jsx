"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-6">
      
      {/* Workspace Image */}
      <motion.img
        src="/image/hero-desk.png"
        alt="workspace"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl rounded-xl shadow-xl"
      />

      {/* Name + Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-center mt-10"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-deepbrown">
          Priyanshu
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Data Science Engineer • Web Developer
        </p>
        {/* Buttons */}
<div className="mt-6 flex gap-4 justify-center">

  {/* View Resume */}
  <Link href="/my-resume">
  <button className="relative z-50 pointer-events-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    View Resume
  </button>
</Link>

<Link href="/projects">
  <button className="relative z-50 pointer-events-auto px-8 py-3 border-2 border-orange-500 text-orange-600 font-bold rounded-lg shadow-sm hover:bg-orange-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    Explore Projects
  </button>
</Link>


</div>

      </motion.div>
    </section>
  );
}
