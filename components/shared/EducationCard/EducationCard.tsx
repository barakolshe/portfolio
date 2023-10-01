import { FunctionComponent } from "react";
import {
  Card,
  CardContent,
  CardDate,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/Card/Card";
import { twMerge } from "tailwind-merge";
import { Badge } from "@/components/ui/Badge/Badge";

interface EducationCardProps {
  place: string;
  title: string;
  achievements: string[];
  description: string;
  dates: string;
  className?: string;
}

const EducationCard: FunctionComponent<EducationCardProps> = ({
  place,
  title,
  achievements,
  description,
  dates,
  className,
}) => {
  return (
    <Card className={twMerge(className, "")}>
      <CardHeader>
        <CardTitle className="text-primary">{place}</CardTitle>
        <CardDescription>{title}</CardDescription>
        {achievements.map((achievement) => (
          <Badge key={achievement}>{achievement}</Badge>
        ))}
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line text-2xs">{description}</p>
      </CardContent>
      <CardFooter className="absolute bottom-[3px] flex w-full flex-row justify-end px-4">
        <CardDate className="text-3xs">{dates}</CardDate>
      </CardFooter>
    </Card>
  );
};

export default EducationCard;
