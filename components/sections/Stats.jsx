"use client";

import React from "react";
import { statisticsData } from "@/data/content";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section id="stats" className="py-16 md:py-24 relative border-y border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statisticsData.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 font-mono mb-2">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-sm font-semibold text-white mb-1.5">{stat.label}</div>
                <p className="text-xs text-slate-400 leading-snug">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
