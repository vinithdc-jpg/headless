import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#071A3A] text-white">
      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 border border-[#D4AF37] rounded-md flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.8} />
          </div>

          <div>
            <h2 className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-medium">
              Meridian
            </h2>
            <h1 className="text-3xl font-serif font-semibold leading-none">
              Insurance Brokers
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-12 text-lg font-medium">
          <li className="relative cursor-pointer text-[#D4AF37]">
            Home
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#D4AF37]" />
          </li>

          <li className="cursor-pointer hover:text-[#D4AF37] transition">
            About
          </li>

          <li className="cursor-pointer hover:text-[#D4AF37] transition">
            Services
          </li>

          <li className="cursor-pointer hover:text-[#D4AF37] transition">
            Claims
          </li>

          <li className="cursor-pointer hover:text-[#D4AF37] transition">
            Contact
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-8">

          <div className="flex items-center text-lg">
            <span className="bg-[#0A47FF] px-1 text-white font-bold">
              24
            </span>
            <span className="text-[#D4AF37] font-bold">/7</span>

            <span className="ml-2 text-gray-300">
              +44 20 7123 4567
            </span>
          </div>

          <button className="bg-[#D4AF37] text-[#071A3A] font-semibold px-8 py-4 rounded-sm hover:bg-[#c59b22] transition">
            Get a Quote
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;