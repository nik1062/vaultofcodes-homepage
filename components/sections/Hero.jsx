"use client";

import React from "react";
import { heroContent } from "@/data/content";
import { HeroBackground } from "@/components/effects/HeroBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Sparkles, Terminal, ChevronRight } from "lucide-react";

export function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Interactive Canvas & Grid Background */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Tag */}
        <Reveal delay={0.1} yOffset={16}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/20">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
              {heroContent.eyebrow}
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.2} yOffset={24}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            {heroContent.headlineMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              {heroContent.headlineGradient}
            </span>
          </h1>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.3} yOffset={24}>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {heroContent.subtext}
          </p>
        </Reveal>

        {/* Dual CTAs */}
        <Reveal delay={0.4} yOffset={24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <MagneticButton
              as="a"
              href={heroContent.primaryCTA.href}
              onClick={(e) => handleScrollTo(e, heroContent.primaryCTA.href)}
              className="w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300">
                {heroContent.primaryCTA.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href={heroContent.secondaryCTA.href}
              onClick={(e) => handleScrollTo(e, heroContent.secondaryCTA.href)}
              className="w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-medium text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300">
                <Terminal className="w-4 h-4 text-cyan-400" />
                {heroContent.secondaryCTA.label}
              </span>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Trust Badges & Metrics Row */}
        <Reveal delay={0.5} yOffset={20}>
          <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto">
            <p className="text-xs font-mono tracking-wider uppercase text-slate-400 mb-6">
              {heroContent.badgeText}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {heroContent.statsSummary.map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">{item.value}</div>
                  <div className="text-xs text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
