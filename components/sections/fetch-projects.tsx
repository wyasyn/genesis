import { mockProjects } from "@/data/projects";
import ProjectCard from "../projectCard";
import ShowViewAll from "./show-all-projects-bt";

const FetchProjects = async () => {
  "use cache";

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-5">
        {mockProjects.slice(0, 4).map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
      <ShowViewAll
        data={mockProjects}
        showViewAll
        limit={4}
        viewAllHref="/projects"
      />
    </>
  );
};

export default FetchProjects;
