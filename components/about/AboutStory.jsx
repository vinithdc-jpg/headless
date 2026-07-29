import {
    CheckCircle2,
    Calendar,
    Globe,
    UserRound,
} from "lucide-react";
import RemoteImage from "@/components/ui/RemoteImage";

const features = [
    "100+ independent insurance advisers",
    "Worldwide market access across Lloyd's and international insurers",
    "Dedicated account manager for every client relationship",
];

const AboutStory = () => {
    return (
        <section id="our-story" className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Label */}

                <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-[1px] bg-[#C9A227]" />

                    <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                        Our Story
                    </span>

                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left */}

                    <div>

                        <h2 className="font-serif text-5xl leading-tight text-[#071B3A] font-semibold">
                            Protecting What
                            <br />
                            You've Built
                        </h2>

                        <p className="mt-8 text-gray-600 leading-8">
                            We believe exceptional insurance broking is about understanding
                            people and their aspirations as much as protecting assets.
                            Every recommendation begins with listening, followed by
                            carefully designed solutions tailored to your business,
                            family, and future.
                        </p>

                        <p className="mt-6 text-gray-600 leading-8">
                            Founded by professionals with deep experience in the Lloyd's
                            market, Meridian has grown into one of the UK's most respected
                            independent brokers while maintaining a personal,
                            relationship-first approach.
                        </p>

                        {/* Feature List */}

                        <div className="mt-10 space-y-5">

                            {features.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="text-[#C9A227] mt-1 flex-shrink-0"
                                    />

                                    <p className="text-gray-700">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Right */}

                    <div className="relative mb-16 sm:mb-0">
                        <div className="relative aspect-[4/5] sm:aspect-auto overflow-hidden rounded min-h-[320px] sm:min-h-[480px] lg:min-h-[560px]">
                            <RemoteImage
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
                                alt="Meridian team in discussion"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="relative sm:absolute sm:-bottom-8 sm:-left-8 mt-6 sm:mt-0 bg-[#071B3A] text-white w-full sm:w-52 p-6 sm:p-8 shadow-2xl">

                            <Calendar
                                className="text-[#C9A227]"
                                size={28}
                            />

                            <h3 className="mt-4 font-serif text-5xl">
                                26+
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                Years protecting what matters most.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Bottom Stats */}

                <div className="grid md:grid-cols-3 gap-8 mt-28">

                    <div className="border border-gray-200 p-8">

                        <UserRound
                            className="text-[#C9A227]"
                            size={28}
                        />

                        <h3 className="mt-5 font-serif text-4xl text-[#071B3A]">
                            12,400+
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Clients Protected
                        </p>

                    </div>

                    <div className="border border-gray-200 p-8">

                        <Globe
                            className="text-[#C9A227]"
                            size={28}
                        />

                        <h3 className="mt-5 font-serif text-4xl text-[#071B3A]">
                            80+
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Global Insurance Partners
                        </p>

                    </div>

                    <div className="border border-gray-200 p-8">

                        <Calendar
                            className="text-[#C9A227]"
                            size={28}
                        />

                        <h3 className="mt-5 font-serif text-4xl text-[#071B3A]">
                            Since 1998
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Trusted Insurance Advisors
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutStory;