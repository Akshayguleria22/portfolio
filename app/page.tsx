import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <>
      <ClientLayout />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />

        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2026 Akshay Guleria. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
