"use client";

import React, { useState } from "react";
import { featuredPrograms } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { Clock, ArrowRight, Layers } from "lucide-react";

export function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "AI & ML", "Security"];

  const filteredPrograms =
    selectedCategory === "All"
      ? featuredPrograms
      : featuredPrograms.filter((prog) => prog.category === selectedCategory);

  return (
    <section id="programs" className="py-20 md:py-28 relative bg-[#04060C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// ENGINEERING COHORTS"
          title="Industry-Grade Learning Programs"
          subtitle="Designed with lead software engineers from top tech companies. Master production-level architectures through intensive hands-on development."
          glowColor="cyan"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10"
                  : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog, index) => (
            <Reveal key={prog.id} delay={index * 0.08}>
              <SpotlightCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <IconRenderer name={prog.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      {prog.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {prog.duration}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      {prog.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prog.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Enrolling for ${prog.title} - admissions open for next cohort!`);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 flex items-center justify-center gap-2 transition-all group-hover:border-cyan-500/40"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
