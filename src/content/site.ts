// Single source of truth for portfolio content. Edit freely.

export type LinkValue = string | null; // null = not configured yet (never rendered as a link)

export const profile = {
  name: "Ujjwal",
  role: "Student developer & programmer",
  study: "B.Tech CSE (AI) at KIET",
  tagline: "I build, break down, and rebuild ideas into software.",
  summary:
    "Exploring software engineering, AI engineering, backend systems, cloud and IoT — learning by shipping small, honest builds.",
};

/** Contact + social. Set a value to a real string to make it appear. Leave null to hide. */
export const contact: {
  email: LinkValue;
  github: LinkValue;
  linkedin: LinkValue;
  x: LinkValue;
  resume: LinkValue;
} = {
  email: null, // e.g. "you@example.com"
  github: null, // e.g. "https://github.com/your-handle"
  linkedin: null,
  x: null,
  resume: null,
};

export const exploring = [
  "AI agents",
  "Local / hybrid LLM workflows",
  "Backend engineering",
  "Cloud architecture",
  "Embedded systems",
  "IoT",
];

export type ProjectCategory = "Software" | "AI" | "IoT";
export type ProjectStatus = "Active exploration" | "Prototype · in progress" | "Concept / build" | "Past project";

export interface Project {
  slug: string;
  name: string;
  short: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  accent: string; // oklch color for the case study page
  overview: string;
  intent: string;
  approach: string[];
  stack: string[];
  current: string;
  learnings: string[];
  links: { label: string; url: string }[]; // only real links
}

export const projects: Project[] = [
  {
    slug: "devscout-v2",
    name: "DEVSCOUT V2",
    short: "AI-powered technical decision intelligence for developer learning and review.",
    categories: ["Software", "AI"],
    status: "Active exploration",
    accent: "oklch(0.55 0.2 262)",
    overview:
      "DEVSCOUT V2 explores how AI can help developers make and review technical decisions — comparing approaches, surfacing trade-offs and supporting learning while reviewing code.",
    intent:
      "Technical choices are often made with partial context. The goal is a tool that helps a developer reason about options rather than just generate answers.",
    approach: [
      "Frame questions as decisions with explicit trade-offs.",
      "Use LLMs as a reasoning aid alongside the developer, not a replacement.",
      "Iterate on structure and review flows through repeated rebuilds.",
    ],
    stack: ["TypeScript", "LLM APIs", "Web frontend", "Backend services"],
    current: "Active exploration — architecture and features are still evolving.",
    learnings: [
      "Prompt structure shapes output quality as much as model choice.",
      "Designing for review is harder — and more useful — than designing for generation.",
    ],
    links: [{ label: "GitHub repository", url: "https://github.com/notujjwal-kiet/DEVSCOUT-V2" }],
  },
  {
    slug: "aeronex",
    name: "AERONEX",
    short: "Experimental ESP32-S3 based drone / IoT prototype. Early hardware build.",
    categories: ["IoT"],
    status: "Prototype · in progress",
    accent: "oklch(0.62 0.2 30)",
    overview:
      "AERONEX is an experimental drone / IoT prototype built around the ESP32-S3. It is an early hardware build and is not flight-ready.",
    intent: "Learn embedded systems end-to-end: microcontrollers, motor control, sensors and wireless communication.",
    approach: [
      "Start from the controller (ESP32-S3) and build outward component by component.",
      "Motors are currently available; other components are planned.",
      "Treat every stage as a learning checkpoint before adding complexity.",
    ],
    stack: ["ESP32-S3", "Embedded C/C++", "Motors", "IoT"],
    current: "Prototype in progress — motors on hand, remaining components planned. Not flight-ready.",
    learnings: ["Hardware forces you to plan dependencies before writing code.", "Power and safety come first."],
    links: [],
  },
  {
    slug: "vaultx",
    name: "VaultX",
    short: "A password manager project — a concept and build exploring secure storage.",
    categories: ["Software"],
    status: "Concept / build",
    accent: "oklch(0.6 0.15 160)",
    overview:
      "VaultX is a password manager project built to understand how credentials can be stored and retrieved more safely. It has not been security audited and is not production-ready.",
    intent: "Understand the fundamentals of encryption, key handling and secure UX by building one.",
    approach: [
      "Study established patterns for encrypting secrets at rest.",
      "Keep the feature scope small and focused.",
      "Document assumptions and known limitations honestly.",
    ],
    stack: ["Programming fundamentals", "Encryption concepts", "Local storage"],
    current: "Concept / learning build. Not audited — do not use for real credentials.",
    learnings: ["Security is mostly about what you choose not to do.", "Threat modeling should come before code."],
    links: [],
  },
  {
    slug: "weather-app",
    name: "Weather App",
    short: "Weather application using the OpenWeatherMap API and Leaflet maps.",
    categories: ["Software"],
    status: "Past project",
    accent: "oklch(0.7 0.14 220)",
    overview: "A weather application that fetches conditions from OpenWeatherMap and displays locations on a Leaflet map.",
    intent: "Practice working with third-party APIs, async data and interactive maps.",
    approach: [
      "Fetch and parse weather data from the OpenWeatherMap API.",
      "Render locations on an interactive Leaflet map.",
      "Handle loading and error states for network requests.",
    ],
    stack: ["JavaScript", "OpenWeatherMap API", "Leaflet", "HTML/CSS"],
    current: "Past project — completed as a learning build.",
    learnings: ["API keys and rate limits are part of the design.", "Maps need careful UX on small screens."],
    links: [],
  },
];

export const skills: { group: string; note: string; items: string[] }[] = [
  { group: "Languages", note: "Working with", items: ["Python", "JavaScript", "TypeScript", "C / C++", "Java"] },
  { group: "Frontend", note: "Building with", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend & Data", note: "Exploring", items: ["Node.js", "REST APIs", "SQL", "Databases"] },
  { group: "AI / ML", note: "Exploring", items: ["LLM APIs", "AI agents", "Local LLMs", "Prompt design"] },
  { group: "Cloud & Tools", note: "Using / exploring", items: ["Git", "GitHub", "Linux", "Cloud basics"] },
  { group: "Hardware / IoT", note: "Exploring", items: ["ESP32-S3", "Microcontrollers", "Sensors", "Motors"] },
];

export const journey = [
  { label: "Now", title: "CSE (AI) at KIET", body: "Studying computer science with a focus on AI, while building projects alongside coursework." },
  { label: "Building", title: "Software → AI", body: "Moving from small web apps toward AI-assisted tools like DEVSCOUT V2." },
  { label: "Tinkering", title: "Into hardware", body: "Starting AERONEX to learn embedded systems from the controller up." },
  { label: "Next", title: "Deeper systems", body: "Backend engineering, cloud architecture and agentic AI workflows." },
];

export const achievements = [
  { title: "INNOTECH'26", kind: "Participant", body: "Took part in INNOTECH'26 — building, presenting and learning alongside other teams." },
];

export const routes = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/playground", label: "Playground" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);