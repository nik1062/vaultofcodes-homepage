# 05. API.md — API Contracts & Client Data Interfaces

**Project:** VaultofCodes Main Homepage  
**Current Architecture:** Static In-Memory / Client Data Service  
**Purpose:** Formalize client-side data contracts, simulated API handlers for interactive actions (CTAs, forms, login), and define the future REST API specification.

---

## 1. Client-Side Data Interface Contract

Components must consume data via standardized read interfaces to prevent direct coupling and ensure zero runtime crashes.

### 1.1 In-Memory Service (`lib/contentService.js`)

```javascript
import { 
  siteMetadata, 
  navLinks, 
  programs, 
  products, 
  statistics, 
  whyUsPoints, 
  journeySteps, 
  testimonials, 
  footerLinks 
} from "@/data/content";

export const getContent = {
  getMetadata: () => siteMetadata,
  getNavigation: () => navLinks,
  getPrograms: (category = null) => 
    category ? programs.filter(p => p.category === category) : programs,
  getProducts: () => products,
  getStats: () => statistics,
  getWhyUs: () => whyUsPoints,
  getJourney: () => journeySteps,
  getTestimonials: () => testimonials,
  getFooter: () => footerLinks,
};
```

---

## 2. Interactive Mock Endpoints & Actions

While the project is frontend-only, user interactions (such as clicking the Login button or submitting an email in the CTA) must produce authentic feedback without throwing 404s or uncaught promises.

### 2.1 Lead Capture / Newsletter CTA (Simulated Handler)
- **Action:** Clicking "Explore Programs" or submitting newsletter in the footer.
- **Client Handling:**
  ```javascript
  export async function handleMockLeadSubmit(payload) {
    // Simulated latency for authentic UX feedback
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      status: 200,
      data: {
        success: true,
        message: "Thank you for your interest! Our team will contact you shortly.",
        timestamp: new Date().toISOString()
      }
    };
  }
  ```

### 2.2 Dummy Login Modal Handler
- **Action:** Clicking the "Login" button in `Navbar.jsx`.
- **Client Behavior:**
  - Prevents default page refresh (`e.preventDefault()`).
  - Opens a sleek dark glassmorphism modal with simulated "Student Portal" and "Partner Portal" tabs.
  - Toast notification: *"VaultofCodes Portal access is currently restricted to active cohort students."*

---

## 3. Future Production REST API Specification

When backend microservices are connected, the frontend will point to these endpoints without structural changes to components:

### 3.1 `GET /api/v1/programs`
Retrieve active educational programs.
- **Query Params:** `category` (optional, string), `limit` (optional, integer).
- **Response `200 OK`:**
  ```json
  {
    "success": true,
    "count": 5,
    "data": [
      {
        "id": "prog-web-dev",
        "title": "Full Stack Web Development",
        "slug": "full-stack-web-dev",
        "category": "Development",
        "duration": "12 Weeks",
        "technologies": ["Next.js", "TypeScript", "Tailwind CSS"],
        "isActive": true
      }
    ]
  }
  ```

### 3.2 `GET /api/v1/products`
Retrieve software & SaaS products.
- **Response `200 OK`:**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "prod-vault-verify",
        "name": "VaultVerify",
        "category": "Enterprise SaaS",
        "keyBenefit": "Instant tamper-proof certificate verification",
        "status": "Live"
      }
    ]
  }
  ```

### 3.3 `POST /api/v1/leads`
Submit interest from CTA buttons.
- **Request Body:**
  ```json
  {
    "email": "student@example.edu",
    "interest": "Web Development",
    "source": "Hero CTA"
  }
  ```
- **Response `201 Created`:**
  ```json
  {
    "success": true,
    "message": "Lead registered successfully"
  }
  ```
- **Response `400 Bad Request`:**
  ```json
  {
    "success": false,
    "error": "Valid email address is required"
  }
  ```
