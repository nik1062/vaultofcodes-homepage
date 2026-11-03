# 04. DATABASE.md — Database Schema & Data Models

**Project:** VaultofCodes Main Homepage  
**Current State:** Client-Side Mock Database (`data/content.js`)  
**Future State:** PostgreSQL + Prisma ORM  
**Purpose:** Strictly define all entity shapes, field keys, and data types to prevent AI hallucination of property names during component development.

---

## 1. Local Data Store (`data/content.js`) Schema

All homepage content is strictly organized into strongly-typed structures. The AI **must** use the exact key names defined below.

### 1.1 `Program` Entity
Represents educational tracks displayed in `components/sections/Programs.jsx`.

```typescript
interface Program {
  id: string;              // e.g. "prog-web-dev" (Primary Key)
  title: string;           // e.g. "Full Stack Web Development"
  slug: string;            // e.g. "full-stack-web-development"
  category: "Development" | "AI & ML" | "Security" | "Data";
  badge: string;           // e.g. "Most Popular" | "Industry Aligned"
  duration: string;        // e.g. "12 Weeks"
  format: "Hands-on Cohort" | "Self-Paced + Mentorship";
  description: string;     // Short 2-sentence synopsis
  technologies: string[];  // e.g. ["Next.js", "TypeScript", "Node.js", "Docker"]
  ctaText: string;         // e.g. "View Curriculum"
  ctaLink: string;         // In-page anchor or dummy link "#programs"
}
```

### 1.2 `Product` Entity (SaaS Ecosystem)
Represents software solutions in `components/sections/SoftwareSaaS.jsx`.

```typescript
interface Product {
  id: string;              // e.g. "prod-vault-verify" (Primary Key)
  name: string;            // e.g. "VaultVerify"
  tagline: string;         // e.g. "Cryptographic Credential Verification"
  category: "Enterprise SaaS" | "Developer Tool" | "HR Tech";
  status: "Live" | "Beta" | "Early Access";
  description: string;     // Detailed product summary
  keyBenefit: string;      // e.g. "Instant tamper-proof verification in < 200ms"
  features: string[];      // 3 bullet points highlighting tech capabilities
  iconName: string;        // Lucide icon name, e.g. "ShieldCheck"
  ctaText: string;         // e.g. "Request Demo"
  ctaLink: string;         // e.g. "#software"
}
```

### 1.3 `Statistic` Entity
Represents metrics in `components/sections/Stats.jsx`.

```typescript
interface Statistic {
  id: string;              // e.g. "stat-students"
  value: number;           // Target number for counter, e.g. 50000
  prefix?: string;         // Optional prefix, e.g. ""
  suffix: string;          // e.g. "K+" or "+"
  label: string;           // Display title, e.g. "Students Trained"
  description: string;     // Subtext context, e.g. "Across 140+ engineering colleges"
}
```

### 1.4 `WhyUsPillar` Entity
Represents value-propositions in `components/sections/WhyUs.jsx`.

```typescript
interface WhyUsPillar {
  id: string;              // e.g. "why-practical"
  number: string;          // e.g. "01", "02"
  title: string;           // e.g. "Practical-First Engineering"
  description: string;     // Detailed paragraph
  highlight: string;       // Key takeaway metric or phrase
  iconName: string;        // Lucide icon identifier
}
```

### 1.5 `JourneyStep` Entity
Represents the 4-phase sequence in `components/sections/HowItWorks.jsx`.

```typescript
interface JourneyStep {
  stepNumber: number;      // 1, 2, 3, 4
  phase: "Discover" | "Learn" | "Build" | "Launch";
  title: string;           // e.g. "Interactive Skill Discovery"
  description: string;     // What happens at this step
  deliverable: string;     // Tangible outcome (e.g. "Production SaaS Repo")
  iconName: string;        // Lucide icon identifier
}
```

### 1.6 `Testimonial` Entity
Represents community proof in `components/sections/Community.jsx`.

```typescript
interface Testimonial {
  id: string;              // e.g. "test-01"
  name: string;            // Student / Engineer name
  role: string;            // e.g. "Frontend Intern -> SDE 1"
  company: string;         // e.g. "Fintech Startup"
  avatarUrl: string;       // Image path or placeholder initials
  quote: string;           // Testimonial quote
  programTaken: string;    // Cross-reference to Program title
  rating: number;          // 5 (stars)
}
```

### 1.7 `NavigationItem` & `FooterGroup` Entities
Represents site links in header and footer.

```typescript
interface NavigationItem {
  label: string;           // e.g. "Programs"
  href: string;            // e.g. "#programs"
  isButton?: boolean;      // True for Login CTA
  isExternal?: boolean;    // False
}

interface FooterColumn {
  title: string;           // e.g. "Programs", "Software", "Company", "Legal"
  links: {
    label: string;
    href: string;
    badge?: string;        // e.g. "New"
  }[];
}
```

---

## 2. Future Production Database Schema (Prisma / PostgreSQL)

When VaultofCodes transitions from mock data to live backend management, the schema maps 1-to-1 with PostgreSQL tables:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Program {
  id           String   @id @default(cuid())
  title        String
  slug         String   @unique
  category     String
  duration     String
  description  String
  technologies String[]
  createdAt    DateTime @default(now())
}

model Product {
  id          String   @id @default(cuid())
  name        String   @unique
  tagline     String
  category    String
  description String
  keyBenefit  String
  createdAt   DateTime @default(now())
}

model Testimonial {
  id           String   @id @default(cuid())
  name         String
  role         String
  company      String
  quote        String
  rating       Int      @default(5)
  programTaken String
}
```
