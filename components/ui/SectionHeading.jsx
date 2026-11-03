"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Standardized Section Heading with Eyebrow, Gradient Title, and Subtitle
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
  glowColor = "cyan"
}) {
  const glowClasses = {
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30",
    blue: "text-blue-400 border-blue-500/30 bg-blue-950/30",
    purple: "text-purple-400 border-purple-500/30 bg-purple-950/30",
    emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
  }[glowColor] || "text-cyan-400 border-cyan-500/30 bg-cyan-950/30";

  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border",
              glowClasses
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
