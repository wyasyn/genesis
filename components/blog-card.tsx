"use client";
import { Blog, BlogListItem } from "@/hooks/blog-hooks";
import Image from "next/image";
import { motion } from "motion/react";
import { cn, estimateReadTime, formatDate } from "@/lib/utils";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const BlogCard = ({
  post,
  index,
  isFeatured,
}: {
  post: BlogListItem;
  index: number;
  isFeatured: boolean;
}) => {
  const isFirstPost = index === 0 && isFeatured;
  const primaryTag = post.tags[0] || "Article";
  const readTime = estimateReadTime(post.content);
  const formattedDate = formatDate(
    post.publishedAt ? new Date(post.publishedAt) : new Date()
  );
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
      <article
        className={cn(
          "group relative overflow-clip border rounded-lg border-border/50 bg-card/50 backdrop-blur-sm hover:border-border hover:shadow-2xl transition-all duration-500 h-full flex flex-col",
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
          {/* Image or fallback */}
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              fill
              alt={post.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 inset-0"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <Tag className="w-16 h-16 text-muted-foreground/20" />
            </div>
          )}

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
              {primaryTag}
            </Badge>
          </motion.div>

          {/* Additional tags */}
          {post.tags.length > 1 && (
            <motion.div
              className="absolute top-4 right-4 z-10 flex gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <Badge
                variant="secondary"
                className="bg-background/90 backdrop-blur-sm border-border/50 text-xs"
              >
                +{post.tags.length - 1}
              </Badge>
            </motion.div>
          )}

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
              <span>{formattedDate}</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
            {post.views > 0 && (
              <>
                <span className="text-border">•</span>
                <span>{post.views.toLocaleString()} views</span>
              </>
            )}
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
          {post.excerpt && (
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
          )}

          {/* Tags and CTA */}
          <motion.div
            className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-border/50"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.7 }}
          >
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-primary hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href={`/blog/${post.slug}`}>
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-transparent to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      </article>
    </motion.div>
  );
};

export default BlogCard;
