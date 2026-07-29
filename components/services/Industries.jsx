"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industriesData";
import RemoteImage from "@/components/ui/RemoteImage";

export default function Industries() {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <div className="flex items-center justify-center gap-4 mb-5">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Industries We Serve
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
                        Expertise Across Every Industry
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg leading-8">
                        Every sector has unique risks. Our specialists understand
                        your industry and build insurance programmes that evolve
                        with your business.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {industriesData.map((industry) => (

                        <div
                            key={industry.id}
                            className="group flex h-full flex-col overflow-hidden bg-white border border-gray-200 hover:border-[#C9A227] hover:shadow-2xl transition duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <RemoteImage
                                    src={industry.image}
                                    alt={industry.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6 sm:p-8">

                                <h3 className="font-serif text-2xl text-[#071B3A]">
                                    {industry.title}
                                </h3>

                                <p className="mt-5 text-gray-600 leading-7">
                                    {industry.description}
                                </p>

                                <Link
                                    href="/services"
                                    className="group/link mt-auto pt-8 inline-flex items-center gap-2 text-[#C9A227] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover/link:translate-x-1"
                                        aria-hidden
                                    />
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}