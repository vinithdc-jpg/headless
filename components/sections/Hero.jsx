import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Zap,
} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative bg-[#071B3A] text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-right opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')" }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <div>

                        {/* Top Label */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[2px] bg-[#D4AF37]" />
                            <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
                                Lloyd's of London Accredited Brokers
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold">
                            Trusted Risk
                            <br />
                            Management{" "}
                            <span className="italic text-[#D4AF37] font-normal">
                                Since
                            </span>
                            <br />
                            <span className="italic text-[#D4AF37]">
                                1998
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <p className="mt-8 sm:mt-10 text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl">
                            Meridian Insurance Brokers delivers institutional-grade
                            risk solutions to private clients, SMEs, and multinational
                            corporations. We protect what matters most — with
                            precision, integrity, and unwavering commitment.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-14">

                            <Link
                                href="/quote"
                                className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#071B3A] px-8 sm:px-10 py-4 sm:py-5 font-semibold uppercase tracking-wider transition hover:bg-[#c59d25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                            >
                                Request a Consultation
                                <ArrowRight size={20} aria-hidden />
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center gap-3 border border-gray-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg transition hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                            >
                                Our Services
                                <ArrowRight size={18} aria-hidden />
                            </Link>

                        </div>

                        {/* Bottom Badges */}
                        <div className="flex flex-wrap gap-10 mt-14 text-gray-300">

                            <div className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-[#D4AF37]"
                                />
                                FCA Regulated
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-[#D4AF37]"
                                />
                                BIBA Member
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-[#D4AF37]"
                                />
                                CII Accredited
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">

                        {/* Stats Card */}
                        <div className="bg-[#16284C]/90 border border-gray-700 rounded-md p-10">

                            <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm mb-10">
                                Our Track Record
                            </p>

                            <div className="grid grid-cols-2 gap-y-12">

                                <div>
                                    <h2 className="text-6xl font-serif">26+</h2>
                                    <p className="text-gray-400 mt-2">
                                        Years of Excellence
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-6xl font-serif">£2B+</h2>
                                    <p className="text-gray-400 mt-2">
                                        Risk Under Management
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-6xl font-serif">
                                        12,400+
                                    </h2>
                                    <p className="text-gray-400 mt-2">
                                        Clients Protected
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-6xl font-serif">
                                        98.7%
                                    </h2>
                                    <p className="text-gray-400 mt-2">
                                        Claims Settlement Rate
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Emergency Card */}
                        <div className="bg-[#16284C]/90 border border-gray-700 rounded-md p-8 flex items-center gap-6">

                            <div className="bg-[#D4AF37] w-14 h-14 rounded flex items-center justify-center">
                                <Zap className="text-[#071B3A]" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Emergency Claims Line
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    Available 24 hours a day, 365 days a year
                                </p>

                                <p className="text-[#D4AF37] text-2xl sm:text-3xl font-bold mt-3">
                                    <a href="tel:+442071234567" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]">
                                        +44 20 7123 4567
                                    </a>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;