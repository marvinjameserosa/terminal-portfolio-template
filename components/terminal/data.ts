import type {
  TalkItem,
  CommunityItem,
  SocialLink,
  CommandDefinition,
  ProjectItem,
} from "./types";

export const TALKS: TalkItem[] = [
  {
    id: "kubecon-multi-region",
    index: "01",
    title: "Zero-Downtime Multi-Region State Replication at Scale",
    event: "KubeCon + CloudNativeCon",
    date: "May 2026",
    venue: "San Francisco, CA",
    topic:
      "Deep-dive into deterministic failover, Raft consensus tuning, and eBPF-driven network latency profiling across multi-cloud clusters.",
    impact:
      "Presented live failover benchmarks to 450+ distributed systems engineers and open-sourced the benchmark harness.",
    image: "/talk-1.svg",
    imageAlt: "Zero-Downtime Multi-Region State Replication slide deck",
    links: [
      { label: "Announcement Post", url: "https://example.com/talks/kubecon" },
    ],
  },
  {
    id: "ai-systems-summit",
    index: "02",
    title: "Production-Grade Agentic CLI Workflows & Tool Sandboxing",
    event: "AI Systems Engineering Summit",
    date: "Feb 2026",
    venue: "Austin, TX",
    topic:
      "Architecting low-latency terminal coding agents with isolated execution sandboxes, context compaction, and deterministic tool verification.",
    impact:
      "Demonstrated sub-second local container snapshotting for safe autonomous code execution.",
    image: "/talk-2.svg",
    imageAlt: "Agentic CLI Workflows presentation",
    links: [
      { label: "Announcement Post", url: "https://example.com/talks/ai-summit" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "hypertrace-cli",
    index: "01",
    title: "HyperTrace Distributed Profiler",
    description:
      "Low-overhead CLI and web telemetry dashboard for tracing microservice tail latency using eBPF kernel probes and WebAssembly flamegraphs.",
    role: "Creator & Lead Maintainer",
    stack: ["Rust", "eBPF", "TypeScript", "Next.js"],
    status: "Live",
    image: "/project-1.svg",
    imageAlt: "HyperTrace CLI terminal and flamegraph preview",
    links: [
      { label: "Visit Site", url: "https://example.com/hypertrace" },
      { label: "GitHub Repo", url: "https://github.com/example/hypertrace" },
    ],
  },
  {
    id: "amber-tui-portfolio",
    index: "02",
    title: "Amber TUI Developer Portfolio Template",
    description:
      "Interactive, frameless developer portfolio with a visual style inspired by modern terminal CLI aesthetics. Features real-time slash-command autocomplete, keyboard navigation, and an embedded image lightbox.",
    role: "Author",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Open Source",
    image: "/project-2.svg",
    imageAlt: "Terminal Developer Portfolio preview",
    links: [
      { label: "GitHub Template", url: "https://github.com/example/terminal-portfolio-template" },
    ],
  },
];

export const COMMUNITY: CommunityItem[] = [
  {
    id: "cloud-native-guild",
    index: "01",
    title: "Cloud Native Systems Contributor Guild",
    role: "Founder & Lead Mentor",
    period: "2024 – Present",
    location: "Global / Remote",
    description:
      "Created a bi-weekly systems engineering study group and open-source contributor bootcamp helping early-career developers land their first upstream patches in CNCF projects.",
    impact:
      "Mentored 500+ members with 80+ merged pull requests across major open-source infrastructure repositories.",
    image: "/community-1.svg",
    imageAlt: "Cloud Native Systems Contributor Bootcamp banner",
    tags: ["Open Source", "Distributed Systems", "Mentorship", "Kubernetes"],
  },
  {
    id: "civic-security-collective",
    index: "02",
    title: "Civic Tech & Security Engineering Collective",
    role: "Core Organizer & Infrastructure Lead",
    period: "2023 – Present",
    location: "San Francisco, CA",
    description:
      "Architected containerized Capture-The-Flag (CTF) competition clusters and led hands-on workshops on DevSecOps, supply-chain security, and automated threat modeling.",
    impact:
      "Hosted 12+ regional security workshops and annual CTF tournaments for 300+ student and professional engineers.",
    image: "/community-2.svg",
    imageAlt: "Civic Tech & Security Collective workshop banner",
    tags: ["Cybersecurity", "CTF Infrastructure", "DevSecOps", "Workshops"],
  },
];

export const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@alexrivera-dev",
    url: "https://github.com",
    description: "Open-source systems tooling, CLI utilities & starter templates",
  },
  {
    label: "LinkedIn",
    handle: "in/alexrivera-dev",
    url: "https://linkedin.com",
    description: "Professional experience, architecture articles & speaking updates",
  },
  {
    label: "X / Twitter",
    handle: "@alexrivera_sys",
    url: "https://x.com",
    description: "Distributed systems notes, benchmarks & release threads",
  },
  {
    label: "Email",
    handle: "alex.rivera@example.com",
    url: "mailto:alex.rivera@example.com",
    description: "Direct inbox for speaking invitations, advisory & collaborations",
  },
];

export const COMMANDS: CommandDefinition[] = [
  {
    cmd: "talks",
    description: "Keynotes, conference sessions & technical presentations",
    isQuickAction: true,
  },
  {
    cmd: "projects",
    description: "Side projects, open-source tooling & shipped systems",
    isQuickAction: true,
  },
  {
    cmd: "community",
    description: "Community leadership, mentorship & open-source initiatives",
    isQuickAction: true,
  },
  {
    cmd: "socials",
    description: "GitHub, LinkedIn, X & direct email links",
    isQuickAction: true,
  },
  {
    cmd: "about",
    description: "Professional background, engineering philosophy & bio",
    isQuickAction: true,
  },
  {
    cmd: "contact",
    description: "Direct reach out and collaboration channels",
  },
  {
    cmd: "help",
    description: "List all supported terminal commands",
  },
  {
    cmd: "clear",
    description: "Wipe previous terminal output and reset session",
  },
];
