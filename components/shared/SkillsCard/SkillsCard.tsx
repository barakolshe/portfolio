import { FunctionComponent, ReactNode } from "react";
import Skill from "../Skill/Skill";
import { twMerge } from "tailwind-merge";
import LottieContainer from "../../ui/LottieContainer/LottieContainer";

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
            "mx-auto flex w-[100%] flex-col justify-start gap-3 align-middle lg:w-[49%]",
            className,
          )}
        >
          <div className="grid grid-cols-auto-skills gap-y-3">
            {skills.map((icon) => (
              <Skill
                className="mx-auto w-[80px]"
                key={icon.name}
                title={icon.name}
              >
                {icon.icon}
              </Skill>
            ))}
          </div>
        </div>
        <div className="lottie-width mx-auto">
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
