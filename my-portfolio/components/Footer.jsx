"use client";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#e5e5e5] border-t border-[#1f1f1f] mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6 gap-6">

        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold tracking-wide">
            Priyanshu<span className="text-orange-400">.dev</span>
          </h2>
          <p className="text-sm text-[#9ca3af] mt-1">
            Building ideas into the reality
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-2xl justify-center md:justify-end">
          <a
            href="https://github.com/tech00exploere"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/priyanshu-chandra-6420b2230/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0a66c2] transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Priyanshu214965"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <FaXTwitter />
          </a>

          <a
             href="mailto:priyanshu2507.rjs@gmail.com"
             aria-label="Email"
             className="hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
             >
            <FaEnvelope />
          </a>

        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-[#777] py-4 border-t border-[#1f1f1f]">
        &copy; {new Date().getFullYear()} Priyanshu.dev · All rights reserved.
      </div>
    </footer>
  );
}