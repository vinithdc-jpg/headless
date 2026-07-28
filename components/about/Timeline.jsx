const timeline = [
    {
        year: "1998",
        title: "Founded in the City of London",
        description:
            "Meridian Insurance Brokers was established with a vision to provide independent, client-focused insurance advice backed by Lloyd's market expertise.",
    },
    {
        year: "2003",
        title: "Lloyd's Market Accreditation",
        description:
            "Achieved direct access to the Lloyd's market, enabling clients to benefit from specialist underwriting and global insurance solutions.",
    },
    {
        year: "2008",
        title: "Expansion During Market Challenges",
        description:
            "Continued strategic growth during the financial crisis while maintaining exceptional client service and retention.",
    },
    {
        year: "2013",
        title: "International Risk Division",
        description:
            "Launched dedicated international and multinational risk teams serving clients across Europe, Asia, and North America.",
    },
    {
        year: "2019",
        title: "Cyber Risk Practice",
        description:
            "Introduced specialist cyber insurance and digital risk consulting services to address the evolving threat landscape.",
    },
    {
        year: "2024",
        title: "Industry Recognition",
        description:
            "Now protecting more than 12,400 clients with over 80 insurer relationships and recognised as one of the UK's leading independent brokers.",
    },
];

export default function Timeline() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-20">

                    <div className="flex justify-center items-center gap-4 mb-5">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            Our History
                        </span>

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                    </div>

                    <h2 className="font-serif text-5xl font-semibold text-[#071B3A]">
                        A Quarter Century of Progress
                    </h2>

                </div>

                {/* Timeline */}

                <div className="relative">

                    {/* Vertical Line */}

                    <div className="absolute left-[86px] top-0 bottom-0 w-px bg-[#E7D8AF]" />

                    <div className="space-y-14">

                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex gap-10"
                            >

                                {/* Year */}

                                <div className="w-20 flex-shrink-0 text-right">

                                    <h3 className="font-serif text-2xl text-[#C9A227]">
                                        {item.year}
                                    </h3>

                                </div>

                                {/* Dot */}

                                <div className="relative flex items-start">

                                    <div className="w-4 h-4 rounded-full bg-[#C9A227] border-4 border-white shadow-md mt-2 z-10" />

                                </div>

                                {/* Content */}

                                <div className="pb-2">

                                    <h3 className="text-xl font-semibold text-[#071B3A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-gray-500 leading-8">
                                        {item.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}