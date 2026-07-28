"use client";

const services = [
  "Professional Liability",
  "Commercial Property",
  "Marine & Cargo",
  "Cyber Insurance",
  "Directors & Officers",
];

const company = [
  "About Us",
  "Our Services",
  "Claims",
  "Careers",
  "FCA Regulatory Info",
  "Privacy Policy",
  "Terms of Business",
  "Cookie Policy",
];

const certifications = [
  "Lloyd's of London",
  "FCA Authorised",
  "BIBA Member",
  "CII Accredited",
  "Cyber Essentials Plus",
  "ISO 27001",
];

export default function Footer() {
  return (
    <footer className="bg-[#071B3A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Company */}
          <div>
            <div>
              <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227]">
                Meridian
              </h3>

              <h2 className="font-serif text-2xl mt-1">
                Insurance Brokers
              </h2>
            </div>

            <p className="mt-6 text-slate-300 leading-7 text-sm">
              Protecting individuals, families, and businesses since 1998.
              Trusted advisers delivering tailored insurance solutions
              across the UK and internationally.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              <button className="w-10 h-10 border border-slate-600 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#071B3A] transition text-sm">
                FB
              </button>

              <button className="w-10 h-10 border border-slate-600 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#071B3A] transition text-sm">
                IG
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227] mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="text-slate-300 hover:text-[#C9A227] cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227] mb-6">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map((item) => (
                <li
                  key={item}
                  className="text-slate-300 hover:text-[#C9A227] cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227] mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-slate-400 text-sm">
                  24/7 Claims Line
                </p>

                <p className="mt-1">
                  +44 20 7123 4567
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Email
                </p>

                <p className="mt-1">
                  enquiries@meridian.co.uk
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Office
                </p>

                <p className="mt-1 leading-7">
                  One Canada Square
                  <br />
                  Canary Wharf
                  <br />
                  London, E14
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border border-slate-700 mt-16 p-5">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-300">
            {certifications.map((item) => (
              <span
                key={item}
                className="hover:text-[#C9A227] transition cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm text-slate-400 gap-4">

          <p>
            © {new Date().getFullYear()} Meridian Insurance Brokers Ltd.
            All rights reserved.
          </p>

          <p>
            Authorised and regulated by the Financial Conduct Authority (FCA).
          </p>

          <p>
            Reg No. 12345678
          </p>

        </div>

      </div>
    </footer>
  );
}