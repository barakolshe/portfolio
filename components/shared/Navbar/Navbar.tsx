"use client";
import "./Navbar.css";
import React, { FunctionComponent } from "react";
import Headroom from "headroom.js";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("portfolio-navbar")!);
    // initialise
    headroom.init();
  });

  return (
    <div
      id="portfolio-navbar"
      className="bg-red container flex h-[--navbar-height] flex-col justify-center py-4"
    >
      <h1 className="font-brand text-3xl font-normal text-white">
        Barak Olshe
      </h1>
    </div>
  );
};

export default Navbar;
