# 10. FEATURES.md — Step-by-Step Feature Implementation Manual

**Project:** VaultofCodes Main Homepage  
**Purpose:** Detailed technical specifications, UI state logic, props, and step-by-step implementation instructions for all 11 homepage features.

---

## 1. Feature Index

| # | Feature / Component | File Location | Key Interactions |
| :--- | :--- | :--- | :--- |
| **01** | Sticky Responsive Navbar | `components/layout/Navbar.jsx` | Scroll glass blur, mobile drawer, smooth anchors |
| **02** | Hero Section & Canvas | `components/sections/Hero.jsx` | React Bits Lightfall/Lines, magnetic CTAs |
| **03** | What We Do Split Cards | `components/sections/WhatWeDo.jsx` | Dual hover cards (EdTech vs SaaS) |
| **04** | Featured Programs Grid | `components/sections/Programs.jsx` | Responsive course cards, tech pills, hover CTA |
| **05** | Software & SaaS Spotlight | `components/sections/SoftwareSaaS.jsx` | Dynamic pointer spotlight border glow |
| **06** | Why VaultofCodes | `components/sections/WhyUs.jsx` | 6 feature blocks with icons and hover lift |
| **07** | Animated Statistics | `components/sections/Stats.jsx` | 4 count-up numbers triggered on viewport entry |
| **08** | How It Works Roadmap | `components/sections/HowItWorks.jsx` | 4-step sequence with animated SVG connector |
| **09** | Community Proof Marquee | `components/sections/Community.jsx` | Infinite horizontal scroll with pause on hover |
| **10** | Final Conversion CTA | `components/sections/FinalCTA.jsx` | Pre-footer gradient glow box with dual CTAs |
| **11** | Global Multi-Column Footer | `components/layout/Footer.jsx` | Complete sitemap, newsletter dummy form, legal |

---

## 2. Step-by-Step Feature Implementation Details

### Feature 01: Sticky Responsive Navbar
- **Step 1:** Track scroll position using `window.scrollY`. When `scrollY > 20`, apply backdrop blur `backdrop-blur-md bg-slate-950/80 border-b border-white/10`.
- **Step 2:** Desktop layout renders logo on left, 6 nav links in center (`Home`, `Programs`, `Software`, `About`, `Career`, `Free Tests`), and "Login" CTA button on right.
- **Step 3:** Mobile layout below `768px` replaces links with an animated hamburger button (`lucide-react` `Menu` / `X`). Clicking toggles a mobile slide-down menu with staggered Framer Motion item reveals.
- **Step 4:** Clicking any nav item smoothly scrolls to the section anchor (`#programs`, `#software`, etc.) and closes the mobile drawer.
- **Step 5:** Clicking "Login" triggers a dummy modal with message: *"Portal access is open to enrolled students."*

### Feature 02: Hero Section & React Bits Background
- **Step 1:** Mount `components/effects/HeroBackground.jsx` with dynamic import (`ssr: false`) to avoid server-side canvas mismatch.
- **Step 2:** Place a dark radial overlay mask (`bg-gradient-to-b from-transparent via-[#05070E]/60 to-[#05070E]`) to ensure the headline has a contrast ratio $\ge 4.5:1$.
- **Step 3:** Render eyebrow badge: `// NEXT-GEN TECHNOLOGY ECOSYSTEM`.
- **Step 4:** Render H1: *"Learn technology. Build with technology. Experience technology."* with gradient text on key words.
- **Step 5:** Render dual CTAs: Primary "Explore Programs" (smooth scrolls to `#programs`) and Secondary "Explore Software" (smooth scrolls to `#software`).

### Feature 03: What We Do (Dual Split Cards)
- **Step 1:** Render two equal-width cards in a responsive grid (`grid-cols-1 md:grid-cols-2`).
- **Step 2:** Card 1: **Technology Education (EdTech)** — highlights practical training, live cohorts, real-world internships, and mentorship.
- **Step 3:** Card 2: **Software & SaaS Innovation** — highlights enterprise products, verification systems, and developer tools.
- **Step 4:** Apply subtle 3D hover lift (`hover:-translate-y-1 hover:border-blue-500/40 transition-all`).

