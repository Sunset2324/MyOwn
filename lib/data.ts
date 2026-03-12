import type { Project, Service, Skill, Stat } from "@/types";

export const siteConfig = {
  name: "Sambel",
  nameAccent: "CODE",
  tagline: "FULLSTACK\nDEVELOPER\n& VISUAL EDITOR",
  description:
    "I craft scalable web applications and compelling visual stories — merging engineering precision with cinematic aesthetics.",
  availableForWork: true,
  socials: {
    instagram: "https://www.instagram.com/rafasyamcode/",
    linkedin: "#",
    github: "https://github.com/Sunset2324",
    dribbble: "#",
  },
  // 🎵 Replace with your direct audio URL (mp3, wav, etc.)
musicUrl: "https://raw.githubusercontent.com/Sunset2324/portfolio_asset/main/Path%20to%20Freedom_spotdown.org%20(1).mp3",
  musicTrackName: "audiomachine - Path to Freedom",
};

export const stats: Stat[] = [
  { number: "40+", label: "Projects Delivered" },
  { number: "5+", label: "Years Experience" },
  { number: "20+", label: "Videos Edited" },
  { number: "100%", label: "Client Satisfaction" },
];

export const skills: Skill[] = [
  { name: "React / Next.js", percentage: 0 },
  { name: "Node.js / APIs", percentage: 0 },
  { name: "Video Editing (Premiere / DaVinci)", percentage: 0 },
  { name: "Photo Editing (Lightroom / PS)", percentage: 0 },
  { name: "Database Design", percentage: 0 },
];

export const projects: Project[] = [
  {
    id: "commerce-engine",
    title: "Commerce Engine",
    description:
      "End-to-end e-commerce platform with real-time inventory, payments, and analytics dashboard.",
    tag: "FULLSTACK",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop",
    link: "https://rent-vault.vercel.app/",
    featured: true,
  },
  {
    id: "cinematic-reel",
    title: "Cinematic Reel",
    description:
      "Brand film and motion graphics for a luxury lifestyle client.",
    tag: "VIDEO",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869ad10e2c8?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "analytics-hub",
    title: "Analytics Hub",
    description:
      "Real-time data visualization platform for SaaS metrics.",
    tag: "FULLSTACK",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "urban-light",
    title: "Urban Light Series",
    description:
      "Night photography series exploring city architecture and neon light.",
    tag: "PHOTO",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "securevault",
    title: "SecureVault App",
    description:
      "Enterprise password and secrets manager with zero-knowledge encryption.",
    tag: "FULLSTACK",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
];

export const services: Service[] = [
  {
    id: "fullstack",
    name: "Fullstack Development",
    description:
      "End-to-end web applications — frontend, backend, databases, and deployment. React, Next.js, Node, PostgreSQL.",
    icon: "code",
  },
  {
    id: "video",
    name: "Video Editing",
    description:
      "Cinematic editing, color grading, motion graphics, and sound design. Premiere Pro, DaVinci Resolve, After Effects.",
    icon: "video",
  },
  {
    id: "photo",
    name: "Photo Editing",
    description:
      "Professional retouching, color grading, and compositing. Lightroom, Photoshop, and Capture One workflows.",
    icon: "photo",
  },
];
