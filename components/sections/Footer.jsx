"use client";

import Link from "next/link";
import {
  footerCompany,
  footerServices,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
} from "@/lib/siteLinks";

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
    <footer className="mt-auto bg-[#071B3A] text-white" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 id="footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          <div>
            <Link
              href="/"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
            >
              <p className="uppercase tracking-[3px] text-xs text-[#C9A227]">Meridian</p>
              <p className="font-serif text-2xl mt-1">Insurance Brokers</p>
            </Link>

            <p className="mt-6 text-slate-300 leading-7 text-sm">
              Protecting individuals, families, and businesses since 1998. Trusted advisers
              delivering tailored insurance solutions across the UK and internationally.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meridian on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-slate-600 text-sm transition hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#071B3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meridian on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-slate-600 text-sm transition hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#071B3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
              >
                IG
              </a>
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227] mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-[#C9A227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227] mb-6">Company</h3>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-[#C9A227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[3px] text-xs text-[#C9A227] mb-6">Get In Touch</h3>
            <div className="space-y-6 text-sm sm:text-base">
              <div>
                <p className="text-slate-400 text-sm">24/7 Claims Line</p>
                <a
                  href={PHONE_HREF}
                  className="mt-1 inline-block hover:text-[#C9A227] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 inline-block hover:text-[#C9A227] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Office</p>
                <address className="mt-1 not-italic leading-7 text-slate-200">
                  One Canada Square
                  <br />
                  Canary Wharf
                  <br />
                  London, E14
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 border border-slate-700 p-4 sm:p-5">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-300">
            {certifications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-slate-800 pt-6 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-sm text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Meridian Insurance Brokers Ltd. All rights reserved.</p>
          <p>Authorised and regulated by the Financial Conduct Authority (FCA).</p>
          <p>Reg No. 12345678</p>
        </div>
      </div>
    </footer>
  );
}
