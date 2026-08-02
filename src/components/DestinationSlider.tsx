"use client";

import Image from "next/image";
import { slides, waLink, type Slide } from "@/lib/site";

function Row({
  items,
  duration,
  reverse = false,
}: {
  items: Slide[];
  duration: number;
  reverse?: boolean;
}) {
  /* Duplicate items for seamless infinite loop */
  const loop = [...items, ...items];

  return (
    <div className="marquee group relative overflow-hidden py-2">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-slate-100 to-transparent sm:w-16 md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-slate-100 to-transparent sm:w-16 md:w-24" />

      <div
        className={`flex w-max gap-3 sm:gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((s, i) => (
          <a
            key={`${s.name}-${i}`}
            href={waLink(
              `Hello Shri Sanvariya Taxi Service 🙏\nI want a taxi from Indore to *${s.name}*.\nPlease share the best fare.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-40 w-52 shrink-0 overflow-hidden rounded-xl shadow-md ring-1 ring-slate-200 transition hover:ring-2 hover:ring-amber-400
                       sm:h-48 sm:w-60
                       md:h-56 md:w-72
                       lg:h-60 lg:w-80"
          >
            <Image
              src={s.img}
              alt={s.name}
              fill
              sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
              className="object-cover transition duration-700 group-hover:scale-105 hover:!scale-110"
            />
            {/* Tag badge */}
            <span className="absolute left-2 top-2 rounded-full bg-amber-400/95 px-2 py-0.5 text-[8px] font-extrabold uppercase text-slate-900 sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
              {s.tag}
            </span>
            {/* Bottom info overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 pt-8 sm:p-3 sm:pt-12">
              <p className="text-xs font-bold text-white sm:text-sm">
                {s.emoji} {s.name}
              </p>
              <p className="text-[9px] text-slate-200 sm:text-[11px]">
                {s.note}
              </p>
              <p className="mt-0.5 text-[9px] font-bold text-green-400 sm:mt-1 sm:text-[11px]">
                💬 Tap to book on WhatsApp
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function DestinationSlider() {
  const half = Math.ceil(slides.length / 2);
  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Row 1: scrolls left ← (items enter from right, exit left) */}
      <Row items={slides.slice(0, half)} duration={38} />
      {/* Row 2: scrolls right → (items enter from left, exit right) — reverse */}
      <Row items={slides.slice(half)} duration={46} reverse />
    </div>
  );
}
