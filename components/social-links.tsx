"use client";

import { socialData } from "@/data/social-data";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface SocialLinksProps {
  variant?: "horizontal" | "vertical";
  showLabel?: boolean;
  className?: string;
  iconSize?: number;
}

export const SocialLinks = ({
  variant = "horizontal",
  showLabel = false,
  className,
  iconSize = 20,
}: SocialLinksProps) => {
  return (
    <div
      className={cn(
        "flex",
        variant === "vertical" ? "flex-col" : "flex-row items-center",
        className
      )}
    >
      {socialData.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      "group relative flex items-center justify-center",
                      "w-10 h-10 rounded-full transition-all duration-300",
                      "text-muted-foreground hover:bg-muted",
                      "no-underline hover:no-underline",
                      social.hoverColor
                    )}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon size={iconSize} strokeWidth={1.8} />
                    </motion.div>

                    {showLabel && (
                      <span className="ml-2 text-sm font-medium">
                        {social.name}
                      </span>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side={variant === "vertical" ? "right" : "bottom"}
                >
                  <p className="text-xs">{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        );
      })}
    </div>
  );
};
