import { BlogGrid } from "@/components/blog-grid";
import { PageHero } from "@/components/page-title";
import { mockBlogPosts } from "@/data/blog";

const BlogPage = () => {
  return (
    <div className="container">
      <PageHero
        subtitle="Blog"
        title="Thoughts & Ideas"
        description="Writing about code, design, and the lessons learned along the way. A collection of insights, tutorials, and reflections on building for the web."
      />
      <BlogGrid
        posts={mockBlogPosts}
        showAll={true}
        variant="featured"
        showViewAll={false}
      />
    </div>
  );
};

export default BlogPage;
