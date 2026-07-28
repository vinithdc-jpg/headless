"use client";

import { ArrowRight } from "lucide-react";

const stats = [
    {
        value: "98.7%",
        label: "Claims Success Rate",
    },
    {
        value: "<1 hr",
        label: "Average Response Time",
    },
    {
        value: "$850M",
        label: "Claims Settled",
    },
    {
        value: "2390",
        label: "Claims Processed Last Year",
    },
];

export default function ClaimsHero() {
    return (
        <section className="relative overflow-hidden bg-[#071B3A]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: "url('/claims/hero-bg.jpg')",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/95 to-[#071B3A]/70" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-px bg-[#C9A227]" />

                            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                                Claims Support
                            </span>
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight text-white">
                            We're With You
                            <br />

                            <span className="italic font-normal text-[#C9A227]">
                                When It Matters
                            </span>

                            <br />

                            Most
                        </h1>

                        <p className="mt-8 text-lg md:text-xl text-slate-300 leading-9 max-w-2xl">
                            Our experienced claims advocates work on your behalf from
                            first notification through final settlement. Available
                            24 hours a day, 365 days a year.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <button className="group bg-[#C9A227] hover:bg-[#B9961E] text-[#071B3A] font-semibold px-8 py-4 uppercase tracking-wider flex items-center gap-3 transition">

                                Report a Claim

                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />

                            </button>

                            <button className="border border-slate-500 hover:border-[#C9A227] hover:text-[#C9A227] text-white px-8 py-4 transition">
                                Emergency Contacts
                            </button>

                        </div>

                    </div>

                    {/* Statistics Card */}

                    <div>

                        <div className="border border-[#C9A227]/40 bg-white/5 backdrop-blur-sm p-10">

                            <div className="flex items-center gap-3 mb-8">

                                <div className="w-8 h-px bg-[#C9A227]" />

                                <span className="uppercase tracking-[3px] text-xs text-[#C9A227]">
                                    Claims Performance
                                </span>

                            </div>

                            <div className="grid grid-cols-2 gap-10">

                                {stats.map((item) => (

                                    <div key={item.label}>

                                        <h2 className="font-serif text-5xl text-white">
                                            {item.value}
                                        </h2>

                                        <p className="mt-3 text-slate-300 leading-7">
                                            {item.label}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Angled Bottom Divider */}

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