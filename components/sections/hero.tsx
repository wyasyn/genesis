import IntroHeroSection from "../intro";
import { DotBackground } from "../dots-background";

const Hero = () => {
  return (
    <section>
      <DotBackground>
        <div>
          <IntroHeroSection />
        </div>
      </DotBackground>
    </section>
  );
};

export default Hero;
