import ProjectCard from "@/components/shared/ProjectCard/ProjectCard";
import { FunctionComponent } from "react";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div className="pt-3">
      <p className="title">Projects</p>
      <div className="container grid grid-cols-1 gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
