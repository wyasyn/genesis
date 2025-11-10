"use client";

import { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
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
      className="group relative w-[350px]"
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
            <span className="relative z-10">{testimonial.content}</span>
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
};

export default TestimonialCard;
