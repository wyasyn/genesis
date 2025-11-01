"use client";

import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeader } from "./section-header";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    avatar: "SC",
    stars: 5,
    content:
      "SmoothUI has completely transformed how we build interfaces. The components are beautifully crafted and incredibly easy to customize.",
  },
  {
    name: "Mike Johnson",
    role: "Product Designer",
    avatar: "MJ",
    stars: 5,
    content:
      "The attention to detail in these components is outstanding. Our development time has been cut in half since we started using SmoothUI.",
  },
  {
    name: "Alex Rivera",
    role: "Full Stack Engineer",
    avatar: "AR",
    stars: 5,
    content:
      "Best component library I've worked with. The animations are smooth, the code is clean, and the documentation is top-notch.",
  },
  {
    name: "Emma Watson",
    role: "UI/UX Designer",
    avatar: "EW",
    stars: 5,
    content:
      "SmoothUI strikes the perfect balance between aesthetics and functionality. Our clients love the polished look it brings to our projects.",
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    avatar: "DK",
    stars: 5,
    content:
      "Implementing SmoothUI was a game-changer for our team. The performance optimizations and developer experience are unmatched.",
  },
  {
    name: "Lisa Anderson",
    role: "Startup Founder",
    avatar: "LA",
    stars: 5,
    content:
      "We launched our MVP in record time thanks to SmoothUI. The professional polish it adds to our product is invaluable.",
  },
];

export function TestimonialsStars() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]),
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]),
        }}
      />

      <div className="container  relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            title="What Clients Say"
            description="Hear from our satisfied clients who have transformed their projects with SmoothUI."
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group relative"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute -inset-px bg-linear-to-brfrom-primary/20 via-transparent to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full shadow-lg group-hover:shadow-2xl group-hover:border-border transition-all duration-300">
                  {/* Floating stars animation */}
                  <motion.div
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.1 + 0.3 }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={`${testimonial.name}-star-${i}`}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: (index % 3) * 0.1 + 0.3 + i * 0.05,
                          ease: [0.68, -0.55, 0.265, 1.55],
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Star
                          className={cn(
                            "size-4 transition-all duration-300",
                            i < (testimonial.stars || 0)
                              ? "fill-yellow-400 stroke-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                              : "fill-transparent stroke-muted-foreground/30"
                          )}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.1 + 0.5 }}
                  >
                    <p className="text-foreground/90 text-base leading-relaxed mb-6 relative">
                      <span className="text-primary/30 text-5xl absolute -left-2 -top-4 font-serif">
                        &quot;
                      </span>
                      <span className="relative z-10">
                        {testimonial.content}
                      </span>
                    </p>
                  </motion.div>

                  {/* Author info with parallax effect */}
                  <motion.div
                    className="flex items-center gap-3 mt-auto"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.1 + 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Avatar className="size-10 border-2 border-primary/20 shadow-lg ring-2 ring-background">
                        <AvatarFallback className="bg-linear-to-br from-primary/20 to-secondary/20 text-foreground font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="text-foreground text-sm font-semibold truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {testimonial.role}
                      </div>
                    </div>
                  </motion.div>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <Avatar className="size-8 border-2 border-background shadow-md">
                    <AvatarFallback className="bg-linear-to-br from-primary/20 to-secondary/20 text-xs">
                      {t.avatar}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground/80">
              Join 500+ satisfied clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
