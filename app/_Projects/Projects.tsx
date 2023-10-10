import ProjectCard from "@/components/shared/ProjectCard/ProjectCard";
import { projects } from "@/config/config";
import { FunctionComponent } from "react";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div className="flex flex-col gap-section-spacing">
      <p className="title">Projects</p>
      <div className="container grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            githubLink={project.githubLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
