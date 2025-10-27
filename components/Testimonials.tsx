"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "./section-header";

// Mock data since we don't have access to the actual data file
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
];

export function TestimonialsStars() {
  return (
    <section className="py-24 md:py-32">
      <div>
        <div className="container mx-auto w-full max-w-5xl px-6">
          <SectionHeader
            title="What Clients Say"
            description="Hear from our satisfied clients who have transformed their projects with SmoothUI."
          />

          <motion.div
            className="3xl:grid-cols-3 3xl:gap-12 grid gap-6 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group hover:bg-background/50 hover:border-border rounded-2xl border border-transparent px-4 py-3 duration-200"
              >
                <motion.div
                  className="flex gap-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={`${testimonial.name}-star-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + 0.2 + i * 0.05,
                        ease: [0.68, -0.55, 0.265, 1.55],
                      }}
                    >
                      <Star
                        className={cn(
                          "size-4 transition-colors duration-200",
                          i < (testimonial.stars || 0)
                            ? "fill-yellow-400 stroke-yellow-400"
                            : "fill-transparent stroke-gray-300"
                        )}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-foreground my-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {testimonial.content}
                </motion.p>

                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15 + 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-foreground text-sm font-medium">
                    {testimonial.name}
                  </div>
                  <span
                    aria-hidden
                    className="bg-foreground/25 size-1 rounded-full"
                  ></span>
                  <span className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
