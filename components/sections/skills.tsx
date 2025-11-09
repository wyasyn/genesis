import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code2, Database, Brain, Smartphone } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="py-16 md:py-32">
      <div className="@container container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-balance text-4xl text-foreground lg:text-5xl ">
            Technical Expertise Across the Stack
          </h2>
          <p className="mt-4">
            Comprehensive skills in modern technologies, from frontend to
            backend, AI, and mobile development.
          </p>
        </div>
        <div className="@min-4xl:max-w-full mx-auto mt-8 grid max-w-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Code2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Frontend Development</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                React, Next.js, TypeScript, Tailwind CSS. Building responsive,
                interactive user interfaces with modern frameworks.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Database className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Backend Development</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Node.js, Express, PostgreSQL, MongoDB. Creating robust APIs and
                scalable server-side applications.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Brain className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Machine Learning</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Python, TensorFlow, PyTorch. Developing intelligent solutions
                with AI and machine learning models.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Smartphone className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Mobile Development</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                React Native, Flutter. Building cross-platform mobile
                applications with native performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)] ">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
