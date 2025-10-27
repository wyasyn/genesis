import React from "react";
import { SectionHeader } from "../section-header";

const ProjectSection = () => {
  return (
    <section>
      <div className="container py-24">
        <SectionHeader
          title="Featured Work"
          description="A curated collection of projects showcasing innovative solutions, creative problem-solving, and cutting-edge technologies. Each project represents a unique challenge and the journey to overcome it."
        />
      </div>
    </section>
  );
};

export default ProjectSection;
