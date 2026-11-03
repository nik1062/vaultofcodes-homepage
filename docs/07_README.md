# 07. README.md — Project Overview & Documentation

<div align="center">

# ⚡ VaultofCodes — Modern Homepage

**A Cutting-Edge Showcase of EdTech Innovation Meets Enterprise Software & SaaS**

*Final Project 2 — Web Development Capstone Internship*  
**Built by:** Nikunj (@nikunj)  
**Live Demo:** [vaultofcodes-homepage.vercel.app](https://vaultofcodes-homepage.vercel.app) *(Deployment Target)*

</div>

---

## 🚀 Overview

VaultofCodes is engineered from the ground up to present the dual identity of an ambitious technology company: **hands-on practical education** (Web Development, AI/Prompt Engineering, Cybersecurity) alongside **proprietary enterprise SaaS software** (VaultVerify, VaultCareer, VaultHire).

Designed using dark-mode cyber minimalism inspired by Linear, Stripe, and Vercel, this single-page application features interactive canvas backgrounds from React Bits, smooth Framer Motion scroll reveals, magnetic CTAs, spotlight cards, and a centralized single source of truth for all content.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | Server Components, automatic font optimization, fast builds |
| **UI Library** | **React** | Reusable declarative component architecture |
| **Styling** | **Tailwind CSS** | Responsive mobile-first utility classes, custom design tokens |
| **Motion** | **Framer Motion** | Spring physics, scroll reveals, layout animations |
| **Animation (Micro)**| **GSAP** | Optimized counter animations and timeline transitions |
| **Visual Effects** | **React Bits** | Interactive canvas background (Lightfall / Floating Lines) |
| **Icons** | **Lucide React** | Lightweight, tree-shakeable SVG icon collection |
| **Deployment** | **Vercel** | Global edge CDN and automatic continuous deployment |

---

## 📂 Key Architecture & Components

```
vaultofcodes-home/
├── app/layout.jsx          # Root layout with Inter font and global dark styling
├── app/page.jsx            # Master single-page composition
├── data/content.js         # Single Source of Truth for all text, stats & items
├── components/
│   ├── layout/             # Sticky Navbar with mobile menu, multi-column Footer
│   ├── sections/           # Hero, WhatWeDo, Programs, SoftwareSaaS, WhyUs,
│   │                       # Stats, HowItWorks, Community, FinalCTA
│   ├── ui/                 # MagneticButton, SpotlightCard, Reveal, Counter, Marquee
│   └── effects/            # React Bits canvas background with mobile fallback
```

---

## ⚡ Quick Start & Installation

### Prerequisites
- Node.js `v18.17+` or `v20+`
- npm `v9+` or yarn / pnpm

### 1. Clone the repository
```bash
git clone https://github.com/nikunj/vaultofcodes-home.git
cd vaultofcodes-home
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
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
