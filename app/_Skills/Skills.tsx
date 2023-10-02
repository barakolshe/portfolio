import { FunctionComponent } from "react";

import SkillsCard from "@/components/shared/SkillsCard/SkillsCard";
import { skills } from "@/config/config";

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  return (
    <div className="gap-section-spacing flex flex-col px-[20px] lg:px-[100px]">
      <p className="title">Skills</p>
      <div className="gap-inner-section-spacing flex flex-col">
        {skills.map((skill) => (
          <SkillsCard
            key={skill.title}
            className="w-[100%]"
            title={skill.title}
            skills={skill.skills}
            animation={JSON.parse(JSON.stringify(skill.animation))}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
