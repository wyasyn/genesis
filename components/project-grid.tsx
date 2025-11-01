"use client";

import { motion } from "motion/react";
import { Layers, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
  stack: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectsGridProps {
  projects: Project[];
  showAll?: boolean;
  limit?: number;
  variant?: "compact" | "featured";
  showViewAll?: boolean;
  viewAllHref?: string;
  showFeaturedOnly?: boolean;
}

export function ProjectsGrid({
  projects,
  showAll = false,
  limit = 4,
  variant = "compact",
  showViewAll = true,
  viewAllHref = "/projects",
  showFeaturedOnly = false,
}: ProjectsGridProps) {
  const filteredProjects = showFeaturedOnly
    ? projects.filter((p) => p.featured)
    : projects;

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, limit);

  const isFeatured = variant === "featured";

  return (
    <section className="relative overflow-clip">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className=" relative z-10">
        <div
          className="grid gap-6 lg:gap-8"
          style={{
            gridTemplateColumns:
              isFeatured && displayedProjects.length > 0
                ? "repeat(auto-fit, minmax(min(100%, 450px), 1fr))"
                : "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
          }}
        >
          {displayedProjects.map((project, index) => {
            const isFirstProject = index === 0 && isFeatured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(isFirstProject && "lg:col-span-2")}
              >
                <Link href={`/projects/${project.id}`} className="block h-full">
                  <Card
                    className={cn(
                      "group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border hover:shadow-2xl transition-all duration-500 h-full cursor-pointer",
                      isFirstProject ? "min-h-[500px]" : "min-h-[400px]"
                    )}
                  >
                    {/* Tags as badges at top */}
                    {project.tags.length > 0 && (
                      <motion.div
                        className="absolute top-4 left-4 right-4 z-30 flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.3,
                        }}
                      >
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="bg-background/90 backdrop-blur-sm border-border shadow-lg"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge
                            variant="outline"
                            className="bg-background/90 backdrop-blur-sm border-border shadow-lg"
                          >
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </motion.div>
                    )}

                    {/* Full background image */}
                    <div className="absolute inset-0">
                      {project.imageUrl ? (
                        <motion.div
                          className="absolute inset-0 bg-cover bg-center z-0"
                          style={{
                            backgroundImage: `url(${project.imageUrl})`,
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-primary/20 flex items-center justify-center">
                          <Layers className="w-24 h-24 text-primary/30" />
                        </div>
                      )}
                    </div>

                    {/* Bottom gradient (always visible) */}
                    <div
                      className="absolute inset-0 bg-linear-to-t from-background via-background/95 to-transparent z-10"
                      style={{
                        background:
                          "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 30%, transparent 60%)",
                      }}
                    />

                    {/* Hover overlay - darkens entire card */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                    {/* Content container - always at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                      <div className={cn(isFirstProject && "max-w-2xl")}>
                        <motion.h3
                          className={cn(
                            "font-bold mb-2 text-white drop-shadow-lg group-hover:text-primary transition-colors duration-300",
                            isFirstProject ? "text-2xl lg:text-3xl" : "text-xl"
                          )}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p
                          className={cn(
                            "text-white/90 drop-shadow group-hover:text-foreground transition-colors duration-300",
                            isFirstProject
                              ? "text-base line-clamp-3"
                              : "text-sm line-clamp-2"
                          )}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {project.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-transparent to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-10" />
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAll && !showAll && projects.length > limit && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 group shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href={viewAllHref}>
                  View All Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
