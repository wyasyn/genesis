"use client";

import { easeOut, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FolderGit2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/social-links";
import Link from "next/link";
import { FloatingIcons } from "./floating-icons";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:
        i *
        (typeof window !== "undefined" && window.innerWidth < 768
          ? 0.15
          : 0.25),
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

export default function IntroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex flex-col justify-center min-h-[90vh] text-foreground overflow-hidden">
      {/* Background name text with parallax and blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 w-fit py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium">Available for projects</span>
      </motion.div>

      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${
            scrollY * 0.3 + mousePosition.y * 20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          aria-hidden="true"
          className="text-[20vw] md:text-[12vw] font-extrabold text-muted-foreground/10 select-none leading-none blur-[2px]"
        >
          <FloatingIcons />
          YASIN WALUM
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Main heading - single h1 for SEO with visually hidden name */}
        <motion.h1
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="sr-only">Yasin Walum - </span>I build{" "}
          <span className="text-primary">smart systems</span>
          <br />
          and <span className="text-primary">beautiful apps</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 0.8
                : 1.2,
            duration: 0.7,
          }}
          className="text-muted-foreground mt-6 max-w-2xl text-lg"
        >
          A fast-learning computer scientist passionate about AI, full-stack
          development, and building elegant, impactful digital experiences.
          Whether it&apos;s machine learning models or sleek UIs, I love
          bringing ideas to life through technology.
        </motion.p>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 1.1
                : 1.6,
            duration: 0.7,
          }}
          className="text-muted-foreground mt-4"
        >
          Currently leading the{" "}
          <span className="font-semibold text-foreground">
            Aurora Skin Analyzer
          </span>{" "}
          project and exploring new innovations in AI-driven systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 1.4
                : 2,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-10 flex gap-4"
        >
          <Button
            size="lg"
            className="rounded-xl flex items-center gap-2 group min-w-[150px]"
            asChild
          >
            <Link href={"/projects"}>
              <FolderGit2 className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2 group min-w-[150px] rounded-xl"
            asChild
          >
            <Link href={"/about"}>
              <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              About Me
            </Link>
          </Button>
        </motion.div>

        {/* Social Links - Below buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 1.7
                : 2.3,
            duration: 0.6,
          }}
          className="mt-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Connect with me:
            </span>
            <SocialLinks iconSize={20} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
