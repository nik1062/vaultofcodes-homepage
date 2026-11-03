"use client";

import React from "react";
import { testimonialsData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Star, CheckCircle } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-20 md:py-28 relative bg-[#04060C]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          eyebrow="// STUDENT VOICES"
          title="From Cohort Students to High-Impact Engineers"
          subtitle="Explore stories from developers who transformed their skills, engineered production software, and accelerated their careers at VaultofCodes."
          glowColor="cyan"
        />
      </div>

      {/* Infinite Horizontal Testimonials Marquee */}
      <div className="relative w-full">
        {/* Left and right fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#04060C] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#04060C] to-transparent z-10" />

        <Marquee speed={35} pauseOnHover={true}>
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="w-[340px] sm:w-[420px] shrink-0 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{t.role} &bull; <span className="text-slate-300 font-medium">{t.company}</span></p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {t.programTaken}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