### Feature 04: Featured Programs Grid
- **Step 1:** Import `programs` array from `@/data/content`.
- **Step 2:** Display 5 core courses: Full-Stack Web Development, Python & Machine Learning, AI & Prompt Engineering, Cybersecurity Defense, and Ethical Hacking.
- **Step 3:** Each card renders: Category pill, Course Title, Duration ("12 Weeks"), 2-line Description, Technology tags (`Next.js`, `Docker`, `Python`), and "View Curriculum" CTA.
- **Step 4:** Hover state illuminates card border and animates right arrow icon on the CTA.

### Feature 05: Software & SaaS Ecosystem
- **Step 1:** Import `products` array from `@/data/content`.
- **Step 2:** Render 3 flagship SaaS products: **VaultVerify** (Credential Verification), **VaultCareer** (Student Intelligence), **VaultHire** (Internship Management).
- **Step 3:** Wrap cards inside `SpotlightCard.jsx` which recalculates mouse position via `onPointerMove` and paints a radial gradient highlight.
- **Step 4:** Include "Live", "Beta", or "Enterprise" status badges.

### Feature 06: Why VaultofCodes (Value Propositions)
- **Step 1:** Render a 6-item grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Step 2:** Six pillars:
  1. Practical-First Learning
  2. Industry-Grade Projects
  3. Career Acceleration
  4. SaaS Product Exposure
  5. Mentorship from Active Engineers
  6. Global Developer Community
- **Step 3:** Include numbered indices (`01` through `06`) in monospace font and distinct accent icons.

### Feature 07: Statistics Section (Animated Counters)
- **Step 1:** Render 4 stats in a responsive grid (`grid-cols-2 md:grid-cols-4`):
  - **50,000+** Students Empowered
  - **100+** Structured Programs
  - **10,000+** Production Projects Built
  - **50+** Tech Workshops Conducted
- **Step 2:** Implement `Counter.jsx` using `framer-motion` `useInView` or GSAP tween.
- **Step 3:** Counter animates smoothly from 0 to target value once when entering viewport.

### Feature 08: How It Works (The 4-Step Journey)
- **Step 1:** Render 4 progressive steps:
  1. **Discover:** Assess strengths and choose specialized track.
  2. **Learn:** Master modern frameworks through guided engineering cohorts.
  3. **Build:** Engineer real-world production SaaS and open-source software.
  4. **Launch:** Earn verifiable credentials and transition into tech careers.
- **Step 2:** Draw SVG connector line between steps. On mobile, line flips to a clean vertical left-border timeline.

### Feature 09: Community & Student Proof
- **Step 1:** Implement infinite ticker `Marquee.jsx` containing at least 6 student reviews.
- **Step 2:** Each review card includes student name, role/placement, verified badge, quote, and 5-star rating.
- **Step 3:** Marquee pauses when user hovers mouse over any card.

### Feature 10: Final Conversion CTA
- **Step 1:** Position directly above the footer.
- **Step 2:** High-energy dark gradient box with ambient glow (`shadow-[0_0_50px_rgba(59,130,246,0.2)]`).
- **Step 3:** Title: *"Ready to Build Your Future in Tech?"*.
- **Step 4:** Dual action buttons with spring hover physics (`MagneticButton`).

### Feature 11: Global Footer
- **Step 1:** Render top branding with logo, tagline, and mock newsletter subscription input.
- **Step 2:** 4 link columns: Programs, Software & Products, Resources, Company & Legal.
- **Step 3:** Bottom row: Social media links (GitHub, LinkedIn, Twitter/X, Discord) and copyright text.
- **Step 4:** Dummy link safety: all links use `#` or safe anchors to prevent 404s.
