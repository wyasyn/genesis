/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart, Award, Sparkles } from "lucide-react";

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

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden g-linear-to-b from-background via-background to-muted/20"
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Building Digital <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer combining technical expertise with creative
            design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Profile image with gradient border */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-64 h-64 mx-auto md:mx-0 mb-8 group"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary via-violet-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20">
                  <img
                    src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg"
                    alt="Yasin Walum"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Story text */}
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My journey into web development started with curiosity and
                  grew into a passion for creating meaningful digital
                  experiences. Based in Kampala, Uganda, I&apos;ve had the
                  privilege of working on diverse projects that solve real-world
                  problems.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I believe great software is at the intersection of elegant
                  code and thoughtful design. Every project is an opportunity to
                  push boundaries and create something that makes a difference.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-2 pt-4"
                >
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">
                    5+ years of experience building for the web
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills and highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                Technical Skills
              </h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights grid */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                What I Bring
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group cursor-default"
                  >
                    <item.icon
                      className={`w-8 h-8 ${item.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-linear-to-br from-primary/10 via-violet-500/5 to-pink-500/10 border border-primary/20">
            <p className="text-lg mb-4">
              Let&apos;s collaborate and build something{" "}
              <span className="text-primary font-semibold">amazing</span>{" "}
              together
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-background border border-border">
                Open to opportunities
              </span>
              <span className="px-3 py-1 rounded-full bg-background border border-border">
                Remote friendly
              </span>
              <span className="px-3 py-1 rounded-full bg-background border border-border">
                Fast response time
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
