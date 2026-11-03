# 02. DESIGN.md — Design & UI Rulebook

**Project:** VaultofCodes Main Homepage  
**Aesthetic Theme:** Modern Cyber-SaaS Dark / Neon Tech Minimalist  
**Source of Truth:** Design specifications, tokens, styling rules, and layout constraints.

---

## 1. Visual Identity & Brand Philosophy

VaultofCodes must look and feel like an elite, Series-A software venture — combining the aesthetic discipline of Linear/Vercel with the vibrant, high-energy technological flair of modern developer platforms. 

- **Theme Base:** True Deep Dark (`#090D16` / `#05070B`)
- **Accent Glow:** Electric Indigo / Cyan / Emerald gradients
- **Texture:** Subtle grid lines, ambient radial glows, glassmorphism cards (`backdrop-blur-md`), and high-contrast typography.
- **Micro-Interactions:** Subtle border glow on pointer hover, spring physics for buttons, and smooth reveal transitions on scroll.

---

## 2. Color Palette & Design Tokens

### 2.1 Color Tokens (Tailwind Extension)

```javascript
// tailwind.config.js theme extension preview
colors: {
  background: {
    DEFAULT: "#05070E",   // Primary deep cosmic backdrop
    surface: "#0B1120",   // Elevated card background
    elevated: "#111A2E",  // Modals, dropdowns, and spotlight cards
    subtle: "#162238",    // Hover fills and active states
  },
  primary: {
    DEFAULT: "#3B82F6",   // Tech Blue
    glow: "#60A5FA",
    dark: "#1D4ED8",
  },
  accent: {
    cyan: "#06B6D4",      // High-energy cyber cyan
    purple: "#8B5CF6",    // EdTech royalty purple
    emerald: "#10B981",   // Success / active verification green
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.08)",
    highlight: "rgba(59, 130, 246, 0.4)",
    glow: "rgba(6, 182, 212, 0.3)",
  },
  text: {
    primary: "#F8FAFC",   // High-contrast clean white
    secondary: "#94A3B8", // Neutral slate for descriptions
    muted: "#64748B",     // Secondary badges, copyright, subtle labels
  }
}
```

### 2.2 Semantic Usage Matrix

| Element | Background / Fill | Border | Text Color |
| :--- | :--- | :--- | :--- |
| **Page Base** | `#05070E` | None | `#F8FAFC` |
| **Card / Container** | `rgba(15, 23, 42, 0.65)` + `backdrop-blur-lg` | `1px solid rgba(255,255,255,0.08)` | `#F8FAFC` / `#94A3B8` |
| **Primary Button** | Gradient: `from-blue-600 to-cyan-500` | `1px solid rgba(255,255,255,0.2)` | `#FFFFFF` |
| **Secondary Button**| `rgba(255, 255, 255, 0.05)` | `1px solid rgba(255,255,255,0.12)` | `#E2E8F0` |
| **Pill / Badge** | `rgba(59, 130, 246, 0.1)` | `1px solid rgba(59,130,246,0.3)` | `#60A5FA` |

---

## 3. Typography System

### 3.1 Font Families
- **Primary Body & Display:** `Inter` or `Plus Jakarta Sans` (clean, humanist sans-serif optimized for screen legibility).
- **Code / Metrics / Badges:** `JetBrains Mono` or `Fira Code` (monospace for technological edge).

### 3.2 Scale & Hierarchy

| Role | Tailwind Classes | Desktop Size | Mobile Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Display (Hero H1)** | `text-4xl md:text-6xl lg:text-7xl` | 72px | 36px | 800 (Bold) |
| **Section Title (H2)** | `text-3xl md:text-5xl` | 48px | 30px | 700 (Bold) |
| **Card Title (H3)** | `text-xl md:text-2xl` | 24px | 20px | 600 (SemiBold) |
| **Section Tagline** | `text-xs md:text-sm uppercase tracking-wider` | 14px | 12px | 600 (Mono) |
| **Body Large** | `text-lg md:text-xl text-slate-300` | 20px | 16px | 400 (Regular) |
| **Body Standard** | `text-sm md:text-base text-slate-400` | 16px | 14px | 400 (Regular) |
| **Micro Caption** | `text-xs text-slate-500` | 12px | 12px | 500 (Medium) |

---

## 4. UI Components & Interaction Rules

### 4.1 Buttons
- **Primary CTA (`MagneticButton`):**
  - Magnetic pull towards cursor on desktop (`Framer Motion spring`).
  - Gradient background: `linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)`.
  - Box-shadow glow: `0 0 20px rgba(37, 99, 235, 0.4)`.
  - Hover: Scale 1.02 with increased ambient glow.
- **Secondary Ghost Button:**
  - Glass stroke: `border border-white/10 hover:border-white/25 hover:bg-white/5`.
  - Transition duration: `200ms ease-in-out`.

### 4.2 Spotlight Card (`SpotlightCard`)
- Radial gradient mask tracking mouse coordinates `(x, y)` across the container.
- Border illumination: `border-slate-800` transitioning to `border-blue-500/50` near cursor position.
- Smooth scale on hover: `scale-[1.01]`.

### 4.3 Section Heading Standard (`SectionHeading`)
Every major section must follow the universal header schema:
1. **Mono Eyebrow Badge:** e.g., `// FEATURED PROGRAMS` (Cyan glow, mono uppercase).
2. **Main Section Title:** High-impact gradient headline (White fading into Light Slate).
3. **Subtitle Paragraph:** Maximum width `max-w-2xl`, muted slate color for clarity.

---

## 5. Spacing, Layout & Responsive Grid

- **Container Constraint:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Section Spacing:**
  - Desktop: `py-24` or `py-32` (96px to 128px between section blocks).
  - Mobile: `py-16` (64px vertical clearance).
- **Grid Layouts:**
  - Hero & What We Do: `grid grid-cols-1 md:grid-cols-2 gap-8`.
  - Programs & SaaS: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
  - Statistics: `grid grid-cols-2 md:grid-cols-4 gap-6`.
  - Footer: `grid grid-cols-2 md:grid-cols-5 gap-8`.

---

## 6. Motion & Visual Effects Standards

1. **Lightfall / Canvas Background (React Bits):**
   - Must use `pointer-events-none` so underlying text selection and button clicks are never intercepted.
   - Dark linear mask overlay (`bg-gradient-to-b from-transparent via-[#05070E]/70 to-[#05070E]`) to guarantee text contrast $\ge 4.5:1$.
2. **Scroll Reveals (`Reveal.jsx`):**
   - Fade up with slight vertical displacement: `opacity: 0, y: 24` $\rightarrow$ `opacity: 1, y: 0`.
   - Trigger once per page session (`viewport: { once: true }`).
3. **Performance Throttling on Touch / Mobile:**
   - Magnetic calculations and mouse spotlight coordinates are disabled on touch devices (`@media (pointer: coarse)` or mobile breakpoint).
