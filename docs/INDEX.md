# 📑 VaultofCodes Blueprint Master Index — The 15-Prompt Foundation

> **"The Golden Rule:** Every prompt treats the previous files as the absolute *Source of Truth*. The AI must read the previous files before writing new code, preventing it from drifting off-topic."

This index maps the complete 15-file blueprint generated specifically for **VaultofCodes Main Homepage (Final Project 2)**, combining the requirements from `VaultofCodes Homepage PRD, SRD & TRD.pdf`, `36d4f3c1-2eb7-4a6d-a19f-2b4de2bfe1b6 (1).pdf` (Assignment Brief), and `Vibe Coding Blueprint.pdf`.

---

## 🧭 Master Document Map

| Phase | File | Title & Scope | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1: Foundation & Planning** | [`01_PRD.md`](./01_PRD.md) | **Product Requirements Document:** Core problem, audience, dual EdTech + SaaS positioning, scope, success metrics, deliverables. | ✅ Ready |
| | [`02_DESIGN.md`](./02_DESIGN.md) | **Design & UI Rulebook:** Cyber-SaaS dark theme, color tokens, typography scales, spotlight cards, magnetic buttons, spacing rules. | ✅ Ready |
| | [`03_ARCHITECTURE.md`](./03_ARCHITECTURE.md) | **System Architecture:** Next.js App Router tree, folder hierarchy, Server vs Client boundaries, zero-API local data flow. | ✅ Ready |
| **Phase 2: Data & Backend** | [`04_DATABASE.md`](./04_DATABASE.md) | **Database Schema & Data Models:** Strongly typed contracts for `data/content.js` (Programs, Products, Stats, Journey, Testimonials) & future Prisma schema. | ✅ Ready |
| | [`05_API.md`](./05_API.md) | **API Contracts & Interface Specs:** Client data accessor service, dummy CTA / login handlers, and future REST API specification. | ✅ Ready |
| | [`06_AGENTS.md`](./06_AGENTS.md) | **AI Guardrails & Coding Standards:** Personas, hard constraints (no hardcoded strings, no inline styles, no dead links), Tailwind rules. | ✅ Ready |
| **Phase 3: Execution & Features** | [`07_README.md`](./07_README.md) | **Project Overview & Quick Start:** Repository overview, tech stack, installation instructions, effects catalogue, verification matrix. | ✅ Ready |
| | [`08_PLAN.md`](./08_PLAN.md) | **Implementation Roadmap:** Phased 11-step execution order (setup, shell, hero, grids, narrative, marquee, polish, testing, launch). | ✅ Ready |
| | [`09_SETUP.md`](./09_SETUP.md) | **Local Environment & Config:** Node.js/PowerShell commands, dependency installs, `.env.example`, path aliasing, script definitions. | ✅ Ready |
| | [`10_FEATURES.md`](./10_FEATURES.md) | **Feature Implementation Manual:** Technical specs, interaction states, and implementation steps for all 11 homepage features. | ✅ Ready |
| **Phase 4: Security, External & Stability**| [`11_AUTH.md`](./11_AUTH.md) | **Authentication & Security:** Mock login UX behavior, frontend security headers, XSS prevention, and future Dual-Token JWT blueprint. | ✅ Ready |
| | [`12_MCP.md`](./12_MCP.md) | **Model Context Protocol & AI Tooling:** Workspace rules, PowerShell conventions, tool calling safety, context preservation. | ✅ Ready |
| | [`13_INTEGRATIONS.md`](./13_INTEGRATIONS.md) | **Third-Party Services:** React Bits canvas configuration, Lucide icon resolvers, Framer Motion/GSAP engines, Vercel deployment. | ✅ Ready |
| | [`14_TESTING.md`](./14_TESTING.md) | **Test Strategy & Quality Assurance:** 7-breakpoint responsive matrix (375px to 1920px), Lighthouse criteria ($\ge 85$), accessibility checks. | ✅ Ready |
| | [`15_DEBUGGING.md`](./15_DEBUGGING.md) | **Error Handling & Troubleshooting:** Playbook for hydration errors, canvas SSR errors, mobile lag mitigations, horizontal overflow fixes. | ✅ Ready |

---

## 🚀 How to Use These Documents in Vibe Coding

1. **Before writing code for any feature:** Have the AI read the corresponding numbered document (e.g. read `02_DESIGN.md` and `10_FEATURES.md` before building a section).
2. **When defining data:** Always import from `@/data/content` matching the schema in `04_DATABASE.md`.
3. **When verifying work:** Follow the verification checklist in `14_TESTING.md` and troubleshoot using `15_DEBUGGING.md`.
