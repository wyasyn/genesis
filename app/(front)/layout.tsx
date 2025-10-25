import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";

const FrontLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
