"use client";

import { useState } from "react";
import {
    Building2,
    BriefcaseBusiness,
    Anchor,
    HeartPulse,
    Shield,
    Globe,
    Check,
    ArrowRight,
} from "lucide-react";

const icons = {
    commercial: Building2,
    liability: BriefcaseBusiness,
    marine: Anchor,
    health: HeartPulse,
    cyber: Shield,
    international: Globe,
};

export default function CoverageTabs({ coverageData }) {
    const [activeTab, setActiveTab] = useState(0);

    const current = coverageData[activeTab];
    const Icon = icons[current.icon];

    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-14">

                    <div className="flex items-center justify-center gap-4 mb-5">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Explore Coverage
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
                        What We Cover
                    </h2>

                </div>

                {/* Tabs */}

                <div className="flex flex-wrap justify-center gap-3 mb-12">

                    {coverageData.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-5 py-3 border text-sm font-medium transition-all duration-300
                ${activeTab === index
                                    ? "bg-[#071B3A] text-white border-[#071B3A]"
                                    : "bg-white text-gray-600 border-gray-300 hover:border-[#C9A227] hover:text-[#C9A227]"
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}

                </div>

                {/* Content */}

                <div className="grid lg:grid-cols-2 overflow-hidden border border-gray-200 shadow-sm">

                    {/* Left */}

                    <div className="bg-white p-10 lg:p-12">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-14 h-14 border border-[#E7D8AF] flex items-center justify-center rounded">

                                <Icon
                                    className="text-[#C9A227]"
                                    size={26}
                                />

                            </div>

                            <h3 className="font-serif text-3xl text-[#071B3A]">
                                {current.title}
                            </h3>

                        </div>

                        <p className="text-gray-600 leading-8">
                            {current.description}
                        </p>

                        {/* Highlights */}

                        <div className="mt-10">

                            <h4 className="font-semibold text-[#071B3A] mb-5">
                                Coverage Highlights
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-4">

                                {current.highlights.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <Check
                                            className="text-[#C9A227] mt-1"
                                            size={16}
                                        />

                                        <p className="text-gray-600 text-sm leading-6">
                                            {item}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Tags */}

                        <div className="mt-10">

                            <h4 className="font-semibold text-[#071B3A] mb-4">
                                Suitable For
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                {current.tags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-gray-100 border border-gray-200 text-sm text-gray-700"
                                    >
                                        {tag}
                                    </span>

                                ))}

                            </div>

                        </div>

                        {/* CTA */}

                        <button className="group mt-10 bg-[#C9A227] text-[#071B3A] font-semibold px-8 py-4 flex items-center gap-3 hover:bg-[#B9961E] transition">

                            Request a Quote

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition"
                            />

                        </button>

                    </div>

                    {/* Right */}

                    <div className="relative min-h-[500px]">

                        <img
                            src={current.image}
                            alt={current.title}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/30 via-transparent to-transparent" />

                    </div>

                </div>

            </div>
        </section>
    );
}