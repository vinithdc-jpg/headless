import {
    Award,
    TrendingUp,
    Users,
    CircleCheck,
} from "lucide-react";

const stats = [
    {
        icon: Award,
        value: "26+",
        title: "Years of Excellence",
    },
    {
        icon: TrendingUp,
        value: "£2B+",
        title: "Risk Under Management",
    },
    {
        icon: Users,
        value: "12,400+",
        title: "Clients Protected",
    },
    {
        icon: CircleCheck,
        value: "98.7%",
        title: "Claims Settlement Rate",
    },
];

const StatsSection = () => {
    return (
        <section className="bg-[#F8F8F8] py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="text-center"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Icon
                                        size={28}
                                        strokeWidth={1.6}
                                        className="text-[#C9A227]"
                                    />
                                </div>

                                {/* Number */}
                                <h2 className="font-serif text-6xl text-[#071B3A] font-semibold">
                                    {item.value}
                                </h2>

                                {/* Title */}
                                <p className="mt-4 text-xl text-gray-600">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default StatsSection;