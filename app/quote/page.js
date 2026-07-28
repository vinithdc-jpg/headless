import QuoteForm from "@/components/contact/QuoteForm";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <ScrollReveal>
        <QuoteForm />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default page;
