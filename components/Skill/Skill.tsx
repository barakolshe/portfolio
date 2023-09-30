import { FunctionComponent, ReactNode } from "react";
import Icon from "../ui/Icon/Icon";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
      <p className="text-center whitespace-nowrap">{title}</p>
    </div>
  );
};

export default Skill;
