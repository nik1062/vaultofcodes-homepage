# 09. SETUP.md — Local Environment & Development Configuration

**Project:** VaultofCodes Main Homepage  
**Purpose:** Setup guide, environment prerequisites, package dependencies, and local execution scripts.

---

## 1. Prerequisites & System Requirements

Ensure your machine has the following runtimes installed:
- **Node.js:** `v18.17.0` or higher (`v20.x LTS` strongly recommended). Verify with:
  ```powershell
  node -v
  ```
- **npm:** `v9.x` or higher (bundled with Node). Verify with:
  ```powershell
  npm -v
  ```
- **Git:** Latest version. Verify with:
  ```powershell
  git --version
  ```
- **OS:** Windows 10/11, macOS, or Linux. (PowerShell commands are documented for Windows development).

---

## 2. Project Initialization & Dependency Installation

### 2.1 Next.js App Initialization
If creating from scratch inside the project directory:
```powershell
npx create-next-app@latest vaultofcodes-home `
  --javascript `
  --tailwind `
  --eslint `
  --app `
  --src-dir=false `
  --import-alias="@/*"
```

### 2.2 Core UI & Animation Dependencies
Navigate into the application folder and install production dependencies:
```powershell
cd vaultofcodes-home
npm install framer-motion gsap lucide-react clsx tailwind-merge
```

### Dependency Manifest Overview:
- `next` & `react` / `react-dom`: Core application framework.
- `tailwindcss`, `postcss`, `autoprefixer`: Utility styling engine.
- `framer-motion`: Physics-based animations, layout transitions, spring gestures.
- `gsap`: High-precision micro-animations and numerical counter tweens.
- `lucide-react`: Lightweight SVG icons.
- `clsx` & `tailwind-merge`: Class name concatenation helper (`cn()`).

---

## 3. Environment Configuration (`.env.example`)

Create a `.env.example` in the project root:

```env
# VaultofCodes Client Environment Variables
NEXT_PUBLIC_SITE_NAME="VaultofCodes"
NEXT_PUBLIC_SITE_URL="https://vaultofcodes-homepage.vercel.app"
NEXT_PUBLIC_COMPANY_TAGLINE="Learn technology. Build with technology. Experience technology."

# Feature Flags
NEXT_PUBLIC_ENABLE_PARTICLES=true
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

To use locally:
```powershell
Copy-Item .env.example .env.local
```

---

## 4. `package.json` Scripts

The following scripts should be configured in `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### Script Usage:
- `npm run dev`: Launches local hot-reloading development server at `http://localhost:3000`.
- `npm run build`: Compiles optimized production bundle, runs type/ESLint verification, and generates static assets.
- `npm run start`: Serves compiled production build locally (ideal for testing Lighthouse performance).
- `npm run lint`: Scans source code for formatting or syntax infractions.

---

## 5. Path Aliasing & Utility Setup

### 5.1 `jsconfig.json` Configuration
Ensure root path aliasing is set:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 5.2 Class Merger Helper (`lib/utils.js`)
Create `lib/utils.js` for clean conditional class merging:
```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

---

## 6. Recommended IDE Extensions (VS Code / Antigravity)

1. **Tailwind CSS IntelliSense:** Real-time class autocomplete and CSS hover preview.
2. **ESLint:** Code quality enforcement and error flagging.
3. **Prettier - Code Formatter:** Automated formatting on save.
