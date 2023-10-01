import { Card, CardHeader, CardTitle } from "@/components/ui/Card/Card";
import { FunctionComponent } from "react";

interface ProjectCardProps {}

const ProjectCard: FunctionComponent<ProjectCardProps> = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Playit</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
