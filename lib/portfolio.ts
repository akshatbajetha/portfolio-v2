export const profile = {
  name: "Akshat Bajetha",
  role: "Software Engineer",
  tagline: "Software Engineer | Backend & Full-Stack | Distributed Systems",
  email: "akshatbajetha@gmail.com",
  portfolio: "https://akshatbajetha.vercel.app/",
  about:
    "Software engineer from Delhi. I build backend and full-stack systems with TypeScript, Node.js, NestJS, PostgreSQL, Redis, React, Next.js, and AWS. I own features end-to-end — from the database to production debugging. Open to work, freelance, or collaborate.",
  summary:
    "Software Engineer with production experience building backend and full-stack systems using TypeScript, Node.js, NestJS, PostgreSQL, Redis, React, Next.js, and AWS. Built and deployed production procurement and hiring platforms, asynchronous processing pipelines, RBAC systems, AI-powered workflows, automated email processing, and multi-tier cloud infrastructure. Owns features end-to-end across backend, frontend, databases, testing, deployment, and production debugging.",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshat-bajetha/",
  },
  {
    label: "GitHub",
    href: "https://github.com/akshatbajetha/",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/akshatbajetha",
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1EtWUHLFSCCF7dS0fDCj4GZbg91SqbEFOln2nyWT3zWU/edit?usp=sharing",
  },
] as const;

