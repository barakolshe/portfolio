import { Badge } from "@/components/ui/Badge/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import { FunctionComponent } from "react";

interface ProjectCardProps {}

const ProjectCard: FunctionComponent<ProjectCardProps> = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Playit</CardTitle>
        <Badge variant="secondary">Java</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs">
          An android studio project that allows players to play guitar. the app
          listens and then rates the performance.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
