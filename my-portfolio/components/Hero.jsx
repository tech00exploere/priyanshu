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
        <h1 className="text-4xl font-extrabold text-deepbrown">
          Priyanshu
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Data Science Engineer • Web Developer
        </p>
        {/* Buttons */}
<div className="mt-6 flex gap-4 justify-center">

  {/* View Resume */}
  <Link href="/my-resume">
  <button className="relative z-50 pointer-events-auto px-6 py-2 bg-deepbrown text-white rounded">
    View Resume
  </button>
</Link>

<Link href="/projects">
  <button className="relative z-50 pointer-events-auto px-6 py-2 border-2 border-deepbrown rounded">
    Explore Projects
  </button>
</Link>


</div>

      </motion.div>
    </section>
  );
}
