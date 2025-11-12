"use client";
import { navData } from "@/data/nav-data";
import { NavIcon } from "./nav-icon";
import { useIsMounted } from "@/hooks";
import { motion } from "motion/react";
import { ModeToggle } from "./mode-toggle";
import Pic from "./pic";

const Navbar = () => {
  const mounted = useIsMounted();
  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto top-auto bottom-6 z-50 flex justify-center"
      role="banner"
    >
      <nav
        className="inline-flex w-auto px-3 py-2 items-center justify-center
                   bg-card/50 backdrop-blur-sm shadow-sm border rounded-3xl gap-4"
        aria-label="Main navigation"
      >
        <Pic />
        <div
          className="w-px h-6 bg-border hidden sm:inline-block"
          aria-hidden="true"
        />
        {navData.map((item, index) => (
          <NavIcon key={item.href} index={index} {...item} />
        ))}
        <div
          className="w-px h-6 bg-border hidden sm:inline-block"
          aria-hidden="true"
        />{" "}
        {/* Divider */}
        <ModeToggle />
      </nav>
    </motion.header>
  );
};

export default Navbar;
