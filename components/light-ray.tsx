"use client";
import { useTheme } from "next-themes";
import LightRays from "./LightRays";

const LightRaySection = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Dark: blue (good on dark backgrounds)
  // Light: warm amber (good contrast on light backgrounds)
  const raysColor = isDark ? "#1055C9" : "#A3CCDA";

  return (
    <div className="absolute min-h-screen inset-0 top-0 z-[-1]">
      <LightRays
        raysOrigin="top-center"
        raysColor={raysColor}
        raysSpeed={0.5}
        lightSpread={0.8}
        rayLength={1.4}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.0}
        distortion={0.01}
      />
    </div>
  );
};

export default LightRaySection;
