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

interface NavIconProps {
  title: string;
  href: string;
  icons: {
    active: React.ElementType;
    inactive: React.ElementType;
  };
}

export const NavIcon = ({ title, href, icons }: NavIconProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = isActive ? icons.active : icons.inactive;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              "p-2 rounded-full transition-colors",
              isActive
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-muted"
            )}
          >
            <Icon size={22} strokeWidth={1.8} />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="text-sm">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
