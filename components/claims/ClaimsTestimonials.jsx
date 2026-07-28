"use client";

import { Quote, Star } from "lucide-react";
import { claimsTestimonials } from "@/data/claimsTestimonialsData";

export default function ClaimsTestimonials() {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-px bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Client Stories
                        </span>

                        <div className="w-10 h-px bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
                        Trusted When It Matters Most
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                        Our clients rely on us to guide them through difficult situations
                        with professionalism, speed, and genuine support.
                    </p>

                </div>

                {/* Testimonials */}

                <div className="grid lg:grid-cols-3 gap-8">

                    {claimsTestimonials.map((client) => (

                        <div
                            key={client.id}
                            className="border border-gray-200 bg-white p-8 hover:border-[#C9A227] hover:shadow-xl transition duration-300"
                        >

                            <Quote
                                size={32}
                                className="text-[#C9A227] mb-6"
                            />

                            <p className="text-gray-600 leading-8 italic">
                                "{client.review}"
                            </p>

                            <div className="flex mt-8 mb-6">

                                {Array.from({ length: client.rating }).map((_, index) => (

                                    <Star
                                        key={index}
                                        size={18}
                                        className="text-[#C9A227] fill-[#C9A227]"
                                    />

                                ))}

                            </div>

                            <div className="flex items-center gap-4">

                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>

                                    <h3 className="font-semibold text-[#071B3A]">
                                        {client.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {client.company}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Stats */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="text-center">

                        <h3 className="font-serif text-5xl text-[#C9A227]">
                            98.7%
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Claims Satisfaction
                        </p>

                    </div>

                    <div className="text-center">

                        <h3 className="font-serif text-5xl text-[#C9A227]">
                            2,390
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Claims Processed Annually
                        </p>

                    </div>

                    <div className="text-center">

                        <h3 className="font-serif text-5xl text-[#C9A227]">
                            &lt;1 Hour
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Average Response Time
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}