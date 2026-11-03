# 13. INTEGRATIONS.md — Third-Party Services & Component Integrations

**Project:** VaultofCodes Main Homepage  
**Purpose:** Implementation patterns for React Bits effects, animation engines, hosting infrastructure, and future cloud services.

---

## 1. UI Effect Integrations

### 1.1 React Bits (Interactive Canvas Effects)
React Bits provides the visual signature for VaultofCodes.

- **Primary Effect:** **Lightfall** or **Floating Lines** for the Hero background.
- **Integration Architecture:**
  - Placed in `components/effects/HeroBackground.jsx`.
  - Loaded dynamically to avoid Server-Side Rendering (SSR) canvas `window is not defined` errors:
    ```javascript
    import dynamic from "next/dynamic";

    const DynamicCanvas = dynamic(
      () => import("./CanvasEffect"), 
      { ssr: false, loading: () => <div className="absolute inset-0 bg-[#05070E]" /> }
    );
    ```
- **Performance Constraints:**
  - Cap device pixel ratio: `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))`.
  - Pause RAF (requestAnimationFrame) loop when `document.hidden` or off-screen via `IntersectionObserver`.
  - Overlay gradient layer: `pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#05070E] via-transparent to-transparent`.

---

### 1.2 Lucide React (Icon System)
- **Library:** `lucide-react`
- **Pattern:** Import only named icon components to guarantee tree-shaking:
  ```javascript
  import { Shield, Code, Sparkles, Terminal, ArrowRight, ExternalLink } from "lucide-react";
  ```
- **Dynamic Icon Resolver:**
  In `components/ui/IconRenderer.jsx`, map string keys from `data/content.js` to actual Lucide components to maintain clean separation of data and UI.

---

### 1.3 Motion Engines: Framer Motion + GSAP

| Engine | Responsibility in VaultofCodes | Why Used |
| :--- | :--- | :--- |
| **Framer Motion** | Layout transitions, spring physics, cursor spotlight tracking, `<Reveal>` scroll triggers, mobile drawer accordion | Declarative React integration, handles mount/unmount cleanly |
| **GSAP (GreenSock)**| Fast, ultra-smooth numerical counter tweens in `components/sections/Stats.jsx` | Precise ease-out curve, zero re-renders during high-frequency numerical updates |

---

## 2. Deployment & Hosting Pipeline (Vercel)

- **Hosting Platform:** Vercel.
- **Git Provider:** GitHub (`vaultofcodes-home` repository).
- **Deployment Flow:**
  - Pushes to `main` branch trigger automated edge preview and production builds.
  - Vercel automatically runs `next build`.
  - Global edge CDN caches optimized static HTML, WebP images, and JS chunks.

---

## 3. Future Cloud & Third-Party Architecture

When extending VaultofCodes into a complete production SaaS platform:

```
+-----------------------------------------------------------+
|                   VaultofCodes Platform                   |
+-----------------------------------------------------------+
       |                  |                  |
       v                  v                  v
+--------------+   +--------------+   +--------------+
|    Stripe    |   |   SendGrid   |   |    AWS S3    |
| (Payments)   |   | (Email/Notif)|   |  (Storage)   |
+--------------+   +--------------+   +--------------+
```

1. **Payment Gateway (Stripe):**
   - Webhooks handling enrollment checkout sessions (`checkout.session.completed`).
2. **Transactional Communications (SendGrid / Resend):**
   - Welcome onboarding emails, workshop reminders, certificate issuance alerts.
3. **Cloud Asset Storage (AWS S3 / Cloudflare R2):**
   - Student project submissions, capstone code archives, and generated PDF credentials.