export const experience = [
  {
    company: "Heizen",
    role: "Software Development Engineer Intern",
    period: "December 2025 – Present",
    bullets: [
      "Built and deployed a production procurement platform as primary developer: automated ticket workflows, configurable approval routing, threshold-based auto-approval, and sequential handler/approver assignment.",
      "Designed and developed full-stack features for a U.S.-based fintech platform using NestJS, Next.js, PostgreSQL, and AWS, including direct client discussions and production debugging.",
      "Designed and deployed distributed, multi-tiered AWS infrastructure using ECS, ECR, EC2, databases, networking, and security groups, following security and software-compliance practices.",
      "Built an AI-powered chatbot with AWS Bedrock and multiple tool integrations, enabling contextual, multi-step workflows across the platform.",
      "Engineered an event-driven Redis/BullMQ notification pipeline with ~500ms average latency for reliable asynchronous background processing.",
      "Optimized bulk-import processing for 11,000+ records without transaction timeouts, improving reliability of large-scale data ingestion.",
      "Built an automated email-processing agent that ingests inbox messages, extracts structured business data, and feeds it into the platform, removing manual data entry.",
      "Built an internal hiring platform across frontend, backend, and RBAC-based access control; conducted code reviews across the codebase.",
      "Migrated the NestJS unit-test suite from Jest to Vitest, cutting test time by 90%+ (~250s to 18s).",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack?: string;
  live?: string;
  github?: string;
  pr?: string;
  featured?: boolean;
  openSource?: boolean;
  bullets?: string[];
};

export const projects: Project[] = [
  {
    slug: "subboard",
    title: "SubBoard",
    summary:
      "Multi-currency subscription and free-trial tracker. Spend dashboard with trends, category breakdown, and upcoming renewals, converting amounts at read time from a daily-cached FX snapshot. Timezone-aware reminder emails and Dodo Payments for Free, Pro, and Lifetime plans.",
    stack:
      "Next.js, TypeScript, PostgreSQL, Prisma, Better Auth, Dodo Payments, PostHog, Vercel",
    live: "https://www.subboard.app/",
    featured: true,
    bullets: [
      "Built and launched a multi-currency subscription and free-trial tracker as sole developer, with a spend dashboard (trends, category breakdown, upcoming renewals) that converts amounts at read time using a daily-cached Frankfurter FX snapshot.",
      "Designed a timezone-aware reminder pipeline (hourly GitHub Actions cron calling a secured endpoint) that emails users 3 days and 1 day before charges, using idempotent dispatch records to prevent duplicate sends and calendar-date storage to avoid timezone drift.",
      "Integrated Dodo Payments (hosted checkout + webhooks) for Free, Pro, and Lifetime plans with server-side limit enforcement, plan changes, and cancel/resume flows; instrumented the signup-to-upgrade funnel with PostHog.",
    ],
  },
  {
    slug: "notekaro",
    title: "NoteKaro",
    summary:
      "All-in-one productivity platform combining rich-text notes, nested tasks, and an infinite canvas. Reached 13,000+ views. Daily todo email notifications via GitHub Actions.",
    stack: "React, Next.js, Node.js, PostgreSQL, GitHub Actions",
    live: "https://www.notekaro.com/",
    github: "https://github.com/akshatbajetha/notekaro",
    featured: true,
    bullets: [
      "Built a full-stack productivity platform combining note-taking, task management, and an infinite canvas; reached 13,000+ views.",
      "Implemented rich-text notes, nested task/subtask management, a canvas with drawing/editing tools, and scheduled GitHub Actions workflows for daily todo email notifications.",
    ],
  },
  {
    slug: "compogen",
    title: "CompoGen",
    summary:
      "AI React component generator. Prompt in, reusable React and Tailwind CSS out, with a live preview, authentication, and saved-component workflows.",
    stack: "React, Tailwind CSS, OpenAI API, Authentication",
    live: "https://compo-gen.vercel.app/",
    github: "https://github.com/akshatbajetha/compo-gen",
    featured: true,
    bullets: [
      "Built an AI-powered React component generator producing reusable React/Tailwind CSS components with live previews via the OpenAI API; added authentication and saved-component workflows (store, preview, download).",
    ],
  },
  {
    slug: "next-buy",
    title: "Next Buy",
    summary: "A full-stack e-commerce website built with Next.js and TypeScript.",
    stack: "Next.js, TypeScript, MongoDB",
    live: "https://next-buy-shop.vercel.app",
    github: "https://github.com/akshatbajetha/next-buy",
  },
  {
    slug: "chatzy",
    title: "Chatzy",
    summary:
      "A realtime chat application built with the MERN stack and Socket.IO, deployed on AWS EC2.",
    stack: "MongoDB, Express, React, Node.js, Socket.IO, AWS EC2",
    live: "https://chatzy-sasu.onrender.com/",
    github: "https://github.com/akshatbajetha/chatzy",
  },
  {
    slug: "calcom",
    title: "Cal.com",
    summary:
      "Debugged and resolved a recurring UI title-overflow issue across multiple components; contributed a merged pull request improving layout consistency.",
    pr: "https://github.com/calcom/cal.diy/pull/24693",
    openSource: true,
    bullets: [
      "Open-source scheduling platform",
      "Debugged and resolved a recurring UI title-overflow issue across multiple components; contributed a merged pull request improving layout consistency and code quality.",
    ],
  },
];

export const achievements = [
  "LeetCode Knight – Rating 1896, Top 4.47%; solved 400+ DSA problems.",
  "Top 5 performer in the Coding Ninjas Java DSA batch.",
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Distributed systems",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "Prisma"],
  },
  {
    label: "Cloud",
    items: [
      "AWS (EC2, ECS, ECR, Lightsail, Bedrock)",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    label: "Testing",
    items: ["Jest", "Vitest", "Automated testing", "Performance testing"],
  },
  {
    label: "Engineering",
    items: [
      "OOP",
      "SOLID",
      "HLD/LLD",
      "Data Structures & Algorithms",
      "Code reviews",
      "Agile",
      "Scrum",
      "Kanban",
    ],
  },
];

export const education = {
  school: "Bennett University",
  location: "Greater Noida, UP",
  degree: "B.Tech. in Computer Science & Engineering",
  graduation: "May 2026",
  cgpa: "8.4",
  note: "LeetCode Knight — rating 1896, top 4.47%; 400+ problems solved.",
};

export const folders = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Technical skills" },
  { id: "education", label: "Education" },
] as const;

export type FolderId = (typeof folders)[number]["id"];
