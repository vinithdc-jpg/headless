import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import QuoteForm from "@/components/contact/QuoteForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import OfficeLocations from "@/components/contact/OfficeLocations";
import Navbar from "@/components/sections/Navbar";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <ContactHero />

            <ContactInfo />

            <section className="bg-[#F8F8F8] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2">
                            <QuoteForm />
                        </div>

                        <ContactSidebar />

                    </div>

                </div>
            </section>

            <OfficeLocations />

            <ContactFAQ />

            <ContactCTA />

            <Footer />

        </>
    );
}