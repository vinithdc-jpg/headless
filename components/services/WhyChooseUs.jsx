"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whyChooseData, statistics } from "@/data/whyChooseData";

export default function WhyChooseUs() {
    return (
        <section className="bg-[#071B3A] py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left */}

                    <div>

                        <div className="flex items-center gap-4 mb-6">

                            <div className="w-10 h-[1px] bg-[#C9A227]" />

                            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                                Why Meridian
                            </span>

                        </div>

                        <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight">

                            Insurance Expertise
                            <br />

                            You Can Depend On

                        </h2>

                        <p className="mt-8 text-slate-300 leading-8 text-lg">

                            We combine decades of experience with global insurer
                            relationships to deliver tailored protection for
                            businesses of every size.

                        </p>

                        <div className="mt-12 space-y-8">

                            {whyChooseData.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex gap-5"
                                >

                                    <CheckCircle2
                                        className="text-[#C9A227] mt-1 flex-shrink-0"
                                        size={22}
                                    />

                                    <div>

                                        <h3 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-slate-300 leading-7">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <button className="group mt-12 bg-[#C9A227] hover:bg-[#B9961E] transition px-8 py-4 text-[#071B3A] font-semibold flex items-center gap-3">

                            Speak With an Expert

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </button>

                    </div>

                    {/* Right */}

                    <div className="grid grid-cols-2 gap-6">

                        {statistics.map((item) => (

                            <div
                                key={item.label}
                                className="border border-white/10 bg-white/5 backdrop-blur-sm p-10 hover:border-[#C9A227] hover:bg-white/10 transition duration-300"
                            >

                                <h2 className="font-serif text-5xl text-[#C9A227]">
                                    {item.value}
                                </h2>

                                <p className="mt-4 text-slate-300 leading-7">
                                    {item.label}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}