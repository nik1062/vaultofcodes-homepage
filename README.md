# ⚡ VaultofCodes — Modern Homepage

> **Learn technology. Build with technology. Experience technology.**  
> *Final Project 2 — Web Development Capstone Internship*  
> **Built by:** Nikunj (@nikunj)  
> **Live Production Site:** [vaultofcodes-home.vercel.app](https://vaultofcodes-home.vercel.app)  
**GitHub Repository:** [github.com/nik1062/vaultofcodes-homepage](https://github.com/nik1062/vaultofcodes-homepage)

---

## 🌟 Overview

VaultofCodes is engineered from the ground up to present the dual identity of an ambitious technology company: **hands-on practical education** (Web Development, AI/Prompt Engineering, Cybersecurity) alongside **proprietary enterprise SaaS software** (VaultVerify, VaultCareer, VaultHire).

Designed using dark-mode cyber minimalism inspired by Linear, Stripe, and Vercel, this single-page application features interactive canvas backgrounds from React Bits, smooth Framer Motion scroll reveals, magnetic CTAs, spotlight cards, and a centralized single source of truth for all content.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | React Server Components, fast Turbopack compilation |
| **UI Library** | **React 19** | Reusable declarative component architecture |
| **Styling** | **Tailwind CSS v4** | Modern CSS theme tokens, responsive breakpoints |
| **Motion** | **Framer Motion** | Spring physics, scroll reveals, layout animations |
| **Animation** | **GSAP & Custom Canvas** | Smooth numerical counters, interactive particle grid |
| **Visual Effects** | **React Bits Style Canvas** | Interactive hero background with mouse proximity response |
| **Icons** | **Lucide React** | Lightweight, tree-shakeable SVG icon collection |
| **Deployment** | **Vercel** | Global edge CDN and automatic continuous deployment |

---

## 📂 Key Architecture & Components

```
vaultofcodes-home/
├── app/
│   ├── layout.js              # Root layout with SEO metadata and global dark styling
│   ├── page.js                # Master single-page composition assembling all 9 sections
│   └── globals.css            # Tailwind layers, marquee keyframes & custom scrollbar
├── data/
│   └── content.js             # Single Source of Truth for all text, stats & items
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Sticky glass header, desktop nav & mobile drawer
│   │   └── Footer.jsx         # Multi-column sitemap, legal, newsletter form
│   ├── sections/
│   │   ├── Hero.jsx           # Eyebrow, headline, dual CTAs, stats row
│   │   ├── WhatWeDo.jsx       # Dual split cards (EdTech vs SaaS)
│   │   ├── Programs.jsx       # Filterable 6-course grid with tech tags
│   │   ├── SoftwareSaaS.jsx   # 3 spotlight product cards (VaultVerify, etc.)
│   │   ├── WhyUs.jsx          # 6 value proposition feature blocks
│   │   ├── Stats.jsx          # 4 scroll-triggered animated counters
│   │   ├── HowItWorks.jsx     # Discover -> Learn -> Build -> Launch roadmap
│   │   ├── Community.jsx      # Infinite horizontal student testimonial marquee
│   │   └── FinalCTA.jsx       # Pre-footer conversion card with dual CTAs
│   ├── ui/
│   │   ├── MagneticButton.jsx # Spring physics pointer magnet CTA
│   │   ├── SpotlightCard.jsx  # Radial gradient pointer spotlight card
│   │   ├── Reveal.jsx         # Scroll fade-and-slide wrapper
│   │   ├── Counter.jsx        # Smooth numerical counter with ease-out
│   │   ├── Marquee.jsx        # Seamless infinite horizontal ticker
│   │   └── SectionHeading.jsx # Standardized eyebrow, title, and subtitle
│   └── effects/
│       └── HeroBackground.jsx # Canvas particle network with mobile fallback
├── hooks/
│   ├── useReducedMotion.js    # Detects OS accessibility reduce-motion preference
│   └── useMediaQuery.js       # Responsive breakpoint observer for JavaScript logic
└── lib/
    └── utils.js               # Tailwind class merger (clsx + tailwind-merge)
```

---

## ⚡ Quick Start & Installation

### Prerequisites
- Node.js `v18.17+` or `v20+`
- npm `v9+` or yarn / pnpm

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## 🎨 Interactive Effects Catalogue

1. **Interactive Hero Canvas:** Dynamic particle / lightfall background that responds to mouse velocity.
2. **Magnetic CTA Buttons:** Buttons that lean toward pointer hover using Framer Motion springs.
3. **Cursor Spotlight Cards:** Dynamic radial glow tracking pointer coordinates on SaaS and program cards.
4. **Animated Numerical Counters:** Counts up to targets (50k+, 100+, 10k+, 50+) when scrolled into view.
5. **Connected Roadmap SVG:** Visual path connecting Discover → Learn → Build → Launch.
6. **Infinite Testimonial Marquee:** Smooth continuous scroll with hover-to-pause functionality.
7. **Accessibility Motion Safety:** Automatically disables heavy animations when `prefers-reduced-motion` is detected.

---

## 📱 Responsive Verification Matrix

Tested and verified across all target viewports:
- **Mobile:** 375px (iPhone SE), 390px (iPhone 14/15), 414px (iPhone Plus)
- **Tablet:** 768px (iPad Mini), 1024px (iPad Pro)
- **Desktop:** 1280px (MacBook Air), 1440px (Desktop), 1920px (Ultra-wide monitor)
