/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container space-y-8 px-6 md:space-y-12">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-(--radius) grayscale"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Collaborative team working together"
          height=""
          width=""
          loading="lazy"
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className=" text-balance">
              <span className=" text-2xl md:text-4xl font-light tracking-tight leading-none">
                Yasin
              </span>
              {"  "}
              <span className=" text-2xl md:text-4xl font-bold tracking-tight leading-none mt-1">
                Walum
              </span>
              <span className="block text-base md:text-xl mt-6 text-muted-foreground font-sans tracking-wide uppercase">
                Full Stack Developer
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed">
              Passionate developer combining technical expertise with creative
              design. Based in Kampala, Uganda, I create meaningful digital
              experiences that solve real-world problems. I focus on
              accessibility, inclusive design and progressive enhancement to
              create a user experience that puts people first.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="/about">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
