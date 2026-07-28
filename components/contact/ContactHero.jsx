"use client";

import { ArrowRight } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-[#071B3A]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: "url('/contact/hero-bg.jpg')",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/95 to-[#071B3A]/70" />

            {/* Decorative Gold Glow */}
            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">

                <div className="max-w-3xl">

                    {/* Label */}

                    <div className="flex items-center gap-4 mb-6">

                        <div className="w-10 h-px bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Contact Us
                        </span>

                    </div>

                    {/* Heading */}

                    <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight text-white">

                        Begin Your

                        <br />

                        <span className="italic font-normal text-[#C9A227]">
                            Risk Conversation
                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mt-8 text-lg md:text-xl leading-9 text-slate-300 max-w-2xl">

                        Whether you're looking for expert insurance advice,
                        requesting a quotation, or reporting a claim, our
                        specialists are ready to help you find the right solution.

                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-wrap gap-5">

                        <button className="group bg-[#C9A227] hover:bg-[#B9961E] transition text-[#071B3A] font-semibold px-8 py-4 uppercase tracking-wider flex items-center gap-3">

                            Request a Quote

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </button>

                        <button className="border border-slate-500 hover:border-[#C9A227] hover:text-[#C9A227] transition text-white px-8 py-4">

                            Speak to an Adviser

                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom Divider */}

            <div className="relative h-24 overflow-hidden">

                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 L1440,70 L1440,120 L0,120 Z"
                        fill="#ffffff"
                    />
                </svg>

            </div>

        </section>
    );
}