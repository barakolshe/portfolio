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
          <p
            key={achievement}
            className="w-max rounded-sm bg-primary px-[6px] py-[5.6px] text-3xs font-semibold leading-2 text-white"
          >
            {achievement}
          </p>
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
