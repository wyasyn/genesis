import IntroHeroSection from "../intro";
import { DotBackground } from "../dots-background";

const Hero = () => {
  return (
    <section>
      <DotBackground>
        <IntroHeroSection />
      </DotBackground>
    </section>
  );
};

export default Hero;
