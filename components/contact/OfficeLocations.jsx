"use client";

import {
    MapPin,
    Phone,
    Mail,
    ArrowRight,
} from "lucide-react";

import { officeLocations } from "@/data/officeLocations";

export default function OfficeLocations() {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-px bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Our Offices
                        </span>

                        <div className="w-10 h-px bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A]">
                        Visit One of Our Offices
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">
                        Meet our insurance advisers in person or contact the office
                        closest to your business.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid lg:grid-cols-3 gap-8">

                    {officeLocations.map((office) => (

                        <div
                            key={office.id}
                            className="group overflow-hidden border border-gray-200 hover:border-[#C9A227] hover:shadow-2xl transition duration-300 bg-white"
                        >

                            {/* Image */}

                            <div className="overflow-hidden h-60">

                                <img
                                    src={office.image}
                                    alt={office.city}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}

                            <div className="p-8">

                                <span className="uppercase tracking-[3px] text-xs text-[#C9A227]">

                                    {office.title}

                                </span>

                                <h3 className="font-serif text-3xl text-[#071B3A] mt-3">

                                    {office.city}

                                </h3>

                                {/* Address */}

                                <div className="flex gap-3 mt-6">

                                    <MapPin
                                        size={18}
                                        className="text-[#C9A227] mt-1"
                                    />

                                    <div className="text-gray-600 leading-7">

                                        {office.address.map((line) => (

                                            <p key={line}>
                                                {line}
                                            </p>

                                        ))}

                                    </div>

                                </div>

                                {/* Phone */}

                                <div className="flex gap-3 mt-6">

                                    <Phone
                                        size={18}
                                        className="text-[#C9A227]"
                                    />

                                    <span className="text-gray-700">
                                        {office.phone}
                                    </span>

                                </div>

                                {/* Email */}

                                <div className="flex gap-3 mt-4">

                                    <Mail
                                        size={18}
                                        className="text-[#C9A227]"
                                    />

                                    <span className="text-gray-700 break-all">
                                        {office.email}
                                    </span>

                                </div>

                                {/* Button */}

                                <button className="group mt-8 flex items-center gap-2 text-[#C9A227] font-medium">

                                    Get Directions

                                    <ArrowRight
                                        size={17}
                                        className="group-hover:translate-x-1 transition"
                                    />

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}