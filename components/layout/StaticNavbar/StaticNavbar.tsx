"use client";
import React, { FunctionComponent } from "react";
import { greetings } from "@/config/config";
import { cn } from "@/lib/utils";

interface StaticNavbarProps {
  className?: string;
}

const StaticNavbar: FunctionComponent<StaticNavbarProps> = ({ className }) => {
  return (
    <div className={cn("w-full ", className)}>
      <div className="container py-4">
        <h1 className="font-brand text-3xl font-normal text-white">
          {greetings.name}
        </h1>
      </div>
    </div>
  );
};

export default StaticNavbar;
