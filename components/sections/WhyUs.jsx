"use client";

import React from "react";
import { whyUsReasons } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { IconRenderer } from "@/components/ui/IconRenderer";

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-[#04060C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// WHY VAULTOFCODES"
          title="Engineered for Serious Tech Aspirations"
          subtitle="We eliminate outdated academic fluff, replacing it with production software pipelines, cryptographic verification, and direct industry placement."
          glowColor="purple"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsReasons.map((reason, index) => (
            <Reveal key={reason.id} delay={index * 0.08}>
              <SpotlightCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold font-mono text-cyan-400">
                      {reason.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                      {reason.highlight}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-blue-400 mb-4">
                    <IconRenderer name={reason.iconName} className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
