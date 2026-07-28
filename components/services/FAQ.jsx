"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/faqData";

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-[#F8F8F8] py-24">

            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Frequently Asked Questions
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
                        Everything You Need to Know
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8 text-lg">
                        Find answers to the questions we hear most often from
                        businesses and private clients.
                    </p>

                </div>

                {/* Accordion */}

                <div className="space-y-5">

                    {faqData.map((faq, index) => {

                        const isOpen = open === index;

                        return (

                            <div
                                key={faq.id}
                                className="bg-white border border-gray-200 rounded-sm overflow-hidden transition hover:border-[#C9A227]"
                            >

                                {/* Question */}

                                <button
                                    onClick={() => setOpen(isOpen ? -1 : index)}
                                    className="w-full flex justify-between items-center px-8 py-6 text-left"
                                >

                                    <h3 className="text-lg font-semibold text-[#071B3A]">
                                        {faq.question}
                                    </h3>

                                    <div className="text-[#C9A227]">

                                        {isOpen ? (
                                            <Minus size={22} />
                                        ) : (
                                            <Plus size={22} />
                                        )}

                                    </div>

                                </button>

                                {/* Answer */}

                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">

                                        <div className="px-8 pb-6 text-gray-600 leading-8">
                                            {faq.answer}
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