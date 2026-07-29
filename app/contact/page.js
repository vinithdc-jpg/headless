import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import QuoteForm from "@/components/contact/QuoteForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import OfficeLocations from "@/components/contact/OfficeLocations";
import Navbar from "@/components/sections/Navbar";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="flex-1 overflow-x-hidden bg-white">
            <ScrollReveal>
                <ContactHero />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <ContactInfo />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
                <section className="bg-[#F8F8F8] py-20">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid lg:grid-cols-3 gap-10">

                            <div className="lg:col-span-2">
                                <QuoteForm embedded />
                            </div>

                            <ContactSidebar />

                        </div>

                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <OfficeLocations />
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
                <ContactFAQ />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <ContactCTA />
            </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}