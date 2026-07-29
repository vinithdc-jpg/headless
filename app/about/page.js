import Accreditations from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import Leadership from "@/components/about/Leadership";
import Timeline from "@/components/about/Timeline";
import Values from "@/components/about/Values";
import WorkWithBest from "@/components/about/WorkWithBest";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-hidden bg-white">
        <ScrollReveal>
          <AboutHero />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AboutStory />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Values />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Timeline />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Leadership />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Accreditations />
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <WorkWithBest />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
