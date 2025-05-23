import {
  Card,
  CardDate,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import Fade from "@/components/ui/Fade/Fade";
import Image from "next/image";
import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";

interface ExperienceCardProps {
  icon: string;
  place: string;
  title: string;
  description: string;
  dates: string;
  className?: string;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  icon,
  place,
  title,
  description,
  dates,
  className,
}) => {
  return (
    <Card className={twMerge(className, "")}>
      <CardHeader className="space-y-0 pb-6">
        <Image
          className="mx-auto mb-1"
          src={icon}
          alt="IDF Aman"
          height={40}
          width={40}
        />
        <CardTitle className="text-center">{place}</CardTitle>
        <p className="mt-[0px] text-center text-lg leading-7 text-foreground">
          FullStack developer
        </p>
        <p className="whitespace-pre-line text-xs">{description}</p>
      </CardHeader>
      <CardFooter>
        <CardDate>{dates}</CardDate>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
