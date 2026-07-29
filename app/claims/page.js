import ClaimsCTA from "@/components/claims/ClaimsCTA";
import ClaimsFAQ from "@/components/claims/ClaimsFAQ";
import ClaimsHero from "@/components/claims/ClaimsHero";
import ClaimsProcess from "@/components/claims/ClaimsProcess";
import ClaimsTestimonials from "@/components/claims/ClaimsTestimonials";
import ClaimsTimeline from "@/components/claims/ClaimsTimeline";
import EmergencyContact from "@/components/claims/EmergencyContact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClaimsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-hidden bg-white">
        <ScrollReveal>
          <ClaimsHero />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ClaimsProcess />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <EmergencyContact />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <ClaimsFAQ />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <ClaimsTimeline />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <ClaimsTestimonials />
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <ClaimsCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
