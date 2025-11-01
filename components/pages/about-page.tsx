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
  const isHeroInView = useInView(heroRef, { once: true });

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

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Get to Know Me</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl mb-6">
              About <span className="text-primary">Yasin Walum</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate developer crafting digital experiences that combine
              <span className="text-primary font-medium">
                {" "}
                elegant code
              </span>{" "}
              with
              <span className="text-primary font-medium">
                {" "}
                thoughtful design
              </span>
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Profile Image */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-linear-to-br from-primary via-violet-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/20">
                    <img
                      src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg"
                      alt="Yasin Walum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-4">
                    Hello! I&apos;m Yasin 👋
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I&apos;m a full-stack developer based in{" "}
                      <span className="inline-flex items-center gap-1 text-foreground font-medium">
                        <img
                          src="https://flagcdn.com/w20/ug.png"
                          alt="Uganda"
                          className="inline-block"
                        />
                        Kampala, Uganda
                      </span>
                      , with a passion for creating web applications that make a
                      difference.
                    </p>
                    <p>
                      My journey in tech started with curiosity and grew into a
                      deep love for problem-solving through code. I specialize
                      in building modern, responsive web applications with a
                      focus on user experience and performance.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me exploring
                      new technologies, contributing to open source, or sharing
                      my knowledge with the developer community.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                    <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                      Available for hire
                    </span>
                    <span className="px-4 py-2 rounded-full bg-background border border-border text-sm">
                      Remote friendly
                    </span>
                    <span className="px-4 py-2 rounded-full bg-background border border-border text-sm">
                      5+ years experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Technical <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Skills Progress */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <span className="w-1 h-8 bg-primary rounded-full" />
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <Section key={skill.name}>
                    <div className="flex justify-between mb-3">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </Section>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <span className="w-1 h-8 bg-primary rounded-full" />
                What I Offer
              </h3>
              <div className="grid gap-4">
                {highlights.map((item) => (
                  <Section key={item.title}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      <div className="flex gap-4">
                        <item.icon
                          className={`w-10 h-10 ${item.color} shrink-0`}
                        />
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Technology <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tools and technologies I work with daily
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <Section key={stack.category}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stack.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Section>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              My professional journey in web development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <Section key={exp.company}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative flex flex-col md:flex-row gap-8 items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 hidden sm:block" />

                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-3 rounded-xl bg-primary/10 ${
                              index % 2 === 0 ? "md:order-2" : ""
                            }`}
                          >
                            <exp.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div
                            className={`flex-1 ${
                              index % 2 === 0 ? "md:text-right" : ""
                            }`}
                          >
                            <h3 className="text-xl font-semibold mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              My <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Principles that guide my work and decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Section key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </Section>
            ))}
          </div>
        </div>
      </Section>

      {/* Interests Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Beyond <span className="text-primary">Coding</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What I enjoy when I&apos;m not at my desk
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest) => (
              <Section key={interest.name}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="p-6 rounded-2xl bg-linear-to-br from-card to-muted/30 border border-border hover:border-primary/50 transition-all duration-300 text-center cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <interest.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{interest.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </motion.div>
              </Section>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
