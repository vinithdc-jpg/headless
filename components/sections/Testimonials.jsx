import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sir James Whitmore",
    role: "CEO, Whitmore Capital Group",
    image: "https://i.pravatar.cc/100?img=11",
    active: false,
    review:
      "Meridian's commercial property team managed a complex multi-site renewal across 14 jurisdictions. Their attention to detail and market relationships delivered a 12% reduction in premium while improving our coverage significantly.",
  },
  {
    name: "Catherine Hargreaves",
    role: "CFO, Hargreaves Maritime Ltd",
    image: "https://i.pravatar.cc/100?img=5",
    active: false,
    review:
      "After a significant cargo incident, Meridian's claims team was on the phone within the hour. Our £3.2M settlement was concluded in record time. Absolutely invaluable partners in risk management.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Managing Director, Nair & Associates",
    image: "https://i.pravatar.cc/100?img=32",
    active: true,
    review:
      "The professional liability team understood our sector's nuances immediately. They structured a policy that covers exposures our previous broker had completely overlooked. The peace of mind is priceless.",
  },
];

const partners = [
  "Lloyd's of London",
  "Allianz",
  "AXA XL",
  "Zurich",
  "RSA Group",
  "Chubb",
  "Aviva",
  "Munich Re",
];

export default function Testimonials() {
  return (
    <section className="bg-white">

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <div className="flex justify-center items-center gap-4 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A227]" />
            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
              Client Stories
            </span>
            <div className="w-10 h-[1px] bg-[#C9A227]" />
          </div>

          <h2 className="font-serif text-5xl font-semibold text-[#071B3A]">
            Trusted by Industry Leaders
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-white border rounded-sm p-8 transition hover:shadow-xl ${
                item.active
                  ? "border-[#C9A227]"
                  : "border-gray-200"
              }`}
            >

              <Quote
                className="text-[#D8B04C] mb-6"
                size={28}
              />

              <p className="text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="flex gap-1 mt-8 text-[#D8B04C]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>

                  <h4 className="font-semibold text-[#071B3A]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Slider Dots */}

        <div className="flex justify-center gap-2 mt-10">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-6 h-2 rounded-full bg-[#C9A227]"></span>
        </div>

      </div>

      {/* Partners */}

      <div className="bg-[#F8F8F8] py-16">

        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[4px] text-xs text-center text-gray-400 mb-10">
            Our Market Partners
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-7 py-3 border border-gray-300 rounded bg-white text-gray-600 text-sm hover:border-[#C9A227] transition"
              >
                {partner}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}