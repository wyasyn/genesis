import React from "react";
import { SectionHeader } from "../section-header";
import { ProjectsGrid } from "../project-grid";
import { mockProjects } from "@/data/projects";

const ProjectSection = () => {
  return (
    <section>
      <div className="container py-24">
        <SectionHeader
          title="Featured Work"
          description="A curated collection of projects showcasing innovative solutions, creative problem-solving, and cutting-edge technologies. Each project represents a unique challenge and the journey to overcome it."
        />
        <ProjectsGrid
          projects={mockProjects}
          showFeaturedOnly={true}
          limit={4}
          variant="compact"
          showViewAll={true}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
