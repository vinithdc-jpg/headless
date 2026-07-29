"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClaimsHero() {
  return (
    <section className="relative overflow-hidden bg-[#071B3A]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80')",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/95 to-[#071B3A]/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#C9A227]" aria-hidden />
              <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                Claims Support
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight text-white">
              We&apos;re With You
              <br />
              <span className="italic font-normal text-[#C9A227]">When It Matters</span>
              <br />
              Most
            </h1>

            <p className="mt-6 sm:mt-8 text-lg md:text-xl text-slate-300 leading-9 max-w-2xl">
              Our experienced claims advocates work on your behalf from first notification
              through final settlement. Available 24 hours a day, 365 days a year.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#C9A227] px-6 sm:px-8 py-4 font-semibold uppercase tracking-wider text-[#071B3A] transition hover:bg-[#B9961E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Report a Claim
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>

              <a
                href="#emergency-contact"
                className="inline-flex items-center border border-slate-500 px-6 sm:px-8 py-4 text-white transition hover:border-[#C9A227] hover:text-[#C9A227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
              >
                Emergency Contacts
              </a>
            </div>
          </div>

          <div>
            <div className="border border-[#C9A227]/40 bg-white/5 backdrop-blur-sm p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C9A227]" aria-hidden />
                <span className="uppercase tracking-[3px] text-xs text-[#C9A227]">
                  Claims Performance
                </span>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:gap-10">
                {[
                  { value: "98.7%", label: "Claims Success Rate" },
                  { value: "<1 hr", label: "Average Response Time" },
                  { value: "£850M", label: "Claims Settled" },
                  { value: "2,390", label: "Claims Processed Last Year" },
                ].map((item) => (
                  <div key={item.label}>
                    <h2 className="font-serif text-3xl sm:text-5xl text-white">{item.value}</h2>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300 leading-7">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-16 sm:h-24 overflow-hidden" aria-hidden>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,70 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
