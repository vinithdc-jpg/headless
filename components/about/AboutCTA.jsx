import {
    ShieldCheck,
    Award,
    BadgeCheck,
    Building2,
} from "lucide-react";

const certifications = [
    {
        icon: ShieldCheck,
        title: "FCA Regulated",
        description:
            "Authorised and regulated by the Financial Conduct Authority, ensuring the highest standards of professionalism and client protection.",
    },
    {
        icon: Award,
        title: "Lloyd's Broker",
        description:
            "Direct access to Lloyd's of London and specialist underwriting markets for complex and international risks.",
    },
    {
        icon: BadgeCheck,
        title: "BIBA Member",
        description:
            "Proud member of the British Insurance Brokers' Association, promoting ethical and client-first insurance practices.",
    },
    {
        icon: Building2,
        title: "CII Chartered",
        description:
            "Committed to continuous professional development through the Chartered Insurance Institute.",
    },
];

export default function Accreditations() {
    return (
        <section className="bg-[#071B3A] py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <div className="flex justify-center items-center gap-4 mb-5">
                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Professional Standards
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />
                    </div>

                    <h2 className="font-serif text-5xl text-white font-semibold">
                        Accredited. Trusted. Proven.
                    </h2>

                    <p className="mt-6 text-slate-300 text-lg leading-8">
                        Our professional memberships and regulatory accreditations reflect
                        our commitment to delivering exceptional insurance advice.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {certifications.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-[#C9A227] hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-14 h-14 border border-[#C9A227]/40 flex items-center justify-center rounded">

                                    <Icon
                                        size={26}
                                        className="text-[#C9A227]"
                                    />

                                </div>

                                <h3 className="font-serif text-2xl text-white mt-8">
                                    {item.title}
                                </h3>

                                <p className="text-slate-300 mt-5 leading-7">
                                    {item.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}