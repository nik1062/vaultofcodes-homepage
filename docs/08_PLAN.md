# 08. PLAN.md — Implementation Roadmap & Execution Phases

**Project:** VaultofCodes Main Homepage  
**Methodology:** Phased Incremental Delivery (Foundation → Structure → Sections → Polish → Verification)  
**Objective:** Maintain a working, deployable build at every step, preventing animations from blocking layout completion.

---

## 🗺️ Project Milestones Overview

```
Phase 1: Setup & Data Foundation
   └── Step 1: Project Scaffolding & Git/Vercel Pipeline
   └── Step 2: Design Tokens & Centralized `data/content.js`

Phase 2: Frame & Core Build
   └── Step 3: Shell Components (Navbar & Footer)
   └── Step 4: Hero Section & React Bits Canvas Background
   └── Step 5: Core Content Grids (What We Do, Programs, Software & SaaS)
   └── Step 6: Narrative & Metrics (Why Us, Statistics, How It Works Roadmap)
   └── Step 7: Conversion & Social Proof (Community Marquee & Final CTA)

Phase 3: Motion Polish & Mobile Adaptation
   └── Step 8: Micro-Interactions (Magnetic Buttons, Spotlight Glow, Reveal)
   └── Step 9: Comprehensive Responsive Pass across 7 Viewports

Phase 4: Optimization, Testing & Deliverables
   └── Step 10: Performance Pass (Lighthouse $\ge 85$, Bundle Size, Accessibility)
   └── Step 11: Final Documentation, Screenshots, Demo Video & Production Release
```

---

## 📋 Detailed Step-by-Step Execution Plan

### Phase 1: Foundation & Planning

#### Step 1: Project Scaffolding & CI/CD
- Initialize Next.js project with App Router: `npx create-next-app@latest vaultofcodes-home --javascript --tailwind --eslint --app`.
- Configure `@/*` path alias in `jsconfig.json`.
- Initialize Git repository, push initial commit, and connect Vercel deployment.
- **Verification Gate:** Default Next.js page compiles and deploys to Vercel without warnings.

#### Step 2: Design Tokens & Static Data Foundation
- Extend `tailwind.config.js` with dark theme palette (`#05070E`, `#0B1120`, cyber blue, cyan, purple).
- Add custom utility classes for glassmorphism and subtle border glows in `app/globals.css`.
- Create `data/content.js` containing all typed dummy arrays (Programs, SaaS products, Stats, Testimonials, Nav/Footer links).
- **Verification Gate:** `content.js` exports cleanly without syntax errors and covers all PRD requirements.

---

### Phase 2: Core Build & Sections

#### Step 3: Global Shell (Navbar & Footer)
- Build `components/layout/Navbar.jsx` with brand logo, nav links, smooth scroll anchors, and mobile drawer for screens `< 768px`.
- Build `components/layout/Footer.jsx` with 5 columns: Company Info, Programs, Software, Resources, Legal & Copyright.
- Render both in `app/layout.jsx` around `{children}`.
- **Verification Gate:** Frame exists; clicking nav items scrolls to target anchors or triggers safe handlers; mobile hamburger expands/collapses cleanly.

#### Step 4: Hero Section with React Bits Background
- Build `components/effects/HeroBackground.jsx` implementing canvas lightfall / floating lines with dynamic SSR import (`ssr: false`).
- Build `components/sections/Hero.jsx`: High-contrast H1, subtitle, and primary/secondary CTAs ("Explore Programs", "Explore Software").
- Overlay dark gradient mask to ensure contrast ratio $\ge 4.5:1$.
- **Verification Gate:** Hero headline is legible across 375px to 1920px; canvas pauses when scrolled out of view.

#### Step 5: High-Impact Card Sections
- Build `components/ui/SpotlightCard.jsx` tracking pointer coordinates.
- Implement `components/sections/WhatWeDo.jsx`: Split EdTech vs Software & SaaS.
- Implement `components/sections/Programs.jsx`: 5+ course cards with difficulty badges and technology tags.
- Implement `components/sections/SoftwareSaaS.jsx`: 3 flagship product cards (VaultVerify, VaultCareer, VaultHire).
- **Verification Gate:** All cards render data directly from `content.js`; hover spotlight reacts accurately.

#### Step 6: Narrative & Metrics Sections
- Implement `components/sections/WhyUs.jsx`: 6 value-proposition feature pillars.
- Implement `components/ui/Counter.jsx` with scroll trigger.
- Implement `components/sections/Stats.jsx`: 4 animated metrics (50K+ Students, 100+ Programs, 10K+ Projects, 50+ Workshops).
- Implement `components/sections/HowItWorks.jsx`: 4 connected steps (Discover → Learn → Build → Launch) with animated connecting path.
- **Verification Gate:** Counters count up once when scrolled into view; step connecting line scales cleanly.

#### Step 7: Social Proof & Conversion CTA
- Build `components/ui/Marquee.jsx` for infinite horizontal scroll.
- Implement `components/sections/Community.jsx`: Student quotes, project showcases, and star ratings.
- Implement `components/sections/FinalCTA.jsx`: Glowing call-to-action banner.
- Assemble all 11 sections in `app/page.jsx`.
- **Verification Gate:** Full page scrolls seamlessly from Hero to Footer with all content present.

---

### Phase 3: Polish & Responsive Adaptation

#### Step 8: Motion & Interaction Polish
- Integrate `components/ui/Reveal.jsx` across all section containers for staggered scroll entry.
- Implement `components/ui/MagneticButton.jsx` on main CTAs.
- Implement `hooks/useReducedMotion.js` to eliminate vestibular disorientation for users with accessibility settings enabled.
- **Verification Gate:** Page motion feels fluid at 60fps; turning on system reduce-motion immediately disables transitions.

#### Step 9: Multi-Device Responsive Sweep
- Audit layout at: 1920px, 1440px, 1280px, 768px, 414px, 390px, and 375px.
- Adjust font sizes, margins, card grid columns, and mobile menu z-indexes.
- **Verification Gate:** Zero horizontal scrollbar across all breakpoints; all text wraps comfortably.

---

### Phase 4: Verification, Deliverables & Launch

#### Step 10: Performance & Quality Audit
- Run `npm run build` to confirm zero compilation errors.
- Run Lighthouse mobile audit: target Performance $\ge 85$, Accessibility $\ge 95$, Best Practices $\ge 95$, SEO $\ge 95$.
- Verify console in Chrome DevTools shows 0 errors or warnings.
- **Verification Gate:** All checks green.

#### Step 11: Final Packaging & Submission
- Finalize root `README.md` with instructions, architecture summary, and tech stack details.
- Capture high-resolution screenshots at desktop, tablet, and mobile dimensions.
- Record short 60-second video demo showcasing hover effects, magnetic buttons, mobile drawer, and smooth scrolling.
- Deploy final production build to Vercel.
- **Verification Gate:** All internship submission deliverables fulfilled.
