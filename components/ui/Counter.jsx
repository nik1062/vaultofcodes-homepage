"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Animated Counter Component
 * Counts from 0 to value with smooth ease-out when visible in viewport
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = ""
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const startVal = 0;
          const endVal = value;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic calculation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startVal + (endVal - startVal) * easeOutProgress);

            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, hasAnimated, shouldReduceMotion]);

  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
