import { PageHero } from "@/components/page-title";

const BlogPage = () => {
  return (
    <div className="container">
      <PageHero
        subtitle="Blog"
        title="Thoughts & Ideas"
        description="Writing about code, design, and the lessons learned along the way. A collection of insights, tutorials, and reflections on building for the web."
      />
    </div>
  );
};

export default BlogPage;
