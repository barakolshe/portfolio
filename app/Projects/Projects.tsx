import ProjectCard from "@/components/shared/ProjectCard/ProjectCard";
import { FunctionComponent } from "react";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div>
      <p className="title">Projects</p>
      <ProjectCard />
    </div>
  );
};

export default Projects;
