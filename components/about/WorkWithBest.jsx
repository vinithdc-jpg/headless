"use client";

import { ArrowRight } from "lucide-react";

export default function WorkWithBest() {
    return (
        <section className="bg-[#F8F8F6] py-28">

            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Heading */}

                <h2 className="font-serif text-5xl md:text-6xl font-semibold text-[#071B3A] leading-tight">

                    Work With the Best

                </h2>

                {/* Description */}

                <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-500 leading-8">

                    Join over 12,400 clients who trust Meridian to manage
                    their most important risk decisions.

                </p>

                {/* Button */}

                <button className="group mt-12 inline-flex items-center gap-3 bg-[#071B3A] hover:bg-[#0A2958] text-white px-12 py-5 font-semibold text-lg transition-all duration-300">

                    Start a Conversation

                    <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                </button>

            </div>

        </section>
    );
}