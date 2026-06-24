// ----------------------------------------------------------------------------
//  Central content — sourced from Akhil S Vijay's resume.
// ----------------------------------------------------------------------------

export const profile = {
  name: "Akhil S Vijay",
  initials: "AV",
  role: "Forward Deployment Engineer",
  location: "Thiruvananthapuram, Kerala",
  email: "akhilsvijay9@gmail.com",
  phone: "+91 94959 88981",
  resume: "/sample-resume.pdf",
  github: "https://github.com/akhil666",
  linkedin: "https://www.linkedin.com/in/akhil-s-vijay/",
  portfolio: "https://akhil-s-vijay.vercel.app/",
};

export const hero = {
  badge: "AVAILABLE FOR WORK · KERALA, IN",
  lead:
    "I'm Akhil — a Forward Deployment Engineer & full-stack data professional. I deploy scalable web apps, AI-enabled platforms, and analytics solutions into client environments, across Python, Django, React, Next.js, SQL & Databricks.",
  metaEyebrow: "EST. KERALA, IN · MSc @ CUSAT",
  metaStat: "4+ years · 12+ projects shipped",
  metaDesc:
    "Web apps, APIs, data pipelines and AI workflows — built for clarity, scale and impact.",
};

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#process", label: "process" },
  { href: "#stack", label: "stack" },
];

export const marqueeWords = [
  "PYTHON", "DJANGO", "REACT", "NEXT.JS", "SQL", "DATABRICKS",
  "PYSPARK", "MONGODB", "OPENAI API", "SUPABASE", "ALTERYX", "REST APIs",
];

// Animated counters — all values from the resume.
export const facts = [
  { value: 4, suffix: "+", label: "YEARS EXPERIENCE" },
  { value: 5000, suffix: "+", label: "CONCURRENT USERS SUPPORTED" },
  { value: 40, suffix: "%", label: "PERFORMANCE IMPROVEMENT" },
  { value: 50, suffix: "%", label: "LESS MANUAL REPORTING" },
];

export const about = {
  paragraph:
    "I deploy scalable web applications, AI-enabled platforms, and advanced analytics solutions into client environments. With a foundation in both full-stack development and data analytics, I'm as comfortable building data pipelines in Databricks as I am shipping a clean React front end — turning business requirements into high-performance technical solutions.",
  rows: [
    { k: "EDUCATION", v: "MSc Computer Science — Data Analytics, CUSAT" },
    { k: "EXPERIENCE", v: "4+ years · FDE & full-stack data" },
    { k: "CERTIFICATION", v: "Alteryx Designer Core Certified" },
    { k: "BASED IN", v: "Thiruvananthapuram, Kerala · open to remote" },
  ],
};

// Featured projects (real GitHub repos / resume projects).
export const projects = [
  {
    title: "JobsPorch",
    tag: "FULL-STACK MARKETPLACE",
    image: "/work-1.png",
    desc: "A full-stack job marketplace with recruiter, candidate & admin workflows, approval pipelines, and secure in-browser video interviews backed by Supabase storage.",
    stack: ["Next.js 15", "React 19", "MongoDB", "Supabase"],
    link: "https://github.com/akhil666/JOBSPORCH",
  },
  {
    title: "8-Bit Fitness App",
    tag: "WEB + MOBILE APP",
    image: "/work-2.png",
    desc: "A customizable fitness app for small businesses, with a client-configurable chatbot and voice features via the Web Speech API.",
    stack: ["Python", "Django", "React", "REST API"],
    link: "https://github.com/akhil666/8-BitFitness-APP",
  },
  {
    title: "Real Estate Platform",
    tag: "WEB APP",
    image: "/work-3.png",
    desc: "A responsive real-estate website with property listings and a clean, modern browsing experience.",
    stack: ["Next.js", "Tailwind", "React"],
    link: "https://github.com/akhil666/real-estate-next",
  },
  {
    title: "Travelogue",
    tag: "WEB DESIGN",
    image: "/work-4.png",
    desc: "A travel-focused web experience with map-driven location discovery and editorial layouts.",
    stack: ["React", "UI/UX", "HTML/CSS"],
    link: "https://github.com/akhil666",
  },
];

export const moreRepos = [
  { num: "05", title: "AI Analytics Platform", desc: "AI-assisted enterprise workflows (OpenAI API)", lang: "PYTHON/AI", link: "https://github.com/akhil666" },
  { num: "06", title: "Web Scraping Suite", desc: "Full-site data extraction with Python", lang: "PYTHON", link: "https://github.com/akhil666/Web-scrapping" },
  { num: "07", title: "Inventory Forecasting", desc: "Pandas inventory tables & charts", lang: "PYTHON", link: "https://github.com/akhil666" },
  { num: "08", title: "Solar", desc: "Energy / solar project", lang: "JS", link: "https://github.com/akhil666/Solar" },
];

