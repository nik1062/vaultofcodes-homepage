"use client";

import React from "react";
import {
  Code,
  Sparkles,
  Terminal,
  Shield,
  Lock,
  Cloud,
  ShieldCheck,
  Compass,
  Briefcase,
  Zap,
  Layers,
  CheckCircle2,
  Users,
  TrendingUp,
  Globe,
  Search,
  Rocket,
  Award,
  GraduationCap,
  Cpu,
  Clock,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const ICON_MAP = {
  Code,
  Sparkles,
  Terminal,
  Shield,
  Lock,
  Cloud,
  ShieldCheck,
  Compass,
  Briefcase,
  Zap,
  Layers,
  CheckCircle2,
  Users,
  TrendingUp,
  Globe,
  Search,
  Rocket,
  Award,
  GraduationCap,
  Cpu,
  Clock,
  ArrowRight,
};

/**
 * Dynamic Lucide Icon Renderer with Safe Explicit Mapping
 */
export function IconRenderer({ name, className = "w-5 h-5", ...props }) {
  if (!name) return null;

  const IconComponent = ICON_MAP[name] || Sparkles;

  return <IconComponent className={className} {...props} />;
}
