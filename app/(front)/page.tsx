import CTASection from "@/components/call-to-action";
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
      <CTASection />
    </div>
  );
};

export default MainHomePage;
