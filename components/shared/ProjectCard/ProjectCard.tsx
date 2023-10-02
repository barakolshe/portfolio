import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/Card/Card";
import Fade from "@/components/ui/Fade/Fade";
import Image from "next/image";
import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  githubLink?: string;
  projectLink?: string;
  className?: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  techStack,
  description,
  githubLink,
  projectLink,
  className,
}) => {
  return (
    <Card className={twMerge(className, "")}>
      <CardHeader>
        <CardTitle className="">{title}</CardTitle>
        <div className="flex flex-row gap-1">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line text-xs">{description}</p>
        <div className="flex flex-row justify-center gap-2 pt-3">
          {githubLink && (
            <Button size="icon" className="bg-github hover:bg-github-hover">
              <Image
                src="/icons/github.svg"
                alt="Github"
                height={15}
                width={15}
              />
            </Button>
          )}
          {projectLink && (
            <Button size="icon" className="bg-github hover:bg-github-hover">
              <Image
                src="/icons/github.svg"
                alt="Github"
                height={15}
                width={15}
              />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
