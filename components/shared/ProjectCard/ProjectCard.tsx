import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/Card/Card";
import Image from "next/image";
import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  githubLink?: string;
  siteLink?: string;
  className?: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  techStack,
  description,
  githubLink,
  siteLink,
  className,
}) => {
  return (
    <Card className={twMerge(className, "relative")}>
      <CardHeader>
        <CardTitle className="">{title}</CardTitle>
        <div className="flex flex-row flex-wrap gap-1">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-20">
        <p className="whitespace-pre-line text-xs">{description}</p>
        <div className="absolute bottom-6 left-0 flex w-full flex-row justify-center gap-2 pt-3">
          {githubLink && (
            <a href={githubLink}>
              <Button size="icon" className="bg-github hover:bg-github-hover">
                <Image
                  src="/icons/github.svg"
                  alt="Github"
                  height={15}
                  width={15}
                />
              </Button>
            </a>
          )}
          {siteLink && (
            <a href={siteLink}>
              <Button
                size="icon"
                className="bg-internet hover:bg-internet-hover"
              >
                <Image
                  src="/icons/internet.svg"
                  alt="Internet"
                  height={15}
                  width={15}
                />
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
