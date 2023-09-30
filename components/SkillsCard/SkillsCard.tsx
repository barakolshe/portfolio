import { FunctionComponent, ReactNode } from "react";
import Skill from "../Skill/Skill";
import { twMerge } from "tailwind-merge";

type IconType = {
  name: string;
  icon: ReactNode;
};

interface SkillsCardProps {
  skills: IconType[];
  title: string;
  className: string;
}

const SkillsCard: FunctionComponent<SkillsCardProps> = ({
  title,
  skills,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "mx-auto flex flex-col justify-start align-middle gap-3",
        className
      )}
    >
      <p className="text-center text-2xl">{title}</p>
      <div className="grid grid-cols-auto-skills gap-y-3">
        {skills.map((icon) => (
          <Skill className="w-[80px]" key={icon.name} title={icon.name}>
            {icon.icon}
          </Skill>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
