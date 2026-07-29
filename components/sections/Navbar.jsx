"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/siteLinks";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Claims", href: "/claims" },
  { label: "Contact", href: "/contact" },
];

const linkClass = (active) =>
  `rounded-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${
    active ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
  }`;

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="sticky top-0 z-50 bg-[#071A3A] text-white shadow-[0_25px_80px_-70px_rgba(0,0,0,0.7)]"
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 sm:gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-md border border-[#D4AF37]"
              aria-hidden
            >
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[3px] sm:tracking-[4px] text-[#D4AF37]">
                Meridian
              </p>
              <p className="truncate font-serif text-xl sm:text-3xl font-semibold leading-tight">
                Insurance Brokers
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10 xl:gap-12 text-base xl:text-lg font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(pathname === item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm xl:text-base text-slate-200 hover:text-[#D4AF37] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              <span className="rounded-sm bg-[#0A47FF] px-2 py-1 text-white font-semibold">
                24
              </span>
              <span className="text-[#D4AF37] font-semibold">/7</span>
              <span className="text-slate-300">{PHONE_DISPLAY}</span>
            </a>

            <Link
              href="/quote"
              className="rounded-sm bg-[#D4AF37] px-5 xl:px-6 py-2.5 xl:py-3 font-semibold text-[#071A3A] transition hover:bg-[#c59b22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden shrink-0 rounded-md border border-slate-700 p-2.5 text-slate-200 transition hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden border-t border-white/10 bg-[#071A3A]/98 px-4 sm:px-6 py-6"
          >
            <div className="space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-4 py-3 text-lg font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${
                    pathname === item.href
                      ? "bg-white/5 text-[#D4AF37]"
                      : "text-slate-200 hover:bg-white/5 hover:text-[#D4AF37]"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <a
                href={PHONE_HREF}
                className="block rounded-md border border-white/10 px-4 py-3 text-center text-slate-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
              >
                24/7 {PHONE_DISPLAY}
              </a>
              <Link
                href="/quote"
                className="block rounded-md bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#071A3A] transition hover:bg-[#c59b22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
