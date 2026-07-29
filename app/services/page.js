import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CoverageTabs from "@/components/services/CoverageTabs";
import FAQ from "@/components/services/FAQ";
import HowWeWork from "@/components/services/HowWeWork";
import Industries from "@/components/services/Industries";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesHero from "@/components/services/ServicesHero";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import { coverageData } from "@/data/coverageData";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-hidden bg-white">
        <ScrollReveal>
          <ServicesHero />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CoverageTabs coverageData={coverageData} />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <HowWeWork />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Industries />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <WhyChooseUs />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <ServicesCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
