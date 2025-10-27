import LogoCloud from "@/components/logo-cloud";
import BlogSection from "@/components/sections/blog-section";
import Hero from "@/components/sections/hero";
import ProjectSection from "@/components/sections/projects";
import { TestimonialsStars } from "@/components/Testimonials";

const MainHomePage = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <ProjectSection />
      <BlogSection />
      <TestimonialsStars />
    </div>
  );
};

export default MainHomePage;
