"use client";

import { Send } from "lucide-react";
import {
    insuranceTypes,
    budgets,
} from "@/data/formOptions";

export default function QuoteForm() {
    return (
        <section className="bg-[#F8F8F8] py-20">

            <div className="max-w-4xl mx-auto px-6">

                <div className="bg-white border border-gray-200 shadow-sm">

                    <div className="p-10">

                        {/* Heading */}

                        <div className="flex items-center gap-4 mb-6">

                            <div className="w-10 h-px bg-[#C9A227]" />

                            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                                Enquiry Form
                            </span>

                        </div>

                        <h2 className="font-serif text-4xl text-[#071B3A]">
                            Get a Quote
                        </h2>

                        <p className="mt-4 text-gray-600 leading-8">
                            Complete the form below and one of our advisers
                            will contact you within two business hours.
                        </p>

                        {/* Form */}

                        <form className="mt-10 space-y-6">

                            {/* Row */}

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>

                                    <label className="block text-sm mb-2 text-[#071B3A]">
                                        First Name *
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
                                    />

                                </div>

                                <div>

                                    <label className="block text-sm mb-2 text-[#071B3A]">
                                        Last Name *
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Smith"
                                        className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
                                    />

                                </div>

                            </div>

                            {/* Company */}

                            <div>

                                <label className="block text-sm mb-2 text-[#071B3A]">
                                    Company / Organisation
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your Company"
                                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
                                />

                            </div>

                            {/* Email & Phone */}

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>

                                    <label className="block text-sm mb-2">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
                                    />

                                </div>

                                <div>

                                    <label className="block text-sm mb-2">
                                        Phone Number *
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="+44 20 7123 4567"
                                        className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
                                    />

                                </div>

                            </div>

                            {/* Insurance Type */}

                            <div>

                                <label className="block text-sm mb-2">
                                    Insurance Type
                                </label>

                                <select className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]">

                                    <option>Select Insurance Type</option>

                                    {insuranceTypes.map((item) => (

                                        <option key={item}>
                                            {item}
                                        </option>

                                    ))}

                                </select>

                            </div>

                            {/* Budget */}

                            <div>

                                <label className="block text-sm mb-2">
                                    Annual Premium Budget
                                </label>

                                <select className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]">

                                    <option>Select Budget</option>

                                    {budgets.map((item) => (

                                        <option key={item}>
                                            {item}
                                        </option>

                                    ))}

                                </select>

                            </div>

                            {/* Message */}

                            <div>

                                <label className="block text-sm mb-2">
                                    Your Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your insurance requirements..."
                                    className="w-full border border-gray-300 px-4 py-3 outline-none resize-none focus:border-[#C9A227]"
                                />

                            </div>

                            {/* Checkbox */}

                            <div className="flex items-start gap-3">

                                <input
                                    type="checkbox"
                                    className="mt-1 accent-[#C9A227]"
                                />

                                <p className="text-sm text-gray-500 leading-6">

                                    I consent to Meridian Insurance Brokers storing
                                    my information so they can respond to my enquiry.

                                </p>

                            </div>

                            {/* Button */}

                            <button
                                type="submit"
                                className="group w-full bg-[#071B3A] hover:bg-[#0B2A57] text-white py-4 font-semibold flex justify-center items-center gap-3 transition"
                            >

                                <Send
                                    size={18}
                                    className="group-hover:-translate-y-1 transition"
                                />

                                Submit Enquiry

                            </button>

                            <p className="text-center text-sm text-gray-500">

                                All enquiries are handled securely and confidentially.

                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}