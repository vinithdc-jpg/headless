"use client";

import {
    Clock3,
    MapPin,
    CheckCircle2,
} from "lucide-react";

import {
    officeHours,
    advantages,
} from "@/data/officeHours";

export default function ContactSidebar() {
    return (
        <div className="space-y-6">

            {/* Google Map */}

            <div className="border border-gray-200 bg-white overflow-hidden">

                <iframe
                    title="Meridian Office Location"
                    src="https://www.google.com/maps?q=One+Canada+Square+London&output=embed"
                    className="w-full h-64 border-0"
                    loading="lazy"
                    allowFullScreen
                />

                <div className="p-6">

                    <div className="flex items-start gap-3">

                        <MapPin
                            size={18}
                            className="text-[#C9A227] mt-1"
                        />

                        <div>

                            <h3 className="font-semibold text-[#071B3A]">
                                One Canada Square
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                Canary Wharf
                                <br />
                                London E14 5AB
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Office Hours */}

            <div className="border border-gray-200 bg-white p-6">

                <div className="flex items-center gap-3 mb-6">

                    <Clock3
                        size={20}
                        className="text-[#C9A227]"
                    />

                    <h3 className="font-serif text-2xl text-[#071B3A]">
                        Office Hours
                    </h3>

                </div>

                <div className="space-y-4">

                    {officeHours.map((item) => (

                        <div
                            key={item.day}
                            className="flex justify-between border-b border-gray-100 pb-3 text-sm"
                        >

                            <span className="text-gray-600">
                                {item.day}
                            </span>

                            <span className="font-medium text-[#071B3A]">
                                {item.time}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

            {/* Premium Box */}

            <div className="bg-[#071B3A] p-8 text-white">

                <h3 className="font-serif text-3xl">
                    Our Response Promise
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                    Every enquiry receives personal attention from one of our
                    insurance specialists. We aim to respond within two business
                    hours.
                </p>

                <div className="mt-8 space-y-4">

                    {advantages.map((item) => (

                        <div
                            key={item}
                            className="flex gap-3"
                        >

                            <CheckCircle2
                                size={18}
                                className="text-[#C9A227] mt-1"
                            />

                            <span className="text-slate-300">
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}