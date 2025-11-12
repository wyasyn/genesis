"use client";
import { Code2, Palette, Smartphone, Brain } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeader } from "../section-header";

export default function Services() {
  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container space-y-12 px-6">
        <SectionHeader
          title="What I Offer"
          text="Services"
          description="Crafting modern, high-performance web experiences — from design to deployment."
        />

        {/* Bento Grid */}
        <div className="mx-auto grid gap-4 sm:grid-cols-5">
          {/* Web Development - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-md transition-all hover:shadow-xl sm:col-span-3"
          >
            <div className="relative h-full min-h-[400px]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                alt="web development workspace"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 backdrop-blur-sm">
                    <Code2 className="size-5 text-primary" />
                  </div>
                  <p className="text-xl font-semibold">Web Development</p>
                </div>
                <p className="max-w-md text-sm text-muted-foreground">
                  Designing and developing fast, scalable, and responsive
                  websites and web apps using modern technologies like Next.js,
                  React, and Node.js.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile App Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-md transition-all hover:shadow-xl sm:col-span-2"
          >
            <div className="relative h-full min-h-[400px]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                alt="mobile app development"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 backdrop-blur-sm">
                    <Smartphone className="size-5 text-primary" />
                  </div>
                  <p className="text-lg font-semibold">
                    Mobile App Development
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Creating cross-platform mobile applications with seamless
                  performance and beautiful UIs using Flutter and React Native.
                </p>
              </div>
            </div>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-md transition-all hover:shadow-xl sm:col-span-2"
          >
            <div className="relative h-full min-h-[400px]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2864&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                alt="UI/UX design prototyping"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 backdrop-blur-sm">
                    <Palette className="size-5 text-primary" />
                  </div>
                  <p className="text-lg font-semibold">
                    UI/UX Design & Prototyping
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Crafting intuitive interfaces that delight users and drive
                  engagement with thoughtful design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI & ML Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-md transition-all hover:shadow-xl sm:col-span-3"
          >
            <div className="relative h-full min-h-[400px]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                alt="AI and machine learning visualization"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 backdrop-blur-sm">
                    <Brain className="size-5 text-primary" />
                  </div>
                  <p className="text-xl font-semibold">
                    AI & Machine Learning Solutions
                  </p>
                </div>
                <p className="max-w-md text-sm text-muted-foreground">
                  Building intelligent systems that leverage machine learning
                  and data analysis to automate processes and deliver smart
                  insights.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
