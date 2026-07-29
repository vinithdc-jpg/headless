import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="bg-[#071B3A] py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight">
                    Ready to Protect What{" "}
                    <span className="italic text-[#C9A227] font-normal">
                        Matters Most?
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-8">
                    Speak to one of our specialist advisers today for a no-obligation
                    review of your insurance arrangements.
                </p>

                {/* Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">

                    <Link
                        href="/quote"
                        className="group bg-[#C9A227] hover:bg-[#B9961E] text-[#071B3A] font-semibold uppercase tracking-wider px-10 py-4 rounded-sm shadow-lg shadow-[#C9A227]/30 transition duration-300 flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Get a Free Quote
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>

                    <Link
                        href="/claims"
                        className="group border border-slate-600 hover:border-[#C9A227] text-white hover:text-[#C9A227] px-10 py-4 rounded-sm transition duration-300 flex items-center gap-3"
                    >
                        Report a Claim
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>

                </div>

            </div>
        </section>
    );
}