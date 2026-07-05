"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f7eedc]/80 backdrop-blur-md shadow-sm border-b border-orange-900/10 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-deepbrown">Priyanshu.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#4a3f35] font-semibold tracking-wide">
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/my-roadmap">My Roadmap</Link></li>
          <li><Link href="/my-resume">My Resume</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-[#f7eedc]/95 backdrop-blur-md border-b border-orange-900/10 shadow-lg py-6 px-6 space-y-4 text-[#4a3f35] font-semibold tracking-wide">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link href="/my-roadmap" onClick={() => setOpen(false)}>My Roadmap</Link>
          </li>
          <li>
            <Link href="/my-resume" onClick={() => setOpen(false)}>My Resume</Link>
          </li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}