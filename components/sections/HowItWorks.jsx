"use client";

import React from "react";
import { howItWorksSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Search, Code2, Rocket, Award } from "lucide-react";

export function HowItWorks() {
  const getStepIcon = (phase) => {
    switch (phase) {
      case "Discover":
        return <Search className="w-5 h-5 text-blue-400" />;
      case "Learn":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "Build":
        return <Rocket className="w-5 h-5 text-purple-400" />;
      case "Launch":
        return <Award className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// SYSTEMATIC JOURNEY"
          title="From Fundamentals to Production Deployment"
          subtitle="Our 4-phase engineering framework ensures you don't just watch videos—you build, verify, and launch real software."
          glowColor="blue"
        />

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop Connecting SVG Path */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-8 pointer-events-none z-0">
            <svg className="w-full h-8" preserveAspectRatio="none">
              <line
                x1="12%"
                y1="50%"
                x2="88%"
                y2="50%"
                stroke="rgba(59, 130, 246, 0.25)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {howItWorksSteps.map((step, index) => (
              <Reveal key={step.stepNumber} delay={index * 0.12}>
                <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md hover:border-blue-500/40 transition-all flex flex-col justify-between group">
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                        {getStepIcon(step.phase)}
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs font-mono uppercase text-cyan-400 mb-3 tracking-wide">
                      Phase {step.stepNumber}: {step.phase}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Box */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5">
                      Outcome
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
