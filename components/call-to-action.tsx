"use client";

import { motion } from "motion/react";
import { Section } from "./pages/about-page";

export default function CTASection() {
  return (
    <Section className="py-20 md:py-32 bg-linear-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-12 rounded-3xl bg-linear-to-br from-primary/10 via-violet-500/5 to-pink-500/10 border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-primary">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate
              on interesting projects. Whether you have a project in mind or
              just want to chat about tech, feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="px-8 py-3 rounded-xl bg-card border border-border font-medium hover:border-primary/50 transition-colors"
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
