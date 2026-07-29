"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { PHONE_HREF } from "@/lib/siteLinks";

const stats = [
    {
        value: "24/7",
        label: "Emergency Claims Support",
    },
    {
        value: "< 1 Hour",
        label: "Average Response Time",
    },
    {
        value: "98.7%",
        label: "Claims Success Rate",
    },
];

export default function ClaimsCTA() {
    return (
        <section className="relative overflow-hidden bg-[#071B3A] py-24">

            {/* Background Glow */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

                <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}

                    <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#C9A227]/30 bg-white/5 rounded-full">

                        <ShieldCheck
                            size={18}
                            className="text-[#C9A227]"
                        />

                        <span className="uppercase tracking-[3px] text-xs text-[#C9A227]">
                            Claims Support Available 24/7
                        </span>

                    </div>

                    {/* Heading */}

                    <h2 className="mt-8 font-serif text-5xl md:text-6xl font-semibold leading-tight text-white">

                        Need Help With a
                        <br />

                        <span className="italic font-normal text-[#C9A227]">
                            Claim Today?
                        </span>

                    </h2>

                    {/* Description */}

                    <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                        Whether you've experienced property damage, cyber attacks,
                        liability claims, or business interruption, our dedicated
                        claims specialists are ready to guide you every step of the
                        way.

                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 bg-[#C9A227] px-6 sm:px-8 py-4 font-semibold uppercase tracking-wider text-[#071B3A] transition hover:bg-[#B9961E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Report a Claim
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition"
                                aria-hidden
                            />
                        </Link>

                        <a
                            href={PHONE_HREF}
                            className="group inline-flex items-center gap-3 border border-slate-500 px-6 sm:px-8 py-4 text-white transition hover:border-[#C9A227] hover:text-[#C9A227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                        >
                            <PhoneCall size={18} aria-hidden />
                            Call Claims Team
                        </a>

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