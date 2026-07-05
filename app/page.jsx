import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7eedc]">
      <div className="pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
      </div>
    </main>
  );
}