"use client";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const SparklesItem = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 cursor-default"
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-4 h-4 text-primary" />
      </motion.div>
      <span className="text-sm font-medium">{text}</span>
    </motion.div>
  );
};

export default SparklesItem;
