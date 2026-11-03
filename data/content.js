/**
 * VaultofCodes - Centralized Single Source of Truth (data/content.js)
 * 
 * Contains all static & dummy content for the entire homepage:
 * - Brand Metadata & Navigation
 * - Dual Hero messaging & CTAs
 * - What We Do (EdTech vs SaaS)
 * - Featured Programs (Web Dev, Python/AI, Cyber, Ethical Hacking, Cloud/DevOps)
 * - Software & SaaS Ecosystem (VaultVerify, VaultCareer, VaultHire)
 * - Why VaultofCodes (6 Pillars)
 * - Statistics (Animated Counters)
 * - How It Works (4-Step Connected Roadmap)
 * - Student & Community Testimonials (Marquee)
 * - Final CTA Banner
 * - Global Footer Directory
 */

export const siteMetadata = {
  name: "VaultofCodes",
  tagline: "Learn technology. Build with technology. Experience technology.",
  description: "Next-generation engineering ecosystem uniting industry-grade EdTech training cohorts with proprietary developer SaaS products.",
  contactEmail: "admissions@vaultofcodes.com",
  portalUrl: "#login",
};

export const navigationLinks = [
  { label: "Home", href: "#hero" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Programs", href: "#programs" },
  { label: "Software & SaaS", href: "#software" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
];

export const heroContent = {
  eyebrow: "Next-Gen Developer Ecosystem",
  headlineMain: "Learn technology. Build with technology.",
  headlineGradient: "Experience technology.",
  subtext: "VaultofCodes bridges practical engineering education with proprietary developer SaaS tools. Master full-stack development, AI, and cybersecurity through production-grade internships and industry cohorts.",
  primaryCTA: {
    label: "Explore Programs",
    href: "#programs",
  },
  secondaryCTA: {
    label: "Explore Software",
    href: "#software",
  },
  badgeText: "Trusted by 50,000+ ambitious developers & 100+ partner universities",
  statsSummary: [
    { label: "Active Cohorts", value: "12+" },
    { label: "Hiring Partners", value: "350+" },
    { label: "Avg Rating", value: "4.9/5" }
  ]
};

export const whatWeDoCards = [
  {
    id: "edtech",
    badge: "Practical Academy",
    title: "Technology Education & Internships",
    tagline: "Bridging the academic-industry chasm through hands-on software engineering.",
    description: "Immersive cohorts, guaranteed project-based internships, and live engineering mentorship designed to transform students into production-ready software engineers.",
    bullets: [
      "Rigorous industry-aligned curriculum (AI, Full-Stack, Cyber)",
      "Real-world capstone projects with production code reviews",
      "Direct placement pathways and career acceleration workshops",
      "Recognized certificates with tamper-proof verification"
    ],
    ctaText: "Browse All Programs",
    ctaLink: "#programs",
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    borderHighlight: "group-hover:border-blue-500/50",
    iconName: "GraduationCap"
  },
  {
    id: "software-saas",
    badge: "Enterprise Tech",
    title: "Software Products & SaaS Solutions",
    tagline: "Building scalable developer tools and talent intelligence infrastructure.",
    description: "Proprietary software suites engineered to solve complex operational challenges in credential verification, recruitment automation, and career analytics.",
    bullets: [
      "VaultVerify: Cryptographic instant credential verification",
      "VaultCareer: AI-driven student skill & readiness intelligence",
      "VaultHire: Automated internship pipeline & candidate matching",
      "Modern API-first architecture built for scale"
    ],
    ctaText: "Discover Software Suite",
    ctaLink: "#software",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    borderHighlight: "group-hover:border-cyan-500/50",
    iconName: "Cpu"
  }
];

export const featuredPrograms = [
  {
    id: "prog-web-dev",
    title: "Full Stack Web Engineering",
    category: "Development",
    badge: "Most Popular",
    duration: "12 Weeks",
    format: "Live Cohort + Capstone",
    level: "Intermediate",
    description: "Master modern full-stack web architecture from React and Next.js to distributed Node.js backends, PostgreSQL, and cloud deployment pipelines.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    ctaText: "Explore Curriculum",
    ctaLink: "#hero",
    iconName: "Code"
  },
  {
    id: "prog-ai-prompt",
    title: "AI & Prompt Engineering",
    category: "AI & ML",
    badge: "High Demand",
    duration: "10 Weeks",
    format: "Hands-on Lab",
    level: "All Levels",
    description: "Harness LLM orchestration, LangChain, vector databases, retrieval-augmented generation (RAG), and fine-tuning techniques to build intelligent AI applications.",
    technologies: ["OpenAI API", "LangChain", "Python", "Vector DBs", "RAG", "Hugging Face"],
    ctaText: "Explore Curriculum",
    ctaLink: "#hero",
    iconName: "Sparkles"
  },
  {
    id: "prog-python",
    title: "Python for Data & Automation",
    category: "Development",
    badge: "Foundation",
    duration: "8 Weeks",
    format: "Cohort + Projects",
    level: "Beginner to Adv",
    description: "From Python core fundamentals to backend APIs with FastAPI, automated web scraping, data manipulation with Pandas, and asynchronous programming.",
    technologies: ["Python 3", "FastAPI", "Pandas", "NumPy", "AsyncIO", "REST APIs"],
    ctaText: "Explore Curriculum",
    ctaLink: "#hero",
    iconName: "Terminal"
  },
  {
    id: "prog-cybersecurity",
    title: "Cybersecurity Defense & Ops",
    category: "Security",
    badge: "Industry Certified",
    duration: "12 Weeks",
    format: "Simulated SOC Labs",
    level: "Intermediate",
    description: "Understand defensive security architectures, network packet analysis, SIEM log monitoring, threat hunting, and modern DevSecOps security practices.",
    technologies: ["Wireshark", "Linux", "SIEM", "Nmap", "Metasploit", "OWASP Top 10"],
    ctaText: "Explore Curriculum",
    ctaLink: "#hero",
    iconName: "Shield"
  },
  {
    id: "prog-ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    category: "Security",
    badge: "Practical Track",
    duration: "10 Weeks",
    format: "Hands-on CTF",
    level: "Intermediate",
    description: "Discover real-world vulnerability exploitation, web application security auditing, network penetration testing, and ethical exploit reporting.",
    technologies: ["Kali Linux", "Burp Suite", "Reverse Eng", "Hydra", "Bash Scripting"],
    ctaText: "Explore Curriculum",
    ctaLink: "#hero",
    iconName: "Lock"
  },
  {
    id: "prog-cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    category: "Development",
    badge: "New",
    duration: "8 Weeks",
    format: "Cloud Labs",
    level: "Advanced",
    description: "Build robust CI/CD pipelines, containerize microservices with Docker & Kubernetes, and automate infrastructure deployments across AWS.",
    technologies: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
    ctaText: "Explore Curriculum",
    ctaLink: "#hero",
    iconName: "Cloud"
  }
];

export const saasProducts = [
  {
    id: "prod-vault-verify",
    name: "VaultVerify",
    tagline: "Cryptographic Credential & Certificate Verification",
    category: "Enterprise SaaS",
    status: "Live in Production",
    statusColor: "emerald",
    description: "An instant, tamper-proof credential validation engine. Enables universities, corporations, and recruiters to authenticate student certificates and skill badges with zero delay.",
    keyBenefit: "Sub-200ms cryptographic verification via unique immutable QR tokens.",
    metrics: "120,000+ Certificates Verified",
    features: [
      "Zero-trust public ledger authentication",
      "One-click LinkedIn credential embedding",
      "Bulk institutional certificate generation API",
      "Tamper-proof SHA-256 fingerprinting"
    ],
    ctaText: "Request Platform Demo",
    ctaLink: "#contact",
    iconName: "ShieldCheck"
  },
  {
    id: "prod-vault-career",
    name: "VaultCareer",
    tagline: "Student Intelligence & Skills Diagnostic System",
    category: "Talent Analytics",
    status: "Active Beta",
    statusColor: "cyan",
    description: "AI-powered career readiness platform that evaluates student GitHub repositories, project code quality, and benchmark assessments to construct real skill heatmaps.",
    keyBenefit: "Actionable roadmap recommendations based on real market hiring requirements.",
    metrics: "85% Placement Improvement",
    features: [
      "Automated automated repository code quality scoring",
      "Role-tailored gap analysis for SDE, AI & DevOps",
      "Dynamic technical interview simulation engine",
      "Direct recruiter talent pipeline matching"
    ],
    ctaText: "Explore VaultCareer",
    ctaLink: "#contact",
    iconName: "Compass"
  },
  {
    id: "prod-vault-hire",
    name: "VaultHire",
    tagline: "Streamlined Internship & Recruitment Pipeline",
    category: "HR Technology",
    status: "Enterprise Early Access",
    statusColor: "purple",
    description: "An end-to-end recruitment management system connecting top vetted student developers directly with tech startups and enterprises for high-impact internships.",
    keyBenefit: "Reduces internship hiring time from 4 weeks to 72 hours.",
    metrics: "350+ Partner Startups",
    features: [
      "Pre-assessed candidate technical profiles",
      "Integrated skill screening & live coding challenges",
      "Automated stipend & milestone contract tracking",
      "Direct university cohort batch hiring"
    ],
    ctaText: "Hire Engineering Talent",
    ctaLink: "#contact",
    iconName: "Briefcase"
  }
];

export const whyUsReasons = [
  {
    id: "why-practical",
    number: "01",
    title: "100% Practical & Project-First",
    description: "No boring slide lectures. Every concept is reinforced by writing code, architecting microservices, and solving engineering problems seen in production.",
    highlight: "Zero Fluff",
    iconName: "Zap"
  },
  {
    id: "why-saas-ecosystem",
    number: "02",
    title: "Proprietary Software Ecosystem",
    description: "We are not just a training portal; we build real SaaS software. Students contribute directly to live open-source tools and internal enterprise modules.",
    highlight: "Real Engineering",
    iconName: "Layers"
  },
  {
    id: "why-verified-creds",
    number: "03",
    title: "Cryptographically Verified Credentials",
    description: "Every certificate issued is backed by our VaultVerify engine. Recruiters can verify project authenticity and skill mastery in a single click.",
    highlight: "Tamper-Proof",
    iconName: "CheckCircle2"
  },
  {
    id: "why-mentor-network",
    number: "04",
    title: "Mentorship by Active Engineers",
    description: "Learn directly from senior software engineers and architects working at top tech startups and MNCs, receiving personalized code reviews.",
    highlight: "1-on-1 Feedback",
    iconName: "Users"
  },
  {
    id: "why-career-acceleration",
    number: "05",
    title: "Direct Placement & Internship Links",
    description: "Through VaultHire, our students bypass conventional resume black holes with pre-vetted profiles sent straight to engineering hiring managers.",
    highlight: "72hr Pipeline",
    iconName: "TrendingUp"
  },
  {
    id: "why-vibrant-community",
    number: "06",
    title: "50,000+ Strong Tech Community",
    description: "Collaborate, pair program, and attend exclusive hackathons and developer meetups with a passionate peer group of developers nationwide.",
    highlight: "Global Network",
    iconName: "Globe"
  }
];

export const statisticsData = [
  {
    id: "stat-students",
    value: 50000,
    prefix: "",
    suffix: "+",
    label: "Students Empowered",
    description: "Engineers trained across 140+ top engineering colleges and technical institutes."
  },
  {
    id: "stat-programs",
    value: 100,
    prefix: "",
    suffix: "+",
    label: "Structured Cohorts",
    description: "Curated learning paths designed alongside active industry engineering leads."
  },
  {
    id: "stat-projects",
    value: 10000,
    prefix: "",
    suffix: "+",
    label: "Production Projects",
    description: "Production web applications, AI models, and security audits published to GitHub."
  },
  {
    id: "stat-workshops",
    value: 50,
    prefix: "",
    suffix: "+",
    label: "Tech Workshops",
    description: "Live intensive weekend bootcamps in cloud computing, generative AI, and security."
  }
];

export const howItWorksSteps = [
  {
    stepNumber: 1,
    phase: "Discover",
    title: "Diagnose Your Trajectory",
    description: "Explore our specialized tracks in Full-Stack, AI, and Cybersecurity. Take an interactive diagnostic skill check to pinpoint your baseline.",
    badge: "Phase 01",
    deliverable: "Personalized Roadmap"
  },
  {
    stepNumber: 2,
    phase: "Learn",
    title: "Hands-On Cohort Training",
    description: "Dive into live interactive code-along sessions, weekly architectural breakdowns, and hands-on laboratory exercises with senior mentors.",
    badge: "Phase 02",
    deliverable: "Core Engineering Mastery"
  },
  {
    stepNumber: 3,
    phase: "Build",
    title: "Ship Production Software",
    description: "Collaborate in agile sprint teams to build full-scale SaaS software, deploy distributed microservices, and submit pull requests to live repos.",
    badge: "Phase 03",
    deliverable: "Production Capstone Repo"
  },
  {
    stepNumber: 4,
    phase: "Launch",
    title: "Get Verified & Hired",
    description: "Earn cryptographic credentials on VaultVerify and enter the VaultHire pipeline to connect directly with tech companies hiring for junior SDE roles.",
    badge: "Phase 04",
    deliverable: "Verified Credentials & Career"
  }
];

export const testimonialsData = [
  {
    id: "test-01",
    name: "Aman Sharma",
    role: "Full-Stack Intern -> SDE 1",
    company: "Zomato",
    rating: 5,
    programTaken: "Full Stack Web Engineering",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    quote: "VaultofCodes felt completely different from typical online courses. We built a distributed queue system and an actual SaaS dashboard. The VaultVerify credential directly helped me stand out during technical interviews!"
  },
  {
    id: "test-02",
    name: "Rhea Nair",
    role: "AI Engineer",
    company: "SaaS Labs",
    rating: 5,
    programTaken: "AI & Prompt Engineering",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    quote: "The practical focus in the AI cohort was mind-blowing. Instead of just toy Jupyter notebooks, we deployed production RAG pipelines with Pinecone and FastAPI. The mentors genuinely care about engineering rigor."
  },
  {
    id: "test-03",
    name: "Karan Verma",
    role: "Security Analyst",
    company: "Paytm Security Ops",
    rating: 5,
    programTaken: "Ethical Hacking & Pen Testing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    quote: "Hands down the most realistic CTF and security simulation experience. VaultofCodes provided actual vulnerable test environments and taught us how to write professional penetration test reports."
  },
  {
    id: "test-04",
    name: "Ananya Deshmukh",
    role: "Frontend Developer",
    company: "CRED",
    rating: 5,
    programTaken: "Full Stack Web Engineering",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    quote: "The emphasis on modern frontend engineering—Next.js App Router, Framer Motion, and micro-interactions—allowed me to build a portfolio that recruiters couldn't ignore. Landed my dream offer in 3 weeks!"
  },
  {
    id: "test-05",
    name: "Vikram Mehta",
    role: "DevOps Engineer",
    company: "Razorpay",
    rating: 5,
    programTaken: "Cloud & DevOps Track",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    quote: "Through VaultHire, our batch got direct interview opportunities without sending cold resumes. The real-time Docker and Kubernetes labs prepared me for day one on the job."
  }
];

export const finalCTAContent = {
  eyebrow: "// COMMENCE YOUR ENGINEERING JOURNEY",
  title: "Ready to Build Your Future in Modern Tech?",
  description: "Join over 50,000 ambitious developers mastering full-stack engineering, artificial intelligence, and cybersecurity. Build real SaaS products, earn verifiable credentials, and accelerate your tech career today.",
  primaryCTA: {
    label: "Explore All Programs",
    href: "#programs"
  },
  secondaryCTA: {
    label: "Discover SaaS Products",
    href: "#software"
  },
  guaranteeText: "100% Practical Learning • Tamper-Proof VaultVerify Credential • Active Engineering Mentorship"
};

export const footerContent = {
  company: {
    name: "VaultofCodes",
    tagline: "Learn technology. Build with technology. Experience technology.",
    description: "The dual-force technology enterprise uniting practical developer education with next-generation enterprise SaaS solutions.",
    copyright: `© ${new Date().getFullYear()} VaultofCodes Inc. All rights reserved.`
  },
  columns: [
    {
      title: "Programs",
      links: [
        { label: "Full Stack Web Engineering", href: "#programs" },
        { label: "AI & Prompt Engineering", href: "#programs", badge: "Hot" },
        { label: "Python & Automation", href: "#programs" },
        { label: "Cybersecurity Defense", href: "#programs" },
        { label: "Ethical Hacking Track", href: "#programs" },
        { label: "Cloud Infrastructure & DevOps", href: "#programs" }
      ]
    },
    {
      title: "Software & SaaS",
      links: [
        { label: "VaultVerify (Credential Engine)", href: "#software" },
        { label: "VaultCareer (Talent Intelligence)", href: "#software", badge: "Beta" },
        { label: "VaultHire (Recruitment Pipeline)", href: "#software" },
        { label: "API Documentation", href: "#software" },
        { label: "Enterprise Security Audit", href: "#software" }
      ]
    },
    {
      title: "Company & Community",
      links: [
        { label: "About VaultofCodes", href: "#what-we-do" },
        { label: "Why VaultofCodes", href: "#why-us" },
        { label: "Student Testimonials", href: "#community" },
        { label: "Campus Ambassador Program", href: "#hero" },
        { label: "Hiring Partner Network", href: "#hero" },
        { label: "Careers @ VaultofCodes", href: "#hero" }
      ]
    },
    {
      title: "Resources & Legal",
      links: [
        { label: "Free Skill Diagnostics", href: "#hero" },
        { label: "Developer Cheat Sheets", href: "#hero" },
        { label: "Terms of Service", href: "#hero" },
        { label: "Privacy Policy", href: "#hero" },
        { label: "Verification Security Policy", href: "#hero" },
        { label: "Contact Support", href: "#hero" }
      ]
    }
  ],
  socialLinks: [
    { name: "GitHub", href: "https://github.com", icon: "Github" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { name: "Discord", href: "https://discord.com", icon: "MessageSquare" }
  ]
};
