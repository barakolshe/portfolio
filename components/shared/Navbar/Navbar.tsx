"use client";
import React, { FunctionComponent } from "react";
import useTopbarScroll from "@/hooks/useTopbarScroll";
import clsx from "clsx";
import { greetings } from "@/config/config";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { scrollingUp, onTop } = useTopbarScroll();

  return (
    <div
      className={clsx(
        "fixed z-10 w-full bg-inherit transition-[transform,background-color] duration-300",
        scrollingUp || onTop ? "translate-y-[0%]" : "-translate-y-full",
        { "bg-navbar-scroll shadow-topbar-hover": !onTop },
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

export default Navbar;
