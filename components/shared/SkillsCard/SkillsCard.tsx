"use client";
import React, { FunctionComponent, ReactNode } from "react";
import Skill from "../Skill/Skill";
import { twMerge } from "tailwind-merge";
import LottieContainer from "../../ui/LottieContainer/LottieContainer";
import { useInView } from "react-intersection-observer";

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
  // Using gotInView to check if the element one time
  const [gotInView, setGotInView] = React.useState(false);
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (!gotInView && inView) {
      setGotInView(true);
    }
  }, [inView, gotInView]);

  return (
    <>
      <p className="text-center text-2xl">{title}</p>
      <div className="flex flex-row-reverse flex-wrap gap-x-3" ref={ref}>
        <div
          className={twMerge(
            "mx-auto flex w-[100%] flex-col justify-start gap-3 align-middle lg:w-[49%]",
            className,
          )}
        >
          <div
            className={`duration-fade  grid grid-cols-auto-skills gap-y-3 transition-all ${
              !gotInView ? "translate-x-[100%] opacity-0" : "translate-x-[0%]"
            }`}
          >
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
        <div
          className={`lottie-width duration-fade mx-auto transition-all ${
            !gotInView ? "-translate-x-[100%] opacity-0" : "translate-x-[0%]"
          }`}
        >
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
