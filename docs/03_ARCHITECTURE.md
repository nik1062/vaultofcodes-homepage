# 03. ARCHITECTURE.md — System Architecture

**Project:** VaultofCodes Main Homepage  
**Architect:** Nikunj (@nikunj)  
**System Type:** Jamstack / Single-Page Client Application  
**Framework:** Next.js (App Router, React 19 / 18, Tailwind CSS)

---

## 1. High-Level System Architecture

The application is structured as a **High-Performance Static / Client Hybrid Single-Page Application (SPA)** rendered via the Next.js App Router. 

Because the assignment scope prohibits live databases or backends and demands blazing fast load times with zero hydration lag, the application utilizes a **Zero-API Local Source-of-Truth architecture**:

```
+-------------------------------------------------------------+
|                       Next.js App Shell                     |
|  (app/layout.jsx + fonts + metadata + globals.css tokens)  |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                      app/page.jsx (Root)                    |
|             Composes Page Sections in Sequential Order      |
+-------------------------------------------------------------+
         |                                           |
         v                                           v
+------------------------+               +------------------------+
|  Static Content Store  |               |  Interactive UI Tree   |
|   `data/content.js`    |               |  (Framer Motion / GSAP)|
+------------------------+               +------------------------+
         |                                           |
         +-------------------+-----------------------+
                             |
                             v
+-------------------------------------------------------------+
|                       DOM Output                            |
|    - Hero with React Bits Canvas Background                |
|    - Spotlight Product / Program Cards                     |
|    - Animated Metrics Counters                              |
|    - SVG Scroll Connected Roadmap                          |
|    - Infinite Testimonials Marquee                         |
+-------------------------------------------------------------+
```

---

## 2. Directory & File Structure

The project lives under `vaultofcodes-home/` (or root project directory):

```
vaultofcodes-home/
├── app/
│   ├── favicon.ico             # App icon
│   ├── globals.css             # Tailwind base/components/utilities & CSS variables
│   ├── layout.jsx              # Global RootLayout (fonts, metadata, smooth scroll)
│   └── page.jsx                # Single-page orchestrator assembling all 11 sections
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky header, desktop navigation & mobile drawer
│   │   └── Footer.jsx          # Multi-column sitemap, legal, dummy social links
│   ├── sections/
│   │   ├── Hero.jsx            # Headline, CTAs, badge, integrated React Bits canvas
│   │   ├── WhatWeDo.jsx        # Dual split cards: EdTech vs Software & SaaS
│   │   ├── Programs.jsx        # Grid of featured courses with category filters
│   │   ├── SoftwareSaaS.jsx    # Spotlight cards showcasing VaultVerify, VaultCareer, etc.
│   │   ├── WhyUs.jsx           # 6 value-proposition feature blocks
│   │   ├── Stats.jsx           # 4 scroll-triggered animated counters
│   │   ├── HowItWorks.jsx      # Discover -> Learn -> Build -> Launch SVG journey
│   │   ├── Community.jsx       # Testimonials marquee & student metrics
│   │   └── FinalCTA.jsx        # Pre-footer glow conversion banner
│   ├── ui/
│   │   ├── MagneticButton.jsx  # Spring physics pointer magnet CTA
│   │   ├── SpotlightCard.jsx   # Radial gradient pointer spotlight card
│   │   ├── Reveal.jsx          # Framer Motion scroll fade-and-slide wrapper
│   │   ├── Counter.jsx         # Smooth numerical counter with ease-out
│   │   ├── Marquee.jsx         # Seamless infinite horizontal ticker
│   │   └── SectionHeading.jsx  # Standardized eyebrow, title, and subtitle
│   └── effects/
│       ├── HeroBackground.jsx  # React Bits WebGL/canvas effect with fallback
│       └── CursorGlow.jsx      # Ambient subtle mouse follower (desktop only)
├── data/
│   └── content.js              # Single Source of Truth for all text, arrays & cards
├── hooks/
│   ├── useReducedMotion.js     # Detects OS accessibility reduce-motion preference
│   └── useMediaQuery.js        # Responsive breakpoint observer for JavaScript logic
├── public/
│   ├── images/                 # Optimized WebP/SVG avatars, logos, mockups
│   └── icons/                  # Favicons and tech logos
├── docs/                       # Complete 15-Prompt Vibe Coding Blueprint suite
├── package.json                # Dependencies, scripts, and build targets
├── tailwind.config.js          # Extended dark theme tokens, animations, glow
└── next.config.js              # Next.js optimization flags
```

---

## 3. Server Component vs. Client Component Boundaries

To achieve Lighthouse scores $\ge 85$ on mobile:
1. **Server Shell (`layout.jsx`, `page.jsx`):**
   - Renders structural HTML markup, fonts (`next/font`), and SEO meta tags without sending heavy client hydration runtime.
2. **Client Islands (`'use client'`):**
   - Applied strictly at component leaf nodes that handle state, browser window metrics, or Framer Motion/canvas animations:
     - `components/effects/HeroBackground.jsx` (Canvas / WebGL)
     - `components/ui/SpotlightCard.jsx` (`onPointerMove`)
     - `components/ui/Counter.jsx` (`useEffect` scroll trigger)
     - `components/layout/Navbar.jsx` (Mobile toggle state)

---

## 4. Data Flow Architecture

1. **Immutable Ingestion:** `data/content.js` exports typed/structured JSON-like JavaScript objects.
2. **Prop Drilling Elimination:** Sections import their respective slice directly from `@/data/content`:
   ```javascript
   import { featuredPrograms } from "@/data/content";
   ```
3. **Card Rendering:** Child UI components (`SpotlightCard`, `MagneticButton`) remain pure presentation layers receiving props (`title`, `description`, `icon`, `tags`, `ctaText`).
4. **Maintenance Boundary:** Zero copy or hardcoded strings exist inside JSX components. Internal teams can update copy, programs, and statistics entirely within `data/content.js`.

---

## 5. Animation & Rendering Pipeline

```
[User Scrolls Into View]
       |
       v
IntersectionObserver (via Framer Motion `whileInView`)
       |
       +---> If `prefers-reduced-motion: true` ---> Instant Render (opacity: 1)
       |
       +---> If Desktop (> 768px) --------------> Spring physics, magnetic pull, WebGL particles
       |
       +---> If Mobile (< 768px) ---------------> Lightweight CSS transform / optimized static gradient
```
