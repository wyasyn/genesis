"use client";
import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
  text: string;
}

export const SectionHeader = ({
  title,
  description,
  className = "",
  text,
}: SectionHeaderProps) => {
  return (
    <motion.div
      className={`mb-12 md:mb-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-caption -ml-6 -mt-3.5 block w-max px-6 bg-background">
        {title}
      </span>
      <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
        <div className="sm:w-2/5">
          <h2 className="text-3xl font-serif text-foreground sm:text-4xl">
            {text}
          </h2>
        </div>
        <div className="mt-6 sm:mt-0">
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
