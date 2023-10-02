import React, { FunctionComponent, ReactNode } from "react";
import Skill from "../Skill/Skill";
import LottieContainer from "../../ui/LottieContainer/LottieContainer";
import { twMerge } from "tailwind-merge";

type IconType = {
  name: string;
  icon: string;
};

interface SkillsCardProps {
  skills: IconType[];
  title: string;
  className: string;
  animation: any;
}

const SkillsCard: FunctionComponent<SkillsCardProps> = ({
  title,
  skills,
  animation,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col gap-7", className)}>
      <p className="text-center text-2xl">{title}</p>
      <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2">
        <div className="mb-auto  grid grid-cols-auto-skills gap-y-3 md:order-last">
          {skills.map((icon) => (
            <Skill
              className="mx-auto w-[80px]"
              key={icon.name}
              title={icon.name}
              src={icon.icon}
            />
          ))}
        </div>
        <div className="mx-auto max-w-[75%] md:max-w-[85%]">
          <LottieContainer
            animationData={animation}
            loop={true}
          ></LottieContainer>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
