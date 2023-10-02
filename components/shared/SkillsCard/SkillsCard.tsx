import React, { FunctionComponent, ReactNode } from "react";
import Skill from "../Skill/Skill";
import { twMerge } from "tailwind-merge";
import LottieContainer from "../../ui/LottieContainer/LottieContainer";
import Fade from "@/components/ui/Fade/Fade";

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
    <div className="flex flex-col gap-7">
      <p className="text-center text-2xl">{title}</p>
      <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2">
        <Fade direction="right" className="md:order-last">
          <div className="grid grid-cols-auto-skills gap-y-3">
            {skills.map((icon) => (
              <Skill
                className="mx-auto w-[80px]"
                key={icon.name}
                title={icon.name}
                src={icon.icon}
              />
            ))}
          </div>
        </Fade>
        <Fade direction="left" className="mx-auto max-w-[75%] md:max-w-[85%]">
          <LottieContainer
            animationData={animation}
            loop={true}
          ></LottieContainer>
        </Fade>
      </div>
    </div>
  );
};

export default SkillsCard;
