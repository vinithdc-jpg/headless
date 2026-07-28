import {
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

const leaders = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "/team/team-1.jpg",
    bio: "Over 25 years of experience in commercial insurance and strategic risk advisory.",
  },
  {
    name: "James Thornton",
    role: "Chief Risk Officer",
    image: "/team/team-2.jpg",
    bio: "Specialist in enterprise risk, international placements, and Lloyd's market solutions.",
  },
  {
    name: "Emma Collins",
    role: "Director of Client Services",
    image: "/team/team-3.jpg",
    bio: "Leading client success with a relationship-first approach and exceptional service standards.",
  },
  {
    name: "Michael Reed",
    role: "Head of Claims",
    image: "/team/team-4.jpg",
    bio: "Dedicated claims advocate with expertise in complex commercial and corporate claims.",
  },
];

export default function Leadership() {
  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="flex justify-center items-center gap-4 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A227]" />

            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
              Leadership
            </span>

            <div className="w-10 h-[1px] bg-[#C9A227]" />
          </div>

          <h2 className="font-serif text-5xl text-[#071B3A] font-semibold">
            Meet Our Leadership Team
          </h2>

          <p className="mt-6 text-gray-500 leading-8 text-lg">
            Experienced professionals dedicated to protecting businesses,
            families, and communities through trusted insurance advice.
          </p>

        </div>

        {/* Team Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {leaders.map((leader, index) => (

            <div
              key={index}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-[#071B3A]/0 group-hover:bg-[#071B3A]/65 transition duration-500" />

                {/* Social */}

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-500">

                  <button className="w-10 h-10 rounded-full bg-white text-[#071B3A] flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition">
                    <Linkedin size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-white text-[#071B3A] flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition">
                    <Mail size={18} />
                  </button>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="font-serif text-2xl text-[#071B3A]">
                  {leader.name}
                </h3>

                <p className="text-[#C9A227] font-medium mt-2">
                  {leader.role}
                </p>

                <p className="mt-5 text-gray-500 leading-7">
                  {leader.bio}
                </p>

                <button className="mt-8 flex items-center gap-2 text-[#071B3A] font-medium hover:text-[#C9A227] transition">

                  View Profile

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}