import {
  IconBriefcase,
  IconBriefcaseFilled,
  IconHome,
  IconHomeFilled,
  IconLibrary,
  IconLibraryFilled,
  IconMail,
  IconMailFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { User } from "lucide-react";

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
      inactive: User,
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
];
