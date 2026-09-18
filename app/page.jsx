import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { projectsData } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-16">
          <Projects projects={projectsData} />
        </section>
      </div>
    </main>
  );
}