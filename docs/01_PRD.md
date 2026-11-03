# 01. PRD.md — Product Requirements Document

**Project Name:** VaultofCodes Main Homepage (Final Project 2)  
**Author:** Nikunj (@nikunj)  
**Version:** 1.0.0  
**Status:** Approved for Build  
**Context:** VaultofCodes Web Development Internship — Capstone Assignment

---

## 1. Executive Summary & Vision

VaultofCodes is a hybrid technology enterprise bridging **EdTech (practical technology education, workshops, internships)** and **Software & SaaS Products (enterprise developer tools, credential verification, recruitment platforms)**. 

The primary objective of this project is to build a ground-up, production-grade homepage that instantly establishes VaultofCodes as a modern, high-tier technology startup rather than a traditional educational coaching institute.

### Positioning Statement
> *"Learn technology. Build with technology. Experience technology."*  
> VaultofCodes brings together hands-on engineering education and proprietary SaaS products in one unified modern developer ecosystem.

---

## 2. Core Problem & Objectives

### 2.1 The Problem
Conventional EdTech websites look static, cluttered, academic, and outdated. They fail to reflect the high-velocity, software-driven culture that modern developers, engineering students, and enterprise recruiters expect. Furthermore, existing portals fail to showcase that VaultofCodes is both an education provider **and** a software innovation house.

### 2.2 Project Goals
1. **Instant First-Impression Impact:** Communicate the dual identity (EdTech + SaaS) above the fold within 5 seconds of arrival.
2. **Modern SaaS Visual Standard:** Leverage dark-mode aesthetics, interactive WebGL/canvas backgrounds (React Bits), smooth Framer Motion/GSAP scroll interactions, and responsive card layouts.
3. **Flawless Multi-Device Responsiveness:** Guarantee seamless layout adaptations from 375px mobile screens up to 1920px ultra-wide monitors without horizontal overflow or degraded performance.
4. **Developer-Friendly & Modular Architecture:** Keep all mock data centralized in `data/content.js` so engineering teams can swap dummy copy for production endpoints without rewriting UI components.

---

## 3. Target Audience & Personas

| Target User | Needs & Motivations | Homepage Win Condition |
| :--- | :--- | :--- |
| **Engineering & College Students** | Looking for industry-relevant internships, modern tech stacks, hands-on workshops, and credible training. | Sees cutting-edge curriculum (AI, Full-Stack, Cyber), social proof stats, and easy CTA to explore programs. |
| **Colleges & Training Partners** | Evaluating curriculum rigor, institutional credibility, and corporate alignment. | Observes structured tracks, verified stats (50k+ students), and professional SaaS pedigree. |
| **Recruiters & Tech Enterprises** | Seeking top-tier junior talent and software solutions (VaultVerify, VaultHire). | Identifies SaaS products and verifiable student skill sets. |
| **VaultofCodes Internal Team** | Needs an easily maintainable, clean component architecture. | Enjoys 100% modular Next.js components decoupled from copy via `content.js`. |

---

## 4. Scope of Work

### 4.1 In Scope (MVP)
- **Framework & Stack:** Next.js (App Router), React, Tailwind CSS, Framer Motion, GSAP, React Bits, Lucide Icons.
- **Top Navigation (Sticky & Responsive):** Links to Home, Programs, Software, About, Career, Free Tests, plus Login CTA button. Mobile slide-out drawer below 768px.
- **8 Core Content Sections:**
  1. *Hero Section:* Dynamic headline, dual CTAs ("Explore Programs", "Explore Software"), interactive React Bits canvas/gradient background.
  2. *What We Do:* Dual category showcase splitting EdTech and Software & SaaS.
  3. *Featured Programs:* Interactive cards showcasing Web Dev, Python, AI/Prompt Engineering, Cybersecurity, Ethical Hacking.
  4. *Software & SaaS Ecosystem:* Spotlight cards highlighting VaultVerify, VaultCareer, and VaultHire.
  5. *Why VaultofCodes:* 6 value-proposition pillars emphasizing practical learning and real projects.
  6. *Statistics Section:* 4 animated counting metrics (Students, Programs, Projects, Workshops).
  7. *How It Works:* 4-step progressive journey (Discover → Learn → Build → Launch) with connected animated timeline.
  8. *Community & Social Proof:* Infinite horizontal marquee of student testimonials and achievements.
- **Conversion CTA Section:** Pre-footer high-impact banner driving traffic to education and software tracks.
- **Global Footer:** Comprehensive multi-column sitemap, company overview, social channels, and legal disclosures.
- **Motion & Accessibility:** `prefers-reduced-motion` compliance, full keyboard navigability, zero layout-shift (CLS).

### 4.2 Out of Scope (Deferred to Future Releases)
- Live backend databases, REST/GraphQL servers, or CMS connections (all content driven by `data/content.js`).
- Functional user registration, database authentication, or payment gateways.
- Multi-page secondary routes (all navbar links anchor smoothly to homepage sections or act as safe dummy links).
- Real proprietary company media/assets (royalty-free icons and dummy data used).

---

## 5. Success Metrics & Non-Negotiables

| Metric / Requirement | Target / Benchmark | Verification Method |
| :--- | :--- | :--- |
| **Mobile Performance** | Lighthouse Score $\ge 85$ | Throttled Mobile Chrome DevTools Audit |
| **Zero Console Errors** | 0 warnings, 0 runtime errors | Production build inspection (`npm run build`) |
| **Responsive Range** | 375px, 390px, 414px, 768px, 1280px, 1440px, 1920px | Manual breakpoint sweep; 0 horizontal scrollbar |
| **Animation Safety** | Disables intense motion if requested | OS `prefers-reduced-motion: reduce` toggle |
| **Dummy Interaction Safety** | No dead 404s or broken page state | 100% safe event handling on placeholder links |

---

## 6. Required Deliverables Checklist
- [ ] Fully functional Next.js application hosted on public Vercel domain.
- [ ] Public GitHub repository with modular, clean commit history.
- [ ] Root `README.md` detailing architecture, dependencies, setup instructions, and effects catalogue.
- [ ] Multi-resolution desktop, tablet, and mobile screenshots.
- [ ] 60-second video demo showing interactions, scroll animations, mobile drawer, and responsiveness.
