import React from "react";
import { SectionHeader } from "../section-header";
import { BlogGrid } from "../blog-grid";
import { mockBlogPosts } from "@/data/blog";

const BlogSection = () => {
  return (
    <section className=" py-16 md:py-32 ">
      <div className="container border-t px-6">
        <SectionHeader
          text="Blog"
          title="From the Blog"
          description="Writing about code, design, and the lessons learned along the way. A collection of insights, tutorials, and reflections on building for the web."
        />
        <BlogGrid
          posts={mockBlogPosts}
          limit={3}
          variant="compact"
          showViewAll={true}
        />
      </div>
    </section>
  );
};

export default BlogSection;
