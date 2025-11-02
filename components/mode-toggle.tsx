"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useIsMounted } from "@/hooks";

export function ModeToggle() {
  const mounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="group p-2 hidden sm:inline-block rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors relative"
      aria-label="Toggle theme"
    >
      <IconSun
        size={22}
        strokeWidth={1.8}
        className="scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90 group-hover:rotate-360"
      />
      <IconMoon
        size={22}
        strokeWidth={1.8}
        className="absolute inset-0 m-auto scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0 group-hover:rotate-360 dark:group-hover:rotate-360"
      />
    </motion.button>
  );
}
