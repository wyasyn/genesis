import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconBrandX,
} from "@tabler/icons-react";

export const socialData = [
  {
    name: "GitHub",
    href: "https://github.com/wyasyn",
    icon: IconBrandGithub,
    hoverColor: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yasin-walum",
    icon: IconBrandLinkedin,
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    name: "Twitter",
    href: "https://x.com/wyasyn",
    icon: IconBrandX,
    hoverColor: "hover:text-[#1DA1F2]",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yasin-walum",
    icon: IconBrandInstagram,
    hoverColor: "hover:text-[#E4405F]",
  },
  {
    name: "Email",
    href: "mailto:ywalum@gmail.com",
    icon: IconMail,
    hoverColor: "hover:text-primary",
  },
] as const;
