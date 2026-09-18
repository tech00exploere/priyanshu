import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu | Software Development Engineer",
  description:
    "Portfolio of Priyanshu — Software Development Engineer specializing in Full-Stack Web Development, AI & Data Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen bg-[#030712]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
