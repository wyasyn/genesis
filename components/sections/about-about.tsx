import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="relative z-20">
      <div className="container space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-foreground text-4xl font-medium lg:text-5xl">
            Hi, I’m Yasin Walum — Full-Stack Developer & AI Enthusiast
          </h2>
          <p>
            I’m a Kampala-based developer passionate about creating seamless
            digital experiences. With over five years of hands-on experience, I
            design and build modern web and mobile applications that are fast,
            scalable, and crafted with care.
          </p>
        </div>
        <Image
          className="rounded-(--radius) grayscale hover:grayscale-0 transition-all aspect-video w-full object-cover object-top"
          src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1739381087/dd5nxmqvootvmztvr3gg.jpg"
          alt="Yasin Walum working on a project"
          width={2940}
          height={1960}
          priority
        />
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Fast Learner</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Quick to grasp new tools and frameworks, always evolving with
              technology.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Full-Stack Builder</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              From clean backend architecture to intuitive UI, I bring ideas to
              life across the stack.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Reliable Partner</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              I value precision, consistency, and security in every line of
              code.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Creative Thinker</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              I combine logic and design thinking to build elegant, impactful
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
