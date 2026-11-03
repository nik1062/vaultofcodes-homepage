# 11. AUTH.md — Authentication & Security Architecture

**Project:** VaultofCodes Main Homepage  
**Current Scope:** Client-Side Mock Authentication & Security Guardrails  
**Future Scope:** Dual-Token (Access + Refresh) JWT Architecture & RBAC  
**Purpose:** Define client-side dummy auth behavior, frontend security standards, and the blueprint for enterprise-grade authentication.

---

## 1. Client-Side Mock Authentication (Current Build Scope)

Per the internship project specification:
- Real database authentication, user registrations, and login backends are strictly **out of scope**.
- The "Login" button in `Navbar.jsx` is a **placeholder / dummy trigger**.

### 1.1 Dummy Login UX Contract
- **Trigger:** Clicking the "Login" button in the Navbar or Footer.
- **Handling Protocol:**
  ```javascript
  const handleLoginClick = (e) => {
    e.preventDefault();
    // Open accessible simulated modal or trigger toast notification
    openLoginModal({
      title: "VaultofCodes Student & Enterprise Portal",
      message: "Portal access is currently restricted to active cohort students and enterprise partners.",
      status: "info"
    });
  };
  ```
- **Rules:**
  - Must never cause page reloads or unhandled promise rejections.
  - Must never redirect to a dead 404 URL.
  - Must display clean, professional UX feedback explaining portal availability.

---

## 2. Frontend Security Guardrails

Even in a static / client-only application, the following security standards must be enforced:

### 2.1 XSS (Cross-Site Scripting) Prevention
- React automatically escapes values rendered in JSX. Never use `dangerouslySetInnerHTML` unless explicitly rendering static, hardcoded SVG paths.
- Avoid passing un-sanitized user strings directly to DOM attributes.

### 2.2 External Link Hardening
- Any external links (such as GitHub, LinkedIn, or Twitter in `Footer.jsx`) must explicitly include security attributes:
  ```jsx
  <a 
    href="https://github.com/..." 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Visit VaultofCodes GitHub"
  >
  ```
  This prevents `window.opener` API exploitation and tab-nabbing vulnerabilities.

### 2.3 Next.js Security Headers (`next.config.js`)
Enforce HTTP security headers at the edge:
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ],
      },
    ];
  },
};
module.exports = nextConfig;
```

---

## 3. Future Production Authentication Blueprint (Dual-Token JWT & RBAC)

When VaultofCodes scales beyond the homepage into a full platform, authentication will adhere to our standard enterprise specification:

```
[Client (Next.js)]                   [Auth Server]
        |                                   |
        |--- 1. POST /api/auth/login ------>|
        |<-- 2. Access Token (Short-lived) -|
        |    + Refresh Token (HTTP-Only)    |
        |                                   |
        |--- 3. Protected Resource Req ---->| (Bearer Access Token in Header)
        |<-- 4. Authorized Data Response ---|
        |                                   |
        | (Access Token Expires)            |
        |--- 5. POST /api/auth/refresh ---->| (HTTP-Only Cookie Sent Automatically)
        |<-- 6. New Access Token Returned --|
```

### 3.1 Token Strategy
1. **Access Token:**
   - Lifetime: 15 minutes.
   - Storage: In-memory React state (never in `localStorage` to avoid XSS exfiltration).
   - Delivery: `Authorization: Bearer <token>` HTTP header.
2. **Refresh Token:**
   - Lifetime: 7 days with sliding window expiration.
   - Storage: `httpOnly`, `secure`, `sameSite=Strict` cookie.
   - Rotation: Revoked and rotated upon each refresh invocation.

### 3.2 Role-Based Access Control (RBAC)
- **Roles:**
  - `STUDENT`: Access to enrolled curriculum, coding sandboxes, and certificates.
  - `INSTRUCTOR`: Manage cohorts, review assignments, host workshops.
  - `ENTERPRISE_RECRUITER`: Query verified student credentials via VaultVerify.
  - `ADMIN`: Full system, content, and user lifecycle administration.
