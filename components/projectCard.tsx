import { mockProjects } from "@/data/projects";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = (typeof mockProjects)[0];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div className="group overflow-hidden">
      <Image
        className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
        src={project.imageUrl || "/placeholder.jpg"}
        alt="team member"
        width="826"
        height="1239"
      />
      <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
        <div className="flex justify-between">
          <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
            {project.title}
          </h3>
          <span className="text-xs">_0{index + 1}</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.stack.slice(0, 3).map((stack, index) => (
              <span
                key={index}
                className="text-muted-foreground inline-block translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-primary/10 rounded-full text-xs px-2 border"
              >
                {stack}
              </span>
            ))}
          </div>

          <Link
            href={`project/${index}`}
            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-flex items-center gap-1 translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 "
          >
            Read more <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