// Experience timeline — from the resume (reverse chronological).
export const experience = [
  {
    role: "Forward Deployment Engineer",
    org: "Independent Client Work (Freelance)",
    period: "Mar 2026 — Present",
    points: [
      "Led deployment and integration of AI-enabled solution and analytics platforms into client environments, ensuring seamless onboarding and stable production delivery.",
      "Managed end-to-end implementation across frontend, backend services, APIs, and cloud-based data synchronization.",
      "Worked across Python, Django, React, Next.js, SQL, and OpenAI API to build customized AI-assisted enterprise workflows.",
    ],
  },
  {
    role: "Data Analyst (Contract)",
    org: "EY — Ernst & Young",
    period: "Aug 2025 — Feb 2026",
    points: [
      "Engineered automated data cleansing and transformation pipelines using Databricks (SQL/PySpark) and Alteryx Designer for high-volume financial datasets.",
      "Developed audit-ready analytical models and reporting datasets, improving reliability and reducing manual intervention.",
      "Acted as technical liaison between audit teams and clients, resolving complex data discrepancies under strict timelines.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    org: "Independent",
    period: "Jan 2025 — Aug 2025",
    points: [
      "Built JobsPorch, a full-stack job marketplace with real-time analytics (Next.js 15, React 19, Tailwind, ShadCN, MongoDB).",
      "Designed recruiter, candidate, and admin workflows with approval pipelines to streamline hiring.",
      "Built secure in-browser video interview recording integrated with Supabase cloud storage.",
    ],
  },
  {
    role: "Full Stack Python/Django Developer Intern",
    org: "One Team Solutions Pvt Ltd",
    period: "May 2023 — Dec 2023",
    points: [
      "Built scalable Django web applications and REST APIs supporting 5,000+ concurrent users.",
      "Optimized SQL queries and backend workflows, improving application performance by 40%.",
      "Automated Excel-based dashboards in Python, reducing manual reporting effort by 50%.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Digital University Kerala",
    period: "Feb 2022 — Aug 2022",
    points: [
      "Developed responsive front-end applications using modern JavaScript frameworks and UI libraries.",
      "Built and trained machine learning models that improved internal process efficiency by 25%.",
      "Created Excel-based data visualizations and dashboards for stakeholder presentations.",
    ],
  },
];

export const education = [
  {
    k: "2019 — 2021",
    title: "MSc Computer Science — Data Analysis",
    org: "Cochin University of Science & Technology (CUSAT)",
    meta: "Data Mining · Statistical Analysis · ML · Data Visualization",
  },
  {
    k: "2016 — 2019",
    title: "BCA — Computer Applications",
    org: "Kerala University",
    meta: "Bachelor of Computer Applications",
  },
];

// FDE-flavoured working method.
export const process = [
  { no: "01", title: "Discover", desc: "Embed with stakeholders to understand the problem, users, and data before a line of code." },
  { no: "02", title: "Architect", desc: "Model the data, design the APIs, and plan a structure that scales in production." },
  { no: "03", title: "Build", desc: "Ship clean, responsive interfaces backed by reliable services and integrations." },
  { no: "04", title: "Deploy & refine", desc: "Deploy into the client environment, measure, automate, and polish until it's effortless." },
];

// Skills — exactly as grouped on the resume.
export const capabilities = [
  { no: "A", title: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { no: "B", title: "Frameworks & Libraries", items: ["Django", "Django REST", "React.js", "Next.js", "TailwindCSS", "ShadCN"] },
  { no: "C", title: "Databases & Platforms", items: ["PostgreSQL", "MySQL", "MongoDB", "Databricks", "Apache Spark", "Supabase"] },
  { no: "D", title: "Tools & Integrations", items: ["Alteryx", "OpenAI API", "Clerk Auth", "Excel", "Shopify"] },
];

export const bgGlyphs = [
  { text: "const dev = true;", left: "6%", top: "14%", size: "16px", rot: "-4deg", op: 0.16, dur: "9s" },
  { text: "</>", left: "87%", top: "10%", size: "44px", rot: "8deg", op: 0.13, dur: "11s" },
  { text: "{ }", left: "13%", top: "68%", size: "52px", rot: "-6deg", op: 0.11, dur: "13s" },
  { text: "=> async ()", left: "69%", top: "78%", size: "16px", rot: "5deg", op: 0.15, dur: "10s" },
  { text: "React", left: "40%", top: "8%", size: "18px", rot: "-3deg", op: 0.13, dur: "12s" },
  { text: "Django", left: "80%", top: "40%", size: "18px", rot: "4deg", op: 0.13, dur: "9s" },
  { text: "Python", left: "8%", top: "42%", size: "19px", rot: "-5deg", op: 0.15, dur: "14s" },
  { text: "Next.js", left: "55%", top: "58%", size: "17px", rot: "6deg", op: 0.13, dur: "11s" },
  { text: "0101 0011", left: "30%", top: "88%", size: "16px", rot: "-2deg", op: 0.12, dur: "10s" },
  { text: "Databricks", left: "62%", top: "23%", size: "15px", rot: "3deg", op: 0.13, dur: "12s" },
  { text: "PySpark", left: "22%", top: "30%", size: "16px", rot: "7deg", op: 0.13, dur: "13s" },
  { text: "git push", left: "45%", top: "40%", size: "16px", rot: "-4deg", op: 0.13, dur: "9s" },
  { text: "SQL", left: "90%", top: "66%", size: "19px", rot: "-6deg", op: 0.13, dur: "11s" },
  { text: "return ()", left: "4%", top: "84%", size: "16px", rot: "5deg", op: 0.13, dur: "10s" },
  { text: "API", left: "52%", top: "90%", size: "18px", rot: "-3deg", op: 0.13, dur: "12s" },
  { text: "npm run dev", left: "73%", top: "92%", size: "15px", rot: "4deg", op: 0.13, dur: "13s" },
];
