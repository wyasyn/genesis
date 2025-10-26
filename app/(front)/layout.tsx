import Footer from "@/components/footer";
import LightRaySection from "@/components/light-ray";
import Navbar from "@/components/nav-bar";
import { ReadingProgress } from "@/components/reading-progress";

const FrontLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <LightRaySection />
      <ReadingProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
