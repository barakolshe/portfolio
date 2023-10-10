"use client";
import React, { FunctionComponent } from "react";
import useTopbarScroll from "@/hooks/useTopbarScroll";
import { greetings } from "@/config/config";
import { cn } from "@/lib/utils";

interface AnimatedNavbarProps {
  className?: string;
}

const AnimatedNavbar: FunctionComponent<AnimatedNavbarProps> = ({
  className,
}) => {
  const { scrollingUp, onTop } = useTopbarScroll();

  return (
    <div
      className={cn(
        "fixed z-10 w-full transition-[transform,background-color] duration-300",
        scrollingUp || onTop ? "translate-y-[0%]" : "-translate-y-full",
        { "bg-navbar-scroll shadow-topbar-hover": !onTop },
        className,
      )}
    >
      <div className="container py-4">
        <h1 className="font-brand text-3xl font-normal text-white">
          {greetings.name}
        </h1>
      </div>
    </div>
  );
};

export default AnimatedNavbar;
