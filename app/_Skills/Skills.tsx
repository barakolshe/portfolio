import { FunctionComponent } from "react";
import { frontendIcons } from "@/assets/icons/icons";
import * as frontendLottie from "@/assets/lottie/frontend.json";
import SkillsCard from "@/components/SkillsCard/SkillsCard";
import LottieContainer from "@/components/ui/Button/LottieContainer/LottieContainer";

const skills = [
  {
    title: "Frontend",
    skills: frontendIcons,
    animation: frontendLottie,
  },
];

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  return (
    <div className="flex flex-col gap-3 px-[100px]">
      <p className="text-3xl text-center font-semibold">Skills</p>
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-3"
        >
          <SkillsCard
            className="w-[100%]"
            title={skill.title}
            skills={skill.skills}
          />
          <div className="mx-auto w-[100%] ">
            <LottieContainer
              animationData={skill.animation}
              loop={true}
            ></LottieContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
