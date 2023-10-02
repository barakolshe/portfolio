"use client";
import React, { FunctionComponent } from "react";

interface ScrollToTopProps {}

const ScrollToTop: FunctionComponent<ScrollToTopProps> = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollToTop;
