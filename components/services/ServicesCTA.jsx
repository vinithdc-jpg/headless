"use client";

import { ArrowRight, PhoneCall } from "lucide-react";

export default function ServicesCTA() {
    return (
        <section className="relative overflow-hidden bg-[#071B3A]">

            {/* Decorative Background */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                <div className="text-center max-w-4xl mx-auto">

                    {/* Label */}

                    <div className="flex justify-center items-center gap-4 mb-6">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Ready To Get Started
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                    </div>

                    {/* Heading */}

                    <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight">

                        Let's Protect Your
                        <br />

                        <span className="italic font-normal text-[#C9A227]">
                            Business Together
                        </span>

                    </h2>

                    {/* Description */}

                    <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                        Speak with one of our insurance specialists today.
                        We'll assess your risks, explain your options,
                        and build a tailored insurance programme that
                        grows with your business.

                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <button className="group bg-[#C9A227] hover:bg-[#B9961E] text-[#071B3A] font-semibold px-8 py-4 uppercase tracking-wider flex items-center gap-3 transition">

                            Request a Consultation

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </button>

                        <button className="group border border-slate-500 hover:border-[#C9A227] text-white hover:text-[#C9A227] px-8 py-4 flex items-center gap-3 transition">

                            <PhoneCall size={18} />

                            +44 20 7123 4567

                        </button>

                    </div>

                </div>

                {/* Bottom Stats */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="text-center">

                        <h3 className="font-serif text-4xl text-[#C9A227]">
                            12,400+
                        </h3>

                        <p className="mt-3 text-slate-300">
                            Businesses Protected
                        </p>

                    </div>

                    <div className="text-center">

                        <h3 className="font-serif text-4xl text-[#C9A227]">
                            80+
                        </h3>

                        <p className="mt-3 text-slate-300">
                            Global Insurance Partners
                        </p>

                    </div>

                    <div className="text-center">

                        <h3 className="font-serif text-4xl text-[#C9A227]">
                            98.7%
                        </h3>

                        <p className="mt-3 text-slate-300">
                            Claims Success Rate
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}