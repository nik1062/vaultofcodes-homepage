"use client";

import React from "react";
import { whatWeDoCards } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export function WhatWeDo() {
  const getCardIcon = (iconName) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="what-we-do" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// DUAL COMPANY FOCUS"
          title="Bridging Engineering Education & Enterprise Software"
          subtitle="VaultofCodes operates simultaneously as a high-intensity developer academy and a fast-moving software innovation house."
          glowColor="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {whatWeDoCards.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.15}>
              <SpotlightCard
                className={`h-full flex flex-col justify-between border-slate-800 ${card.borderHighlight}`}
                spotlightColor={card.id === "edtech" ? "rgba(59, 130, 246, 0.15)" : "rgba(6, 182, 212, 0.15)"}
                borderColor={card.id === "edtech" ? "rgba(59, 130, 246, 0.5)" : "rgba(6, 182, 212, 0.5)"}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                      {getCardIcon(card.iconName)}
                    </div>
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm font-medium text-cyan-400 mb-4">{card.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{card.description}</p>

                  <ul className="space-y-3 mb-8">
                    {card.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <a
                    href={card.ctaLink}
                    onClick={(e) => handleScrollTo(e, card.ctaLink)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
