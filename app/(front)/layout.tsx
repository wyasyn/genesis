import CTASection from "@/components/call-to-action";
import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";
import { ReadingProgress } from "@/components/reading-progress";
import { TestimonialsStars } from "@/components/Testimonials";

const FrontLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <ReadingProgress />
      <Navbar />
      <main className="flex-1">
        {children}
        <TestimonialsStars />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
