import React from "react";
import { SectionHeader } from "../section-header";
import { BlogGrid } from "../blog-grid";
import { mockBlogPosts } from "@/data/blog";

const BlogSection = () => {
  return (
    <section className=" py-24">
      <div className="container">
        <SectionHeader
          title="From the Blog"
          description="Insights, stories, and tips from our team and community. Stay updated with the latest trends and best practices in the industry."
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
