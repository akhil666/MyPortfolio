// Lightweight inline SVG icon set (stroke = currentColor) so the design
// is self-contained and doesn't depend on the legacy PNG assets.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Icon = {
  arrow: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg {...base} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  download: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  github: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.52.1.71-.23.71-.5v-1.77c-2.9.63-3.52-1.4-3.52-1.4-.47-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.45 1.14 3.05.87.1-.68.37-1.14.67-1.4-2.32-.27-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.07-2.8-.1-.27-.46-1.33.1-2.78 0 0 .88-.28 2.88 1.07a9.9 9.9 0 0 1 5.24 0c2-1.35 2.87-1.07 2.87-1.07.57 1.45.21 2.51.1 2.78.67.73 1.07 1.66 1.07 2.8 0 4.01-2.44 4.89-4.77 5.15.38.33.71.97.71 1.96v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05C20.6 8.59 22 10.32 22 13.6V21h-4v-6.56c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.46V21H9V9Z" />
    </svg>
  ),
  embed: (p) => (
    <svg {...base} {...p}>
      <path d="M9 3H5a2 2 0 0 0-2 2v4m18 0V5a2 2 0 0 0-2-2h-4M3 15v4a2 2 0 0 0 2 2h4m6 0h4a2 2 0 0 0 2-2v-4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  prototype: (p) => (
    <svg {...base} {...p}>
      <path d="M12 2 4 7v10l8 5 8-5V7l-8-5Z" />
      <path d="M4 7l8 5 8-5M12 12v10" />
    </svg>
  ),
  deploy: (p) => (
    <svg {...base} {...p}>
      <path d="M5 16 3 21l5-2m6.5-13.5a8 8 0 0 1 2 7.5c-.6 2.4-2.6 4.4-5 5l-4-4c.6-2.4 2.6-4.4 5-5a8 8 0 0 1 .5-.5Z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </svg>
  ),
  enable: (p) => (
    <svg {...base} {...p}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  code: (p) => (
    <svg {...base} {...p}>
      <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" />
    </svg>
  ),
  layers: (p) => (
    <svg {...base} {...p}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  ),
  database: (p) => (
    <svg {...base} {...p}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  cloud: (p) => (
    <svg {...base} {...p}>
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9 4.5 4.5 0 0 0 7 19h10.5Z" />
    </svg>
  ),
  spark: (p) => (
    <svg {...base} {...p}>
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  check: (p) => (
    <svg {...base} {...p}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  send: (p) => (
    <svg {...base} {...p}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  ),
  briefcase: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  globe: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  cap: (p) => (
    <svg {...base} {...p}>
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5M22 9v5" />
    </svg>
  ),
  badge: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1 7 4.5-2.5L16.5 21l-1-7" />
    </svg>
  ),
};

export default Icon;
