import React from "react";
import { SectionHeader } from "../section-header";

const BlogSection = () => {
  return (
    <section>
      <div className="container py-24">
        <SectionHeader
          title="From the Blog"
          description="Insights, stories, and tips from our team and community. Stay updated with the latest trends and best practices in the industry."
        />
      </div>
    </section>
  );
};

export default BlogSection;
