import { About } from "@/components/About";
import { Curriculum } from "@/components/Curriculum";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Greeting } from "@/components/Greeting";
import { SectionNav } from "@/components/SectionNav";
import { Hero } from "@/components/Hero";
import { Host } from "@/components/Host";
import { Makers } from "@/components/Makers";
import { Overview } from "@/components/Overview";
import { Process } from "@/components/Process";
import { Target } from "@/components/Target";
import { Values } from "@/components/Values";

export default function Page() {
  return (
    <main>
      <Hero />
      <SectionNav />
      <Greeting />
      <Makers />
      <About />
      <Target />
      <Overview />
      <Values />
      <Process />
      <Host />
      <Curriculum />
      <Faq />
      <Footer />
    </main>
  );
}
