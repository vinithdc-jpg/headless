import Link from "next/link";
import {
    Building2,
    BriefcaseBusiness,
    Anchor,
    Heart,
    Shield,
    Globe,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Building2,
        title: "Commercial Property",
        description:
            "Comprehensive protection for office buildings, retail premises, and industrial facilities.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Professional Liability",
        description:
            "Directors & Officers, E&O, and professional indemnity coverage for your business.",
    },
    {
        icon: Anchor,
        title: "Marine & Cargo",
        description:
            "Expert marine hull, cargo, and freight liability insurance for global trade.",
    },
    {
        icon: Heart,
        title: "Life & Health",
        description:
            "Group life, critical illness, and corporate health insurance for your workforce.",
    },
    {
        icon: Shield,
        title: "Cyber Insurance",
        description:
            "First and third-party cyber risk coverage in an increasingly digital world.",
    },
    {
        icon: Globe,
        title: "International Risk",
        description:
            "Cross-border and multinational risk programs tailored for global operations.",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[#F8F8F8] py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="w-10 h-px bg-[#C9A227]" />
                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Our Expertise
                        </span>
                        <div className="w-10 h-px bg-[#C9A227]" />
                    </div>

                    <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
                        Comprehensive Insurance Solutions
                    </h2>

                    <p className="mt-6 text-gray-500 text-lg leading-8">
                        From personal wealth protection to complex multinational risk
                        programs, Meridian delivers tailored solutions backed by the
                        world's leading insurers.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-sm p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 border border-[#E8D7A8] rounded flex items-center justify-center mb-8">
                                    <Icon
                                        className="text-[#C9A227]"
                                        size={24}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl text-[#071B3A] font-semibold mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-7">
                                    {service.description}
                                </p>

                                {/* Link */}
                                <Link
                                    href="/services"
                                    className="mt-8 inline-flex items-center gap-2 text-[#C9A227] font-medium hover:gap-3 transition-all"
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-16">
                    <Link
                        href="/services"
                        className="bg-[#071B3A] text-white px-10 py-4 font-semibold flex items-center gap-3 hover:bg-[#0B285A] transition"
                    >
                        View All Services
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}