import { FunctionComponent, ReactNode } from "react";
import Icon from "../../ui/Icon/Icon";
import { twMerge } from "tailwind-merge";

interface SkillProps {
  src: string;
  title: string;
  className?: string;
}

const Skill: FunctionComponent<SkillProps> = ({ src, title, className }) => {
  return (
    <div className={twMerge("flex flex-col align-middle", className)}>
      <Icon src={src} alt={title} />
      <p className="whitespace-nowrap text-center">{title}</p>
    </div>
  );
};

export default Skill;
