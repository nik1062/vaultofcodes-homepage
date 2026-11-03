# 15. DEBUGGING.md — Error Handling & Troubleshooting Playbook

**Project:** VaultofCodes Main Homepage  
**Purpose:** Comprehensive troubleshooting guides, common failure patterns, diagnostic procedures, and instant fixes for Next.js, Framer Motion, and React Bits issues.

---

## 1. Top Failure Modes & Instant Solutions

### 1.1 Next.js Hydration Mismatch Error
*Symptom:* `Error: Text content does not match server-rendered HTML` or `Hydration failed because the initial UI does not match what was rendered on the server.`
- **Root Cause:** Accessing client-only browser APIs (`window.innerWidth`, `navigator.userAgent`, `localStorage`, or random numbers) during server render.
- **Fix:**
  1. Wrap browser-dependent logic inside `useEffect` with a mounted state flag:
     ```javascript
     const [isMounted, setIsMounted] = useState(false);
     useEffect(() => { setIsMounted(true); }, []);
     if (!isMounted) return <FallbackSkeleton />;
     ```
  2. Or disable SSR for dynamic interactive leaf components:
     ```javascript
     const DynamicComponent = dynamic(() => import("./InteractiveComponent"), { ssr: false });
     ```

---

### 1.2 `ReferenceError: window is not defined`
*Symptom:* Build crash or server exception during `next build` or initial page load.
- **Root Cause:** Direct invocation of `window`, `document`, or WebGL context inside component body or top-level module scope of a Server Component.
- **Fix:**
  1. Add `'use client';` directive to the very top line of the file.
  2. Ensure canvas/WebGL initialization runs strictly inside `useEffect` or behind `typeof window !== 'undefined'` checks.

---

### 1.3 Canvas / WebGL Performance Lag on Mobile
*Symptom:* Mobile frame rate drops below 30fps; device heats up; scrolling feels stuttery.
- **Root Cause:** High Device Pixel Ratio (DPR 3x) rendering hundreds of particles in full resolution on low-power mobile GPUs.
- **Fix:**
  1. In `HeroBackground.jsx`, cap DPR at 1.5:
     ```javascript
     const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
     renderer.setPixelRatio(dpr);
     ```
  2. Implement mobile viewport detection: if `window.innerWidth < 768`, switch from particle physics loop to an animated CSS gradient or reduce particle count by 75%.
  3. Pause the animation render loop via `IntersectionObserver` when the Hero section scrolls out of view.

---

### 1.4 Unwanted Horizontal Page Scroll (Overflow-X)
*Symptom:* Page wobbles or pans horizontally on mobile; body width exceeds screen width.
- **Root Cause:** 
  - Using `w-screen` instead of `w-full` (scrollbar width causes overflow).
  - Absolute positioned ambient glow orbs with `left: -100px` without `overflow-hidden` on parent container.
- **Fix:**
  1. Replace any `w-screen` with `w-full`.
  2. Add `overflow-x-clip` or `overflow-x-hidden` to `<main>` in `app/layout.jsx`:
     ```jsx
     <body className="bg-background text-text-primary antialiased overflow-x-hidden">
     ```

---

### 1.5 Framer Motion / GSAP Scroll Stutter or Memory Leaks
*Symptom:* Animations trigger erratically or trigger repeatedly on every micro-scroll.
- **Root Cause:** Missing `viewport: { once: true }` in Framer Motion, or missing GSAP context cleanup.
- **Fix:**
  1. In Framer Motion:
     ```jsx
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-80px" }}
       transition={{ duration: 0.5, ease: "easeOut" }}
     />
     ```
  2. In GSAP: always clean up triggers on component unmount:
     ```javascript
     useEffect(() => {
       const ctx = gsap.context(() => {
         // GSAP animations
       }, containerRef);
       return () => ctx.revert(); // Crucial cleanup
     }, []);
     ```

---

### 1.6 React Bits Component Dependency Conflicts
*Symptom:* Installing a React Bits effect prompts peer dependency warnings or build crashes.
- **Root Cause:** Hardcoded imports for packages not present in Next.js App Router.
- **Fix:**
  1. Copy the raw component code directly into `components/effects/` rather than treating it as an opaque npm black-box.
  2. Normalize imports to project standard (`@/lib/utils` and `lucide-react`).

---

## 2. Standard Diagnostic Workflow for AI & Developers

When any error or anomaly occurs, execute the following protocol:

```
[Issue Detected]
       |
       v
1. Inspect Terminal Output / Browser Console
   -> Check exact file, line number, and stack trace.
       |
       v
2. Check Component Boundary
   -> Is it missing `'use client'`?
   -> Is it attempting to render `data/content.js` with undefined keys?
       |
       v
3. Verify Against `docs/04_DATABASE.md`
   -> Are object property names matching the contract exactly?
       |
       v
4. Run Clean Build Check
   -> Execute: `npm run build`
   -> Resolve specific compilation or lint error.
       |
       v
5. Verify at Smallest Viewport (375px)
   -> Confirm fix did not create mobile regressions.
```
