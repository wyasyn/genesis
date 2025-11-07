/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sparkles, Heart, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "User-First Design",
    description:
      "Accessibility and inclusive design at the core of every project",
    color: "text-rose-500",
  },
  {
    icon: Zap,
    title: "Progressive Enhancement",
    description: "Building experiences that work seamlessly for everyone",
    color: "text-amber-500",
  },
  {
    icon: Users,
    title: "People-Centered",
    description: "Creating digital solutions that truly make a difference",
    color: "text-cyan-500",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.95]
  );
  // Image moves opposite direction - down when scrolling down (slower speed)
  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-linear-to-b from-background via-background to-muted/20"
    >
      {/* Animated decorative elements */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 100]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [80, -80]) }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div
        ref={containerRef}
        style={{ scale, opacity }}
        className="relative z-10 container"
      >
        {/* Section header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-4 max-w-[20ch]"
          >
            Building Digital{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Experiences
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            Passionate developer combining technical expertise with creative
            design
          </motion.p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Story text */}
            <div className="space-y-6 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg"
              >
                Based in Kampala, Uganda, I create meaningful digital
                experiences that solve real-world problems. I focus on
                accessibility, inclusive design and progressive enhancement to
                create a user experience that puts people first.
              </motion.p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group cursor-default overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-linear-to-br from-primary/5 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100"
                  />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <item.icon
                      className={`w-8 h-8 ${item.color} mb-3 transition-all duration-300`}
                    />
                  </motion.div>

                  <h4 className="relative font-semibold mb-2 text-base">
                    {item.title}
                  </h4>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              ref={imageRef}
              style={{ y: imageY }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md mx-auto lg:max-w-none group"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-br from-primary via-violet-500 to-pink-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg"
                  alt="Yasin Walum"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent"
                />
              </motion.div>

              {/* Floating badge with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="absolute -bottom-6 -left-6 cursor-default group/badge"
              >
                {/* Glassmorphism container */}
                <div className="relative px-6 py-3 rounded-2xl overflow-hidden">
                  {/* Glass background with blur */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-xl" />

                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/40 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 p-2">
                    <div className="absolute inset-2 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-xl" />
                  </div>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  />

                  {/* Content */}
                  <p className="relative text-sm font-medium text-foreground drop-shadow-lg">
                    <motion.span
                      className="text-primary font-bold text-lg inline-block drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      5+
                    </motion.span>{" "}
                    <span className="font-semibold">years of experience</span>
                  </p>

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-violet-500/5 group-hover/badge:from-primary/10 group-hover/badge:to-violet-500/10 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Decorative orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-linear-to-br from-primary to-violet-500 opacity-60 blur-sm"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-8 w-6 h-6 rounded-full bg-linear-to-br from-pink-500 to-violet-500 opacity-60 blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
