"use client";

import React from "react";
import { saasProducts } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";

export function SoftwareSaaS() {
  const getBadgeStyle = (color) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "cyan":
        return "bg-cyan-500/15 text-cyan-400 border-cyan-500/30";
      case "purple":
        return "bg-purple-500/15 text-purple-400 border-purple-500/30";
      default:
        return "bg-blue-500/15 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <section id="software" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// PROPRIETARY PLATFORMS"
          title="The VaultofCodes SaaS Ecosystem"
          subtitle="Beyond education, we build and deploy enterprise software products addressing credential verification, developer skill diagnostics, and tech recruitment."
          glowColor="emerald"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {saasProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.12}>
              <SpotlightCard
                className="h-full flex flex-col justify-between border-slate-800"
                spotlightColor="rgba(16, 185, 129, 0.12)"
                borderColor="rgba(16, 185, 129, 0.4)"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center text-emerald-400">
                      <IconRenderer name={product.iconName} className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${getBadgeStyle(
                        product.statusColor
                      )}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-1.5">{product.name}</h3>
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                    {product.category} &bull; {product.metrics}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Key Benefit Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span>KEY ADVANTAGE</span>
                    </div>
                    <p className="text-xs text-emerald-200 leading-snug">{product.keyBenefit}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Demo requested for ${product.name}. Our enterprise team will connect!`);
                    }}
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>{product.ctaText}</span>
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
