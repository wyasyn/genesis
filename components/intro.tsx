/* eslint-disable @next/next/no-img-element */
"use client";

import { easeOut, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FolderGit2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/social-links";
import Link from "next/link";
import Image from "next/image";
import { TextLoop } from "./ui/text-loop";

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
    <section className="relative flex flex-col justify-center min-h-[90vh] text-foreground overflow-hidden pt-20 md:pt-0">
      {/* Background name with parallax */}
      <motion.div
        className="absolute inset-0 justify-center items-center pointer-events-none hidden md:flex"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${
            scrollY * 0.3 + mousePosition.y * -20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          aria-hidden="true"
          className="text-[20vw] md:text-[12vw] font-extrabold text-muted-foreground/10 select-none leading-none blur-[2px]"
        >
          YASIN WALUM
        </div>
      </motion.div>

      {/* Foreground */}
      <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">Available for projects</span>
        </motion.div>

        {/* Profile image (mobile only) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6 md:hidden"
        >
          <Image
            src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg"
            alt="Yasin Walum"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full border border-primary/20 shadow-md mx-auto"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl md:text-6xl leading-tight"
        >
          Hi, I’m <span className="text-primary">Yasin Walum</span>
          <br />I create <br className="block sm:hidden" />
          <span className="inline-block text-primary min-w-[150px] sm:min-w-[180px] md:min-w-[200px] whitespace-nowrap text-center">
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                full-stack apps
              </span>
              <span className="bg-linear-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                AI tools
              </span>
              <span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                smart systems
              </span>
              <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                clean UIs
              </span>
              <span className="bg-linear-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                sleek designs
              </span>
            </TextLoop>
          </span>
        </motion.h1>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 0.8
                : 1,
            duration: 0.7,
          }}
          className="text-muted-foreground mt-5 max-w-xl text-base md:text-lg"
        >
          I’m a full-stack developer from Uganda. I love building the web to
          solve problems and express myself.
        </motion.p>

        {/* Highlight */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 1
                : 1.3,
            duration: 0.7,
          }}
          className="text-muted-foreground  max-w-xl text-base md:text-lg mt-4"
        >
          I focus on accessibility, inclusive design and progressive enhancement
          to create a user experience that puts people first.
        </motion.p> */}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 1.2
                : 1.6,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
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

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 1.4
                : 1.8,
            duration: 0.6,
          }}
          className="mt-8"
        >
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Connect with me:
            </span>
            <SocialLinks iconSize={20} />
          </div>
          <div className="inline-flex items-center gap-2 text-xs mt-8">
            <img
              src="https://flagcdn.com/w20/ug.png"
              alt="Uganda flag"
              width="20"
              height="15"
            />
            Kampala, Uganda
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
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
