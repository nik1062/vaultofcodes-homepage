"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Reveal Component
 * Smooth fade & vertical slide-in when entering viewport, with motion-safety support
 */
export function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  className = ""
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div style={{ width }} className={className}>{children}</div>;
  }

  return (
    <motion.div
      style={{ width }}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
}
