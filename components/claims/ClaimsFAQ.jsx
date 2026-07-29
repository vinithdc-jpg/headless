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

                <div className="space-y-4" role="list">
                    {claimsFaqData.map((item, index) => {
                        const isOpen = active === index;
                        const panelId = `claims-faq-panel-${item.id}`;
                        const buttonId = `claims-faq-button-${item.id}`;

                        return (
                            <div
                                key={item.id}
                                role="listitem"
                                className="border border-gray-200 bg-white transition hover:border-[#C9A227]"
                            >
                                <button
                                    id={buttonId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center gap-4 px-6 sm:px-8 py-5 sm:py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                                >
                                    <h3 className="text-left font-medium text-[#071B3A]">
                                        {item.question}
                                    </h3>
                                    <ChevronDown
                                        size={20}
                                        aria-hidden
                                        className={`shrink-0 transition duration-300 ${
                                            isOpen ? "rotate-180 text-[#C9A227]" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-600 leading-8">
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