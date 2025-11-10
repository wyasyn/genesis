import LightRaySection from "@/components/light-ray";
import BlogSection from "@/components/sections/blog-section";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/home-about";
import ProjectsSection from "@/components/sections/project-seection";

const MainHomePage = () => {
  return (
    <div>
      <LightRaySection />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
    </div>
  );
};

export default MainHomePage;
