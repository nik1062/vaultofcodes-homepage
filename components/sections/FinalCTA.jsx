"use client";

import React from "react";
import { finalCTAContent } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Terminal, Sparkles, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 to-[#070B14] p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-blue-500/10 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 backdrop-blur-md mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                  {finalCTAContent.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                {finalCTAContent.title}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
                {finalCTAContent.description}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <MagneticButton
                  as="a"
                  href={finalCTAContent.primaryCTA.href}
                  onClick={(e) => handleScrollTo(e, finalCTAContent.primaryCTA.href)}
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-500/30 transition-all">
                    {finalCTAContent.primaryCTA.label}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href={finalCTAContent.secondaryCTA.href}
                  onClick={(e) => handleScrollTo(e, finalCTAContent.secondaryCTA.href)}
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    {finalCTAContent.secondaryCTA.label}
                  </span>
                </MagneticButton>
              </div>

              {/* Trust Guarantee */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{finalCTAContent.guaranteeText}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
