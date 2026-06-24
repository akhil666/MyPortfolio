// ----------------------------------------------------------------------------
//  Central content — sourced directly from Akhil S Vijay's resume.
// ----------------------------------------------------------------------------

export const profile = {
  name: "Akhil S Vijay",
  role: "Forward Deployment Engineer",
  tagline: "Full Stack & Data Professional",
  location: "Thiruvananthapuram, Kerala",
  status: "Open to Forward Deployed roles",
  email: "akhilsvijay9@gmail.com",
  phone: "+91 94959 88981",
  resume: "/sample-resume.pdf", // replace with your latest resume PDF in /public
  linkedin: "https://www.linkedin.com/in/akhil-s-vijay/",
  portfolio: "https://akhil-s-vijay.vercel.app/",
  headline:
    "I deploy scalable web apps, AI-enabled platforms, and analytics solutions straight into client environments.",
  summary:
    "Versatile Forward Deployment Engineer and Full Stack Data Professional specializing in deploying scalable web applications, AI-enabled platforms, and advanced analytics solutions into client environments. Experienced in Python, Django, SQL, React, and Databricks, with a strong track record of translating business requirements into high-performance technical solutions, automating workflows, and driving end-to-end project delivery.",
};

// whoami terminal output shown in the hero
export const terminalLines = [
  { prompt: true, text: "akhil@fde ~ % whoami" },
  { text: "Forward Deployment Engineer · Full Stack + Data" },
  { prompt: true, text: "akhil@fde ~ % cat stack.txt" },
  { text: "python · django · react · next · sql · databricks" },
  { prompt: true, text: "akhil@fde ~ % ./deploy --to client-env" },
  { text: "✓ onboarded · ✓ integrated · ✓ in production", accent: true },
];

// All metrics below are pulled from the resume.
export const stats = [
  { value: "4+", label: "Years across software & data" },
  { value: "5,000+", label: "Concurrent users supported" },
  { value: "40%", label: "App performance improvement" },
  { value: "50%", label: "Less manual reporting effort" },
];

// The Forward Deployed working loop
export const workflow = [
  {
    icon: "embed",
    step: "01",
    title: "Embed with stakeholders",
    description:
      "Work directly with clients to convert business logic and requirements into a clear, scalable technical plan.",
  },
  {
    icon: "prototype",
    step: "02",
    title: "Build the solution",
    description:
      "Develop end-to-end across frontend, backend, APIs, and data — from interfaces to AI-assisted workflows.",
  },
  {
    icon: "deploy",
    step: "03",
    title: "Deploy into the client env",
    description:
      "Integrate with their stack and cloud, ensuring seamless onboarding and stable production delivery.",
  },
  {
    icon: "enable",
    step: "04",
    title: "Optimize & hand off",
    description:
      "Tune performance and usability, automate the manual work, and keep the platform reliable over time.",
  },
];

export const skills = [
  {
    icon: "code",
    title: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    icon: "layers",
    title: "Frameworks & Libraries",
    items: ["Django", "React.js", "Next.js", "REST APIs", "TailwindCSS", "ShadCN"],
  },
  {
    icon: "database",
    title: "Databases & Platforms",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    icon: "spark",
    title: "Data & Analytics",
    items: ["Databricks", "Apache Spark / PySpark", "Alteryx", "Tableau", "ML & Statistics"],
  },
  {
    icon: "cloud",
    title: "Integrations & Tools",
    items: ["OpenAI API", "Clerk Auth", "Excel (Pivot, VLOOKUP)", "Shopify (Liquid, CSV)"],
  },
];

// Tools shown as a text row
export const toolbelt = [
  "Python",
  "Django",
  "React",
  "Next.js",
  "SQL",
  "Databricks",
  "PySpark",
  "MongoDB",
  "PostgreSQL",
  "OpenAI API",
  "Supabase",
  "Alteryx",
];

// Case studies built from real resume projects.  problem → approach → impact.
export const caseStudies = [
  {
    name: "JobsPorch",
    kind: "Full-Stack Job Marketplace",
    year: "2025",
    problem:
      "Hiring operations were fragmented across recruiters, candidates, and admins with no unified, real-time workflow.",
    approach:
      "Built a job marketplace with recruiter/candidate/admin approval pipelines, secure in-browser video-interview recording on Supabase storage, and SQL-backed real-time analytics.",
    impact: "End-to-end hiring, streamlined into one platform",
    stack: ["Next.js 15", "React 19", "Tailwind", "ShadCN", "MongoDB", "Supabase"],
  },
  {
    name: "AI-Enabled Analytics Platform",
    kind: "Forward Deployed Engagement",
    year: "2026",
    problem:
      "Clients needed AI-assisted enterprise workflows deployed and running inside their own environments.",
    approach:
      "Owned end-to-end implementation across frontend, backend services, APIs, and cloud data-sync — with OpenAI API integrations for customized AI-assisted workflows.",
    impact: "Seamless onboarding & stable production delivery",
    stack: ["Python", "Django", "React", "Next.js", "OpenAI API", "SQL"],
  },
  {
    name: "Audit-Ready Data Pipelines",
    kind: "EY — Ernst & Young",
    year: "2025",
    problem:
      "High-volume financial datasets required reliable, audit-ready cleansing and transformation under strict timelines.",
    approach:
      "Engineered automated cleansing and transformation pipelines in Databricks (SQL/PySpark) and Alteryx Designer, plus audit-ready analytical and reporting models.",
    impact: "Improved data reliability, less manual intervention",
    stack: ["Databricks", "PySpark", "SQL", "Alteryx"],
  },
  {
    name: "Scalable Django Platform",
    kind: "One Team Solutions",
    year: "2023",
    problem:
      "A growing web application had to stay fast and reliable for thousands of simultaneous users.",
    approach:
      "Built scalable Django apps and REST APIs, optimized SQL queries and backend workflows, and automated Excel-based reporting in Python.",
    impact: "5,000+ concurrent users · +40% performance · −50% manual reporting",
    stack: ["Python", "Django", "REST APIs", "SQL"],
  },
];

// Experience timeline (reverse chronological, from resume)
export const experience = [
  {
    role: "Forward Deployment Engineer",
    org: "Independent Client Work (Freelance)",
    period: "Mar 2026 — Present",
    points: [
      "Led deployment and integration of AI-enabled solution and analytics platforms into client environments with stable production delivery.",
      "Managed end-to-end implementation across frontend, backend services, APIs, and cloud-based data synchronization.",
      "Worked across Python, Django, React, Next.js, SQL, and OpenAI API to build customized AI-assisted enterprise workflows.",
    ],
  },
  {
    role: "Data Analyst (Contract)",
    org: "EY — Ernst & Young",
    period: "Aug 2025 — Feb 2026",
    points: [
      "Engineered automated data cleansing and transformation pipelines using Databricks (SQL/PySpark) and Alteryx Designer.",
      "Developed audit-ready analytical models and reporting datasets, improving reliability and reducing manual intervention.",
      "Acted as technical liaison between audit teams and clients, resolving complex data discrepancies under tight timelines.",
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
    degree: "MSc Computer Science — Data Analysis",
    org: "Cochin University of Science & Technology (CUSAT)",
    period: "2019 — 2021",
    note: "Data Mining · Statistical Analysis · Machine Learning · Data Visualization (Python, SQL, Tableau)",
  },
  {
    degree: "BCA — Computer Applications",
    org: "Kerala University",
    period: "2016 — 2019",
    note: "",
  },
];

export const certifications = ["Alteryx Designer Core Certified"];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
