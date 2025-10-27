"use client";
import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
}

export const PageHero = ({
  title,
  subtitle,
  description,
  className = "",
}: PageHeroProps) => {
  return (
    <motion.div
      className={`py-20 md:py-32 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium mb-4">
          {subtitle}
        </p>
        <h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground max-w-prose text-balance leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};
