"use client";

import { contactInfo } from "@/data/contactInfo";

export default function ContactInfo() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {contactInfo.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className={`
                  border
                  p-8
                  transition-all
                  duration-300
                  hover:shadow-xl
                  ${item.featured
                                        ? "border-[#C9A227] bg-[#FFFDF8]"
                                        : "border-gray-200 hover:border-[#C9A227]"
                                    }
                `}
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded border border-[#E7D8AF] flex items-center justify-center">

                                    <Icon
                                        size={20}
                                        className="text-[#C9A227]"
                                    />

                                </div>

                                {/* Title */}

                                <p className="uppercase tracking-[3px] text-xs text-gray-400 mt-6">

                                    {item.title}

                                </p>

                                {/* Main Text */}

                                <h3 className="mt-3 font-semibold text-lg text-[#071B3A] break-words">

                                    {item.heading}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-gray-500 leading-7">

                                    {item.description}

                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}