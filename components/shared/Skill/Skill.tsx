import { FunctionComponent, ReactNode } from "react";
import Icon from "../../ui/Icon/Icon";
import { twMerge } from "tailwind-merge";

interface SkillProps {
  className: string;
  children: ReactNode;
  title: string;
}

const Skill: FunctionComponent<SkillProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col align-middle", className)}>
      <Icon>{children}</Icon>
      <p className="whitespace-nowrap text-center">{title}</p>
    </div>
  );
};

export default Skill;
