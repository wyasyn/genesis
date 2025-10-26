import { cn } from "@/lib/utils";

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-70vh ">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(var(--border)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background "></div>
      <div className=" relative z-20 container ">{children}</div>
    </div>
  );
}
