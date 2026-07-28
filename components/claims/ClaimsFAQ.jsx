"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { claimsFaqData } from "@/data/claimsFaqData";

export default function ClaimsFAQ() {
    const [active, setActive] = useState(0);

    const toggle = (index) => {
        setActive(active === index ? -1 : index);
    };

    return (
        <section className="bg-white py-24">

            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-px bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            FAQ
                        </span>

                        <div className="w-10 h-px bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A]">
                        Claims Questions
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">
                        Answers to the questions our clients ask most frequently
                        during the claims process.
                    </p>

                </div>

                {/* Accordion */}

                <div className="space-y-4">

                    {claimsFaqData.map((item, index) => {

                        const isOpen = active === index;

                        return (

                            <div
                                key={item.id}
                                className="border border-gray-200 bg-white transition hover:border-[#C9A227]"
                            >

                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center px-8 py-6"
                                >

                                    <h3 className="text-left font-medium text-[#071B3A]">
                                        {item.question}
                                    </h3>

                                    <ChevronDown
                                        size={20}
                                        className={`transition duration-300 ${isOpen ? "rotate-180 text-[#C9A227]" : ""
                                            }`}
                                    />

                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }`}
                                >

                                    <div className="overflow-hidden">

                                        <div className="px-8 pb-8 text-gray-600 leading-8">

                                            {item.answer}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}