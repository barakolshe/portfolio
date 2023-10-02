"use client";
import React, { FunctionComponent } from "react";
import useTopbarScroll from "@/hooks/useTopbarScroll";
import clsx from "clsx";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { scrollingUp, onTop } = useTopbarScroll();
  console.log(scrollingUp, onTop);

  return (
    <div
      className={clsx(
        "fixed z-10 flex h-[--navbar-height] w-full flex-col justify-center bg-inherit py-4 transition-[transform,background-color] duration-300",
        scrollingUp ? "translate-y-[0%]" : "-translate-y-full",
        { "bg-navbar-scroll shadow-topbar-hover": !onTop },
      )}
    >
      <div className="container">
        <h1 className="font-brand text-3xl font-normal text-white">
          Barak Olshe
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
