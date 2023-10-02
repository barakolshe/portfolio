import { FunctionComponent } from "react";
import {
  frontendIcons,
  backendIcons,
  developmentCycleIcons,
} from "@/assets/icons/icons";
import * as frontendLottie from "@/assets/lottie/frontend.json";
import * as backendLottie from "@/assets/lottie/backend.json";
import * as developmentCycleLottie from "@/assets/lottie/engineer.json";
import SkillsCard from "@/components/shared/SkillsCard/SkillsCard";

const skills = [
  {
    title: "Frontend",
    skills: frontendIcons,
    animation: frontendLottie,
  },
  {
    title: "Backend",
    skills: backendIcons,
    animation: backendLottie,
  },
  {
    title: "Development Cycle",
    skills: developmentCycleIcons,
    animation: developmentCycleLottie,
  },
];

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
