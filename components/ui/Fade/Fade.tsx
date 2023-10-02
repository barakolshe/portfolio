"use client";
import React, { FunctionComponent, ReactNode } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type direction = "up" | "down" | "left" | "right";

interface FadeProps extends IntersectionOptions {
  direction: direction;
  children: ReactNode;
  className?: string;
}

const Fade: FunctionComponent<FadeProps> = ({
  direction,
  className,
  children,
  ...intersectionOptions
}) => {
  const [animationClassName, setAnimationClassName] = React.useState("");
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    ...intersectionOptions,
  });

  const getDirection = (direction: direction) => {
    switch (direction) {
      case "up":
        return "opacity-0 -translate-y-full";
      case "down":
        return "opacity-0 translate-y-full";
      case "right":
        return "opacity-0 translate-x-full";
      case "left":
        return "opacity-0 -translate-x-full";
      default:
        return "opacity-0 translate-x-full";
    }
  };

  React.useEffect(() => {
    if (animationClassName !== "" && inView) {
      setAnimationClassName("");
    }
  }, [inView, animationClassName]);

  React.useEffect(() => {
    setAnimationClassName(getDirection(direction));
  }, [direction]);

  return (
    <div
      ref={viewRef}
      className={twMerge(
        "transition-[transform,opacity] duration-fade",
        animationClassName !== ""
          ? animationClassName
          : "translate-x-[0%] translate-y-[0%]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Fade;
