// components/floating-icons.tsx
"use client";

import { motion } from "motion/react";
import {
  IconBrandReact,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandDocker,
} from "@tabler/icons-react";

const techIcons = [
  { Icon: IconBrandReact, delay: 0, x: "10%", y: "20%" },
  { Icon: IconBrandPython, delay: 0.5, x: "85%", y: "30%" },
  { Icon: IconBrandTypescript, delay: 1, x: "15%", y: "70%" },
  { Icon: IconBrandTailwind, delay: 1.5, x: "80%", y: "60%" },
  { Icon: IconBrandNodejs, delay: 2, x: "20%", y: "45%" },
  { Icon: IconBrandDocker, delay: 2.5, x: "75%", y: "80%" },
];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay },
            scale: { duration: 4, repeat: Infinity, delay },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          style={{ left: x, top: y }}
          className="absolute"
        >
          <Icon size={40} className="text-primary/10" strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};
