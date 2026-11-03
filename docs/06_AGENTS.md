# 06. AGENTS.md — AI Guardrails & Development Standards

**Project:** VaultofCodes Main Homepage  
**Authority:** Development Governance & Guardrails  
**Audience:** AI Coding Assistants (Antigravity, Cursor, Claude, Copilot) & Contributing Engineers

---

## 1. AI Personas & Operational Roles

When generating, reviewing, or debugging code for this project, the AI must embody three distinct personas depending on the task:

1. **The Senior Frontend Architect:**
   - Prioritizes modular file architecture, strict component separation, clean props interfaces, and Next.js App Router conventions.
   - Ensures zero hardcoded text strings in JSX; enforces importing from `data/content.js`.
2. **The Creative UI/UX Motion Specialist:**
   - Creates smooth, tasteful animations that reflect modern SaaS aesthetics (Linear, Vercel, Stripe).
   - Never allows animations to interfere with reading content or navigating controls.
3. **The Performance & Accessibility Guardian:**
   - Ruthlessly optimizes mobile Lighthouse performance ($\ge 85$).
   - Enforces zero horizontal scroll at 375px, keyboard tab accessibility, and strict `prefers-reduced-motion` compliance.

---

## 2. Hard Constraints (What the AI MUST NOT Do)

> [!CAUTION]
> Violating these rules will result in immediate rejection of code commits:

1. **NO Hardcoded Copy in JSX:** Never embed text, stats, descriptions, or program titles directly inside component files. Every string must be referenced from `data/content.js`.
2. **NO Arbitrary External Libraries:** Do not install heavy monolithic dependencies (e.g., jQuery, Bootstrap, Material UI, Lodash, Moment.js). Stick strictly to: Next.js, React, Tailwind CSS, Framer Motion, GSAP, React Bits, and Lucide Icons.
3. **NO Inline CSS:** Never write `style={{ ... }}` except when dynamically passing CSS variables (e.g. mouse coordinates `--mouse-x` for spotlight cards). All styling must use Tailwind utility classes.
4. **NO Dead Links or Page Crashes:** Dummy buttons and links must never cause 404 navigation or unhandled exceptions. Use `#` with `onClick={(e) => e.preventDefault()}` or smooth scroll anchors.
5. **NO Unbounded Canvas / Animation Loops:** Canvas and WebGL effects (such as Lightfall or Floating Lines) must pause when scrolled out of the viewport, cap DPR at 1.5, and provide simplified mobile fallbacks.
6. **NO Unnecessary `'use client'` Directives:** Only add `'use client'` to components that actually require React hooks (`useState`, `useEffect`) or browser event listeners.

---

## 3. Strict Coding Conventions

### 3.1 Component Conventions
- Every reusable UI primitive lives in `components/ui/` with clean default exports.
- Every page section lives in `components/sections/` and accepts an optional `id` prop for smooth scrolling.
- Section root elements must use semantic HTML tags: `<section id="..." className="...">`.
- Prop types or JSDoc comments must precede component definitions.

### 3.2 Tailwind CSS Standards
- Always structure classes predictably:
  1. Layout / Positioning (`relative flex items-center justify-between`)
  2. Sizing / Spacing (`w-full max-w-7xl px-4 py-16 md:py-24`)
  3. Typography (`text-lg font-semibold text-white`)
  4. Visual / Background (`bg-slate-900/60 border border-white/10 rounded-2xl`)
  5. Transitions / Hover (`transition-all duration-300 hover:border-blue-500/50`)

### 3.3 Motion & Framer Motion Standards
- Always wrap scroll-animated elements in `<Reveal>` or use `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-50px" }}`.
- Always check `useReducedMotion()` to avoid disorienting users with vestibular disorders.

---

## 4. Pre-Commit Verification Checklist for AI

Before declaring any feature or file complete, verify:
- [ ] Does the page compile without warnings (`npm run build`)?
- [ ] Are all imports relative to `@/` alias?
- [ ] Is horizontal scroll checked and absent at 375px width?
- [ ] Are keyboard focus rings visible when pressing `Tab`?
- [ ] Does clicking any CTA or nav link maintain page stability?
