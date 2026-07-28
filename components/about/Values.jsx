import {
    ShieldCheck,
    Handshake,
    Globe2,
    HeartHandshake,
} from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Integrity First",
        description:
            "We act in your best interest—always. Our advice is independent, impartial, and focused on long-term protection.",
    },
    {
        icon: Handshake,
        title: "Client Partnership",
        description:
            "We build long-term relationships, not transactional interactions. Your success is our benchmark.",
    },
    {
        icon: Globe2,
        title: "Market Access",
        description:
            "Our trusted access to Lloyd's and leading global insurers enables bespoke solutions for every client.",
    },
    {
        icon: HeartHandshake,
        title: "Claims Advocacy",
        description:
            "When the unexpected happens, we stand firmly in your corner, securing outcomes that matter.",
    },
];

const Values = () => {
    return (
        <section className="bg-[#F8F8F8] py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Our Values
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl font-semibold text-[#071B3A]">
                        The Principles We Live By
                    </h2>

                </div>

                {/* Cards */}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {values.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C9A227]"
                            >

                                {/* Icon */}

                                <div className="w-14 h-14 rounded border border-[#E6D7AA] flex items-center justify-center">

                                    <Icon
                                        className="text-[#C9A227]"
                                        size={24}
                                        strokeWidth={1.7}
                                    />

                                </div>

                                {/* Title */}

                                <h3 className="font-serif text-2xl text-[#071B3A] font-semibold mt-8">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-5 leading-7 text-gray-500">

                                    {item.description}

                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Values;