import { Suspense } from "react";
import FetchProjects from "./fetch-projects";
import Loader from "../kokonutui/loader";
import { SectionHeader } from "../section-header";

export default function ProjectsSection() {
  return (
    <section className=" py-16 md:py-32 ">
      <div className="container border-t px-6">
        <SectionHeader
          title="Portfolio"
          text="My Selected Work"
          description="A showcase of projects that blend creativity with technical excellence. From concept to deployment, each piece represents a commitment to quality and innovation."
        />

        <Suspense
          fallback={
            <Loader
              title="Fetching Projects"
              subtitle="Please wait while we fetch projects"
            />
          }
        >
          <FetchProjects />
        </Suspense>
      </div>
    </section>
  );
}
