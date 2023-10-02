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
    <div className="flex flex-col gap-3 px-[20px] lg:px-[100px]">
      <p className="title">Skills</p>
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
  );
};

export default Skills;
