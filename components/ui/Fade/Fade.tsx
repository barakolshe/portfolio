"use client";
import clsx from "clsx";
import React, { FunctionComponent, ReactNode } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type direction = "up" | "down" | "left" | "right";

type FadeProps = Omit<IntersectionOptions, "rootMargin & triggerOnce"> & {
  direction: direction;
  bottomMargin?: string;
  children: ReactNode;
  className?: string;
};

const getDirection = (direction: direction) => {
  let common = "opacity-0";
  switch (direction) {
    case "up":
      return clsx(
        common,
        "-translate-y-fade-translate-mobile md:-translate-y-fade-translate-desktop",
      );
    case "down":
      return clsx(
        common,
        "translate-y-fade-translate-mobile md:translate-y-fade-translate-desktop",
      );
    case "right":
      return clsx(
        common,
        "translate-x-fade-translate-mobile md:translate-x-fade-translate-desktop",
      );
    case "left":
      return clsx(
        common,
        "-translate-x-fade-translate-mobile md:-translate-x-fade-translate-desktop",
      );
    default:
      return clsx(
        common,
        "translate-x-fade-translate-mobile md:translate-x-fade-translate-desktop",
      );
  }
};

const Fade: FunctionComponent<FadeProps> = ({
  direction,
  bottomMargin = "0px",
  className,
  children,
  ...intersectionOptions
}) => {
  const [animationClassName, setAnimationClassName] = React.useState("");
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px ${bottomMargin} 0px`,
    ...intersectionOptions,
  });

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
