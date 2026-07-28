"use client";

import { claimsProcess } from "@/data/claimsProcessData";

export default function ClaimsProcess() {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-20">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-px bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            The Process
                        </span>

                        <div className="w-10 h-px bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
                        Our Claims Process
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">
                        From first notification to final settlement, we guide you
                        through every step with transparency, speed, and expert
                        support.
                    </p>

                </div>

                {/* Process */}

                <div className="relative">

                    {/* Connecting Line */}

                    <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[#E6D6A8]" />

                    <div className="grid lg:grid-cols-4 gap-8">

                        {claimsProcess.map((step) => (

                            <div
                                key={step.id}
                                className="relative"
                            >

                                {/* Circle */}

                                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#C9A227] bg-white flex items-center justify-center mx-auto">

                                    <span className="font-semibold text-[#C9A227]">
                                        {step.number}
                                    </span>

                                </div>

                                {/* Card */}

                                <div className="mt-8 text-center">

                                    <h3 className="font-serif text-2xl text-[#071B3A]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-5 text-gray-600 leading-7">
                                        {step.description}
                                    </p>

                                </div>

                                {/* Bottom Box */}

                                <div className="mt-8 border border-gray-200 bg-[#FAFAFA] p-5">

                                    <h4 className="text-sm font-semibold text-[#071B3A] mb-3">
                                        Helpful Tip
                                    </h4>

                                    <p className="text-sm leading-6 text-gray-600">
                                        {step.note}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}