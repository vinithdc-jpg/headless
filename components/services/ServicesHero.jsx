"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
    return (
        <section className="relative overflow-hidden bg-[#071B3A]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: "url('/services/hero-bg.jpg')",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/95 to-[#071B3A]/70" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">

                <div className="max-w-4xl">

                    {/* Label */}
                    <div className="flex items-center gap-4 mb-8">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Our Services
                        </span>

                    </div>

                    {/* Heading */}
                    <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight text-white">
                        Tailored Cover for Every
                        <br />

                        <span className="italic font-normal text-[#C9A227]">
                            Risk Profile
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-3xl text-lg md:text-xl leading-9 text-slate-300">
                        From ambitious SMEs to complex multinational corporations,
                        Meridian designs insurance solutions that protect your
                        assets, people, and reputation with confidence.
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-wrap gap-5">

                        <Link
                            href="/services"
                            className="group flex items-center gap-3 bg-[#C9A227] px-8 py-4 text-[#071B3A] font-semibold uppercase tracking-wider hover:bg-[#B9961E] transition"
                        >
                            Explore Services
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="/contact"
                            className="border border-slate-500 px-8 py-4 text-white hover:border-[#C9A227] hover:text-[#C9A227] transition"
                        >
                            Speak to an Adviser
                        </Link>

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