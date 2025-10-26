import {
  IconBriefcase,
  IconBriefcaseFilled,
  IconHome,
  IconHomeFilled,
  IconLibrary,
  IconLibraryFilled,
  IconMail,
  IconMailFilled,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";

export const navData = [
  {
    title: "Home",
    href: "/",
    icons: {
      active: IconHomeFilled,
      inactive: IconHome,
    },
  },
  {
    title: "About",
    href: "/about",
    icons: {
      active: IconUserFilled,
      inactive: IconUser,
    },
  },
  {
    title: "Blog",
    href: "/blog",
    icons: {
      active: IconLibraryFilled,
      inactive: IconLibrary,
    },
  },
  {
    title: "Projects",
    href: "/projects",
    icons: {
      active: IconBriefcaseFilled,
      inactive: IconBriefcase,
    },
  },
  {
    title: "Contact",
    href: "/contact",
    icons: {
      active: IconMailFilled,
      inactive: IconMail,
    },
  },
] as const; // Added 'as const' for better type inference
