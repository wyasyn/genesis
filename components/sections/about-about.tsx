import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="relative z-20">
      <div className="container space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-foreground text-4xl font-medium lg:text-5xl">
            Yasin Walum is a Full-Stack Developer Crafting Digital Experiences
          </h2>
          <p>
            Based in Kampala, Uganda, I transform ideas into powerful web
            applications with 5+ years of experience. Specializing in modern
            tech stacks, I deliver scalable solutions that blend elegant code
            with exceptional user experiences.
          </p>
        </div>
        <Image
          className="rounded-(--radius) grayscale hover:grayscale-0 transition-all aspect-video w-full object-cover object-top"
          src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1739381087/dd5nxmqvootvmztvr3gg.jpg"
          alt="team image"
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
              Quick to adapt to new technologies and frameworks, constantly
              staying ahead of industry trends.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Full-Stack</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Experienced in both frontend and backend development with modern
              tech stacks.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Reliable</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Committed to delivering quality code with attention to security
              and best practices.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Creative</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Bringing innovative solutions to complex problems with thoughtful
              design thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
