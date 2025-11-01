import { PageHero } from "@/components/page-title";
import { ProjectsGrid } from "@/components/project-grid";
import { mockProjects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="container">
      <PageHero
        subtitle="Portfolio"
        title="Selected Works"
        description="A showcase of projects that blend creativity with technical excellence. From concept to deployment, each piece represents a commitment to quality and innovation."
      />
      <ProjectsGrid
        projects={mockProjects}
        showAll={true}
        variant="featured"
        showViewAll={false}
      />
    </div>
  );
};

export default ProjectsPage;
