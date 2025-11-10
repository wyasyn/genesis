import { mockProjects } from "@/data/projects";
import ProjectCard from "../projectCard";

const FetchProjects = async () => {
  "use cache";

  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {mockProjects.map((project, index) => (
        <ProjectCard project={project} index={index} key={index} />
      ))}
    </div>
  );
};

export default FetchProjects;
