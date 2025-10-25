"use client";
import { navData } from "@/data/nav-data";
import { NavIcon } from "./nav-icon";
import { useIsMounted } from "@/hooks";

const Navbar = () => {
  const mounted = useIsMounted();
  if (!mounted) return null;

  return (
    <header className="fixed left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto top-auto bottom-6 z-50 flex justify-center">
      <nav
        className="inline-flex w-auto px-3 py-2 items-center justify-center
                   bg-card/50 backdrop-blur-sm shadow-sm border rounded-4xl gap-4"
      >
        {navData.map((item) => (
          <NavIcon key={item.href} {...item} />
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
