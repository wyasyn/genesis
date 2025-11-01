import LightRaySection from "@/components/light-ray";
import BlogSection from "@/components/sections/blog-section";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/home-about";
import ProjectSection from "@/components/sections/projects";

const MainHomePage = () => {
  return (
    <div>
      <LightRaySection />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
    </div>
  );
};

export default MainHomePage;
