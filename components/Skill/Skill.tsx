import { FunctionComponent } from "react";
import Icon from "../ui/Button/Icon/Icon";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SkillProps {
  path: string | StaticImport;
  title: string;
}

const Skill: FunctionComponent<SkillProps> = ({ path, title }) => {
  return (
    <div className="flex flex-col align-middle">
      <Icon path={path} alt={title} />
      <p className="text-center">{title}</p>
    </div>
  );
};

export default Skill;
