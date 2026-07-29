"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processData } from "@/data/processData";
import RemoteImage from "@/components/ui/RemoteImage";

export default function HowWeWork() {
    return (
        <section className="bg-[#F8F8F8] py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT IMAGE */}

                    <div className="relative mb-12 sm:mb-0">
                        <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[420px] lg:min-h-[650px] overflow-hidden rounded">
                            <RemoteImage
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                                alt="Meridian advisers consulting with a client"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="relative sm:absolute sm:-bottom-8 sm:-right-8 mt-6 sm:mt-0 bg-[#071B3A] text-white p-6 sm:p-8 w-full sm:w-56 shadow-2xl">

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

                        <Link
                            href="/contact"
                            className="group mt-10 inline-flex items-center gap-3 bg-[#071B3A] px-8 py-4 text-white transition hover:bg-[#0B2A57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                        >
                            Speak with an Adviser
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition"
                                aria-hidden
                            />
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}