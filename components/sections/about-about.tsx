import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="relative z-20 ">
      <div className="container mx-auto space-y-12 px-6 md:space-y-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-serif tracking-tight lg:text-5xl xl:text-6xl">
            Hi, I&apos;m Yasin Walum
          </h2>
          <p className=" leading-relaxed ">
            I&apos;m a Kampala-based developer passionate about creating
            seamless digital experiences. With over five years of hands-on
            experience, I design and build modern web and mobile applications
            that are fast, scalable, and crafted with care.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
          <Image
            className="aspect-video w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
            src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1739381087/dd5nxmqvootvmztvr3gg.jpg"
            alt="Yasin Walum working on a project"
            width={1200}
            height={675}
            priority
          />
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 rounded-xl border backdrop-blur-sm p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-50 p-2">
                <Zap className="size-5 text-blue-600" />
              </div>
              <h3 className="font-semibold">Fast Learner</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Quick to grasp new tools and frameworks, always evolving with
              technology.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border backdrop-blur-sm  p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-50 p-2">
                <Cpu className="size-5 text-purple-600" />
              </div>
              <h3 className="font-semibold">Full-Stack Builder</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              From clean backend architecture to intuitive UI, I bring ideas to
              life across the stack.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border backdrop-blur-sm p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-50 p-2">
                <Lock className="size-5 text-green-600" />
              </div>
              <h3 className="font-semibold">Reliable Partner</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              I value precision, consistency, and security in every line of
              code.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border  p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber-50 p-2">
                <Sparkles className="size-5 text-amber-600" />
              </div>
              <h3 className="font-semibold">Creative Thinker</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              I combine logic and design thinking to build elegant, impactful
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
