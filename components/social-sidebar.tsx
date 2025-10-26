"use client";

import { SocialLinks } from "@/components/social-links";
import { motion } from "motion/react";

export const SocialSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6"
    >
      <SocialLinks variant="vertical" iconSize={22} />

      {/* Decorative line */}
      <div className="w-px h-24 bg-linear-to-t from-transparent to-border" />
    </motion.aside>
  );
};
