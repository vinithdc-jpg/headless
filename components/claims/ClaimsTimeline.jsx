"use client";

import { claimsTimeline } from "@/data/claimsTimelineData";

export default function ClaimsTimeline() {
  return (
    <section className="bg-[#F8F8F8] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <div className="flex justify-center items-center gap-4 mb-5">

            <div className="w-10 h-px bg-[#C9A227]" />

            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
              Claims Journey
            </span>

            <div className="w-10 h-px bg-[#C9A227]" />

          </div>

          <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
            What Happens Next?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Every claim is different, but this timeline gives you a clear idea
            of what you can expect after reporting an incident.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-[#E8D8A8]" />

          <div className="grid lg:grid-cols-4 gap-10 relative">

            {claimsTimeline.map((item) => (

              <div key={item.id} className="relative">

                {/* Circle */}

                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-[#071B3A] border-4 border-[#C9A227] flex items-center justify-center">

                  <span className="text-[#C9A227] font-bold">
                    {item.id}
                  </span>

                </div>

                {/* Card */}

                <div className="bg-white border border-gray-200 mt-8 p-8 text-center hover:shadow-xl hover:border-[#C9A227] transition">

                  <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] text-sm font-semibold px-3 py-1 rounded-full">

                    {item.time}

                  </span>

                  <h3 className="mt-5 font-serif text-2xl text-[#071B3A]">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {item.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Note */}

        <div className="mt-20 bg-[#071B3A] text-white p-8 rounded-md">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h3 className="font-serif text-3xl">
                Need Immediate Assistance?
              </h3>

              <p className="mt-3 text-slate-300">
                Our emergency claims team is available 24/7 to support you.
              </p>

            </div>

            <button className="bg-[#C9A227] text-[#071B3A] px-8 py-4 font-semibold hover:bg-[#B9961E] transition">

              Contact Claims Team

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}