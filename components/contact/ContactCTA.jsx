"use client";

import {
    ArrowRight,
    PhoneCall,
    ShieldCheck,
} from "lucide-react";

const stats = [
    {
        value: "26+",
        label: "Years of Experience",
    },
    {
        value: "12,400+",
        label: "Businesses Protected",
    },
    {
        value: "80+",
        label: "Insurance Partners",
    },
];

export default function ContactCTA() {
    return (
        <section className="relative overflow-hidden bg-[#071B3A] py-24">

            {/* Decorative Background */}

            <div className="absolute inset-0">

                <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

                <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center max-w-4xl mx-auto">

                    {/* Badge */}

                    <div className="inline-flex items-center gap-3 border border-[#C9A227]/30 bg-white/5 rounded-full px-5 py-2">

                        <ShieldCheck
                            size={18}
                            className="text-[#C9A227]"
                        />

                        <span className="uppercase tracking-[3px] text-xs text-[#C9A227]">
                            Trusted Insurance Specialists
                        </span>

                    </div>

                    {/* Heading */}

                    <h2 className="mt-8 font-serif text-5xl md:text-6xl leading-tight text-white">

                        Let's Protect What
                        <br />

                        <span className="italic font-normal text-[#C9A227]">
                            Matters Most
                        </span>

                    </h2>

                    {/* Description */}

                    <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-300">

                        Whether you're seeking a quotation, reviewing your current
                        insurance programme, or planning for future growth,
                        our advisers are ready to help.

                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <button className="group bg-[#C9A227] hover:bg-[#B9961E] transition px-8 py-4 text-[#071B3A] font-semibold uppercase tracking-wider flex items-center gap-3">

                            Request a Consultation

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition"
                            />

                        </button>

                        <button className="group border border-slate-500 hover:border-[#C9A227] hover:text-[#C9A227] transition px-8 py-4 text-white flex items-center gap-3">

                            <PhoneCall size={18} />

                            Call Our Team

                        </button>

                    </div>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    {stats.map((item) => (

                        <div
                            key={item.label}
                            className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center hover:border-[#C9A227] hover:bg-white/10 transition"
                        >

                            <h3 className="font-serif text-5xl text-[#C9A227]">
                                {item.value}
                            </h3>

                            <p className="mt-4 text-slate-300">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}