/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code2, Palette } from "lucide-react";

export default function Services() {
  return (
    <section className="dark:bg-muted/25 bg-zinc-50 py-20 md:py-32">
      <div className="@container container space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Crafting modern, high-performance web experiences — from design to
            deployment.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mx-auto grid gap-4 sm:grid-cols-5">
          {/* Services Overview */}
          <Card className="group overflow-hidden shadow-md hover:shadow-lg transition-all sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="text-xl font-semibold">Services I Offer</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  From concept to deployment, I deliver tailored full-stack
                  solutions that blend functionality with thoughtful design.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t dark:bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  alt="web development workspace"
                />
              </div>
            </div>
          </Card>

          {/* Full Stack */}
          <Card className="group overflow-hidden shadow-md hover:shadow-lg transition-all sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl">
              Full-Stack Web Development
            </p>
            <CardContent className="mt-auto h-fit">
              <div className="relative max-sm:mb-6 overflow-hidden rounded-r-lg border">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="full stack development"
                />
              </div>
            </CardContent>
          </Card>

          {/* UI/UX */}
          <Card className="group p-6 shadow-md hover:shadow-lg transition-all sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <p className="mx-auto mb-10 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
              UI/UX Design & Prototyping
            </p>

            <div className="flex justify-center gap-6">
              <div className="bg-muted/40 dark:bg-muted/20 flex aspect-square size-16 items-center justify-center rounded-[8px] border p-3 shadow-inner">
                <Palette className="m-auto size-8" />
              </div>
              <div className="bg-muted/40 dark:bg-muted/20 flex aspect-square size-16 items-center justify-center rounded-[8px] border p-3 shadow-inner">
                <Code2 className="size-8" />
              </div>
            </div>
          </Card>

          {/* API Development */}
          <Card className="group relative shadow-md hover:shadow-lg transition-all sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="text-xl font-semibold">
                API Development & Integration
              </p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Building robust APIs and connecting third-party services to
                create powerful, connected ecosystems.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                {[
                  "https://oxymor-ns.tailus.io/logos/linear.svg",
                  "https://oxymor-ns.tailus.io/logos/netlify.svg",
                  "https://oxymor-ns.tailus.io/logos/github.svg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="bg-muted/50 flex aspect-square items-center justify-center rounded-lg border p-4 hover:bg-muted/70 transition-all"
                  >
                    <img
                      className="m-auto size-8 invert dark:invert-0"
                      src={src}
                      alt="Integration logo"
                      width="32"
                      height="32"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
