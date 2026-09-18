"use client";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030712]/80 backdrop-blur-xl border-b border-blue-950/60 z-50 px-6 py-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-800/40 text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
            <Code2 size={20} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Priyanshu<span className="text-cyan-400">.dev</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/image/priyanshuOnWork2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-sm"
            >
              PDF Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-cyan-400 p-2 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b132b]/95 backdrop-blur-2xl border-b border-blue-900/40 shadow-2xl py-6 px-6 space-y-4">
          <ul className="space-y-4 text-slate-200 font-medium text-base">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}