"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Marquee Component
 * Continuous horizontal loop that pauses on hover
 */
export function Marquee({
  children,
  direction = "left",
  pauseOnHover = true,
  speed = 40,
  className = ""
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] select-none",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee",
          direction === "right" && "direction-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee",
          direction === "right" && "direction-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
