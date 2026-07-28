import { MoveRight } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-[#071B3A]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: "url('/about-hero.jpg')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/95 to-[#071B3A]/70" />

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                <div className="max-w-4xl">

                    {/* Label */}

                    <div className="flex items-center gap-4 mb-8">

                        <div className="w-10 h-[1px] bg-[#C9A227]" />

                        <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
                            About Meridian
                        </span>

                    </div>

                    {/* Heading */}

                    <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight text-white">

                        A Legacy Built on{" "}

                        <span className="italic text-[#C9A227] font-normal">
                            Trust
                        </span>

                    </h1>

                    {/* Paragraph */}

                    <p className="mt-8 max-w-3xl text-lg md:text-xl leading-9 text-slate-300">
                        For over 25 years, Meridian Insurance Brokers has been the trusted
                        partner for businesses, professionals, and private clients seeking
                        intelligent risk management solutions backed by expertise,
                        integrity, and exceptional service.
                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-wrap gap-5">

                        <button className="group flex items-center gap-3 bg-[#C9A227] px-8 py-4 text-[#071B3A] font-semibold uppercase tracking-wider transition hover:bg-[#B8931E]">

                            Our Story

                            <MoveRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />

                        </button>

                        <button className="border border-slate-500 px-8 py-4 text-white transition hover:border-[#C9A227] hover:text-[#C9A227]">

                            Meet Our Team

                        </button>

                    </div>

                </div>

            </div>

            {/* Decorative Bottom Shape */}

            <div className="relative h-24 overflow-hidden">

                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 L1440,70 L1440,120 L0,120 Z"
                        fill="#ffffff"
                    />
                </svg>

            </div>

        </section>
    );
};

export default AboutHero;