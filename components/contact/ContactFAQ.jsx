"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { contactFaqData } from "@/data/contactFaqData";

export default function ContactFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F8F8F8] py-24">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="flex justify-center items-center gap-4 mb-5">

            <div className="w-10 h-px bg-[#C9A227]" />

            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
              Frequently Asked Questions
            </span>

            <div className="w-10 h-px bg-[#C9A227]" />

          </div>

          <h2 className="font-serif text-5xl text-[#071B3A]">
            How Can We Help?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to some of the most common questions about
            contacting Meridian Insurance Brokers.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-5" role="list">
          {contactFaqData.map((faq, index) => {
            const isOpen = active === index;
            const panelId = `contact-faq-panel-${faq.id}`;
            const buttonId = `contact-faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                role="listitem"
                className="bg-white border border-gray-200 hover:border-[#C9A227] transition"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center gap-4 px-6 sm:px-8 py-5 sm:py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                >
                  <h3 className="font-medium text-[#071B3A] text-base sm:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={22}
                    aria-hidden
                    className={`shrink-0 transition duration-300 ${
                      isOpen ? "rotate-180 text-[#C9A227]" : "text-gray-400"
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