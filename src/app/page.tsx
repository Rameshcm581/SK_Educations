import PageIntroLoader from "@/components/PageIntroLoader";
import FloatingMenu from "@/components/FloatingMenu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-[#f0ece4] selection:bg-[#d4af37]/30 selection:text-white relative">
      <PageIntroLoader />
      <FloatingMenu />
      <Hero />
      <About />
      <Services />
      <Courses />
      <FAQ />
      <Contact />
    </main>
  );
}
