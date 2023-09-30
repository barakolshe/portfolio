import { FunctionComponent, ReactNode } from "react";
import Skill from "../Skill/Skill";
import { twMerge } from "tailwind-merge";
import LottieContainer from "../ui/LottieContainer/LottieContainer";

type IconType = {
  name: string;
  icon: ReactNode;
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
    <>
      <p className="text-center text-2xl">{title}</p>
      <div className="flex flex-row-reverse flex-wrap gap-x-3">
        <div
          className={twMerge(
            "mx-auto flex flex-col justify-start align-middle gap-3 w-[100%] lg:w-[49%]",
            className
          )}
        >
          <div className="grid grid-cols-auto-skills gap-y-3">
            {skills.map((icon) => (
              <Skill
                className="w-[80px] mx-auto"
                key={icon.name}
                title={icon.name}
              >
                {icon.icon}
              </Skill>
            ))}
          </div>
        </div>
        <div className="mx-auto lottie-width">
          <LottieContainer
            animationData={animation}
            loop={true}
          ></LottieContainer>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
