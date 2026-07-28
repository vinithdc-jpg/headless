"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Claims", href: "/claims" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#071A3A] text-white shadow-[0_25px_80px_-70px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

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
        <div className="hidden lg:flex items-center gap-12 text-lg font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${pathname === item.href ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-8">

          <div className="flex items-center text-base text-slate-200 gap-2">
            <span className="bg-[#0A47FF] px-2 py-1 rounded-sm text-white font-semibold">24</span>
            <span className="text-[#D4AF37] font-semibold">/7</span>
            <span className="text-slate-300">+44 20 7123 4567</span>
          </div>

          <Link
            href="/contact"
            className="bg-[#D4AF37] text-[#071A3A] font-semibold px-6 py-3 rounded-sm hover:bg-[#c59b22] transition"
          >
            Get a Quote
          </Link>

        </div>

      </div>
      <button
        type="button"
        className="lg:hidden rounded-md border border-slate-700 p-3 text-slate-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#071A3A]/95 px-6 py-6">
          <div className="space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-4 py-3 text-lg font-medium transition ${pathname === item.href ? "bg-white/5 text-[#D4AF37]" : "text-slate-200 hover:bg-white/5 hover:text-[#D4AF37]"}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="block rounded-md bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#071A3A] hover:bg-[#c59b22] transition"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;