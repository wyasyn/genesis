"use client";

import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  slug: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  showAll?: boolean;
  limit?: number;
  variant?: "compact" | "featured";
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function BlogGrid({
  posts,
  showAll = false,
  limit = 3,
  variant = "compact",
  showViewAll = true,
  viewAllHref = "/blog",
}: BlogGridProps) {
  const displayedPosts = showAll ? posts : posts.slice(0, limit);
  const isFeatured = variant === "featured";

  return (
    <section className=" relative overflow-clip">
      <div className=" relative z-10">
        <div
          className="grid gap-8 lg:gap-12"
          style={{
            gridTemplateColumns:
              isFeatured && displayedPosts.length > 0
                ? "repeat(auto-fit, minmax(min(100%, 400px), 1fr))"
                : "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
          }}
        >
          {displayedPosts.map((post, index) => {
            const isFirstPost = index === 0 && isFeatured;

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(isFirstPost && "lg:col-span-2 lg:row-span-2")}
              >
                <Card
                  className={cn(
                    "group relative overflow-clip border-border/50 bg-card/50 backdrop-blur-sm hover:border-border hover:shadow-2xl transition-all duration-500 h-full flex flex-col",
                    isFirstPost && "lg:flex-row"
                  )}
                >
                  {/* Image container */}
                  <motion.div
                    className={cn(
                      "relative overflow-hidden bg-muted",
                      isFirstPost ? "lg:w-1/2" : "aspect-16/10"
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Placeholder image with gradient */}
                    <Image
                      src={post.coverImage}
                      fill
                      alt={post.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 inset-0"
                    />

                    {/* Category badge */}
                    <motion.div
                      className="absolute top-4 left-4 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Badge className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background shadow-lg">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </motion.div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Read more indicator on hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      initial={false}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="bg-primary text-primary-foreground rounded-full p-4 shadow-xl">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div
                    className={cn(
                      "p-6 flex flex-col flex-1",
                      isFirstPost && "lg:w-1/2 lg:p-8"
                    )}
                  >
                    {/* Meta info */}
                    <motion.div
                      className="flex items-center gap-4 text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-border">•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className={cn(
                        "font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2",
                        isFirstPost ? "text-2xl lg:text-3xl" : "text-xl"
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {post.title}
                    </motion.h3>

                    {/* Excerpt */}
                    <motion.p
                      className={cn(
                        "text-muted-foreground mb-6 line-clamp-3 flex-1",
                        isFirstPost ? "text-base lg:line-clamp-4" : "text-sm"
                      )}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      {post.excerpt}
                    </motion.p>

                    {/* Author and CTA */}
                    <motion.div
                      className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-border/50"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bbg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs font-semibold">
                          {post.author.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {post.author.name}
                        </span>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 text-primary hover:text-primary hover:bg-primary/10"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-transparent to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAll && !showAll && posts.length > limit && (
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
              >
                View All Posts
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
