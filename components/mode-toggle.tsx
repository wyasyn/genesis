"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useIsMounted } from "@/hooks";

export const ThemeToggleNav = () => {
  const mounted = useIsMounted();
  const { theme, setTheme } = useTheme();
  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IconSun size={22} strokeWidth={1.8} />
      ) : (
        <IconMoon size={22} strokeWidth={1.8} />
      )}
    </motion.button>
  );
};
