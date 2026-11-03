# 14. TESTING.md — Comprehensive Quality Assurance & Test Strategy

**Project:** VaultofCodes Main Homepage  
**Purpose:** Multi-layered verification protocol to prove performance, responsiveness, accessibility, and zero-defect runtime stability before deployment.

---

## 1. Testing Philosophy & Verification Layers

Testing is divided into four distinct validation tiers:
1. **Compilation & Static Analysis:** Zero warnings, clean types, and valid build artifacts.
2. **Visual & Multi-Breakpoint Responsive Audit:** Pixel-perfect rendering across mobile, tablet, and ultra-wide viewports.
3. **Interactive & Motion Testing:** Functional verification of buttons, drawer, counters, and reduced-motion preferences.
4. **Performance & Accessibility Auditing (Lighthouse):** Benchmark verification against strict criteria.

---

## 2. Multi-Breakpoint Responsive Test Matrix

Every layout must be explicitly verified at the following test widths in Chrome DevTools:

| Viewport Width | Device Archetype | Mandatory Verification Criteria |
| :--- | :--- | :--- |
| **375px** | iPhone SE (Small Mobile) | Zero horizontal overflow; font sizes scale down; 1-column card grids. |
| **390px** | iPhone 14/15 (Standard Mobile)| Full-width cards with 16px gutter; readable hero title; smooth drawer toggle. |
| **414px** | iPhone Plus / Max | Mobile navigation drawer cleanly covers viewport without layout shifting. |
| **768px** | iPad Mini (Tablet Portrait) | Navbar collapses or switches to compact mode; 2-column card layouts. |
| **1024px** | iPad Pro (Tablet Landscape)| Desktop navigation visible; 2 to 3-column grids activate. |
| **1280px** | MacBook Air (Laptop) | Standard desktop layout; cursor spotlight and magnetic buttons active. |
| **1440px** | High-Res Desktop Monitor | Content constrained to `max-w-7xl` container; balanced margins. |
| **1920px** | Full HD / Ultra-wide Display | Background gradient covers full width; zero content distortion or stretching. |

---

## 3. Mandatory Functional Testing Checklist

Before submitting the build, complete this exhaustive checklist:

- [ ] **Build Compilation:** `npm run build` exits with code 0 and zero lint warnings.
- [ ] **Console Health:** Developer Tools Console exhibits **zero** errors, uncaught promises, or hydration warnings.
- [ ] **Hero Readability:** High-contrast text remains legible over the canvas animation at all 8 test widths.
- [ ] **Interactive Dummy Links:** Clicking any navbar item, CTA, or footer link produces smooth scrolling or mock feedback without 404 navigation.
- [ ] **Navbar Sticking & Blurring:** Scrolling down transitions navbar into translucent blurred glass backdrop (`backdrop-blur-md`).
- [ ] **Mobile Drawer Navigation:** Hamburger button expands menu cleanly; tapping any link smoothly scrolls to target section and closes drawer.
- [ ] **Animated Numerical Counters:** All 4 metric counters count up once upon entering viewport and stop at exact values (50K+, 100+, 10K+, 50+).
- [ ] **Infinite Testimonials Marquee:** Marquee flows continuously and pauses seamlessly when hovered over.
- [ ] **Motion Accessibility (`prefers-reduced-motion`):**
  - Toggle Emulate CSS media feature `prefers-reduced-motion: reduce` in Chrome DevTools Rendering tab.
  - Verify all sliding transitions, magnetic springs, and heavy particle loops are disabled or softened into static renders.
- [ ] **Keyboard Accessibility (Tab Navigation):**
  - Navigate entire page using `Tab` and `Shift + Tab`.
  - Every button, card link, and input receives an active focus indicator (`ring-2 ring-blue-500`).

---

## 4. Automated & Scripted Tests

### 4.1 Content Data Integrity Test (`tests/content.test.js`)
Validates that `data/content.js` strictly conforms to the required data models:

```javascript
import { programs, products, statistics } from "../data/content";

describe("Data Integrity Suite", () => {
  test("All programs possess required keys and categories", () => {
    programs.forEach(prog => {
      expect(prog.id).toBeDefined();
      expect(prog.title).toBeTruthy();
      expect(prog.technologies.length).toBeGreaterThan(0);
    });
  });

  test("All products have key benefits and CTAs", () => {
    products.forEach(prod => {
      expect(prod.name).toBeTruthy();
      expect(prod.keyBenefit).toBeTruthy();
    });
  });

  test("Statistics array contains exactly 4 metrics with positive values", () => {
    expect(statistics.length).toBe(4);
    statistics.forEach(stat => expect(stat.value).toBeGreaterThan(0));
  });
});
```

---

## 5. Performance Benchmarks (Lighthouse)

Run Lighthouse in Chrome DevTools (Throttled Mobile profile, Moto G Power / Slow 4G):

| Audit Category | Target Score | Mandatory Actions if Below Target |
| :--- | :--- | :--- |
| **Performance** | $\ge \mathbf{85}$ | Dynamic import canvas background with `ssr: false`; cap canvas DPR; optimize SVG paths. |
| **Accessibility** | $\ge \mathbf{95}$ | Ensure `aria-label` on hamburger/social buttons; verify contrast ratio $\ge 4.5:1$. |
| **Best Practices**| $\ge \mathbf{95}$ | Ensure all external links include `rel="noopener noreferrer"`; use modern image formats. |
| **SEO** | $\ge \mathbf{95}$ | Set comprehensive metadata (Open Graph, Twitter card, canonical URL) in `app/layout.jsx`. |
