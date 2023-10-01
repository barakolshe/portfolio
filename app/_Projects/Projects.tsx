import ProjectCard from "@/components/shared/ProjectCard/ProjectCard";
import { FunctionComponent } from "react";

interface ProjectsProps {}

const projects = [
  {
    title: "Playit",
    techStack: ["Java", "Android Studio"],
    description:
      "An android studio project that allows players to play guitar.\n the applistens and then rates the performance.",
    githubLink: "bla",
  },
];

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div className="pt-3">
      <p className="title">Projects</p>
      <div className="container grid grid-cols-1 gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
