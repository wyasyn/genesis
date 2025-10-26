"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

interface NavIconProps {
  title: string;
  href: string;
  index: number;
  icons: {
    active: React.ElementType;
    inactive: React.ElementType;
  };
}

export const NavIcon = ({ title, href, icons, index }: NavIconProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = isActive ? icons.active : icons.inactive;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link
              href={href}
              className={cn(
                "relative p-2 rounded-full transition-all duration-300 block group",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              )}
            >
              {/* Active indicator dot */}
              {isActive && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Icon with hover scale */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon size={22} strokeWidth={1.8} />
              </motion.div>
            </Link>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
