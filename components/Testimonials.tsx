"use client";

import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeader } from "./section-header";
import { Marquee } from "./ui/marquee";
import { getTestimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export function TestimonialsStars() {
  const testimonialsData = getTestimonials();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
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

      <div className="container  relative border-t px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            text="Testimonials"
            title="Trusted by Clients and Teams"
            description="Feedback from those I’ve worked with — reflecting quality, reliability, and collaboration in every project."
          />
        </motion.div>

        <div className="relative container flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8">
          <Marquee pauseOnHover repeat={3} className="[--duration:120s]">
            {testimonialsData.map((testimonial, index) => {
              return (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                />
              );
            })}
          </Marquee>
          <Marquee
            pauseOnHover
            reverse
            repeat={3}
            className="[--duration:120s]"
          >
            {testimonialsData.map((testimonial, index) => {
              return (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                />
              );
            })}
          </Marquee>
          {/* Stylish gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background/95 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background/95 to-transparent"></div>
          <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-linear-to-b from-background/90 to-transparent"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/90 to-transparent"></div>
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
              {testimonialsData.slice(0, 4).map((t, i) => (
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
