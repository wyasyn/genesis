import LightRaySection from "@/components/light-ray";
import Hero from "@/components/sections/hero";
import { ModeToggle } from "@/components/theme-toggle";

const MainHomePage = () => {
  return (
    <div className="md:pt-24 pt-8">
      <LightRaySection />
      <Hero />
      <ModeToggle />
    </div>
  );
};

export default MainHomePage;
