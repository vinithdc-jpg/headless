"use client";

import Link from "next/link";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import RemoteImage from "@/components/ui/RemoteImage";

const leaders = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Over 25 years of experience in commercial insurance and strategic risk advisory.",
  },
  {
    name: "James Thornton",
    role: "Chief Risk Officer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    bio: "Specialist in enterprise risk, international placements, and Lloyd's market solutions.",
  },
  {
    name: "Emma Collins",
    role: "Director of Client Services",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "Leading client success with a relationship-first approach and exceptional service standards.",
  },
  {
    name: "Michael Reed",
    role: "Head of Claims",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Dedicated claims advocate with expertise in complex commercial and corporate claims.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-[#F8F8F8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center items-center gap-4 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A227]" aria-hidden />
            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">Leadership</span>
            <div className="w-10 h-[1px] bg-[#C9A227]" aria-hidden />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-[#071B3A] font-semibold">
            Meet Our Leadership Team
          </h2>

          <p className="mt-6 text-gray-500 leading-8 text-base sm:text-lg">
            Experienced professionals dedicated to protecting businesses, families, and
            communities through trusted insurance advice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group flex h-full flex-col bg-white overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
            >
              <div className="relative h-[320px] sm:h-[360px] overflow-hidden">
                <RemoteImage
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#071B3A]/0 group-hover:bg-[#071B3A]/65 transition duration-500" />

                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-500">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on LinkedIn`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071B3A] transition hover:bg-[#C9A227] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                   Linked In
                  </a>
                  <a
                    href="mailto:enquiries@meridian.co.uk"
                    aria-label={`Email ${leader.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071B3A] transition hover:bg-[#C9A227] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Mail size={18} aria-hidden />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-[#071B3A]">{leader.name}</h3>
                <p className="text-[#C9A227] font-medium mt-2">{leader.role}</p>
                <p className="mt-4 sm:mt-5 text-gray-500 leading-7 flex-1">{leader.bio}</p>
                <Link
                  href="/contact"
                  className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-[#071B3A] font-medium hover:text-[#C9A227] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                >
                  View Profile
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
