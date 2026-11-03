// All homepage text lives here. Edit freely — components only read from this file.

export const site = {
  url: "https://akshatbajetha.vercel.app",
  name: "Akshat Bajetha",
  title: "Software Engineer",
  metaTitle: "Akshat Bajetha | Software Engineer",
  metaDescription:
    "Akshat Bajetha is an AI-native full-stack software engineer building AI automations, LLM agents, chatbots and scalable web apps with TypeScript, Node.js, Next.js and AWS.",
  photo: "/myImage.png",
  status: "Open to full-time roles & freelance work",
  tagline: "Software Engineer building AI-powered products, automations and fast, scalable web apps.",
  intro: [
    "I'm an AI-native full-stack engineer who ships production systems end to end, from NestJS APIs and PostgreSQL to Next.js frontends running on AWS.",
    "I build AI automations, LLM agents and chatbots, integrate APIs like OpenAI and AWS Bedrock into real products, and use AI tools every day to ship faster without cutting corners.",
  ],
  focus: [
    "AI automations & agents",
    "LLM API integrations",
    "AI chatbots with tool calling",
    "Full-stack web apps",
  ],
};

export const links = {
  github: "https://github.com/akshatbajetha/",
  linkedin: "https://www.linkedin.com/in/akshat-bajetha/",
  x: "https://x.com/AkshatBajetha",
  email: "akshatbajetha@gmail.com",
  cal: "https://cal.com/akshat-bajetha/30min",
  resume:
    "https://docs.google.com/document/d/1EtWUHLFSCCF7dS0fDCj4GZbg91SqbEFOln2nyWT3zWU/edit?usp=sharing",
};

export type Role = {
  company: string;
  url: string;
  role: string;
  period?: string;
  bullets: string[];
  stack?: string[];
  link?: { label: string; href: string };
};

export const experience: Role[] = [
  {
    company: "Heizen",
    url: "https://heizen.work/",
    role: "Software Development Engineer Intern",
    period: "Dec 2025 – Oct 2026",
    bullets: [
      "Primary developer of a production supply-chain procurement platform: automated ticket workflows, configurable approval routing and threshold-based auto-approval.",
      "Built AI agents in production: an LLM email-processing agent that turns unstructured inbox messages into structured data (removing manual data entry), and an AWS Bedrock chatbot with tool calling for multi-step workflows.",
      "Engineered an event-driven Redis/BullMQ pipeline at ~500ms average latency and made bulk imports of 11,000+ records run without transaction timeouts.",
      "Migrated the NestJS test suite from Jest to Vitest, cutting test time by 90%+ (~250s → 18s); shipped full-stack features for a U.S. fintech client on NestJS, Next.js and AWS.",
    ],
    stack: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "AWS Bedrock", "LLM agents", "ECS", "Docker", "Vitest"],
  },
  {
    company: "Cal.com",
    url: "https://cal.com/",
    role: "Open Source Contributor",
    link: { label: "View merged PR", href: "https://github.com/calcom/cal.diy/pull/24693" },
    bullets: [
      "Fixed a recurring title-overflow bug across multiple UI components in the open-source scheduling platform; the pull request was merged.",
    ],
  },
];

export const education = {
  school: "Bennett University",
  degree: "B.Tech. in Computer Science & Engineering",
  period: "Graduated May 2026",
  note: "CGPA 8.4",
};

export const achievements = {
  link: { label: "LeetCode profile", href: "https://leetcode.com/akshatbajetha" },
  stats: [
    { value: "1896", label: "LeetCode rating", detail: "Knight badge · top 4.47% globally" },
    { value: "400+", label: "DSA problems solved", detail: "Data structures & algorithms" },
    { value: "Top 5", label: "Coding Ninjas", detail: "Java DSA batch" },
  ],
};

export type Project = {
  name: string;
  problem: string;
  outcome: string;
  stack: string[];
  live?: string;
  github?: string;
  /** 16:9 screenshots in /public/projects, one per theme. */
  image: { light: string; dark: string };
  /** Shown when there is no public repo. */
  note?: string;
};

