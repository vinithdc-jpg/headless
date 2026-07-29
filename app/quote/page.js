import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteForm from "@/components/contact/QuoteForm";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import RemoteImage from "@/components/ui/RemoteImage";

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-hidden bg-white">
        <ScrollReveal>
          <section className="relative overflow-hidden bg-[#071B3A]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
              }}
              aria-hidden
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 to-[#071B3A]/70" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
                <div className="max-w-2xl text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-px bg-[#C9A227]" aria-hidden />
                    <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                      Request a Quote
                    </span>
                  </div>

                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                    Secure the right cover for your business with a tailored quote.
                  </h1>

                  <p className="mt-6 sm:mt-8 text-lg md:text-xl leading-9 text-slate-200">
                    Share your requirements and our expert team will recommend the most
                    reliable insurance solution for your needs.
                  </p>

                  <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/about#our-story"
                      className="group inline-flex items-center gap-3 rounded bg-[#C9A227] px-6 sm:px-8 py-4 text-[#071B3A] font-semibold uppercase tracking-wider transition hover:bg-[#B8931E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Our Story
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-3 rounded border border-white/30 bg-white/10 px-6 sm:px-8 py-4 text-white transition hover:border-[#C9A227] hover:text-[#C9A227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                    >
                      Explore Services
                      <ArrowRight size={18} aria-hidden />
                    </Link>
                  </div>
                </div>

                <div className="relative aspect-[4/3] min-h-[240px] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                  <RemoteImage
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                    alt="Team discussing insurance options"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <QuoteForm />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
