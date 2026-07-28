import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Independent Advice",
        description:
            "Unbiased recommendations from the whole market — we work for you, not the insurers.",
    },
    {
        title: "Direct Lloyd's Access",
        description:
            "Place complex risks directly in the Lloyd's market through our active syndicate relationships.",
    },
    {
        title: "Sector Specialists",
        description:
            "Dedicated teams for marine, property, professional, cyber, and private client risk.",
    },
    {
        title: "Claims Advocacy",
        description:
            "Our in-house claims team fights to settle your claim swiftly and at maximum value.",
    },
];

export default function WhyMeridian() {
    return (
        <section
            className="relative overflow-hidden py-28 bg-[#071B3A]"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(7,27,58,.88), rgba(7,27,58,.88)), url('/office-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-[1px] bg-[#C9A227]" />

                            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                                Why Meridian
                            </span>
                        </div>

                        <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight text-white">
                            The Standard Bearer
                            <br />
                            <span className="italic text-[#C9A227] font-normal">
                                in Risk Management
                            </span>
                        </h2>

                        <p className="mt-8 text-gray-300 text-lg leading-9 max-w-xl">
                            With direct access to Lloyd's of London and relationships with
                            over 80 global insurers, we place your risk in the strongest
                            possible hands. Our team of 140 specialists brings deep sector
                            knowledge to every client relationship.
                        </p>

                        <button className="mt-10 flex items-center gap-3 text-[#C9A227] font-semibold hover:gap-4 transition-all">
                            Discover Our Story
                            <ArrowRight size={18} />
                        </button>

                    </div>

                    {/* RIGHT CARDS */}
                    <div className="grid sm:grid-cols-2 gap-5">

                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-md p-8 hover:bg-white/15 transition duration-300"
                            >
                                <CheckCircle2
                                    className="text-[#C9A227] mb-5"
                                    size={18}
                                />

                                <h3 className="font-serif text-2xl text-white font-semibold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}