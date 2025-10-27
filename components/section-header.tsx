"use client";
import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      className={`mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-foreground text-4xl font-serif">{title}</h2>
      <p className="text-muted-foreground my-4 max-w-prose text-balance">
        {description}
      </p>
    </motion.div>
  );
};
