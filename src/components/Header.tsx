"use client";
import { BASE_PATH } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Destinations", "#destinations"],
  ["Fleet & Rates", "#fleet"],

  ["Testimonials", "#testimonials"],
  ["Contact Us", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#0b1f3a] text-[11px] text-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <span>📍 Indore, Madhya Pradesh</span>
          <span>🕐 24x7 Service Available</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href={`${BASE_PATH}#home`} className="flex items-center">
            <Image
              src={`${BASE_PATH}/images/logo.png`}
              alt="Shree Sawariya Taxi Services Indore"
              width={220}
              height={100}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[12px] font-bold uppercase tracking-wide text-[#0b1f3a] hover:text-amber-500"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-amber-400 px-5 py-2.5 text-[12px] font-bold text-slate-900 hover:bg-amber-300"
            >
              📞 BOOK NOW
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="rounded border border-slate-300 px-3 py-2 text-sm lg:hidden"
          >
            ☰
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-slate-200 px-4 pb-4 lg:hidden">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-[#0b1f3a]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