export const projects: Project[] = [
  {
    name: "SubBoard",
    problem:
      "Subscriptions and free trials in different currencies quietly renew and drain money.",
    outcome:
      "Launched as a paid SaaS (Free / Pro / Lifetime) with a multi-currency spend dashboard and timezone-aware reminders 3 days and 1 day before every charge.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Better Auth", "TanStack Query", "Zod", "Recharts", "Dodo Payments", "PostHog", "AWS S3"],
    image: { light: "/projects/subboard-light.webp", dark: "/projects/subboard-dark.webp" },
    live: "https://www.subboard.app/",
    note: "Private repo",
  },
  {
    name: "CompoGen",
    problem: "Hand-writing UI components from scratch is slow and repetitive.",
    outcome:
      "An LLM-powered generator: describe a component, get reusable React + Tailwind code with a live preview, then save or download it.",
    stack: ["React", "OpenAI API", "Prompt engineering", "LLM code generation", "Tailwind CSS", "Auth"],
    image: { light: "/projects/compogen-light.webp", dark: "/projects/compogen-dark.webp" },
    live: "https://compo-gen.vercel.app/",
    github: "https://github.com/akshatbajetha/compo-gen",
  },
  {
    name: "NoteKaro",
    problem: "Notes, todos and whiteboards usually live in three separate apps.",
    outcome:
      "One app with rich-text notes, nested tasks and an infinite canvas, plus daily todo emails via scheduled GitHub Actions. 13,000+ views.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Zustand", "BlockNote", "Upstash QStash", "Resend", "GitHub Actions"],
    image: { light: "/projects/notekaro-light.webp", dark: "/projects/notekaro-dark.webp" },
    live: "https://www.notekaro.com/",
    github: "https://github.com/akshatbajetha/notekaro",
  },
  {
    name: "Interactive OS-themed portfolio",
    problem: "Portfolios all look the same, so I built one you explore like a desktop.",
    outcome:
      "Lock screen, draggable windows, taskbar and start menu on desktop, with a separate Android-style shell on mobile.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "next-themes"],
    image: { light: "/projects/os-portfolio-light.webp", dark: "/projects/os-portfolio-dark.webp" },
    live: "/playground",
    github: "https://github.com/akshatbajetha/portfolio-v2",
  },
];

export type SkillGroup = {
  label: string;
  /** Icon name, see components/home/Skills.tsx */
  icon: "ai" | "code" | "frontend" | "backend" | "data" | "cloud" | "product";
  /** Highlight this group with the accent color. */
  highlight?: boolean;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "AI & Automation",
    icon: "ai",
    highlight: true,
    items: [
      "OpenAI API",
      "AWS Bedrock",
      "Ollama (local LLMs)",
      "AI agents",
      "Tool / function calling",
      "Prompt engineering",
      "Structured outputs",
      "AI chatbots",
      "Email & inbox automation",
      "Workflow automation",
      "WhatsApp bots",
      "Web scraping (Apify)",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  { label: "Languages", icon: "code", items: ["TypeScript", "JavaScript", "Java", "SQL", "HTML & CSS"] },
  {
    label: "Frontend",
    icon: "frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Recharts",
    ],
  },
  {
    label: "Backend",
    icon: "backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "Webhooks",
      "BullMQ queues",
      "Zod",
      "Better Auth",
      "Auth.js",
      "RBAC",
      "Microservices",
    ],
  },
  {
    label: "Databases",
    icon: "data",
    items: ["PostgreSQL", "Prisma ORM", "Redis", "MongoDB", "Supabase"],
  },
  {
    label: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "AWS (ECS, ECR, EC2, S3, Lightsail)",
      "Docker",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Upstash QStash",
      "Vitest",
      "Jest",
      "Git",
      "Linux",
    ],
  },
  {
    label: "Payments & Product",
    icon: "product",
    items: ["Dodo Payments", "PostHog analytics", "Resend email"],
  },
];

export const contact = {
  heading: "Let's build something",
  line: "Hiring, or need an AI automation, chatbot or web app built? I usually reply within a day.",
};
