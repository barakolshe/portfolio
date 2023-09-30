import Skill from "@/components/Skill/Skill";
import { FunctionComponent } from "react";
import { frontendIcons } from "@/assets/icons/icons";

const skills = [
  {
    path: "/icons/react.svg",
    title: "React",
  },
];

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  return (
    <div>
      <p className="text-3xl text-center font-semibold">Skills</p>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col justify-between align-middle w-[50%]">
          <p className="text-center text-2xl">Full stack development</p>
          <div className="flex flex-row">
            {frontendIcons.map((icon) => icon.icon)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
