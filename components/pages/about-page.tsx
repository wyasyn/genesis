/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Zap,
  Heart,
  Award,
  Sparkles,
  Briefcase,
  BookOpen,
  Rocket,
  Coffee,
  Music,
  Camera,
  Plane,
  Terminal,
  Layers,
  GitBranch,
  Database,
  Globe,
} from "lucide-react";
import ContentSection from "../sections/about-about";
import Features from "../sections/skills";
import Services from "../sections/services";

const skills = [
  { name: "React & Next.js", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
  { name: "Node.js & APIs", level: 88, color: "from-emerald-400 to-teal-500" },
  { name: "UI/UX Design", level: 85, color: "from-violet-500 to-pink-500" },
  {
    name: "Database & Cloud",
    level: 82,
    color: "from-amber-400 to-orange-500",
  },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
    color: "text-cyan-500",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Crafting beautiful interfaces with attention to detail",
    color: "text-pink-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and seamless user experience",
    color: "text-amber-500",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Building with accessibility and inclusivity in mind",
    color: "text-rose-500",
  },
];

const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Startup",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using Next.js, TypeScript, and cloud services. Mentoring junior developers and establishing best practices.",
    icon: Briefcase,
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Built custom web solutions for clients across various industries. Specialized in React, Node.js, and modern frontend architecture.",
    icon: Rocket,
  },
  {
    role: "Frontend Developer",
    company: "Startup Studio",
    period: "2019 - 2020",
    description:
      "Developed responsive web applications and landing pages. Focused on performance optimization and user experience.",
    icon: Code2,
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: Layers,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Terminal,
    techs: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "Tools & Others",
    icon: GitBranch,
    techs: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
];

const interests = [
  {
    name: "Coffee Brewing",
    icon: Coffee,
    description: "Exploring different brewing methods",
  },
  {
    name: "Music Production",
    icon: Music,
    description: "Creating beats and melodies",
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and landscapes",
  },
  {
    name: "Travel",
    icon: Plane,
    description: "Discovering new places and cultures",
  },
];

const values = [
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I'm committed to staying current with the latest tools, frameworks, and best practices in web development.",
    icon: BookOpen,
  },
  {
    title: "Quality First",
    description:
      "Every line of code matters. I prioritize writing clean, maintainable code that stands the test of time and scales with your needs.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description:
      "Great products are built by great teams. I believe in open communication, knowledge sharing, and working together toward common goals.",
    icon: Globe,
  },
];

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-linear-to-b from-muted/30 via-background to-background"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
        </div>
        <ContentSection />
      </section>
      <Features />
      <Services />
    </div>
  );
}
