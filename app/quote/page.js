import QuoteForm from "@/components/contact/QuoteForm";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <QuoteForm />
      <Footer />
    </main>
  );
};

export default page;
