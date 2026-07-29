import StatsSection from "@/components/cards/InfoCard";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import ServicesSection from "@/components/sections/ServiceSection";
import Testimonials from "@/components/sections/Testimonials";
import WhyMeridian from "@/components/sections/WhyMeridian";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-hidden bg-white">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <StatsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <WhyMeridian />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <CTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
