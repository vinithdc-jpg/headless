import {
    ArrowRight,
    CheckCircle2,
    Zap,
} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative bg-[#071B3A] text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-right opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-20">

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
                        <h1 className="font-serif text-6xl lg:text-7xl leading-[1.1] font-semibold">
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
                        <p className="mt-10 text-2xl text-gray-300 leading-relaxed max-w-xl">
                            Meridian Insurance Brokers delivers institutional-grade
                            risk solutions to private clients, SMEs, and multinational
                            corporations. We protect what matters most — with
                            precision, integrity, and unwavering commitment.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-6 mt-14">

                            <button className="bg-[#D4AF37] text-[#071B3A] px-10 py-5 font-semibold uppercase tracking-wider flex items-center gap-3 hover:bg-[#c59d25] transition">
                                Request a Consultation
                                <ArrowRight size={20} />
                            </button>

                            <button className="border border-gray-500 px-10 py-5 flex items-center gap-3 text-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition">
                                Our Services
                                <ArrowRight size={18} />
                            </button>

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

                                <p className="text-[#D4AF37] text-3xl font-bold mt-3">
                                    +44 20 7123 4567
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