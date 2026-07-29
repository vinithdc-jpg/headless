"use client";

import { ArrowRight } from "lucide-react";
import { processData } from "@/data/processData";

export default function HowWeWork() {
    return (
        <section className="bg-[#F8F8F8] py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT IMAGE */}

                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                            alt="How We Work"
                            className="rounded w-full h-[650px] object-cover"
                        />

                        {/* Floating Card */}

                        <div className="absolute -bottom-8 -right-8 bg-[#071B3A] text-white p-8 w-56 shadow-2xl">

                            <h2 className="font-serif text-5xl text-[#C9A227]">
                                26+
                            </h2>

                            <p className="mt-3 text-slate-300 leading-7">
                                Years of trusted insurance advisory excellence.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}

                    <div>

                        {/* Label */}

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-10 h-[1px] bg-[#C9A227]" />

                            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                                How We Work
                            </span>

                        </div>

                        {/* Heading */}

                        <h2 className="font-serif text-5xl text-[#071B3A] font-semibold leading-tight">

                            Insurance Advice
                            <br />

                            Built Around You

                        </h2>

                        {/* Paragraph */}

                        <p className="mt-8 text-gray-600 leading-8">

                            Every client receives a tailored insurance strategy. From
                            understanding your business to negotiating with global
                            insurers and managing claims, we remain your trusted
                            adviser at every stage.

                        </p>

                        {/* Steps */}

                        <div className="mt-12 space-y-6">

                            {processData.map((step) => (

                                <div
                                    key={step.id}
                                    className="group bg-white border border-gray-200 p-6 hover:border-[#C9A227] hover:shadow-lg transition-all duration-300"
                                >

                                    <div className="flex gap-5">

                                        <div className="text-[#C9A227] font-serif text-3xl min-w-[60px]">
                                            {step.number}
                                        </div>

                                        <div>

                                            <h3 className="text-xl font-semibold text-[#071B3A]">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 text-gray-600 leading-7">
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Button */}

                        <button className="group mt-10 bg-[#071B3A] text-white px-8 py-4 flex items-center gap-3 hover:bg-[#0B2A57] transition">

                            Speak with an Adviser

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition"
                            />

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}