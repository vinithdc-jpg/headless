"use client";

import {
    Phone,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

import {
    emergencyContacts,
    immediateSteps,
} from "@/data/emergencyContacts";

export default function EmergencyContact() {
    return (
        <section id="emergency-contact" className="bg-[#F8F8F8] py-16 sm:py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT */}

                    <div>

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-10 h-px bg-[#C9A227]" />

                            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                                Emergency Contact
                            </span>

                        </div>

                        <h2 className="font-serif text-5xl text-[#071B3A] leading-tight">
                            Specialist Claims
                            <br />
                            Support Lines
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">
                            Our specialist teams are available around the clock to
                            guide you through every stage of the claims process.
                        </p>

                        <div className="mt-10 space-y-4">

                            {emergencyContacts.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex justify-between items-center bg-white border border-gray-200 p-5 hover:border-[#C9A227] transition"
                                >

                                    <div>

                                        <h3 className="font-semibold text-[#071B3A]">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.description}
                                        </p>

                                    </div>

                                    <button className="flex items-center gap-2 bg-[#C9A227] text-[#071B3A] px-4 py-2 text-sm font-medium hover:bg-[#B9961E] transition">

                                        <Phone size={15} />

                                        {item.phone}

                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="bg-[#071B3A] p-10 text-white">

                        <div className="flex items-center gap-3 mb-8">

                            <AlertTriangle
                                className="text-[#C9A227]"
                                size={24}
                            />

                            <h3 className="font-serif text-3xl">
                                Immediate Steps After an Incident
                            </h3>

                        </div>

                        <div className="space-y-5">

                            {immediateSteps.map((step, index) => (

                                <div
                                    key={index}
                                    className="flex gap-4"
                                >

                                    <CheckCircle2
                                        size={18}
                                        className="text-[#C9A227] mt-1 flex-shrink-0"
                                    />

                                    <p className="text-slate-300 leading-7">
                                        {step}
                                    </p>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 border border-[#C9A227]/30 bg-[#0D2955] p-6">

                            <p className="text-[#C9A227] font-semibold">
                                Remember
                            </p>

                            <p className="mt-3 text-slate-300 leading-7">
                                The sooner you report an incident, the faster our
                                specialists can begin protecting your interests and
                                coordinating with insurers.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}